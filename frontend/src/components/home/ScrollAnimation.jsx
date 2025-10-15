import React from "react";

const ScrollAnimation = () => {
  return (
    <div className="lg:pb-30 pb-10 max-lg:space-y-16 lg:relative">
      {/* First Section */}
      <div className="grid lg:min-h-screen grid-cols-1 lg:grid-cols-2 items-center bg-white lg:sticky lg:top-0">
        <img
          className="w-full h-auto lg:max-h-screen lg:h-full object-cover"
          src="/images/auswahlen.png"
          srcSet="/images/auswahlen.png 1x, /images/auswahlen@2x.png 2x, /images/auswahlen@3x.png 3x"
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="Auswählen"
          loading="lazy"
          decoding="async"
        />
        <div className="lg:w-[80%] w-full mx-auto p-6 lg:p-4">
          <h2 className="xl:text-[14px] text-[12px] font-semibold tracking-widest uppercase">
            Wie funktioniert es?
          </h2>
          <h1 className="xl:text-[54px] lg:text-[44px] text-[36px] font-semibold mt-2">
            Auswählen
          </h1>
          <hr className="w-full h-[1px] text-[#D9D9D9] lg:mb-10 lg:mt-20 mb-6 mt-8" />
          <div className="flex flex-row justify-between lg:gap-20 gap-4 w-full items-start">
            <img src="/images/1.png" alt="Schritt 1" />
            <p className="xl:text-[14px] text-[#050505] text-[12px] leading-[1.9] flex-1">
              Wählen Sie Ihr Wunschmodell und die gewünschte Abo-Dauer.
              Kilometerleistung können Sie flexibel anpassen – ganz nach Ihrem
              Bedarf.
            </p>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="grid lg:min-h-screen grid-cols-1 lg:grid-cols-2 items-center bg-white lg:sticky lg:top-0 lg:z-[99]">
        <img
          className="w-full h-auto lg:max-h-screen lg:h-full object-cover"
          src="/images/bestatigen.png"
          srcSet="/images/bestatigen.png 1x, /images/bestatigen@2x.png 2x, /images/bestatigen@3x.png 3x"
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="bestatigen"
          loading="lazy"
          decoding="async"
        />
        <div className="lg:w-[80%] w-full mx-auto p-6 lg:p-4">
          <h2 className="xl:text-[14px] text-[12px] font-semibold tracking-widest uppercase">
            Wie funktioniert es?
          </h2>
          <h1 className="xl:text-[54px] lg:text-[44px] text-[36px] font-semibold mt-2">
            Online bestellen
          </h1>
          <hr className="w-full h-[1px] text-[#D9D9D9] lg:mb-10 lg:mt-20 mb-6 mt-8" />
          <div className="flex flex-row justify-between lg:gap-20 gap-4 w-full items-start">
            <img src="/images/2.png" alt="Schritt 2" />
            <p className="xl:text-[14px] text-[#050505] text-[12px] leading-[1.9] flex-1">
              Identifizieren Sie sich bequem online und bestätigen Sie Ihre
              Bestellung. Keine Startgebühr, keine Anzahlung. Sie zahlen erst
              nach Übernahme Ihres Autos.
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:min-h-screen grid-cols-1 lg:grid-cols-2 items-center bg-white lg:sticky lg:top-0 lg:z-[999]">
        <img
          className="w-full h-auto lg:max-h-screen lg:h-full object-cover"
          src="/images/losfahren.png"
          srcSet="/images/losfahren.png 1x, /images/losfahren@2x.png 2x, /images/losfahren@3x.png 3x"
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="Losfahren"
          loading="lazy"
          decoding="async"
        />
        <div className="lg:w-[80%] w-full mx-auto p-6 lg:p-4">
          <h2 className="xl:text-[14px] text-[12px] font-semibold tracking-widest uppercase">
            Wie funktioniert es?
          </h2>
          <h1 className="xl:text-[54px] lg:text-[44px] text-[36px] font-semibold mt-2">
            Losfahren
          </h1>
          <hr className="w-full h-[1px] text-[#D9D9D9] lg:mb-10 lg:mt-20 mb-6 mt-8" />
          <div className="flex flex-row justify-between lg:gap-20 gap-4 w-full items-start">
            <img src="/images/3.png" alt="Schritt 3" className="" />
            <p className="xl:text-[14px] text-[#050505] text-[12px] leading-[1.9] flex-1">
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
