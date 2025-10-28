import React from "react";
import AboutStart from "../components/about/AboutStart";
import KontaktInfo from "../components/kontakt/KontaktInfo";
import KontaktFormular from "../components/kontakt/KontaktFormular";
import ScrollToTop from "../components/general/ScrollToTop";
import Abonnieren from "../components/general/Abonnieren";

const Kontakt = () => {
  return (
    <div>
      <ScrollToTop />
      {/* <AboutStart
        src="/images/kontaktPhoto.png"
        title="Kontakt"
        mobileSrc="/images/mobileKontakt.png"
      /> */}
      <KontaktInfo />
      <KontaktFormular />
      <Abonnieren />
    </div>
  );
};

export default Kontakt;
