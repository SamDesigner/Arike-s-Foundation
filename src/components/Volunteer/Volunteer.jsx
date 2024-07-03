import React from 'react'
import { Link } from 'react-router-dom'
import './Volunteer.css'
const Volunteer = () => {
  return (
    <div className='volunteer_Bg px-[16px] lg:px-[80px] py-[100px] min-h-[60vh]'>
        <div className='max-w-[1440px] mx-auto'>
            <div className='text-white flex flex-col gap-[25px]'>
                <h1 className='text-[40px] font-[700] md:leading-[80px]'>Want to become a member?</h1>
                <p className='md:w-[500px] leading-[30px]'>We will be fully excited to have you on our team, together we can help create a world filled with love and support.</p>
                <Link to='/contact'>
                    <button className='border py-[20px] px-[25px]'>Become a volunteer</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Volunteer