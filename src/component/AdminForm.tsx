import React, { useState, useRef } from "react";
import { db } from "../Config/Firebase";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import {  } from "react-icons/fa6";

const AdminForm: React.FC = () => {
  const [fullname, setFullName] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [employeesRole, setEmployeesRole] = useState<string>("");
  const [employeesemail, setEmployeesEmail] = useState<string>("");
  const [employeesname, setEmployeesName] = useState<string>("");
  const [finishModal, setFinishModal] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const errorRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const adminReg = async () => {
    const adminisRef = doc(db, "admin", fullname);

    if (!employeesRole || !employeesemail || !employeesname) {
      setFinishModal(true);
      errorRef.current?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    try {
      await setDoc(adminisRef, {
        fullname,
        position,
        email,
        employeesemail,
        employeesRole,
        employeesname,
      });

      setShowModal(true);
      console.log("Admin data saved successfully.");
    } catch (err) {
      console.error("Error saving admin data:", err);
    }
  };

  const handlePasswordSetup = () => {
    setShowModal(false);
    navigate("/password");
  };

  return (
    <div>
      <h3 className="text-blue-600">Admin(s)</h3>
      <p className="text-gray-500 text-[13px]">Admin(s) info</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          adminReg();
        }}
      >
        {/* Wrap the content with a scrollable div */}
        <div className="h-[300px] overflow-auto hover:overflow-auto sm:overflow-auto sm:-webkit-overflow-scrolling-touch scrollbar-hide">
          <div>
            <div className="mb-1">
              <label htmlFor="name" className="block text-black text-sm font-bold">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter admin name"
                className="shadow appearance-none border rounded w-[88%] p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-300"
                required
              />
            </div>
            <div className="mb-1">
              <label htmlFor="position" className="block text-black text-sm font-bold">
                Position
              </label>
              <input
                type="text"
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="Enter admin role"
                className="shadow appearance-none border rounded w-[88%] p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-300"
                required
              />
            </div>
            <div className="mb-1">
              <label htmlFor="email" className="block text-black text-sm font-bold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="shadow appearance-none border rounded w-[88%] p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-300"
                required
              />
            </div>
          </div>

          <div className="border-b-2 border-gray-300 border-solid pb-6 w-[88%]"></div>

          <div className="mt-4">
            <h3 className="text-blue-600">Employees(s)</h3>
            <p className="text-gray-500 text-[13px]">Enter Employees details below</p>

            <div className="mb-1 mt-2">
              <label htmlFor="name" className="block text-black font-bold text-sm">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={employeesname}
                onChange={(e) => setEmployeesName(e.target.value)}
                placeholder="Enter Employees name"
                className="shadow appearance-none border rounded w-[88%] p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-300"
                required
              />
            </div>

            <div className="mb-1">
              <label htmlFor="position" className="block text-black text-sm font-bold">
                Position
              </label>
              <input
                type="text"
                id="position"
                value={employeesRole}
                onChange={(e) => setEmployeesRole(e.target.value)}
                placeholder="Enter Employees role"
                className="shadow appearance-none border rounded w-[88%] p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-300"
                required
              />
            </div>

            <div className="mb-1">
              <label htmlFor="email" className="block text-black text-sm font-bold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={employeesemail}
                onChange={(e) => setEmployeesEmail(e.target.value)}
                placeholder="Enter email address"
                className="shadow appearance-none border rounded w-[88%] p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-300"
                required
              />
            </div>
          </div>
        </div>

        <div
          ref={errorRef}
          className={finishModal ? "text-red-500 mt-2" : "hidden"}
          aria-live="assertive"
        >
          Please fill in all employee details.
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4 w-[88%]"
        >
          Create Account
        </button>
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-15 flex items-center justify-center">
          <div className="w-full sm:w-[90%] md:w-[50%] lg:w-[30%] mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col justify-center items-center">
            <FaCheckDouble className="text-green-500 text-[58px]" />
            <h2 className="text-xl font-bold">Account Creation Successful</h2>
            <p className="text-gray-500 text-sm mt-2 text-center">
              Set up your company password with the unique id assigned to your account.
            </p>

            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded mt-4 w-[88%]"
              onClick={handlePasswordSetup}
            >
              Set-Up Password
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminForm;
