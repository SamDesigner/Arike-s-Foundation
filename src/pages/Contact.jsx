import React from 'react'
import ContactHero from '../components/ContactHero/ContactHero'
import ContactBanner from '../components/ContactHero/ContactBanner'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Volunteer from '../components/Volunteer/Volunteer'
const Contact = () => {
  return (
    <div>
        <Navbar />
        <ContactHero />
        <ContactBanner />
        <Volunteer />
        <Footer />
    </div>
  )
}

export default Contact