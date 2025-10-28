import React from "react";
import { motion } from "framer-motion";

const Peaks = () => {
  const peaksData = [
    {
      id: 1,
      image: "/images/root1.png",
      title: "Mobilitätsengpässe",
      subtitle: "& Peaks",
      description:
        "Mit Navigas FlexRent überbrücken Sie kurzfristige Engpässe in Ihrer Firmenflotte unkompliziert und flexibel. Egal ob bei Auftragsspitzen, Fahrzeugausfällen oder saisonalen Projekten. Wir liefern Ihnen innert 48 Stunden das passende Fahrzeug, inklusive Versicherung, Wartung und Service.",
      cta: "Let's get started!",
    },
    {
      id: 2,
      image: "/images/root2.png",
      title: "Temporäre",
      subtitle: "Mitarbeitende",
      description:
        "Statten Sie temporäre oder neue Mitarbeitende schnell und ohne langfristige Bindung mit einem Firmenfahrzeug aus. Navigas FlexRent bietet Ihnen All-Inclusive-Lösungen für Mietdauern von 1 bis 24 Monaten. Ideal bei befristeten Einsätzen, Vertretungen oder Startprojekten.",
      cta: "Let's get started!",
    },
    {
      id: 3,
      image: "/images/root3.png",
      title: "Elektromobilität",
      subtitle: "testen",
      description:
        "Erleben Sie Elektromobilität im Alltag, ohne langfristige Verpflichtung. Mit Navigas FlexRent können Firmen Elektro- und Hybridfahrzeuge flexibel testen und Erfahrungen sammeln, bevor sie sich für eine langfristige Flottenstrategie entscheiden. Nachhaltig, modern und rundum sorglos.",
      cta: "Let's get started!",
    },
  ];

  return (
    <div className="container mx-auto mb-20 md:mb-[140px] px-4 md:px-6">
      {peaksData.map((item) => {
        const isEven = item.id % 2 === 0;
        return (
          <div
            key={item.id}
            className={`flex flex-col items-center justify-center gap-6 md:gap-10 pt-20 md:pt-[140px] ${
              isEven ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Image Section */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.img
                src={item.image}
                alt=""
                className="w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="flex flex-col items-start justify-between gap-4 md:gap-5 w-full md:w-1/2"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-[54px] text-[#020106] font-semibold"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {item.title} <br />{" "}
                <span className="text-gray-500">{item.subtitle}</span>
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-[#494B4E]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {item.description}
              </motion.p>

              <motion.p
                className="text-sm md:text-base text-[#020106] uppercase font-semibold cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ x: 10 }}
              >
                {item.cta}
                <motion.span
                  className="inline-block ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </motion.p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Peaks;
