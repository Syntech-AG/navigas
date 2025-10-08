import React, { useState } from "react";

const items = [
  { title: "Kleinwagen", src: "/images/sportwagen.png", text: "testse" },
  {
    title: "Kompakt",
    src: "/images/luxuslimousinen.png",
    text: "testsetst",
  },
  { title: "SUVs", src: "/images/suv.png", text: "teststestst" },

  { title: "Elektro", src: "/images/vans.png", text: "stesetstes" },
];

export default function HoverCategories() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 w-full overflow-y-visible h-full">
      {items.map((item, i) => {
        const isHovered = hoveredIndex === i;

        return (
          <div
            key={item.title}
            className="relative cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onFocus={() => setHoveredIndex(i)}
            onBlur={() => setHoveredIndex(null)}
            tabIndex={0}
          >
            <img
              src="/images/blueBg.png"
              alt=""
              className={`block w-full h-auto transition-opacity duration-500 ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
              loading="eager"
            />

            <img
              src={item.src}
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              loading="eager"
            />

            <div className="absolute bottom-10 left-1/2 translate-x-[-50%] w-[90%]">
              <div className="flex flex-col gap-2 transition-all duration-300">
                <div className="flex flex-row justify-between">
                  <h1 className="text-white xl:text-[26px] text-[20px] font-medium">
                    {item.title}
                  </h1>
                  <img
                    className="max-w-[31px]"
                    src="/images/whiteArrow.svg"
                    alt=""
                  />
                </div>

                {isHovered ? (
                  <p className="text-white/80 transition-opacity duration-300">
                    {item.text}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
