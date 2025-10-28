import React from "react";
import AboutStart from "../components/about/AboutStart";
import HoverCategories2 from "../components/costumer/HoverCategories2";
import Effizienz from "../components/costumer/Effizienz";
import LogoSlider from "../components/home/LogoSlider";
import Dabei from "../components/costumer/Dabei";
import ServicesType from "../components/home/ServicesType";
import Funktioniert from "../components/costumer/Funktioniert";
import Nachrichten from "../components/about/Nachrichten";
import Effizienz2 from "../components/costumer/Effizienz2";
import ScrollToTop from "../components/general/ScrollToTop";
import AboutStart2 from "../components/about/AboutStart2";

const Customer = () => {
  return (
    <div>
      <ScrollToTop />
      <AboutStart2
        src="/images/autoBg.png"
        title="Auto Abo Pro"
        paragraph="Mit Navigas bleiben Sie und Ihr Unternehmen jederzeit mobil, ohne langfristige Verpflichtungen"
        mobileSrc="images/mobileAuto.png"
      />
      {/* <HoverCategories2 /> */}
      <Effizienz />
      <LogoSlider />

      <div className="container mx-auto mt-30">
        {" "}
        <h1 className="text-[#010101] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold text-center leading-snug">
          Was ist alles dabei im Auto Abo Pro?
        </h1>
      </div>
      <ServicesType />
      <Dabei />
      <Effizienz2 />
      {/* <Funktioniert /> */}
      <Nachrichten />
    </div>
  );
};

export default Customer;
