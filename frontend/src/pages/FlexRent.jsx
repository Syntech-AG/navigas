import React from "react";
import AboutStart2 from "../components/about/AboutStart2";
import Flexible from "../components/general/Flexible";
import Peaks from "../components/general/Peaks";
import TopKategorien from "../components/general/TopKategorien";
import ServicesType2 from "../components/general/ServicesType2";
import Fragen from "../components/general/Fragen";
import Unverbindlich from "../components/general/Unverbindlich";
import Abonnieren from "../components/general/Abonnieren";
import Nachrichten from "../components/about/Nachrichten";

const FlexRent = () => {
  return (
    <div>
      <AboutStart2
        src="/images/VideoBG.png"
        title="FlexRent: Top-Auto fur Ihr KMU"
        paragraph="Maximale Mobilitat mit minimalem Aufwand: Fahrzeuge ab 1 Monat inklusive Lieferung an Ihre Wunschadresse.Schnell, flexibel, alles drin."
      />
      <Flexible />
      <Peaks />
      <TopKategorien />
      <ServicesType2 />
      <Fragen />
      <Unverbindlich />
      <Abonnieren />
      <Nachrichten />
    </div>
  );
};

export default FlexRent;
