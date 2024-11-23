import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FaRegCircleCheck } from "react-icons/fa6";
import Pricing from "../content/Pricing";
import Testimonial from "../content/Testimonial";
import Faq from "../content/Faq";
import Footerpage from "../content/Footerpage";
import { motion, useTransform, useScroll } from "framer-motion";

const Home: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 640); // Small devices (sm breakpoint)
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

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
          <img src="/img/Dashboard.png" alt="" className="mt-5 w-[90%]" />
        </section>

        <section className="mt-5 flex flex-col justify-center items-center">
          <h3 className="text-black text-[30px]">Trusted by</h3>
          <img
            src="/img/Frame 202.png"
            alt=""
            className="flex justify-center items-center"
          />
        </section>

        <section className="mt-10 flex flex-col justify-center items-center gap-3" id="Product">
          <div className="flex">
            <p className="text-[#0968E8] border border-solid border-[#0968E8] bg-white p-1 rounded">
              Product Highlight
            </p>
          </div>
          <motion.div
            ref={targetRef}
            className={`lg:grid lg:grid-cols-3 gap-4 overflow-x-auto lg:overflow-visible flex lg:flex-none`}
            style={isSmallDevice ? { x: translateX } : undefined}
          >
            {[
              "/img/Group 10048 (1).png",
              "/img/Group 10048.png",
              "/img/Group 10049 (1).png",
              "/img/Group 10049.png",
              "/img/Group 10050.png",
              "/img/Group 10050 (1).png",
            ].map((src, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-96 lg:w-auto lg:flex-shrink"
              >
                <img
                  src={src}
                  alt={`Product ${index + 1}`}
                  className="h-auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </section>
        <section className="mt-6 flex flex-col justify-evenly items-center">
  {/* First Row */}
  <div className="flex flex-col sm:flex-row justify-evenly items-center">
    {/* Image */}
    <img
      src="/img/Phone.png"
      alt="phone"
      className="w-[80%] sm:w-1/3"
    />

    {/* Text Content */}
    <div className="w-[90%] sm:w-1/2 flex flex-col items-center sm:items-start md:mt-0 mt-5">
      <p className="text-[#0968E8] border border-solid border-[#0968E8] bg-white p-1 rounded w-1/2 text-center mb-6">
        Employees Key Feature
      </p>
      <h4 className="text-[30px] font-semibold text-center sm:text-left">
        Effortless Scheduling & Tracking
      </h4>
      <p className="text-[#ADADAD] font-medium text-[14px] text-center sm:text-left">
        Stay in control of your work schedule with features designed for convenience
      </p>

      {/* Features */}
      <div className="mt-4">
        {[
          {
            title: "Stay in Control of Your Schedule",
            description: "View and adjust your shifts with ease.",
          },
          {
            title: "Never Miss a Shift",
            description: "Get timely reminders and real-time updates.",
          },
          {
            title: "Work Smarter, Not Harder",
            description: "Clock in securely and efficiently with Wi-Fi-enabled tracking.",
          },
          {
            title: "Seamlessly Request and Track Overtime",
            description: "Request and track overtime with ease and transparency.",
          },
        ].map(({ title, description }, index) => (
          <div key={index} className="flex gap-2 mt-3">
            <FaRegCircleCheck className="mt-1 text-blue-700" />
            <div>
              <strong className="text-[16px] font-medium">{title}</strong>
              <p className="text-[#ADADAD] text-[13px] font-normal">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Second Row */}
  <div className="flex flex-col sm:flex-row justify-evenly items-center mt-10">
    {/* Text Content */}
    <div className="w-[90%] sm:w-1/2 flex flex-col items-center sm:items-start md:mt-0 mt-5">
      <p className="text-[#0968E8] border border-solid border-[#0968E8] bg-white p-1 rounded w-1/2 text-center mb-6">
        Employees Key Feature
      </p>
      <h4 className="text-[30px] font-semibold text-center sm:text-left">
        Smarter Shift Management
      </h4>
      <p className="text-[#ADADAD] font-medium text-[14px] text-center sm:text-left">
        Streamline shift management with powerful tools to keep your team on track.
      </p>

      {/* Features */}
      <div className="mt-4">
        {[
          {
            title: "Keep an Eye on Active Shifts",
            description: "See who's currently working in real time.",
          },
          {
            title: "Easily Schedule Shifts",
            description: "Create and adjust schedules to fit your team's needs.",
          },
          {
            title: "Stay on Top of Attendance",
            description: "Easily check your team's punctuality.",
          },
          {
            title: "Handle Overtime Requests",
            description: "Review and approve overtime requests.",
          },
        ].map(({ title, description }, index) => (
          <div key={index} className="flex gap-2 mt-3">
            <FaRegCircleCheck className="mt-1 text-blue-700" />
            <div>
              <strong className="text-[16px] font-medium">{title}</strong>
              <p className="text-[#ADADAD] text-[13px] font-normal">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Image */}
    <div className="w-[60%] sm:w-1/3 relative mt-10 sm:mt-0">
      <img
        src="/img/Frame 1618868303.png"
        alt="phone"
        className="ml-10 relative z-0"
      />
      <img
        src="/img/Group 10051.png"
        alt="overlay"
        className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10"
      />
    </div>
  </div>
</section>


        <section className="m-4">
          <Pricing />
        </section>

        <section className="m-5">
          <Testimonial />
        </section>
        <section className="flex flex-col  justify-evenly items-center mt-6">
          <Faq />
        </section>

        <section className="mt-10 flex items-center justify-center relative top-20">
          <img src="/img/Get started.png" alt="" className="w-[80%]" />
        </section>
      </main>

      <footer className="bg-[#0968E81A]">
        <Footerpage />
      </footer>
    </div>
  );
};

export default Home;
