import React from "react";
import { motion } from "framer-motion";

const Auto = () => {
  return (
    <div className="lg:py-25 py-16">
      <div className="container grid grid-cols-1 lg:grid-cols-[9fr_11fr] gap-10 items-end">
        <motion.div
          className="max-lg:order-2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="uppercase text-[14px] font-semibold tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            EIN PREIS. ALLES DRIN.
          </motion.h2>
          <motion.h1
            className="2xl:text-[54px] lg:text-[46px] text-[38px] font-semibold xl:max-w-[80%] 2xl:w-[70%] leading-[1.3]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Was ist alles dabei im Auto-Abo?
          </motion.h1>
          <motion.p
            className="text-[14px] lg:text-[16px] text-[#494B4E] font-normal leading-[1.9] my-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="font-semibold">
              Alles drin. Alles geregelt. Einfach fahren.
              <br />
            </span>{" "}
            Bei Navigas gibt es keine versteckten Preisunterschiede und alles
            ist inklusive. Service erfolgt bei offiziellen Markenvertretungen
            Ihrer Wahl.
          </motion.p>
          <img
            className="w-full rounded-lg"
            src="/images/auto.png"
            srcSet="/images/auto1.png 1x, /images/auto1@2x.png 2x, /images/auto1@3x.png 3x"
            sizes="(max-width: 768px) 100vw, 45vw"
            alt="Auto example 1"
            loading="lazy"
            decoding="async"
          />{" "}
        </motion.div>

        <img
          className="max-lg:order-1 rounded-lg"
          src="/images/auto2.png"
          srcSet="/images/auto2.png 1x, /images/auto2@2x.png 2x, /images/auto2@3x.png 3x"
          sizes="(max-width: 768px) 100vw, 55vw"
          alt="Auto example 2"
          loading="lazy"
          decoding="async"
          style={{ transform: "none" }}
        />
      </div>
    </div>
  );
};

export default Auto;
