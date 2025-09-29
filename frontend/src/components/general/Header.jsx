import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 w-full backdrop-blur-lg bg-[#0A14241A] z-5000">
      <div className="container flex flex-row justify-between   py-9 px-4 md:px-0">
        {/* Logo and nav */}
        <div className="flex flex-row justify-between w-full md:w-auto gap-12 items-center ">
          <img
            className="w-[160px]"
            src="/images/navigasLogo.svg"
            alt="Navigas Logo"
          />
          <button
            className="block md:hidden  text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Nav links - horizontal on md and up, hidden and vertical on mobile when menuOpen */}
          <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } absolute top-full left-0 text-[14px] right-0 bg-[#0A14241A] flex-col gap-4 p-4 md:static md:flex md:flex-row md:gap-5 md:bg-transparent md:p-0 text-white font-medium`}
          >
            <li className="border-b-2 border-transparent hover:border-white transition-all duration-300">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="border-b-2 border-transparent hover:border-white transition-all duration-300">
              <Link to="/privatkunden" onClick={() => setMenuOpen(false)}>
                Privatkunden
              </Link>
            </li>
            <li className="border-b-2 border-transparent hover:border-white transition-all duration-300">
              <Link to="/geschaeftskunden" onClick={() => setMenuOpen(false)}>
                Geschäftskunden
              </Link>
            </li>
            <li className="border-b-2 border-transparent hover:border-white transition-all duration-300">
              <Link to="/ueber-uns" onClick={() => setMenuOpen(false)}>
                Über uns
              </Link>
            </li>
            <li className="border-b-2 border-transparent hover:border-white transition-all duration-300">
              <Link to="/faq" onClick={() => setMenuOpen(false)}>
                FAQ
              </Link>
            </li>
            {/* Kontakt button inside menu on mobile */}
            <li className="md:hidden">
              <Link to="/kontakt" onClick={() => setMenuOpen(false)}>
                <button className="bg-[#0847A4] text-white text-[14px] font-semibold rounded-lg px-6 py-3 w-full">
                  Kontakt
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact info and Kontakt button hidden on all screen sizes */}
        <div className="hidden md:flex flex-row items-center space-x-4">
          <h1 className="text-white whitespace-nowrap md:hidden lg:block">
            + (0)41 780 31 33
          </h1>
          <Link to="/kontakt">
            <button className="bg-[#0847A4] text-white text-[14px] font-semibold rounded-lg px-6 py-3 transition-colors duration-300 hover:bg-[#063983]">
              Kontakt
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
