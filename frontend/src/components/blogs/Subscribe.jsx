import React from "react";
import { motion } from "framer-motion";

const Subscribe = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-stretch gap-6 md:gap-[30px] h-auto md:h-[500px] mb-20 px-0 md:px-0">
      {/* Image Section */}
      <motion.div
        className="border border-[#D3D3D3] p-4 md:p-[20px] w-full md:w-1/2 flex-1 flex flex-col overflow-hidden"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.img
          src="/images/subPhoto.png"
          alt=""
          className="w-full h-auto md:h-full object-cover rounded-md"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="border border-[#D3D3D3] p-6 md:p-[30px] flex-1 flex flex-col items-start justify-between gap-[50px] 2xl:gap-[100px] w-full md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div>
          <motion.h1
            className="text-2xl xl:text-[40px] lg:text-[30px] md:text-[20px] text-black leading-snug md:leading-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Bleiben Sie mit unserem <br />
            Newsletter auf dem Laufenden
          </motion.h1>

          <motion.p
            className="text-base xl:text-[20px] md:text-[16px] lg:text-[18px] mt-6 md:mt-[32px] leading-relaxed md:leading-loose"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Entdecken Sie die Welt der modernen Mobilität <br /> — mit aktuellen
            News, spannenden Trends und praktischen Tipps, die <br />
            informieren, inspirieren und den Blick in die Zukunft öffnen.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row items-start gap-5 md:gap-2 md:items-center justify-between w-full 2xl:w-[70%]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.input
            type="email"
            placeholder="Enter your email"
            className="rounded-md px-4 py-3 border border-gray-200 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 flex-1"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />

          <motion.button
            type="button"
            className="rounded-md px-8 py-3 bg-[#0A1424] text-white md:text-[10px] lg:text-[15px] xl:text-lg font-normal transition-colors"
            whileHover={{
              backgroundColor: "#1a2534",
              scale: 1.05,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Subscribe Now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Subscribe;
