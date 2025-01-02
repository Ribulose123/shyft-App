import  { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdPeopleOutline } from "react-icons/md";
import { CiClock1} from "react-icons/ci";
import Overtime from "./Overtime";
import ShiftTrackeer from "./ShiftTrackeer";

const MainContent = () => {
  const [currentdDate] = useState<Date>(new Date());

  const dateFomate = (date: Date) => {
    const option: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return date.toLocaleString("en-US", option);
  };

  return (
    <div className="-mt-3">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <h3 className="font-bold dark:text-white text-[20px]">
            Dashboard OverView
          </h3>
          <p className="text-gray-300 text-[14px]">
            {dateFomate(currentdDate)}
          </p>
        </div>
        <button className="flex items-center gap-1 bg-blue-500 p-2 rounded-2xl text-white mr-4">
          Add new Shify <FaPlus />
        </button>
      </div>

      <div className="mt-2 flex gap-10">
        <div className="bg-white shadow-md  w-[20%] p-6 dark:bg-gray-800 rounded-xl">
            <div className="flex justify-between items-center ">
                <h3 className="text-[18px] dark:text-white">Total Employees</h3>
                <MdPeopleOutline  className="dark:text-gray-400"/ >
            </div>
            <h2 className="text-3xl mt-2 font-serif dark:text-white">1240</h2>
            <p className="text-[13px] text-gray-400">+20 from the last month</p>
        </div>
        <div className="bg-white shadow-md  w-[20%] p-4 rounded-xl dark:bg-gray-800">
            <div className="flex justify-between items-center">
                <h3 className="text-[18px] dark:text-white">Total Active Shift</h3>
                <MdPeopleOutline className="dark:text-gray-400"/>
            </div>
            <h2 className="text-3xl mt-2 font-serif dark:text-white">1200</h2>
            <p className="text-[13px] text-gray-400">+10 from the last month</p>
        </div>
        <div className="bg-white shadow-md  w-[20%] p-4 rounded-xl dark:bg-gray-800">
            <div className="flex justify-between items-center">
                <h3 className="text-[18px] dark:text-white">Total Work Hours</h3>
                <CiClock1 className="dark:text-gray-400"/>
            </div>
            <h2 className="text-3xl mt-2 font-serif dark:text-white">1200</h2>
            <p className="text-[13px] text-gray-400">+4.5% from the last month</p>
        </div>
        <div className="bg-white shadow-md  w-[20%] p-4 rounded-xl dark:bg-gray-800">
            <div className="flex justify-between items-center">
                <h3 className="text-[18px] dark:text-white">Total Overtime</h3>
                <CiClock1 className="dark:text-gray-400"/>
            </div>
            <h2 className="text-2xl mt-2 font-serif dark:text-white">273</h2>
            <p className="text-[13px] text-gray-400">+2.5% from the last month</p>
        </div>
      </div>

      <div className="flex w-full gap-10">
      <Overtime/>

      <ShiftTrackeer/>
      </div>
    </div>
  );
};

export default MainContent;
