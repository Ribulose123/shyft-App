import React, { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../Config/Firebase";
import ReactFlagsSelect from "react-flags-select";
import AdminForm from "./AdminForm";

interface SignInpops {
  step: number;
  handleNext: () => void;
}

const SignIn: React.FC<SignInpops> = ({ step, handleNext }) => {
  
  const [companyEmail, setCompanyEmail] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [noOfEmployees, setNoOfEmployees] = useState<number>();
 

  const registration = async () => {
    try {
      const signinRef = doc(db, "sign_up", companyEmail);

      await setDoc(signinRef, {
        companyEmail,
      country,
      noOfEmployees: noOfEmployees || 0,
      companyName,
      });

      console.log("User registered successfully!");
      handleNext(); // Proceed to the next step
    } catch (err) {
      console.error("Error during registration:", err);
    }
  };

  return (
    <div className="mt-3">
      {step === 1 && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            registration();
          }}
        >
          {/* Company Name */}
          <div className="mb-1">
            <label
              className="block text-black text-sm font-bold "
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="  Enter Company's Name"
              className="shadow appearance-none border rounded w-[88%] p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-300"
              required
            />
          </div>

          {/* Company Email */}
          <div className="">
            <label
              className="block text-black text-sm font-bold "
              htmlFor="companyEmail"
            >
              Company Email
            </label>
            <input
              type="email"
              id="companyEmail"
              value={companyEmail}
              onChange={(e) => setCompanyEmail(e.target.value)}
              placeholder="  Enter Company's Email"
              className="shadow appearance-none border rounded w-[88%] p-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-300"
              required
            />
          </div>

          {/* Country */}
          <div>
            <label
              htmlFor="country"
              className="block text-black text-sm font-bold"
            >
              Country
            </label>
            <ReactFlagsSelect
              selected={country}
              onSelect={(code) => setCountry(code)}
              searchPlaceholder="Search countries"
              searchable
              className="  rounded w-[88%] text-gray-700 focus:outline-none focus:shadow-outline placeholder:text-gray-300"
            />
          </div>

          {/* Number of Employees */}
          <div>
            <label
              className="block text-black text-sm font-bold"
              htmlFor="noOfEmployees"
            >
              Number of Employees
            </label>
            <input
              type="number"
              id="noOfEmployees"
              value={noOfEmployees || ""}
              onChange={(e) =>
                setNoOfEmployees(
                  e.target.value ? parseInt(e.target.value, 10) : undefined
                )
              }
              placeholder="  Enter Number of Employees"
              className="shadow appearance-none border rounded w-[88%] p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-300"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded mt-4 w-[88%]"
          >
            Next
          </button>
        </form>
      )}

      {step === 2 && (
        <div>
           <AdminForm/>
        </div>
      )}
    </div>
  );
};

export default SignIn;
