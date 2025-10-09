import React from "react";
import AboutStart from "../components/about/AboutStart";
import KontaktInfo from "../components/kontakt/KontaktInfo";
import KontaktFormular from "../components/kontakt/KontaktFormular";

const Kontakt = () => {
  return (
    <div>
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
