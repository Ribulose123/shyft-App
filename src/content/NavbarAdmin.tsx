import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoBarChartOutline } from "react-icons/io5";
import { IoIosPeople, IoIosLogOut } from "react-icons/io";
import { CiClock1, CiSettings } from "react-icons/ci";
import { FaSun, FaMoon , FaWifi, FaBell} from "react-icons/fa";
import { Link } from "react-router-dom";
import MainContent from "./MainContent";

const NavbarAdmin = () => {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="flex h-screen">
      {/* Sidebar Navbar */}
      <div className="bg-white shadow dark:bg-gray-800 dark:text-white w-[15%] flex flex-col justify-between py-6">
        {/* Logo and Company Info */}
        <div className="px-4">
          <div className="flex items-center gap-2 mb-8">
            <img
              src="/img/Group 1619.png"
              alt="Company Logo"
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-black dark:text-white font-semibold text-lg">
                ApiResponse
              </h3>
              <p className="text-gray-300 text-sm">Company</p>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="space-y-8 dark:text-white mt-14 ">
            <li className="flex items-center gap-3 text-[13px] hover:text-blue-300">
              <AiOutlineHome className="text-xl" />
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="flex items-center gap-3 text-[13px] hover:text-blue-300">
              <IoBarChartOutline className="text-xl" />
              <Link to="/shifts">Shifts</Link>
            </li>
            <li className="flex items-center gap-3 text-[13px] hover:text-blue-300">
              <IoIosPeople className="text-xl" />
              <Link to="/employees">Employees</Link>
            </li>
            <li className="flex items-center gap-3 text-[13px] hover:text-blue-300">
              <CiClock1 className="text-xl" />
              <Link to="/overtime">OverTime</Link>
            </li>
            <li className="flex items-center gap-3 text-[13px] hover:text-gray-300">
              <CiSettings className="text-xl" />
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </div>

        {/* Logout and Theme Toggle */}
        <div className="px-4">
          <Link
            to="/"
            className="flex items-center gap-3 text-[13px] dark:text-white hover:text-gray-300 mb-6"
          >
            <IoIosLogOut className="text-2xl" />
            <span>Logout</span>
          </Link>
          <button
            className="w-full flex items-center gap-1 justify-center"
            onClick={() => setIsDarkMode((prev) => !prev)}
          >
            {isDarkMode ? (
              <FaMoon className="text-yellow-400 text-xl" />
            ) : (
              <FaSun className="text-yellow-500 text-xl" />
            )}
            <p className="text-[13px]">{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
            <div
              className={`relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center ${
                isDarkMode ? "justify-end" : "justify-start"
              }`}
            >
              <div className="w-5 h-5 bg-white rounded-full shadow"></div>
            </div>
          </button>
        </div>
      </div>

      
      <div className="w-full flex flex-col">
  {/* Top Navbar */}
  <div className="bg-white  dark:bg-gray-800 shadow flex items-center p-4">
  {/* Left Side - Title */}
  <div className="flex-shrink-0">
    <h1 className="text-xl font-bold dark:text-white">Welcome Back</h1>
  </div>

  {/* Middle - Input */}
  <div className="flex-grow flex justify-center mx-4">
    <div className="relative w-full max-w-sm">
      <input
        type="text"
        placeholder="Search anything in shfy...."
        className="w-full p-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none"
      />
    </div>
  </div>

  {/* Right Side - Profile */}
  <div className="flex-shrink-0 flex items-center gap-2">
    <FaWifi className="dark:text-gray-500"/>
    <FaBell className="dark:text-gray-500" />
    <img
      src="/public/img/img.jpeg"
      alt="Profile"
      className="w-8 h-8 rounded-full"
    />
    <span className="dark:text-white">Admin</span>
  </div>
</div>
 

 <div className="mt-4 ml-5">
    <MainContent/>
 </div>
</div>

    </div>
  );
};

export default NavbarAdmin;
