import React from "react";

const AboutStart = ({ src, title }) => {
  return (
    <div className="relative">
      <img src={src} alt="" />
      <h1 className="absolute text-white left-1/2 top-1/2 translate-[-50%] z-99 lg:text-[80px] md:text-[64px] text-[52px] font-medium">
        {title}
      </h1>
      <img
        className="absolute w-full h-full z-9 bottom-0"
        src="/images/Gradient.png"
        alt=""
      />
    </div>
  );
};

export default AboutStart;
