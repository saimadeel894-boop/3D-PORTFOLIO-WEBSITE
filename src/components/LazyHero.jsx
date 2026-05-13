import React, { useState, useEffect, lazy, Suspense } from 'react';
import { detectWebGL } from '../utils/webglDetector.js';
import LoadingSpinner from './LoadingSpinner.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import HeroFallback from './HeroFallback.jsx';

// Lazy load the 3D hero component
const Hero3D = lazy(() =>
  import('./Hero.jsx').then(module => ({ default: module.default }))
    .catch(() => ({ default: HeroFallback }))
);

const LazyHero = () => {
  const [canRender3D, setCanRender3D] = useState(false);
  const [webglSupported, setWebglSupported] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const checkWebGL = async () => {
      // Check if we're in a browser environment
      if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        if (isMounted) {
          setWebglSupported(false);
          setCanRender3D(false);
          setIsChecking(false);
        }
        return;
      }

      try {
        // Add a small delay to ensure DOM is ready
        await new Promise(resolve => setTimeout(resolve, 100));

        const isWebGL = detectWebGL();

        if (!isMounted) return;
        setWebglSupported(isWebGL);

        // Only enable 3D if WebGL is supported and browser can handle it
        if (isWebGL) {
          // Check for mobile devices and low-end hardware
          const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

          // Hardware concurrency (CPU cores)
          const cpuCores = navigator.hardwareConcurrency || 4;

          // Device memory (if supported by browser)
          const memory = navigator.deviceMemory || 4;

          // Be more conservative on mobile or low-end hardware
          if (isMobile && (cpuCores < 2 || memory < 2)) {
            setCanRender3D(false);
          } else if (cpuCores < 2 || memory < 2) {
            setCanRender3D(false);
          } else {
            setCanRender3D(true);
          }
        } else {
          setCanRender3D(false);
        }
      } catch (error) {
        console.error("Error checking WebGL capabilities:", error);
        if (isMounted) {
          setWebglSupported(false);
          setCanRender3D(false);
        }
      } finally {
        if (isMounted) setIsChecking(false);
      }
    };

    checkWebGL();
    return () => { isMounted = false; };
  }, []);

  // If still checking, show fallback UI
  if (isChecking) {
    return <HeroFallback />;
  }

  // If WebGL is not supported, or 3D is disabled for performance, show fallback
  if (!webglSupported || !canRender3D) {
    return <HeroFallback />;
  }

  // If WebGL is supported and enabled, try to render 3D with ErrorBoundary
  return (
    <ErrorBoundary fallback={<HeroFallback />}>
      <Suspense fallback={<HeroFallback />}>
        <Hero3D />
      </Suspense>
    </ErrorBoundary>
  );
};

export default LazyHero;