import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import AboutHero from '../components/AboutHero/AboutHero'
import AboutVision from '../components/AboutHero/AboutVision'
import Volunteer from '../components/Volunteer/Volunteer'
import Footer from '../components/Footer/Footer'
const About = () => {
  return (
    <div>
        <Navbar />
        <AboutHero />
        <AboutVision />
        <Volunteer />
        <Footer />
    </div>
  )
}

export default About