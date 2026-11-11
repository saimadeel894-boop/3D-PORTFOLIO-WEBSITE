import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaLock } from 'react-icons/fa'
import './Projects.css'

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & SaaS' },
  { id: 'systems', label: 'Systems & 3D' },
  { id: 'web', label: 'Full-Stack Web' },
  { id: 'mobile', label: 'Mobile Apps' }
]

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const projects = [
    {
      id: "p1",
      category: "ai",
      title: "BeautyChain",
      subtitle: "AI-Powered Brand & Influencer SaaS Platform",
      description: "Full-scale startup SaaS connecting brands, manufacturers, and influencers. AI matching engine using GPT-4 with 0–100 compatibility scoring. Real-time messaging, milestone escrow payments, PDF contract generation, and role-based dashboards for 3 user types.",
      techStack: ["React", "Node.js", "OpenAI GPT-4", "Firebase", "Supabase", "REST APIs"],
      badge: "🤖 AI Powered",
      liveDemo: "https://brand-builder-launch.vercel.app/",
      github: ""
    },
    {
      id: "p2",
      category: "web",
      title: "AutoMarket.de",
      subtitle: "German Automotive Marketplace",
      description: "Full-stack car marketplace with SSR-optimized listing pages indexed by Google in Germany. Multi-role auth for buyers, dealers, and admins. Advanced search with 10+ filters. Competing with AutoScout24.",
      techStack: ["Next.js 14", "TypeScript", "NestJS", "PostgreSQL", "Tailwind CSS", "Vercel"],
      badge: "🚗 Featured",
      liveDemo: "https://german-motor-car-demo-website.vercel.app",
      github: "https://github.com/saimadeel894-boop/German-motor-car-demo-website-"
    },
    {
      id: "p3",
      category: "systems",
      title: "Vunex.live",
      subtitle: "Ultra-Premium Trading Terminal",
      description: "$15,000 client project. Real-time trading terminal with live Binance WebSocket feeds for 16 pairs, Three.js 3D interface, candlestick charts via Canvas API, P2P marketplace with escrow, and full admin suite.",
      techStack: ["React", "Three.js", "WebSockets", "Binance API", "Node.js", "Canvas API"],
      badge: "💎 $15K Premium Build",
      liveDemo: "https://3-d-trading-website.vercel.app",
      github: ""
    },
    {
      id: "p6",
      category: "ai",
      title: "AI SaaS Suite",
      subtitle: "AI SaaS Product Suite — 4 Platforms",
      description: "Four deployed AI tools — AI Study Assistant, AI Content Humanizer, AI Image Caption Generator, and AI Flash Card Generator. All built with Next.js and OpenAI API. All live on Vercel.",
      techStack: ["Next.js", "OpenAI API", "GPT-4", "Vision API", "Firebase", "Tailwind CSS"],
      badge: "🤖 AI Suite",
      liveDemo: "https://ai-humanize-saas-tool.vercel.app/",
      github: ""
    },
    {
      id: "p5",
      category: "mobile",
      title: "Vendour App",
      subtitle: "Smart Home & E-Commerce Mobile App",
      description: "Production-grade React Native app with 35+ screens — smart home controls, e-commerce, real-time chat, push notifications, and full buyer/seller flows. Built for a real client. iOS and Android via Expo.",
      techStack: ["React Native", "Expo SDK 54", "Node.js", "Firebase", "Redux", "iOS & Android"],
      badge: "📱 Mobile App",
      liveDemo: "https://play.google.com/store/apps/details?id=com.ikohs.home",
      github: ""
    },
    {
      id: "p4",
      category: "web",
      title: "Jimmy Electronics",
      subtitle: "Premium E-Commerce Platform",
      description: "Premium electronics storefront with modern product grid, detail pages, cart system, and fully responsive shopping experience built for high conversion.",
      techStack: ["React", "JavaScript", "CSS3", "Responsive Design"],
      badge: "⚡ Fast Storefront",
      liveDemo: "https://premium-e-commerce-build.vercel.app",
      github: "https://github.com/saimadeel894-boop/-Jimmy--Electronics--website"
    },
    {
      id: "p7",
      category: "web",
      title: "Essential London",
      subtitle: "Fashion E-Commerce Architecture",
      description: "Essential London Ecommerce website. Modern storefront with smooth interactions, sub-second page transitions, and a premium editorial shopping feel.",
      techStack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      badge: "✨ Modern Commerce",
      liveDemo: "https://essential-london-style.vercel.app/",
      github: ""
    },
    {
      id: "p8",
      category: "web",
      title: "Mobile Shop Website",
      subtitle: "Modern Product Showcase",
      description: "Sleek mobile product showcase with clean UI, smooth animations, and fully responsive layout optimized for mobile users.",
      techStack: ["React", "JavaScript", "CSS3"],
      badge: "📱 Hardware Showcase",
      liveDemo: "https://website-weaver-mauve.vercel.app",
      github: "https://github.com/saimadeel894-boop/Mobile-shop-website"
    }
  ]

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="projects-section animate-section">
      <div className="container">
        <h2 className="section-heading">Featured Engineering Projects</h2>
        <p className="projects-lead-subtitle">
          Production systems, real-time trading architectures, and AI-driven platforms built for high performance.
        </p>

        {/* Project Filter Buttons */}
        <div className="projects-filter-bar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id
            const count = cat.id === 'all' 
              ? projects.length 
              : projects.filter(p => p.category === cat.id).length

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`proj-filter-btn ${isActive ? 'proj-filter-btn-active' : ''}`}
              >
                <span>{cat.label}</span>
                <span className="proj-filter-count">{count}</span>
                {isActive && (
                  <motion.div 
                    layoutId="activeProjectFilterPill"
                    className="proj-filter-active-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id} 
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.3 }}
                className="project-card"
              >
                {project.badge && <span className="project-badge">{project.badge}</span>}
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                <p className="project-desc">{project.description}</p>
                
                <div className="tech-tags">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveDemo && (
                    <a href={project.liveDemo} className="btn-live" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt size={12} /> <span>Live Demo</span>
                    </a>
                  )}
                  {project.github ? (
                    <a href={project.github} className="btn-github" target="_blank" rel="noopener noreferrer">
                      <FaGithub size={14} /> <span>Source</span>
                    </a>
                  ) : (
                    <span className="btn-private">
                      <FaLock size={11} style={{ marginRight: '6px' }} /> Private Client
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
