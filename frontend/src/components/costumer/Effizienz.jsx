import React from "react";

const Effizienz = () => {
  return (
    <div className="mt-35 flex flex-col">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
          <h1 className="text-[#010101] text-[34px] leading-tight md:text-[44px] lg:text-[54px]">
            Effizienz für Ihr <br className="hidden md:block" /> Kerngeschäft
          </h1>
          <p className="text-[#494B4E] text-[16px] md:text-[18px] md:w-1/2">
            Stärken Sie Ihren strategischen Wettbewerbsvorteil und sparen Sie
            Kosten und Zeit. Sie konzentrieren sich auf Ihr Kerngeschäft und wir
            kümmern uns um Ihre Mobilität.
          </p>
        </div>
      </div>

      <div className="w-full">
        <img
          src="/images/imagee.png"
          alt="Effizienz Illustration"
          className="w-full h-100 md:h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Effizienz;
