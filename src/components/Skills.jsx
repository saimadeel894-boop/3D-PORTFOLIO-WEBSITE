import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa'
import { SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si'
import './Skills.css'

const RotatingBox = ({ position, color }) => {
  const meshRef = useRef()
  
  useFrame(({ clock }) => {
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.5
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.7
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Box ref={meshRef} position={position} args={[1, 1, 1]}>
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </Box>
    </Float>
  )
}

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const skills = [
    { name: 'React', icon: FaReact, level: 90, color: '#61DAFB' },
    { name: 'JavaScript', icon: FaJs, level: 95, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, level: 85, color: '#3178C6' },
    { name: 'HTML5', icon: FaHtml5, level: 95, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#1572B6' },
    { name: 'Node.js', icon: FaNodeJs, level: 80, color: '#339933' },
    { name: 'MongoDB', icon: SiMongodb, level: 75, color: '#47A248' },
    { name: 'Tailwind', icon: SiTailwindcss, level: 88, color: '#06B6D4' },
    { name: 'Git', icon: FaGitAlt, level: 85, color: '#F05032' }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        <div ref={ref} className="skills-content">
          <motion.div
            className="skills-3d"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Canvas camera={{ position: [0, 0, 8] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
              <RotatingBox position={[-2, 1, 0]} color="#00ffff" />
              <RotatingBox position={[2, 1, 0]} color="#ff00ff" />
              <RotatingBox position={[0, -1, 0]} color="#ffff00" />
            </Canvas>
          </motion.div>

          <div className="skills-list">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="skill-header">
                  <div className="skill-info">
                    <skill.icon className="skill-icon" style={{ color: skill.color }} />
                    <h3>{skill.name}</h3>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    style={{ 
                      background: `linear-gradient(90deg, ${skill.color}, var(--primary-color))` 
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
