import React from 'react'
import {doc, getDoc , updateDoc} from 'firebase/firestore'
import {useParams , useNavigate} from 'react-router-dom'
import { useState , useEffect } from 'react'
import {db} from '../Config/firebase'
import Dashboard from '../components/Dashboard/Dashboard'
import MobileDashboard from '../components/Dashboard/MobileDashboard'
const UpdateBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogData , setBlogData] = useState({
     Title:'',
     Author:'',
     Body:''
  })
  useEffect(() => {
    const fetchBlog = async () => {
      const blogDoc = doc(db, 'blogs', id);
      const docSnap = await getDoc(blogDoc);
      if (docSnap.exists()) {
        setBlogData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchBlog();
  }, [id]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const handleUpdate = async () => {
    const blogDoc = doc(db, 'blogs', id);
    await updateDoc(blogDoc, blogData);
    navigate('/');
  };
  return (
    <div className='flex flex-col md:flex-row'>
        <div className='hidden md:block w-[25%]'> 
            <Dashboard />
        </div>
        <div>
          <MobileDashboard />
        </div>
        <div className='w-[100%] md:w-[75%] h-screen flex flex-col justify-center overflow-y-auto px-[16px] lg:px-[80px]'>
            <h2 className='text-2xl font-bold mb-5'>Update Blog</h2>
            <div className='mb-4 flex flex-col gap-[10px]'>
              <label className='block text-gray-700'>Title</label>
              <input 
                type='text' 
                name='Title' 
                value={blogData.Title} 
                onChange={handleInputChange} 
                className='w-full px-4 py-2 border rounded-md'
              />
            </div>
            <div className='mb-4 flex flex-col gap-[10px]'>
              <label className='block text-gray-700'>Author</label>
              <input 
                type='text' 
                name='Author' 
                value={blogData.Author} 
                onChange={handleInputChange} 
                className='w-full px-4 py-2 border rounded-md'
              />
            </div>
            <div className='mb-4 flex flex-col gap-[10px]'>
              <label className='block text-gray-700'>Body</label>
              <textarea 
                name='Body' 
                value={blogData.Body} 
                onChange={handleInputChange} 
                className='w-full min-h-[40vh] px-4 py-2 border rounded-md'
              />
            </div>
            <button 
              onClick={handleUpdate} 
              className='bg-dashboardBg text-white px-4 py-2 rounded-md'
            >
              Update Blog
            </button>
      </div>
  </div>
  )
}

export default UpdateBlog