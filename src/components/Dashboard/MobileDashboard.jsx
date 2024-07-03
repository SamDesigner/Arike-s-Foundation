import React from 'react'
import { IoIosEye } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoIosPower } from "react-icons/io";

import { Link } from 'react-router-dom';
const MobileDashboard = () => {
  return (
    <div>
        <div className='flex w-full justify-stretch'>
            <Link to='/blogs' className='flex-1' >
                <div className='bg-dashboardBg p-2 flex flex-col items-center text-white flex-1'>
                    <FaHome  />
                    <p>Home</p>
                </div>
               
            </Link>
            <Link to='/blogs' className='flex-1'>
                <div className='bg-dashboardBg p-2 flex flex-col items-center text-white '>
                    <IoIosEye />
                    <p>Blogs</p>
                </div>
            </Link>
           
            <Link to='/' className='flex-1'>
                <div className='bg-dashboardBg p-2 flex flex-col items-center text-white '>    
                    <IoIosPower />
                    <p>Log Out</p>
                </div>
            </Link>
           
        </div>
    </div>
  )
}

export default MobileDashboard