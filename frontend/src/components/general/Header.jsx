import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Privatkunden", href: "/api/cars/:id" },
    { label: "Geschäftskunden", href: "/geschaeftskunden" },
    { label: "Über uns", href: "/uberuns" },
    { label: "FAQ", href: "faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full transition-all duration-300 z-9999999 ${
          isScrolled
            ? "backdrop-blur-lg bg-[#0A14241A]"
            : "backdrop-blur-lg bg-[#0A14241A]"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 md:py-6 lg:py-9">
            <div className="flex-shrink-0">
              <a href="#home" aria-label="Navigas Home">
                <img
                  className="w-[120px] sm:w-[140px] md:w-[160px] h-auto"
                  src="/images/navigasLogo.svg"
                  alt="Navigas Logo"
                />
              </a>
            </div>

            <nav
              className="hidden lg:flex items-center gap-[60px]"
              aria-label="Main navigation"
            >
              <ul className="flex items-center gap-5 xl:gap-6">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white font-medium text-sm xl:text-base hover:text-blue-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
              <a
                href="tel:+41417803133"
                className="text-white text-sm lg:text-base hover:text-blue-300 transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1"
                aria-label="Call us at +41 41 780 31 33"
              >
                + (0)41 780 31 33
              </a>
              <a
                href="#kontakt"
                className="bg-[#0847A4] text-white text-sm font-semibold rounded-lg px-4 py-2 lg:px-6 lg:py-3 hover:bg-[#063a8a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 whitespace-nowrap"
              >
                Kontakt
              </a>
            </div>

            <button
              onClick={toggleMenu}
              className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-[6px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0  transition-all duration-300 z-9999 ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#0A1424] bg-opacity-95 backdrop-blur-lg"
          onClick={closeMenu}
          aria-hidden="true"
        />

        <nav
          className={`relative h-full flex flex-col items-center justify-center px-6 transition-transform duration-300 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col items-center gap-6 mb-12">
            {navLinks.map((link, index) => (
              <li
                key={link.label}
                className={`transition-all duration-300 delay-${index * 75}`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 75}ms` : "0ms",
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? "translateY(0)" : "translateY(-20px)",
                }}
              >
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="text-white text-2xl font-medium hover:text-blue-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-3 py-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-6">
            <a
              href="tel:+41417803133"
              className="text-white text-xl hover:text-blue-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-3 py-2"
              onClick={closeMenu}
            >
              + (0)41 780 31 33
            </a>
            <a
              href="#kontakt"
              onClick={closeMenu}
              className="bg-[#0847A4] text-white text-base font-semibold rounded-lg px-8 py-3 hover:bg-[#063a8a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Kontakt
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
