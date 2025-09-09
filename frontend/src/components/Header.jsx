import React from "react";

const Header = () => {
  return (
    <div className="absolute w-full backdrop-blur-lg bg-[#0A14241A] z-999">
      <div className="container flex flex-row justify-between py-9">
        <div className="flex flex-row gap-15 items-center">
          <img className="w-[160px]" src="/images/navigasLogo.svg" alt="" />
          <ul className="flex flex-row gap-5 text-white font-medium">
            <li>Home</li>
            <li>Privatkunden</li>
            <li>Geschäftskunden</li>
            <li>Über uns</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="flex flex-row items-center gap-8">
          <div></div>
          <h1 className="text-white">+ (0)41 780 31 33</h1>
          <button className="bg-[#0847A4] text-white text-[14px] font-semibold rounded-lg px-6 py-3">
            Kontakt
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
