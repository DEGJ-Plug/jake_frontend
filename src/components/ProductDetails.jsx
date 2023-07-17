import { GrClose } from "react-icons/gr";
const ProductDetails = ({ product, onClose }) => {
  return (
    <div
      key={product._id}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white p-6 rounded-lg max-w-xl">
        <div
          className="md:hidden flex justify-end text-black text-xl ml-1 p-1 rounded-full"
          onClick={onClose}
        >
          <GrClose />
        </div>
        <div className="">
          <div className="flex flex-wrap">
            <div>
              <img
                src={product.img1}
                alt="product image"
                className="md:w-60 w-36 md:h-52 h-28"
              />
            </div>
            <div>
              <img
                src={product.img2}
                alt="product image"
                className="md:w-60 w-36 md:h-52 h-28"
              />
            </div>
            <div>
              <img
                src={product.img3}
                alt="product image"
                className="md:w-60 w-36 md:h-52 h-28"
              />
            </div>
            <div>
              <img
                src={product.img4}
                alt="product image"
                className="md:w-60 w-36 md:h-52 h-28"
              />
            </div>
          </div>
          <div>
            <h1 className="text-md font-semibold mb-1">
              {product.productName}
            </h1>
            <p className="mb-3">{product.productDescription}</p>
            <p>
              <span className="font-semibold">Price: N</span>
              {product.price}
            </p>
            <p>
              <span className="font-semibold">Quantity: </span>
              {product.quantity}
            </p>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-blue-600 p-3 text-white rounded-md hover:bg-blue-700 shadow-md shadow-gray-600 mt-2 mb-2">
            contact seller
          </button>
        </div>
      </div>
      <button
        className="bg-white text-black md:text-4xl text-xl md:ml-3 ml-1 md:p-3 p-1 rounded-full md:block hidden"
        onClick={onClose}
      >
        <GrClose />
      </button>
    </div>
  );
};

export default ProductDetails;
