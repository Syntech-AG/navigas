import React from "react";

const AboutStart = ({ src, mobileSrc, title }) => {
  return (
    <div className="relative">
      <img src={mobileSrc} alt="" className=" block md:hidden w-full" />
      <img src={src} alt="" className="hidden w-full md:block" />
      <h1 className="absolute text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[99] lg:text-[80px] md:text-[64px] text-[32px] font-medium">
        {title}
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
