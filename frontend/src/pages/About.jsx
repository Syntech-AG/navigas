import React from "react";
import AboutStart from "../components/about/AboutStart";
import UnsereMission from "../components/about/UnsereMission";
import Car from "../components/about/Car";
import Verantwortung from "../components/about/Verantwortung";
import Nachrichten from "../components/about/Nachrichten";
import ScrollToTop from "../components/general/ScrollToTop";
import Abonnieren from "../components/general/Abonnieren";
import AboutStart2 from "../components/about/AboutStart2";
const About = () => {
  return (
    <div>
      <ScrollToTop />
      <AboutStart2
        src="/images/aboutStart.png"
        title="Unser Antrieb"
        paragraph="Mobilität, wie sie sein soll. Einfach, fair und auf Ihre Bedürfnisse zugeschnitten"
        mobileSrc="/images/aboutMobile.png"
      />
      <UnsereMission />
      <Car />
      <Verantwortung />
      <Abonnieren />
      <Nachrichten />
    </div>
  );
};

export default About;
