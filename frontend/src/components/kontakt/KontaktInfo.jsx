import React from "react";

const KontaktInfo = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between py-12 lg:py-[164px] px-4 sm:px-6 gap-10">
      <div className="flex flex-col items-start justify-between gap-8 lg:gap-[60px] w-full lg:w-1/2">
        <div className="flex flex-col items-start justify-between gap-4 lg:gap-[20px]">
          <div className="flex flex-row items-center justify-start gap-3">
            <img src="/images/line.svg" alt="" />
            <h1 className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#0847A4] uppercase">
              Nehmen Sie Kontakt mit uns auf
            </h1>
          </div>
          <h1 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] font-semibold text-[#010101] leading-tight">
            Wir sind für Sie da.
          </h1>

          <p className="text-[#494B4E] text-[15px] sm:text-[16px] leading-relaxed">
            Ob Fragen zu Ihrem Auto Abo oder individuelle Angebote, unser Team
            hilft Ihnen gerne weiter. Rufen Sie uns an oder schreiben Sie uns,
            wir freuen uns auf Ihre Nachricht.
          </p>
        </div>
        <div className="flex flex-col items-start justify-between gap-6 lg:gap-[24px] w-full">
          <a
            href="tel:+417803133"
            className="flex flex-row items-start justify-start gap-4 group transition-all duration-300 hover:translate-x-2"
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              <img src="/images/phone.svg" alt="Telefon Icon" className="" />
            </div>
            <div className="flex flex-col items-start justify-between gap-2 sm:gap-[14px] mt-2 sm:mt-4">
              <h2 className="uppercase text-[#494B4E] text-[13px] sm:text-[14px] lg:text-[15px]">
                Telefon
              </h2>
              <p className="text-[#010101] text-[18px] sm:text-[20px] group-hover:text-[#0847A4] transition-colors duration-300">
                +41 (0) 41 780 31 33
              </p>
            </div>
          </a>

          {/* Email Link with Hover Effect */}
          <a
            href="mailto:contact@navigas-mobility.ch"
            className="flex flex-row items-start justify-start gap-4 group transition-all duration-300 hover:translate-x-2"
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              <img src="/images/email.svg" alt="Email Icon" className="" />
            </div>
            <div className="flex flex-col items-start justify-between gap-2 sm:gap-[14px] mt-2 sm:mt-4">
              <h2 className="uppercase text-[#494B4E] text-[13px] sm:text-[14px] lg:text-[15px]">
                E-Mail
              </h2>
              <p className="text-[#010101] text-[18px] sm:text-[20px] group-hover:text-[#0847A4] transition-colors duration-300 break-all">
                contact@navigas-mobility.ch
              </p>
            </div>
          </a>
        </div>
        <div className="w-full">
          <hr className="text-[#B4B6BC] w-full" />
          {/* <a
            href="https://www.google.com/maps/place/Navigas+Services+GmbH/@47.0356537,7.3126262,1397m/data=!3m1!1e3!4m10!1m2!2m1!1sCh%C3%BCsseberg+19,+3267+Seedorf,+Switzerland!3m6!1s0x479000492f8060ef:0xf5db510a1153c7fd!8m2!3d47.0356502!4d7.3152065!15sCilDaMO8c3NlYmVyZyAxOSwgMzI2NyBTZWVkb3JmLCBTd2l0emVybGFuZJIBC2F1dG9fbWFya2V04AEA!16s%2Fg%2F11hzvdrc9_?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
            className=""
          >
            <h2 className="text-[#494B4E]  text-[13px] sm:text-[14px] lg:text-[15px] uppercase mt-4 lg:mt-[20px]">
              Standort
            </h2>
            <div className="text-[#010101] hover:text-[#0847A4] text-[18px] sm:text-[20px] flex flex-col items-start justify-between">
              <p>Navigas Services GmbH</p>
              <p>Chüsseberg 19</p>
              <p>CH-3267 Seedorf BE</p>
            </div>
          </a> */}
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-row items-center justify-center lg:justify-end mt-8 lg:mt-0">
        <img
          src="/images/Sales.png"
          alt="Sales"
          className="rounded-xl w-full max-w-none lg:max-w-[650px] h-auto object-cover transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
        />
      </div>
    </div>
  );
};

export default KontaktInfo;
