import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PRICING_TYPE } from "./Constans";

export const CarCard = memo(({ car, pricingType = PRICING_TYPE.NORMAL }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/api/cars/${car.documentId}?pricing=${pricingType}`);
  }, [navigate, car.documentId, pricingType]);

  const handleImgError = (e) => (e.target.src = "/images/car.png");

  return (
    <motion.div
      className="p-2 cursor-pointer"
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <motion.div
        className="bg-[#0A1424] rounded-xl shadow-lg overflow-hidden transition"
        whileHover={{ boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)" }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative overflow-hidden">
          <motion.img
            src={car.imageUrl}
            alt={`${car.marke} ${car.modell}`}
            className="w-full h-48 object-cover"
            loading="lazy"
            onError={handleImgError}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          <motion.div
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-end gap-1 w-[90%]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-white font-medium text-[24px] tracking-[2px]">
              {car.displayPrice}
            </h1>
            <p className="text-white text-[10px]">
              pro Monat{" "}
              {pricingType === PRICING_TYPE.NORMAL
                ? "exkl. MwSt."
                : "inkl. MwSt."}
            </p>
          </motion.div>
        </div>
        <motion.div
          className="py-5 border-b border-[#152032] w-[90%] mx-auto flex flex-col gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h1 className="text-white font-medium text-[20px] truncate">
            {car.marke} {car.modell}
          </h1>
          <h1 className="text-[#C0C0C1] text-[14px]">{car.Getriebe}</h1>
        </motion.div>
        <motion.div
          className="py-5 w-[80%] mx-auto flex justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {[
            { icon: "/images/psIcon.svg", text: `${car.leistung} PS` },
            { icon: "/images/pumpIcon.svg", text: car.Treibstoff },
            { icon: "/images/typeIcon.svg", text: `${car.verbrauch} L/100km` },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col-reverse items-center gap-2"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-[#C0C0C1] text-[12px]">{stat.text}</p>
              <motion.img
                src={stat.icon}
                alt=""
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
});
