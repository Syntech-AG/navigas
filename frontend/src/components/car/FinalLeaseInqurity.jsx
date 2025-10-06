import React, { useState } from "react";

const FinalLeaseInquiry = () => {
  const steps = [
    { label: "Fahrzeug wählen" },
    { label: "Anfrage senden" },
    { label: "Lieferung" },
  ];

  const [currentStep] = useState(3);

  return (
    <div className="py-30 container mx-auto">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-12 lg:py-16">
        <div
          className="flex items-center justify-center w-full py-6"
          aria-label="Progress"
        >
          {steps.map((step, idx) => {
            const isCompleted = idx + 1 < currentStep;
            const isActive = idx + 1 === currentStep;

            return (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center min-w-[120px]">
                  <div
                    className={
                      isCompleted
                        ? "bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center"
                        : isActive
                        ? "bg-blue-900 text-white w-10 h-10 rounded-xl flex items-center justify-center"
                        : "bg-gray-100 text-gray-400 w-10 h-10 rounded-xl flex items-center justify-center"
                    }
                  >
                    {isCompleted ? (
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 10l4 4 6-6"
                          stroke="white"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <span className="font-semibold text-lg">{idx + 1}</span>
                    )}
                  </div>
                  <span
                    className={
                      isCompleted
                        ? "mt-2 text-xs text-blue-600"
                        : isActive
                        ? "mt-2 text-xs text-black"
                        : "mt-2 text-xs text-gray-400"
                    }
                  >
                    {step.label}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className="flex-1 border-t border-dashed border-gray-300 mx-2"
                    role="presentation"
                  ></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>
      <div className="text-center flex flex-col justify-between items-center gap-[20px]">
        <img src="/images/button.svg" alt="" />
        <h1 className="text-[#010101] text-[32px] font-semibold">
          Buchung erfolgreich!
        </h1>
        <p className=" text-[#474747] text-[13px] leading-8">
          Vielen Dank – Ihre Buchung war erfolgreich. <br />
          Sie erhalten in Kürze eine E-Mail mit allen wichtigen Informationen,
          Ihrem Vertrag sowie den nächsten Schritten. <br /> Sollten Sie Fragen
          haben, steht Ihnen unser Team jederzeit gerne zur Verfügung. <br /> 👉
          Wir wünschen Ihnen schon jetzt viel Freude mit Ihrem neuen Auto!
        </p>
      </div>
      <div className="flex flex-row items-center border-[#DADEE8] border-t border-b justify-center gap-10 py-[30px] mt-20">
        <div>
          <img src="/images/Image.png" alt="" />
        </div>
        <div className="flex flex-col items-start justify-start w-1/3 ">
          <div className="py-[30px]">
            <h1 className="text-[#010101] text-[32px] font-semibold">
              Polestar 2 
            </h1>
          </div>
          <div className="flex flex-row items-center justify-between w-full py-[30px] border-[#DADEE8] border-t border-b">
            <div>
              <h1 className="text-[#BAC0D3] text-[14px] tracking-wide">
                Km / Jahr:
              </h1>
              <h1 className="text-[#010101] text-[22px] font-semibold">
                5'000 km
              </h1>
            </div>
            <div>
              <h1 className="text-[#BAC0D3] text-[14px] tracking-wide">
                Laufzeit:
              </h1>
              <h1 className="text-[#010101] text-[22px] font-semibold">
                48 Monate
              </h1>
            </div>
            <div>
              <h1 className="text-[#BAC0D3] text-[14px] tracking-wide">
                Price
              </h1>
              <h1 className="text-[#010101] text-[22px] font-semibold">
                599 CHF
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalLeaseInquiry;
