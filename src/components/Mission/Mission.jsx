import React from 'react'
import { GiLovers } from "react-icons/gi";
import { MdSelfImprovement } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import './Mission.css'
const Mission = () => {
  return (
    <div className='mission_bg '> 
        <div className='max-w-[1440px] mx-auto px-[16px] lg:px-[80px] py-[60px] lg:py-[100px] flex flex-col gap-[80px]'>
            <div 
            data-aos="zoom-in"
            data-aos-duration="1500"
            className='text-center '>
                <h3 className='text-red-400'>Our mission</h3>
                <h1 className='text-[30px] md:text-[60px] text-primaryRed'>Arike's Mission Statement</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-[30px]'>
                <div 
                data-aos="flip-up"
                data-aos-delay="300"
                className=' bg-gray-100 rounded-lg border border-gray-300 p-[20px]'>
                        <div className='text-[30px] my-[10px] text-primaryRed'>
                            <GiLovers />
                        </div>
                        <h3 className='text-primaryRed text-[25px]'>Support</h3>
                        <p className='text-gray-500'>To promote activities that assist widows, orphans and vulnerable people to improve their lives.</p>
                </div>
                <div 
                data-aos="flip-up"
                data-aos-delay="400"
                className='bg-gray-100 rounded-lg border border-gray-300 p-[20px]'>
                        <div className='text-[30px] my-[10px] text-primaryRed'>
                            <MdSelfImprovement />
                        </div>
                        <h3 className='text-primaryRed text-[25px]'>Improve</h3>
                        <p className='text-gray-500'>To improve the living condition of the widows and to help assist their children,</p>
                </div>
                <div 
                data-aos="flip-up"
                data-aos-delay="500"
                className='bg-gray-100 rounded-lg border border-gray-300 p-[20px]'>
                        <div className='text-[30px] my-[10px] text-primaryRed'>
                            <FaGift />
                        </div>
                        <h3 className='text-primaryRed text-[25px]'>Social Welfare</h3>
                        <p className='text-gray-500'>To perform a wide range of services aimed towards wellbeing and social welfare of widows around the world </p>
                </div>
                <div 
                data-aos="flip-up"
                data-aos-delay="600"
                className='bg-gray-100 rounded-lg border border-gray-300 p-[20px]'>
                        <div className='text-[30px] my-[10px] text-primaryRed'>
                            <FaBookOpen />
                        </div>
                        <h3 className='text-primaryRed text-[25px]'>Educate & Counsel</h3>
                        <p className='text-gray-500'>To provide legal awareness, education, counselling and providing assistance to widows in inheritance disputes and victims of human rights violation denial.</p>
                </div>
                <div 
                data-aos="flip-up"
                data-aos-delay="700"
                className='bg-gray-100 rounded-lg border border-gray-300 p-[20px]'>
                        <div className='text-[30px] my-[10px] text-primaryRed'>
                            <FaStar />
                        </div>
                        <h3 className='text-primaryRed text-[25px]'>Ancillary</h3>
                        <p className='text-gray-500'>To do all other things as may be deemed incidential or conducive to attachment of the above objects or any of them.</p>
                </div>
              
            </div>
        </div>
        
    </div>
  )
}

export default Mission