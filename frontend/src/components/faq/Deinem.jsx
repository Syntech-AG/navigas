import React, { useRef, useState, useMemo } from "react";

const Deinem = () => {
  const videoRef = useRef(null);
  const tabsRef = useRef(null);
  const resultsRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("grundlagen");
  const [openQuestion, setOpenQuestion] = useState("was-ist-auto-abo");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleToggle = () => {
    if (isPlaying) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const faqData = {
    grundlagen: {
      title: "Grundlagen",
      questions: [
        {
          id: "was-ist-auto-abo",
          question: "Was ist ein Auto Abo?",
          answer:
            "Ein Auto Abo ist die moderne und flexible Alternative zum klassischen Autokauf oder Leasing. Sie zahlen eine monatliche Fixrate und fahren ein neues Auto, ohne sich um Versicherung, Wartung, Reifenwechsel, Steuern oder Pannenhilfe kümmern zu müssen. Alles ist inklusive und gilt bei Navigas europaweit. So bleiben Sie jederzeit mobil, planbar und rundum sorglos unterwegs.",
        },
        {
          id: "wie-funktioniert",
          question: "Wie funktiert das Auto Abo?",
          answer:
            "Ein Navigas Auto Abo funktioniert ganz einfach: Sie wählen Ihr Wunschauto online aus, bestimmen die gewünschte Laufzeit und Kilometerleistung, und schon können Sie bald losfahren. Keine Anzahlung, keine versteckten Kosten und volle Transparenz bei allen Leistungen.",
        },
        {
          id: "fuer-wen",
          question: "Für wen eignet sich das Auto Abo?",
          answer:
            "Das Auto Abo eignet sich für Privatpersonen ab 20 Jahren mit Wohnsitz in der Schweiz sowie für Firmenkunden, die flexible Mobilitätslösungen ohne langfristige Bindung suchen. Ideal auch für Personen, die verschiedene Modelle testen möchten oder kurzfristig ein Fahrzeug benötigen.",
        },
        {
          id: "unterschied-leasing",
          question: "Was unterscheidet das Auto Abo vom Leasing?",
          answer:
            "Beim Auto Abo zahlen Sie eine monatliche All-Inclusive-Rate ohne Restwertrisiko oder separate Zusatzkosten. Im Gegensatz zum Leasing müssen Sie sich nicht um Versicherung, Service oder Reifen kümmern. Sie bleiben flexibel und Ihr Auto passt sich Ihrem Bedarf an.",
        },
      ],
    },
    "auto-abo-fahrzeugwahl": {
      title: "Auto Abo abschliessen & Fahrzeugwahl",
      questions: [
        {
          id: "welche-fahrzeuge",
          question: "Wie kann ich ein Auto Abo abschliessen?",
          answer:
            "Das Abschliessen eines Auto Abos ist einfach: Wählen Sie Ihr Wunschfahrzeug, bestimmen Sie Laufzeit und Kilometerleistung und füllen Sie Ihre Angaben online aus. Alles läuft transparent, ohne versteckte Kosten und ohne Anzahlung – so sind Sie in wenigen Schritten startklar.",
        },
        {
          id: "wie-abschliessen",
          question: "Welche Fahrzeuge stehen zur Auswahl?",
          answer:
            "Wir bieten brandneue Autos vieler Marken, von wendigen Stadtflitzern bis zu geräumigen Familien-SUVs. Alle Modelle sind nach Schweizer Normen hochwertig ausgestattet und erfüllen höchste Ansprüche an Sicherheit und Komfort. Dank grosser Bestellmengen profitieren unsere Kundinnen und Kunden von attraktiven Preisen und modernen Fahrzeugen, ob Elektro-, Hybrid- oder Modelle mit klassischem Antrieb.",
        },
        {
          id: "lieferzeit",
          question: "Wie schnell ist ein Fahrzeug verfügbar?",
          answer:
            "Viele Fahrzeuge sind sofort ab Lager verfügbar. Für Disposition, Einlösung und Logistik benötigen wir in der Regel 2 bis 3 Wochen, bis Ihr Fahrzeug an Ihre Wunschadresse in der Schweiz geliefert wird.",
        },
        {
          id: "anpassen",
          question: "Kann ich die Laufzeit und Kilometer anpassen?",
          answer:
            "Ja, Sie können Laufzeit und Kilometerleistung flexibel jährlich anpassen, ohne zusätzliche Gebühren. So bleibt Ihr Auto Abo immer perfekt auf Ihre aktuellen Fahrbedürfnisse abgestimmt.",
        },
        {
          id: "selbst",
          question: "Kann ich das Fahrzeug liefern lassen oder selbst abholen?",
          answer:
            "Das Fahrzeug wird ausschliesslich an Ihre Wunschadresse in der Schweiz geliefert. Die Lieferung wird im Voraus mit unserer Logistikabteilung individuell abgestimmt, damit Termin und Ort perfekt zu Ihnen passen.",
        },
        {
          id: "lauft",
          question: "Wie läuft die Fahrzeugübernahme ab?",
          answer:
            "Bei der Übergabe erhalten Sie Ihr neues Auto vollgetankt oder mit geladener Batterie sowie alle wichtigen Fahrzeugunterlagen. Die Übergabe wird im Voraus koordiniert, damit alles reibungslos und zu Ihrem gewünschten Termin erfolgt.",
        },
      ],
    },
    "kosten-bezahlung": {
      title: "Kosten, Bezahlung & Kilometer",
      questions: [
        {
          id: "kosten-enthalten",
          question: "Was ist im monatlichen Preis enthalten?",
          answer:
            "Im monatlichen Fixpreis ist alles enthalten ausser Tanken oder Laden. Darin eingeschlossen sind Versicherung, Wartung, Reifenservice, Steuern, Zulassung, europaweite Pannenhilfe und bei Bedarf ein Ersatzfahrzeug ab dem ersten Tag.",
        },
        {
          id: "zusatzkosten",
          question: "Gibt es eine Anzahlung oder Kaution?",
          answer:
            "Nein, bei uns ist keine Anzahlung oder Kaution erforderlich. Nach einer kurzen Bonitätsprüfung können Sie Ihr Auto Abo einfach, transparent und ohne Vorabkosten starten.",
        },
        {
          id: "rate",
          question: "Wie erfolgt die Bezahlung der monatlichen Rate?",
          answer:
            "Die monatliche Abo-Rate können Sie bequem per Lastschrift (LSV), Dauerauftrag oder Rechnung bezahlen. Die Rechnung wird jeweils Mitte des Monats für den Folgemonat ausgestellt. Eine Zahlung per Kreditkarte ist derzeit nicht möglich.",
        },
        {
          id: "passiert",
          question: "Was passiert bei Mehrkilometern?",
          answer:
            "Zusätzliche Kilometer werden nach Vertragsende transparent zu den vereinbarten Preisen für Mehrkilometer verrechnet. Sie können Ihre Kilometerleistung während der Laufzeit jährlich flexibel und kostenlos anpassen, falls sich Ihr Fahrbedarf ändert.",
        },
        {
          id: "geplant",
          question: "Was, wenn ich weniger Kilometer fahre als geplant?",
          answer:
            "Nicht genutzte Kilometer werden am Vertragsende gemäss den vereinbarten Bedingungen gutgeschrieben. Auch die Preise für Minderkilometer sind im Voraus vertraglich festgelegt, damit alles transparent und fair bleibt.",
        },
      ],
    },
    "versicherung-schaeden": {
      title: "4. Versicherung, Schäden & Zusatzfahrer",
      questions: [
        {
          id: "versicherung",
          question: "Wie bin ich versichert?",
          answer: "",
          answer1:
            "Bei uns sind Sie optimal geschützt, ohne komplizierte oder intransparente Tarifmodelle.Folgende Leistungen sind in jedem Auto Abo automatisch enthalten:",
          li1: "Haftpflichtversicherung ohne Selbstbeteiligung",
          li2: "Vollkaskoversicherung mit Grobfahrlässigkeitsschutz",
          li3: "Kollisionsschutz mit einer Selbstbeteiligung von",
          li4: "Schutz gegen Glasbruch, Feuer, Diebstahl, Elementar- und Parkschäden ohne Selbstbeteiligung",
          li5: "Parkschadenschutz: bis zu 2 Ereignisse pro Jahr, mit unbegrenzter Schadenhöhe",
          paragraph1: "CHF 500.– für Privatkunden",
          paragraph2: "CHF 1'000.– für Firmenkunden",
        },
        {
          id: "zusatzfahrer",
          question:
            "Dürfen andere Personen das Fahrzeug fahren und sind sie versichert??",
          answer:
            "Ja, auch andere Personen dürfen Ihr Auto fahren, sofern sie mindestens 20 Jahre alt sind, eine gültige Fahrerlaubnis besitzen und in der Schweiz wohnhaft sind. Alle berechtigten Fahrerinnen und Fahrer sind im Rahmen des Auto Abos versichert.",
        },
        {
          id: "fahren",
          question: "Kann ich mit dem Auto ins Ausland fahren?",
          answer:
            "Ja, Sie dürfen mit Ihrem Fahrzeug in alle Länder reisen, die auf der grünen Versicherungskarte aufgeführt sind. Damit sind Sie auch im Ausland bestens abgesichert und profitieren vom umfassenden Versicherungsschutz Ihres Auto Abos.",
        },
        {
          id: "schaden",
          question: "Wie hoch ist der Selbstbehalt bei einem Schaden?",
          answer:
            "Alle unsere Kundinnen und Kunden profitieren von einheitlich vorteilhaften Versicherungsbedingungen, ohne komplizierte Tarifmodelle oder versteckte Kosten. Der Selbstbehalt beträgt CHF 0 in der Haftpflichtversicherung sowie CHF 500 für Privatkunden und CHF 1'000 für Firmenkunden in der Vollkaskoversicherung.",
        },
        {
          id: "kratzer",
          question:
            "Wie werden Schäden oder Kratzer bei der Rückgabe bewertet?",
          answer:
            "Normale Gebrauchsspuren sind selbstverständlich kein Problem. Nur übermässige Schäden oder fehlende Teile werden bei der Fahrzeugrückgabe gemäss den vereinbarten Bewertungsrichtlinien verrechnet. Alle Details finden Sie in unserem Leitfaden zur Fahrzeugrückgabe (PDF).",
        },
        {
          id: "diebstahl",
          question: "Was passiert bei Totalschaden oder Diebstahl?",
          answer:
            "Bei einem Totalschaden oder Diebstahl sind Sie vollumfänglich versichert. Sie erhalten sofort ein Ersatzfahrzeug, damit Sie ohne Unterbruch mobil bleiben.",
        },
      ],
    },
    "service-wartung": {
      title: "Service, Wartung & Ersatzmobilität",
      questions: [
        {
          id: "wartung",
          question: "Wie erfolgt Wartung und Service?",
          answer:
            "Den Fahrzeugservice können Sie bei jeder offiziellen Markenvertretung Ihrer Wahl durchführen lassen, idealerweise bei einer nächstgelegenen Partnergarage. Die Kosten für Wartung, Inspektionen und Verschleissreparaturen sind im Auto Abo bereits enthalten.",
        },
        {
          id: "ersatzfahrzeug",
          question: "Wie funktioniert der Reifenservice?",
          answer:
            "Zweimal pro Jahr werden Sie informiert, sobald Ihr Fahrzeug einen Wechsel auf Sommer- oder Winterreifen benötigt. Über unsere App können Sie Ihren bevorzugten Reifenpartner selbst auswählen und den Termin direkt vereinbaren. Der Reifenservice inklusive Montage und Lagerung ist im Auto Abo enthalten.",
        },
        {
          id: "meins",
          question:
            "Bekomme ich ein Ersatzfahrzeug, wenn meins in der Werkstatt ist?",
          answer:
            "Ja, Sie erhalten ab dem ersten Tag ein Ersatzfahrzeug ohne Zusatzkosten. Bitte informieren Sie den Servicepartner im Voraus, damit das Ersatzfahrzeug rechtzeitig für Sie bereitsteht.",
        },
        {
          id: "meins2",
          question: "Was mache ich bei einer Panne?",
          answer:
            "Ein Anruf unter 041 748 37 73 genügt – wir sind rund um die Uhr (24/7) für Sie da. Die europaweite Pannenhilfe inklusive Abschlepp- und Bergungskosten ist im Auto Abo enthalten.",
        },
      ],
    },
    elektrofahrzeuge: {
      title: "Elektrofahrzeuge & Nachhaltigkeit",
      questions: [
        {
          id: "elektro-verfuegbar",
          question: "Sind Elektrofahrzeuge auch im Angebot?",
          answer:
            "Ja, wir bieten eine grosse Auswahl an Elektro- und Hybridfahrzeugen und erweitern unser Angebot kontinuierlich. Damit fördern wir eine nachhaltige und zukunftsorientierte Mobilität in der Schweiz. Link auf Angebote für Privatkunden",
        },
        {
          id: "nachhaltigkeit",
          question: "Wie funktioniert das Laden eines Elektroautos im Abo?",
          answer:
            "Alle Elektrofahrzeuge werden mit einem Standard-Ladekabel geliefert, das für das Laden an einer haushaltsüblichen Steckdose geeignet ist. Für das regelmässige Laden zu Hause empfehlen wir die Installation einer Wallbox",
        },
        {
          id: "nachhaltigkeit2",
          question: "Was sind die Vorteile eines Elektroautos im Abo?",
          answer:
            "Sie profitieren von voller Kostenkontrolle, modernster Fahrzeugtechnologie und umweltfreundlicher Mobilität, ohne Aufwand für Wartung, Versicherung oder Batteriemanagement. So fahren Sie nachhaltig, komfortabel und sorglos durch die Schweiz und Europa.",
        },
      ],
    },
    "laufzeit-kuendigung": {
      title: "Laufzeit, Kündigung & Rückgabe",
      questions: [
        {
          id: "laufzeit",
          question: "Für welche Laufzeit kann ich ein Fahrzeug beziehen?",
          answer:
            "Sie können Ihr Auto Abo bereits ab einer Laufzeit von 1 bis 48 Monaten abschliessen. Einige unserer neuen Fahrzeuge sind auch ab einem Monat verfügbar. Grundsätzlich gilt: Je länger die Laufzeit, desto günstiger ist der monatliche Abo-Preis.",
        },
        {
          id: "kuendigung",
          question: "Kann ich die Vertragszeit verlängern?",
          answer:
            "Ja, Sie können die Laufzeit Ihres Auto Abos im letzten Vertragsjahr unkompliziert verlängern. Melden Sie sich dafür einfach per E-Mail an info@navigas-mobility.ch.",
        },
        // {
        //   id: "kuendigung2",
        //   question: "Wie funktioniert die Fahrzeugrückgabe?",
        //   answer:
        //     "Am Ende der Laufzeit wird dein Fahrzeug von einem unabhängigen Sachverständigen überprüft. Die Bewertung erfolgt nach den Richtlinien unseres Leitfadens für Fahrzeugrückgaben, damit alles fair und transparent abläuft.",
        // },
      ],
    },
    // "kontakt-support": {
    //   title: "Kontakt & Support",
    //   questions: [
    //     {
    //       id: "kontakt",
    //       question: "An wen kann ich mich bei Fragen wenden?",
    //       answer:
    //         "Unser Team steht dir persönlich telefonisch, per E-Mail oder über das Kontaktformular zur Verfügung, wir helfen dir gerne weiter.",
    //     },
    //     {
    //       id: "oeffnungszeiten",
    //       question: "Wie erreiche ich den Pannenservice?",
    //       answer:
    //         "Bitte melde dich unter der Telefonnummer 041 748 37 73. Unsere Assistance ist 24 Stunden am Tag, 7 Tage die Woche für dich erreichbar, europaweit und ohne Zusatzkosten.",
    //     },
    //     {
    //       id: "oeffnungszeiten2",
    //       question: "Ich habe keine Antwort gefunden, was tun?",
    //       answer:
    //         "Kein Problem! Schreib uns einfach an [info@navigas-mobility.ch](mailto:info@navigas-mobility.ch), oder nutze das Kontaktformular. Wir melden uns schnellstmöglich bei dir.",
    //     },
    //   ],
    // },
  };

  const tabs = [
    { id: "grundlagen", label: "Grundlagen zum Auto Abo" },
    {
      id: "auto-abo-fahrzeugwahl",
      label: "Auto Abo abschliessen & Fahrzeugwahl",
    },
    {
      id: "kosten-bezahlung",
      label: "Kosten, Bezahlung & Kilometer",
    },
    {
      id: "versicherung-schaeden",
      label: "Versicherung, Schäden & Zusatzfahrer",
    },
    {
      id: "service-wartung",
      label: "Service, Wartung & Ersatzmobilität",
    },
    {
      id: "elektrofahrzeuge",
      label: "Elektrofahrzeuge & Nachhaltigkeit",
    },
    {
      id: "laufzeit-kuendigung",
      label: "Laufzeit, Kündigung & Rückgabe",
    },
    // { id: "kontakt-support", label: "Kontakt & Support" },
  ];

  // Filter questions based on search query
  const filteredQuestions = useMemo(() => {
    if (!searchQuery.trim()) {
      return faqData[activeTab]?.questions || [];
    }

    const query = searchQuery.toLowerCase();
    const allQuestions = [];

    // Search through all categories
    Object.entries(faqData).forEach(([categoryId, category]) => {
      category.questions.forEach((question) => {
        const questionText = question.question.toLowerCase();
        const answerText = (question.answer || "").toLowerCase();
        const answer1Text = (question.answer1 || "").toLowerCase();

        if (
          questionText.includes(query) ||
          answerText.includes(query) ||
          answer1Text.includes(query)
        ) {
          allQuestions.push({
            ...question,
            categoryId,
            categoryTitle: category.title,
          });
        }
      });
    });

    return allQuestions;
  }, [searchQuery, activeTab, faqData]);

  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  const handleTabChange = (tabId, event) => {
    setActiveTab(tabId);
    setOpenQuestion(null);
    setSearchQuery("");
    setIsSearchActive(false);

    if (event.target && tabsRef.current) {
      const button = event.target.closest("button");
      if (button) {
        button.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setOpenQuestion(null);
    setIsSearchActive(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsSearchActive(true);

    // Scroll to results section
    setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <div className="flex flex-col mt-18 md:mt-28">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-[90px] px-4 lg:px-0">
        <div className="flex flex-col items-start justify-between gap-6 lg:gap-[40px] w-full lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-[#0847A4] text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-tight mt-10 lg:mt-0">
            Häufige Fragen zu <br /> deinem Auto Abo
          </h1>
          <p className="text-sm sm:text-base">
            Hier findest du Antworten auf alle Fragen rund um dein Navigas Auto
            Abo, von Kosten und Versicherung bis hin zu Fahrzeugwahl und
            Rückgabe.
          </p>
          <div className="w-full">
            <form
              onSubmit={handleSearchSubmit}
              className="relative flex flex-row rounded-[30px] border-[#F5F8FD] border-1 bg-[#F5F8FD]"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Frage eingeben ..."
                className="w-full px-4 sm:px-10 py-3 text-sm sm:text-base text-[#494B4E] placeholder-[#494B4E] focus:outline-none rounded-l-[30px] bg-[#F5F8FD]"
              />
              <button
                type="submit"
                className="relative bg-white hover:bg-[#0847A4] w-[20%] min-w-[60px] transition-all duration-300 rounded-r-[30px] flex items-center justify-center px-2 group active:scale-95"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  className="fill-[#213D66] group-hover:fill-white transition-colors duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.08972 14.9167C6.78623 14.9167 5.57342 14.588 4.45129 13.9306C3.36316 13.2959 2.50172 12.4344 1.86698 11.3463C1.20957 10.2242 0.880859 9.01142 0.880859 7.70793C0.880859 6.40444 1.20957 5.19163 1.86698 4.0695C2.50172 2.98137 3.36316 2.11993 4.45129 1.48519C5.57342 0.827783 6.78623 0.499069 8.08972 0.499069C9.39321 0.499069 10.606 0.827783 11.7282 1.48519C12.8163 2.11993 13.6777 2.98137 14.3125 4.0695C14.9699 5.19163 15.2986 6.40444 15.2986 7.70793C15.2986 8.66004 15.1172 9.57815 14.7545 10.4623C14.3918 11.3464 13.8704 12.1285 13.1903 12.8086C12.5103 13.4887 11.7282 14.0101 10.8441 14.3728C9.95994 14.7355 9.04183 14.9167 8.08972 14.9167ZM8.08972 1.60421C6.97892 1.60421 5.95313 1.88191 5.01235 2.43731C4.09424 2.98137 3.36316 3.71245 2.81909 4.63056C2.26369 5.57134 1.98599 6.59713 1.98599 7.70793C1.98599 8.81873 2.26369 9.84452 2.81909 10.7853C3.36316 11.7034 4.09424 12.4345 5.01235 12.9786C5.95313 13.534 6.97892 13.8117 8.08972 13.8117C9.20052 13.8117 10.2263 13.534 11.1671 12.9786C12.0852 12.4345 12.8163 11.7034 13.3604 10.7853C13.9158 9.84452 14.1935 8.81873 14.1935 7.70793C14.1935 6.59713 13.9158 5.57134 13.3604 4.63056C12.8163 3.71245 12.0852 2.98137 11.1671 2.43731C10.2263 1.88191 9.20052 1.60421 8.08972 1.60421ZM17.0668 17.501C16.9081 17.5124 16.7721 17.467 16.6587 17.365L12.2722 12.9615C12.2042 12.8935 12.156 12.8113 12.1277 12.715C12.0994 12.6186 12.0965 12.5251 12.1192 12.4345C12.1419 12.3438 12.19 12.2616 12.2637 12.1879C12.3374 12.1142 12.4196 12.0661 12.5103 12.0434C12.6009 12.0207 12.6944 12.0207 12.7908 12.0434C12.8871 12.0661 12.9693 12.1114 13.0373 12.1794L17.4408 16.5829C17.5542 16.6849 17.6109 16.8153 17.6109 16.974C17.6109 17.1327 17.557 17.2658 17.4493 17.3735C17.3417 17.4812 17.2141 17.5237 17.0668 17.501Z" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="relative w-full   lg:w-1/2 ">
          <video
            ref={videoRef}
            loop
            preload="metadata"
            poster="/images/faqVideo-thumbnail.png"
            src="/images/faqVideo1.mp4"
            className="rounded-b-2xl"
            onClick={handleToggle}
          />

          {!isPlaying && (
            <button
              onClick={handleToggle}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform pointer-events-none"
            >
              <img
                src="/images/VideoButton.svg"
                alt="Play video"
                className=""
              />
            </button>
          )}
        </div>
      </div>

      {!searchQuery && (
        <div
          ref={tabsRef}
          className="container overflow-x-auto scrollbar-hide py-8 scroll-smooth"
        >
          <div className="flex gap-8 border-b border-gray-200 px-4 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={(e) => handleTabChange(tab.id, e)}
                className={`pb-4 px-2 whitespace-nowrap text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-[#0847A4] border-b-2 border-[#0847A4]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {searchQuery && isSearchActive && (
        <div ref={resultsRef} className="container mx-auto px-4 py-8">
          <p className="text-gray-600">
            {filteredQuestions.length > 0
              ? `${filteredQuestions.length} Ergebnis${
                  filteredQuestions.length !== 1 ? "se" : ""
                } für "${searchQuery}"`
              : `Keine Ergebnisse für "${searchQuery}"`}
          </p>
        </div>
      )}

      <div className="w-full container mx-auto px-4 pb-12">
        <div className="space-y-4">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
              >
                {searchQuery && item.categoryTitle && (
                  <div className="px-6 pt-4 pb-2">
                    <span className="text-xs text-gray-500 uppercase">
                      {item.categoryTitle}
                    </span>
                  </div>
                )}
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3
                    className={`text-lg font-medium  ${
                      openQuestion === item.id
                        ? "text-[#0847A4]"
                        : "text-gray-900"
                    }`}
                  >
                    {item.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      openQuestion === item.id ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openQuestion === item.id
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {item.answer}
                    {item.answer1}
                  </div>
                  {item.id === "versicherung" && (
                    <div>
                      <ul className="list-disc list-inside text-gray-600 px-6 pb-6">
                        <li>{item.li1}</li>
                        <li>{item.li2}</li>
                        <li>
                          {item.li3}
                          <p className="ml-6 text-gray-600">
                            {item.paragraph1}
                          </p>
                          <p className="ml-6 text-gray-600">
                            {item.paragraph2}
                          </p>
                        </li>
                        <li>{item.li4}</li>
                        <li>{item.li5}</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : searchQuery && isSearchActive ? (
            <div className="text-center py-12 text-gray-500">
              <p>Versuche es mit anderen Suchbegriffen.</p>
            </div>
          ) : null}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Deinem;
