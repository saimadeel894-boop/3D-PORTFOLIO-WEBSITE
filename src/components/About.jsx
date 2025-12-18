import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div ref={ref} className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Full Stack Web Developer from Lahore</h3>
            <p>
              I'm SAIM ADEEL, a passionate full stack web developer based in Lahore, Pakistan. 
              With a keen eye for design and a love for creating seamless user experiences, 
              I transform ideas into reality through clean, efficient code and modern web technologies.
            </p>
            <p>
              My expertise spans both frontend and backend development, allowing me to build 
              complete web solutions from concept to deployment. I specialize in creating responsive, 
              performant applications using React, Node.js, and modern JavaScript frameworks.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, and continuously learning to stay at the cutting edge of web development.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h4>50+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>5+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>30+</h4>
                <p>Happy Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="image-container">
              <img 
                src="/profile.jpg" 
                alt="SAIM ADEEL - Full Stack Developer"
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder" style={{ display: 'none' }}>
                <div className="code-lines">
                  <span className="line">{'<div className="developer">'}</span>
                  <span className="line indent1">{'<h1>SAIM ADEEL</h1>'}</span>
                  <span className="line indent1">{'<h2>Full Stack</h2>'}</span>
                  <span className="line indent1">{'<h3>Web Developer</h3>'}</span>
                  <span className="line">{'</div>'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
