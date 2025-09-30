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
      <div className="container flex justify-center items-center md:h-screen z-999 relative">
        <div className="flex flex-col gap-6 justify-center mt-50 md:mt-0 items-center">
          <h1 className="2xl:text-[100px] lg:text-[80px] md:text-[68px] text-[38px] font-semibold text-white text-center">
            Dein Navigas Auto Abo
          </h1>
          <p className="2xl:text-[24px] lg:text-[20px] md:text-[18px] text-[14px] font-medium text-white text-center">
            Wählen Sie mit wenigen Klicks Ihr Auto Abo all-inclusive und die
            Dauer und los geht's !
          </p>
          <button className="text-[14px] mb-50 md:text-[16px] bg-transparent border border-white rounded-lg px-5 py-2 text-white font-medium">
            Fahrzeuge Entdecken
          </button>
        </div>
        <div className="absolute  flex flex-col md:flex-row w-full backdrop-blur-lg bg-[#1212134D] border border-[#2F2F34] rounded-2xl -bottom-50 md:bottom-20 justify-between  p-5 md:p-0 md:pl-5 ">
          <input
            placeholder="Autoname"
            className="my-5 text-white hidden md:block"
            type="text"
          />
          <select className="my-5 text-white pr-10 flex gap-10 " name="" id="">
            <option disabled selected value="" className="bg-[#0A1424]">
              Status
            </option>
            <option value="bmw" className="bg-[#0A1424]">
              BMW
            </option>
            <option value="audi" className="bg-[#0A1424]">
              Audi
            </option>
            <option value="mercedes" className="bg-[#0A1424]">
              Mercedes
            </option>
          </select>
          <select className="my-5 text-white pr-10" name="" id="">
            <option disabled selected value="">
              Typ
            </option>
          </select>
          <select className="my-5 text-white pr-10" name="" id="">
            <option disabled selected value="" className="bg-[#0A1424]">
              Hersteller
            </option>
          </select>
          <select className="my-5 text-white pr-10" name="" id="">
            <option disabled selected value="" className="bg-[#0A1424]">
              Stadt
            </option>
          </select>
          <button className="bg-white min-h-full p-3 md:px-5 flex items-center justify-center rounded-2xl md:rounded-[0px] md:rounded-r-2xl">
            <img src="/images/searchIcon.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeStart;
