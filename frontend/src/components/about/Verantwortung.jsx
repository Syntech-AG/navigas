import React from "react";

const Verantwortung = () => {
  return (
    <div className="container mx-auto mt-[150px] flex flex-col lg:flex-row justify-between items-center gap-[80px]">
      <div className="flex flex-col items-center justify-between gap-5 w-full lg:w-1/2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full">
          <div className="relative rounded-lg overflow-hidden bg-[#0847A4] w-full md:w-auto">
            <img
              src="/images/joniIdea.png"
              className="w-full h-full object-cover"
              alt="joniIdea"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <h1 className="text-[14px] text-white font-semibold uppercase">
                Treffen Sie eine Wahl
              </h1>
              <h1 className="text-[#FFFEFE] font-semibold text-[30px]">
                Wir begleiten Sie von <br /> der Auswahl bis zur <br />{" "}
                Fahrzeugübernahme.
              </h1>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <img
              src="/images/photo1.png"
              className="w-full h-full"
              alt="photo1"
            />
          </div>
        </div>
        <div className="w-full">
          <img
            src="/images/photo2.png"
            className="rounded-lg w-full"
            alt="photo2"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between">
        <h1 className="text-[#0A1424] font-semibold text-[48px]">
          Unsere Verantwortung für morgen
        </h1>
        <h1 className="text-[#0A1424] font-semibold text-[24px] mt-[60px]">
          Nachhaltig. Elektrisch. Engagiert
        </h1>
        <p className="text-[#494B4E] text-[16px]">
          Navigas denkt Mobilität weiter – auch fürs Klima. Gemeinsam mit
          unserem Partner ARVAL setzen wir auf Fahrzeuge mit alternativen
          Antrieben und reduzieren aktiv CO₂-Emissionen. Denn moderne Mobilität
          bedeutet für uns nicht nur Komfort, sondern auch Verantwortung.
        </p>
        <div className="mt-[60px] w-full">
          <div className="flex flex-col items-start justify-between gap-3">
            <img src="/images/Icon.svg" alt="Icon 1" />
            <h1>Auto online auswählen</h1>
            <p>
              Fahrzeugtyp, Laufzeit und Kilometer wählen. Alles bequem digital.
            </p>
          </div>
          <div className="flex flex-col items-start justify-between mt-[40px] gap-3">
            <img src="/images/Icon2.svg" alt="Icon 2" />
            <h1>Bonitätsprüfung & Vertrag</h1>
            <p>Schnell & sicher – mit wenigen Klicks. Kein Papierkram.</p>
          </div>
          <div className="flex flex-col items-start justify-between mt-[40px] gap-3">
            <img src="/images/Icon3.svg" alt="Icon 3" />
            <h1>Fahrzeug übernehmen & losfahren</h1>
            <p>Ihr Auto wird vorbereitet – Sie übernehmen es sorgenfrei.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verantwortung;
