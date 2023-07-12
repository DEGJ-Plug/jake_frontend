import Header from "../components/Header";
import SearchProduct from "../components/SearchProduct";
import Categories from "../components/categories";
import Product from "../components/product";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchProduct />
      <Categories />
      <Product />
      <Footer />
    </div>
  );
};

export default Home;
