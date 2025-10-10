import React from "react";
import { motion } from "framer-motion";

const UnsereMission = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-start justify-between py-10 md:py-[170px] w-full md:gap-5 lg:gap-0">
        <motion.div
          className="text-[#050505] flex flex-col w-full md:w-[60%] mt-10 md:mt-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="uppercase font-bold text-[14px] tracking-2p text-[#050505]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Unsere Mission
          </motion.h1>

          <motion.h1
            className="font-semibold text-[24px] md:text-[34px] xl:text-[64px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            On-Demand-Autos per Klick <br className="hidden lg:block" />{" "}
            einfach, sicher, flexibel.
          </motion.h1>

          <motion.img
            src="/images/Container.png"
            alt=""
            className="w-fit w-full lg:w-[77%] h-[65%] mt-10 md:mt-[50px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
          />
        </motion.div>

        <motion.div
          className="text-[#494B4E] flex flex-col items-start md:items-end w-full md:w-[40%] mt-12 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="overflow-hidden rounded-lg w-fit h-fit lg:w-[75%] lg:h-[90%]"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
          >
            <video
              src="/images/Video 7.mov"
              alt=""
              autoPlay
              loop
              playsInline
              muted
              className="w-full h-full rounded-lg"
            />
          </motion.div>

          <motion.div
            className="-ml-0 xl:-ml-40"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-[#494B4E] text-[14px] md:text-[16px] xl:text-[20px] mt-6 md:mt-[40px] leading-8">
              Wir wollen den traditionellen Autobesitz transformieren, indem wir
              mit nur wenigen Klicks Zugang zum On-Demand-Automobil bieten. Dank
              eines flexiblen Abonnements und einer Auswahl von Fahrzeugen, die
              ständig erneuert werden, finden Sie ein Angebot, das Ihren
              Bedürfnissen entspricht. Wir verbessern unsere digitalen Prozesse
              Tag für Tag, um Ihr Kundenerlebnis zu verbessern. So sparen wir
              Ihnen nicht nur Zeit und Mühe, sondern garantieren Ihnen
              Sicherheit, Gelassenheit und Einsparungen während der
              Vertragsdauer.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col items-center justify-center font-bold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-[#050505] text-sm uppercase"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Premiumqualität
        </motion.h1>

        <motion.h1
          className="text-[#0505054D] font-semibold uppercase text-center text-[32px] md:text-[57px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          DIE MISSION VON NAVIGAS: <br />
          DEN AUTOBESITZ REVOLUTIONIEREN <br /> DURCH FLEXIBLE DIGITALE
          MOBILITÄT
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default UnsereMission;
