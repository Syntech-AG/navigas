import React, { useState, useEffect } from "react";

const Daten = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gradient-to-b from-[#0A1424] to-[#162339] min-h-screen py-36">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Datenschutz
          </h1>
          <div className="w-24 h-1 bg-[#2860B7] mx-auto"></div>
        </div>

        <div className="space-y-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 hover:border-[#2860B7]/50 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#2860B7] rounded-full"></span>
              Haftung
            </h2>
            <div className="space-y-4 text-[#E8EBF1] leading-relaxed">
              <p className="text-base md:text-lg">
                Obwohl wir mit aller Sorgfalt auf die Richtigkeit der
                veröffentlichten Informationen achten, kann hinsichtlich der
                inhaltlichen Richtigkeit, Genauigkeit, Aktualität,
                Zuverlässigkeit und Vollständigkeit dieser Informationen keine
                Gewährleistung übernommen werden.
              </p>
              <p className="text-base md:text-lg">
                Haftungsansprüche gegen Navigas Services GmbH wegen Schäden
                materieller oder immaterieller Art, welche aus dem Zugriff oder
                der Nutzung bzw. Nichtnutzung der veröffentlichten
                Informationen, durch Missbrauch der Verbindung oder durch
                technische Störungen entstanden sind, werden ausgeschlossen.
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 hover:border-[#2860B7]/50 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#2860B7] rounded-full"></span>
              Verweise und Links
            </h2>
            <div className="space-y-4 text-[#E8EBF1] leading-relaxed">
              <p className="text-base md:text-lg">
                Verweise und Links auf Webseiten Dritter liegen ausserhalb
                unseres Verantwortungsbereichs. Der Zugriff und die Nutzung
                solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder
                der Nutzerin. Informationen und Dienstleistungen von verknüpften
                Webseiten liegen vollumfänglich in der Verantwortung des
                jeweiligen Dritten.
              </p>
              <p className="text-base md:text-lg">
                Es wird jegliche Verantwortung für solche Webseiten abgelehnt.
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 hover:border-[#2860B7]/50 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#2860B7] rounded-full"></span>
              Copyright
            </h2>
            <div className="space-y-4 text-[#E8EBF1] leading-relaxed">
              <p className="text-base md:text-lg font-medium text-[#2860B7]">
                Copyright, Navigas Services GmbH
              </p>
              <p className="text-base md:text-lg">
                Die auf unseren Webseiten enthaltenen Informationen werden der
                Öffentlichkeit zugänglich gemacht. Durch das Herunterladen oder
                Kopieren von Inhalten, Bildern, Fotos oder anderen Dateien
                werden keinerlei Rechte bezüglich der Inhalte übertragen.
              </p>
              <p className="text-base md:text-lg">
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos
                oder anderen Dateien auf unseren Webseiten gehören
                ausschliesslich diesen oder den speziell genannten
                Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die
                schriftliche Zustimmung der Urheberrechtsträger im Voraus
                einzuholen.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#2860B7]/20 to-[#2860B7]/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-[#2860B7]/30">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#2860B7] rounded-full"></span>
              Datenschutzerklärung
            </h2>

            <div className="mb-8 pl-6 border-l-2 border-[#2860B7]/50">
              <h3 className="text-xl md:text-2xl font-medium text-white mb-4">
                1. Geltungsbereich
              </h3>
              <p className="text-[#E8EBF1] text-base md:text-lg leading-relaxed">
                Diese Datenschutzerklärung gilt für den gesamten
                Internetauftritt von Navigas Services GmbH.
              </p>
            </div>

            <div className="mb-8 pl-6 border-l-2 border-[#2860B7]/50">
              <h3 className="text-xl md:text-2xl font-medium text-white mb-4">
                2. Verweise
              </h3>
              <p className="text-[#E8EBF1] text-base md:text-lg leading-relaxed">
                Navigas Services GmbH hat keinen Einfluss auf externe Seiten,
                auf die sie verweist. Somit können wir in Bezug auf solche
                Seiten nicht garantieren, dass die darin enthaltenen
                Informationen richtig sind oder dass sie frei von Malware (wie
                z.B. Viren) sind. Informationen und Dienstleistungen von
                verknüpften Webseiten oder Webdiensten liegen vollumfänglich in
                der Verantwortung des jeweiligen Dritten. Es wird jegliche
                Verantwortung für solche Webseiten oder Webdienste abgelehnt.
              </p>
            </div>

            <div className="pl-6 border-l-2 border-[#2860B7]/50">
              <h3 className="text-xl md:text-2xl font-medium text-white mb-6">
                3. Was passiert mit Ihren Daten?
              </h3>
              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-lg font-medium text-white mb-3">
                    a) Speicherung beim Ausfüllen eines Formulars
                  </h4>
                  <p className="text-[#E8EBF1] leading-relaxed">
                    Wenn Sie ein Formular auf unserer Webseite ausfüllen (z.B.
                    ein Kontaktformular), bearbeiten wir die Daten, die Sie uns
                    bereitstellen, soweit dies für die Erfüllung des
                    Bearbeitungszwecks bzw. Erledigung des Auftrags erforderlich
                    ist.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-lg font-medium text-white mb-3">
                    b) Speicherung zwecks Newsletter-Versand
                  </h4>
                  <p className="text-[#E8EBF1] leading-relaxed">
                    Wenn Sie einen Newsletter bestellen, werden folgende Daten
                    erfasst: E-Mail-Adresse (zwingend); allenfalls Anrede,
                    Vorname, Nachname (alles optional). Ihre personenbezogenen
                    Daten im Zusammenhang mit dem Versand von abonnierten
                    Newslettern werden umgehend gelöscht, sobald Sie für
                    diese(n) nicht mehr angemeldet sind.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-lg font-medium text-white mb-3">
                    c) Cookies
                  </h4>
                  <div className="space-y-3 text-[#E8EBF1] leading-relaxed">
                    <p>
                      Auf unseren Seiten werden Cookies verwendet, um den Besuch
                      der Website attraktiver zu machen und die Nutzung
                      bestimmter Funktionen zu ermöglichen. Hierbei handelt es
                      sich um kleine Textdateien, die auf Ihrem Computer
                      abgelegt werden. Die meisten der verwendeten Cookies
                      werden nach Ende der Browser-Sitzung wieder von Ihrer
                      Festplatte gelöscht (sog. Sitzungs- oder Session-Cookies).
                      Andere Cookies verbleiben auf Ihrem Computer und
                      ermöglichen, Sie bei Ihrem nächsten Besuch wieder zu
                      erkennen (sog. dauerhafte Cookies).
                    </p>
                    <p>
                      Sie können die Speicherung von Cookies in Ihrem Browser
                      verhindern, indem Sie die Speicherung und das Lesen von
                      Cookies einschränken oder ausschalten. Bitte beachten Sie,
                      dass Sie gewisse Funktionen der Website ohne Cookies nicht
                      nutzen können.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-lg font-medium text-white mb-3">
                    d) Soziale Netzwerke und andere Dienste Dritter
                  </h4>
                  <div className="space-y-3 text-[#E8EBF1] leading-relaxed">
                    <p>
                      Wir bewirtschaften diverse Konti bzw. Profile auf sozialen
                      Netzwerken. Diese Seiten bzw. Dienste werden von Dritten
                      angeboten und betrieben. Jede dieser Seiten hat eigene
                      Datenschutzbestimmungen.
                    </p>
                    <p>
                      Darüber hinaus sind in einzelnen Webseiten von Navigas
                      Services GmbH Services Dritter wie z.B. Twitter, Google
                      Maps, Google Ads, Google Custom Search, Facebook,
                      Instagram etc. direkt eingebunden. Dabei gelten
                      ausdrücklich die Datenschutzbestimmungen des jeweiligen
                      Anbieters. Nutzer und Nutzerinnen müssen sich bewusst
                      sein, dass über diese Services Daten gesammelt und auch an
                      Dritte weitergegeben werden können. Wenn Nutzerinnen und
                      Nutzer gleichzeitig einen Account eines Dienstes
                      verwenden, kann der Betreiber diese übermittelten
                      Informationen direkt dem jeweiligen persönlichen Account
                      zuordnen.
                    </p>
                    <p>
                      Navigas Services GmbH hat keinen Einfluss auf die
                      Datenerhebung und deren weitere Verwendung durch diese
                      Betreiber. In welchem Umfang, an welchem Ort und für
                      welche Dauer die Daten gespeichert werden, inwieweit sie
                      allfällig bestehenden Löschpflichten nachkommen, welche
                      Auswertungen und Verknüpfungen sie mit den Daten vornehmen
                      und an wen sie die Daten weitergeben, ist für Navigas
                      Services GmbH nicht erkennbar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-4 bg-[#2860B7]/10 rounded-full border border-[#2860B7]/30">
            <p className="text-[#E8EBF1] text-sm">
              Letzte Aktualisierung: {new Date().toLocaleDateString("de-DE")}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-[#2860B7] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:bg-[#1e4a8f] hover:scale-110 z-50 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default Daten;
