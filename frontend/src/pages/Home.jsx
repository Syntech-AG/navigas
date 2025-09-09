import { useState } from "react";
import CarList from "../components/CarList";
import HomeStart from "../components/HomeSTart";

function Home() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleUploadSuccess = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="">
      <HomeStart />

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
