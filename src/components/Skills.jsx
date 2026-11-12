import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, 
  SiTailwindcss, SiThreedotjs, SiNodedotjs, SiPython, 
  SiFastapi, SiDjango, SiExpress, SiPostgresql, 
  SiRedis, SiDocker, SiGithubactions, SiPytest, 
  SiJest, SiGit, SiLinux, SiOpenai
} from 'react-icons/si'
import { FaServer, FaBrain, FaNetworkWired, FaBolt, FaBoxOpen, FaRobot, FaCheckCircle, FaLaptopCode, FaTerminal } from 'react-icons/fa'
import './Skills.css'

const SKILL_CATEGORIES = [
  {
    id: "frontend-mobile",
    title: "Frontend & Mobile",
    subtitle: "High-performance reactive interfaces, 60 FPS WebGL, & cross-platform apps",
    icon: <FaLaptopCode />,
    accentColor: "#00E5FF",
    skills: [
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Next.js (14/15)", icon: <SiNextdotjs />, color: "#FFFFFF" },
      { name: "React Native", icon: <SiReact />, color: "#61DAFB" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
      { name: "Three.js / WebGL", icon: <SiThreedotjs />, color: "#00E5FF" }
    ]
  },
  {
    id: "backend-databases",
    title: "Backend & Databases",
    subtitle: "High-throughput APIs, asynchronous microservices, & relational schemas",
    icon: <FaServer />,
    accentColor: "#38BDF8",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "Python 3", icon: <SiPython />, color: "#3776AB" },
      { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
      { name: "Django", icon: <SiDjango />, color: "#092E20" },
      { name: "Express", icon: <SiExpress />, color: "#FFFFFF" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
      { name: "REST APIs", icon: <FaNetworkWired />, color: "#38BDF8" },
      { name: "WebSockets", icon: <FaBolt />, color: "#A855F7" }
    ]
  },
  {
    id: "devops-testing",
    title: "DevOps & Testing",
    subtitle: "Reproducible container runtimes, CI/CD actions, & automated test suites",
    icon: <SiDocker />,
    accentColor: "#10B981",
    skills: [
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { name: "GitHub Actions", icon: <SiGithubactions />, color: "#2088FF" },
      { name: "PyTest", icon: <SiPytest />, color: "#0A9EDC" },
      { name: "Jest", icon: <SiJest />, color: "#C21325" },
      { name: "Playwright", icon: <FaCheckCircle />, color: "#2EAD33" },
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "Linux", icon: <SiLinux />, color: "#FCC624" }
    ]
  },
  {
    id: "ai-eval",
    title: "AI Training & Evaluation",
    subtitle: "Model code validation, RLHF, SWE-bench harnesses, & deterministic sandboxes",
    icon: <FaBrain />,
    accentColor: "#A855F7",
    skills: [
      { name: "LLM Code Evaluation", icon: <FaBrain />, color: "#A855F7" },
      { name: "RLHF", icon: <FaRobot />, color: "#10B981" },
      { name: "Supervised Fine-Tuning (SFT)", icon: <FaBolt />, color: "#F59E0B" },
      { name: "SWE-bench Sandboxes", icon: <FaBoxOpen />, color: "#00E5FF" },
      { name: "Prompt Engineering", icon: <SiOpenai />, color: "#10A37F" }
    ]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="skills-section animate-section">
      <div className="container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Competencies
        </motion.h2>

        <p className="skills-lead-subtitle">
          Core engineering stack across full-stack Web &amp; Mobile development, systems infrastructure, and AI evaluation.
        </p>

        {/* 4 Compact Category Cards */}
        <div className="compact-skills-grid">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              className="compact-skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4, borderColor: cat.accentColor }}
            >
              <div className="compact-card-header">
                <div 
                  className="compact-card-icon" 
                  style={{ color: cat.accentColor, borderColor: `${cat.accentColor}40`, background: `${cat.accentColor}12` }}
                >
                  {cat.icon}
                </div>
                <div className="compact-card-title-group">
                  <h3 className="compact-card-title">{cat.title}</h3>
                  <p className="compact-card-sub">{cat.subtitle}</p>
                </div>
              </div>

              {/* Clean Inline Badges / Pills */}
              <div className="compact-pills-wrap">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-pill">
                    <span className="pill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="pill-text">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
