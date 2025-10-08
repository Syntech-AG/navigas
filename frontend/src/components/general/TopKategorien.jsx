import React from "react";

const TopKategorien = () => {
  return (
    <div className="relative">
      <img
        src="/images/topbg.png"
        alt=""
        className="w-full md:h-auto object-cover absolute -z-1 h-full"
      />
      <div className=" flex items-center justify-center md:py-25 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-[54px] font-semibold text-white text-center mb-6 md:mb-8 lg:mb-10">
            Top-Kategorien
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            <div className="flex flex-col justify-between items-start gap-2 md:gap-[10px]">
              <img src="/images/container1.png" alt="" className="w-full" />
              <h1 className="uppercase text-xs md:text-[14px] text-white">
                kleinwagen
              </h1>
              <p className="font-bold text-base md:text-lg lg:text-[20px] text-white">
                699 CHF/Monat - ab 12 Monate
              </p>
              <div className="text-[#B0CCF8] text-xs md:text-[14px] flex flex-row items-center justify-start gap-2 flex-wrap">
                <h1>Beispielkategorie</h1>
                <img src="/images/dot.svg" alt="" />
                <h1>Details im Factsheet (download)</h1>
              </div>
            </div>
            <div className="flex flex-col justify-between items-start gap-2 md:gap-[10px]">
              <img src="/images/container1.png" alt="" className="w-full" />
              <h1 className="uppercase text-xs md:text-[14px] text-white">
                kleinwagen
              </h1>
              <p className="font-bold text-base md:text-lg lg:text-[20px] text-white">
                699 CHF/Monat - ab 12 Monate
              </p>
              <div className="text-[#B0CCF8] text-xs md:text-[14px] flex flex-row items-center justify-start gap-2 flex-wrap">
                <h1>Beispielkategorie</h1>
                <img src="/images/dot.svg" alt="" />
                <h1>Details im Factsheet (download)</h1>
              </div>
            </div>
            <div className="flex flex-col justify-between items-start gap-2 md:gap-[10px]">
              <img src="/images/container1.png" alt="" className="w-full" />
              <h1 className="uppercase text-xs md:text-[14px] text-white">
                kleinwagen
              </h1>
              <p className="font-bold text-base md:text-lg lg:text-[20px] text-white">
                699 CHF/Monat - ab 12 Monate
              </p>
              <div className="text-[#B0CCF8] text-xs md:text-[14px] flex flex-row items-center justify-start gap-2 flex-wrap">
                <h1>Beispielkategorie</h1>
                <img src="/images/dot.svg" alt="" />
                <h1>Details im Factsheet (download)</h1>
              </div>
            </div>
          </div>
          <div class="flex flex-row items-center justify-center p-10">
            <button class="text-[#0453C8] bg-white px-6 py-3 rounded-2xl shadow-md transition-all duration-300 hover:bg-[#0453C8] hover:text-white hover:shadow-lg hover:-translate-y-1">
              Factsheet herunterladen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopKategorien;
