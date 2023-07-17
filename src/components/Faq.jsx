import Accordion from "./Accordion";
import vector_faq from "../assets/vector_faq.png";

const FAQ = () => {
  return (
    <div className="flex md:flex-row-reverse justify-between items-center flex-col-reverse md:px-20 px-2 md:mt-0 mt-4 md:mb-0 mb-3">
      <Accordion />
      <div>
        <img src={vector_faq} alt="FAQ" />
      </div>
    </div>
  );
};

export default FAQ;
