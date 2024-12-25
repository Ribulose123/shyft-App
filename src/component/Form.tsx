import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong, FaClock } from "react-icons/fa6";
import TrackingBar from "../content/TrackingBar";
import SignIn from "./SignIn";

const Form = () => {
const [step, setStep] = useState<number>(1)
    const navigate = useNavigate()
    const handleNext =()=> {setStep ((next)=>Math.min(next +1,2))}
  return (
    <div className="flex flex-col justify-center ml-12 sm:ml-0">
      <div className="flex justify-between ">
        <div className="flex justify-between items-center gap-4">
          <FaArrowLeftLong  onClick={()=> navigate('/')} className="cursor-pointer text-blue-600"/>

          <div className="flex items-center ">
            <FaClock className="text-blue-600 text-[15px]" />
            <h3 className="text-blue-600 text-[15px] font-bold">Shyfy</h3>
          </div>
        </div>

       {step ===1 && (
         <div className="flex items-center gap-1">
         <p className="text-gray-400 text-[12px]">Already have account?</p>
         <Link to='/login'>
             <button className="border border-solid border-blue-600 p-2 rounded-xl text-[13px]">Log in</button>
         </Link>
        </div>
       )}
      </div>

      <TrackingBar step={step}  />


      <SignIn step={step} handleNext={handleNext}/>
    </div>
  );
};

export default Form;
