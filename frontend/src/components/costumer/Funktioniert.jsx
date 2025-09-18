import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Auswählen",
    subtitle: "Finden Sie Ihr passendes Auto-Abo.",
    content: (
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10 ">
        <div className="flex flex-col ">
          <p className="md:pl-6 mb-5 text-[#474747] lg:ml-20 ml-0">
            Wählen Sie online Ihr Wunschmodell sowie
            <br />
            Abo-Dauer und Kilometerleistung.
          </p>
          <ul className="list-disc md:pl-10 space-y-2 text-[#010101] uppercase marker:text-[#0946EE] text-[12px] lg:text-sm lg:ml-20 ml-0   ">
            <li>Wunschmodell, Abo-Dauer und Kilometerleistung wählen</li>
            <li>
              Kilometer jährlich flexibel in 5’000er-Schritten anpassbar (bis
              50’000 km)
            </li>
            <li>Anfrage bequem per Formular oder telefonisch stellen</li>
            <li>Fahrzeugdetails und nächste Schritte direkt erhalten</li>
          </ul>
        </div>
        <div className="w-full md:w-auto">
          <img
            src="/images/test1.png"
            alt="Schlüsselübergabe"
            className="w-full md:w-[520px] h-52 md:h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Bestätigen",
    subtitle: "Einfach online abschliessen ohne Startgebühr.",
    content: (
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
        <div className="flex flex-col">
          <p className="md:pl-6 mb-5 text-[#474747] lg:ml-20 ml-0">
            Reifen, Service und Übergabe werden für
            <br />
            Sie organisiert – Sie steigen ein und fahren los.
          </p>
          <ul className="list-disc md:pl-10 space-y-2 text-[#010101] uppercase marker:text-[#0946EE] lg:ml-20 ml-0">
            <li>Winter- und Sommerreifen für Ihr Fahrzeug auswählen</li>
            <li>
              Wunschgarage in Ihrer Region für Service & Reifenwechsel festlegen
            </li>
            <li>Kostenlose Lieferung nach Hause oder ins Geschäft</li>
            <li>Optional Übergabe bei offizieller Markenvertretung möglich</li>
          </ul>
        </div>
        <div className="w-full md:w-auto">
          <img
            src="/images/test1.png"
            alt="Schlüsselübergabe"
            className="w-full md:w-[520px] h-52 md:h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Losfahren",
    subtitle: "Übernahme ganz nach Ihren Wünschen.",
    content: (
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
        <div className="flex flex-col">
          <p className="md:pl-6 mb-5 text-[#474747] lg:ml-20 ml-0">
            Im nächsten Schritt identifizieren Sie sich online und
            <br /> senden uns das Antragsformular
          </p>
          <ul className="list-disc md:pl-10 space-y-2 text-[#010101] uppercase marker:text-[#0946EE] lg:ml-20 ml-0">
            <li>Online-Identifikation in wenigen Minuten</li>
            <li>Antragsformular digital übermitteln</li>
            <li>Bonitätsprüfung wird schnell durchgeführt</li>
            <li>Keine Startgebühr, keine Anzahlung</li>
            <li>Erste Monatsrate erst nach Fahrzeugübernahme</li>
          </ul>
        </div>
        <div className="w-full md:w-auto">
          <img
            src="/images/test1.png"
            alt="Schlüsselübergabe"
            className="w-full md:w-[520px] h-52 md:h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    ),
  },
];

const Funktioniert = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="container mx-auto flex flex-col">
      <div className="text-left px-4 py-[48px] md:py-[78px]">
        <h1 className="text-[#010101] text-[34px] md:text-[54px] font-semibold w-full leading-tight">
          Wie funktioniert es ?
        </h1>
      </div>

      <div className="px-4">
        <div className="divide-y border-t border-b border-[#E5E7EB] divide-[#E5E7EB]">
          {steps.map((s) => {
            const isOpen = openId === s.id;
            return (
              <section key={s.id} className="py-6">
                <button
                  onClick={() => toggle(s.id)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${s.id}`}
                  className="w-full flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-left focus:outline-none group"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
                    <span
                      className={`inline-flex items-center justify-center w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-full bg-[#E5EAF4] text-[#0453C8] text-[28px] md:text-[32px] font-semibold shrink-0 transition-opacity duration-300 ${
                        isOpen ? "opacity-100" : "opacity-50"
                      }`}
                      aria-hidden="true"
                    >
                      {s.id}
                    </span>

                    <h3 className="text-[#0B0B0C] leading-tight text-[28px] md:text-[34px] lg:text-[48px] font-medium">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-[#010101] text-[18px] md:text-[18px] font-semibold md:max-w-[520px] ">
                    {s.subtitle}
                  </p>
                </button>
                <div
                  id={`panel-${s.id}`}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr] mt-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6">{s.content}</div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Funktioniert;
