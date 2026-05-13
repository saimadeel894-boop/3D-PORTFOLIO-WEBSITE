import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const allProjects = [
    {
      id: "p1",
      title: "AutoMarket.de | German Automotive Marketplace",
      description: "German car dealerships had no unified digital marketplace. Built a full-stack Next.js 14 platform with SSR, multi-role authentication for buyers, dealers, and admins, advanced search filtering, and PostgreSQL backend — competing with AutoScout24.",
      techStack: ["Next.js 14", "TypeScript", "NestJS", "PostgreSQL", "Tailwind CSS", "Vercel"],
      liveDemo: "https://german-motor-car-demo-website.vercel.app",
      github: "https://github.com/saimadeel894-boop/German-motor-car-demo-website-",
      badge: "🔥 Flagship Project"
    },
    {
      id: "p2",
      title: "Vendour | Full-Scale React Native Mobile App",
      description: "Production-grade React Native e-commerce app with 35+ screens — full buyer and seller flows, real-time chat, product listings, order management, push notifications, and native iOS & Android deployment via Expo. Built for a real client.",
      techStack: ["React Native", "Expo", "Node.js", "Firebase", "Redux", "iOS & Android"],
      badge: "📱 Mobile App"
    },
    {
      id: "p3",
      title: "Vunex.live | Ultra-Premium Trading Platform",
      description: "Built an ultra-premium trading terminal for a $15,000 client project. Features 3D interactive UI, 16 live Forex and Crypto pairs via Binance WebSocket, real-time candlestick charts, order book, P2P marketplace, and full admin suite.",
      techStack: ["React", "Three.js", "WebSockets", "Binance API", "Node.js", "PostgreSQL"],
      liveDemo: "https://venus-live-elite-trading-plateform.vercel.app",
      github: "https://github.com/saimadeel894-boop/3D-TRADING-WEBSITE",
      badge: "📎 Premium Build"
    },
    {
      id: "p4",
      title: "BeautyChain | Global Brand–Manufacturer–Influencer Platform",
      description: "Startup-level SaaS connecting brands, manufacturers, and influencers in one ecosystem. AI-powered matching engine with 0–100 scoring, milestone escrow payments, real-time messaging, contract PDF generation, and multilingual support.",
      techStack: ["React", "Node.js", "Firebase", "OpenAI API", "Supabase", "REST APIs"],
      liveDemo: "http://beautychain.app/",
      badge: "🤖 AI Powered"
    },
    {
      id: "p5",
      title: "Jimmy Electronics | Premium E-Commerce Platform",
      description: "Premium electronics storefront with modern product grid, detail pages, cart system, and fully responsive shopping experience optimized for conversion.",
      techStack: ["React", "JavaScript", "CSS3", "Responsive Design"],
      liveDemo: "https://premium-e-commerce-build.vercel.app",
      github: "https://github.com/saimadeel894-boop/-Jimmy--Electronics--website"
    },
    {
      id: "p6",
      title: "AI Content Humanizer | SaaS Tool",
      description: "SaaS platform converting robotic AI-generated text into natural, human-like writing. Built for content creators and marketers needing SEO-friendly, readable outputs instantly.",
      techStack: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
      liveDemo: "https://ai-humanize-saas-tool.vercel.app/",
      github: "https://github.com/saimadeel894-boop/AI-HUMANIZE-SAAS-TOOL",
      badge: "🤖 AI Powered"
    },
    {
      id: "p7",
      title: "Mobile Shop | Modern Product Showcase",
      description: "Sleek mobile shop website with clean product display, smooth animations, and modern responsive layout built for optimal mobile user experience.",
      techStack: ["React", "JavaScript", "CSS3", "Responsive Design"],
      liveDemo: "https://website-weaver-mauve.vercel.app",
      github: "https://github.com/saimadeel894-boop/Mobile-shop-website"
    },
    {
      id: "p8",
      title: "Sports Boxing | High-Energy Showcase Website",
      description: "Bold, high-energy sports and boxing website with dynamic hero sections, strong visual identity, and smooth scroll animations.",
      techStack: ["React", "HTML", "CSS", "Animation"],
      liveDemo: "https://hero-showcase-template.vercel.app",
      github: "https://github.com/saimadeel894-boop/-SportsBoxingWebsite"
    }
  ]

  const flagshipProjects = allProjects.slice(0, 3);
  const regularProjects = allProjects.slice(3);

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
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-heading"
          initial="visible"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Flagship Projects
        </motion.h2>

        <div className="case-studies-container">
          {flagshipProjects.map((project) => (
            <motion.div
              key={project.id}
              className="case-study-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              variants={itemVariants}
            >
              <div className="cs-header">
                <h3>{project.title.split('—')[0]}</h3>
                {project.badge && <span className="cs-badge" style={project.badge.includes('🔥') ? {background: 'rgba(255,80,80,0.2)', color: '#ff5050'} : project.badge.includes('💎') ? {background: 'rgba(0,255,255,0.2)', color: '#00ffff'} : project.badge.includes('🤖') ? {background: 'rgba(200,100,255,0.2)', color: '#c864ff'} : {}}>{project.badge}</span>}
              </div>
              <h4 style={{color: '#aaa', marginTop: '5px', marginBottom: '15px'}}>{project.title.split('—')[1]}</h4>
              <p className="cs-description" style={{marginBottom: '20px'}}>{project.description}</p>
              
              <div className="cs-footer" style={{marginTop: 'auto'}}>
                <div className="tech-tags">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveDemo && <a href={project.liveDemo} className="project-link live-demo" target="_blank" rel="noopener noreferrer">Live Demo</a>}
                  {project.github && <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">GitHub</a>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h3 
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          style={{marginTop: '60px', textAlign: 'center'}}
        >
          Other Notable Works
        </motion.h3>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          {regularProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
            >
              <div className="project-header">
                <h3>{project.title.split('—')[0]}</h3>
                <p className="project-subtitle">{project.title.split('—')[1]}</p>
              </div>

              <div className="project-content">
                <p className="project-problem">{project.description}</p>
                
                <div className="project-tech">
                  <div className="tech-tags">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-links">
                {project.liveDemo && <a href={project.liveDemo} className="project-link live-demo" target="_blank" rel="noopener noreferrer">Live</a>}
                {project.github && <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">Code</a>}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects