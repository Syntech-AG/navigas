import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LeaseInquiry from "../components/car/LeaseInquiry";

const ReserveCar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get car data from navigation state
  const carData = location.state?.car;

  // Redirect if no car data provided
  React.useEffect(() => {
    if (!carData) {
      console.warn("No car data provided, redirecting to home");
      navigate("/", { replace: true });
    }
  }, [carData, navigate]);

  // Show loading state while checking for data
  if (!carData) {
    return (
      <div className="container mx-auto pt-50 text-center py-20">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  console.log(carData);

  return (
    <div className="md:py-30 py-20">
      <LeaseInquiry car={carData} />
    </div>
  );
};

export default ReserveCar;
