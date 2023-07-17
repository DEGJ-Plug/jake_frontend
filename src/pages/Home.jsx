import Header from "../components/Header";
import SearchProduct from "../components/SearchProduct";
import Categories from "../components/categories";
import Product from "../components/product";
import Footer from "../components/footer";
import ProductList from "../components/ProductList";
import Logistics from "../components/Logistics";
import FAQ from "../components/Faq";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchProduct />
      <Categories />
      <Product />
      <ProductList />
      <Logistics />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
