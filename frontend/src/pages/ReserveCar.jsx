import React, { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LeaseInquiry from "../components/car/LeaseInquiry";
import FinalLeaseInquiry from "../components/car/FinalLeaseInqurity";
import Abonnieren from "../components/general/Abonnieren";
import Nachrichten from "../components/about/Nachrichten";

const ReserveCar = ({ isFinal = false }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const carData = useMemo(() => location.state?.car, [location.state?.car]);

  useEffect(() => {
    if (!carData) {
      console.warn("No car data provided, redirecting to home");
      navigate("/", { replace: true });
    }
  }, [carData, navigate]);

  if (!carData) {
    return (
      <div className="container mx-auto pt-50 text-center py-20">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  const LeaseComponent = isFinal ? FinalLeaseInquiry : LeaseInquiry;

  return (
    <div className="md:pt-30 pt-20">
      <LeaseComponent car={carData} />
      <Abonnieren />
      <Nachrichten />
    </div>
  );
};

export default ReserveCar;
