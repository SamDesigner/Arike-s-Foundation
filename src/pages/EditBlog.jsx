import React from 'react'
import {db} from '../Config/firebase'
import {getDocs , collection , deleteDoc , doc} from 'firebase/firestore'
import { useState , useEffect } from 'react'
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import {useNavigate} from 'react-router-dom'
const EditBlog = () => {
    const [blogList , setBlogList] = useState([]);
    const blogCollectionRef = collection(db, "blogs");
    const navigate = useNavigate()
    const deleteBlog = async (id) =>{
        const blogDoc = doc(db, "blogs" , id)
        await deleteDoc(blogDoc)
        getBlogList()
    }
    const getBlogList = async () => {
        try{
            const data = await getDocs(blogCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))
            setBlogList(filteredData)

        }catch(err){
            console.error(err)
        }
    }
    useEffect(()=>{
  
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
    <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[10vh]'>   
        {
            blogList.map((blog)=>(
                <div key={blog.id} className='bg-white rounded-xl shadow-lg flex flex-col justify-between p-4'>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='h-[300px]'>
                            {blog.ImageURL && (
                                <img
                                    src={blog.ImageURL}
                                    alt={blog.Title}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <h1 className='text-[25px] font-[600]'>{blog.Title}</h1>
                            <h3 className='bg-red-500 w-fit text-white p-2 rounded-2xl text-[14px]'>{blog.Author}</h3>
                            <p className='text-gray-500'>{truncateText(blog.Body, 30)}</p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <button onClick={()=> deleteBlog(blog.id)} className='bg-red-400 p-2 text-white'><RiDeleteBinLine /></button>
                        <button onClick={() => navigate(`/admin/updateBlog/${blog.id}`)} className='border bg-blue-400 text-white p-2'><MdModeEdit /></button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default EditBlog