import React, { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Box, Float, Environment, PerspectiveCamera, useScroll, Stars, Loader } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'
const Globe3D = React.lazy(() => import('./Globe3D'))
import './Hero.css'

// Add error handling for Three.js components
const SafeCanvas = ({ children, ...props }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) return null;

  try {
    return (
      <React.Suspense fallback={null}>
        <Canvas
          {...props}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
          }}
          dpr={[1, 2]}
          onCreated={({ gl }) => {
            gl.domElement.addEventListener('webglcontextlost', (event) => {
              event.preventDefault();
              console.warn('WebGL Context Lost - triggering fallback');
              setHasError(true);
            }, false);
          }}
          onError={(error) => {
            console.error("Three.js Canvas Error:", error);
            setHasError(true);
          }}
        >
          {children}
        </Canvas>
      </React.Suspense>
    );
  } catch (error) {
    console.error('Three.js Canvas initialization error:', error);
    return null;
  }
};

const HeroSubtitle = () => {
  return (
    <div className="hero-subtitle">
      React Developer · Next.js · Mobile Apps · AI SaaS · Full Stack
    </div>
  );
};

const SafeFloatingWorld = (props) => {
  try {
    return <FloatingWorld {...props} />;
  } catch (error) {
    console.error('FloatingWorld error:', error);
    return null;
  }
};

const SafeOrbitControls = (props) => {
  try {
    return <OrbitControls {...props} />;
  } catch (error) {
    console.error('OrbitControls error:', error);
    return null;
  }
};

const SafeEnvironment = (props) => {
  try {
    return <Environment {...props} />;
  } catch (error) {
    console.error('Environment error:', error);
    return null;
  }
};

// Physics constants
const DRAG = 0.95;
const HOOK_STIFFNESS = 0.02;
const MOUSE_REPULSION = 1.5;
const MAX_VELOCITY = 0.5;

// Reusable physics object component
const GravityObject = ({
  children,
  position = [0, 0, 0],
  mass = 1,
  homePosition = [0, 0, 0],
  repulsionStrength = 1
}) => {
  const meshRef = useRef();
  const positionRef = useRef(new THREE.Vector3(...position));
  const velocityRef = useRef(new THREE.Vector3(0, 0, 0));
  const homeRef = useRef(new THREE.Vector3(...homePosition));
  const { viewport, mouse } = useThree();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // 1. Calculate forces
    const force = new THREE.Vector3(0, 0, 0);

    // Spring force towards home position (Hooke's Law)
    const displacement = new THREE.Vector3().subVectors(positionRef.current, homeRef.current);
    force.add(displacement.multiplyScalar(-HOOK_STIFFNESS));

    // Mouse repulsion
    // Convert 2D mouse coords to 3D world coords roughly
    const mousePos = new THREE.Vector3(
      (mouse.x * viewport.width) / 2,
      (mouse.y * viewport.height) / 2,
      0
    );

    const distToMouse = positionRef.current.distanceTo(mousePos);
    if (distToMouse < 4) {
      const repulsionDir = new THREE.Vector3().subVectors(positionRef.current, mousePos).normalize();
      // Inverse square law-ish for repulsion
      const repulsion = repulsionDir.multiplyScalar((MOUSE_REPULSION * repulsionStrength) / (distToMouse * distToMouse + 0.1));
      force.add(repulsion);
    }

    // Random slight turbulence
    force.add(new THREE.Vector3(
      (Math.random() - 0.5) * 0.02,
      (Math.random() - 0.5) * 0.02,
      (Math.random() - 0.5) * 0.02
    ));

    // 2. Verlet Integration (Velocity Verlet simplified)
    // a = F / m
    const acceleration = force.divideScalar(mass);

    // v = v + a * dt
    velocityRef.current.add(acceleration);

    // Apply drag/damping
    velocityRef.current.multiplyScalar(DRAG);

    // Limit max velocity
    velocityRef.current.clampLength(0, MAX_VELOCITY);

    // p = p + v
    positionRef.current.add(velocityRef.current);

    // Apply rotation based on movement
    meshRef.current.rotation.x += velocityRef.current.y * 0.1;
    meshRef.current.rotation.y += velocityRef.current.x * 0.1;

    // Update mesh position
    meshRef.current.position.copy(positionRef.current);
  });

  const [hovered, setHover] = useState(false);
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    return () => { document.body.style.cursor = 'auto'; }
  }, [hovered]);

  return (
    <group
      ref={meshRef}
      position={position}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={hovered ? 1.2 : 1}
    >
      {children}
    </group>
  );
};

