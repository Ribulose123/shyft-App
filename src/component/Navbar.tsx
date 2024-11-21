import React from 'react'

import { FaClock } from "react-icons/fa6";

const Navbar:React.FC = () => {
  return (
    <div className="bg-transparent ">
  <nav className="flex  justify-evenly items-center p-2 flex-wrap">
    <div className='flex items-center justify-center gap-2'>
      <FaClock className='text-blue-600 text-xl'/>
      <h3 className="text-blue-600 text-2xl font-bold">Shyfy</h3>
    </div>
    <div className="flex  gap-4 mt-4 md:mt-0">
      <p className="text-gray-300 hover:text-gray-200 cursor-pointer">Product</p>
      <p className="text-gray-300 hover:text-gray-200 cursor-pointer">Features</p>
      <p className="text-gray-300 hover:text-gray-200 cursor-pointer">Pricing</p>
      <p className="text-gray-300 hover:text-gray-200 cursor-pointer">Testimonials</p>
    </div>
    <div className="flex gap-3 mt-4 md:mt-0">
      <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded hover:bg-gray-200 border border-solid">
        Login
      </button>
      <button className="bg-blue-700 text-white font-semibold py-2 px-4 rounded hover:bg-blue-900">
        Sign In
      </button>
    </div>
  </nav>
</div>

  )
}

export default Navbar