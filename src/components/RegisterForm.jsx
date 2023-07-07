import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8090/auth/register",
        credentials
      );

      if (response.status === 201) {
        toast.success(response.data.message);
      } else if (response.status === 400) {
        toast.error(response.data.error);
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow-lg mx-auto my-8 max-w-md p-8 w-full h-full mt-28">
      <div>
        <h1 className="font-semibold text-2xl text-center mb-10 text-gray-600 mt-4">
          REGISTER
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <div>
            <label htmlFor="userName">Username</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your Username"
              className="border w-full outline-none py-1"
              name="userName"
              value={credentials.userName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-5">
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your Email address"
              className="border w-full outline-none py-1"
              name="email"
              value={credentials.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-5">
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              className="border w-full outline-none py-1"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full border border-gray-200 shadow-sm bg-blue-500 py-3 text-white rounded-sm hover:bg-blue-700 mb-5"
        >
          REGISTER
        </button>
        <h3 className=" text-center">
          Already have an account?
          <Link to="/login" className="ml-3 text-blue-500">
            Login
          </Link>
        </h3>
      </form>
    </div>
  );
};

export default RegisterForm;
