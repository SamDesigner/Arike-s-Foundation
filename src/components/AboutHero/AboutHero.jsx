import React from 'react'
import './AboutHero.css'
import { FaAngleDown } from "react-icons/fa";
const AboutHero = () => {
  return (
    <div className='aboutHero'>
      <div className='max-w-[1440px] mx-auto px-[16px] lg:px-[80px] flex flex-col h-full'>
        <div className='mt-[40vh]'>
            <h1 className='text-[80px] text-white font-[700]'>About Us</h1>
            <p className='text-white md:w-[700px] leading-[30px]'>
            We believe in the power of community and compassion, and our efforts are geared towards creating a supportive environment where widows and their families can thrive. Our commitment extends to all activities that are conducive to achieving our goals and uplifting the lives of those we serve.
            </p>
            <span className="absolute  fit_content  bg-transparent bounce bg-white text-black hover:cursor-pointer transition-background ease-in-out duration-500">
              <FaAngleDown />
            </span>
        </div>
      </div>

    </div>
  )
}

export default AboutHero