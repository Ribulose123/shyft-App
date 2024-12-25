import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const pathway = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      enablePageScroll();
    } else {
      setIsMenuOpen(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!isMenuOpen) return;
    enablePageScroll();
    setIsMenuOpen(false);
  };

  const menuItems = ["Product", "Features", "Pricing", "Testimonials"];
  const menuItemClass = "text-gray-300 hover:text-gray-200 cursor-pointer";

  return (
    <div className="bg-transparent relative">
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <FaClock className="text-blue-600 text-xl" />
          <h3 className="text-blue-600 text-2xl font-bold">Shyfy</h3>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex justify-evenly items-center flex-grow">
          <div className="flex gap-6">
            {menuItems.map((item, index) => (
              <p
                key={index}
                onClick={handleClick}
                className={`${menuItemClass} ${
                  pathway.pathname.includes(item.toLowerCase()) ? "text-blue-500 font-bold" : ""
                }`}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="flex gap-3">
          <Link to='/login'>
              <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded hover:bg-gray-200 border border-solid">
                Login
              </button>
              </Link>

                <Link to='/signin'>
                <button className="bg-blue-700 text-white font-semibold py-2 px-4 rounded hover:bg-blue-900">
                Sign In
              </button>
                </Link>
              
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="text-gray-300 hover:text-gray-200 sm:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={handleClick}
            aria-label="Close Menu Overlay"
          />
          <div
            className="absolute top-0 left-0 w-full bg-gray-800 rounded-bl-[10rem] z-50 flex flex-col items-center justify-between p-6 transition-all"
          >
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-gray-200 self-end mt-2"
              aria-label="Close Menu"
            >
              <FaTimes size={24} />
            </button>

            {/* Menu Items */}
            <div className="flex flex-col items-center gap-4">
              {menuItems.map((item, index) => (
                <p
                  key={index}
                  onClick={handleClick}
                  className={`${menuItemClass} ${
                    pathway.pathname.includes(item.toLowerCase()) ? "text-blue-500 font-bold" : ""
                  }`}
                >
                  {item}
                </p>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <Link to='/login'>
              <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded hover:bg-gray-200 border border-solid">
                Login
              </button>
              </Link>

                <Link to='/signin'>
                <button className="bg-blue-700 text-white font-semibold py-2 px-4 rounded hover:bg-blue-900">
                Sign In
              </button>
                </Link>
              
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
