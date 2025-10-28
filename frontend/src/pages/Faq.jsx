import React from "react";
import Angebot from "../components/faq/Angebot";
import AboutStart from "../components/about/AboutStart";
import Deinem from "../components/faq/Deinem";
import ScrollToTop from "../components/general/ScrollToTop";
import Abonnieren from "../components/general/Abonnieren";
import Nachrichten from "../components/about/Nachrichten";

const Faq = () => {
  return (
    <div>
      <ScrollToTop />
      {/* <AboutStart
        src="/images/faqPhoto.png"
        title="FAQ"
        mobileSrc="/images/mobileFaq.png"
      /> */}
      {/* <Angebot /> */}
      <Deinem />
      <Abonnieren />
      <Nachrichten />
    </div>
  );
};

export default Faq;
