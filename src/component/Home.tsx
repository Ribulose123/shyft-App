import React from "react";
import Navbar from "./Navbar";
import { FaRegCircleCheck } from "react-icons/fa6";
import Pricing from "../content/Pricing";
import Testimonial from "../content/Testimonial";
import Faq from "../content/Faq";
import Footerpage from "../content/Footerpage";

const Home:React.FC = () => {
  return (
    <div className="bg-gradient-to-tr from-white to-blue-400 w-screen h-full ">
      {/* Home Page Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center mt-10  h-full">
        <section className="flex flex-col justify-center items-center w-[75%] sm:w-1/2">
          <div className="flex ">
            {/* <img src="/img/Line 58.png" alt="line 57" /> */}
            <p className="text-[#0968E8] border border-solid border-[#0968E8] bg-white p-1 rounded">
              Shift managing solutions
            </p>
            {/* <img src="/img/Line 57.png" alt="line 58" /> */}
          </div>
          <h3 className="font-bold text-[40px] text-center">
            Effortless Shift Management, Right at Your Fingertips
          </h3>
          <p className="font-medium text-[15px] text-center text-[#ADADAD]">
            Take control of your team’s shifts with Wi-Fi-secure clock-ins,
            real-time attendance tracking, and automated compliance
            alerts—streamline scheduling and boost accountability, all in one
            platform.
          </p>

          <button className="bg-gradient-to-t from-[#6c6efe] to-[#0968E8] w=[158px] h-[44]px p-2 rounded mt-3">
            Get stated
          </button>
        </section>

        <section className="flex justify-center items-center">
          <img
            src="/img/Dashboard.png"
            alt=""
            className="mt-5 w-[90%]"
          />
        </section>

        <section className="mt-5 flex flex-col justify-center items-center">
          <h3 className="text-black text-[30px]">Trusted by</h3>
          <img
            src="/img/Frame 202.png"
            alt=""
            className="flex justify-center items-center"
          />
        </section>

        <section className="mt-6 flex flex-col justify-center items-center gap-3">
          <div className="flex ">
            {/* <img src="/img/Line 58.png" alt="line 57" /> */}
            <p className="text-[#0968E8] border border-solid border-[#0968E8] bg-white p-1 rounded">
              Product Highlight
            </p>
            {/* <img src="/img/Line 57.png" alt="line 58" /> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img src="/img/Group 10048 (1).png" alt="tracker" />
            <img src="/img/Group 10048.png" alt="tracker" />
            <img src="/img/Group 10049 (1).png" alt="tracker" />
            <img src="/img/Group 10049.png" alt="tracker" />
            <img src="/img/Group 10050.png" alt="Wifi" />
            <img src="/img/Group 10050 (1).png" alt="Accessibilty" />
          </div>
        </section>

        <section className="mt-6 flex flex-col  justify-evenly items-center">
          <div className=" flex flex-col sm:flex-row justify-evenly items-center">
            <img
              src="/img/Phone.png"
              alt="phone"
              className="w-[80%] sm:w-1/3"
            />

            <div >
              <div className="w-full flex flex-col justify-center md:mt-0 mt-5">
                <p className="text-[#0968E8] border border-solid border-[#0968E8] bg-white p-1 rounded w-1/2 text-center mb-6">
                  Employees Key Feature
                </p>
                <h4 className="text-[30px] font-semibold">
                  {" "}
                  Effortless Scheduling & Tracking
                </h4>
                <p className="text-[#ADADAD] font-medium text-[14px]">
                  Stay in control of your work schedule with features designed
                  for convenience
                </p>

                <div className="">
                  <div className="flex gap-2 ">
                    <FaRegCircleCheck className="mt-1 r text-blue-700" />
                    <strong className="text-[16px] font-medium">
                      Stay in Control of Your Schedule{" "}
                      <p className="text-[#ADADAD] text-[13px] font-normal">
                        View and adjust your shifs with ease
                      </p>
                    </strong>
                  </div>
                  <div className="flex gap-2 ">
                    <FaRegCircleCheck className="mt-1 r text-blue-700" />
                    <strong className="text-[16px] font-medium">
                      Never Miss a Shift{" "}
                      <p className="text-[#ADADAD] text-[13px] font-normal">
                        Get timely reminder and real-time updates
                      </p>
                    </strong>
                  </div>
                  <div className="flex gap-2 ">
                    <FaRegCircleCheck className="mt-1 r text-blue-700" />
                    <strong className="text-[16px] font-medium">
                      Work Smarter, Not Harder
                      <p className="text-[#ADADAD] text-[13px] font-normal">
                        Clock in Securely and efficently with Wi-Fi enable
                        tracking
                      </p>
                    </strong>
                  </div>
                  <div className="flex gap-2 ">
                    <FaRegCircleCheck className="mt-1 r text-blue-700" />
                    <strong className="text-[16px] font-medium">
                      Seamlessly Request and Track OverTime{" "}
                      <p className="text-[#ADADAD] text-[13px] font-normal">
                        Request and track overtime with ease and transparency
                      </p>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
         

<div className=" flex flex-col sm:flex-row justify-evenly items-center mt-10">
           

            <div >
              <div className="w-full flex flex-col justify-center md:mt-0 mt-5">
                <p className="text-[#0968E8] border border-solid border-[#0968E8] bg-white p-1 rounded w-1/2 text-center mb-6">
                  Employees Key Feature
                </p>
                <h4 className="text-[30px] font-semibold">
                  
                  Smarter Shift Management
                </h4>
                <p className="text-[#ADADAD] font-medium text-[14px]">
                  Streanline shift management with powerfull tools to keep your team on track.
                </p>

                <div className="">
                  <div className="flex gap-2 ">
                    <FaRegCircleCheck className="mt-1 r text-blue-700" />
                    <strong className="text-[16px] font-medium">
                      Keep an Eye on Active Shift
                      <p className="text-[#ADADAD] text-[13px] font-normal">
                       See who's currently working in real time.
                      </p>
                    </strong>
                  </div>
                  <div className="flex gap-2 ">
                    <FaRegCircleCheck className="mt-1 r text-blue-700" />
                    <strong className="text-[16px] font-medium">
                     Easily Schedule Shifts
                      <p className="text-[#ADADAD] text-[13px] font-normal">
                        Create and adjust schedule to fit your teams needs.
                      </p>
                    </strong>
                  </div>
                  <div className="flex gap-2 ">
                    <FaRegCircleCheck className="mt-1 r text-blue-700" />
                    <strong className="text-[16px] font-medium">
                      Stay on Top of Attendence
                      <p className="text-[#ADADAD] text-[13px] font-normal">
                        Easily Check your team's punctuality.
                      </p>
                    </strong>
                  </div>
                  <div className="flex gap-2 ">
                    <FaRegCircleCheck className="mt-1 r text-blue-700" />
                    <strong className="text-[16px] font-medium">
                      Handle Overtime Requests
                      <p className="text-[#ADADAD] text-[13px] font-normal">
                          Review and approve overtime requests.
                      </p>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
           <div className="w-[60%] sm:w-1/3 relative">
           <img
              src="/img/Frame 1618868303.png"
              alt="phone"
              className="ml-10 relative z-0 "
            />
            <img src="/img/Group 10051.png" alt=""  className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10 "/>
           </div>
          </div>
        </section>

        <section className="m-4">
            <Pricing/>
        </section>

        <section className="m-5">
            <Testimonial/>
        </section>
        <section className='flex flex-col  justify-evenly items-center mt-6'>
            <Faq/>
        </section>

        <section className="mt-10 flex items-center justify-center relative top-20">
            <img src="/img/Get started.png" alt="" className="w-[80%]" />
        </section>
      </main>

      <footer className="bg-[#0968E81A]">
         <Footerpage/>
      </footer>
    </div>
  );
};

export default Home;
