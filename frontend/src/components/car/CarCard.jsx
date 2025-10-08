import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { PRICING_TYPE } from "./Constans";

export const CarCard = memo(({ car, pricingType = PRICING_TYPE.NORMAL }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/api/cars/${car.documentId}?pricing=${pricingType}`);
  }, [navigate, car.documentId, pricingType]);

  const handleImgError = (e) => (e.target.src = "/images/car.png");

  return (
    <div className="p-2 cursor-pointer" onClick={handleClick}>
      <div className="bg-[#0A1424] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
        <div className="relative">
          <img
            src={car.imageUrl}
            alt={`${car.marke} ${car.modell}`}
            className="w-full h-48 object-cover"
            loading="lazy"
            onError={handleImgError}
          />
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-end gap-1 w-[90%]">
            <h1 className="text-white font-medium text-[24px] tracking-[2px]">
              {car.displayPrice}
            </h1>
            <p className="text-white text-[10px]">
              pro Monat{" "}
              {pricingType === PRICING_TYPE.NORMAL
                ? "exkl. MwSt."
                : "inkl. MwSt."}
            </p>
          </div>
        </div>
        <div className="py-5 border-b border-[#152032] w-[90%] mx-auto flex flex-col gap-2">
          <h1 className="text-white font-medium text-[20px] truncate">
            {car.marke} {car.modell}
          </h1>
          <h1 className="text-[#C0C0C1] text-[14px]">{car.Getriebe}</h1>
        </div>
        <div className="py-5 w-[80%] mx-auto flex justify-between">
          <div className="flex flex-col-reverse items-center gap-2">
            <p className="text-[#C0C0C1] text-[12px]">{car.leistung} PS</p>
            <img src="/images/psIcon.svg" alt="" />
          </div>
          <div className="flex flex-col-reverse items-center gap-2">
            <p className="text-[#C0C0C1] text-[12px]">{car.Treibstoff}</p>
            <img src="/images/pumpIcon.svg" alt="" />
          </div>
          <div className="flex flex-col-reverse items-center gap-2">
            <p className="text-[#C0C0C1] text-[12px]">
              {car.verbrauch} L/100km
            </p>
            <img src="/images/typeIcon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
});
