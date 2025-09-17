import React from "react";

const UnsereMission = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-start justify-between py-10 md:py-[170px] w-full md:gap-5 lg:gap-0">
        <div className="text-[#050505] flex flex-col w-full md:w-[60%] mt-50 md:mt-0">
          <h1 className="uppercase font-bold text-[14px] tracking-2p text-[#050505]">
            Unsere Mission
          </h1>
          <h1 className="font-semibold text-[24px]  md:text-[34px] xl:text-[64px]">
            On-Demand-Autos per Klick <br className="hidden lg:block" />{" "}
            einfach, sicher, flexibel.
          </h1>
          <img
            src="/images/Container.png"
            alt=""
            className="w-fit h-fit lg:w-[65%] h-[65%]  mt-10 md:mt-[50px]"
          />
        </div>
        <div className="text-[#494B4E] flex flex-col items-start md:items-end w-full md:w-[40%] mt-12 md:mt-0">
          <img
            src="/images/Container2.png"
            alt=""
            className="w-fit h-fit lg:w-[90%] lg:h-[90%] rounded-lg"
          />
          <div className="-ml-0 xl:-ml-40">
            <p className="text-[#494B4E] text-[14px] md:text-[16px]  xl:text-[20px] mt-6 md:mt-[40px] leading-8 ">
              Wir wollen den traditionellen Autobesitz transformieren, indem wir
              mit nur wenigen Klicks Zugang zum On-Demand-Automobil bieten. Dank
              eines flexiblen Abonnements und einer Auswahl von Fahrzeugen, die
              ständig erneuert werden, finden Sie ein Angebot, das Ihren
              Bedürfnissen entspricht. Wir verbessern unsere digitalen Prozesse
              Tag für Tag, um Ihr Kundenerlebnis zu verbessern. So sparen wir
              Ihnen nicht nur Zeit und Mühe, sondern garantieren Ihnen
              Sicherheit, Gelassenheit und Einsparungen während der
              Vertragsdauer.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center font-bold ">
        <h1 className="text-[#050505] text-sm uppercase">Premiumqualität</h1>
        <h1 className="text-[#0505054D] font-semibold uppercase text-center text-[32px] md:text-[57px]">
          DIE MISSION VON NAVIGAS: <br />
          DEN AUTOBESITZ REVOLUTIONIEREN <br /> DURCH FLEXIBLE DIGITALE
          MOBILITÄT
        </h1>
      </div>
    </div>
  );
};

export default UnsereMission;
