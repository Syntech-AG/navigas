import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedCounter = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const startValue = 0;
    const endValue = typeof end === "number" ? end : parseFloat(end) || 0;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      );

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(
        easeOutQuart * (endValue - startValue) + startValue
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {typeof end === "number"
        ? count.toLocaleString()
        : end.replace(/[\d,]+/, count.toLocaleString())}
      {suffix}
    </span>
  );
};

const Car = () => {
  const stats = [
    { label: "Partnergaragen", value: 1000, suffix: "+" },
    { label: "Verfügbarkeit", value: "Ganze CH" },
    { label: "Jahre tätig", value: 7, suffix: "+" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full relative mt-[100px]">
      <video
        src="/images/videoNav2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen block object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07070A4D]/30 via-transparent to-[#0A1424]" />

      <div className="absolute bottom-20 left-0 w-full z-10">
        <motion.div
          className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 gap-6 md:gap-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2 text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h1
                className="text-xs sm:text-sm md:text-base font-bold text-white uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {stat.label}
              </motion.h1>

              <motion.h1
                className="text-[#D9D9D9] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2 + 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                {typeof stat.value === "number" ? (
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix || ""}
                    duration={2.5}
                  />
                ) : (
                  stat.value
                )}
              </motion.h1>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Car;
