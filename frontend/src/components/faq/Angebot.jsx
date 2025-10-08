import React, { useState } from "react";

const faqGroups = [
  {
    id: "faqs1",
    title: "Angebot",
    items: [
      {
        id: 1,
        question: "Was ist im Auto all-inclusive Paketpreis enthalten?",
        paragraph:
          "Hier finden Sie die wichtigsten Antworten rund um unser Auto-Abo. Transparent, klar und auf einen Blick – damit Sie genau wissen, was im Paket enthalten ist und welche Vorteile Sie geniessen.",
        answer: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Versicherung inkl. Haftpflicht und CareCare</li>
            <li>Assistance</li>
            <li>Ersatzfahrzeug</li>
            <li>Zulassung</li>
            <li>Fahrzeugsteuer</li>
            <li>Wartung und Reparaturen</li>
          </ul>
        ),
      },
      {
        id: 2,
        question:
          "Wird eine Anzahlung, Kaution oder eine Lieferpauschale verlangt?",
        answer:
          "Es wird keine Startgebühr verlangt. Details zu Kaution oder Lieferpauschale variieren je nach Angebot.",
      },
      {
        id: 3,
        question: "Wie ist mein Auto versichert?",
        answer:
          "Vollkasko inkl. Haftpflicht; genaue Konditionen hängen vom jeweiligen Paket ab.",
      },
      {
        id: 4,
        question:
          "Dürfen andere Personen wie Familienmitglieder oder Freunde auch fahren und sind Sie auch versichert?",
        answer:
          "Zusatzfahrer sind möglich; bitte Bedingungen und ggf. Registrierung der Fahrenden beachten.",
      },
    ],
  },
  {
    id: "faqs2",
    title: "Autos",
    items: [
      {
        id: 1,
        question:
          "Kann ich die Motorisierung frei wählen oder zusätzliche Optionen hinzufügen?",
      },
      { id: 2, question: "Kann ich die Farbe meines Autos frei wählen?" },
      { id: 3, question: "Handelt es sich um Import-Fahrzeuge?" },
      { id: 4, question: "Ab wann ist mein Auto verfügbar?" },
      {
        id: 5,
        question:
          "Handelt es sich um ein neues Auto? Haben Sie auch Occasionen?",
      },
    ],
  },
  {
    id: "faqs3",
    title: "Lieferung",
    items: [
      { id: 1, question: "Wie wird mein Auto eingelöst?" },
      {
        id: 2,
        question: "Kann ich mein persönliches Kontrollschild verwenden?",
      },
      { id: 3, question: "Wie erhalte ich mein Auto?" },
    ],
  },
  {
    id: "faqs4",
    title: "Services",
    items: [
      { id: 1, question: "Was mache ich bei einem Schaden- oder Pannenfall?" },
      { id: 2, question: "Wo kann ich mein Auto in den Service bringen?" },
      { id: 3, question: "Wie erhalte ich allfällige Bussen?" },
    ],
  },
  {
    id: "faqs5",
    title: "Weitere Informationen",
    items: [
      { id: 1, question: "Kann ich mein Auto vor Vertragsende zurückgeben?" },
      { id: 2, question: "Kann ich das Auto bei Vertragsende abkaufen?" },
      { id: 3, question: "Was passiert mit Schäden am Vertragsende?" },
    ],
  },
];

const bgClassById = {
  1: "bg-white",
  2: "bg-white",
  3: "bg-white",
  4: "bg-white",
  5: "bg-white",
};

const PlusMinus = ({ open }) => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center w-5 h-5 rounded-full text-[#6B7280] shrink-0"
  >
    <svg
      viewBox="0 0 24 24"
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {!open && <path d="M12 5v14" />}
      <path d="M5 12h14" />
    </svg>
  </span>
);

