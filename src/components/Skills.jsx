import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, 
  SiNodedotjs, SiPostgresql, SiTailwindcss, SiThreedotjs, 
  SiDjango, SiFastapi, SiExpress, SiRedis, SiDocker, 
  SiGithubactions, SiPython, SiGo, SiRust, SiCplusplus, 
  SiGnubash, SiPytest, SiWebgl, SiRedux, SiOpenai
} from 'react-icons/si'
import { FaDatabase, FaBolt, FaPaintBrush, FaNetworkWired, FaBrain, FaBoxOpen, FaVial, FaCode } from 'react-icons/fa'
import './Skills.css'

const CATEGORIES = [
  { id: 'all', label: 'All Arsenal' },
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend & 3D' },
  { id: 'backend', label: 'Backend & Cloud' },
  { id: 'ai', label: 'AI Training & Vetting' }
]

const SKILLS_DATA = [
  // --- Languages ---
  { 
    name: "Python 3", 
    category: "languages", 
    categoryLabel: "Core Language",
    icon: <SiPython />, 
    color: "#3776AB",
    desc: "Primary for AI evaluation, benchmark harness creation, and high-throughput backends."
  },
  { 
    name: "TypeScript", 
    category: "languages", 
    categoryLabel: "Core Language",
    icon: <SiTypescript />, 
    color: "#3178C6",
    desc: "Strict type-safe architecture across enterprise frontends and backend microservices."
  },
  { 
    name: "JavaScript (Node.js)", 
    category: "languages", 
    categoryLabel: "Core Language",
    icon: <SiNodedotjs />, 
    color: "#339933",
    desc: "Event-driven runtime, asynchronous streams, tooling pipelines, and full-stack servers."
  },
  { 
    name: "Go (Golang)", 
    category: "languages", 
    categoryLabel: "Systems Language",
    icon: <SiGo />, 
    color: "#00ADD8",
    desc: "High-concurrency microservices, lightweight goroutines, and low-latency networking."
  },
  { 
    name: "Rust (Basics)", 
    category: "languages", 
    categoryLabel: "Systems Language",
    icon: <SiRust />, 
    color: "#DEA584",
    desc: "Memory-safe systems programming, CLI tooling, and WebAssembly compilation targets."
  },
  { 
    name: "C++", 
    category: "languages", 
    categoryLabel: "Systems / Algorithmic",
    icon: <SiCplusplus />, 
    color: "#00599C",
    desc: "ICSO Olympiad algorithmic problem-solving, cache-friendly data structures, speed optimization."
  },
  { 
    name: "SQL", 
    category: "languages", 
    categoryLabel: "Data Language",
    icon: <FaDatabase />, 
    color: "#336791",
    desc: "Complex indexing, query planning, schema migrations, and relational data modeling."
  },
  { 
    name: "Bash", 
    category: "languages", 
    categoryLabel: "Systems Automation",
    icon: <SiGnubash />, 
    color: "#4EAA25",
    desc: "DevOps automation, Docker entrypoints, CI pipeline orchestrations, and sandbox runners."
  },

  // --- Frontend & 3D ---
  { 
    name: "React", 
    category: "frontend", 
    categoryLabel: "Frontend Architecture",
    icon: <SiReact />, 
    color: "#61DAFB",
    desc: "Modern reactive component architecture, hooks, concurrent rendering, and clean state."
  },
  { 
    name: "Next.js 14/15", 
    category: "frontend", 
    categoryLabel: "SSR & Full-Stack",
    icon: <SiNextdotjs />, 
    color: "#FFFFFF",
    desc: "App Router, Server Actions, Server Components (RSC), Edge runtimes, and SEO optimization."
  },
  { 
    name: "Three.js / WebGL", 
    category: "frontend", 
    categoryLabel: "3D & Creative Eng",
    icon: <SiThreedotjs />, 
    color: "#00E5FF",
    desc: "Custom shaders, scene graphs, lighting, particle engines, and optimized 3D pipelines."
  },
  { 
    name: "Tailwind CSS", 
    category: "frontend", 
    categoryLabel: "Design System",
    icon: <SiTailwindcss />, 
    color: "#38BDF8",
    desc: "Utility-first responsive styling, micro-interactions, dark mode tokens, and fluid typography."
  },
  { 
    name: "Canvas API", 
    category: "frontend", 
    categoryLabel: "Graphics & Viz",
    icon: <FaPaintBrush />, 
    color: "#E34F26",
    desc: "Direct 2D bitmap manipulation, financial candlestick chart rendering, and data visualization."
  },
  { 
    name: "60 FPS Performance", 
    category: "frontend", 
    categoryLabel: "Optimization",
    icon: <FaBolt />, 
    color: "#FBBF24",
    desc: "Jank-free animations, GPU acceleration, bundle chunking, memory leak profiling."
  },
  { 
    name: "Zustand / Redux", 
    category: "frontend", 
    categoryLabel: "State Management",
    icon: <SiRedux />, 
    color: "#764ABC",
    desc: "Predictable unidirectional global state, middleware, action subscriptions, atomic selectors."
  },

  // --- Backend & Cloud ---
  { 
    name: "FastAPI", 
    category: "backend", 
    categoryLabel: "High-Performance API",
    icon: <SiFastapi />, 
    color: "#009688",
    desc: "Asynchronous Python APIs, Pydantic data validation, OpenAPI specs, and high throughput."
  },
  { 
    name: "Django", 
    category: "backend", 
    categoryLabel: "Full-Featured Backend",
    icon: <SiDjango />, 
    color: "#092E20",
    desc: "Robust ORM, administrative interfaces, authentication architectures, and enterprise security."
  },
  { 
    name: "Express", 
    category: "backend", 
    categoryLabel: "Microservices",
    icon: <SiExpress />, 
    color: "#FFFFFF",
    desc: "Minimalist Node.js microservice architecture, custom middleware stacks, and routing."
  },
  { 
    name: "RESTful APIs", 
    category: "backend", 
    categoryLabel: "API Architecture",
    icon: <FaNetworkWired />, 
    color: "#38BDF8",
    desc: "Idempotent resource design, versioning, rate limiting, and strict error handling contracts."
  },
  { 
    name: "WebSockets", 
    category: "backend", 
    categoryLabel: "Real-Time Systems",
    icon: <FaBolt />, 
    color: "#A855F7",
    desc: "Full-duplex bidirectional streams, live trading feeds, heartbeat ping/pong mechanisms."
  },
  { 
    name: "PostgreSQL", 
    category: "backend", 
    categoryLabel: "Relational DB",
    icon: <SiPostgresql />, 
    color: "#4169E1",
    desc: "ACID compliance, connection pooling (PgBouncer), JSONB documents, and performance tuning."
  },
  { 
    name: "Redis", 
    category: "backend", 
    categoryLabel: "Caching & Pub/Sub",
    icon: <SiRedis />, 
    color: "#DC382D",
    desc: "In-memory caching layer, session storage, distributed locks, and publisher-subscriber queues."
  },
  { 
    name: "Docker", 
    category: "backend", 
    categoryLabel: "Containerization",
    icon: <SiDocker />, 
    color: "#2496ED",
    desc: "Multi-stage builds, isolated runtime environments, container orchestration, and minimal footprint."
  },
  { 
    name: "CI/CD Actions", 
    category: "backend", 
    categoryLabel: "Automated Pipelines",
    icon: <SiGithubactions />, 
    color: "#2088FF",
    desc: "Automated linting, matrix testing suites, security vulnerability scanning, and Vercel/cloud deploys."
  },

  // --- AI Training & Vetting ---
  { 
    name: "SWE-bench Task Creation", 
    category: "ai", 
    categoryLabel: "Benchmark Engineering",
    icon: <FaBrain />, 
    color: "#10B981",
    desc: "End-to-end extraction of real-world GitHub issues, bug reproductions, test isolation, and ground-truth validation."
  },
  { 
    name: "Model Code Evaluation", 
    category: "ai", 
    categoryLabel: "Frontier LLM Vetting",
    icon: <SiOpenai />, 
    color: "#10A37F",
    desc: "Multi-metric evaluation of LLM code synthesis, reasoning traces, edge-case resilience, and security checks."
  },
  { 
    name: "Deterministic Docker Sandboxes", 
    category: "ai", 
    categoryLabel: "Secure Execution",
    icon: <FaBoxOpen />, 
    color: "#00E5FF",
    desc: "Ephemerally reproducible, resource-constrained container harnesses for safe arbitrary code execution."
  },
  { 
    name: "Automated Test Suites (pytest/unittest)", 
    category: "ai", 
    categoryLabel: "Test Engineering",
    icon: <SiPytest />, 
    color: "#0A9EDC",
    desc: "Parametrized testing, mock assertions, code coverage instrumentation, and fail-fast unit/integration suites."
  }
]

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all')

  const filteredSkills = activeTab === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === activeTab)

  return (
    <section id="skills" className="skills-section animate-section">
      <div className="container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Core Technical Competencies
        </motion.h2>

        <p className="skills-lead-subtitle">
          Vetted competencies across low-latency systems, 3D WebGL graphics, and frontier AI model evaluation.
        </p>

        {/* Interactive Filter Tabs */}
        <div className="skills-filter-bar">
          {CATEGORIES.map((tab) => {
            const isActive = activeTab === tab.id
            const count = tab.id === 'all' 
              ? SKILLS_DATA.length 
              : SKILLS_DATA.filter(s => s.category === tab.id).length

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`filter-btn ${isActive ? 'filter-btn-active' : ''}`}
              >
                <span>{tab.label}</span>
                <span className="filter-count">{count}</span>
                {isActive && (
                  <motion.div 
                    layoutId="activeFilterPill"
                    className="filter-active-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          className="skills-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.25 }}
                className="skill-card-modern"
              >
                <div className="skill-card-top">
                  <div 
                    className="skill-icon-wrapper" 
                    style={{ color: skill.color, borderColor: `${skill.color}33`, background: `${skill.color}12` }}
                  >
                    {skill.icon}
                  </div>
                  <span className="skill-category-tag">{skill.categoryLabel}</span>
                </div>
                
                <h3 className="skill-card-title">{skill.name}</h3>
                <p className="skill-card-desc">{skill.desc}</p>

                <div className="skill-card-footer">
                  <span className="skill-status-bullet"></span>
                  <span className="skill-status-text">Production Ready</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
