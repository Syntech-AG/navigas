import React from "react";

const data = [
  {
    image: "/images/img1.svg",
    title: "Service & Reparturen",
  },
  {
    image: "/images/img2.svg",
    title: "Ersatzfahrzeug",
  },
  {
    image: "/images/img3.svg",
    title: "Premium-Reifen & Lagerung",
  },
  {
    image: "/images/img4.svg",
    title: "Schadenmanagement",
  },
  {
    image: "/images/img5.svg",
    title: "7/24 europaweite Assistance",
  },
  {
    image: "/images/img6.svg",
    title: "Versicherung & CarCare",
  },
  {
    image: "/images/img7.svg",
    title: "Bussenmanagement",
  },
  {
    image: "/images/img8.svg",
    title: "Lieferung an Wunschort",
  },
];

const ServicesType2 = () => {
  return (
    <div>
      <div className="container grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-14 gap-x-6 py-23">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <div className="bg-[#E8EBF2] rounded-full p-10">
              <img className="w-[50px] h-[50px]" src={item.image} alt="" />
            </div>
            <h1 className="text-[24px] font-semibold">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesType2;
