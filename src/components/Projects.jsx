import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Box, RoundedBox, Text, MeshTransmissionMaterial } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiFirebase, SiMongodb, SiTailwindcss, SiOpenai } from 'react-icons/si'
import './Projects.css'

// 3D Project Card Component
const ProjectCard3D = ({ index, isActive }) => {
  const meshRef = useRef()
  
  useFrame(({ clock }) => {
    if (meshRef.current && isActive) {
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <RoundedBox 
        ref={meshRef}
        args={[2, 2.5, 0.3]} 
        radius={0.1}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color={isActive ? "#00ffff" : "#1a1a2e"}
          metalness={0.8}
          roughness={0.2}
          emissive={isActive ? "#00ffff" : "#000"}
          emissiveIntensity={isActive ? 0.3 : 0}
        />
      </RoundedBox>
    </Float>
  )
}

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: 'E-Commerce Platform',
      problem: 'Modern online clothing store with seamless shopping experience',
      description: 'Full-featured e-commerce platform with responsive design, product filtering, shopping cart, and modern UI/UX.',
      tech: ['React', 'Tailwind CSS', 'Responsive Design', 'Modern UI'],
      techIcons: [FaReact, SiTailwindcss],
      features: [
        'Responsive product catalog',
        'Advanced filtering system',
        'Shopping cart functionality',
        'Modern checkout process'
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      github: 'https://github.com/saimadeel894-boop',
      live: 'https://clothes-website-zsbe.vercel.app/',
      category: 'Full Stack',
      color: '#00ffff'
    },
    {
      title: 'AI Student Management System',
      problem: 'Intelligent student data management with AI-powered insights',
      description: 'Advanced student management platform powered by AI, featuring automated analytics, performance tracking, and intelligent reporting.',
      tech: ['React', 'AI Integration', 'Data Analytics', 'Firebase'],
      techIcons: [FaReact, SiOpenai, SiFirebase],
      features: [
        'AI-powered student analytics',
        'Performance tracking dashboard',
        'Automated reporting system',
        'Real-time data management'
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      github: 'https://github.com/saimadeel894-boop',
      live: 'https://studentmanagementsystemnetlifyapp.netlify.app/',
      category: 'AI-Powered',
      color: '#ff00ff'
    },
    {
      title: 'AI Image Caption Generator',
      problem: 'Automatic image description generation using AI',
      description: 'AI-powered application that automatically generates accurate and descriptive captions for images using advanced machine learning models.',
      tech: ['React', 'OpenAI API', 'Computer Vision', 'Node.js'],
      techIcons: [FaReact, SiOpenai, FaNodeJs],
      features: [
        'AI-powered caption generation',
        'Multiple image format support',
        'Real-time processing',
        'Customizable output styles'
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      github: 'https://github.com/saimadeel894-boop',
      live: 'https://imageaicaptiongeneratornetlifyapp.netlify.app/',
      category: 'AI-Powered',
      color: '#ffff00'
    },
    {
      title: 'AI Study Assistant',
      problem: 'Intelligent learning companion powered by AI',
      description: 'AI-driven study assistant that helps students learn more effectively with personalized study plans, Q&A, and interactive learning tools.',
      tech: ['React', 'OpenAI GPT', 'Natural Language Processing', 'Firebase'],
      techIcons: [FaReact, SiOpenai, SiFirebase],
      features: [
        'AI-powered Q&A system',
        'Personalized study recommendations',
        'Interactive learning modules',
        'Progress tracking'
      ],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      github: 'https://github.com/saimadeel894-boop',
      live: 'https://studentassistantainetlifyapp.netlify.app/',
      category: 'AI-Powered',
      color: '#00ff00'
    }
  ]

  return (
    <section id="projects" className="projects-immersive">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Portfolio</span>
          <h2>Featured Projects</h2>
          <p className="section-subtitle">Real-world solutions showcasing technical depth and innovation</p>
        </motion.div>

        <div ref={ref} className="projects-3d-layout">
          {/* 3D Scene */}
          <motion.div 
            className="project-3d-viewer"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
              <ProjectCard3D index={activeProject} isActive={true} />
            </Canvas>
            
            <div className="project-category-badge" style={{ background: projects[activeProject].color }}>
              {projects[activeProject].category}
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div 
            className="project-details-panel"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="project-info"
              >
                <div className="project-header-info">
                  <h3>{projects[activeProject].title}</h3>
                  <p className="project-problem">{projects[activeProject].problem}</p>
                </div>

                <div className="project-image-preview">
                  <img src={projects[activeProject].image} alt={projects[activeProject].title} />
                </div>

                <p className="project-description">{projects[activeProject].description}</p>

                <div className="project-features">
                  <h4>Key Features</h4>
                  <ul>
                    {projects[activeProject].features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="feature-dot"></span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech-stack">
                  <h4>Tech Stack</h4>
                  <div className="tech-tags">
                    {projects[activeProject].tech.map((tech, i) => (
                      <span key={i} className="tech-tag-premium">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  <motion.a 
                    href={projects[activeProject].live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-btn primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a 
                    href={projects[activeProject].github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-btn secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Project Navigation */}
        <motion.div 
          className="project-navigation"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.button
              key={index}
              className={`project-nav-item ${activeProject === index ? 'active' : ''}`}
              onClick={() => setActiveProject(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                borderColor: activeProject === index ? project.color : 'transparent'
              }}
            >
              <div className="nav-item-content">
                <span className="nav-number">{String(index + 1).padStart(2, '0')}</span>
                <div className="nav-info">
                  <span className="nav-title">{project.title}</span>
                  <span className="nav-category">{project.category}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
