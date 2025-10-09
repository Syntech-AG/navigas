import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    image: "/images/img1.svg",
    title: "Service & Reparturen",
  },
  {
    image: "/images/img2.svg",
    title: "Ersatzfahrzeug",
  },
  {
    image: "/images/img3.svg",
    title: "Premium-Reifen & Lagerung",
  },
  {
    image: "/images/img4.svg",
    title: "Schadenmanagement",
  },
  {
    image: "/images/img5.svg",
    title: "7/24 europaweite Assistance",
  },
  {
    image: "/images/img6.svg",
    title: "Versicherung & CarCare",
  },
  {
    image: "/images/img7.svg",
    title: "Bussenmanagement",
  },
  {
    image: "/images/img8.svg",
    title: "Lieferung an Wunschort",
  },
];

const ServicesType2 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <motion.div
        className="container grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-14 gap-x-6 py-23"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-3 cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-[#E8EBF2] rounded-full p-10"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#d9e2f2",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.img
                className="w-[50px] h-[50px]"
                src={item.image}
                alt=""
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            <motion.h1
              className="text-[24px] font-semibold text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {item.title}
            </motion.h1>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesType2;
