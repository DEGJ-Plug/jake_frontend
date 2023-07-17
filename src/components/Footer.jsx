
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-600 md:px-40 px-3 py-8">
      <div className="flex md:flex-row md:justify-between md:items-center flex-col">
        <div className="text-4xl font-bold cursor-pointer">
          <Link to="/">
            <span className="text-blue-600">J</span>
            <span className="text-white">a</span>
            <span className="text-blue-600">K</span>
            <span className="text-white">e</span>
          </Link>
        </div>
        <div>
          <ul className="flex flex-col">
            <li className="text-white my-2">
              <Link to="#">About</Link>
            </li>
            <li className="text-white my-2">
              <Link to="#">Services</Link>
            </li>
            <li className="text-white my-2">
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col">
            <li className="text-white my-2">
              <Link to="#">Terms of Service</Link>
            </li>
            <li className="text-white my-2">
              <Link to="#">General Terms & Condition</Link>
            </li>
            <li className="text-white my-2">
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="md:my-0 my-2">
          <h1 className="text-white">want to sell or render service?</h1>
          <button className="bg-blue-600 p-3 text-white rounded-md hover:bg-blue-700 shadow-md shadow-gray-600 md:w-[110px] w-full md:mt-0 mt-2 md:mb-0 mb-2">
            <Link to="/register">Try JaKe</Link>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 mb-2">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
