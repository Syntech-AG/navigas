import React, { useState, useEffect } from "react";
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
    title2: "Elektrisch",
    src: "/images/vans.png",
    src2x: "/images/vans@2x.png",
    src3x: "/images/vans@3x.png",
    text: "",
  },
];

export default function HoverCategories() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const pulseInterval = setInterval(() => {
      setShowImages((prev) => !prev);
    }, 2000);

    return () => clearInterval(pulseInterval);
  }, [isMobile]);

  const handleCategoryClick = (category) => {
    navigate(`/privatkunden?fahrzeugart=${category}`);
    window.scrollTo(0, 0);
  };

  const handleCategoryClick2 = (category2) => {
    navigate(`/privatkunden?treibstoff=${category2}`);
    window.scrollTo(0, 0);
  };

  // Helper function to determine which handler to use
  const handleItemClick = (item) => {
    if (item.title === "Elektro") {
      handleCategoryClick2(item.title2);
    } else {
      handleCategoryClick(item.title2);
    }
  };

  const handleInteraction = (index) => {
    if (isMobile) {
      if (hoveredIndex === index) {
        handleItemClick(items[index]);
      } else {
        setHoveredIndex(index);
      }
    }
  };

  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 w-full overflow-y-visible h-full">
      {items.map((item, i) => {
        const isHovered = hoveredIndex === i;
        const shouldShowImage = isMobile ? showImages : isHovered;

        return (
          <div
            key={item.title}
            className="relative cursor-pointer overflow-hidden aspect-[2/3] group"
            onMouseEnter={() => !isMobile && setHoveredIndex(i)}
            onMouseLeave={() => !isMobile && setHoveredIndex(null)}
            onFocus={() => setHoveredIndex(i)}
            onBlur={() => setHoveredIndex(null)}
            onClick={() =>
              isMobile ? handleInteraction(i) : handleItemClick(item)
            }
            tabIndex={0}
            role="button"
            onKeyDown={(e) => e.key === "Enter" && handleItemClick(item)}
          >
            <img
              src="/images/blueBg.png"
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                shouldShowImage ? "opacity-0" : "opacity-100"
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
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                shouldShowImage ? "opacity-100" : "opacity-0"
              }`}
              loading="eager"
              decoding="async"
            />

            {isMobile && !isHovered && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            )}

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
