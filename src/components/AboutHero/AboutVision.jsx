import React from "react";
import visionImage from "../../assets/images/visionImage.jpg";
import { TbTargetArrow } from "react-icons/tb";
import footerImage from '../../assets/images/footerImage.jpg'
import { BsPatchQuestionFill } from "react-icons/bs";
import motherChild from '../../assets/images/motherChild.jpg'
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
          <div className=" w-full  h-full">
            <img
              className="h-full w-full object-cover"
              src={motherChild}
              alt="mother and child"
            />
          </div>
        </div>

        <div className="flex-1 py-[20px]">
          <div className="text-primaryRed flex items-center gap-[10px] text-[40px] font-[700]">
            <h1>About Us</h1>
            <span>
            <BsPatchQuestionFill />
            </span>
          </div>
          <div className="flex flex-col gap-[20px]">
            <p className="text-[17px] leading-[40px] text-gray-500">
            Arike's Widows Foundation is a dedicated non-profit organization committed to enhancing the emotional, financial, and social welfare of widows. Recognizing the severe crises widows face, Arike's Widows Foundation aims to leverage mentorship to manage or alleviate these challenges. Our organization is focused on fostering financial independence and social inclusion for widows through comprehensive empowerment initiatives. Widows in Nigeria face multifaceted challenges, including economic vulnerability, legal obstacles, and social stigma. Arike's Widows Foundation aims to address these issues through tailored programs and services designed to meet the diverse and complex needs of this vulnerable group, ensuring they receive the support and opportunities necessary to rebuild their lives with dignity and resilience.
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
