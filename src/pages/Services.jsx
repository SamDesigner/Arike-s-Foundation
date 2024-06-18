import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import ServicesBanner from '../components/ServicesSection/ServicesBanner'
import Mission from '../components/Mission/Mission'
import Volunteer from '../components/Volunteer/Volunteer'
import Footer from '../components/Footer/Footer'
const Services = () => {
  return (
    <div>
        <Navbar />
        <ServicesSection />
        <Mission />
        <ServicesBanner />
        <Volunteer />
        <Footer />
    </div>
  )
}

export default Services