// New Physics-based Floating World
const FloatingWorld = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Gentle global rotation for the whole system
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.05) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Core - The User/Developer */}
      <GravityObject position={[0, 0, 0]} homePosition={[0, 0, 0]} mass={5} repulsionStrength={0.5}>
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
          <Sphere args={[1.5, 64, 64]}>
            <MeshDistortMaterial
              color="#00ffff"
              emissive="#0044aa"
              emissiveIntensity={0.5}
              roughness={0.1}
              metalness={0.9}
              distort={0.3}
              speed={1.5}
            />
          </Sphere>
          {/* Orbital Rings around core */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2.2, 0.02, 16, 100]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
          </mesh>
          <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
            <torusGeometry args={[2.5, 0.02, 16, 100]} />
            <meshBasicMaterial color="#00ffff" transparent opacity={0.2} />
          </mesh>
        </Float>
      </GravityObject>

      {/* Tech Stack Floating Elements */}
      {/* React */}
      <GravityObject position={[-3, 2, -1]} homePosition={[-3, 2, -1]} mass={1.5}>
        <Float speed={4} rotationIntensity={1} floatIntensity={1}>
          <mesh>
            <octahedronGeometry args={[0.5, 0]} />
            <meshStandardMaterial color="#61dafb" emissive="#61dafb" emissiveIntensity={0.8} />
          </mesh>
        </Float>
      </GravityObject>

      {/* Node/Backend */}
      <GravityObject position={[3, -1, 1]} homePosition={[3, -1, 1]} mass={2}>
        <Float speed={3} rotationIntensity={1} floatIntensity={1}>
          <mesh>
            <dodecahedronGeometry args={[0.6, 0]} />
            <meshStandardMaterial color="#68a063" emissive="#68a063" emissiveIntensity={0.6} />
          </mesh>
        </Float>
      </GravityObject>

      {/* AI/Brain */}
      <GravityObject position={[2, 2.5, -2]} homePosition={[2, 2.5, -2]} mass={1}>
        <Float speed={5} rotationIntensity={2} floatIntensity={0.5}>
          <mesh>
            <icosahedronGeometry args={[0.4, 0]} />
            <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={0.8} />
          </mesh>
        </Float>
      </GravityObject>

      {/* Design/Creative */}
      <GravityObject position={[-2.5, -2, 0]} homePosition={[-2.5, -2, 0]} mass={1.2}>
        <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
          <mesh>
            <torusKnotGeometry args={[0.3, 0.1, 64, 8]} />
            <meshStandardMaterial color="#ff9900" emissive="#ff9900" emissiveIntensity={0.6} />
          </mesh>
        </Float>
      </GravityObject>

      {/* Background Particles */}
      {[...Array(20)].map((_, i) => {
        const x = (Math.random() - 0.5) * 15;
        const y = (Math.random() - 0.5) * 15;
        const z = (Math.random() - 0.5) * 10 - 5;
        return (
          <GravityObject
            key={i}
            position={[x, y, z]}
            homePosition={[x, y, z]}
            mass={0.5}
            repulsionStrength={2}
          >
            <mesh>
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
            </mesh>
          </GravityObject>
        );
      })}
    </group>
  );
};

// Simplified Camera Rig
const FeatureCamera = () => {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  useFrame(() => {
    // Parallax effect based on mouse position
    camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2 + 1, 8), 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Add a slight delay for better loading experience
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, [])

  return (
    <section id="home" className="hero-section">
      <div className="hero-3d-scene">
        <Suspense fallback={null}>
          <Globe3D />
        </Suspense>
      </div>

      <div className="hero-overlay">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span>⚡ High-Value Developer</span>
          </motion.div>

          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            style={{ borderColor: 'rgba(52, 211, 153, 0.3)', background: 'rgba(52, 211, 153, 0.06)' }}
          >
            <span className="availability-dot"></span>
            <span>Available for remote work</span>
          </motion.div>

          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Hey, I'm <span className="name-highlight">Saim</span>. I build Web & App products that <span className="action-highlight">work in production.</span>
          </motion.h1>

          <HeroSubtitle />

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Work →</span>
            </motion.a>
            <motion.a
              href="/Saim_Adeel_CV.pdf"
              download="Saim_Adeel_CV.pdf"
              target="_blank"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download CV ↓</span>
            </motion.a>
          </motion.div>



        </motion.div>
      </div>

      <motion.div
        className="scroll-prompt"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="scroll-icon"></div>
        </motion.div>
        <span>Explore the experience</span>
      </motion.div>
      <Loader 
        containerStyles={{ background: '#000' }} 
        innerStyles={{ background: 'rgba(0, 255, 255, 0.2)', width: '300px', height: '4px', borderRadius: '2px' }}
        barStyles={{ background: '#00ffff', height: '4px', borderRadius: '2px' }}
        dataInterpolation={(p) => `Loading Cinematic Experience ${p.toFixed(2)}%`}
        dataStyles={{ color: '#00ffff', fontSize: '1rem', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '20px' }}
      />
    </section>
  )
}

export default Hero
