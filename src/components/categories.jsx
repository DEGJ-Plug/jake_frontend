const categories = () => {
  return (
    <section className="capitalize ml-4 mr-12 flex text-lg justify-between ">
      <div className="block ml-12 min-w-fit  font-medium md:flex ">
        <ul className=" mr-12 ">
          <li className="hover:scale-110 transition-all sm:py-1">
            <a href="" className=" hover:scale-110 hover:shadow-lg">
              electronics
            </a>
          </li>
        </ul>
        <ul className=" mr-12">
          <li className="hover:scale-110  sm:py-1 transition-all">
            <a href="" className=" hover:shadow-lg ">
              cosmetics
            </a>
          </li>
        </ul>
        <ul className=" mr-12">
          <li className="hover:scale-110  sm:py-1 transition-all">
            <a href="" className=" hover:shadow-lg">
              cloths
            </a>
          </li>
        </ul>
        <ul className=" mr-12">
          <li className="hover:scale-110 sm:py-1 transition-all">
            <a href="" className="  hover:shadow-lg">
              funitures
            </a>
          </li>
        </ul>
        <ul className="mr-12">
          <li className="hover:scale-110 sm:py-1 transition-all">
            <a href="" className="hover:shadow-lg">
              books
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a
          href=""
          className="mx-5 transition-all hover:shadow-lg hover:underline text-blue-900"
        >
          see all
        </a>
      </div>
    </section>
  );
};

export default categories;
