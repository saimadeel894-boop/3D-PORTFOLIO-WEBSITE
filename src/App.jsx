import React, { useState, Suspense, lazy } from 'react'
import Navbar from './components/Navbar.jsx'
const Globe3D = lazy(() => import('./components/Globe3D.jsx'))
import Hero from './components/Hero.jsx'
import StatsSection from './components/StatsSection.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
const ProjectsSection = lazy(() => import('./components/ProjectsSection.jsx'))
import Micro1Badge from './components/Micro1Badge.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

import { FaFileAlt, FaArrowUp } from 'react-icons/fa'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showScrollTop, setShowScrollTop] = useState(false)

  React.useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 500)
          
          const sections = ['home', 'about', 'certification', 'skills', 'projects', 'contact']
          const scrollPosition = window.scrollY + 200

          for (const section of sections) {
            const element = document.getElementById(section)
            if (element) {
              const offsetTop = element.offsetTop
              const offsetHeight = element.offsetHeight
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section)
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-section').forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="App">
      <Suspense fallback={
        <div className="loading-screen">
          <div className="loader-ring" />
        </div>
      }>
        <Globe3D />
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <div className="animate-section">
          <Hero />
        </div>
        <div className="animate-section">
          <StatsSection />
        </div>
        <div className="animate-section">
          <About />
        </div>
        <div className="animate-section">
          <Skills />
        </div>
        <div className="animate-section">
          <Micro1Badge />
        </div>
        <div className="animate-section">
          <ProjectsSection />
        </div>
        <div className="animate-section">
          <Contact />
        </div>
        <Footer />
      </Suspense>
      
      <a href="/Saim_Adeel_CV.pdf" download="Saim_Adeel_CV.pdf" target="_blank" className="floating-cv" title="Download My CV">
        <FaFileAlt className="cv-icon" />
      </a>

      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      )}
    </div>
  )
}

export default App
