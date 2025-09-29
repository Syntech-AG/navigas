import React from "react";
import { Link } from "react-router-dom";

const reports = [
  {
    img: "/images/blogPhoto1.png",
    title: "Mobilität und Immobilien",
    description:
      "Die Mobilität erfordert heute Anpassungen der Infrastruktur. Abstellplätze für gemeinschaftlich genutzte Verkehrsmittel, Ladestationen für Elektrofahrzeuge, Motorroller und Fahrräder, Ausrüstung für fahrerlose Maschinen sind nur einige der neuen Faktoren, die nicht mehr übersehen werden können.",
    date: "2 Juni 2021",
    comments: 0,
    link: "/",
  },
  {
    img: "/images/blogPhoto2.png",
    title:
      "solicare ermöglicht eine Entlöhnung und professionelle Unterstützung für pflegende Angehörige",
    description:
      "Überall auf der Welt ist die informelle Pflege von Angehörigen zu einem unverzichtbaren Grundpfeiler im Gesundheitswesen geworden. Gemäss Umfrage des Bundesamtes für Gesundheit (BAG) betreuen und pflegen in der Schweiz mindestens 600’000 Personen nahestehende Menschen.",
    date: "5 September 2022",
    comments: 0,
    link: "/",
  },
  {
    img: "/images/blogPhoto3.png",
    title: "Vernetzte Fahrzeuge",
    description:
      "Vernetzte Fahrzeuge werden zur Selbstverständlichkeit. Es wird davon ausgegangen, dass 2025 fast alle Neufahrzeuge vernetzt sind, einschließlich neuer Sicherheits-Funktionen und Unterhaltungselemente.",
    date: "26 April 2021",
    comments: 0,
    link: "/",
  },
  {
    img: "/images/blogPhoto4.png",
    title: "Medienmitteilung navigas mobility",
    description:
      "Arval ist der weltweit grösste Flottenanbieter und Schweizer Marktführer im Bereich Full-Service-Leasing. navigas mobility verfügt über Erfahrung im online-Automarkt, sei es Verkauf, Miete oder Leasing. ",
    date: "28 April 2021",
    comments: 0,
    link: "/",
  },
  {
    img: "/images/blogPhoto5.png",
    title: "Vernetzte Fahrzeuge",
    description:
      "Vernetzte Fahrzeuge werden zur Selbstverständlichkeit. Es wird davon ausgegangen, dass 2025 fast alle Neufahrzeuge vernetzt sind, einschließlich neuer Sicherheits-Funktionen und Unterhaltungselemente.",
    date: "4 Oktober 2021",
    comments: 0,
    link: "/",
  },
  {
    img: "/images/blogPhoto6.png",
    title: "Hybrid-, Plug-in-Hybrid- oder Elektrofahrzeuge mit Range-Extender",
    description:
      "Schon früh tauchen auf dem Automobilmarkt alternative Technologien zum Verbrennungsmotor auf. Die ersten Versuche gehen zurück in das 19.",
    date: "21 Januar 2022",
    comments: 0,
    link: "/berichte/smart-cities-entwicklung",
  },
];

const Berichte = () => {
  return (
    <div className="container mx-auto py-[100px] ">
      <div className="text-center text-black mb-10 max-w-3xl mx-auto">
        <h1 className="text-[50px]">Alle Berichte</h1>
        <p className="text-[22px]">
          Werden Sie Teil unserer Lesergemeinschaft und entdecken Sie
          inspirierende Geschichten
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {reports.map(
          ({ img, title, description, date, comments, link }, index) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-6 py-6 px-4 border border-[#D3D3D3]"
            >
              <img src={img} alt={title} className="w-full" />
              <h2 className="text-[24px] text-black">{title}</h2>
              <p className="text-[18px] text-[#909491]">{description}</p>
              <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-[#909491]">
                  <span>{date}</span>
                  <span>{comments} Comments</span>
                </div>
                <Link
                  to={link}
                  className="bg-[#E8EBF1] p-3 rounded flex items-center justify-center"
                >
                  <img
                    src="/images/rightArroww.svg"
                    alt="arrow icon"
                    className="h-3"
                  />
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Berichte;
