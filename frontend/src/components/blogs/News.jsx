import React, { useState, useEffect } from "react";

const articles = [
  {
    id: 1,
    img: "/images/blog2.png",
    title: `Hybrid-, Plug-in-Hybrid- oder Elektrofahrzeuge mit Range-Extender`,
    date: "21 Januar 2022",
  },
  {
    id: 2,
    img: "/images/blog2.png",
    title: `Hybrid-, Plug-in-Hybrid- oder Elektrofahrzeuge mit Range-Extender`,
    date: "10 Februar 2022",
  },
  {
    id: 3,
    img: "/images/blog2.png",
    title: `Hybrid-, Plug-in-Hybrid- oder Elektrofahrzeuge mit Range-Extender`,
    date: "05 März 2022",
  },
  {
    id: 4,
    img: "/images/blog2.png",
    title: `Hybrid-, Plug-in-Hybrid- oder Elektrofahrzeuge mit Range-Extender`,
    date: "15 April 2022",
  },
  {
    id: 5,
    img: "/images/blog2.png",
    title: `Hybrid-, Plug-in-Hybrid- oder Elektrofahrzeuge mit Range-Extender`,
    date: "15 April 2022",
  },
  {
    id: 6,
    img: "/images/blog2.png",
    title: `Hybrid-, Plug-in-Hybrid- oder Elektrofahrzeuge mit Range-Extender`,
    date: "15 April 2022",
  },
];

const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2); // default desktop
  const maxIndex = Math.ceil(articles.length / visibleCount) - 1;

  // Update visibleCount based on window width on mount and resize
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1); // mobile: show 1 card
      } else {
        setVisibleCount(2); // desktop/tablet: show 2 cards
      }
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Ensure currentIndex stays in range when visibleCount changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, articles.length - visibleCount));
  }, [visibleCount]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };
  //console.log(articles.length);
  //  / console.log(visibleCount);

  return (
    <div className="relative top-0 flex flex-col lg:flex-row items-center justify-between md:gap-0 gap-8 px-4 md:px-0">
      <div className="flex flex-col items-center lg:items-start justify-between gap-10 md:gap-10 lg:gap-[150px] ml-0 md:ml-10 lg:ml-50 w-full md:w-auto md:mt-10 lg:mt-0">
        <h1 className="text-black text-[16px] md:text-[20px] leading-snug md:leading-normal ">
          News, Trends und Geschichten, die <br className="hidden lg:block" />
          Sie bewegen — seit 2025
        </h1>
        <h1 className="text-[32px] md:text-[40px] xl:text-[50px] 2xl:text-[70px] text-black mb-20">
          Neueste <br className="hidden lg:block" /> Nachrichten &{" "}
          <br className="hidden lg:block" /> Einblicke
        </h1>
      </div>
      <div className="w-full lg:w-[50%] flex flex-col-reverse md:flex-col ">
        <div className="flex flex-row items-center justify-between border-[#D3D3D3] border py-8 md:py-0 px-0 ">
          <h1 className="text-[16px] md:text-[14px] text-black px-4 py-0 md:px-8 md:py-5 whitespace-nowrap">
            Ausgewählte Artikel
          </h1>
          <div className="flex flex-row items-center justify-start gap-2 md:gap-3 mr-4 md:mr-40 xl:mr-80">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="bg-[#E8EBF1] p-3 md:p-4 rounded-[4px] disabled:opacity-50"
              aria-label="Previous"
            >
              <img src="/images/leftArrow.svg" alt="Previous" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="bg-[#E8EBF1] p-3 md:p-4 rounded-[4px] disabled:opacity-50"
              aria-label="Next"
            >
              <img src="/images/rightArroww.svg" alt="Next" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto md:overflow-hidden -mx-4 md:mx-0">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${
                (100 / articles.length) * visibleCount * currentIndex
              }%)`,

              width: `${(100 / visibleCount) * articles.length}%`,
            }}
          >
            {articles.map(({ id, img, title, date }) => (
              <div
                key={id}
                className="py-8 px-6 md:py-[35px] md:px-[25px] border-[#D3D3D3] border flex-shrink-0 md:flex-shrink md:w-auto"
                style={{
                  width: `${100 / articles.length}%`,
                  minWidth: "280px",
                }}
              >
                <div className="h-fit lg:h-64 w-full overflow-hidden rounded-md">
                  <img
                    src={img}
                    alt={`Article ${id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-5 md:mt-[20px]">
                  <h1 className="text-[18px] md:text-[20px] text-black">
                    {title}
                  </h1>
                </div>
                <div className="flex flex-row items-center justify-between mt-6 md:mt-[95px]">
                  <div>
                    <h1 className="text-sm md:text-base">{date}</h1>
                  </div>
                  <div className="bg-[#E8EBF1] p-3 md:p-4 rounded-[4px] flex items-center">
                    <img src="/images/rightArroww.svg" alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
