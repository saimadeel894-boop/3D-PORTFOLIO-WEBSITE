import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Projects.css'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const projects = [
    {
      id: 1,
      title: "Text Whisperer",
      description: "AI SaaS Tool",
      businessProblem: "AI-powered SaaS tool designed to generate, refine, and enhance text content with speed and accuracy.",
      features: ["AI content generation", "Real-time editing", "Smart suggestions"],
      techStack: ["React", "OpenAI API", "Node.js", "Tailwind"],
      liveDemo: "https://text-whisperer-90.vercel.app/",
      github: "#"
    },
    {
      id: 2,
      title: "Essential London Style",
      description: "Ecommerce Store",
      businessProblem: "A stylish, conversion-focused ecommerce website with a premium fashion aesthetic.",
      features: ["Responsive design", "Smooth browsing", "Brand-focused presentation"],
      techStack: ["React", "Stripe", "MongoDB", "Tailwind"],
      liveDemo: "https://essential-london-style.vercel.app/",
      github: "#"
    },
    {
      id: 3,
      title: "Brand Clothes Website",
      description: "Brand Website",
      businessProblem: "A modern brand website designed to showcase products and brand identity.",
      features: ["Visual storytelling", "Clean layout", "Strong frontend structure"],
      techStack: ["React", "CSS3", "JavaScript", "Vercel"],
      liveDemo: "https://clothes-website-zsbe.vercel.app/",
      github: "#"
    },
    {
      id: 4,
      title: "Student Management System",
      description: "Web Application",
      businessProblem: "A web-based student management system built to handle academic workflows efficiently.",
      features: ["Usability focused", "Structured data handling", "Real-world application logic"],
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      liveDemo: "https://studentassistantainetlifyapp.netlify.app/",
      github: "#"
    },
    {
      id: 5,
      title: "3D Personal Portfolio",
      description: "Interactive Portfolio",
      businessProblem: "Advanced 3D frontend showcase with animations and performance optimization.",
      features: ["3D visuals", "Immersive experience", "Performance optimized"],
      techStack: ["React", "Three.js", "Framer Motion", "Vite"],
      liveDemo: "#",
      github: "#"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div ref={ref} className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.description}</p>
              </div>
              
              <div className="project-content">
                <p className="project-problem">
                  {project.businessProblem}
                </p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-tech">
                  <h4>Tech Stack:</h4>
                  <div className="tech-tags">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="project-links">
                <a 
                  href={project.liveDemo} 
                  className="project-link live-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a 
                  href={project.github} 
                  className="project-link github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects