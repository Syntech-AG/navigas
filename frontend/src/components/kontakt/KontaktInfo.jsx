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
            Für Fragen und zusätzliche Informationen stehen wir Ihnen gerne zur
            Verfügung. Sie können uns während unserer Büro-Öffnungszeiten von
            Montag bis Freitag telefonisch kontaktieren oder auch einen Termin
            für eine persönliche Beratung vereinbaren. Wir sind gerne für Sie
            da.
          </p>
        </div>
        <div className="flex flex-col items-start justify-between gap-6 lg:gap-[24px] w-full">
          <div className="flex flex-row items-start justify-start gap-4">
            <div>
              <img src="/images/phone.svg" alt="" className="" />
            </div>
            <div className="flex flex-col items-start justify-between gap-2 sm:gap-[14px] mt-2 sm:mt-4">
              <h1 className="uppercase text-[#494B4E] text-[13px] sm:text-[14px] lg:text-[15px]">
                Telefon
              </h1>
              <h1 className="text-[#010101] text-[18px] sm:text-[20px]">
                + (0)41 780 31 33
              </h1>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-4">
            <div>
              <img src="/images/email.svg" alt="" className="" />
            </div>
            <div className="flex flex-col items-start justify-between gap-2 sm:gap-[14px] mt-2 sm:mt-4">
              <h1 className="uppercase text-[#494B4E] text-[13px] sm:text-[14px] lg:text-[15px]">
                E-Mail
              </h1>
              <h1 className="text-[#010101] text-[18px] sm:text-[20px]">
                contact@navigas-mobility.ch
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full">
          <hr className="text-[#B4B6BC] w-full" />
          <h1 className="text-[#494B4E] text-[13px] sm:text-[14px] lg:text-[15px] uppercase mt-4 lg:mt-[20px]">
            Standort
          </h1>
          <div className="text-[#010101] text-[18px] sm:text-[20px] flex flex-col items-start justify-between">
            <h1>Navigas Services GmbH</h1>
            <h1>Chüsseberg 19</h1>
            <h1>CH-3267 Seedorf BE</h1>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-row items-center justify-center lg:justify-end mt-8 lg:mt-0">
        <img
          src="/images/Sales.png"
          alt="Sales"
          className="rounded-xl w-full max-w-none lg:max-w-[650px] h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default KontaktInfo;
