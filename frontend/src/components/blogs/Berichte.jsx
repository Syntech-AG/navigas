import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const reports = [
  {
    img: "/images/blogPhoto1.png",
    title: "Mobilität und Immobilien",
    description:
      "Die Mobilität erfordert heute Anpassungen der Infrastruktur. Abstellplätze für gemeinschaftlich genutzte Verkehrsmittel, Ladestationen für Elektrofahrzeuge, Motorroller und Fahrräder, Ausrüstung für fahrerlose Maschinen sind nur einige der neuen Faktoren, die nicht mehr übersehen werden können.",
    date: "2 Juni 2021",
    comments: 0,
    link: "/blogs/blog1",
    category: "Mobility",
  },
  {
    img: "/images/blogPhoto2.png",
    title:
      "solicare ermöglicht eine Entlöhnung und professionelle Unterstützung für pflegende Angehörige",
    description:
      "Überall auf der Welt ist die informelle Pflege von Angehörigen zu einem unverzichtbaren Grundpfeiler im Gesundheitswesen geworden. Gemäss Umfrage des Bundesamtes für Gesundheit (BAG) betreuen und pflegen in der Schweiz mindestens 600'000 Personen nahestehende Menschen.",
    date: "5 September 2022",
    comments: 0,
    link: "/blogs/blog2",
    category: "News",
  },
  {
    img: "/images/blogPhoto3.png",
    title: "Vernetzte Fahrzeuge",
    description:
      "Vernetzte Fahrzeuge werden zur Selbstverständlichkeit. Es wird davon ausgegangen, dass 2025 fast alle Neufahrzeuge vernetzt sind, einschließlich neuer Sicherheits-Funktionen und Unterhaltungselemente.",
    date: "26 April 2021",
    comments: 0,
    link: "/blogs/blog3",
    category: "Technology",
  },
  {
    img: "/images/blogPhoto4.png",
    title: "Medienmitteilung navigas mobility",
    description:
      "Arval ist der weltweit grösste Flottenanbieter und Schweizer Marktführer im Bereich Full-Service-Leasing. navigas mobility verfügt über Erfahrung im online-Automarkt, sei es Verkauf, Miete oder Leasing. ",
    date: "28 April 2021",
    comments: 0,
    link: "/blogs/blog4",
    category: "Medien",
  },
  {
    img: "/images/blogPhoto5.png",
    title: "Vernetzte Fahrzeuge",
    description:
      "Vernetzte Fahrzeuge werden zur Selbstverständlichkeit. Es wird davon ausgegangen, dass 2025 fast alle Neufahrzeuge vernetzt sind, einschließlich neuer Sicherheits-Funktionen und Unterhaltungselemente.",
    date: "4 Oktober 2021",
    comments: 0,
    link: "/blogs/blog5",
    category: "Technology",
  },
  {
    img: "/images/blogPhoto6.png",
    title: "Hybrid-, Plug-in-Hybrid- oder Elektrofahrzeuge mit Range-Extender",
    description:
      "Schon früh tauchen auf dem Automobilmarkt alternative Technologien zum Verbrennungsmotor auf. Die ersten Versuche gehen zurück in das 19.",
    date: "21 Januar 2022",
    comments: 0,
    link: "/blogs/blog6",
    category: "Medien",
  },
];

const Berichte = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="container mx-auto py-[100px]">
      <motion.div
        className="text-center text-black mb-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-[50px]">Alle Berichte</h1>
        <p className="text-[22px]">
          Werden Sie Teil unserer Lesergemeinschaft und entdecken Sie
          inspirierende Geschichten
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {reports.map(
          (
            { img, title, description, date, comments, link, category },
            index
          ) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between gap-6 py-6 px-4 border border-[#D3D3D3] group"
              variants={cardVariants}
            >
              <div className="relative overflow-hidden rounded-lg">
                <motion.img
                  src={img}
                  alt={title}
                  className="w-full"
                  whileHover={{ scale: 1.05, opacity: 0.9 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute top-4 left-4 border-white rounded-xl bg-white px-7 py-1">
                  <h1 className="font-medium">{category}</h1>
                </div>
              </div>

              <h2 className="text-[24px] text-black font-semibold">{title}</h2>

              <p className="text-[18px] text-[#909491]">{description}</p>

              <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-[#909491]">
                  <span>{date}</span>
                  <span>{comments} Comments</span>
                </div>

                <Link to={link}>
                  <motion.div
                    className="bg-[#E8EBF1] p-3 rounded flex items-center justify-center"
                    whileHover={{ backgroundColor: "#D8DBE6" }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src="/images/rightArroww.svg"
                      alt="arrow icon"
                      className="h-3"
                    />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default Berichte;
