import React from "react";
import AboutStart from "../components/about/AboutStart";
import UnsereMission from "../components/about/UnsereMission";
import Car from "../components/about/Car";
import Verantwortung from "../components/about/Verantwortung";
import Nachrichten from "../components/about/Nachrichten";
import ScrollToTop from "../components/general/ScrollToTop";
import Abonnieren from "../components/general/Abonnieren";
const About = () => {
  return (
    <div>
      <ScrollToTop />
      <AboutStart
        src="/images/aboutStart.png"
        title="Über uns"
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
