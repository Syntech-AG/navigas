import React from "react";

const Peaks = () => {
  const peaksData = [
    {
      id: 1,
      image: "/images/root1.png",
      title: "Mobilitätsengpässe",
      subtitle: "& Peaks",
      description:
        "Wenn es schnell gehen muss. Mit FlexRent überbrücken Sie Engpässe unkompilziert.",
      cta: "Let's get started!",
    },
    {
      id: 2,
      image: "/images/root2.png",
      title: "Temporäre",
      subtitle: "Mitarbeitende",
      description:
        "Mitarbeitende mobil ausrüsten, ganz ohne langfristige Bindung.",
      cta: "Let's get started!",
    },
    {
      id: 3,
      image: "/images/root3.png",
      title: "Elektromobilität",
      subtitle: "testen",
      description: "E-Fahrzeuge in der Praxis erleben und Erfahrungen sammeln.",
      cta: "Let's get started!",
    },
  ];

  return (
    <div className="container mx-auto mb-20 md:mb-[140px] px-4 md:px-6">
      {peaksData.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col items-center justify-center gap-6 md:gap-10 pt-20 md:pt-[140px] ${
            item.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="w-full md:w-1/2">
            <img src={item.image} alt="" className="w-full" />
          </div>
          <div className="flex flex-col items-start justify-between gap-4 md:gap-5 w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] text-[#020106] font-semibold">
              {item.title} <br />{" "}
              <span className="text-gray-500">{item.subtitle}</span>
            </h1>
            <p className="text-base md:text-lg text-[#494B4E]">
              {item.description}
            </p>
            <p className="text-sm md:text-base text-[#020106] uppercase font-semibold">
              {item.cta}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Peaks;
