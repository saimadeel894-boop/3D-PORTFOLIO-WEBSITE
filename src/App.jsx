import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import LazyHero from './components/LazyHero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="App">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <LazyHero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
