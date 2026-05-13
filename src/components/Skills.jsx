import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, 
  SiNodedotjs, SiNestjs, SiMongodb, SiPostgresql, 
  SiFirebase, SiSupabase, SiOpenai, SiTailwindcss, 
  SiGit, SiVercel, SiFigma, SiThreedotjs, SiDjango, SiExpo
} from 'react-icons/si'
import './Skills.css'

const Skills = () => {

  const techStack = [
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "NestJS", icon: <SiNestjs />, color: "#E0234E" },
    { name: "React Native", icon: <SiReact />, color: "#61DAFB" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
    { name: "OpenAI API", icon: <SiOpenai />, color: "#412991" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Three.js", icon: <SiThreedotjs />, color: "#000000" },
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF" },
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    { name: "Django", icon: <SiDjango />, color: "#092E20" },
    { name: "Expo", icon: <SiExpo />, color: "#FFFFFF" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
        </motion.h2>

        <motion.div 
          className="tech-stack-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={itemVariants}
            >
              <div className="tech-icon" style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <span className="tech-name">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills