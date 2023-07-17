import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    emailUserName: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8090/auth/login",
        credentials
      );

      if (response.status === 200) {
        navigate("/");
        toast.success(response.data.message);
      } else if (response.status === 400) {
        toast.error(response.data.error);
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg mx-auto my-8 max-w-md p-8 w-full h-full mt-28">
      <div>
        <h1 className="font-semibold text-2xl text-center mb-10 text-gray-600 mt-4">
          LOGIN
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <div>
            <label>Email or Username</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your email address or username"
              className="border w-full outline-none py-1"
              name="emailUserName"
              value={credentials.emailUserName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-5">
          <div>
            <label>Password</label>
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
          onClick={handleSubmit}
          className="w-full border border-gray-200 shadow-sm bg-blue-500 py-3 text-white rounded-sm hover:bg-blue-700 mb-5"
        >
          {isLoading ? "LOADING..." : "LOGIN"}
        </button>
        <h3 className="text-center">
          Don't have an account?
          <Link to="/register" className="text-blue-500 ml-3">
            Register
          </Link>
        </h3>
      </form>
    </div>
  );
};

export default LoginForm;
