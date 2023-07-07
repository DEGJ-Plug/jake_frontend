import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShow = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex md:flex-row flex-col md:justify-between md:items-center md:mx-12 mx-4 my-3 sticky top-0">
      <div className="flex justify-between items-center">
        <div className="text-4xl font-bold cursor-pointer">
          <Link to="/">
            <span className="text-blue-600">J</span>
            <span className="text-gray-400">a</span>
            <span className="text-blue-600">K</span>
            <span className="text-gray-400">e</span>
          </Link>
        </div>
        <div onClick={handleShow} className="md:hidden">
          {isOpen ? (
            <GrClose className="text-[20px]" />
          ) : (
            <AiOutlineMenu className="text-[20px]" />
          )}
        </div>
      </div>

      <div className="font-normal md:text-xl text-2xl">
        <ul className={`md:flex ${isOpen ? "block my-6 mx-0" : "hidden"}`}>
          <li className="md:mx-3 m-1 md:my-0 my-4 hover:text-blue-600 md:hover:scale-125">
            <NavLink
              to="/"
              className={({ isActive }) => isActive && "text-blue-600"}
            >
              Home
            </NavLink>
          </li>
          <li className="md:mx-3 m-1 md:my-0 my-4 hover:text-blue-600 md:hover:scale-125">
            <NavLink
              to="/products"
              className={({ isActive }) => isActive && "text-blue-600"}
            >
              Products
            </NavLink>
          </li>
          <li className="md:mx-3 m-1 md:my-0 my-4 hover:text-blue-600 md:hover:scale-125">
            <NavLink
              to="/services"
              className={({ isActive }) => isActive && "text-blue-600"}
            >
              Services
            </NavLink>
          </li>
          <li className="md:mx-3 m-1 md:my-0 my-4 hover:text-blue-600 md:hover:scale-125">
            <NavLink
              to="/FAQ"
              className={({ isActive }) => isActive && "text-blue-600"}
            >
              FAQ
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        className={`font-normal text-lg md:flex ${isOpen ? "mt-6" : "hidden"}`}
      >
        <button className="bg-white p-4 text-blue-600 rounded-md hover:text-blue-700 shadow-md shadow-gray-600 border-2 border-blue-600 mr-4 md:w-[90px] w-full md:mb-0 mb-2">
          <Link to="/login">Login</Link>
        </button>
        <button className="bg-blue-600 p-4 text-white rounded-md hover:bg-blue-700 shadow-md shadow-gray-600 md:w-[110px] w-full md:mt-0 mt-2 md:mb-0 mb-2">
          <Link to="/register">Try JaKe</Link>
        </button>
      </div>
    </header>
  );
};
export default Header;
