import pic from "../assets/headphone_pic.jpg";
import '../index.css';
const product = () => {
  return (
    <section className=" product flex ml-16 mr-8 flex-wrap object-fit  ">
      <div className=" product-card bg-gray-300  ">
        <img src={pic} className="product-img " alt="logo" />
        <article>
          <div className="flex justify-around px-1 bg-blue-300">
            <h3>headphone</h3>
            <p>₦8000</p>
          </div>
        </article>
      </div>
      <div className=" product-card bg-gray-300  ">
        <img src={pic} className="product-img " alt="logo" />
        <article>
          <div className="flex justify-between px-1 bg-blue-300">
            <h3>headphone</h3>
            <p>₦8000</p>
          </div>
        </article>
      </div>
      <div className=" product-card bg-gray-300  ">
        <img src={pic} className="product-img " alt="logo" />
        <article>
          <div className="flex justify-between px-1 bg-blue-300">
            <h3>headphone</h3>
            <p>₦8000</p>
          </div>
        </article>
      </div>
      <div className=" product-card bg-gray-300  ">
        <img src={pic} className="product-img " alt="logo" />
        <article>
          <div className="flex justify-between px-1 bg-blue-300">
            <h3>headphone</h3>
            <p>₦8000</p>
          </div>
        </article>
      </div>
      <div className=" product-card bg-gray-300  ">
        <img src={pic} className="product-img " alt="logo" />
        <article>
          <div className="flex justify-between px-1 bg-blue-300">
            <h3>headphone</h3>
            <p>₦8000</p>
          </div>
        </article>
      </div>
      <div className=" product-card bg-gray-300   ">
        <img src={pic} className="product-img " alt="logo" />
        <article>
          <div className="flex justify-between px-1 bg-blue-300">
            <h3>headphone</h3>
            <p>₦8000</p>
          </div>
        </article>
      </div>
      <div className=" product-card bg-gray-300  ">
        <img src={pic} className="product-img " alt="logo" />
        <article>
          <div className="flex justify-between px-1 bg-blue-300">
            <h3>headphone</h3>
            <p>₦8000</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default product;
