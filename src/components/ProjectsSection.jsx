import { useEffect } from 'react'
import './Projects.css'

const ProjectsSection = () => {
  const projects = [
    {
      id: "p1",
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
      title: "Vunex.live",
      subtitle: "Ultra-Premium Trading Terminal",
      description: "$15,000 client project. Real-time trading terminal with live Binance WebSocket feeds for 16 pairs, Three.js 3D interface, candlestick charts via Canvas API, P2P marketplace with escrow, and full admin suite.",
      techStack: ["React", "Three.js", "WebSockets", "Binance API", "Node.js", "Canvas API"],
      badge: "💎 Premium Build",
      liveDemo: "https://3-d-trading-website.vercel.app",
      github: ""
    },
    {
      id: "p4",
      title: "Jimmy Electronics",
      subtitle: "Premium E-Commerce Platform",
      description: "Premium electronics storefront with modern product grid, detail pages, cart system, and fully responsive shopping experience built for high conversion.",
      techStack: ["React", "JavaScript", "CSS3", "Responsive Design"],
      badge: "",
      liveDemo: "https://premium-e-commerce-build.vercel.app",
      github: "https://github.com/saimadeel894-boop/-Jimmy--Electronics--website"
    },
    {
      id: "p5",
      title: "Vendour App",
      subtitle: "Smart Home & E-Commerce Mobile App",
      description: "Production-grade React Native app with 35+ screens — smart home controls, e-commerce, real-time chat, push notifications, and full buyer/seller flows. Built for a real client. iOS and Android via Expo.",
      techStack: ["React Native", "Expo SDK 54", "Node.js", "Firebase", "Redux", "iOS & Android"],
      badge: "📱 Mobile App",
      liveDemo: "https://play.google.com/store/apps/details?id=com.ikohs.home",
      github: ""
    },
    {
      id: "p6",
      title: "AI SaaS Suite",
      subtitle: "AI SaaS Product Suite — 4 Platforms",
      description: "Four deployed AI tools — AI Study Assistant, AI Content Humanizer, AI Image Caption Generator, and AI Flash Card Generator. All built with Next.js and OpenAI API. All live on Vercel.",
      techStack: ["Next.js", "OpenAI API", "GPT-4", "Vision API", "Firebase", "Tailwind CSS"],
      badge: "🤖 AI Powered",
      liveDemo: "",
      github: ""
    },
    {
      id: "p7",
      title: "Essential London",
      subtitle: "Ecommerce website",
      description: "Essential London Ecommerce website. Modern storefront with smooth interactions and premium feel.",
      techStack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      badge: "",
      liveDemo: "https://essential-london-style.vercel.app/",
      github: ""
    },
    {
      id: "p8",
      title: "Mobile Shop Website",
      subtitle: "Modern Product Showcase",
      description: "Sleek mobile product showcase with clean UI, smooth animations, and fully responsive layout optimized for mobile users.",
      techStack: ["React", "JavaScript", "CSS3"],
      badge: "",
      liveDemo: "https://website-weaver-mauve.vercel.app",
      github: "https://github.com/saimadeel894-boop/Mobile-shop-website"
    }
  ]

  return (
    <section id="projects" className="projects-section animate-section">
      <div className="container">
        <h2 className="section-heading">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
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
                {project.liveDemo && <a href={project.liveDemo} className="btn-live" target="_blank" rel="noopener noreferrer">Live Demo</a>}
                {project.github ? (
                  <a href={project.github} className="btn-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                ) : (
                  <span className="btn-private">Private Client</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection