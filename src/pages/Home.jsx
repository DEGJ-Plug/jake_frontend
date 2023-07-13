import Header from "../components/Header";
import SearchProduct from "../components/SearchProduct";
import ProductList from "../components/ProductList";
import Logistics from "../components/Logistics";
import FAQ from "../components/Faq";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchProduct />
      <ProductList />
      <Logistics />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
