import React from "react";

const data = [
  {
    image: "/images/service1.svg",
    title: "Versicherung",
    text: "Optimal versichert mit CHF 0.- Selbstbehalt bei Haftpflicht. Alles inklusive - kein Kleingedrucktes.",
  },
  {
    image: "/images/service2.svg",
    title: "24/7 Assistance",
    text: "Assistance europaweit - rund um die Uhr verfügbar. Schnelle Hilfe bei jeder Situation.",
  },
  {
    image: "/images/service3.svg",
    title: "Wartung & Reparatur",
    text: "Wartungen und Reparaturen sind vollständig abgedeckt. Sie kümmern sich um nichts.",
  },
  {
    image: "/images/service4.svg",
    title: "Ersatzfahrzeug",
    text: "Ab dem ersten Tag bei Bedarf verfügbar. Mobilität ist jederzeit garantiert.",
  },
  {
    image: "/images/service5.svg",
    title: "Fahrzeugsteuer",
    text: "Alle Kosten für Einlösung und Steuer sind enthalten. Kein Behördenstress für Sie.",
  },
  {
    image: "/images/service6.svg",
    title: "Premium-Reifen",
    text: "Sommer- & Winterreifen, Montage und Lagerung inklusive. Immer die beste Qualität.",
  },
  {
    image: "/images/service7.svg",
    title: "Zulassung",
    text: "Einfach starten. Null Startgebühr, null Wertverlust - volle Flexibilität ohne finanzielle Hürde.",
  },
  {
    image: "/images/service8.svg",
    title: "Fahrzeugnutzung",
    text: "Wählen Sie von 5'000 bis 70'000 km/Jahr. Anpassung jederzeit kostenlos möglich.",
  },
];

const ServicesType = () => {
  return (
    <div>
      <div className="container grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-14 gap-x-6 py-23">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <div className="bg-[#E8EBF2] rounded-full p-8">
              <img className="w-[50px] h-[50px]" src={item.image} alt="" />
            </div>
            <h1 className="text-[24px] font-semibold">{item.title}</h1>
            <p className="text-center text-[#494B4E] text-[16px] max-md:max-w-[80%]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesType;
