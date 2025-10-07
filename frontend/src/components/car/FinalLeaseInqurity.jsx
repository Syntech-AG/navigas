import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FinalLeaseInquiry = ({ car }) => {
  const navigate = useNavigate();
  const [currentStep] = useState(3);

  const steps = [
    { label: "Fahrzeug wählen" },
    { label: "Anfrage senden" },
    { label: "Lieferung" },
  ];

  useEffect(() => {
    if (!car) {
      console.warn("No car data provided, redirecting to home");
      navigate("/", { replace: true });
    }
  }, [car, navigate]);

  if (!car) {
    return (
      <div className="container mx-auto pt-50 text-center py-20">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  const vehicles = [
    {
      id: car.id || 1,
      name: car.name || "Fahrzeug",
      image: car.image || "/images/Image.png",
      kmPerYear: car.kmPerYear || "0 km",
      duration: car.duration || "0 Monate",
      price: car.price || "0 CHF",
    },
  ];

  return (
    <div className="py-30 container mx-auto px-4">
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
                <div className="flex flex-col items-center min-w-[80px] sm:min-w-[100px] lg:min-w-[120px]">
                  <div
                    className={
                      isCompleted
                        ? "bg-blue-600 text-white w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center"
                        : isActive
                        ? "bg-blue-900 text-white w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center"
                        : "bg-gray-100 text-gray-400 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center"
                    }
                  >
                    {isCompleted ? (
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
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
                      <span className="font-semibold text-base sm:text-lg">
                        {idx + 1}
                      </span>
                    )}
                  </div>
                  <span
                    className={
                      isCompleted
                        ? "mt-2 text-[10px] sm:text-xs text-blue-600 text-center"
                        : isActive
                        ? "mt-2 text-[10px] sm:text-xs text-black text-center"
                        : "mt-2 text-[10px] sm:text-xs text-gray-400 text-center"
                    }
                  >
                    {step.label}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className="flex-1 border-t border-dashed border-gray-300 mx-1 sm:mx-2"
                    role="presentation"
                  ></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>

      <div className="text-center flex flex-col justify-between items-center gap-[15px] sm:gap-[20px] px-4">
        <img
          src="/images/button.svg"
          alt=""
          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-auto lg:h-auto"
        />
        <h1 className="text-[#010101] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold">
          Buchung erfolgreich!
        </h1>
        <p className="text-[#474747] text-[12px] sm:text-[13px] leading-6 sm:leading-8 max-w-3xl">
          Vielen Dank – Ihre Buchung war erfolgreich.{" "}
          <br className="hidden sm:block" />
          Sie erhalten in Kürze eine E-Mail mit allen wichtigen Informationen,
          Ihrem Vertrag sowie den nächsten Schritten.{" "}
          <br className="hidden sm:block" /> Sollten Sie Fragen haben, steht
          Ihnen unser Team jederzeit gerne zur Verfügung.{" "}
          <br className="hidden sm:block" /> 👉 Wir wünschen Ihnen schon jetzt
          viel Freude mit Ihrem neuen Auto!
        </p>
      </div>

      {vehicles.map((vehicle) => (
        <div
          key={vehicle.id}
          className="flex flex-col lg:flex-row items-center border-[#DADEE8] border-t lg:border-b justify-center gap-6 sm:gap-8 lg:gap-10 py-[20px] sm:py-[25px] lg:py-[30px] mt-10 sm:mt-15 lg:mt-20"
        >
          <div className="w-full max-w-md lg:w-auto">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-auto"
              onError={(e) => {
                console.log("Image failed to load:", e.target.src);
                e.target.src = "/images/car.png";
              }}
            />
          </div>

          <div className="flex flex-col items-start justify-start w-full lg:w-1/3 px-4 lg:px-0">
            <div className="py-[20px] sm:py-[25px] lg:py-[30px]">
              <h1 className="text-[#010101] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold">
                {vehicle.name}
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full py-[20px] sm:py-[25px] lg:py-[30px] border-[#DADEE8] border-t border-b gap-4 sm:gap-0">
              <div className="w-full sm:w-auto">
                <h1 className="text-[#BAC0D3] text-[12px] sm:text-[13px] lg:text-[14px] tracking-wide">
                  Km / Jahr:
                </h1>
                <h1 className="text-[#010101] text-[18px] sm:text-[20px] lg:text-[22px] font-semibold">
                  {vehicle.kmPerYear}
                </h1>
              </div>
              <div className="w-full sm:w-auto">
                <h1 className="text-[#BAC0D3] text-[12px] sm:text-[13px] lg:text-[14px] tracking-wide">
                  Laufzeit:
                </h1>
                <h1 className="text-[#010101] text-[18px] sm:text-[20px] lg:text-[22px] font-semibold">
                  {vehicle.duration}
                </h1>
              </div>
              <div className="w-full sm:w-auto">
                <h1 className="text-[#BAC0D3] text-[12px] sm:text-[13px] lg:text-[14px] tracking-wide">
                  Price
                </h1>
                <h1 className="text-[#010101] text-[18px] sm:text-[20px] lg:text-[22px] font-semibold">
                  {vehicle.price}
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FinalLeaseInquiry;
