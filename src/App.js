import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Intro from './components/Intro/Intro'
import Services from './components/Services/Services'
import Experience from './components/Experience/Experience'
import Works from './components/Works/Works'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import { themContext } from './Context'
import { useContext } from 'react'
const App = () => {
  const { state: { darkMode } } = useContext(themContext)

  return (
    <div className={`App ${darkMode ? 'darkMode' : ''}`}>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
