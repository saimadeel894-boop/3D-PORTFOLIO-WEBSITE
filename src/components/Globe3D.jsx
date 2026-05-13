import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Globe3D = () => {
  const canvasRef = useRef(null);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  useEffect(() => {
    // WebGL Support Check
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
      } catch {
        return false;
      }
    };

    if (!checkWebGL()) {
      setIsWebGLSupported(false);
      return;
    }

    // Performance check for low-end devices
    const isMobileLowEnd =
      window.innerWidth < 768 &&
      (navigator.hardwareConcurrency <= 4 || (navigator.deviceMemory && navigator.deviceMemory <= 4));

    if (isMobileLowEnd) {
      setIsWebGLSupported(false);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: window.devicePixelRatio < 2,
      alpha: true,
      powerPreference: "high-performance",
      failIfMajorPerformanceCaveat: false
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // ResizeObserver fix
    const observer = new ResizeObserver(() => {
      if (!canvasRef.current) return;
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });
    observer.observe(canvasRef.current);

    // 3D UPGRADE - Premium Globe
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Wireframe globe with neon glow
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const globe = new THREE.Mesh(geometry, material);
    globeGroup.add(globe);

    // Inner solid glow
    const innerGeo = new THREE.SphereGeometry(1.8, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.06,
    });
    globeGroup.add(new THREE.Mesh(innerGeo, innerMat));

    // Orbital ring
    const ringGeo = new THREE.TorusGeometry(2.8, 0.008, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.3,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    globeGroup.add(ring);

    // Floating particles orbiting globe
    const particleGeo = new THREE.BufferGeometry();
    const PARTICLE_COUNT = window.innerWidth < 768 ? 40 : 120;
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = 2.5 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3]     = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    globeGroup.add(particles);

    let rafId;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      
      // Slow rotation
      globe.rotation.y += 0.002;
      ring.rotation.z += 0.001;
      particles.rotation.y += 0.001;
      
      renderer.render(scene, camera);
    };
    animate();

    // Pause animation when tab not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        animate();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  if (!isWebGLSupported) {
    return (
      <div style={{
        background: 'radial-gradient(ellipse at top, #1a0533 0%, #0a0e1a 60%)',
        width: '100%', height: '100%', position: 'fixed', zIndex: 0
      }} />
    );
  }

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        top: 0, 
        left: 0,
        pointerEvents: 'none',
        zIndex: 0
      }} 
    />
  );
};

export default Globe3D;
