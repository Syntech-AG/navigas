import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import PolestarCard from "../components/car/PolestarCard";
import VehicleDetails from "../components/car/VehicleDetails";
import {
  fetchCarById,
  transformPricingOptions,
} from "../components/car/carService";
import { PRICING_TYPE } from "../components/car/Constans";
import AboutStart from "../components/about/AboutStart";

const CarInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pricingType = searchParams.get("pricing") || PRICING_TYPE.NORMAL;

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchCarById(id, pricingType);
        setCar(data);
      } catch (e) {
        console.error("Failed to fetch car:", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    if (id) load();
  }, [id, pricingType]);

  const images = useMemo(
    () =>
      car?.imageUrls?.map((url, i) => ({
        src: url,
        alt: `${car.marke} ${car.modell} - View ${i + 1}`,
      })) || [],
    [car]
  );

  const pricingOpts = useMemo(() => transformPricingOptions(car), [car]);

  const handleSelect = useCallback(
    (sel) => {
      const state = {
        name: `${car.marke} ${car.modell}`,
        img: car.imageUrls?.[0] || "/images/car.png",
        kmPerYear: sel.kmPerYear,
        termMonths: sel.termMonths,
        price: car.displayPrice,
        finalPrice: sel.finalPrice,
        marke: car.marke,
        modell: car.modell,
        imageUrls: car.imageUrls,
        pricingType,
      };
      navigate("/reserve-car", { state: { car: state } });
    },
    [car, navigate, pricingType]
  );

  const info = useMemo(
    () => [
      {
        icon: <img src="/images/fahrzeug1.svg" />,
        label: "Schaltung",
        value: car?.Getriebe || "N/A",
      },
      {
        icon: <img src="/images/fahrzeug2.svg" />,
        label: "Reichweite",
        value: car?.reichweite || "N/A",
      },
      {
        icon: <img src="/images/fahrzeug4.svg" />,
        label: "Leistung",
        value: car?.leistung ? `${car.leistung} PS` : "N/A",
      },
      {
        icon: <img src="/images/fahrzeug6.svg" />,
        label: "Verbrauch",
        value: car?.verbrauch ? `${car.verbrauch} L/100km` : "N/A",
      },
      {
        icon: <img src="/images/fahrzeug7.svg" />,
        label: "Türen",
        value: car?.turen || "N/A",
      },
      {
        icon: <img src="/images/fahrzeug8.svg" />,
        label: "Treibstoff",
        value: car?.Treibstoff || "N/A",
      },
    ],
    [car]
  );

  const description = useMemo(
    () =>
      car
        ? `Der ${car.marke} ${car.modell} ist ein ${
            car.Fahrzeugart || "Fahrzeug"
          } mit ${car.Getriebe} Getriebe. Mit einer Leistung von ${
            car.leistung
          } PS und einem Verbrauch von ${car.verbrauch} L/100km.`
        : "",
    [car]
  );

  if (loading)
    return (
      <div className="text-center py-20 text-xl">Loading car details...</div>
    );
  if (error || !car)
    return (
      <div className="text-center py-20 text-xl text-red-600">
        Car not found
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
        >
          Go Back
        </button>
      </div>
    );

  return (
    <div>
      {/* <AboutStart
        src="images/filter.png "
        title="Privatkunden"
        mobileSrc="images/filterMobile.png"
      /> */}
      <div className="pt-50">
        <PolestarCard
          title={`${car.marke} ${car.modell}`}
          subtitle={car.Fahrzeugart || "Electric Vehicle"}
          images={images}
          basePrice={car.displayPrice}
          kmPricingOptions={pricingOpts.kmOptions}
          termPricingOptions={pricingOpts.termOptions}
          carData={car}
          onSelect={handleSelect}
          pricingType={pricingType}
        />
        <VehicleDetails info={info} description={description} />
      </div>
    </div>
  );
};

export default CarInfo;
