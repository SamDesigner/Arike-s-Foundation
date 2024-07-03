import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Dashboard from "../components/Dashboard/Dashboard";
import EditBlog from "./EditBlog";
import MobileDashboard from "../components/Dashboard/MobileDashboard";
const Admin = () => {
  return (
    <div className="h-[100vh] flex flex-col md:flex-row ">
      <div className="hidden md:block md:w-[25%]">
        <Dashboard />
      </div>
      <div className="md:hidden">
        <MobileDashboard />
      </div>
      <div className="bg-gray-200 md:w-[75%] h-auto px-[16px] lg:px-[80px] py-[50px] overflow-scroll">
        <Link to="/admin/addBlog">
          <div className="w-full text-white flex flex-col gap-[10px] rounded-2xl justify-center items-center bg-dashboardBg p-[20px] hover:bg-red-900 transition-200">
              <span className=" p-2 bg-white text-dashboardBg p-4 rounded-full">
                <FaPlus />
              </span>
              <span className="text-2xl font-[300] ">Add Blog</span>
          </div>

        </Link>
        <EditBlog />
      </div>
    </div>
  );
};

export default Admin;
