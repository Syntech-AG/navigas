import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Custom hook to detect mobile screens
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");

    const onChange = () => {
      setIsMobile(window.innerWidth < 768);
    };

    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < 768);

    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
};

const Subscribe = () => {
  const isMobile = useIsMobile();
  const Container = isMobile ? "div" : motion.div;
  const Image = isMobile ? "img" : motion.img;
  const Heading = isMobile ? "h1" : motion.h1;
  const Paragraph = isMobile ? "p" : motion.p;
  const InputWrapper = isMobile ? "div" : motion.div;
  const Input = isMobile ? "input" : motion.input;
  const Button = isMobile ? "button" : motion.button;

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-stretch gap-6 md:gap-[30px] h-auto md:h-[500px] mb-20 px-0 md:px-0">
      <Container
        className="border border-[#D3D3D3] p-4 md:p-[20px] w-full md:w-1/2 flex-1 flex flex-col overflow-hidden"
        {...(!isMobile && {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.7, ease: "easeOut" },
        })}
      >
        <Image
          src="/images/subPhoto.png"
          alt=""
          className="w-full h-auto md:h-full object-cover rounded-md"
          {...(!isMobile && {
            whileHover: { scale: 1.03 },
            transition: { duration: 0.4 },
          })}
        />
      </Container>

      <Container
        className="border border-[#D3D3D3] p-6 md:p-[30px] flex-1 flex flex-col items-start justify-between gap-[50px] 2xl:gap-[60px] w-full md:w-1/2"
        {...(!isMobile && {
          initial: { opacity: 0, x: 50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.7, ease: "easeOut" },
        })}
      >
        <div>
          <Heading
            className="text-2xl xl:text-[40px] lg:text-[30px] md:text-[20px] text-black leading-snug md:leading-normal"
            {...(!isMobile && {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.2 },
            })}
          >
            Bleiben Sie mit unserem <br />
            Newsletter auf dem Laufenden
          </Heading>

          <Paragraph
            className="text-base xl:text-[20px] md:text-[16px] lg:text-[18px] mt-6 md:mt-[32px] leading-relaxed md:leading-loose"
            {...(!isMobile && {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.3 },
            })}
          >
            Entdecken Sie die Welt der modernen Mobilität <br />
            —mit aktuellen News, spannenden Trends und praktischen Tipps, die{" "}
            <br />
            informieren, inspirieren und den Blick in die Zukunft ermöglichen
            anstatt öffnen.
          </Paragraph>
        </div>

        <InputWrapper
          className="flex flex-col sm:flex-row items-start gap-5 md:gap-2 md:items-center justify-between w-full 2xl:w-[70%] "
          {...(!isMobile && {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.4 },
          })}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="rounded-md px-4 py-3 border border-gray-200 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 flex-1"
            {...(!isMobile && {
              whileFocus: { scale: 1.02 },
              transition: { duration: 0.2 },
            })}
          />

          <Button
            type="button"
            className="rounded-md px-8 py-3 bg-[#0A1424] text-white md:text-[10px] lg:text-[15px] xl:text-lg font-normal transition-colors "
            {...(!isMobile && {
              whileHover: {
                backgroundColor: "#1a2534",
                scale: 1.05,
              },
              whileTap: { scale: 0.98 },
              transition: { duration: 0.2 },
            })}
          >
            Subscribe Now
          </Button>
        </InputWrapper>
      </Container>
    </div>
  );
};

export default Subscribe;
