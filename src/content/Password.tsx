import { useState } from "react";
import { FaClock, FaCheckDouble } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const criteria = {
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const isPasswordValid =
    criteria.uppercase &&
    criteria.lowercase &&
    criteria.number &&
    criteria.special;

  const handleModal = () => {
    setShowModal(!showModal);
    if (showModal) navigate("/login");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="w-full max-w-md">
        <div className="flex items-center mb-6">
          <FaClock className="text-blue-600 text-[20px]" />
          <h3 className="text-blue-600 text-[20px] font-bold ml-2">Shyfy</h3>
        </div>

        <h3 className="text-2xl font-bold mb-2">Set-up Password</h3>
        <p className="text-gray-600 mb-6">Please set up your password</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="userId"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              User ID
            </label>
            <input
              type="text"
              id="userId"
              placeholder="Userlgr19"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="relative mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Password"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-10 text-gray-500 hover:text-gray-700"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? "🙈" : "👁"}
            </button>

            <ul className="mt-4 flex flex-wrap gap-2">
              {Object.keys(criteria).map((key) => (
                <li
                  key={key}
                  className={`${
                    criteria[key as keyof typeof criteria]
                      ? "text-green-600"
                      : "text-gray-600"
                  } border border-solid border-gray-300 p-2 rounded-2xl text-[12px]`}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)} letter
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <input
              type={isConfirmPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm Password"
              required
            />
            <button
              type="button"
              onClick={() =>
                setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
              }
              className="absolute right-3 top-10 text-gray-500 hover:text-gray-700"
            >
              {isConfirmPasswordVisible ? "🙈" : "👁"}
            </button>
          </div>

          {confirmPassword && (
            <p
              className={`text-sm ${
                password === confirmPassword
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {password === confirmPassword
                ? "✔ Passwords match"
                : "✘ Passwords do not match"}
            </p>
          )}

          <button
            type="submit"
            disabled={!isPasswordValid || password !== confirmPassword}
            className={`w-full mt-6 p-3 rounded-lg ${
              isPasswordValid && password === confirmPassword
                ? ""
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="w-full sm:w-[90%] md:w-[50%] lg:w-[30%] mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col justify-center items-center">
            <FaCheckDouble className="text-green-500 text-[58px]" />
            <h2 className="text-xl font-bold">Password Successfully Created</h2>
            <p className="text-gray-500 text-sm mt-2 text-center">
              Log in to enjoy seamless shift management
            </p>
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded mt-4 w-[88%]"
              onClick={handleModal}
            >
              Log in
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Password;
