import React from "react";
const ScrollAnimation = () => {
  return (
    <div className="lg:py-30 py-20 max-lg:flex max-lg:items-center max-lg:gap-15 max-lg:flex-col lg:relative">
      {" "}
      <div className="grid lg:min-h-screen max-lg:max-h-screen max-lg:pb-[10vh] grid-cols-1 lg:grid-cols-2 items-center bg-white sticky top-0">
        {" "}
        <img
          className="max-h-screen lg:h-full max-lg:w-full max-lg:mx-auto"
          src="/images/auswahlen.png"
          alt=""
        />{" "}
        <div className="lg:w-[80%] w-fit mx-auto max-lg:mt-5">
          {" "}
          <h2 className="xl:text-[14px] text-[12px] font-semibold uppercase">
            Wie funktioniert es ?{" "}
          </h2>
          <h1 className="xl:text-[54px] text-[44px]">Auswählen</h1>{" "}
          <hr className="w-full h-[1px] text-[#D9D9D9] lg:mb-10 lg:mt-20 mb-5 mt-10" />{" "}
          <div className="flex flex-row justify-between gap-20 w-full items-center">
            <img src="/images/1.png" alt="" />{" "}
            <p className="xl:text-[14px] text-[#050505] text-[12px] leading-[1.9] w-[90%]">
              Wählen Sie das gewünschte Modell, die Abo-Dauer und die Anzahl
              Km-Leistung pro Jahr. Die Anzahl km können Sie flexibel jährlich
              in 5'000 Intervallen anpassen (bis 50'000 km wählbar). Melden Sie
              sich via Formular oder telefonisch und erhalten Sie die
              Fahrzeugdetails und erfahren Sie die weiteren Schritte.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="grid lg:min-h-screen max-lg:max-h-screen max-lg:pb-[10vh] grid-cols-1 lg:grid-cols-2 items-center bg-white sticky top-0 z-99">
        {" "}
        <img
          className="max-h-screen lg:h-full max-lg:w-full max-lg:mx-auto"
          src="/images/bestatigen.png"
          alt=""
        />{" "}
        <div className="lg:w-[80%] w-fit mx-auto max-lg:mt-5">
          {" "}
          <h2 className="xl:text-[14px] text-[12px] font-semibold uppercase">
            Wie funktioniert es ?{" "}
          </h2>
          <h1 className="xl:text-[54px] text-[44px]">Bestätigen</h1>{" "}
          <hr className="w-full h-[1px] text-[#D9D9D9] lg:mb-10 lg:mt-20 mb-5 mt-10" />{" "}
          <div className="flex flex-row justify-between gap-20 w-full items-center">
            <img src="/images/2.png" alt="" />{" "}
            <p className="xl:text-[14px] text-[#050505] text-[12px] leading-[1.9] w-[90%]">
              Im nächsten Schritt identifizieren Sie sich einfach online und
              senden uns das Antragsformular. Sobald die Bonitätsprüfung positiv
              abgeschlossen ist, kann das Auto definitiv bestellt werden. Sie
              leisten keine Startgebühr und keine Anzahlung. Die erste
              Monatsrate bezahlen Sie nach Übernahme Ihres Autos.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="grid lg:min-h-screen max-lg:max-h-screen max-lg:pb-[10vh] grid-cols-1 lg:grid-cols-2 items-center bg-white sticky top-0 z-999">
        {" "}
        <img
          className="max-h-screen lg:h-full max-lg:w-full max-lg:mx-auto"
          src="/images/losfahren.png"
          alt=""
        />{" "}
        <div className="lg:w-[80%] w-fit mx-auto max-lg:mt-5">
          {" "}
          <h2 className="xl:text-[14px] text-[12px] font-semibold uppercase">
            Wie funktioniert es ?{" "}
          </h2>
          <h1 className="xl:text-[54px] text-[44px]">Losfahren</h1>{" "}
          <hr className="w-full h-[1px] text-[#D9D9D9] lg:mb-10 lg:mt-20 mb-5 mt-10" />{" "}
          <div className="flex flex-row justify-between gap-20 w-full items-center">
            <img src="/images/3.png" alt="" />{" "}
            <p className="xl:text-[14px] text-[#050505] text-[12px] leading-[1.9] w-[90%]">
              Sie wählen Ihre Winter- und Sommerreifen und die Garage in Ihrer
              Region für den Service, Wechsel und Lagerung der Reifen. Wir
              liefern Ihnen unsere Fahrzeuge kostenlos nach Hause, ins Geschäft
              oder das Auto wird in Ausnahmefällen von einer offiziellen
              Markenvertretung in Ihrer Region übergeben.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default ScrollAnimation;
