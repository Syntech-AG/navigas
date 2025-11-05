import React from "react";
import BlogsId from "../../pages/[blogsId]";
import { useParams } from "react-router-dom";
import Subscribe from "./Subscribe";
import BerichteShuffle from "./BerichteShuffle";
import ScrollToTop from "../general/ScrollToTop";

const blogContent = {
  blog1: {
    headings: [
      "Mobility",
      "Mobilität und Immobilien",
      "Die Mobilität erfordert heute Anpassungen der Infrastruktur",
      // "All-inclusive Abo für Private und Firmen",
      // "Schweizweites Netz von Partnergaragen und Bring-Service",
    ],
    data: ["28 Juni 2021"],
    paragraph: [
      "Abstellplätze für gemeinschaftlich genutzte Verkehrsmittel, Ladestationen für Elektrofahrzeuge, Motorroller und Fahrräder, Ausrüstung für fahrerlose Maschinen sind nur einige der neuen Faktoren, die nicht mehr übersehen werden können. Bauherren müssen sich jetzt auch mit den zusätzlichen Auswirkungen von Covid-19 auseinandersetzen – etwa mit neuen Arbeitszeiten und Home-Office. Dies verändert nicht nur die Art und Weise, wie wir uns in Städten bewegen, sondern auch, wie wir sie bauen. Im folgenden Video werden einige Analysen von Arval Mobility Observatory vorgestellt, die sich mit den wachsenden Beziehungen zwischen Immobilien und Mobilität befassen.",
    ],
    images: [
      {
        src: "/images/image33.jpg",
        alt: "Titelbild",
        className: "w-full mb-8 md:mb-[56px]",
      },
      // {
      //   src: "/images/blank2.jpeg",
      //   alt: "Zweites Bild",
      //   className: "w-full py-6 md:py-10",
      // },
    ],
  },
  blog2: {
    headings: [
      "News",
      "Solicare ermöglicht eine Entlöhnung und professionelle Unterstützung für pflegende Angehörige",
      "Mindestens 600’000 Personen in der Schweiz pflegen ihre Angehörigen",
      "Wer sind die pflegenden Angehörigen ?",
      "Hohe körperliche und psychische Belastung für die pflegenden Angehörigen",
      "70 Prozent der pflegenden Angehörigen fühlen sich überlastet",
      "solicare entlastet pflegende Angehörige mit professioneller Unterstützung durch diplomierte Pflegefachpersonen und einer fairen Entlöhnung für geleistete Grundpflegeleistungen.",
      "Was bietet die Spitex-Organisation solicare den pflegenden Angehörigen?",
      "solicare fährt mit navigas mobility",
    ],
    data: ["5 September 2022"],
    paragraph: [
      "Überall auf der Welt ist die informelle (unbezahlte) Pflege von Angehörigen zu einem unverzichtbaren Grundpfeiler im Gesundheitswesen geworden. Gemäss Umfrage des Bundesamtes für Gesundheit (BAG) betreuen und pflegen in der Schweiz mindestens 600’000 Personen ihnen nahestehende Menschen. Das Bundesamt für Statistik (Quelle: Schweizerische Gesundheitsbefragung) hat 2017 erhoben, dass 13% der Bevölkerung aus gesundheitlichen Gründen Hilfe von Verwandten, Bekannten oder der Nachbarschaft erhalten haben. Allein im Vereinigten Königreich gibt es schätzungsweise 6,5 Millionen pflegende Angehörige, die Familienmitglieder und Freunde regelmässig unterstützen und damit den Gesundheits- und Sozialdiensten jährlich etwa 150 Milliarden Franken einsparen. Diese Situation ist in ganz Europa und darüber hinaus ähnlich: 80% aller Pflegeleistungen werden von pflegenden Angehörigen erbracht. Da die Alterung der Bevölkerung weiter voranschreitet und gleichzeitig die Zahl der Arbeitskräfte im Gesundheits- und Sozialwesen schrumpft, zeichnet sich ein gesundheitspolitischer Notstand ab, bei dem der Druck auf die Pflegenden erheblich zunehmen wird.",
      "Pflegende Angehörige sind Familien-mitglieder und Nahestehende, die einen geliebten Menschen unterstützen, der aufgrund von Krankheit, Gebrechlichkeit, Behinderung, psychischen Problemen oder Sucht Hilfe benötigt.",
      "Die jüngsten Ereignisse während der COVID-Pandemie haben den gesellschaftlichen Wert der häuslichen Pflege aufgezeigt, aber auch deutlich gemacht, dass viele pflegende Angehörige mit kurz- bis langfristigen negativen Folgen für ihre Gesundheit und ihr Wohlbefinden konfrontiert sind. Pflegende Angehörige stehen vor gleichartigen Herausforderungen wie professionelle Arbeitskräfte, doch fehlt ihnen ein Grossteil der professionellen Infrastruktur und Unterstützung. So gibt es zum Beispiel ungenügende Unterstützung und Schulung, es fehlt ein vereinbartes Arbeitspensum (Wochenstunden) oder eine Definition der Arbeitsrolle sowie eine faire Entschädigung für die geleisteten Pflegeleistungen. Zusätzlich müssen die pflegenden Angehörigen ihre Pflegeaufgaben oft mit ihrer Arbeit, Familie und ihrer Gesundheit in Einklang bringen.",
      "Gemäss dem Österreichischen Bundesministerium für Soziales, Gesundheit, Pflege und Konsumentenschutz zeigen Untersuchungen, dass sich rund 70 Prozent der pflegenden Angehörigen überlastet fühlen. Als psychische Belastung wird das Verantwortlichkeitsgefühl, die Überforderung und die Aussichtslosigkeit genannt. Je höher der Pflegeaufwand ist, desto weniger Zeit bleibt, um auf die eigene Gesundheit zu achten. Pflegende Angehörige werden häufiger krank als die Durchschnittsbevölkerung und sie sind anfälliger für stressbedingte Krankheiten. Im körperlichen Bereich sind sie am häufigsten von Rückenschmerzen, Schmerzen im Schulter- und Nackenbereich sowie in den Gelenken betroffen. Auch Schlafstörungen, nervöse Zustände und Erschöpfung sind häufige Begleiterscheinungen. Als grosse Belastung wird die zeitliche Bindung durch die Pflege und Betreuung genannt. Dies birgt die Gefahr, die eigenen Bedürfnisse zu vernachlässigen. Viele pflegende Angehörige fühlen sich deshalb ausgebrannt und erschöpft. Trotz der hohen Belastungen nimmt nur ein geringer Teil der pflegenden Angehörigen professionelle Hilfe in Anspruch. Gründe sind die Kosten, fehlende Information oder ungenügende Qualität der Leistungen.",
      "Die Spitex-Organisation solicare beeindruckt mit ihrem innovativen Ansatz Entlastung und professionelle Unterstützung für die pflegenden Angehörigen zu bieten sowie medizinische, rechtliche und finanzielle Fragen für die pflegenden Angehörigen zu klären. Mit dem Mix aus professioneller Unterstützung und der Entlöhnung für die intensive Pflege für die eigenen Angehörigen schafft solicare Sicherheit und Wertschätzung für viele Menschen in der Schweiz. Sie ist dabei eine wichtige Stütze, um die oben erwähnten Probleme zu lösen. So können pflegebedürftige Menschen länger in ihrem gewohnten Umfeld leben, was sich nachweislich positiv auf den Krankheitsverlauf auswirkt und die pflegenden Angehörigen erhalten die Wertschätzung und Unterstützung, die sie für ihr selbstloses Engagement verdienen.",
      "Lohn für die Pflege von Angehörigen und Sicherstellung der privaten Vorsorgebeiträge für AHV und Pensionskasse (Freigrenze im AHV-Alter).\n Persönliche und professionelle Betreuung und Unterstützung durch diplomierte Pflegefachpersonen sowie Stellvertretungs- und Entlastungsangebote. \n Direkte Ansprechperson bei pflegerischen und administrativen Fragen oder in Krisensituationen. \n Professionelle Qualitätssicherung der durchgeführten Pflegeleistungen. \n Individuelle Aus-/Weiterbildung für die spezifische Pflegesituation und nach persönlichem Bedarf. \nAdministrative Abwicklung und Unterstützung mit Versicherungen und Behörden. \n\nsolicare beschäftigt bereits über 120 Personen in ihrer Spitex-Organisation und wächst in vielen Regionen der Schweiz.",
      "Die Mobilitätsbedürfnisse von solicare werden durch navigas mobility sichergestellt. Diese Punkte stehen für solicare für im Zentrum:\n\nKostentransparenz: Im all-inclusive Pro Abo sind sämtliche Kosten für Versicherung, Steuern, Service und Unterhalt, Ersatzfahrzeug, Bereifung & Lagerung, Assistance (7/24) eingeschlossen. solicare setzt Tankkarten ein und erhält eine Monatsrechnung für die Auto Abos inklusive Treibstoff.\n Aufwand für den Fahrzeugpark: navigas mobility übernimmt die gesamten Fahrzeugbelange von der Anschaffung bis Fahrzeugrücknahme oder -wechsel.\nFür die längerfristige Nutzung von Fahrzeugen nutzt solicare das all-inclusive Pro. Spitzenzeiten werden mit dem Mid-term Pro ab 1 Monat überbrückt.",
    ],
    images: [
      {
        src: "/images/image44.png",
        alt: "Titelbild",
        className: "w-full mb-8 md:mb-[56px]",
      },

      // {
      //   src: "/images/image45.jpg",
      //   alt: "Zweites Bild",
      //   className: "w-full py-6 md:py-10",
      // },
    ],
  },
  blog3: {
    headings: ["Technology", "Vernetzte Fahrzeuge"],
    data: ["26 April 2021"],
    paragraph: [
      "Vernetzte Fahrzeuge werden zur Selbstverständlichkeit. Es wird davon ausgegangen, dass in 2025 fasst alle Neufahrzeuge vernetzt sind, einschließlich neuer Sicherheits-Funktionen und Unterhaltungselemente an Bord. Das folgende Video zeigt die Vorteile auf und erklärt, was Konnektivität für Fahrer, Passagiere und die Verkehrsteilnehmer der Zukunft bedeuten wird, insbesondere für das Flottenmanagement.",
    ],
    images: [
      {
        src: "/images/image55.jpg",
        alt: "Titelbild",
        className: "w-full mb-8 md:mb-[56px]",
      },
    ],
  },
  blog4: {
    headings: [
      "Medien",
      "Medienmitteilung navigas mobility",
      "Arval (Schweiz) AG und das Start-up navigas mobility gehen eine Partnerschaft ein",
      "All-inclusive Abo für Private und Firmen",
      "Schweizweites Netz von Partnergaragen und Bring-Service",
    ],
    data: ["28 April 2021"],
    paragraph: [
      "Arval ist der weltweit grösste Flottenanbieter und Schweizer Marktführer im Bereich Full-Service-Leasing. navigas mobility verfügt über Erfahrung im online-Automarkt, sei es Verkauf, Miete oder Leasing. Durch die Partnerschaft der beiden Firmen profitieren die Kundinnen und Kunden von einem umfangreichen online Angebot aus über 60 Modellen sowie einem ausgebauten Garagen- und Servicenetz.",
      "Mehmet von Burg, Mitgründer von navigas mobility, ist überzeugt: “Die Kundinnen und Kunden in der Schweiz sind bereit ihr Auto online zu erwerben, zu einem Monatspreis, bei dem wirklich alle Kosten rund um das Auto eingeschlossen sind.” David Möri, Partnership Manager bei Arval (Schweiz) AG und verantwortlich für das Retail Development ergänzt: “Ich freue mich auf die Zusammenarbeit und erwarte Synergien im digitalen Bereich, denn hier ist navigas mobility bestens aufgestellt.”",
      "Das all-inclusive Abo und das all-inclusive Pro umfassen alles, was mit dem Autofahren verbunden ist, von der Amortisation, Zulassung, Versicherung, Steuern, Service bis zu saisongerechten Reifen. Es ist keine Anzahlung nötig, die Vertragslaufzeit ist wählbar ab 25 bis 48 Monaten, genauso wie die Kilometerleistung pro Jahr. Einzig die Tankfüllungen sind nicht mit eingeschlossen. Mit dem all-inclusive Abo sind die Kosten fix über die gesamte Dauer des Vertrags planbar und es gibt keine unliebsamen Überraschungen.",
      "Die Kundinnen und Kunden übernehmen das Fahrzeug bei einer der Partnergaragen in der Schweiz oder sie lassen sich das Auto bequem nach Hause oder ins Geschäft liefern.",
    ],
    images: [
      {
        src: "/images/image 36.png",
        alt: "Titelbild",
        className: "w-full mb-8 md:mb-[56px]",
      },
      {
        src: "/images/image30.png",
        alt: "Zweites Bild",
        className: "w-full py-6 md:py-10",
      },
    ],
  },
  blog5: {
    headings: [
      "Technology",
      "Die Elektrifizierungsstrategie der Fahrzeughersteller",
      "BMW: 30 Milliarden Euro für seinen Elektrifizierungsplan",
      "Mercedes Benz: Elektrifizierung der gesamten Produktpalette bis 2022",
      "Ford: Plan zur Förderung der Elektrifizierung",
      "General Motors: Investitionen von 35 Milliarden Dollar",
      "Hyundai-KIA: 23 elektrifizierte Modelle im Jahr 2025",
      "Jaguar Land Rover: Elektrifizierung ist auch ein Ziel des Luxusautoherstellers",
      "Renault: 65 % reine Elektrofahrzeuge bis 2025",
      "Stellantis: fünf Gigafactories zur Deckung der Nachfrage",
      "Toyota: 70 Elektroautos, darunter 15 vollelektrische Fahrzeuge bis 2025",
      "Volkswagen: bis 2030 steigt der Anteil der BEV um 50%",
      "Volvo: das erste BEV kommt dieses Jahr auf den Markt",
    ],
    data: ["4 Oktober 2021"],
    paragraph: [
      "Im Juli letzten Jahres schlug die Europäische Union ein Null-Emissions-Ziel für Neuwagen bis 2035 und ein Verkaufsverbot für neue Benzin- und Dieselfahrzeuge ab 2035 vor. Die Europäische Kommission schlug ausserdem vor, die CO2-Emissionen von Personenkraftwagen bis 2030 gegenüber dem Stand von 2021 um 55 % und bis 2035 um 100 % zu senken. Parallel dazu haben mehrere Länder bereits beschleunigte Fristen für das Verbot des Verkaufs von ICE Verbrennungsmotoren (konventionelle Fahrzeuge) für das Jahr 2030 und 2035 angekündigt. Die kontinuierliche Beschleunigung der Elektrifizierung setzt die Fahrzeughersteller (OEMs) unter erheblichen Druck, diese Ziele zu erreichen, und treibt die Entwicklung von Elektrifizierungsstrategien für die kommenden Jahre voran. In der folgenden Tabelle sehen Sie die gewaltigen Investitionen in die Elektrifizierung von den wichtigsten Fahrzeugherstellern.",
      "BMW wird bis 2025 mehr als 30 Milliarden Euro in Forschung und Entwicklung investieren und geht davon aus, dass bis 2030 50 % der weltweiten Verkäufe auf BEVs (Battery Electric Vehicle: batteriebetriebene Fahrzeuge bzw. Elektrofahrzeuge) entfallen werden und BEVs für 100 % der heutigen Marktsegmente verfügbar sein werden. Sie wollen in den nächsten zehn Jahren 10 Millionen BEVs verkaufen. Bis 2023 sollen 90 % der Marktsegmente mit mindestens einem BEV abgedeckt sein. Um dieses Ziel zu erreichen, hat BMW 400 Millionen Euro in das Werk Dingolfing investiert, um seine Werksanlagen in Deutschland zu modernisieren, und wird die Produktion von Verbrennungsmotoren einstellen. Das Werk Dingolfing ist die größte Produktionsstätte von BMW in Europa und wird zum Hauptmotor für die Produktion der Elektromodelle von BMW.",
      "Bis 2022 wird Mercedes Benz in allen Segmenten BEV anbieten. Ab 2025 werden alle neu eingeführten Fahrzeugarchitekturen rein elektrisch sein. Um diese Umstellung zu erleichtern, stellt Mercedes-Benz einen umfassenden Plan vor, der eine deutliche Beschleunigung der Forschung und Entwicklung vorsieht. Insgesamt werden sich die Investitionen in BEVs zwischen 2022 und 2030 auf mehr als 40 Milliarden Euro belaufen. Die Ziele des letzten Jahres basierten auf der Annahme, bis 2025 einen Anteil von 25 % an Hybrid- und Elektrofahrzeugen zu verkaufen. Die heutige Überarbeitung basiert auf einem angenommenen Anteil von BEVs und PHEVs (Plug-in Hybrid Fahrzeugen) von bis zu 50 % bis 2025 und einem Marktszenario für Neuwagenverkäufe, das bis zum Ende des Jahrzehnts im Wesentlichen auf vollelektrische Fahrzeuge umgestellt hat. Die Investitionen in Verbrennungsmotoren und Plug-in-Hybridtechnologien werden zwischen 2019 und 2026 um 80% sinken. Mercedes-Benz wird eine Batteriekapazität von mehr als 200 Gigawattstunden benötigen und plant, zusammen mit seinen Partnern auf der ganzen Welt acht Gigafactories zur Produktion von Zellen zu errichten. Dies geschieht zusätzlich zu dem bereits geplanten Netzwerk von neun Werken für den Bau von Batteriesystemen. Die Batterien der nächsten Generation werden in hohem Maße standardisiert und für den Einsatz in mehr als 90 % aller Pkw und Transporter von Mercedes-Benz geeignet sein, gleichzeitig aber auch flexibel genug, um individuelle Lösungen für alle Kunden anzubieten. Bis zum Jahr 2039 soll die Neuwagenflotte komplett klimaneutral sein.",
      "Im vergangenen Mai stellte Ford Pläne vor, die Investitionen in seine Elektrifizierungsbemühungen zu erhöhen. Ford wird sich auf die Einführung seiner künftigen Elektrofahrzeugmodelle konzentrieren und erwartet, dass 40 % seines weltweiten Fahrzeugvolumens bis 2030 vollelektrisch sein werden, und wird die geplanten Ausgaben für die Elektrifizierung bis 2025 auf mehr als 30 Milliarden Dollar erhöhen (gegenüber dem vorherigen Ziel von 22 Milliarden Dollar), einschließlich der Entwicklung von IonBoost-Batterien. In Europa werden bis 2030 100 % der Pkw-Verkäufe vollelektrisch sein (zwei Drittel der Nutzfahrzeugverkäufe sollen vollelektrisch oder Plug-in-Hybrid sein. Bis Mitte 2026 werden BEV- oder PHEV-Versionen aller Modelle für Personenkraftwagen und bis 2024 für Nutzfahrzeuge angeboten.",
      "General Motors (GM) will bis 2025 jährlich 1 Million Elektrofahrzeuge verkaufen. Der US-Automobilhersteller GM kündigte im Juni 2021 an, dass er seine Investitionen in Elektrofahrzeuge und automatisiertes Fahren bis 2025 von 27 Milliarden Dollar auf 35 Milliarden Dollar erhöhen wird. GM beschleunigt seine Pläne, in der Mitte des Jahrzehnts zwei neue Werke zur Herstellung von Batteriezellen in den Vereinigten Staaten zu errichten, welche die im Bau befindlichen Werke von Ultium Cells LLC in Tennessee und Ohio ergänzen sollen. GM baut bereits ein Batteriewerk mit LG Energy Solution im Nordosten Ohios, und Ultium Cells, das Joint Venture der beiden Konzerne, plant den Bau eines zweiten Werks in Spring Hill im US-Bundesstaat Tennessee. Die 2,3-Milliarden-Dollar-Fabrik soll 2023 eröffnet werden. Die Batterie-Initiative ist Teil des Plans von GM, den Verbrennungsmotor bis 2035 vollständig abzuschaffen. Als Zwischenschritt strebt der Hersteller bis 2025 weltweit insgesamt 30 rein elektrische Modelle und einen Elektroautoabsatz von 40 % an.",
      "Weltweit wird Hyundai in den nächsten vier Jahren mehr als 12 zusätzliche BEV-Modelle auf den Markt bringen. Michael Cole, Präsident und CEO von Hyundai Motor Europe, sagte: „Wir bei Hyundai sind bereits dabei, unser Geschäft zukunftssicher zu machen. 90 % unserer Produktpalette ist weniger als zwei Jahre alt. Das bedeutet eine modernere und effizientere Motorentechnologie. In den nächsten 10 Jahren werden wir uns stark auf emissionsfreie Mobilitätslösungen konzentrieren. Dazu gehören Brennstoffzellenfahrzeuge und BEVs. Wir sind in einer guten Position, um unseren europäischen Kunden eine Reihe von emissionsfreien Fahrzeugen anzubieten. Unser oberstes Ziel ist es, bis 2040 einen weltweiten Marktanteil von 8 bis 10 Prozent bei Elektrofahrzeugen zu erreichen. Schon jetzt sind wir führend auf dem Gebiet der emissionsfreien Mobilität. Bis 2025 planen wir, weltweit über 560.000 batterieelektrische Fahrzeuge zu produzieren, was uns zu einem der größten Anbieter von emissionsfreier Mobilität machen wird“. Siehe Interview mit Herrn Michael Cole, CEO von Hyundai Motor Europe:\n\nhttps://mobility-observatory.arval.com/interview-with-michael-cole-president-and-ceo-of-hyundai-motor-europe\n\nHyundai bietet derzeit 15 elektrifizierte Modelle in Europa an. Davon wurden 11 neu auf den Markt gebracht oder bis 2020 weiterentwickelt, darunter der Kona Electric BEV. Kia hat sich zum Ziel gesetzt bis 2026 rund 500’000 Einheiten von 11 Modellen zu verkaufen. Von besonderer Bedeutung für die Stärkung der Position im Bereich der Elektrofahrzeuge ist die Entwicklung der E-GMP (Electric-Global Modular Platform), einer speziellen Plattform für batteriebetriebene Elektrofahrzeuge (BEV), die von den Marken Hyundai, Genesis und Kia gemeinsam genutzt wird",
      "Der britische Automobilhersteller stellte seine Strategie im Februar vor. Er will bis 2030 jede Modellreihe mit einem rein elektrischen Antrieb anbieten. Jährliche Verpflichtungen in Höhe von etwa 2,5 Milliarden Pfund umfassen Investitionen in Elektrifizierungstechnologien und die Entwicklung von vernetzten Services. Der Plan sieht vor, dass Jaguar bis 2025 zu einem reinen Elektroautohersteller der Luxusklasse wird. In den nächsten fünf Jahren wird Land Rover, das mit seinen drei Familien Range Rover, Discovery und Defender weiterhin weltweit führend bei Luxus-SUVs ist, sechs rein elektrische Varianten anbieten. Die erste vollelektrische Variante wird im Jahr 2024 auf den Markt kommen. Sowohl Jaguar als auch Land Rover werden bis 2030 reine Elektrofahrzeuge anbieten. Zu diesem Zeitpunkt sollen nicht nur 100 % der Jaguar-Verkäufe, sondern auch rund 60 % der verkauften Land Rover mit abgasfreien Antrieben ausgestattet sein. Jaguar Land Rover hat sich zum Ziel gesetzt, bis zum Jahr 2039 in seiner gesamten Lieferkette, bei seinen Produkten und in seinem Betrieb keine Kohlenstoffemissionen mehr zu verursachen.",
      "Renault hat sich folgendes Ziel gesetzt: Einführung von 10 neuen Elektrofahrzeugen, um den Anteil der Elektrofahrzeuge bis 2025 auf 65 % und bis 2030 auf 90 % zu erhöhen. Bis 2030 werden Renault und seine Allianzpartner Nissan und Mitsubishi weltweit eine Million Elektrofahrzeuge pro Jahr produzieren, gegenüber 200.000 im Jahr 2020. Renault wird sein Angebot erweitern und 2023 und 2025 zwei neue Elektroautos des B-Segments – wie den neuen Renault 5 – sowie 2023 und 2024 zwei neue große Modelle des D-Segments auf den Markt bringen.",
      "Auf dem Stellantis EV Day 2021 im vergangenen Juli stellte das Unternehmen seine Elektrifizierungspläne vor. Die Gruppe beabsichtigt, bis 2025 mehr als 30 Milliarden Euro in die Elektrifizierung und Softwareentwicklung zu investieren, einschließlich Kapitalbeteiligungen an Joint Ventures, um deren Aktivitäten zu finanzieren und „erstklassige voll elektrifizierte Lösungen“ für alle 14 Marken anzubieten. Der Elektrifizierungsfahrplan von Stellantis umfasst die gesamte Wertschöpfungskette. Die EV-Batteriebeschaffungsstrategie des Unternehmens zielt darauf ab, bis 2025 eine Kapazität von mehr als 130 Gigawattstunden (GWh) und bis 2030 von mehr als 260 GWh zu sichern. Der Bedarf an EV-Batterien und -Komponenten wird mit insgesamt fünf „Gigafactories“ in Europa und Nordamerika gedeckt, die durch zusätzliche Lieferverträge und Partnerschaften ergänzt werden, um den Gesamtbedarf zu decken. Bis zum Jahr 2030 sollen über 70 % der Verkäufe in Europa und über 40 % in den Vereinigten Staaten auf emissionsarme Fahrzeuge entfallen. Alle 14 Marken sind bestrebt, erstklassige, vollständig elektrifizierte Lösungen anzubieten",
      "Anfang September enthüllte Masahiko Maeda, Chief Technology Officer von Toyota, die Batterieentwicklungs- und Lieferstrategie des Unternehmens „in Richtung Kohlenstoffneutralität“. Der Plan sieht vor, den Absatz elektrifizierter Fahrzeuge deutlich zu steigern und bis 2030 etwa 8 Millionen Einheiten pro Jahr zu erreichen (darunter etwa 2 Millionen vollelektrische oder Wasserstoff-Brennstoffzellen-Fahrzeuge). Das ist zusätzlich zu den 18,1 Millionen Hybridfahrzeugen, die seit der ersten Generation des Prius im Jahr 1997 verkauft wurden. Um dieses Ziel zu erreichen, wird Toyota bis 2030 etwa 13,6 Milliarden Dollar in die Entwicklung eines Batterieversorgungssystems sowie in Forschung und Entwicklung investieren. Zwei Drittel der Investitionen entfallen dabei auf das Batterieversorgungssystem mit insgesamt 70 Produktionslinien (rund 200 GWh jährlich bis 2030).\n\nAnfang dieses Jahres kündigte Toyota eine Strategie für Elektrofahrzeuge an, die vorsieht, bis 2025 weltweit 70 Elektroautos auf den Markt zu bringen, darunter 15 vollelektrische Fahrzeuge sowie Hybrid- und wasserstoffbetriebene Modelle. Bis etwa 2025 wird jedes Modell der Toyota- und Lexus-Produktpalette weltweit als reines Elektromodell erhältlich sein oder über eine Elektrooption verfügen.",
      "Bis zum Jahr 2030 will der Konzern im Einklang mit dem Pariser Abkommen seinen CO2-Fußabdruck pro Fahrzeug über den gesamten Lebenszyklus um 30 % reduzieren (im Vergleich zu 2018). Im gleichen Zeitraum soll der Anteil der batterieelektrischen Fahrzeuge auf 50 % steigen, während 2040 nahezu 100 % aller neuen Fahrzeuge der Gruppe in den wichtigsten Märkten emissionsfrei sein sollen. Spätestens im Jahr 2050 will der Konzern vollständig klimaneutral arbeiten. Für die Jahre 2021 bis 2025 hat Volkswagen bereits 73 Milliarden Euro für Zukunftstechnologien vorgesehen, was 50 % der Gesamtinvestitionen entspricht. Der Anteil der Investitionen in Elektrifizierung und Digitalisierung soll weiter erhöht werden. Der Volkswagen Konzern plant den Aufbau einer kontrollierten Batterie-Lieferkette, indem er neue Partnerschaften eingeht und alle Aspekte vom Rohmaterial bis zum Recycling in Angriff nimmt. Ziel ist es, einen geschlossenen Kreislauf in der Batteriewertschöpfungskette zu schaffen, der die nachhaltigste und kostengünstigste Art der Batterieherstellung darstellt. Um dieses Ziel zu erreichen, fördert der Volkswagen Konzern die Batteriekompetenz und reduziert die Komplexität. Dazu führt er bis 2030 ein einheitliches Batteriezellenformat mit bis zu 50 % Kostenreduktion und bis zu 80 % Anwendungsfällen ein. Sechs Giga-Fabriken in Europa mit einer Gesamtproduktionskapazität von 240 GWh bis 2030 sollen dazu beitragen, die Batterieversorgung zu sichern. Der erste Standort in Skellefteå (Schweden) wird von Northvolt AB betrieben. Der Volkswagen Konzern hat gerade weitere 500 Millionen Euro in seinen Premium-Zellpartner investiert und arbeitet mit Northvolt auf einen Produktionsstart im Jahr 2023 hin. Für den zweiten Standort in Salzgitter hat der Volkswagen Konzern gestern einen Vertrag mit dem chinesischen Zellspezialisten Gotion High-Tech als Technologiepartner für einen Produktionsstart im Jahr 2025 unterzeichnet. Gemeinsam werden beide Partner das Volumensegment der vereinheitlichten Zelle im deutschen Werk entwickeln und ansiedeln. Als dritten Standort will der Volkswagen Konzern Spanien zu einer strategischen Säule seiner Elektro-Offensive machen und erwägt, dort die gesamte Wertschöpfungskette von Elektroautos zu etablieren. Als Teil eines größeren Transformationsprogramms würde die Lokalisierung die Versorgung für die geplante BEV-Produktion in Spanien sicherstellen. Der Volkswagen Konzern prüft gemeinsam mit einem strategischen Partner die Option für eine Giga-Fabrik. In der Endausbaustufe am Ende des Jahrzehnts soll das Werk eine Jahreskapazität von 40 GWh-Stunden haben. Außerdem ist vorgesehen, dass die Small BEV Family der Gruppe ab 2025 in Spanien produziert wird. Die endgültige Entscheidung wird von den allgemeinen Rahmenbedingungen und den staatlichen Subventionen abhängen.",
      "Bis 2025 will das Unternehmen eine Million elektrifizierte Autos verkaufen und zwischen 2021 und 2025 fünf vollelektrische Modelle auf den Markt bringen. 2025 sollen 50 % des weltweiten Absatzes aus vollelektrischen Autos bestehen, der Rest aus Hybriden. Bis 2030 soll jedes verkaufte Auto vollelektrisch sein. Volvo Cars wird in den kommenden Jahren eine Reihe von Elektroautos auf den Markt bringen. Die neueste Volvo Generation wurde von Anfang an für die Elektrifizierung entwickelt. Die Palette umfasst sowohl vollelektrische Autos und Plug-in-Hybrid-Modelle, als auch neue Mild-Hybrid-Modelle. Das erste vollelektrische Auto, der XC40 Recharge, wurde Anfang dieses Jahres vorgestellt und wird in den kommenden Jahren von einer Reihe von vollelektrischen Autos gefolgt werden.\n\nAlle OEMs haben sich die Elektrifizierung ihres Portfolios auf die Fahnen geschrieben, was bestätigt, dass die Elektrifizierung keine Option mehr ist. Doch auch wenn der Wunsch und die Strategie vorhanden sind, müssen sie aufgrund der Halbleiterknappheit mit Verzögerungen in der Produktion rechnen. Wie lange wird er andauern und wie wird er sich letztlich auf das Produktionsvolumen auswirken? 2022 wird sicherlich kein einfaches Jahr für die Autohersteller.\n\nQuelle: Arval Mobility Observatory , Paris, 4th of October 2021, https://mobility-observatory.arval.com/vehicle-manufacturers-electrification-strategy",
    ],
    images: [
      {
        src: "/images/image66.jpg",
        alt: "Titelbild",
        className: "w-full mb-8 md:mb-[56px]",
      },
      {
        src: "/images/image67.jpg",
        alt: "Zweites Bild",
        className: "w-full py-6 md:py-10",
      },
    ],
  },
  blog6: {
    headings: [
      "Technology",
      "Hybrid-, Plug-in-Hybrid- oder Elektrofahrzeuge mit Range-Extender",
      "Eintauchen in das High-Tech-Umfeld von hybriden Antriebsalternativen",
      "Hybridisierung",
      "Die Ebenen der Parallel-Hybridisierung",
      "Der Mild-Hybrid oder Mild Hybrid Electrical Vehicle (MHEV)",
      "Der Vollhybrid Full Hybrid Electrical Vehicle (FHEV)",
      "Der Plug-In Hybrid Electrical Vehicle (PHEV)",
      "Seriell Hybrid",
      "Wiederaufladbarer Hybrid mit erweiterter Reichweite oder Extended-Range Electric Vehicle (E-REV)",
      "Parallel-Hybrid: Elektrische Reichweite, Lade- und Batterielebensdauer",
      "Batterie-Reichweite beim Plug-in-Hybrid",
      "",
      "Ladedauer und  Reichweite  einer Plug-in-Hybrid-Batterie",
      "",
      "Ein unmögliches Paar:  Reduktion von Treibhausgasen und Plug-in-Hybrid-Fahrzeug?",
      "",
      "Betriebskosten (Total Cost of Ownership) von Hybridfahrzeugen",
      "Alternative Antriebsarten entstanden dank dem politischen Druck zur Reduktion der fossilen Brennstoffe ",
      "Navigas mobility – Ihr zuverlässiger Partner in Sachen Elektromobilität",
    ],
    data: ["21 Januar 2022"],
    paragraph: [
      "Schon früh tauchen auf dem Automobilmarkt alternative Technologien zum Verbrennungsmotor auf. Die ersten Versuche gehen zurück in das 19. Jahrhundert, etwa mit dem Hybrid-Elektroauto des belgischen Herstellers Pieper im Jahr 1899. Doch erst seit den letzten fünfzehn Jahren zeigt sich die Automobilindustrie am Thema „nachhaltige“ Mobilität interessiert. Jüngste Studien zeigen auf, dass das  öffentliche Bewusstsein für die Alternativen zum Verbrennungsmotor wächst. Zusätzlich ist der ökologische Eifer einiger Hersteller gedämpft, denn das bisherige Geschäftsmodell muss als Ganzes neu überdacht werden. ",
      "Ein Hybridauto ist ein Fahrzeug, das zwei Energiearten nutzt, eine davon elektrisch. Die gebräuchlichste Bauweise kombiniert einen Elektromotor mit einem Verbrennungsmotor, in der Regel einen Benziner (aber nicht ausschliesslich). Die Hybridisierung erfüllt daher zwei Hauptziele:\n\nzum einen den Verbrauch von fossilen Brennstoffen und den Ausstoss von Treibhausgasen zu vermindern\nund zum anderen die Kraftstoffeffizienz des Fahrzeugs zu optimieren und damit die Betriebskosten zu senken.",
      "  ",
      "Das ist die erste Stufe der Hybridisierung. Der Verbrennungsmotor läuft kontinuierlich, ausser im Stand. Der Elektromotor gewinnt die kinetische Energie des Bremsens zurück (regeneratives Bremsen) und fungiert dann als Generator von Hilfsenergie bei den Starts und Schaltvorgängen, beide sind energieintensiv.",
      "Das ist die Stufe der konventionellen Hybridisierung, welche von Toyota entwickelt und 1997 auf den Markt gebracht wurde. Die konventionelle Hybridisierung ermöglicht den Antrieb des Fahrzeugs durch ein komplexes Getriebemanagement und verstärkt so die Synergie der beiden Motoren in Abhängigkeit von der Drehzahl. Der Prozentsatz der Nutzung im „rein elektrischen“ Modus hängt von der Kapazität der Batterie sowie ihrer Reichweite ab. Wie beim Mild Hybrid benötigen herkömmliche Modelle keine externe Aufladung.",
      "Ein Plug-in-Hybridfahrzeug (PHEV) wird wie seine Hybrid-Verwandten von einem Benzinmotor und einem Elektromotor angetrieben. Der Bordakku ist jedoch viel grösser und kann sowohl über eine externe Quelle als auch in geringerem Umfang durch regeneratives Bremsen aufgeladen werden. Ein Plug-in-Hybridauto verhält sich daher wie ein vollelektrisches Fahrzeug (BEV), solange die Batterie ihren dedizierten Motor ausreichend antreibt. Der Verbrennerblock erwacht wieder zum Leben, wenn die Batterie eine bestimmte Schwelle unterschreitet, dadurch fährt das Fahrzeug ohne Unterbrechung.",
      "",
      "Das Elektrofahrzeug mit erweiterter Reichweite ist ein Fahrzeug, dessen gesamte Antriebskraft von einem Elektromotor bereitgestellt wird. Es unterscheidet sich von einem Elektroauto mit Batterie durch seinen zusätzlichen Verbrennungsmotor. Erreicht die Batterie ihre kritische Ladezustandsschwelle, aktiviert der Verbrennungsmotor einen Generator, dieser stellt elektrische Energie für den Elektromotor bereit oder lädt die Batterie. So wird die Reichweitenbeschränkung eines herkömmlichen Hybrid- oder Plug-in-Hybrid-Fahrzeugs überwunden.",
      "Die Fragen rund um das Aufladen und der Reichweite der Lithium-Ionen-Batterien sind komplex und multifaktoriell. Sie drehen sich im Wesentlichen um das unterschiedliche Fahrverhalten, die elektrochemische Spezifikation und die Ladespannung. Generell gilt:\n\nDie Batterien von wiederaufladbaren Fahrzeugen haben eine 7 bis 13 mal höhere Ladekapazität als bei der konventionellen Hybridisierung\nIhr Einsatz im „vollelektrischen“ Modus überschreitet kaum die Strecke von 40 km im realen Fahrbetrieb;\nSie reduzieren den Verbrauch fossiler Brennstoffe, die Treibhausgas-Emissionen und die Geräusche des Verbrennungsmotors auf kurzen Strecken erheblich;\nDie Ladespannung (von einer Ladestation oder dem Stromnetz) beeinflusst direkt die Ladezyklen und die Ladekosten.",
      "Wie bei Modellen mit Verbrenner hängt die Umwandlung der kinetischen Energie eines Plug-in-Fahrzeugs von den physikalischen Faktoren  wie Masse, Aerodynamik, Strassenzustand, Aussentemperatur usw. denen es ausgesetzt ist. Das ist zu vergleichen mit dem Besteigen des Matterhorns oder einem Spaziergang am Bodensee, die  nicht mit der gleichen körperlichen „Anstrengung“ verbunden sind. Der Verbrauch des Fahrzeugs ist abhängig von dieser “Anstrengung” und beeinflusst somit direkt die Reichweite der Batterie. Die vom TCS 2016 durchgeführten Tests unter realen Strassenbedingungen zeigen einige interessante Grössenordnungen: Für alle analysierten Modelle schwanken die Verbrauchswerte im vollelektrischen Modus zwischen 11,6 und 15,1 kWh/Stunde für eine maximale Entfernung, die sich zwischen 40 und 43 km bei 20 Grad Celsius erstreckt. Die folgende Abbildung illustriert die Optimierung der Energiequellen während der Fahrt:",
      "Die Studie zeigt auf, dass sobald die maximale Leistung der Batterie erschöpft ist, diese aufhört den Elektromotor anzutreiben und ihr Verbrenner-Gegenstück schnell bis zur vollen Unterstützung des Antriebs angefordert wird. Weiter kommt die Studie zum Schluss, dass der Parallel-Hybrid in erster Linie bei kurzen Distanzen einen Nutzen bringt, dieser sich aber schnell verringert, sobald der Verbrenner Modus aktiviert ist.",
      "Bei Plug-in-Hybrid-Modellen sind zwei Lademethoden möglich. Die erste besteht darin, das Fahrzeug an eine einfache Haushaltssteckdose anzuschliessen, die andere über eine dedizierte Wallbox-Wandverbindung. Der Unterschied liegt in der abgegebenen Ladeleistung, diese beeinflusst die Ladezeit und die Reichweite des Lithium-Ionen-Akkus. Bei einem Anschluss an das Hausnetz dauert die Ladezeit mehr als 6 Stunden, da die Kapazität des Netzteils in der Regel nicht mehr als 2 kW beträgt. Aus diesem Grund werden Installationen (Wallbox) mit höherer Ladeleistung verwendet. Hier sind einige Werte, die das Verhältnis zwischen der Ladeleistung des Netzteils und der elektrischen Reichweite für zwei beliebte Fahrzeugsegmente veranschaulichen:",
      "Um die volle Ladezeit für einen PHEV (oder für jedes andere BEV-Fahrzeug) zu berechnen, genügt es, seine Speicherkapazität (gemessen in kWh) zu nehmen und durch die Leistung des Netzteils (ausgedrückt in kW) zu dividieren. Um mehr zu erfahren, laden Sie unsere Übersicht über die elektrische Leistung nach Modell herunter.",
      "In der Schweiz sind Privatautos für fast einen Viertel der CO2-Emissionen verantwortlich. Die Berechnungsmethoden der Automobilbranche einerseits und der Regulierungsbehörden andererseits sind unterschiedlich. Die Daten, die im realen Fahrbetrieb beobachtet werden, scheinen eine völlig andere Geschichte zu erzählen als die, diejenige der Laborprotokolle. Dies insbesondere seit der Einführung des WLTP-Standards von 2017, der von allen Mitgliedstaaten der Europäischen Union und der Schweiz verabschiedet wurde. Doch während die neuen Standards eine faktenbasiertere Realität der Treibhausgasemissionen pro Fahrzeug schaffen, gibt es derzeit keine eigene Modellierung für die Plug-in-Hybridflotte unter Berücksichtigung des gesamten Lebenszyklus der Fahrzeuge auf Landesebene.\n\nÜbersicht der wichtigsten Standards:\n\nDie NEDC Norm (New European Driving Cycle) regelt Laborprüfungen und ist seit 1992 in Kraft.\nDer WLTP-Standard (Worldwide harmonized Light vehicles Test Procedures) seit 2017 angewandt, ist ein Zulassungsprozedere mit doppelt so vielen Phasen und einer höheren Höchstgeschwindigkeit als der NEDC.\nDer RDE-Standard (Real Driving Emission) ist ein realer Test auf der Strasse, im Gegensatz zum WLPT.\n\nDerzeit gibt es in der Schweiz keine Auswertung über die Auswirkung der Hybrid-Fahrzeuge auf die Treibhausgas-Emissionen. Eine in den USA durchgeführte Studie gibt einen Überblick über die Verteilung der CO2-Emissionen nach Kategorien und Energiemix-Szenarien:",
      "Diese US-Studie zeigt, dass Treibhausgas-Emissionsreduktion mit PHEVs direkt vom Kohlendioxidgehalt des lokalen Energiemixes abhängig ist. Sie errechnet eine mögliche Emissionsreduktion von 32 % im Vergleich zu konventionellen Fahrzeugen und stellt gleichzeitig einen vernachlässigbaren Unterschied fest zu anderen Hybridisierungsarten. Die Studie bestätigt die signifikante Gewichtung der Treibhausgas-Emissionen, die mit der Herstellung von Lithium-Ionen-Batterien verbunden sind. Sie allein würden 2 bis 5% der Emissionen während des Lebenszyklus von PHEVs verursachen.",
      "Die Betriebskosten eines Hybridmodells sind komplex zu ermitteln. Einige davon werden durch ähnliche Faktoren wie bei konventionellen Fahrzeugen beeinflusst (Anschaffungspreis, Rabatte, Wartungskosten, Kilometerleistung usw.), andere hängen mit der Optimierung der verschiedenen Antriebsarchitekturen zusammen. Die Analyse, die das Expertenteam auf dem 26. International Symposium on Electric Vehicles (EVS26) im Jahr 2020 präsentiert hat, favorisiert Plug-in-Hybrid-Modelle. Der Bericht kommt zum Schluss: „… Durch den Vergleich verschiedener jährlicher Kilometerdaten scheinen Plug-in-Hybridfahrzeuge für eine Vielzahl von Kunden eine günstige Option zu sein.“ Die folgende Grafik veranschaulicht diese Aussage:\n\n\nDie Analysten aggregieren alle Kosten, die während des Lebenszyklus eines Verbrennungsfahrzeugs anfallen und vergleichen sie mit den Ergebnissen der alternativen Antriebe. Dieser Vergleich zeigt den steigenden Kaufpreises in Abhängigkeit des Elektrifizierungsgrads – hauptsächlich aufgrund der hohen Batteriekosten, die allein einen Drittel der Gesamtproduktionskosten ausmachen. Diese Kosten werden jedoch durch den Betrieb der elektrifizierten Antriebskette ausgeglichen. Dies gilt insbesondere für die Kosten der Endenergie[1], die in diesem Fall um bis zu 69% gesenkt werden können. Hinzu kommen die geringeren Kosten für Service und Wartung des Elektrofahrzeugs, das beispielsweise keinen Motorölwechsel erfordert und dessen Kosten für Bremsen durch die Energierückgewinnung teilweise kompensiert werden.",
      "Hybrid- und Plug-in-Hybridmodelle werden von den Herstellern systematisch als Elektrofahrzeuge eingestuft, unabhängig vom tatsächlichen elektrischen Anteil des Antriebs. Einige mögen hier eine rhetorische Verrenkung der Automobilindustrie angesichts der Gesetze der Physik sehen, da im Falle eines MHEV beispielsweise der grösste Teil der Energie aus der Verbrennung von Kohlenwasserstoffen resultiert.\n\nDas bestätigt auch die 2020 erstellte Comparative Study of the Carbon Impact of the Vehicle Supply des französischen Think Tanks The Shift Project, die sich für eine Dekarbonisierung der Wirtschaft einsetzt: „Ohne die Batterie nach einer bestimmten zurückgelegten Strecke aufzuladen, ist es als wäre das Plug-in-Hybridauto ein Auto, das nur fossile Brennstoffe verwendet.“\n\nAuch wenn die Betriebskosten für Plug-in-Elektrofahrzeuge sprechen, müssen unbedingt Mechanismen für die Incentivierung der Nutzer geschaffen werden, die ein regelmäßiges Aufladen und eine maximale Auslastung der Batterien fördern. Steuerliche Anreize für den Stromverbrauch und die Besteuerung der Verwendung fossiler Brennstoffe in Unternehmen, die PHEVs besitzen, sind nur einige Beispiele. Es steht jetzt enorm viel auf dem Spiel, wenn die Auflagen zur Reduktion der Treibhausgasemissionen erfüllt werden sollen, die im revidierten Energiegesetz vom Mai 2017 festgelegt wurden.",
      "Navigas mobility ist ein Startup, das sich auf Abo- und Mietmodelle für Privat- und Geschäftskunden spezialisiert hat. Dank unserem starken Partnernetzwerk können wir Lösungen für Ihre Flotte von der Beratung, über die Projektierung bis zur Realisierung von Mobilitätskonzepten anbieten.",
    ],
    images: [
      {
        src: "/images/image77.jpg",
        alt: "Titelbild",
        className: "w-full mb-8 md:mb-[56px]",
      },
    ],
  },
};

const BlogsInfo = () => {
  const { blogId } = useParams();
  const content = blogContent[blogId];

  if (!content) {
    return (
      <div className="text-black container mx-auto text-center text-2xl py-100">
        Blog-Inhalt nicht gefunden.
      </div>
    );
  }

  return (
    <div>
      <ScrollToTop />
      <BlogsId
        headings={content.headings}
        data={content.data}
        paragraph={content.paragraph}
        images={content.images}
      />
      <BerichteShuffle />
      <Subscribe />
    </div>
  );
};

export default BlogsInfo;
