import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../Config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            const blogDoc = doc(db, 'blogs', id);
            const docSnap = await getDoc(blogDoc);
            if (docSnap.exists()) {
                setBlog(docSnap.data());
            } else {
                console.log("No such document!");
            }
        };
        fetchBlog();
    }, [id]);

    return (
        <div className='flex flex-col gap-[50px]'>
            <Navbar />
        
            <div className='max-w-4xl mx-auto px-4 py-[100px] bg-white '>
                {blog ? (
                    <>
                        <h1 className='text-4xl font-bold mb-4'>{blog.Title}</h1>
                        <h3 className='text-xl mb-4'>{blog.Author}</h3>
                        <div className='mb-4 h-[80vh]'>
                            {blog.ImageURL && (
                                <img src={blog.ImageURL} alt={blog.Title} className="w-full h-full object-cover" />
                            )}
                        </div>
                        <p>{blog.Body}</p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default BlogDetails;
