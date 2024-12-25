import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const Pricing: React.FC = () => {
  const [pricingDetials, setPricingDetials] = useState("Monthly");

  const handleToggle = (infoType: string) => {
    setPricingDetials(infoType);
  };

  return (
    <div
      className="flex
    flex-col items-center"
    >
      <p className="text-[#0968E8] border border-solid border-[#0968E8] bg-white p-1 rounded">
        Product Highlight
      </p>

      <h2 className="text-[30px] font-medium">Pricing</h2>
      <p className="text-[#ADADAD] text-[15px]">
        Transparent and tailored options tailored t0 suit your needs
      </p>

      <div className="flex gap-4 mt-4">
        {["Monthly", "Yearly"].map((infotype) => (
          <button
            key={infotype}
            className={`${
              pricingDetials === infotype
                ? "bg-blue-800 text-white text-[15px]"
                : "bg-white text-[#adadad] text-[13px]"
            } rounded px-2 py-2  hover:scale-95`}
            onClick={() => handleToggle(infotype)}
          >
            {infotype}
          </button>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 w-full h-[50%] items-center">
        {pricingDetials === "Monthly" && (
          <>
            {/* Starter Plan */}
            <div className="group bg-white/20 backdrop-blur-lg border border-white rounded-lg shadow-lg p-2 w-[150px]  sm:w-[380px] h-[95%] sm:h-full sm:p-6 hover:bg-blue-600 hover:text-white transition-all hover:scale-100">
              <strong className="text-[12px] sm:text[15px] font-bold">Starter Plan</strong>

              <p className="text-[8px] sm:text[13px] font-medium text-[#ADADAD] group-hover:text-white">
                Ideal for Individual and small teams
              </p>
              <strong className="text-[18px] sm:text-[28px] font-bold group-hover:text-white">
                $0{" "}
                <span className="text-[#ADADAD] text-[8px]  sm:text-[12px] group-hover:text-white">
                  Per month
                </span>
              </strong>

              <div className="border border-solid border-white flex flex-col justify-start items-start gap-1 sm:gap-4 p-2 sm:p-4">
                {[
                  "Wi-Fi verified Shift Logging",
                  "Shift Scheduling",
                  "Weekly Reports",
                  "Real-Time Attendance Tracking",
                  "Email Support",
                ].map((feature, index) => (
                  <div className="flex items-center gap-3" key={index}>
                    <FaCheck className="text-blue-600 group-hover:text-white text-[7px] sm:text-[12px]" />
                    <p className="text-[7px] sm:text-[14px] font-semibold group-hover:text-white">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <button className="bg-blue-700 group-hover:bg-white group-hover:text-blue-700 text-white text-[8px] sm:text[13px] border border-solid border-white p-2 sm:p-3 rounded-xl mt-5 flex items-center justify-center w-[70%] sm:w-full">
                  Select this plan
                </button>
              </div>
            </div>

            {/* Growth Plan */}
            <div className="group bg-white/20 backdrop-blur-lg border border-white rounded-lg shadow-lg p-2 w-[150px]  sm:w-[380px] h-[95%] sm:h-full sm:p-6 hover:bg-blue-600 hover:text-white transition-all hover:scale-100">
              <strong className="text-[12px] sm:text-[15px]  font-bold">Growth Plan</strong>

              <p className="text-[8px] sm:text-[13px]  font-medium text-[#ADADAD] group-hover:text-white">
                Ideal for Growing start-ups and mid-sized companies
              </p>
              <strong className="text-[18px] sm:text-[28px] font-bold group-hover:text-white">
                $49{" "}
                <span className="text-[#ADADAD] text-[8px] sm:text-[12px] group-hover:text-white">
                  Per month
                </span>
              </strong>

              <div className="border border-solid border-white flex flex-col justify-start items-start gap-1 sm:gap-4 p-2 sm:p-4">
                {[
                  "Everything in Starter Plan",
                  "Advanced Shift Scheduling",
                  "Customizable Dashboard",
                  "Priority Email Support",
                  "Mobile Push Notifications",
                ].map((feature, index) => (
                  <div className="flex items-center gap-3" key={index}>
                    <FaCheck className="text-blue-600 group-hover:text-white text-[7px] sm:text-[12px]" />
                    <p className="text-[7px] sm:text-[14px] font-semibold group-hover:text-white">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <button className="bg-blue-700 group-hover:bg-white group-hover:text-blue-700 text-white text-[8px] sm:text[13px] border border-solid border-white p-2 sm:p-3 rounded-xl mt-4 flex items-center justify-center w-[70%] sm:w-full ">
                  Select this plan
                </button>
              </div>
            </div>

            {/* Business Plan */}
            <div className="group bg-white/20 backdrop-blur-lg border border-white rounded-lg shadow-lg p-2 sm:p-6 w-[150px]
            sm:w-[380px] h-[95%] sm:h-full hover:bg-blue-600 hover:text-white transition-all">
              <strong className="text-[12px] sm:text-[15px] font-bold">Business Plan</strong>

              <p className="text-[8px] sm:text-[13px] font-medium text-[#ADADAD] group-hover:text-white">
                Perfect for larger organizations with advanced needs
              </p>
              <strong className="text-[18px] sm:text-[28px] font-bold group-hover:text-white">
                $99{" "}
                <span className="text-[#ADADAD] text-[7px] sm:text-[12px] group-hover:text-white">
                  Per month
                </span>
              </strong>

              <div className="border border-solid border-white flex flex-col justify-start items-start gap-1 sm:gap-4 p-2 sm:p-4">
                {[
                  "Everything in Growth Plan",
                  "Automated Payroll Integration",
                  "Advanced Analytics",
                  "Employee Shift Requests",
                  "Custom Roles & Permissions",
                ].map((feature, index) => (
                  <div className="flex items-center gap-3" key={index}>
                    <FaCheck className="text-blue-600 group-hover:text-white text-[7px] sm:text-[12px]" />
                    <p className="text-[7px] sm:text-[12px] font-semibold group-hover:text-white">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <button className="bg-blue-700 group-hover:bg-white group-hover:text-blue-700 text-white text-[8px] sm:text[13px] border border-solid border-white p-2 sm:p-3 rounded-xl mt-2 mb-4  sm:mt-4 flex items-center justify-center w-[70%] sm:w-full ">
                  Select this plan
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mt-1 grid grid-cols-3 gap-3 sm:gap-4 w-full h-[50%] items-center ">
        {pricingDetials === "Yearly" && (
           <>
           {/* Starter Plan */}
           <div className="group bg-white/20 backdrop-blur-lg border border-white rounded-lg shadow-lg p-2 sm:p-6 w-[150px]
            sm:w-[380px] h-[95%] sm:h-full hover:bg-blue-600 hover:text-white transition-all">
             <strong className="text-[10px] sm:text-[15px] font-bold">Starter Plan</strong>

             <p className="text-[8px] sm:text-[13px] font-medium text-[#ADADAD] group-hover:text-white">
               Ideal for Individual and small teams
             </p>
             <strong className="text-[18px] sm:text-[28px] font-bold group-hover:text-white">
               $0{" "}
               <span className="text-[#ADADAD] text-[7px] sm:text-[12px] group-hover:text-white">
                 Per month
               </span>
             </strong>

             <div className="border border-solid border-white flex flex-col justify-start items-start gap-1 sm:gap-4 p-2 sm:p-4">
               {[
                 "Wi-Fi verified Shift Logging",
                 "Shift Scheduling",
                 "Weekly Reports",
                 "Real-Time Attendance Tracking",
                 "Email Support",
               ].map((feature, index) => (
                 <div className="flex items-center gap-3" key={index}>
                   <FaCheck className="text-blue-600 group-hover:text-white text-[7px] sm:text-[12px]" />
                   <p className="text-[7px] sm:text-[12px] font-semibold group-hover:text-white">
                     {feature}
                   </p>
                 </div>
               ))}
             </div>

             <div className="flex items-center justify-center">
               <button className="bg-blue-700 group-hover:bg-white group-hover:text-blue-700 text-white text-[8px] sm:text[13px] border border-solid border-white p-2 sm:p-3 rounded-xl mt-5 flex items-center justify-center w-[70%] sm:w-full">
                 Select this plan
               </button>
             </div>
           </div>

           {/* Growth Plan */}
           <div className="group bg-white/20 backdrop-blur-lg border border-white rounded-lg shadow-lg p-2 sm:p-6 w-[150px]
            sm:w-[380px] h-[95%] sm:h-full hover:bg-blue-600 hover:text-white transition-all">
             <strong className="text-[10px] sm:text-[15px] font-bold">Growth Plan</strong>

             <p className="text-[8px] sm:text-[13px] font-medium text-[#ADADAD] group-hover:text-white">
               Ideal for Growing start-ups and mid-sized companies
             </p>
             <strong className="text-[18px] sm:text-[28px] font-bold group-hover:text-white">
               $595{" "}
               <span className="text-[#ADADAD] text-[7px] sm:text-[12px] group-hover:text-white">
                 Per month
               </span>
             </strong>

             <div className="border border-solid border-white flex flex-col justify-start items-start gap-1 sm:gap-4 p-2 sm:p-4">
               {[
                 "Everything in Starter Plan",
                 "Advanced Shift Scheduling",
                 "Customizable Dashboard",
                 "Priority Email Support",
                 "Mobile Push Notifications",
               ].map((feature, index) => (
                 <div className="flex items-center gap-3" key={index}>
                   <FaCheck className="text-blue-600 group-hover:text-white text-[7px] sm:text-[12px]" />
                   <p className="text-[7px] sm:text-[12px] font-semibold group-hover:text-white">
                     {feature}
                   </p>
                 </div>
               ))}
             </div>

             <div className="flex items-center justify-center">
               <button className="bg-blue-700 group-hover:bg-white group-hover:text-blue-700 text-white text-[8px] sm:text[13px] border border-solid border-white p-2 sm:p-3 rounded-xl mt-5 flex items-center justify-center w-[70%] sm:w-full">
                 Select this plan
               </button>
             </div>
           </div>

           {/* Business Plan */}
           <div className="group bg-white/20 backdrop-blur-lg border border-white rounded-lg shadow-lg p-2 sm:p-6 w-[150px]
            sm:w-[380px] h-[95%] sm:h-full hover:bg-blue-600 hover:text-white transition-all">
             <strong className="text-[10px] sm:text-[15px] font-bold">Business Plan</strong>

             <p className="text-[8px] sm:text-[13px] font-medium text-[#ADADAD] group-hover:text-white">
               Perfect for larger organizations with advanced needs
             </p>
             <strong className="text-[18px] sm:text-[28px] font-bold group-hover:text-white">
               $1090{" "}
               <span className="text-[#ADADAD] text-[7px] sm:text-[12px] group-hover:text-white">
                 Per month
               </span>
             </strong>

             <div className="border border-solid border-white flex flex-col justify-start items-start gap-1 sm:gap-4 p-2 sm:p-4">
               {[
                 "Everything in Growth Plan",
                 "Automated Payroll Integration",
                 "Advanced Analytics",
                 "Employee Shift Requests",
                 "Custom Roles & Permissions",
               ].map((feature, index) => (
                 <div className="flex items-center gap-3" key={index}>
                   <FaCheck className="text-blue-600 group-hover:text-white text-[7px] sm:text-[12px]" />
                   <p className="text-[7px] sm:text-[12px] font-semibold group-hover:text-white">
                     {feature}
                   </p>
                 </div>
               ))}
             </div>

             <div className="flex items-center justify-center">
               <button className="bg-blue-700 group-hover:bg-white group-hover:text-blue-700 text-white text-[8px] sm:text[13px] border border-solid border-white p-2 sm:p-3 rounded-xl mt-3 mb-2 flex items-center justify-center w-[70%] sm:w-full ">
                 Select this plan
               </button>
             </div>
           </div>
         </>
        )}
      </div>
    </div>
  );
};

export default Pricing;
