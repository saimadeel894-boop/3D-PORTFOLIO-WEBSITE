import React, { useState, Suspense, lazy } from 'react'
import Navbar from './components/Navbar.jsx'
const Globe3D = lazy(() => import('./components/Globe3D.jsx'))
import Hero from './components/Hero.jsx'
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
    const handleScroll = () => {
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
    }
    window.addEventListener('scroll', handleScroll)
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
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
        <div className="animate-on-scroll">
          <Hero />
        </div>
        <div className="animate-on-scroll">
          <About />
        </div>
        <div className="animate-on-scroll">
          <Micro1Badge />
        </div>
        <div className="animate-on-scroll">
          <Skills />
        </div>
        <div className="animate-on-scroll">
          <ProjectsSection />
        </div>
        <div className="animate-on-scroll">
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
