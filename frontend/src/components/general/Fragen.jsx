import React, { useState } from "react";

const Fragen = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Worin unterscheidet sich FlexRent vom Auto Abo?",
      answer:
        "FlexRent ist noch flexibler: ab 1 Monat, ideal fur temporare Einsatze. Das Abo ist fur langere, planbare Laufzeiten konzipiert.",
    },
    {
      question: "Wie schnell ist die Lieferung?",
      answer: "Die Lieferung erfolgt in der Regel innerhalb von 2-3 Werktagen.",
    },
    {
      question: "Welche Kilometer sind enthalten?",
      answer: "Die enthaltenen Kilometer variieren je nach gewähltem Paket.",
    },
    {
      question: "Kann ich das Fahrzeug tauschen?",
      answer:
        "Ja, ein Fahrzeugtausch ist unter bestimmten Bedingungen möglich.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between pt-[50px] md:pt-[180px] pb-[110px]">
      <div>
        <h1 className="text-[#010101] text-[48px]">Häufig Fragen</h1>
      </div>
      <div className="flex flex-col gap-4 w-full md:w-1/2 mt-22 md:mt-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="text-[#010101] text-[16px] font-medium">
                {faq.question}
              </span>
              <span
                className={`text-2xl text-gray-400 transition-transform duration-600 ease-in-out ${
                  openIndex === index ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`transition-all duration-600 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-6 py-4 bg-white border-gray-300">
                <p className="text-[#4A4C4A] text-[14px] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fragen;
