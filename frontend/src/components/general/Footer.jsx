import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0A1424]">
      <div className="container">
        <div className="grid xl:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-12 md:gap-8 py-[100px] justify-items-center">
          <img src="/images/navigasLogo.svg" alt="" />
          <div className="flex flex-col items-center md:items-start gap-5">
            <h1 className="text-[19px] font-medium text-white">Standort</h1>
            <p className="text-[#727578] font-regular text-center md:text-start text-[17px]">
              Navigas Services GmbH
              <br />
              Chüsseberg 19
              <br />
              CH-3267 Seedorf BE
            </p>
            <p className="text-[#E8EBF1]">contact@navigas-mobility.ch</p>
            <p className="text-[#E8EBF1]">+ (0)41 780 31 33</p>
          </div>
          <div className="text-[#E8EBF1] flex flex-col gap-5 text-center md:text-start">
            <h1>Schnellzugriffe</h1>
            <p>Privatkunden</p>
            <p>Geschäftskunden</p>
            <p>Über Uns</p>
            <p>FAQ</p>
            <p>Kontakt</p>
          </div>
          <div className="text-[#E8EBF1] text-center md:text-start">
            <h1>Newsletter</h1>
            <div className="flex flex-col ">
              <div className="flex flex-row items-center gap-4 border-b border-[#999FA8]">
                <input
                  placeholder="Geben Sie Ihre E-Mail-Adresse ein"
                  type="text"
                  className="text-[#8E8E8E]  w-full"
                />
                <img src="/images/shigjeta.svg" alt="" />
              </div>
              <div className="flex flex-row gap-2 mt-[20px]">
                <input type="checkbox" />
                <h1 className="text-[#8E8E8E] text-[12px] ">
                  Ich stimme zu, dass die{" "}
                  <span className="text-[#E8EBF1] underline">
                    Datenschutzrichtlinie
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="h-[1px] w-full bg-[#273243]"></div>
          <div className="py-3 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-3 md:gap-10">
              <h1 className="text-[#8E8E8E] text-sm md:text-base">
                <span className="text-[#E8EBF1]">Navigas Services GmbH</span> ©
                2025. Alle Rechte vorbehalten.
              </h1>
              <h1 className="text-[#8E8E8E] text-sm md:text-base">
                Entworfen von: SyntechSolutions AG
              </h1>
            </div>
            <div className="text-[#8E8E8E] flex flex-row items-center justify-center md:justify-end gap-5 text-sm md:text-base">
              <h1 className="cursor-pointer hover:text-[#E8EBF1]">
                Datenschutz
              </h1>
              <h1 className="cursor-pointer hover:text-[#E8EBF1]">Impressum</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
