import React from "react";
import "swiper/css";
import "./Testimonial.css";
import postOne from '../../assets/images/post1.jpg'
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
const Testimonial = () => {
  return (
    <div className="custom_bg h-auto lg:min-h-[100vh]">
      <div className="max-w-[1440px] mx-auto px-[16px] lg:px-[80px] py-[50px] lg:py-[100px] flex flex-col gap-[100px]">
        <div className="text-center ">
          <h3 className="text-red-400">What people say</h3>
          <h1 className="text-[60px] text-primaryRed">Testimonial</h1>
        </div>

        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
              delay: 2500,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Autoplay , Pagination]}
          >
            <SwiperSlide>
              <div className="shadow-xl bg-gray-100 p-[20px] flex flex-col gap-[20px] items-center rounded-tr-[100px] rounded-br-[50px]">
                  <div className="h-[80px] w-[80px] border border-4 rounded-full border-primaryRed">
                      <img className="h-full w-full rounded-full object-cover" src={postOne}  />
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <p className="leading-[30px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsam iure voluptatum eligendi vel accusamus ducimus aperiam! Quae necessitatibus molestias vero id eveniet consequatur, ratione ullam sint, neque distinctio dignissimos!</p>
                    <p className="text-primaryRed text-center">Kudi Micheal</p>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shadow-xl bg-gray-100 p-[20px] flex flex-col gap-[20px] items-center rounded-tr-[100px] rounded-br-[50px]">
                  <div className="h-[80px] w-[80px] border border-4 rounded-full border-primaryRed">
                      <img className="h-full w-full rounded-full object-cover" src={postOne}  />
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <p className="leading-[30px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsam iure voluptatum eligendi vel accusamus ducimus aperiam! Quae necessitatibus molestias vero id eveniet consequatur, ratione ullam sint, neque distinctio dignissimos!</p>
                    <p className="text-primaryRed text-center">Kudi Micheal</p>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shadow-xl bg-gray-100 p-[20px] flex flex-col gap-[20px] items-center rounded-tr-[100px] rounded-br-[50px]">
                  <div className="h-[80px] w-[80px] border border-4 rounded-full border-primaryRed">
                      <img className="h-full w-full rounded-full object-cover" src={postOne}  />
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <p className="leading-[30px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsam iure voluptatum eligendi vel accusamus ducimus aperiam! Quae necessitatibus molestias vero id eveniet consequatur, ratione ullam sint, neque distinctio dignissimos!</p>
                    <p className="text-primaryRed text-center">Kudi Micheal</p>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shadow-xl bg-gray-100 p-[20px] flex flex-col gap-[20px] items-center rounded-tr-[100px] rounded-br-[50px]">
                  <div className="h-[80px] w-[80px] border border-4 rounded-full border-primaryRed">
                      <img className="h-full w-full rounded-full object-cover" src={postOne}  />
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <p className="leading-[30px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsam iure voluptatum eligendi vel accusamus ducimus aperiam! Quae necessitatibus molestias vero id eveniet consequatur, ratione ullam sint, neque distinctio dignissimos!</p>
                    <p className="text-primaryRed text-center">Kudi Micheal</p>
                  </div>
              </div>
            </SwiperSlide>
            
        
           
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
