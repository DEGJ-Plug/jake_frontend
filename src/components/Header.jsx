import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center mx-12 my-3">
      <div className="text-4xl font-bold">
        <span className="text-blue-600">J</span>
        <span className="text-gray-400">a</span>
        <span className="text-blue-600">K</span>
        <span className="text-gray-400">e</span>
      </div>
      <div className="font-normal text-xl">
        <ul className="flex">
          <li className="mx-3 hover:text-blue-600 hover:scale-125">
            <NavLink
              to="/"
              className={({ isActive }) => isActive && "text-blue-600"}
            >
              Home
            </NavLink>
          </li>
          <li className="mx-3 hover:text-blue-600 hover:scale-125">
            <NavLink
              to="/products"
              className={({ isActive }) => isActive && "text-blue-600"}
            >
              Products
            </NavLink>
          </li>
          <li className="mx-3 hover:text-blue-600 hover:scale-125">
            <NavLink
              to="/services"
              className={({ isActive }) => isActive && "text-blue-600"}
            >
              Services
            </NavLink>
          </li>
          <li className="mx-3 hover:text-blue-600 hover:scale-125">
            <NavLink
              to="/FAQ"
              className={({ isActive }) => isActive && "text-blue-600"}
            >
              FAQ
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="font-normal text-lg">
        <button className="bg-blue-600 p-4 text-white rounded-md hover:bg-blue-700 shadow-md shadow-gray-600">
          <Link>Try JaKe</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
