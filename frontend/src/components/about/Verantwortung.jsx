import React from "react";
import { motion } from "framer-motion";

const Verantwortung = () => {
  const steps = [
    {
      icon: "/images/Icon.svg",
      title: "Auto Abo auswählen",
      description:
        "Ihr Wunschauto in wenigen Klicks: Modell, Laufzeit und Kilometer flexibel bestimmen.",
    },
    {
      icon: "/images/Icon2.svg",
      title: "Online bestellen",
      description:
        "Bestellung und Bonitätsprüfung in wenigen Minuten erledigt. Ohne Papierkram, ohne Anzahlung.",
    },
    {
      icon: "/images/Icon3.svg",
      title: "Übernehmen & losfahren",
      description:
        "Ihr Auto wird an Ihre Wunschadresse schweizweit geliefert. Einsteigen und sorgenfrei fahren.",
    },
  ];

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stepVariants = {
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
    <div className="container mx-auto mt-10 md:mt-[150px] mb-10 md:mb-[150px] flex flex-col lg:flex-row justify-between items-center gap-[80px]">
      {/* Left Section - Images */}
      <motion.div
        className="flex flex-col items-center justify-between gap-5 w-full lg:w-1/2"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full">
          <motion.div
            className="relative rounded-lg overflow-hidden bg-[#0847A4] w-full md:w-auto"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/images/joniIdea.png"
              className="w-full h-full object-cover"
              alt="joniIdea"
            />
            <div className="absolute inset-0 flex flex-col justify-around xl:gap-10 p-6">
              <motion.h1
                className="text-[14px] text-white font-semibold uppercase"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Treffen Sie eine Wahl
              </motion.h1>
              <motion.h1
                className="text-[#FFFEFE] font-semibold text-[28px] sm:text-[50px] md:text-[33px] lg:text-[18px] xl:text-[24px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Auswählen, bestellen, geliefert bekommen – so einfach ist
                Autofahren heute.
              </motion.h1>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-auto"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/images/photo1.png"
              className="w-full h-full rounded-lg"
              alt="photo1"
            />
          </motion.div>
        </div>

        <motion.div
          className="w-full"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src="/images/photo2.png"
            className="rounded-lg w-full"
            alt="photo2"
          />
        </motion.div>
      </motion.div>

      {/* Right Section - Content */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-start justify-between"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-[#0A1424] font-semibold text-[22px] md:text-[35px] 2xl:text-[48px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Mobilität mit <br /> Verantwortung
        </motion.h1>

        <motion.h1
          className="text-[#0A1424] font-semibold text-[24px] mt-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Nachhaltig. Elektrisch. Engagiert
        </motion.h1>

        <motion.p
          className="text-[#494B4E] text-[16px] mt-5 md:mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Bei Navigas verbinden wir Fahrspass mit Verantwortung. Gemeinsam mit
          Partnern setzen wir auf moderne elektrische Antriebe, weniger CO₂ und
          Premium-Service. Weil Mobilität nicht nur bequem, sondern auch
          nachhaltig sein muss.
        </motion.p>

        <div className="mt-[60px] w-full">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-start justify-between gap-3 ${
                index > 0 ? "mt-[40px]" : ""
              } cursor-pointer`}
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.15 }}
              whileHover={{
                x: 10,
                backgroundColor: "rgba(8, 71, 164, 0.05)",
              }}
            >
              <motion.img
                src={step.icon}
                alt={`Icon ${index + 1}`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              />
              <h1 className="font-semibold text-[18px]">{step.title}</h1>
              <p className="text-[#494B4E]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Verantwortung;
