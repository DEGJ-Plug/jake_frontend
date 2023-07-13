import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import ProductDetails from "./ProductDetails";

const ProductList = () => {
  const [genre, setGenre] = useState("See All");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        if (genre === "See All") {
          const response = await axios.get("http://localhost:8090/product/all");
          setProducts(response.data.products);
        } else {
          const response = await axios.get(
            `http://localhost:8090/product/all/${genre}`
          );
          setProducts(response.data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [genre]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowPopUp(true);
  };

  const handleProductClose = () => {
    setSelectedProduct(null);
    setShowPopUp(false);
  };

  const handleGenreChange = (selectedGenre) => {
    setGenre(selectedGenre);
  };

  return (
    <div className="my-4">
      <div className="md:flex md:justify-around overflow-x-auto whitespace-nowrap">
        <button
          className={`mx-2 px-2 rounded-xl ${
            genre === "electronics" ? "bg-blue-500" : "bg-gray-300"
          }`}
          onClick={() => handleGenreChange("electronics")}
        >
          Electronics
        </button>
        <button
          className={`mx-2 px-2 rounded-xl ${
            genre === "cosmetics" ? "bg-blue-500" : "bg-gray-300"
          }`}
          onClick={() => handleGenreChange("cosmetics")}
        >
          Cosmetics
        </button>
        <button
          className={`mx-2 px-2 rounded-xl ${
            genre === "clothing" ? "bg-blue-500" : "bg-gray-300"
          }`}
          onClick={() => handleGenreChange("clothing")}
        >
          Clothing
        </button>
        <button
          className={`mx-2 px-2 rounded-xl ${
            genre === "furniture" ? "bg-blue-500" : "bg-gray-300"
          }`}
          onClick={() => handleGenreChange("furniture")}
        >
          Furniture
        </button>
        <button
          className={`mx-2 px-2 rounded-xl ${
            genre === "others" ? "bg-blue-500" : "bg-gray-300"
          }`}
          onClick={() => handleGenreChange("others")}
        >
          Others
        </button>
        <button
          className={`mx-2 px-2 rounded-xl ${
            genre === "See All" ? "bg-blue-500" : "bg-gray-300"
          }`}
          onClick={() => handleGenreChange("See All")}
        >
          See All
        </button>
      </div>
      <div className="flex justify-around items-center flex-wrap my-2 md:px-12 px-2">
        {products.map((product) => (
          <ProductItem
            key={product._id}
            product={product}
            onClick={handleProductClick}
          />
        ))}
      </div>
      {showPopUp && (
        <ProductDetails
          product={selectedProduct}
          onClose={handleProductClose}
        />
      )}
    </div>
  );
};

export default ProductList;
