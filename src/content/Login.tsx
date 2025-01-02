import { useState } from "react";
import { FaClock } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !password) {
      setError("User ID and Password are required");
      return;
    }
    setError("");
    navigate("/admin");
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="w-full max-w-md">
        <div className="flex items-center mb-6">
          <FaClock className="text-blue-600 text-[20px]" />
          <h3 className="text-blue-600 text-[20px] font-bold ml-2">Shyfy</h3>
        </div>
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
              placeholder="Enter your User ID (e.g., Userlgr19)"
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
              aria-label="Toggle password visibility"
              className="absolute right-3 top-10 text-gray-500 hover:text-gray-700"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? "🙈" : "👁"}
            </button>
            <Link to="#" className="mt-5 flex justify-end items-center">
              <p className="text-[14px] text-gray-500">Forgot Password?</p>
            </Link>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full mt-6 p-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
          >
            Log in
          </button>
        </form>

        <div className="flex flex-col justify-center items-center mt-7">
          <p className="text-[14px] text-gray-500 mb-3">
            Don't have an account?
          </p>
          <button
            className="border border-solid border-blue-600 p-2 rounded-2xl"
            onClick={() => navigate("/signin")}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
