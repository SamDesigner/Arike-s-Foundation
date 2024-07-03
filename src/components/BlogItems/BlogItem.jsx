import React from 'react'
import {db} from '../../Config/firebase'
import {getDocs , collection} from 'firebase/firestore'
import { useState , useEffect } from 'react'
import { FaPencilAlt } from "react-icons/fa";
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
const BlogItem = () => {
    const [blogList , setBlogList]  = useState([]);
    const blogCollectionRef = collection(db, "blogs")
    useEffect(()=>{
    
        const getBlogList = async () => {
            try{
                const data = await getDocs(blogCollectionRef);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(), 
                    id:doc.id
                }) 
                )
                setBlogList(filteredData)
                console.log(data)
            }catch(err){
                console.error(err)
            }
            
        }
        getBlogList()
    }, [])
    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    };
  return (
    <div className='bg-gray-200 h-screen overflow-y-scroll  '>
        <div className='grid md:grid-cols-2 max-w-[1440px] px-[16px] lg:px-[80px] py-[50px] lg:py-[100px] gap-[40px]'>        
            {
                blogList.map((blog)=>(
                    <div className=' '>
                        <div  className='bg-white p-[10px] flex flex-col gap-[10px] rounded-xl shadow-lg'>
                            <div className=' h-[300px]  '>
                                {blog.ImageURL && (
                                    <img
                                        src={blog.ImageURL}
                                        alt={blog.Title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                            <div className='flex flex-col items-start gap-[10px]'>
                                <div className='flex gap-[10px] bg-red-500 w-fit px-[20px] py-[5px] text-white items-center rounded-2xl cursor-pointer hover:bg-red-500 transition-background'>
                                    <span className='text-[12px]'> 
                                        <FaPencilAlt /> 
                                    </span>
                                    <h1 className='text-[15px]'> {blog.Author}</h1>
                                </div>
                                <h3 className='text-[30px] font-[600]'>{blog.Title}</h3>
                                <p className='text-gray-400'>{truncateText(blog.Body, 30)}</p>
                                <Link to={`/blogs/${blog.id}`}>
                                    <button className='bg-red-700 text-white px-4 py-2 rounded-3xl'>Read More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <Footer />
    </div>
  )
}

export default BlogItem