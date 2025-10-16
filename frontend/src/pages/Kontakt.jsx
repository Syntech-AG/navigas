import React from "react";
import AboutStart from "../components/about/AboutStart";
import KontaktInfo from "../components/kontakt/KontaktInfo";
import KontaktFormular from "../components/kontakt/KontaktFormular";
import ScrollToTop from "../components/general/ScrollToTop";

const Kontakt = () => {
  return (
    <div>
      <ScrollToTop />
      <AboutStart
        src="/images/kontaktPhoto.png"
        title="Kontakt"
        mobileSrc="/images/mobileKontakt.png"
      />
      <KontaktInfo />
      <KontaktFormular />
    </div>
  );
};

export default Kontakt;
