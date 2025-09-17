import React from "react";

const Auto = () => {
  return (
    <div className="lg:py-25 py-16">
      <div className="container grid grid-cols-1 lg:grid-cols-[9fr_11fr] gap-10 items-end">
        <div className="max-lg:order-2">
          <h2 className="uppercase text-[14px] font-medium">
            Fahren statt verwalten.
          </h2>
          <h1 className="2xl:text-[54px] lg:text-[46px] text-[38px] font-semibold xl:max-w-[80%] 2xl:w-[70%] leading-[1.3]">
            Was ist alles dabei im Auto-Abo?
          </h1>
          <p className="text-[14px] lg:text-[16px] text-[#494B4E] font-normal leading-[1.9] my-5">
            <span className="font-semibold">
              Alles drin. Alles geregelt. Einfach fahren.
              <br />
            </span>{" "}
            Mit dem Navigas Auto-Abo fahren Sie sorgenfrei - ohne Anzahlung,
            ohne versteckte Kosten. Von Versicherung bis Reifenservice ist alles
            inklusive. So flexibel und bequem war Mobilität noch nie.
          </p>
          <img className="w-full" src="/images/auto1.png" alt="" />
        </div>
        <img className="max-lg:order-1" src="/images/auto2.png" alt="" />
      </div>
    </div>
  );
};

export default Auto;
