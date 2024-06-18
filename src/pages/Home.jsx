import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Showcase from '../components/Showcase/Showcase'
import Mission from '../components/Mission/Mission'
import Info from '../components/Info/Info'
import ActiveCampaigns from '../components/ActiveCampaigns/ActiveCampaigns'
import Testimonial from '../components/Testimonial/Testimonial'
import Volunteer from '../components/Volunteer/Volunteer'
import Footer from '../components/Footer/Footer'
const Home = () => {
  return (
    <div className='snap-y snap-mandatory  h-screen'>
        <Navbar />
        <Showcase />
        <Mission />
        <Info />
        <ActiveCampaigns />
        <div className='hidden md:block'>
          <Testimonial />
        </div>
        <Volunteer />
        <Footer />
    </div>
  )
}

export default Home