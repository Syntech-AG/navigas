import React from "react";

const AboutStart = ({ src, mobileSrc, title, title2 }) => {
  return (
    <div className="relative">
      <img src={mobileSrc} alt="" className=" block md:hidden w-full" />
      <img src={src} alt="" className="hidden w-full md:block" />
      <h1 className="absolute text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[99] lg:text-[40px] text-center md:text-[34px] text-[22px] font-medium">
        {title}
      </h1>
      <h1 className="absolute text-white left-1/2 top-100 text-center -translate-x-1/2 -translate-y-1/2 z-[99] lg:text-[30px] md:text-[24px] text-[12px] ">
        {title2}
      </h1>
      <img
        className="absolute w-full h-full z-[9] bottom-0"
        src="/images/Gradient.png"
        alt=""
      />
    </div>
  );
};

export default AboutStart;
