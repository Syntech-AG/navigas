import React from "react";

const Effizienz = () => {
  return (
    <div className="mt-5 md:mt-35 flex flex-col">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
          <h1 className="text-[#010101] text-[34px] leading-tight md:text-[44px] font-medium lg:text-[54px]">
            Bereich Ihre Mobilität.
            <br className="hidden md:block" /> Unsere Stärke.
          </h1>
          <p className="text-[#494B4E] text-[16px] md:text-[18px] leading-10 md:w-1/2">
            Navigas steht für unkomplizierte, faire und flexible
            Firmenmobilität. Wir kombinieren moderne Fahrzeuge mit einem
            Rundum-sorglos-Paket, damit Ihr Unternehmen jederzeit mobil bleibt
            und Sie sich auf Ihr Kerngeschäft konzentrieren können.
          </p>
        </div>
      </div>

      <div className="w-full">
        <img
          src="/images/imagee.png"
          alt="Effizienz Illustration"
          className="w-full  md:h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Effizienz;
