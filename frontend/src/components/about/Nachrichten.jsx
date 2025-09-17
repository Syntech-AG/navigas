import React from "react";

const Nachrichten = () => {
  return (
    <div className="flex flex-col items-start justify-between mt-[110px] relative pb-5 md:pb-100">
      <img
        src="/images/banesa.png"
        alt="banesa"
        className="absolute bottom-0 right-0 h-auto select-none pointer-events-none hidden md:block"
      />

      <div className="flex flex-col items-start justify-between container mx-auto ">
        <h1 className="text-[#050505] font-bold text-[14px] tracking-[2px] uppercase">
          Newsroom
        </h1>
        <h1 className="font-semibold text-[54px] text-[#050505]">
          Neueste Nachrichten
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between mt-[45px] gap-6 w-full container mx-auto ">
        <div className="text-[#050505] flex-1 w-full">
          <img src="/images/image 16.png" alt="" className="w-full" />
          <h1 className="text-[14px] font-bold uppercase tracking-[2px] mt-2">
            Auto repair
          </h1>
          <h1 className="text-[18px] font-bold mt-1">
            solicare ermöglicht eine Entlöhnung und professionelle Unterstützung
            für p...
          </h1>
          <div className="flex flex-row items-center justify-start w-full text-[#909491] text-[14px] gap-3 mt-2">
            <h1>Sep. 5, 2022</h1>
            <h1>0 Comments</h1>
          </div>
        </div>

        <div className="text-[#050505] flex-1 w-full">
          <img src="/images/image 15.png" alt="" className="w-full" />
          <h1 className="text-[14px] font-bold uppercase tracking-[2px] mt-2">
            Auto repair
          </h1>
          <h1 className="text-[18px] font-bold mt-1">
            Hybrid-, Plug-in-Hybrid- oder Elektrofahrzeuge mit Range-Extender
          </h1>
          <div className="flex flex-row items-center justify-start w-full text-[#909491] text-[14px] gap-3 mt-2">
            <h1>Jan. 21, 2022</h1>
            <h1>0 Comments</h1>
          </div>
        </div>

        <div className="text-[#050505] flex-1 w-full">
          <img src="/images/image 17.png" alt="" className="w-full" />
          <h1 className="text-[14px] font-bold uppercase tracking-[2px] mt-2">
            Auto repair
          </h1>
          <h1 className="text-[18px] font-bold mt-1">
            Die Elektrifizierungsstrategie der Fahrzeughersteller
          </h1>
          <div className="flex flex-row items-center justify-start w-full text-[#909491] text-[14px] gap-3 mt-2">
            <h1>Okt. 4, 2021</h1>
            <h1>0 Comments</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nachrichten;
