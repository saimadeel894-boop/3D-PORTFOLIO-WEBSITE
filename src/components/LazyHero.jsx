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
    const checkWebGL = async () => {
      // Add a small delay to ensure DOM is ready
      await new Promise(resolve => setTimeout(resolve, 100));

      const isWebGL = detectWebGL();
      setWebglSupported(isWebGL);

      // Only enable 3D if WebGL is supported and browser can handle it
      if (isWebGL) {
        // Check for mobile devices and low-end hardware
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const isLowEndDevice = navigator.hardwareConcurrency < 4 ||
          (navigator.deviceMemory && navigator.deviceMemory < 4);

        // For mobile or low-end devices, we might want to skip 3D for better performance
        // But we'll still allow it with a warning system
        setCanRender3D(true);
      } else {
        setCanRender3D(false);
      }

      setIsChecking(false);
    };

    checkWebGL();
  }, []);

  // Handler for import errors
  const handleLoadError = () => {
    console.warn("Failed to load 3D Hero component, switching to fallback.");
    setCanRender3D(false);
  }

  // If still checking, show fallback
  if (isChecking) {
    return <HeroFallback />;
  }

  // If WebGL is not supported, show fallback
  if (!webglSupported) {
    return <HeroFallback />;
  }

  // If WebGL is supported, try to render 3D with fallback
  return (
    <ErrorBoundary fallback={<HeroFallback />}>
      <Suspense fallback={<HeroFallback />}>
        {canRender3D ? <Hero3D /> : <HeroFallback />}
      </Suspense>
    </ErrorBoundary>
  );
};

export default LazyHero;