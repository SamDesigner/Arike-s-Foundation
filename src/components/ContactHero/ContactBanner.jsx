import React, { useRef, useState } from "react";
import Facebook from "../../assets/socials/facebook.png";
import LinkedIn from "../../assets/socials/linkedIn.png";
import Instagram from "../../assets/socials/instagram.png";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
const ContactBanner = () => {
  const form = useRef();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m1qziei', 'template_1rrx2jd', form.current, 'zF9mSkmovdPyvzFEw')
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Mail Has Been Sent. Our team will get back to you shortly",
            showConfirmButton: false,
            timer: 1500
          });
          setFName("");
          setLName("");
          setEmail("");
          setSubject("");
          setPhoneNumber("");
          setMessage("");
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="bg-gray-200">
      <div className="max-w-[1440px] mx-auto px-[16px] lg:px-[80px] py-[100px] flex flex-col gap-[50px] md:gap-[100px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[30px] md:text-[50px]">Get In Touch with us</h1>
          <p className="text-gray-500 w-full lg:w-[500px] text-center">
            Would you like to reach out to us? or you'd like to be a member of this organisation
          </p>
        </div>
        <div className="flex flex-col-reverse gap-[40px] lg:flex-row">
          <div className="flex flex-col flex-1 gap-[25px]">
            <div className="flex justify-center lg:justify-start gap-[20px]">
              <a target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/profile.php?id=61562116312979">
                <img src={Facebook} alt="facebook" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/arike_foundation/">
                <img src={Instagram} alt="instagram" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/arike-foundation/">
                <img src={LinkedIn} alt="linkedin" />
              </a>
            </div>
            <div>
              <p className="w-full lg:w-[500px] text-gray-500 leading-[30px]">
                No 7 Bungalow, LASU arena close, Ketu Adie Owe, Lusada. Take a bike to Success Star School at LASU arena. Ogun State, Nigeria.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-[40px]">
            <div>
              <h1 className="text-[25px] text-primaryRed">Send us a direct mail.</h1>
              <p className="text-gray-500">Our friendly team can't wait to hear from you</p>
            </div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-[15px]">
              <div className="flex flex-col md:flex-row gap-[30px]">
                <div className="flex flex-1 flex-col gap-[10px]">
                  <label className="text-primaryRed text-[14px]">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="border py-[15px] px-[20px] rounded-2xl"
                    name="fName"
                    value={fName}
                    onChange={(e) => setFName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[10px]">
                  <label className="text-primaryRed text-[14px]">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="border py-[15px] px-[20px] rounded-2xl"
                    name="lName"
                    value={lName}
                    onChange={(e) => setLName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <label className="text-primaryRed text-[14px]">Subject</label>
                <input
                  type="text"
                  placeholder="Volunteer, Support, Enquiry"
                  className="border py-[15px] px-[20px] rounded-2xl"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label className="text-primaryRed text-[14px]">Phone Number</label>
                <input
                  type="text"
                  placeholder="+2349023046042"
                  className="border py-[15px] px-[20px] rounded-2xl"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label className="text-primaryRed text-[14px]">Email Address</label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="border py-[15px] px-[20px] rounded-2xl"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label className="text-primaryRed text-[14px]">Message</label>
                <textarea
                  className="w-full h-32 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your message here..."
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <button className="bg-primaryRed py-[10px] text-white w-[50%] mx-auto mt-4 rounded-3xl">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
