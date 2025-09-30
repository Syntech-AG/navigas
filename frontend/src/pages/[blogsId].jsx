import React from "react";

const BlogsId = ({ headings, data, paragraph, images }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-[#E8EBF1] px-6 py-1 w-fit rounded-lg mt-[60px] md:mt-[100px]">
        <h1 className="text-[#0453C8]">{headings[0]}</h1>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 md:py-[40px] gap-2">
        <h1 className="text-[28px] md:text-[40px] text-black">{headings[1]}</h1>
        <h1 className="text-black text-[16px] md:text-base">{data}</h1>
      </div>

      <div>
        <img
          src={images[0].src}
          alt={images[0].alt}
          className={images[0].className}
        />
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-20">
        <div className="flex flex-col items-start gap-6 md:gap-[30px] flex-1">
          <h1 className="text-[22px] md:text-[32px] font-semibold">
            {headings[2]}
          </h1>
          <p className="text-[16px] md:text-[20px] font-semibold">
            {paragraph[0]}
          </p>
          <p className="text-[15px] md:text-[18px]">{paragraph[1]}</p>
        </div>
        <div className="flex flex-row md:flex-col items-center justify-between gap-3 md:gap-[15px] mt-6 md:mt-0">
          <h1>share</h1>
          <img src="/images/fb-blue.svg" alt="facebook" />
          <img src="/images/x-blue.svg" alt="x" />
          <img src="/images/in-blue.svg" alt="linkedin" />
          <img src="/images/insta-blue.svg" alt="instagram" />
        </div>
      </div>

      <div>
        <img
          src={images[1].src}
          alt={images[1].alt}
          className={images[1].className}
        />
      </div>

      <div>
        <h1 className="text-[22px] md:text-[32px] font-semibold">
          {headings[3]}
        </h1>
        <p className="text-[15px] md:text-[18px] py-6 md:py-[32px]">
          {paragraph[2]}
        </p>
      </div>

      <div>
        <h1 className="text-[22px] md:text-[32px] font-semibold">
          {headings[4]}
        </h1>
        <p className="text-[15px] md:text-[18px] py-6 md:py-[32px]">
          {paragraph[3]}
        </p>
      </div>
    </div>
  );
};

export default BlogsId;
