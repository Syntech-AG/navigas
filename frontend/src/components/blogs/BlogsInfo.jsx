import React from "react";
import BlogsId from "../../pages/[blogsId]";
import { useParams } from "react-router-dom";
import Subscribe from "./Subscribe";
import BerichteShuffle from "./BerichteShuffle";

const blogContent = {
  blog1: {
    headings: [
      "Medien",
      "Medienmitteilung navigas mobility",
      "Arval (Schweiz) AG und das Start-up navigas mobility gehen eine Partnerschaft ein",
      "All-inclusive Abo für Private und Firmen",
      "Schweizweites Netz von Partnergaragen und Bring-Service",
    ],
    data: ["28 April 2021"],
    paragraph: [
      "Arval ist der weltweit grösste Flottenanbieter und Schweizer Marktführer im Bereich Full-Service-Leasing. navigas mobility verfügt über Erfahrung im online-Automarkt, sei es Verkauf, Miete oder Leasing. Durch die Partnerschaft der beiden Firmen profitieren die Kundinnen und Kunden von einem umfangreichen online Angebot aus über 60 Modellen sowie einem ausgebauten Garagen- und Servicenetz.",
      "Mehmet von Burg, Mitgründer von navigas mobility, ist überzeugt: “Die Kundinnen und Kunden in der Schweiz sind bereit ihr Auto online zu erwerben, zu einem Monatspreis, bei dem wirklich alle Kosten rund um das Auto eingeschlossen sind.” David Möri, Partnership Manager bei Arval (Schweiz) AG und verantwortlich für das Retail Development ergänzt: “Ich freue mich auf die Zusammenarbeit und erwarte Synergien im digitalen Bereich, denn hier ist navigas mobility bestens aufgestellt.”",
      "Das all-inclusive Abo und das all-inclusive Pro umfassen alles, was mit dem Autofahren verbunden ist, von der Amortisation, Zulassung, Versicherung, Steuern, Service bis zu saisongerechten Reifen. Es ist keine Anzahlung nötig, die Vertragslaufzeit ist wählbar ab 25 bis 48 Monaten, genauso wie die Kilometerleistung pro Jahr. Einzig die Tankfüllungen sind nicht mit eingeschlossen. Mit dem all-inclusive Abo sind die Kosten fix über die gesamte Dauer des Vertrags planbar und es gibt keine unliebsamen Überraschungen.",
      "Die Kundinnen und Kunden übernehmen das Fahrzeug bei einer der Partnergaragen in der Schweiz oder sie lassen sich das Auto bequem nach Hause oder ins Geschäft liefern.",
    ],
    images: [
      {
        src: "/images/image 36.png",
        alt: "Titelbild",
        className: "w-full mb-8 md:mb-[56px]",
      },
      {
        src: "/images/image30.png",
        alt: "Zweites Bild",
        className: "w-full py-6 md:py-10",
      },
    ],
  },
  blog2: {
    headings: [
      "Medien",
      "Medienmitteilung navigas mobility",
      "Arval (Schweiz) AG und das Start-up …",
      "All-inclusive Abo für Private und Firmen",
      "Schweizweites Netz von Partnergaragen und Bring-Service",
    ],
    data: ["28 April 2021"],
    paragraph: [
      "Arval ist der weltweit grösste Flottenanbieter…",
      "Mehmet von Burg, Mitgründer von navigas mobility…",
      "Das all-inclusive Abo und das all-inclusive Pro umfassen alles…",
      "Die Kundinnen und Kunden übernehmen das Fahrzeug bei einer der Partnergaragen…",
    ],
    images: [
      {
        src: "images/image 36.png",
        alt: "Titelbild",
        className: "w-full mb-8 md:mb-[56px]",
      },
      {
        src: "/images/image30.png",
        alt: "Zweites Bild",
        className: "w-full py-6 md:py-10",
      },
    ],
  },
};

const BlogsInfo = () => {
  const { blogId } = useParams();
  const content = blogContent[blogId];

  if (!content) {
    return (
      <div className="text-black container mx-auto text-center text-2xl py-100">
        Blog content not found.
      </div>
    );
  }

  return (
    <div>
      <BlogsId
        headings={content.headings}
        data={content.data}
        paragraph={content.paragraph}
        images={content.images}
      />
      <BerichteShuffle />
      <Subscribe />
    </div>
  );
};

export default BlogsInfo;
