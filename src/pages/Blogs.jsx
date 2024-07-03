import React from 'react'
import BlogItem from '../components/BlogItems/BlogItem'
import Navbar from '../components/Navbar/Navbar'

const Blogs = () => {
  return (
    <div className='bg-gray-200'>
        <div className='pb-[15vh] bg-red-300'>
          <Navbar />
        </div>
       
        <BlogItem />
     
    </div>
  )
}

export default Blogs