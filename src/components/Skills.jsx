import React from 'react'
import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
      color: "#00ffff"
    },
    {
      title: "Backend",
      skills: ["Node.js", "APIs", "Express", "MongoDB", "PostgreSQL"],
      color: "#ff00ff"
    },
    {
      title: "AI & SaaS",
      skills: ["AI integrations", "Prompt systems", "Automation", "Machine Learning", "OpenAI"],
      color: "#ffff00"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Vercel", "Netlify", "Figma"],
      color: "#00ff00"
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills Constellation
        </motion.h2>

        <div className="skills-constellation">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="category-header">
                <h3>{category.title}</h3>
                <div
                  className="category-indicator"
                  style={{ backgroundColor: category.color }}
                ></div>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="skill-item"
                    whileHover={{ scale: 1.05, color: category.color }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: (index * 0.2) + (skillIndex * 0.1), duration: 0.4 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-visualization"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="orbit-container">
            <div className="central-sphere"></div>
            <div className="orbit-orbital" style={{ '--color': '#00ffff' }}></div>
            <div className="orbit-orbital" style={{ '--color': '#ff00ff' }}></div>
            <div className="orbit-orbital" style={{ '--color': '#ffff00' }}></div>
            <div className="orbit-orbital" style={{ '--color': '#00ff00' }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills