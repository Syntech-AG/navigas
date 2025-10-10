import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [visibleCount, setVisibleCount] = useState(2);
  const maxIndex = Math.ceil(articles.length / visibleCount) - 1;

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else {
        setVisibleCount(2);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, articles.length - visibleCount));
  }, [visibleCount]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="relative top-0 flex flex-col lg:flex-row items-center justify-between md:gap-0 gap-8 px-4 md:px-0">
      <motion.div
        className="flex flex-col items-center lg:items-start justify-between gap-10 md:gap-10 lg:gap-[150px] ml-0 md:ml-10 lg:ml-50 w-full md:w-auto md:mt-10 lg:mt-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h1
          className="text-black text-[16px] md:text-[20px] leading-snug md:leading-normal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          News, Trends und Geschichten, die <br className="hidden lg:block" />
          Sie bewegen — seit 2025
        </motion.h1>

        <motion.h1
          className="text-[32px] md:text-[40px] xl:text-[50px] 2xl:text-[70px] text-black mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Neueste <br className="hidden lg:block" /> Nachrichten &{" "}
          <br className="hidden lg:block" /> Einblicke
        </motion.h1>
      </motion.div>

      <motion.div
        className="w-full lg:w-[50%] flex flex-col-reverse md:flex-col"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-row items-center justify-between border-[#D3D3D3] border py-8 md:py-0 px-0"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-[16px] md:text-[14px] text-black px-4 py-0 md:px-8 md:py-5 whitespace-nowrap">
            Ausgewählte Artikel
          </h1>

          <div className="flex flex-row items-center justify-start gap-2 md:gap-3 mr-4 md:mr-40 xl:mr-80">
            <motion.button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="bg-[#E8EBF1] p-3 md:p-4 rounded-[4px] disabled:opacity-50"
              aria-label="Previous"
              whileHover={{ backgroundColor: "#D8DBE6", scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <img src="/images/leftArrow.svg" alt="Previous" />
            </motion.button>

            <motion.button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="bg-[#E8EBF1] p-3 md:p-4 rounded-[4px] disabled:opacity-50"
              aria-label="Next"
              whileHover={{ backgroundColor: "#D8DBE6", scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <img src="/images/rightArroww.svg" alt="Next" />
            </motion.button>
          </div>
        </motion.div>

        <div className="overflow-x-auto md:overflow-hidden -mx-4 md:mx-0">
          <motion.div
            className="flex"
            animate={{
              x: `-${(100 / articles.length) * visibleCount * currentIndex}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            style={{
              width: `${(100 / visibleCount) * articles.length}%`,
            }}
          >
            {articles.map(({ id, img, title, date }, index) => (
              <motion.div
                key={id}
                className="py-8 px-6 md:py-[35px] md:px-[25px] border-[#D3D3D3] border flex-shrink-0 md:flex-shrink md:w-auto group"
                style={{
                  width: `${100 / articles.length}%`,
                  minWidth: "280px",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-fit lg:h-64 w-full overflow-hidden rounded-md">
                  <motion.img
                    src={img}
                    alt={`Article ${id}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
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

                  <motion.div
                    className="bg-[#E8EBF1] p-3 md:p-4 rounded-[4px] flex items-center"
                    whileHover={{ backgroundColor: "#D8DBE6" }}
                    transition={{ duration: 0.2 }}
                  >
                    <img src="/images/rightArroww.svg" alt="" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default News;
