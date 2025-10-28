import React, { useState } from "react";

const Fragen = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Worin unterscheidet sich FlexRent vom Auto Abo?",
      answer:
        "FlexRent ist die kurzfristige Mobilitätslösung für Unternehmen und Privatkunden, die nur für wenige Wochen oder Monate ein Fahrzeug benötigen. Das Auto Abo eignet sich hingegen für längere, planbare Laufzeiten. Mit FlexRent bleiben Sie maximal flexibel, ab 1 Monat und ohne langfristige Verpflichtungen.",
    },
    {
      question: "Wie schnell kann das Fahrzeug geliefert werden?",
      answer:
        "Fahrzeuge ab Lager werden innerhalb von 48 Stunden an Ihren gewünschten Übergabeort geliefert. Wenn es besonders eilig ist, bieten wir für CHF 150.– (exkl. MwSt.) eine Expresslieferung bereits am Folgetag an, bei Bestellung bis 12 Uhr Mittag.",
    },
    {
      question: "Wie viele Kilometer sind im Monat enthalten?",
      answer:
        "Im monatlichen Mietpreis sind 3’000 Kilometer enthalten. Zusätzliche Kilometer werden transparent und fair zum vereinbarten Preis verrechnet. Damit behalten Sie jederzeit die volle Kostenkontrolle.",
    },
    {
      question: "Kann ich das Fahrzeug wechseln oder die Laufzeit anpassen?",
      answer:
        "Ja, Sie können das Fahrzeug jederzeit wechseln oder die Laufzeit flexibel anpassen, beispielsweise bei geänderten Projekten, Personalbedarf oder neuen Anforderungen. So bleiben Sie mit FlexRent jederzeit mobil und unabhängig.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between pt-[30px] md:pt-[180px] pb-[40px] md:pb-[110px]">
      <div>
        <h1 className="text-[#010101] text-[48px]">Häufige Fragen</h1>
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
