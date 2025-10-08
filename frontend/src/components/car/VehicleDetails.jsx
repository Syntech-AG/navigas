import { Fragment } from "react";
import Accordion from "./Accordion";

const cx = (...c) => c.filter(Boolean).join(" ");

function InfoPill({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-blue-100 pl-12 py-5 ring-1 ring-inset ring-blue-100">
      <div className="grid h-9 w-9 place-items-center rounded-full bg-blue-50 text-blue-700">
        {icon}
      </div>
      <div className="min-w-0 ml-4">
        <div className="text-[#050B20] text-[20px] font-semibold mb-2">
          {label}
        </div>
        <div className="text-[#050B20] text-[16px] font-regular">{value}</div>
      </div>
    </div>
  );
}

export default function VehicleDetails({
  info = [
    {
      icon: <img src="/images/fahrzeug1.svg" alt="" />,
      label: "Schaltung",
      value: "automatik",
    },
    {
      icon: <img src="/images/fahrzeug2.svg" alt="" />,
      label: "Reichweite",
      value: "596km",
    },
    // {
    //   icon: <img src="/images/fahrzeug3.svg" alt="" />,
    //   label: "Kraftstoff",
    //   value: "Elektrisch",
    // },
    {
      icon: <img src="/images/fahrzeug4.svg" alt="" />,
      label: "Year",
      value: "2023",
    },
    // {
    //   icon: <img src="/images/fahrzeug5.svg" alt="" />,
    //   label: "CO2 category",
    //   value: "A",
    // },
    {
      icon: <img src="/images/fahrzeug6.svg" alt="" />,
      label: "Sitze",
      value: "5",
    },
    {
      icon: <img src="/images/fahrzeug7.svg" alt="" />,
      label: "Türen",
      value: "4",
    },
    {
      icon: <img src="/images/fahrzeug8.svg" alt="" />,
      label: "Taschen",
      value: "2",
    },
  ],
  description = `Der Polestar 2 Long Range Dual Motor ist ein Allradantrieb-Elektrofahrzeug, das für seine Leistung und Reichweite bekannt ist. Er verfügt über einen 78 kWh Akku, der 400 kW (536 PS) und 740 Nm Drehmoment erzeugt, was eine Beschleunigung von 0-100 km/h in 3,7 Sekunden ermöglicht. Er hat eine reale Reichweite von etwa 240 Meilen und eine WLTP-Reichweite von bis zu 370 Meilen. Das Auto bietet auch Funktionen wie das Fahren mit einem Pedal mit einstellbarem Rekuperationssystem und optionale Performance-Pakete mit Upgrades wie Öhlins-Dämpfer und Brembo-Bremsen.`,
  services = [
    {
      icon: <span aria-hidden>🛡️</span>,
      title: "Versicherung & Garanzie",
      items: [],
    },
    { icon: <span aria-hidden>🧾</span>, title: "Fahrzeugsteuer", items: [] },
    { icon: <span aria-hidden>🚗</span>, title: "Ersatzfahrzeug", items: [] },
    { icon: <span aria-hidden>📝</span>, title: "Zulassung", items: [] },
    {
      icon: <span aria-hidden>🛠️</span>,
      title: "Wartung & Reparaturen",
      items: [],
    },
    { icon: <span aria-hidden>🆘</span>, title: "Assistance", items: [] },
    { icon: <span aria-hidden>💳</span>, title: "Finanzierung", items: [] },
  ],
}) {
  return (
    <section className="container flex flex-col gap-20 md:py-30 py-15">
      <div>
        <div className="bg-[#F3F5FA] px-7 py-7">
          <h2 className="md:text-[24px] text-[20px] font-medium text-[#848B9A]">
            Fahrzeug Informationen
          </h2>
        </div>
        <div className="lg:mt-10 mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {info.map((it, i) => (
            <InfoPill
              key={i}
              icon={it.icon}
              label={it.label}
              value={it.value}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="bg-[#F3F5FA] px-7 py-7">
          <h2 className="md:text-[24px] text-[20px] font-medium text-[#848B9A]">
            Beschreibung
          </h2>
        </div>
        <p className="mt-8 text-[14px] lg:max-w-[95%] lg:mx-auto leading-[2.2] text-black">
          {description}
        </p>
      </div>
      <div>
        <div className="bg-[#F3F5FA] px-7 py-7">
          <h2 className="md:text-[24px] text-[20px] font-medium text-[#848B9A]">
            Services inklusive
          </h2>
        </div>

        <Accordion />
      </div>
    </section>
  );
}
