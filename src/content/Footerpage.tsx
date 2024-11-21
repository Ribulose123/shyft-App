import React from "react";
import { FaClock } from "react-icons/fa";

const Footerpage: React.FC = () => {
  return (
    <div className="p-10 lg:p-24 flex flex-col justify-between gap-16">
      <div className="flex  justify-evenly items-start gap-5">
      <div className="leading-[2.5rem] space-y-3 w-1/2 sm:w-auto">
        <div className="flex items-center gap-2">
          <FaClock className="text-blue-600 text-xl" />
          <h3 className="text-blue-600 text-2xl font-bold">Shyfy</h3>
        </div>
        <h4 className="font-semibold text-[22px]">Subscribe</h4>
        <p className="text-[15px] text-[#adadad]">
          Join our newsletter to stay up to date on features and releases
        </p>
        <div className="relative w-full  h-1/2 sm:w-auto lg:w-2/3">
          <input
            type="text"
            placeholder="✉️ Email Address"
            className="bg-white p-5 pr-20 rounded-xl placeholder:text-slate-300 placeholder:text-[14px] w-full"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-xl absolute right-1 top-1/2 transform -translate-y-1/2">
            Send
          </button>
        </div>
      </div>

      <div className="hidden sm:flex flex-col gap-3">
        <strong>Quick Links</strong>
        <p>Product</p>
        <p>Features</p>
        <p>Pricing</p>
        <p>Testimonials</p>
      </div>
      <div className="hidden sm:flex flex-col gap-3">
        <strong>Support</strong>
        <p>FAQ</p>
        <p>Article</p>
        <p>Contact Us</p>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <strong>Social</strong>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>LinkedIn</p>
        <p>Twitter</p>
      </div>
      </div>
      <div className="border-t-2 border-[#adadad] flex justify-between items-center ">
        <span className="text-[#adadad] text-[14px]"> Copy @ 2024 Shyft</span>
        <p className="text-[#adadad] text-[14px]">All right resevered</p>
      </div>
     
    </div>
  );
};

export default Footerpage;
