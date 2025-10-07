import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LeaseInquiry from "../components/car/LeaseInquiry";
import Abonnieren from "../components/general/Abonnieren";
import Nachrichten from "../components/about/Nachrichten";

const ReserveCar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const carData = location.state?.car;

  useEffect(() => {
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
    <div className="md:pt-30 pt-20">
      <LeaseInquiry car={carData} />
      <Abonnieren />
      <Nachrichten />
    </div>
  );
};

export default ReserveCar;
