import React from "react";

const Car = () => {
  return (
    <div className="w-full relative mt-[100px]">
      <img
        src="/images/CarPhoto.png"
        className="w-full h-screen block object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07070A4D]/30 via-transparent to-[#0A1424]" />
      <div className="absolute bottom-20 left-0 w-full z-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 gap-6 md:gap-0">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-xs sm:text-sm md:text-base font-bold text-white uppercase">
              Partnergaragen
            </h1>
            <h1 className="text-[#D9D9D9] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              1'000+
            </h1>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-xs sm:text-sm md:text-base font-bold text-white uppercase">
              Verfügbarkeit
            </h1>
            <h1 className="text-[#D9D9D9] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              Ganze CH
            </h1>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-xs sm:text-sm md:text-base font-bold text-white uppercase">
              Jahre tätig
            </h1>
            <h1 className="text-[#D9D9D9] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              7+
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
