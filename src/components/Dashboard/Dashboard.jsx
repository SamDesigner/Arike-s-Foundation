import React from 'react'
import Logo from '../../assets/images/logo.png'
import './Dashboard.css'
import { IoIosCreate } from "react-icons/io";
import { Link } from 'react-router-dom'
import { IoIosEye } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoIosPower } from "react-icons/io";
const Dashboard = () => {
  return (
    <div className='w-full dashboard_bg  h-screen'>
        <div className='bg-white flex py-[20px] justify-center'>   
                <img className='h-[100px] w-[200px] object-cover' src={Logo} />
        </div>
        <div className='w-[80%]  mx-auto py-[30px] flex flex-col justify-between '>
            
            
            <div>
                <div className='text-white text-[20px] flex items-center gap-[10px] hover:bg-red-900 p-2 border-b border-b-gray-500'>
                    <span><FaHome /></span>
                    <Link to='/admin'>Home</Link>
                </div>
                <div className='text-white text-[20px] flex items-center gap-[10px] hover:bg-red-900 p-2 border-b border-b-gray-500'>
                    <span><IoIosCreate /></span>
                    <Link to='/admin/addBlog'>Create Post</Link>
                </div>
                <div className='text-white text-[20px] flex items-center gap-[10px] hover:bg-red-900 p-2  border-b-gray-200'>
                    <span><IoIosEye /></span>
                    <Link to='/blogs'>View Blogs</Link>
                </div>
            
            </div>
            <div>
              <div className='text-white text-[20px] flex items-center gap-[10px] hover:bg-red-900 p-2 border-t border-t-gray-500'>
                    <span><IoIosPower /></span>
                    <Link to='/'>Log Out</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard