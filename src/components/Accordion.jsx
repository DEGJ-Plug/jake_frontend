import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Accordion = () => {
  const items = [
    {
      id: "1",
      label: "How do I get the product I bought?",
      content:
        "You have to make an arrangement with the seller on how you get the product you purchased or you can engage the services of a delivery organization integrated into Jake platform",
    },
    {
      id: "2",
      label: "As a seller, how do I find buyers?",
      content:
        "Once you're a registered seller on Jake platform, You don't have to find buyers as the products you upload will be shown to buyers on the platform and you'll be contacted by the buyer if he or she wants your product",
    },
    {
      id: "3",
      label: "How do I pay for the services or products I'm interested in?",
      content:
        "You have to come to an agreement with the seller on the means of payment, jake'll always advice you get to see the product you purchased first before making payment",
    },
    {
      id: "4",
      label:
        "How do I know the sellers and logistics personnel are not scammers?",
      content:
        "Jake has already veted any registered sellers and logistics services before showcasing them to you that is the reason upon your interest on a particular product you'll be able to contact the seller and also view the seller's details such as business address, telephone number etc for you to make your own verification until you're comfortable",
    },
    {
      id: "5",
      label:
        "Do I need to purchase a product before having access to engage the services of logistics personnel?",
      content:
        "No you don't have to necessarily purchase a product before you can engage the services of logistics personnel, if you need the services of a logistics personnel then feel free to engage them on jake platform",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const handleClick = () => {
      if (expandedIndex === index) setExpandedIndex(-1);
      else setExpandedIndex(index);
    };

    const icon = (
      <span className="text-4xl">
        {isExpanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={handleClick}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded w-5/6">{renderedItems}</div>;
};

export default Accordion;
