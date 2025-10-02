import React from "react";
import LeaseInquiry from "../components/car/LeaseInquiry";

const ReserveCar = () => {
  return (
    <div className="md:py-30 py-20">
      <LeaseInquiry
        car={{
          name: "Polestar 2",
          img: "/images/car.png",
          kmPerYear: 5000,
          termMonths: 48,
          price: 67,
        }}
      />
    </div>
  );
};

export default ReserveCar;
