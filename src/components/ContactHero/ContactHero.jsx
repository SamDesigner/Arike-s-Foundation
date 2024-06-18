import React from 'react'
import './ContactHero.css'
const ContactHero = () => {
  return (
    <div className=' min-h-[50vh] flex items-center justify-center contact_bg'>
        <div className='flex flex-col text-center'>
            <h4 className='text-red-300'>Keep in touch</h4>
            <h1 className='text-white text-[40px] font-[700]'>Contact Us</h1>
        </div>
    </div>
  )
}

export default ContactHero