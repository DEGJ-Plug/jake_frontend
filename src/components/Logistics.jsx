import logistics from "../assets/logistics.png";
const Logistics = () => {
  return (
    <section className="flex md:flex-row items-center md:justify-between md:mx-20 mx-1 my-1 md:my-10 rounded-lg flex-col-reverse">
      <div className="md:ml-20 md:w-3/6 ml-4 w-5/6">
        <h1 className="font-bold md:text-2xl mb-6 text-lg text-gray-600">
          Not sure how you get the product you've bought? <br /> Jake can help
          you with a Logistics personnel or organization <br /> Click the button
          below to find one 😉
        </h1>
        <button className="bg-blue-600 rounded-xl p-2 text-white hover:bg-blue-700">
          Find Delivery Service
        </button>
      </div>
      <div>
        <img className="md:m-4 m-2" src={logistics} alt="logistics" />
      </div>
    </section>
  );
};

export default Logistics;
