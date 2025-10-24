import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0A1424]">
      <hr className="w-full text-[#2860B7]" />
      <div className="flex flex-row items-center justify-around w-full bg-[#0847A4] text-xs md:text-sm text-white ">
        <div className=" px-full py-[40px]   w-full">
          <a
            href="https://www.facebook.com/navigasmobility"
            className="flex flex-row items-center justify-center transition-all duration-300 hover:scale-105 hover:opacity-80"
          >
            <img
              src="/images/fb.svg"
              alt=""
              className="transition-transform duration-300 group-hover:rotate-12"
            />
            <h1>Facebook</h1>
          </a>
        </div>

        <div className=" px-full py-[40px] border-[#2860B7] border-r border-l w-full">
          <a
            href="https://x.com/navigasmobility"
            className="flex flex-row items-center justify-center transition-all duration-300 hover:scale-105 hover:opacity-80"
          >
            <img
              src="/images/x.svg"
              alt=""
              className="transition-transform duration-300 group-hover:rotate-12"
            />
            <h1>Twitter (X)</h1>
          </a>
        </div>

        <div className=" px-full py-[40px] border-gray-500 border-r  w-full">
          <a
            href="https://linkedin.com/showcase/navigas-mobility"
            className="flex flex-row items-center justify-center transition-all duration-300 hover:scale-105 hover:opacity-80"
          >
            <img
              src="/images/in.svg"
              alt=""
              className="transition-transform duration-300 group-hover:rotate-12"
            />
            <h1>Linkedin</h1>
          </a>
        </div>

        <div className=" px-full py-[40px] w-full">
          <a
            href="https://www.instagram.com/navigas_mobility"
            className="flex flex-row items-center justify-center transition-all duration-300 hover:scale-105 hover:opacity-80"
          >
            <img
              src="/images/insta.svg"
              alt=""
              className="transition-transform duration-300 group-hover:rotate-12"
            />
            <h1>Instagram</h1>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="grid xl:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-12 md:gap-8 py-[100px] justify-items-center">
          <Link
            to="/"
            className="transition-transform duration-300 hover:scale-110"
          >
            <img src="/images/navigasLogo.svg" alt="" />
          </Link>
          <div className="flex flex-col items-center md:items-start gap-5">
            <a
              href="https://www.google.com/maps/place/Navigas+Services+GmbH/@47.0356537,7.3126262,1397m/data=!3m1!1e3!4m10!1m2!2m1!1sCh%C3%BCsseberg+19,+3267+Seedorf,+Switzerland!3m6!1s0x479000492f8060ef:0xf5db510a1153c7fd!8m2!3d47.0356502!4d7.3152065!15sCilDaMO8c3NlYmVyZyAxOSwgMzI2NyBTZWVkb3JmLCBTd2l0emVybGFuZJIBC2F1dG9fbWFya2V04AEA!16s%2Fg%2F11hzvdrc9_?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
              className="group"
            >
              <h1 className="text-[19px] font-medium text-white transition-colors text-center md:text-start duration-300 ">
                Standort
              </h1>
              <p className="text-[#727578] font-regular text-center md:text-start text-[17px] transition-colors duration-300 group-hover:text-[#2860B7]">
                Navigas Services GmbH
                <br />
                Chüsseberg 19
                <br />
                CH-3267 Seedorf BE
              </p>
            </a>
            <a
              href="mailto:contact@navigas-mobility.ch"
              className="group text-[#E8EBF1]"
            >
              <p className="transition-colors duration-300 group-hover:text-[#2860B7]">
                contact@navigas-mobility.ch
              </p>
            </a>
            <a href="tel:+41417803133" className="group text-[#E8EBF1]">
              <p className="transition-colors duration-300 group-hover:text-[#2860B7]">
                +41 (0) 41 780 31 33
              </p>
            </a>
          </div>
          <div className="text-[#E8EBF1] flex flex-col gap-5 text-center md:text-start">
            <h1 className="font-semibold">Schnellzugriffe</h1>
            <a href="/privatkunden" className="group">
              <p className="transition-all duration-300 group-hover:text-[#2860B7] group-hover:translate-x-1">
                Privatkunden
              </p>
            </a>
            <Link to="/autoAboPro" className="group">
              <p className="transition-all duration-300 group-hover:text-[#2860B7] group-hover:translate-x-1">
                Auto Abo Pro
              </p>
            </Link>
            <Link to="/flexrent" className="group">
              <p className="transition-all duration-300 group-hover:text-[#2860B7] group-hover:translate-x-1">
                Flex Rent
              </p>
            </Link>
            <Link to="/uberuns" className="group">
              <p className="transition-all duration-300 group-hover:text-[#2860B7] group-hover:translate-x-1">
                Über Uns
              </p>
            </Link>
            <Link to="/faq" className="group">
              <p className="transition-all duration-300 group-hover:text-[#2860B7] group-hover:translate-x-1">
                FAQ
              </p>
            </Link>
            <Link to="/kontakt" className="group">
              <p className="transition-all duration-300 group-hover:text-[#2860B7] group-hover:translate-x-1">
                Kontakt
              </p>
            </Link>
          </div>
          <div className="text-[#E8EBF1] text-center md:text-start">
            <h1>Newsletter</h1>
            <div className="flex flex-col ">
              <div className="flex flex-row items-center gap-4 border-b border-[#999FA8] transition-colors duration-300 hover:border-[#2860B7]">
                <input
                  placeholder="Geben Sie Ihre E-Mail-Adresse ein"
                  type="text"
                  className="text-[#8E8E8E]  w-full bg-transparent focus:outline-none"
                />
                <img src="/images/shigjeta.svg" alt="" />
              </div>
              <div className="flex flex-row gap-2 mt-[20px]">
                <input type="checkbox" className="cursor-pointer" />
                <h1 className="text-[#8E8E8E] text-[12px] ">
                  Ich stimme zu, dass die{" "}
                  <a href="/datenschutz">
                    <span className="text-[#E8EBF1] underline transition-colors duration-300 hover:text-[#2860B7] cursor-pointer">
                      Datenschutzrichtlinie
                    </span>
                  </a>
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
              <a
                href="https://syn-tech.ch/"
                className="transition-colors duration-300"
              >
                <h1 className="text-[#8E8E8E] text-sm md:text-base hover:text-white">
                  Entworfen von: SyntechSolutions AG
                </h1>
              </a>
            </div>
            <div className="text-[#8E8E8E] flex flex-row items-center justify-center md:justify-end gap-5 text-sm md:text-base">
              <Link to="/datenschutz">
                <h1 className="cursor-pointer hover:text-[#E8EBF1] transition-colors duration-300">
                  Datenschutz
                </h1>
              </Link>
              <Link to="/impressum">
                <h1 className="cursor-pointer hover:text-[#E8EBF1] transition-colors duration-300">
                  Impressum
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
