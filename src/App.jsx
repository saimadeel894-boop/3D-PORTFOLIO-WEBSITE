import React, { useState } from 'react'
import Navbar from './components/Navbar'
import LazyHero from './components/LazyHero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
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
