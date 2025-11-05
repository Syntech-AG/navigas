import React from "react";

const BlogsId = ({ headings = [], data = [], paragraph = [], images = [] }) => {
  return (
    <div className="container pt-20 mx-auto px-4">
      {headings[0] && (
        <div className="bg-[#E8EBF1] px-6 py-1 w-fit rounded-lg mt-[60px] md:mt-[100px]">
          <h1 className="text-[#0453C8]">{headings[0]}</h1>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 md:py-[40px] gap-2">
        {headings[1] && (
          <h1 className="text-[28px] md:text-[40px] text-black">
            {headings[1]}
          </h1>
        )}
        {data?.length > 0 && (
          <h1 className="text-black text-[16px] md:text-base">{data[0]}</h1>
        )}
      </div>

      {images[0] && (
        <div>
          <img
            src={images[0].src}
            alt={images[0].alt}
            className={images[0].className}
          />
        </div>
      )}

      <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-20 mt-8">
        <div className="flex flex-col items-start gap-6 md:gap-[30px] flex-1">
          {headings.slice(2).map((title, i) => (
            <div key={i} className="mb-8">
              <h1 className="text-[22px] md:text-[32px] font-semibold">
                {title}
              </h1>
              {paragraph[i] && (
                <p className="text-[15px] md:text-[18px] py-4 md:py-[24px]  whitespace-pre-line">
                  {paragraph[i]}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-row md:flex-col items-center justify-between gap-3 md:gap-[15px] mt-6 md:mt-0">
          <h1>teilen</h1>
          <a href="https://www.facebook.com/navigasmobility">
            <img src="/images/fb-blue.svg" alt="facebook" />
          </a>
          <a href="https://x.com/navigasmobility">
            <img src="/images/x-blue.svg" alt="x" />
          </a>
          <a href="https://www.linkedin.com/showcase/navigas-mobility">
            <img src="/images/in-blue.svg" alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/navigas_mobility">
            <img src="/images/insta-blue.svg" alt="instagram" />
          </a>
        </div>
      </div>

      {images[1] && (
        <div>
          <img
            src={images[1].src}
            alt={images[1].alt}
            className={images[1].className}
          />
        </div>
      )}
    </div>
  );
};

export default BlogsId;
