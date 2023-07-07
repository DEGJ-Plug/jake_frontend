import { NavLink, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import {
  MdOutlineProductionQuantityLimits,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";

const Header = () => {
  return (
    <header className="flex justify-between items-center mx-12 my-3">
      <div className="text-4xl font-bold animate-bounce ">
        <span className="text-blue-600 ">J</span>
        <span className="text-gray-400 ">a</span>
        <span className="text-blue-600">K</span>
        <span className="text-gray-400 animate-pulse">e</span>
      </div>
      <div className="font-normal flex justify-betweem text-xl">
        <ul className="flex transition-all">
          <FaHome className="md:hidden mx-4 hover:text-blue-600 hover:scale-125" />
          <li className="mx-3 hidden md:flex hover:text-blue-600 hover:scale-125 transition-all">
            <NavLink
              to="/"
              className={({ isActive }) => isActive && "text-blue-600"}
            >
              Home
            </NavLink>
          </li>
          <ul className="flex transition-all">
            <MdOutlineProductionQuantityLimits className="md:hidden mx-4 hover:text-blue-600 hover:scale-125" />
            <li className=" mx-3 hidden md:flex hover:text-blue-600 hover:scale-125 transition-all">
              <NavLink
                to="/products"
                className={({ isActive }) => isActive && "text-blue-600"}
              >
                Products
              </NavLink>
            </li>
          </ul>
          <ul className="flex transition-all">
            <MdOutlineMiscellaneousServices className="md:hidden mx-4 hover:text-blue-600 hover:scale-125" />
            <li className="mx-3 hidden md:flex hover:text-blue-600 hover:scale-125 transition-all">
              <NavLink
                to="/services"
                className={({ isActive }) => isActive && "text-blue-600"}
              >
                Services
              </NavLink>
            </li>
          </ul>
          <ul className="flex transition-all">
            <RiCustomerService2Fill className="md:hidden mx-4 hover:text-blue-600 hover:scale-125" />
            <li className="mx-3 hidden md:flex hover:text-blue-600 hover:scale-125 transition-all">
              <NavLink
                to="/FAQ"
                className={({ isActive }) => isActive && "text-blue-600"}
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </ul>
      </div>
      <div className="font-normal text-lg">
        <button className="bg-blue-600 p-4 text-white rounded-md hover:bg-blue-700 shadow-md shadow-gray-600">
          <Link to="/register">Try JaKe</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
