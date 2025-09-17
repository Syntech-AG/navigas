import React from "react";
import AboutStart from "../components/about/AboutStart";
import UnsereMission from "../components/about/UnsereMission";
import Car from "../components/about/Car";
import Verantwortung from "../components/about/Verantwortung";
import Nachrichten from "../components/about/Nachrichten";
const About = () => {
  return (
    <div>
      <AboutStart src="/images/aboutStart.png" title="Über uns" />
      <UnsereMission />
      <Car />
      <Verantwortung />
      <Nachrichten />
    </div>
  );
};

export default About;
