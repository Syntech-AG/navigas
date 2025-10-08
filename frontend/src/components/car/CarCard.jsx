import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const CarCard = memo(function CarCard({ car }) {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/api/cars/${car.documentId}`);
  }, [navigate, car.documentId]);

  const handleImageError = useCallback((e) => {
    e.target.src = "/images/car.png";
  }, []);

  return (
    <div className="p-2 cursor-pointer" onClick={handleClick}>
      <div className="bg-[#0A1424] w-full rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src={car.imageUrl}
            alt={`${car.marke} ${car.modell}`}
            loading="lazy"
            decoding="async"
            onError={handleImageError}
          />
          <div className="absolute w-[90%] bottom-5 flex flex-row translate-x-[-50%] left-1/2 justify-start gap-1 items-end">
            <h1 className="text-[24px] text-white font-medium tracking-[2px]">
              {car.preis}
            </h1>
            <p className="text-[10px] text-white">
              pro Monat <br /> inkl. MwSt.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[90%] mx-auto py-5 border-b border-b-[#152032]">
          <h1 className="text-[20px] text-white font-medium truncate">
            {car.marke} {car.modell}
          </h1>
          <h1 className="text-[#C0C0C1] text-[14px] font-regular">
            {car.Getriebe}
          </h1>
        </div>
        <div className="flex flex-row justify-between w-[80%] mx-auto py-5">
          <div className="flex flex-col-reverse items-center gap-2">
            <p className="text-[#C0C0C1] text-[12px] font-regular">
              {car.leistung} PS
            </p>
            <img src="/images/psIcon.svg" alt="" />
          </div>
          <div className="flex flex-col-reverse items-center gap-2">
            <p className="text-[#C0C0C1] text-[12px] font-regular">
              {car.Treibstoff}
            </p>
            <img src="/images/pumpIcon.svg" alt="" />
          </div>
          <div className="flex flex-col-reverse items-center gap-2">
            <p className="text-[#C0C0C1] text-[12px] font-regular">
              {car.verbrauch} L/100km
            </p>
            <img src="/images/typeIcon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
});
