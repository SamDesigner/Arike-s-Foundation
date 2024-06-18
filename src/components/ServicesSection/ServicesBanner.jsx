import React from "react";
import widowEmpowerment from "../../assets/images/widowEmpowerment.jpg";
import smilingGirl from "../../assets/images/smilingGirl.png";
const ServicesBanner = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1440px] mx-auto  ">
        <div className=" min-h-[70vh] flex flex-col lg:flex-row rounded-3xl">
          <div className="flex-1">
            <img
              className="h-full w-full object-cover"
              src={widowEmpowerment}
              alt="Happy Woman"
            />
          </div>
          <div className="flex-1  py-[50px] ">
            <div className="flex flex-col gap-[30px] px-[16px] lg:px-[0px] lg:w-[90%] mx-auto">
              <h1 className="text-[30px] text-center md:text-left md:text-[40px] md:font-[700] text-primaryRed">
                We Empower Widows to be Stronger
              </h1>
              <div className="flex flex-col gap-[20px] md:gap-[40px]">
                <p className="text-[18px] md:text-[20px] text-gray-600">
                  Widows often endure significant emotional, social, and
                  economic hardships. Recognizing these challenges, we have
                  developed comprehensive programs that address their unique
                  needs. From legal assistance and counseling to educational
                  opportunities and economic empowerment initiatives, our goal
                  is to foster a supportive environment where widows can thrive.
                </p>
                <p className="text-[18px] md:text-[20px] text-gray-600">
                  Our approach is holistic. We offer legal awareness and
                  education to help widows navigate inheritance disputes and
                  protect their rights. Our counseling services provide
                  emotional support, helping them heal and rebuild their lives.
                  Through skill-building workshops and vocational training, we
                  equip widows with the tools they need to achieve financial
                  independence and stability.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" min-h-[70vh] flex flex-col-reverse lg:flex-row rounded-3xl">
          <div className="flex-1  py-[50px] ">
            <div className="flex flex-col gap-[30px] px-[16px] md:px-[0px] md:w-[90%] mx-auto">
              <h1 className="text-[30px] md:text-[40px] text-center md:text-left  md:font-[700] text-primaryRed">
                We Empower Orphans and Provide Support
              </h1>
              <div className="flex flex-col gap-[20px] md:gap-[40px]">
                <p className="text-[18px] md:text-[20px] text-gray-600">
                    Orphaned children often face significant emotional, social, and educational challenges. We recognize these hardships and have developed comprehensive programs to address their unique needs. Our approach includes providing access to quality education, emotional support, and essential life skills that help these children overcome their circumstances and realize their full potential.
                </p>
                <p className="text-[18px] md:text-[20px] text-gray-600">
                Empowering orphans is not just about providing immediate support; it's about investing in their futures. By offering comprehensive care and resources, we help them build a foundation for a successful and fulfilling life.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-red-700">
            <img
              className="h-full w-full object-cover"
              src={smilingGirl}
              alt="Happy Girl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
