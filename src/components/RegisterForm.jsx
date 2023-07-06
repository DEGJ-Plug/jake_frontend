import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Alert from "./Alert";

const RegisterForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleUserNameChange = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8090/auth/register", {
        userName,
        email,
        password,
      })
      .then((response) =>
        setRegistrationStatus({
          message: response.data.message,
          type: "success",
        })
      )
      .catch((err) => {
        setRegistrationStatus({
          message: err.message,
          type: "error",
        });
        console.log(err);
      });

    //   try {
    //     response = await axios.post("http://localhost:8090/auth/register", {
    //       userName,
    //       email,
    //       password,
    //     });

    //     setRegistrationStatus({
    //       message: response.data.message,
    //       type: "success",
    //     });
    //   } catch (error) {
    //     setRegistrationStatus({
    //       message: error.message,
    //       type: "error",
    //     })
    //   }
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow-lg mx-auto my-8 max-w-md p-8 w-full h-full mt-28">
      <div>
        <h1 className="font-semibold text-2xl text-center mb-10 text-gray-600 mt-4">
          REGISTER
        </h1>
      </div>
      {registrationStatus && (
        <Alert
          message={registrationStatus.message}
          type={registrationStatus.type}
        />
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <div>
            <label>Username</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your Username"
              className="border w-full outline-none py-1"
              value={userName}
              onChange={handleUserNameChange}
            />
          </div>
        </div>
        <div className="mb-5">
          <div>
            <label>Email</label>
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your Email address"
              className="border w-full outline-none py-1"
              value={email}
              onChange={handleEmailChange}
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
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
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
