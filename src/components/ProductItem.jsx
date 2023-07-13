const ProductItem = ({ product, onClick }) => {
  const handleClick = () => {
    onClick(product);
  };
  return (
    <div
      className="bg-gray-200 m-1 w-96 rounded-xl my-4 cursor-pointer md:hover:scale-110"
      onClick={handleClick}
    >
      <div className="flex justify-center items-center m-2">
        <img
          className="w-60 h-52"
          src={product.img1}
          alt={product.productName}
        />
      </div>
      <div className="ml-3 mb-2">
        <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
        <p className="text-gray-600">N{product.price}</p>
        <p className="text-gray-600">Quantity: {product.quantity}</p>
      </div>
    </div>
  );
};

export default ProductItem;
