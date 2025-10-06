import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LeaseInquiry from "../components/car/LeaseInquiry";

const ReserveCar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const carData = location.state?.car;

  useEffect(() => {
    console.log("ReserveCar received location.state:", location.state);
    console.log("ReserveCar carData:", carData);
    console.log("ReserveCar carData.finalPrice:", carData?.finalPrice);

    if (!carData) {
      console.warn("No car data provided, redirecting to home");
      navigate("/", { replace: true });
    }
  }, [carData, navigate, location.state]);

  if (!carData) {
    return (
      <div className="container mx-auto pt-50 text-center py-20">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="md:py-30 py-20">
      <LeaseInquiry car={carData} />
    </div>
  );
};

export default ReserveCar;
