import { useState } from "react";
import HomeStart from "../components/home/HomeStart";
import LogoSlider from "../components/home/LogoSlider";
import HoverCategories from "../components/home/HoverCategories";
import Auto from "../components/home/Auto";
import CarList from "../components/general/CarList";
import ServicesType from "../components/home/ServicesType";
import ScrollAnimation from "../components/home/ScrollAnimation";

function Home() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleUploadSuccess = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="">
      <HomeStart />
      <LogoSlider />
      <hr className="w-full h-[1px] text-[#d2d0d0]" />
      <HoverCategories />
      <Auto />
      <ServicesType />
      <ScrollAnimation />
      <ServicesType />

      {/* <ExcelUploader onUploadSuccess={handleUploadSuccess} /> */}

      {/* <button
        onClick={() => setRefreshTrigger((prev) => prev + 1)}
        className="bg-gray-500 text-white px-4 py-2 rounded mb-4"
      >
        Refresh List
      </button> */}

      <CarList refreshTrigger={refreshTrigger} />
    </div>
  );
}

export default Home;
