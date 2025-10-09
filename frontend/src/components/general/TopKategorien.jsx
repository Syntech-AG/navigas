import React from "react";
import { motion } from "framer-motion";

const TopKategorien = () => {
  const categories = [
    {
      id: 1,
      image: "/images/container1.png",
      category: "kleinwagen",
      price: "699 CHF/Monat - ab 12 Monate",
      tag: "Beispielkategorie",
      download: "Details im Factsheet (download)",
    },
    {
      id: 2,
      image: "/images/container1.png",
      category: "kleinwagen",
      price: "699 CHF/Monat - ab 12 Monate",
      tag: "Beispielkategorie",
      download: "Details im Factsheet (download)",
    },
    {
      id: 3,
      image: "/images/container1.png",
      category: "kleinwagen",
      price: "699 CHF/Monat - ab 12 Monate",
      tag: "Beispielkategorie",
      download: "Details im Factsheet (download)",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative">
      <img
        src="/images/topbg.png"
        alt=""
        className="w-full xl:h-auto object-cover absolute -z-1 h-full"
      />
      <div className="flex items-center justify-center md:py-25 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-[54px] font-semibold text-white text-center mb-6 md:mb-8 lg:mb-10"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Top-Kategorien
          </motion.h1>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {categories.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex flex-col justify-between items-start gap-2 md:gap-[10px] cursor-pointer"
                variants={cardVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="overflow-hidden rounded-lg w-full">
                  <motion.img
                    src={item.image}
                    alt=""
                    className="w-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <motion.h1
                  className="uppercase text-xs md:text-[14px] text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {item.category}
                </motion.h1>

                <motion.p
                  className="font-bold text-base md:text-lg lg:text-[20px] text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  {item.price}
                </motion.p>

                <motion.div
                  className="text-[#B0CCF8] text-xs md:text-[14px] flex flex-row items-center justify-start gap-2 flex-wrap"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <h1>{item.tag}</h1>
                  <img src="/images/dot.svg" alt="" />
                  <h1>{item.download}</h1>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-row items-center justify-center p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="text-[#0453C8] bg-white px-6 py-3 rounded-2xl shadow-md transition-all duration-300"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#0453C8",
                color: "#ffffff",
                boxShadow: "0 10px 30px rgba(4, 83, 200, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Factsheet herunterladen
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TopKategorien;
