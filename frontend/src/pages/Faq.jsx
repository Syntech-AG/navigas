import React from "react";
import Angebot from "../components/faq/Angebot";
import AboutStart from "../components/about/AboutStart";

const Faq = () => {
  return (
    <div>
      <AboutStart
        src="/images/faqPhoto.png"
        title="FAQ"
        mobileSrc="/images/mobileFaq.png"
      />
      <Angebot />
    </div>
  );
};

export default Faq;
