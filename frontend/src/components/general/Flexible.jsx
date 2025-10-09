import React from "react";
import { motion } from "framer-motion";

const Flexible = () => {
  const features = [
    {
      image: "/images/bg1.png",
      title: "Flexible Laufzeiten",
      description: "1-24 Monate, flexibel anpassbar an Ihren Bedarf.",
    },
    {
      image: "/images/bg2.png",
      title: "Schnelle Verfugbarkeit",
      description: "Keine langen Wartezeiten, einsteigen und losfahren.",
    },
    {
      image: "/images/bg3.png",
      title: "Fahrzeugтausch moglich",
      description: "Modell wechseln, wenn sich der Einsatz andert.",
    },
    {
      image: "/images/bg4.png",
      title: "Lieferung",
      description:
        "Ihr Fahrzeug wird innerhalb 48 Stunden an Wunschort geliefert.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <div className="w-full bg-[#F5F8FD]">
      <motion.div
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] py-[150px] sm:py-[100px] lg:py-[150px] px-4 sm:px-6 lg:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start justify-between gap-[18px] py-[40px] px-[30px] bg-white rounded-xl cursor-pointer"
            variants={itemVariants}
            whileHover={{
              y: -12,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={feature.image}
              alt=""
              className="mb-[22px]"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            />
            <h1 className="text-[#010101] font-semibold text-[20px]">
              {feature.title}
            </h1>
            <p className="text-[#494B4E] font-medium">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Flexible;
