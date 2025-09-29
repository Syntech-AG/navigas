import React from "react";

const Subscribe = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-stretch gap-6 md:gap-[30px] h-auto md:h-[500px] mb-20 px-0 md:px-0">
      <div className="border border-[#D3D3D3] p-4 md:p-[20px] w-full md:w-1/2 flex-1 flex flex-col">
        <img
          src="/images/subPhoto.png"
          alt=""
          className="w-full h-auto md:h-full object-cover"
        />
      </div>
      <div className="border border-[#D3D3D3] p-6 md:p-[30px] flex-1 flex flex-col items-start justify-between gap-[50px] 2xl:gap-[100px] w-full md:w-1/2">
        <div>
          <h1 className="text-2xl xl:text-[40px] lg:text-[30px] md:text-[20px] text-black leading-snug md:leading-normal">
            Bleiben Sie mit unserem <br />
            Newsletter auf dem Laufenden
          </h1>
          <p className="text-base xl:text-[20px] md:text-[16px] lg:text-[18px] mt-6 md:mt-[32px] leading-relaxed md:leading-loose">
            Entdecken Sie die Welt der modernen Mobilität <br /> — mit aktuellen
            News, spannenden Trends und praktischen Tipps, die <br />
            informieren, inspirieren und den Blick in die Zukunft öffnen.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-5 md:gap-2 md:items-center justify-between w-full  2xl:w-[70%]">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-md px-4 py-3 border border-gray-200 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 flex-1"
          />
          <button
            type="button"
            className=" rounded-md px-8 py-3 bg-[#0A1424] text-white md:text-[10px] lg:text-[15px] xl:text-lg font-normal hover:bg-gray-800 transition-colors"
          >
            Subscribn Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
