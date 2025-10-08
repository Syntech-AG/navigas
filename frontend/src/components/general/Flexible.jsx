import React from "react";

const Flexible = () => {
  return (
    <div className="w-full bg-[#F5F8FD]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] py-[150px] sm:py-[100px] lg:py-[150px] px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col items-start justify-between gap-[18px] py-[40px] px-[30px] bg-white rounded-xl">
          <img src="/images/bg1.png" alt="" className="mb-[22px]" />
          <h1 className="text-[#010101] font-semibold text-[20px]">
            Flexible Laufzeiten
          </h1>
          <p className="text-[#494B4E] font-medium">
            1-24 Monate, flexibel anpassbar an Ihren Bedarf.
          </p>
        </div>
        <div className="flex flex-col items-start justify-between gap-[18px] py-[40px] px-[30px] bg-white rounded-xl">
          <img src="/images/bg2.png" alt="" className="mb-[22px]" />
          <h1 className="text-[#010101] font-semibold text-[20px]">
            Schnelle Verfugbarkeit
          </h1>
          <p className="text-[#494B4E] font-medium">
            Keine langen Wartezeiten, einsteigen und losfahren.
          </p>
        </div>
        <div className="flex flex-col items-start justify-between gap-[18px] py-[40px] px-[30px] bg-white rounded-xl">
          <img src="/images/bg3.png" alt="" className="mb-[22px]" />
          <h1 className="text-[#010101] font-semibold text-[20px]">
            Fahrzeugtausch moglich
          </h1>
          <p className="text-[#494B4E] font-medium">
            Modell wechseln, wenn sich der Einsatz andert.
          </p>
        </div>
        <div className="flex flex-col items-start justify-between gap-[18px] py-[40px] px-[30px] bg-white rounded-xl">
          <img src="/images/bg4.png" alt="" className="mb-[22px]" />
          <h1 className="text-[#010101] font-semibold text-[20px]">
            Lieferung
          </h1>
          <p className="text-[#494B4E] font-medium">
            Ihr Fahrzeug wird innerhalb 48 Stunden an Wunschort geliefert.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flexible;
