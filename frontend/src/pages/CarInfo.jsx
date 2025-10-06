import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PolestarCard from "../components/car/PolestarCard";
import VehicleDetails from "../components/car/VehicleDetails";
import {
  fetchCarById,
  transformPricingOptions,
} from "../components/car/carService";

const CarInfo = () => {
  const { id: documentId } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCar = async () => {
      try {
        setLoading(true);
        const carData = await fetchCarById(documentId);
        setCar(carData);
      } catch (err) {
        console.error("Failed to fetch car:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCar();
  }, [documentId]);

  const images = useMemo(() => {
    if (!car?.imageUrls || !Array.isArray(car.imageUrls)) return [];

    return car.imageUrls.map((url, idx) => ({
      src: url,
      alt: `${car.marke} ${car.modell} - View ${idx + 1}`,
    }));
  }, [car?.imageUrls, car?.marke, car?.modell]);

  // Transform pricing options from Strapi fields
  const pricingOptions = useMemo(() => {
    return transformPricingOptions(car);
  }, [car]);
  // Handle car selection and navigate with data
  const handleCarSelect = (selection) => {
    navigate("/reserve-car", {
      state: {
        car: {
          name: `${car.marke} ${car.modell}`,
          img: car.imageUrls?.[0] || "/images/car.png",
          kmPerYear: selection.kmPerYear,
          termMonths: selection.termMonths,
          price: parseInt(car.preis) || 749,
          // Include additional car details if needed
          marke: car.marke,
          modell: car.modell,

          imageUrls: car.imageUrls,
        },
      },
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto pt-50 text-center py-20">
        <p className="text-xl">Loading car details...</p>
      </div>
    );
  }

  if (error || !car) {
    return (
      <div className="container mx-auto pt-50 text-center py-20">
        <p className="text-xl text-red-600">Car not found</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="pt-50">
      <PolestarCard
        title={`${car.marke} ${car.modell}`}
        subtitle={car.Fahrzeugart || "Electric Vehicle"}
        images={images}
        basePrice={parseInt(car.preis) || 749}
        kmPricingOptions={pricingOptions.kmOptions}
        termPricingOptions={pricingOptions.termOptions}
        onSelect={(state) => {
          console.log("Selected configuration:", state);
          // Handle booking or redirect to checkout with:
          // - state.kmPerYear
          // - state.termMonths
          // - state.finalPrice
        }}
      />
      <VehicleDetails
        info={[
          {
            icon: <img src="/images/fahrzeug1.svg" alt="" />,
            label: "Schaltung",
            value: car.Getriebe || "N/A",
          },
          {
            icon: <img src="/images/fahrzeug2.svg" alt="" />,
            label: "Reichweite",
            value: car.reichweite || "N/A",
          },
          {
            icon: <img src="/images/fahrzeug4.svg" alt="" />,
            label: "Leistung",
            value: `${car.leistung} PS` || "N/A",
          },
          {
            icon: <img src="/images/fahrzeug6.svg" alt="" />,
            label: "Verbrauch",
            value: `${car.verbrauch} L/100km` || "N/A",
          },
          {
            icon: <img src="/images/fahrzeug7.svg" alt="" />,
            label: "Türen",
            value: car.turen || "N/A",
          },
          {
            icon: <img src="/images/fahrzeug8.svg" alt="" />,
            label: "Treibstoff",
            value: car.Treibstoff || "N/A",
          },
        ]}
        description={`Der ${car.marke} ${car.modell} ist ein ${
          car.Fahrzeugart || "Fahrzeug"
        } mit ${car.Getriebe} Getriebe. Mit einer Leistung von ${
          car.leistung
        } PS und einem Verbrauch von ${
          car.verbrauch
        } L/100km bietet er eine hervorragende Balance zwischen Leistung und Effizienz.`}
      />
    </div>
  );
};

export default CarInfo;
