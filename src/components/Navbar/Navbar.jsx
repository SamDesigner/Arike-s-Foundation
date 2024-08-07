import React from "react";
import { NavLink , Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import lighterLogo from '../../assets/images/lighterLogo.png'
import "./Navbar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import MobileNav from "./MobileNav";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen , setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let navbarClasses =
    "px-[16px] lg:px-[80px] main_nav  border-b border-primaryRed fixed w-full transition-colors duration-1000 ease-in-out ";
  if (scrolled) {
    navbarClasses += "bg-white";
  } else {
    navbarClasses += " bg-transparent";
  }
  return (
    <>
        <div>
            { isOpen && <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} /> }
         </div>
        <header className={navbarClasses}>
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center ">
            <div className="h-[100px] w-[100px]">
            <img className="h-full w-full" src={scrolled ? Logo : lighterLogo} />
            </div>
            <ul className="hidden md:flex">
            <li className="flex items-center gap-[60px] text-gray-500 font-[400]">
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/about" activeClassName="active">About us</NavLink>
                <NavLink to="/contact" activeClassName="active">Contact us</NavLink>
                <NavLink to="/services" activeClassName="active">Services</NavLink>
            </li>
            </ul>
            <div className="hidden lg:flex">
            <Link className="flex gap-[20px]">
                <button className="bg-primaryRed text-white px-[25px] py-[10px] rounded-[30px]">
                Contact Us
                </button>
            </Link>
            </div>
            {/* 'text-white  ' */}
            <div
            className={`${
                scrolled ? "text-red-800" : "text-red-600"
            } md:hidden text-[25px]`}
            onClick={() => setIsOpen(!isOpen)}
            >
            <FaBarsStaggered />
            </div>
        </nav>
        </header>
    </>
  );
};

export default Navbar;
