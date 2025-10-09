import React from "react";

const Dabei = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-[#010101] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold text-center leading-snug">
        Was ist alles dabei im Auto Abo Pro?
      </h1>
      <div className="flex items-center justify-center mt-10">
        <img src="/images/veturat.png" alt="" className="w-full md:h-auto" />
      </div>
      <div className="flex flex-row justify-center -mt-25">
        <button
          className="rounded-xl bg-gradient-to-r from-[#0847A4] to-[#0a6fff] px-10 py-4 text-white
               shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          Fahrzeuge entdecken
        </button>
      </div>
    </div>
  );
};

export default Dabei;
