import React from "react";
import visionImage from "../../assets/images/visionImage.jpg";
import { TbTargetArrow } from "react-icons/tb";
import footerImage from '../../assets/images/footerImage.jpg'
import { FaHandPointRight } from "react-icons/fa";
const AboutVision = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto px-[16px] lg:px-[80px] py-[50px] md:py-[100px] flex flex-col lg:flex-row gap-[30px] ">
        <div className="flex-1">
          <div className="w-full lg:w-[500px] h-auto">
            <img
              className="h-full w-full object-cover"
              src={visionImage}
              alt="mother and child"
            />
          </div>
        </div>

        <div className="flex-1 py-[20px]">
          <div className="text-primaryRed flex items-center gap-[10px] text-[40px] font-[700]">
            <h1>Our Vision</h1>
            <span>
              <TbTargetArrow />
            </span>
          </div>
          <div>
            <p className="text-[20px] leading-[40px] text-gray-500">
              To create a world where widows, orphans, and vulnerable
              individuals are empowered, supported, and able to lead dignified
              lives. We envision a future where every widow and her children
              have access to the resources, education, and legal support they
              need to overcome challenges and achieve their full potential.
              Through our efforts, we strive to foster social welfare,
              wellbeing, and human rights for all, building stronger and more
              resilient communities worldwide.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-[16px] lg:px-[80px] pb-[50px] flex flex-col lg:flex-row-reverse gap-[30px]">
        <div className="flex-1">
          <div className=" w-full lg:w-[500px] h-full">
            <img
              className="h-full w-full object-cover"
              src={footerImage}
              alt="mother and child"
            />
          </div>
        </div>

        <div className="flex-1 py-[20px]">
          <div className="text-primaryRed flex items-center gap-[10px] text-[40px] font-[700]">
            <h1>About Us</h1>
            <span>
              <TbTargetArrow />
            </span>
          </div>
          <div className="flex flex-col gap-[20px]">
            <p className="text-[20px] leading-[40px] text-gray-500">
            At Arike's foundation, our mission is to enhance the lives of widows, orphans, and vulnerable individuals by providing essential support and resources. We are dedicated to improving the living conditions of widows and assisting their children through a comprehensive range of services that promote wellbeing and social welfare.
            </p>
            <p className="text-[20px] leading-[40px] text-gray-500">Our core activities include:</p>
            <ul className="flex flex-col gap-[20px]">
                <li className="flex gap-[20px] text-gray-500  ">
                    <span className="text-primaryRed text-[23px]"><FaHandPointRight /></span>
                    Providing legal awareness, education, and counseling to widows, particularly in inheritance disputes and cases of human rights violations.
                </li>
                <li className="flex gap-[20px] text-gray-500  ">
                    <span className="text-primaryRed text-[23px]"><FaHandPointRight /></span>
                    Offering support and assistance to victims of human rights violations and denial.
                </li>
                <li className="flex gap-[20px] text-gray-500  ">
                    <span className="text-primaryRed text-[23px]"><FaHandPointRight /></span>
                    Conducting various initiatives and programs aimed at improving the social and economic conditions of widows globally.
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
