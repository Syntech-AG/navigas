import React from "react";

const ScrollAnimation = () => {
  return (
    <div className="lg:py-30 py-20 max-lg:flex max-lg:items-center max-lg:gap-15 max-lg:flex-col lg:relative">
      <div className="grid lg:min-h-screen max-lg:max-h-screen max-lg:pb-[10vh] grid-cols-1 lg:grid-cols-2 items-center bg-white sticky top-0">
        <img
          className="max-h-screen lg:h-full max-lg:w-full max-lg:mx-auto"
          src="/images/auswahlen.png"
          alt="Auswählen"
        />
        <div className="lg:w-[80%] w-fit mx-auto p-4 md:p-0 max-lg:mt-5">
          <h2 className="xl:text-[14px] text-[12px] font-semibold tracking-widest uppercase">
            Wie funktioniert es?
          </h2>
          <h1 className="xl:text-[54px] text-[44px] font-semibold">
            Auswählen
          </h1>
          <hr className="w-full h-[1px] text-[#D9D9D9] lg:mb-10 lg:mt-20 mb-5 mt-10" />
          <div className="flex flex-row justify-between gap-20 w-full items-center">
            <img src="/images/1.png" alt="Schritt 1" />
            <p className="xl:text-[14px] text-[#050505] text-[12px] leading-[1.9] w-[90%]">
              Wählen Sie Ihr Wunschmodell und die gewünschte Abo-Dauer.
              Kilometerleistung können Sie flexibel anpassen – ganz nach Ihrem
              Bedarf.
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:min-h-screen max-lg:max-h-screen max-lg:pb-[10vh] grid-cols-1 lg:grid-cols-2 items-center bg-white sticky top-0 z-[99]">
        <img
          className="max-h-screen lg:h-full max-lg:w-full max-lg:mx-auto"
          src="/images/bestatigen.png"
          alt="Online bestellen"
        />
        <div className="lg:w-[80%] w-fit mx-auto  p-4 md:p-0 max-lg:mt-5">
          <h2 className="xl:text-[14px] text-[12px] font-semibold tracking-widest uppercase">
            Wie funktioniert es?
          </h2>
          <h1 className="xl:text-[54px] text-[44px] font-semibold">
            Online bestellen
          </h1>
          <hr className="w-full h-[1px] text-[#D9D9D9] lg:mb-10 lg:mt-20 mb-5 mt-10" />
          <div className="flex flex-row justify-between gap-20 w-full items-center">
            <img src="/images/2.png" alt="Schritt 2" />
            <p className="xl:text-[14px] text-[#050505] text-[12px] leading-[1.9] w-[90%]">
              Identifizieren Sie sich bequem online und bestätigen Sie Ihre
              Bestellung. Keine Startgebühr, keine Anzahlung. Sie zahlen erst
              nach Übernahme Ihres Autos.
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:min-h-screen max-lg:max-h-screen max-lg:pb-[10vh] grid-cols-1 lg:grid-cols-2 items-center bg-white sticky top-0 z-[999]">
        <img
          className="max-h-screen lg:h-full max-lg:w-full  max-lg:mx-auto"
          src="/images/losfahren.png"
          alt="Losfahren"
        />
        <div className="lg:w-[80%] w-fit mx-auto  p-4 md:p-0 max-lg:mt-5">
          <h2 className="xl:text-[14px] text-[12px] font-semibold tracking-widest uppercase">
            Wie funktioniert es?
          </h2>
          <h1 className="xl:text-[54px] text-[44px] font-semibold">
            Losfahren
          </h1>
          <hr className="w-full h-[1px] text-[#D9D9D9] lg:mb-10 lg:mt-20 mb-5 mt-10" />
          <div className="flex flex-row justify-between gap-20 w-full items-center">
            <img src="/images/3.png" alt="Schritt 3" />
            <p className="xl:text-[14px] text-[#050505] text-[12px] leading-[1.9] w-[90%]">
              Ihr Auto wird kostenlos an Ihre Wunschadresse geliefert. Service
              erfolgt bei der offiziellen Markenvertretung Ihrer Wahl. Dazu
              profitieren Sie von europaweiter Assistance und einem
              All-inclusive Paket mit Premiumreifen, Montage, Lagerung sowie
              vielen weiteren Services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
