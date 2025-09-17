import React from "react";

const partners = [
  { src: "/images/bmwLogo.svg", alt: "Partner 1" },
  { src: "/images/porscheLogo.svg", alt: "Partner 2" },
  { src: "/images/fiatLogo.svg", alt: "Partner 3" },
  { src: "/images/mercedesLogo.svg", alt: "Partner 4" },
  { src: "/images/renaultLogo.svg", alt: "Partner 5" },
  { src: "/images/polestarLogo.svg", alt: "Partner 6" },
  { src: "/images/daciaLogo.svg", alt: "Partner 7" },
];

const LogoSlider = () => {
  const Logos = ({ items }) => (
    <div className="slide">
      {items.map((logo, i) => (
        <img className="px-20" key={i} src={logo.src} alt={logo.alt} />
      ))}
    </div>
  );

  return (
    <div className="slider-mask bg-white md:py-25 py-15 rounded-xl w-full">
      <div className="slider-track">
        <Logos items={partners} />
        <Logos items={partners} aria-hidden="true" />
      </div>
    </div>
  );
};

export default LogoSlider;
