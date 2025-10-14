import React from "react";
import Angebot from "../components/faq/Angebot";
import AboutStart from "../components/about/AboutStart";
import Deinem from "../components/faq/Deinem";

const Faq = () => {
  return (
    <div>
      <AboutStart
        src="/images/faqPhoto.png"
        title="FAQ"
        mobileSrc="/images/mobileFaq.png"
      />
      {/* <Angebot /> */}
      <Deinem />
    </div>
  );
};

export default Faq;
