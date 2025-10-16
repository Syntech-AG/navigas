import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const items = [
  {
    title: "Kleinwagen",
    title2: "Kleinwagen",
    src: "/images/sportwagen.png",
    src2x: "/images/sportwagen@2x.png",
    src3x: "/images/sportwagen@3x.png",
    text: "",
  },
  {
    title: "Kompakt",
    title2: "Kompakt",
    src: "/images/luxuslimousinen.png",
    src2x: "/images/luxuslimousinen@2x.png",
    src3x: "/images/luxuslimousinen@3x.png",
    text: "",
  },
  {
    title: "SUVs",
    title2: "SUV",
    src: "/images/suv.png",
    src2x: "/images/suv@2x.png",
    src3x: "/images/suv@3x.png",
    text: "",
  },
  {
    title: "Elektro",
    title2: "Elektro",
    src: "/images/vans.png",
    src2x: "/images/vans@2x.png",
    src3x: "/images/vans@3x.png",
    text: "",
  },
];

export default function HoverCategories() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/privatkunden?fahrzeugart=${category}`);
  };

  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 w-full overflow-y-visible h-full">
      {items.map((item, i) => {
        const isHovered = hoveredIndex === i;

        return (
          <div
            key={item.title}
            className="relative cursor-pointer overflow-hidden aspect-[2/3] group"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onFocus={() => setHoveredIndex(i)}
            onBlur={() => setHoveredIndex(null)}
            onClick={() => handleCategoryClick(item.title2)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) =>
              e.key === "Enter" && handleCategoryClick(item.title2)
            }
          >
            <img
              src="/images/blueBg.png"
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
              loading="eager"
              decoding="async"
              srcSet="/images/blueBg.png"
              sizes="(max-width: 768px) 10vw, 25vw"
            />

            <img
              src={item.src}
              srcSet={`${item.src} 1x, ${item.src2x} 2x, ${item.src3x} 3x`}
              sizes="(max-width: 768px) 100vw, 25vw"
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              loading="eager"
              decoding="async"
            />

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] z-10">
              <div className="flex flex-col gap-2 transition-all duration-300">
                <div className="flex flex-row justify-between items-center">
                  <h1 className="text-white xl:text-[26px] text-[20px] font-medium">
                    {item.title}
                  </h1>
                  <img
                    className="max-w-[31px]"
                    src="/images/whiteArrow.svg"
                    alt=""
                    loading="lazy"
                  />
                </div>

                {isHovered && (
                  <p className="text-white/80 transition-opacity duration-300">
                    {item.text}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
