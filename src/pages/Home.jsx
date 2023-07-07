import Header from "../components/Header";
import SearchProduct from "../components/SearchProduct";
import Categories from "../components/categories";
import Product from "../components/product";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchProduct />
      <Categories />
      <Product />
      
    </div>
  );
};

export default Home;
