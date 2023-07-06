import { FcSearch } from "react-icons/fc";
import headphone_pic from "../assets/headphone_pic.jpg";
const SearchProduct = () => {
  return (
    <section className="bg-blue-600 flex items-center justify-between mx-16 my-16 rounded-lg">
      <div className="ml-20 w-3/6">
        <h1 className="text-white font-bold text-2xl mb-6">
          Get the best product at <br /> your home
        </h1>
        <div className="flex items-center bg-white py-3 rounded-xl px-2">
          <input
            className="w-full py-2 text-xl outline-none"
            type="search"
            placeholder="Search for your favorite products"
          />
          <FcSearch className="text-4xl cursor-pointer hover:scale-125" />
        </div>
      </div>
      <div>
        <img
          className="hidden m-4 sm:m-auto"
          src={headphone_pic}
          alt="headphone img"
        />
      </div>
    </section>
  );
};

export default SearchProduct;
