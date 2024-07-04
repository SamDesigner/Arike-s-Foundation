import React from "react";
import { db } from "../../Config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { FaPencilAlt } from "react-icons/fa";
import photoCollage from '../../assets/images/photoCollage.png'
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
const BlogItem = () => {
  const [blogList, setBlogList] = useState([]);
  const blogCollectionRef = collection(db, "blogs");
  useEffect(() => {
    const getBlogList = async () => {
      try {
        const data = await getDocs(blogCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBlogList(filteredData);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    getBlogList();
  }, []);
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };
  return (
    <div className="bg-gray-50 h-full">
      <div className="bg-white  px-[16px] lg:px-[80px] max-w-[1440px] mx-auto flex gap-[20px] flex-col-reverse md:flex-row items-center">
        <div className="flex-1">
            <h3 className="text-[25px] md:text-[50px] font-[600]">Get Inspired Our <span className="text-red-800">Blog Section</span></h3>
            <h1>Read and go through our stories and outreach from Arike foundation</h1>
        </div>
        <div className="flex-1 flex justify-end">
                <div className="md:h-[400px] md:w-[400px]">
                    <img className="h-full w-full object-cover"  src={photoCollage} />
                </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 max-w-[1440px] px-[16px] lg:px-[80px] py-[50px] lg:py-[100px] gap-[40px]">
        {blogList.map((blog) => (
          <div className=" ">
            <div className="bg-white p-[10px] flex flex-col gap-[10px]  shadow-lg">
              <div className=" h-[200px]">
                {blog.ImageURL && (
                  <img
                    src={blog.ImageURL}
                    alt={blog.Title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="flex flex-col items-start gap-[10px]">
                {/* <div className='flex gap-[10px] bg-red-500 w-fit px-[20px] py-[5px] text-white items-center rounded-2xl cursor-pointer hover:bg-red-500 transition-background'>
                                    <span className='text-[12px]'> 
                                        <FaPencilAlt /> 
                                    </span>
                                    <h1 className='text-[12px]'> {blog.Author}</h1>
                                </div> */}
                <h3 className="text-[17px] text-red-900  font-[500]">
                  {blog.Title}
                </h3>
                <p className="text-gray-400 text-[14px]">
                  {truncateText(blog.Body, 10)}
                </p>
                <Link to={`/blogs/${blog.id}`}>
                  <button className="bg-red-700 text-white p-2 text-[14px]">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BlogItem;
