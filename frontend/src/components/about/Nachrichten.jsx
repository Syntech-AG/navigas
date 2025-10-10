import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Nachrichten = () => {
  const newsItems = [
    {
      image: "/images/image 16.png",
      category: "Auto repair",
      title:
        "solicare ermöglicht eine Entlöhnung und professionelle Unterstützung für p...",
      date: "Sep. 5, 2022",
      comments: "0 Comments",
    },
    {
      image: "/images/image 15.png",
      category: "Auto repair",
      title:
        "Hybrid-, Plug-in-Hybrid- oder Elektrofahrzeuge mit Range-Extender",
      date: "Jan. 21, 2022",
      comments: "0 Comments",
    },
    {
      image: "/images/image 17.png",
      category: "Auto repair",
      title: "Die Elektrifizierungsstrategie der Fahrzeughersteller",
      date: "Okt. 4, 2021",
      comments: "0 Comments",
    },
  ];

  return (
    <div className="flex flex-col items-start justify-between mt-10 md:mt-[110px]  relative pb-5 md:pb-100">
      <img
        src="/images/banesa.png"
        alt="banesa"
        className="absolute bottom-0 right-0 h-auto select-none pointer-events-none hidden md:block"
      />

      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-0 md:items-center justify-between w-full container">
        <div className="flex flex-col items-start justify-between ">
          <motion.h1
            className="text-[#050505] font-bold text-[14px] tracking-[2px] uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Newsroom
          </motion.h1>

          <motion.h1
            className="font-semibold text-[54px] text-[#050505]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Neueste Nachrichten
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/blogs">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#0A58D0",
                boxShadow: "0px 6px 15px rgba(8, 71, 164, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0847A4] text-white text-[13px] rounded-xl px-8 py-3 font-medium tracking-wide flex items-center gap-2 transition-all duration-300 whitespace-nowrap"
            >
              <span className="flex items-center gap-2">
                Alle anzeigen
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between mt-[45px] gap-6 w-full container mx-auto">
        {newsItems.map((item, index) => (
          <motion.div
            key={index}
            className="text-[#050505] flex-1 w-full cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -10 }}
          >
            <div className="overflow-hidden rounded-lg">
              <motion.img
                src={item.image}
                alt=""
                className="w-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
            <motion.h1
              className="text-[14px] font-bold uppercase tracking-[2px] mt-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              {item.category}
            </motion.h1>
            <h1 className="text-[18px] font-bold mt-1">{item.title}</h1>
            <div className="flex flex-row items-center justify-start w-full text-[#909491] text-[14px] gap-3 mt-2">
              <h1>{item.date}</h1>
              <h1>{item.comments}</h1>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Nachrichten;
