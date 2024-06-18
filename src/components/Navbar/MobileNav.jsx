import React from 'react'
import './Navbar.css'
import { FaXmark } from "react-icons/fa6";
import {Link} from 'react-router-dom'
const MobileNav = ({isOpen , setIsOpen}) => {
  return (
    <div className='fixed h-full w-full bg-primaryRed top-0 side_nav flex justify-center items-center'>
        <div 
        onClick={()=>setIsOpen(!isOpen)}
        className='absolute top-[5%] right-[3%] text-[40px] text-white'>
            <FaXmark />
        </div>
        <li className="flex flex-col items-center gap-[60px] text-white text-[25px] font-[400]">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/services">Services</Link>
        </li>
    </div>
  )
}

export default MobileNav