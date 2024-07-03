import React from "react";
import "./ActiveCampaigns.css";
import { IoIosBookmarks } from "react-icons/io";
import { Link } from "react-router-dom";
const ActiveCampaigns = () => {
  return (
    <div className="bg-gray-200">
      <div className="max-w-[1440px] h-[70vh] mx-auto flex flex-col-reverse md:flex-row ">
        <div className="flex-1 px-[20px] py-[20px] h-full flex flex-col justify-center ">
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-red-400">Explore Our Posts and Blogs</h3>
            <h1 className="text-[30px] font-[400]  text-primaryRed">
                Get Inspired by Arike's Foundation
            </h1>
            <p className="text-gray-500">
            Discover how Arike's Foundation is making a difference and changing the narrative. Dive into our latest posts and blogs to learn more about our initiatives, impact stories, and the incredible journeys of those we support. Join us as we work towards a brighter future, one story at a time.
            </p>
            <Link to='/blogs'>
                <button className="bg-primaryRed text-gray-200 flex items-center py-[10px] px-[15px] rounded-3xl gap-[10px]">
                    <span><IoIosBookmarks /></span>
                    Blog Section
                </button>
            </Link>
          </div>
        </div>
        <div className="h-full w-full flex-1 book_bg"></div>
      </div>
    </div>
  );
};

export default ActiveCampaigns;