function FaqSection({
  groupId,
  title,
  items,
  defaultOpen = null,
  image,
  className = "",
  paragraph,
}) {
  const [openId, setOpenId] = useState(defaultOpen);
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  const sectionParagraph = paragraph ?? items?.[0]?.paragraph ?? "";

  return (
    <div className={`w-full ${className}`}>
      <section className="container mx-auto px-4 py-10 md:py-22">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-20 mb-10 md:mb-20">
          <div className="w-full md:w-[50%]">
            <div className="flex items-center gap-3">
              <img src="/images/line.svg" alt="" />
              <h2 className="text-[#0847A4] text-[12px] md:text-[15px] uppercase tracking-[4px] md:tracking-[5px]">
                Häufig gestellte Fragen
              </h2>
            </div>
            <h1 className="text-[#010101] text-[22px] md:text-[28px] lg:text-[36px] mt-2 md:mt-3">
              {title}
            </h1>
          </div>
          <p className="text-[#494B4E] text-[14px] md:text-[16px] leading-relaxed w-full md:w-[50%] mt-4 md:mt-0">
            {sectionParagraph}
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-20">
          <div className="w-full md:w-[50%]">
            <img
              src={image}
              alt=""
              className="w-full h-48 md:h-auto object-contain"
            />
          </div>

          <div className="mt-6 md:mt-8 space-y-3 md:space-y-4 w-full md:w-[50%]">
            {items.map((f) => {
              const open = openId === f.id;
              const bgClass = bgClassById[f.id] || "bg-white";
              const key = `${groupId}-${f.id}`;
              return (
                <div
                  key={key}
                  className={`rounded-2xl border border-[#696D79] ${bgClass}`}
                >
                  <button
                    onClick={() => toggle(f.id)}
                    aria-expanded={open}
                    aria-controls={`faq-${key}`}
                    className="w-full flex items-start justify-between gap-3 md:gap-4 px-4 md:px-5 py-4 md:py-5 text-left hover:bg-[#F9FAFB] rounded-2xl"
                  >
                    <h3
                      className={`text-[16px] md:text-[20px] font-medium ${
                        open ? "text-[#0847A4]" : "text-[#010101]"
                      }`}
                    >
                      {f.question}
                    </h3>
                    <PlusMinus open={open} />
                  </button>

                  <div
                    id={`faq-${key}`}
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 md:px-5 pb-4 md:pb-5 text-[14px] md:text-[15px] leading-relaxed text-[#4B5563]">
                        {f.paragraph && <p className="mb-2">{f.paragraph}</p>}
                        {f.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

const Angebot = () => {
  const faqs1 = faqGroups.find((g) => g.id === "faqs1");
  const faqs2 = faqGroups.find((g) => g.id === "faqs2");
  const faqs3 = faqGroups.find((g) => g.id === "faqs3");
  const faqs4 = faqGroups.find((g) => g.id === "faqs4");
  const faqs5 = faqGroups.find((g) => g.id === "faqs5");

  return (
    <div className="w-full">
      <FaqSection
        className="bg-white"
        groupId={faqs1.id}
        title="Angebot"
        items={faqs1.items}
        defaultOpen={1}
        image="/images/test2.png"
        paragraph="Hier finden Sie die wichtigsten Antworten rund um unser Auto-Abo. Transparent, klar und auf einen Blick – damit Sie genau wissen, was im Paket enthalten ist und welche Vorteile Sie geniessen."
      />

      <FaqSection
        className="bg-[#F3F5FA]"
        groupId={faqs2.id}
        title="Autos"
        items={faqs2.items}
        defaultOpen={2}
        image="/images/test3.png"
        paragraph="Alles rund um unsere Fahrzeuge: von Motorisierung und Ausstattung bis Verfügbarkeit und Zustand. Hier erfahren Sie, welche Möglichkeiten Sie haben und wie flexibel Ihr Auto-Abo wirklich ist."
      />

      <FaqSection
        className="bg-white"
        groupId={faqs3.id}
        title="Lieferung"
        items={faqs3.items}
        defaultOpen={3}
        image="/images/test4.png"
        paragraph="Von der Einlösung bis zur Übergabe: Hier erfahren Sie alles über den Ablauf der Fahrzeuglieferung und wie Sie Ihr Auto übernehmen können – inklusive der Nutzung Ihres persönlichen Kontrollschilds."
      />

      <FaqSection
        className="bg-[#F3F5FA]"
        groupId={faqs4.id}
        title="Services"
        items={faqs4.items}
        defaultOpen={4}
        image="/images/test5.png"
        paragraph="Unser Service macht Ihr Auto-Abo sorgenfrei. Hier finden Sie Antworten zu Pannenhilfe, Servicearbeiten und der Abwicklung von Bussen."
      />

      <FaqSection
        className="bg-white"
        groupId={faqs5.id}
        title="Weitere Informationen"
        items={faqs5.items}
        defaultOpen={5}
        image="/images/test6.png"
        paragraph="Hier beantworten wir die häufigsten Fragen zu Vertragsende und Rückgabe – von der vorzeitigen Beendigung bis zu Kaufoptionen und der Regelung von Schäden."
      />
    </div>
  );
};

export default Angebot;
