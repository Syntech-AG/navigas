import React from "react";

const HomeStart = () => {
  return (
    <div className="min-h-screen h-full relative">
      <img
        className="opacity-[70%] absolute z-99 w-full h-full "
        src="/images/Gradient.png"
        alt=""
      />
      <img
        src="/images/homeBg.png"
        alt=""
        className="w-full h-screen object-cover absolute"
      />
      <div className="container relative flex justify-center items-center md:h-screen z-999 relative">
        <div className="flex flex-col gap-6 justify-center items-center">
          <h1 className="2xl:text-[100px] lg:text-[80px] md:text-[68px] text-[48px] font-semibold text-white">
            Dein Navigas Auto Abo
          </h1>
          <p className="2xl:text-[24px] lg:text-[20px] md:text-[18px] text-[16px] font-medium text-white">
            Wählen Sie mit wenigen Klicks Ihr Auto Abo all-inclusive und die
            Dauer und los geht's !
          </p>
          <button className="text-[16px] bg-transparent border border-white rounded-lg px-5 py-2 text-white font-medium">
            Fahrzeuge Entdecken
          </button>
        </div>
        <div className="absolute flex flex-row w-full backdrop-blur-lg bg-[#1212134D] border border-[#2F2F34] rounded-2xl bottom-20 justify-between pl-5">
          <input
            placeholder="Autoname"
            className="my-5 text-white"
            type="text"
          />

          <select className="my-5 text-white pr-10 flex gap-10" name="" id="">
            <option disabled selected value="">
              Status
            </option>
            <option value="bmw">BMW</option>
            <option value="audi">Audi</option>
            <option value="mercedes">Mercedes</option>
          </select>
          <select className="my-5 text-white pr-10" name="" id="">
            <option disabled selected value="">
              Typ
            </option>
          </select>
          <select className="my-5 text-white pr-10" name="" id="">
            <option disabled selected value="">
              Hersteller
            </option>
          </select>
          <select className="my-5 text-white pr-10" name="" id="">
            <option disabled selected value="">
              Stadt
            </option>
          </select>
          <button className="bg-white min-h-full px-5 flex items-center justify-center rounded-r-2xl">
            <img src="/images/searchIcon.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeStart;
