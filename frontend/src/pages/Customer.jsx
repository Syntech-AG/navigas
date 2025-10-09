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

const Customer = () => {
  return (
    <div>
      <AboutStart
        src="/images/autoBg.png"
        title="Auto Abo Pro"
        mobileSrc="images/mobileAuto.png"
      />
      {/* <HoverCategories2 /> */}
      <Effizienz />
      <LogoSlider />
      <Dabei />
      <Effizienz2 />
      <ServicesType />
      {/* <Funktioniert /> */}
      <Nachrichten />
    </div>
  );
};

export default Customer;
