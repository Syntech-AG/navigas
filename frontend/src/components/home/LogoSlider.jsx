import React from "react";

const partners = [
  { src: "/images/car1.png", alt: "Partner 1" },
  { src: "/images/car2.png", alt: "Partner 2" },
  { src: "/images/car3.png", alt: "Partner 3" },
  { src: "/images/car1.png", alt: "Partner 1" },
  { src: "/images/car2.png", alt: "Partner 2" },
  { src: "/images/car3.png", alt: "Partner 3" },
];

const LogoSlider = () => {
  const Logos = ({ items }) => (
    <div className="slide">
      {items.map((logo, i) => (
        <div key={i} className="flex flex-col items-center px-20">
          <img
            className="h-auto w-auto object-contain"
            src={logo.src}
            alt={logo.alt}
          />
        </div>
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
