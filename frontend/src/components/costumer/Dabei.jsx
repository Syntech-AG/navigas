import React from "react";

const Dabei = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-[#010101] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold text-center leading-snug">
        Was ist alles dabei im Auto Abo Pro?
      </h1>

      <div className="flex items-center justify-center mt-10">
        <img
          src="/images/veturat.png"
          alt="Auto Abo Pro"
          className="hidden md:block w-full h-auto"
        />
        <img
          src="/images/car-mobile.png"
          alt="Auto Abo Pro Mobile"
          className="block md:hidden w-full h-auto"
        />
      </div>

      <div className="flex flex-row justify-center -mt-17 md:-mt-25">
        <button
          className="rounded-xl bg-gradient-to-r text-[14px] md:text-[16px] from-[#0847A4] to-[#0a6fff] px-10 py-4 text-white
               shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          Fahrzeuge entdecken
        </button>
      </div>
    </div>
  );
};

export default Dabei;
