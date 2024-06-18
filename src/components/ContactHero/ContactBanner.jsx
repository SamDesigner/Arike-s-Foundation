import React from "react";
import Facebook from "../../assets/socials/facebook.png";
import linkedIn from "../../assets/socials/linkedIn.png";
import Instagram from "../../assets/socials/instagram.png";
const ContactBanner = () => {
  return (
    <div className="bg-gray-200">
      <div className="max-x-[1440px] mx-auto px-[16px] lg:px-[80px] py-[100px] flex flex-col gap-[50px] md:gap-[100px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[30px] md:text-[50px]">Get In Touch with us</h1>
          <p className="text-gray-500 w-full lg:w-[500px] text-center">
            Would you like to reach out to us? or you'd like to be a member of
            this organisation
          </p>
        </div>
        <div className="flex flex-col-reverse  gap-[40px] lg:flex-row">
          <div className="flex flex-col flex-1 gap-[25px]">
            <div className="flex justify-center lg:justify-start  gap-[20px]">
              <div>
                <img src={Facebook} alt="facebook" />
              </div>
              <div>
                <img src={Instagram} alt="instagram" />
              </div>
              <div>
                <img src={linkedIn} alt="linkedin" />
              </div>
              <div>
                <img src={Facebook} alt="facebook" />
              </div>
            </div>
            <div>
                <p className="w-full lg:w-[500px] text-gray-500 leading-[30px]">No 7 Bungalow, LASU arena close, ketu Adie Owe, lusada. Take a bike to a bike to success star school at LASU arena. Ogun State, Nigeria.</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-[40px]">
            <div>
              <h1 className="text-[25px] text-primaryRed">
                Send us a direct mail.
              </h1>
              <p className="text-gray-500">
                Our Friendly team can't wait to hear from you
              </p>
            </div>
            <div className="flex flex-col gap-[15px]">
              <div className="flex flex-col md:flex-row gap-[30px]">
                <div className="flex flex-1 flex-col gap-[10px]">
                  <label className="text-primaryRed text-[14px]">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="border py-[15px] px-[20px] rounded-2xl "
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[10px]">
                  <label className="text-primaryRed text-[14px]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="border py-[15px] px-[20px] rounded-2xl "
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <label className="text-primaryRed text-[14px]">Subject</label>
                <input
                  type="text"
                  placeholder="Volunteer, Support , Enquiry "
                  className="border py-[15px] px-[20px] rounded-2xl "
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label className="text-primaryRed text-[14px]">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+2349023046042"
                  className="border py-[15px] px-[20px] rounded-2xl "
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label className="text-primaryRed text-[14px]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="border py-[15px] px-[20px] rounded-2xl "
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label className="text-primaryRed text-[14px]">Message</label>
                <textarea
                  class="w-full h-32 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your Message here..."
                ></textarea>
                <button className="bg-primaryRed py-[10px] text-white w-[50%] mx-auto mt-4 rounded-3xl">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
