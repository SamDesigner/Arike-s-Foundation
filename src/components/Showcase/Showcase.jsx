import React from "react";
import "./Showcase.css";
import { FaAngleDown } from "react-icons/fa";
import { Autoplay, } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Showcase = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 6000,
        }}
      
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <section  className="demo_slide slide_one">
            <div className="h-full flex flex-col  justify-center max-w-[1440px] mx-auto px-[16px] lg:px-[80px]">
              <h1 
              data-aos="fade-up"
              className="text-[50px] md:text-[80px] text-white lg:w-[700px]">
                Empowering <span className="text-yellowBg">Widows</span>.
                Transforming Lives
              </h1>
            </div>

            <span className="absolute  fit_content  bg-transparent bounce hover:bg-white hover:text-black hover:cursor-pointer transition-background ease-in-out duration-500">
              <FaAngleDown />
            </span>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="demo_slide slide_two">
            <div className="h-full flex flex-col  justify-center max-w-[1440px] mx-auto px-[16px] lg:px-[80px]">
              <h1 className="text-[50px] md:text-[80px] text-white lg:w-[700px]">
                Empowering <span className="text-yellowBg">Widows</span>.
                Transforming Lives
              </h1>
            </div>

            <span className="absolute  fit_content  bg-transparent bounce hover:bg-white hover:text-black hover:cursor-pointer transition-background ease-in-out duration-500">
              <FaAngleDown />
            </span>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="demo_slide slide_three">
            <div className="h-full flex flex-col  justify-center max-w-[1440px] mx-auto px-[16px] lg:px-[80px]">
              <h1 className="text-[50px] md:text-[80px] text-white lg:w-[700px]">
                Empowering <span className="text-yellowBg">Widows</span>.
                Transforming Lives
              </h1>
            </div>

            <span className="absolute  fit_content  bg-transparent bounce hover:bg-white hover:text-black hover:cursor-pointer transition-background ease-in-out duration-500">
              <FaAngleDown />
            </span>
          </section>
        </SwiperSlide>
      </Swiper>

    </>
  );
};

export default Showcase;
