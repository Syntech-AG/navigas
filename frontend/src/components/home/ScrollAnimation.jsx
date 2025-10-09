import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollSection = ({ image, label, title, number, description, index }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95]);
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0.8]
  );
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0.8]
  );

  return (
    <div
      ref={sectionRef}
      className="grid lg:min-h-screen max-lg:max-h-screen max-lg:pb-[10vh] grid-cols-1 lg:grid-cols-2 items-center bg-white sticky top-0"
      style={{ zIndex: index * 10 }}
    >
      <motion.img
        className="max-h-screen lg:h-full max-lg:w-full max-lg:mx-auto"
        src={image}
        alt=""
        style={{
          scale: imageScale,
          opacity: imageOpacity,
        }}
      />

      <motion.div
        className="lg:w-[80%] w-fit mx-auto max-lg:mt-5"
        style={{
          y: textY,
          opacity: textOpacity,
        }}
      >
        <motion.h2
          className="xl:text-[14px] text-[12px] font-semibold tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {label}
        </motion.h2>

        <motion.h1
          className="xl:text-[54px] text-[44px] font-semibold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {title}
        </motion.h1>

        <motion.hr
          className="w-full h-[1px] text-[#D9D9D9] lg:mb-10 lg:mt-20 mb-5 mt-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ transformOrigin: "left" }}
        />

        <motion.div
          className="flex flex-row justify-between gap-20 w-full items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.img
            src={number}
            alt=""
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
          <p className="xl:text-[14px] text-[#050505] text-[12px] leading-[1.9] w-[90%]">
            {description}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

const ScrollAnimation = () => {
  const sections = [
    {
      image: "/images/auswahlen.png",
      label: "Wie funktioniert es ?",
      title: "Auswählen",
      number: "/images/1.png",
      description:
        "Wählen Sie Ihr Wunschmodell und die gewünschte Abo-Dauer. Kilometerleistung können Sie flexibel anpassen – ganz nach Ihrem Bedarf.",
    },
    {
      image: "/images/bestatigen.png",
      label: "Wie funktioniert es ?",
      title: "Online bestellen",
      number: "/images/2.png",
      description:
        "Identifizieren Sie sich ganz bequem online und bestätigen Sie Ihre Bestellung online. Keine Startgebühr, keine Anzahlung. Sie zahlen erst nach Übernahme Ihres Autos.",
    },
    {
      image: "/images/losfahren.png",
      label: "Wie funktioniert es ?",
      title: "Losfahren",
      number: "/images/3.png",
      description:
        "Ihr Auto wird kostenlos an Ihre Wunschadresse geliefert. Service erfolgt bei der offiziellen Markenvertretung Ihrer Wahl. Dazu profitieren Sie von europaweiter Assistance und einem All-inclusive Paket mit Premiumreifen, Montage, Lagerung sowie vielen weiteren Services.",
    },
  ];

  return (
    <div className="lg:py-30 py-20 max-lg:flex max-lg:items-center max-lg:gap-15 max-lg:flex-col lg:relative">
      {sections.map((section, index) => (
        <ScrollSection key={index} {...section} index={index + 1} />
      ))}
    </div>
  );
};

export default ScrollAnimation;
