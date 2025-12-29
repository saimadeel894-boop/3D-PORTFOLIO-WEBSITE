import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Box, Float, Environment, PerspectiveCamera, useScroll } from '@react-three/drei'
import { motion, useScroll as useFramerScroll, useTransform } from 'framer-motion'
import * as THREE from 'three'
import './Hero.css'

// Add error handling for Three.js components
const SafeCanvas = ({ children, ...props }) => {
  try {
    // Check if Canvas is available and WebGL is supported
    if (typeof window !== 'undefined' && window.WebGLRenderingContext) {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        console.warn('WebGL not supported, falling back to non-3D content');
        return null;
      }
    }
    
    return <Canvas {...props}>{children}</Canvas>;
  } catch (error) {
    console.error('Three.js Canvas error:', error);
    return null;
  }
};

const SafeFloatingWorkstation = (props) => {
  try {
    return <FloatingWorkstation {...props} />;
  } catch (error) {
    console.error('FloatingWorkstation error:', error);
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

// Futuristic floating workstation
const FloatingWorkstation = () => {
  const meshRef = useRef()
  const groupRef = useRef()
  const particlesRef = useRef()
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t * 0.3) * 0.1
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.1
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1
    }
    // Animate particles
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.2
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Enhanced main sphere with more dynamic material */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={meshRef} args={[1.2, 64, 64]} scale={1.5}>
          <MeshDistortMaterial
            color="#00ffff"
            attach="material"
            distort={0.4}
            speed={2.5}
            roughness={0.1}
            metalness={0.9}
            emissive="#00ffff"
            emissiveIntensity={0.5}
            transparent={true}
            opacity={0.8}
          />
        </Sphere>
      </Float>
      
      {/* Orbiting rings with enhanced glow */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.08, 16, 100]} />
        <meshStandardMaterial 
          color="#ff00ff" 
          emissive="#ff00ff" 
          emissiveIntensity={0.8} 
          metalness={0.9} 
          roughness={0.1}
        />
      </mesh>
      
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.8, 0.05, 16, 100]} />
        <meshStandardMaterial 
          color="#00ffff" 
          emissive="#00ffff" 
          emissiveIntensity={0.6} 
          metalness={0.9} 
          roughness={0.1}
        />
      </mesh>

      {/* Enhanced floating particles */}
      <group ref={particlesRef}>
        {[...Array(30)].map((_, i) => {
          const distance = 3 + (i % 5) * 0.5
          return (
            <Float 
              key={i} 
              speed={1.5 + i * 0.1} 
              rotationIntensity={0.5 + i * 0.1} 
              floatIntensity={1.5 + i * 0.1}
            >
              <mesh 
                position={[  
                  Math.sin((i / 30) * Math.PI * 2) * distance,
                  Math.cos((i / 30) * Math.PI * 2) * distance * 0.5,
                  Math.sin((i / 30) * Math.PI) * distance * 0.5
                ]}
              >
                <sphereGeometry args={[0.08, 8, 8]} />
                <meshStandardMaterial 
                  color={i % 3 === 0 ? "#00ffff" : i % 3 === 1 ? "#ff00ff" : "#ffff00"} 
                  emissive={i % 3 === 0 ? "#00ffff" : i % 3 === 1 ? "#ff00ff" : "#ffff00"}
                  emissiveIntensity={0.9}
                  metalness={0.8}
                  roughness={0.2}
                />
              </mesh>
            </Float>
          )
        })}
      </group>
      
      {/* Additional animated elements */}
      <mesh position={[0, 0, -2]}>
        <dodecahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial 
          color="#ffff00" 
          emissive="#ffff00" 
          emissiveIntensity={0.7} 
          metalness={0.9} 
          roughness={0.1}
        />
      </mesh>
      
      <mesh position={[2, 1.5, -1.5]}>
        <octahedronGeometry args={[0.2, 0]} />
        <meshStandardMaterial 
          color="#ff00ff" 
          emissive="#ff00ff" 
          emissiveIntensity={0.6} 
          metalness={0.9} 
          roughness={0.1}
        />
      </mesh>
      
      <mesh position={[-2, -1.5, -1.5]}>
        <tetrahedronGeometry args={[0.25, 0]} />
        <meshStandardMaterial 
          color="#00ffff" 
          emissive="#00ffff" 
          emissiveIntensity={0.6} 
          metalness={0.9} 
          roughness={0.1}
        />
      </mesh>
    </group>
  )
}

// Camera animation component
const CameraRig = () => {
  const { camera } = useThree()
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (t < 3) {
      camera.position.z = 8 - (t / 3) * 1
      camera.position.y = 1 - (t / 3) * 0.5
    }
  })
  
  return null
}

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Add a slight delay for better loading experience
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, [])

  return (
    <section id="home" className="hero-immersive">
      <div className="hero-3d-scene">
        <SafeCanvas shadows style={{ pointerEvents: 'none' }}>
          <PerspectiveCamera makeDefault position={[0, 1, 8]} fov={75} />
          <CameraRig />
          
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <pointLight position={[-10, 5, -5]} intensity={1} color="#ff00ff" />
          <pointLight position={[10, -5, -5]} intensity={1} color="#00ffff" />
          <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} color="#ffffff" />
          
          {/* Main 3D object */}
          <SafeFloatingWorkstation />
          
          {/* Environment */}
          <SafeEnvironment preset="night" />
          
          {/* Subtle controls */}
          <SafeOrbitControls 
            enableZoom={false} 
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
            autoRotate
            autoRotateSpeed={0.3}
          />
        </SafeCanvas>
      </div>

      <div className="hero-overlay">
        <motion.div 
          className="hero-content-immersive"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <motion.div
            className="hero-tag"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="tag-icon">⚡</span>
            <span>Full Stack Engineer</span>
          </motion.div>

          <motion.h1
            className="hero-title-immersive"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I build high-performance
            <br />
            <span className="gradient-text">web & AI-powered</span>
            <br />
            applications
          </motion.h1>
          
          <motion.p
            className="hero-subtitle-immersive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            Transforming complex problems into elegant, scalable solutions.
            <br />
            Based in Lahore, building for the world.
          </motion.p>
          
          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a 
              href="#projects" 
              className="cta-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Projects</span>
              <span className="cta-icon">→</span>
            </motion.a>
            <motion.a 
              href="#contact" 
              className="cta-secondary"
              whileHover={{ scale: 1.05, borderColor: "#00ffff" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contact Me</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-prompt"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="scroll-icon"></div>
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  )
}

export default Hero
