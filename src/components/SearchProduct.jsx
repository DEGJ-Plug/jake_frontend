import { FcSearch } from "react-icons/fc";
import headphone_pic from "../assets/headphone_pic.jpg";
const SearchProduct = () => {
  return (
    <section className="bg-blue-600 flex md:flex-row items-center md:justify-between md:mx-20 mx-1 my-1 md:my-14 rounded-lg flex-col">
      <div className="md:ml-20 md:w-3/6 ml-4 w-5/6">
        <h1 className="text-white font-bold md:text-2xl mb-6 text-lg">
          Get the best product at <br /> your home
        </h1>
        <div className="flex items-center bg-white rounded-lg md:px-2 px-1">
          <input
            className="w-full  py-2 text-xl outline-none "
            type="search"
            placeholder="Search for your favorite products"
          />
          <FcSearch className="text-4xl cursor-pointer hover:scale-125" />
        </div>
      </div>
      <div>
        <img className="md:m-4 m-2" src={headphone_pic} alt="headphone img" />
      </div>
    </section>
  );
};

export default SearchProduct;
