import React from "react";
import PolestarCard from "../components/car/PolestarCard";
import VehicleDetails from "../components/car/VehicleDetails";

const CarInfo = () => {
  return (
    <div className="pt-50">
      <PolestarCard
        images={[
          { src: "/images/homeBg.png", alt: "Front 3/4" },
          { src: "/images/Gradient.png", alt: "Front" },
          { src: "/images/aboutStart.png", alt: "Rear" },
        ]}
        onSelect={(state) => console.log(state)}
      />
      <VehicleDetails />
    </div>
  );
};

export default CarInfo;
