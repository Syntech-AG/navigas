import React from "react";

const AboutStart2 = ({ src, title, paragraph }) => {
  return (
    <div className="relative ">
      <img src={src} alt="" />
      <div className="absolute left-1/2 top-1/2 translate-[-50%] z-100 w-full">
        <h1 className=" text-white text-center z-99 lg:text-[80px] md:text-[64px] text-[52px] font-medium">
          {title}
        </h1>
        <p className="text-center font-semibold text-white text-[16px] mt-10 md:text-[20px] z-99 ">
          {paragraph}
        </p>
      </div>
      <img
        className="absolute w-full  z-9 bottom-0"
        src="/images/Gradient.png"
        alt=""
      />
    </div>
  );
};

export default AboutStart2;
