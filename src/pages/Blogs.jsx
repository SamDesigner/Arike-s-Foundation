import React from 'react'
import BlogItem from '../components/BlogItems/BlogItem'
import Navbar from '../components/Navbar/Navbar'

const Blogs = () => {
  return (
    <div>
        <div className='pb-[15vh]'>
          <Navbar />
        </div>
       
        <BlogItem />
     
    </div>
  )
}

export default Blogs