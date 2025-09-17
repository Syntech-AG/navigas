import { useState } from "react";

const accordionItems = [
  {
    id: 1,
    title: "Versicherung & Carcare",
    icon: <img src="/images/sevice1.svg" alt="" />,
    content: "Detailed information about Versicherung & Carcare.",
  },
  {
    id: 2,
    title: "Wartung & Reparaturen",
    icon: <img src="/images/sevice2.svg" alt="" />,
    content: "Detailed information about Wartung & Reparaturen.",
  },
  {
    id: 3,
    title: "Fahrzeugsteuer",
    icon: <img src="/images/sevice3.svg" alt="" />,
    content: "Detailed information about Fahrzeugsteuer.",
  },
  {
    id: 4,
    title: "Assistance",
    icon: <img src="/images/sevice4.svg" alt="" />,
    content: "Detailed information about Assistance.",
  },
  {
    id: 5,
    title: "Ersatzfahrzeug",
    icon: <img src="/images/sevice5.svg" alt="" />,
    content: "Detailed information about Ersatzfahrzeug.",
  },
  {
    id: 6,
    title: "Fahrzeugnutzung",
    icon: <img src="/images/sevice6.svg" alt="" />,
    content: "Detailed information about Fahrzeugnutzung.",
  },
  {
    id: 7,
    title: "Zulassung",
    icon: <img src="/images/sevice7.svg" alt="" />,
    content: "Detailed information about Zulassung.",
  },
];

const AccordionItem = ({ item, isOpen, onToggle }) => {
  const { icon, title, content, id } = item;

  return (
    <div className="py-4 ">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
      >
        <div className="flex items-center sm:gap-8">
          <div className="flex-shrink-0 border border-[#CEDAED] rounded-2xl p-3 mr-4">
            {icon}
          </div>
          <span className="text-base font-medium text-gray-800">{title}</span>
        </div>
        <div className="flex items-center">
          <div className="w-0 sm:w-32 lg:w-45 xl:w-55 border-b-2 border-gray-200 mx-4"></div>
          <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <div
        id={`accordion-content-${id}`}
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="pt-4  text-gray-600">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default function Accordion() {
  const [openId, setOpenId] = useState(null);

  const leftColumnItems = accordionItems.filter((_, index) => index % 2 === 0);
  const rightColumnItems = accordionItems.filter((_, index) => index % 2 !== 0);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full container mx-auto bg-white font-sans md:mt-10 mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16">
        <div>
          {leftColumnItems.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
        <div>
          {rightColumnItems.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
