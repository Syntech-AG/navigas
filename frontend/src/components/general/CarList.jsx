import React, { useState, useEffect } from "react";
import axios from "axios";

const PAGE_SIZE = 9;

const CarList = ({ refreshTrigger }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const fetchCars = async (pageToFetch = page) => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:1337/api/cars", {
        params: {
          "pagination[page]": pageToFetch,
          "pagination[pageSize]": PAGE_SIZE,
          "sort[0]": "updatedAt:desc",
          // populate: "image",
        },
      });

      setCars(data.data);
      setPageCount(data.meta.pagination.pageCount);
    } catch (err) {
      console.error("Failed to fetch cars:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(1);
    fetchCars(1);
  }, [refreshTrigger]);

  useEffect(() => {
    fetchCars(page);
  }, [page]);

  if (loading) {
    return <div>Loading cars...</div>;
  }

  const goToPrevious = () => setPage((p) => Math.max(1, p - 1));
  const goToNext = () => setPage((p) => Math.min(pageCount, p + 1));

  console.log(cars);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
        }}
      >
        {cars.map((car) => (
          <div
            className="p-4"
            key={car.id}
            style={{
              backgroundColor: "#0A1424",
              borderRadius: 8,
              overflow: "hidden",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${car.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: 160,
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  backgroundColor: "rgba(0,0,0,0.6)",
                  padding: "4px 8px",
                  borderRadius: 4,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              ></div>
            </div>

            <div style={{ padding: 12, flexGrow: 1 }}>
              <div style={{ marginBottom: 8 }}>
                <div style={{ fontSize: 16, fontWeight: "bold" }}>
                  {car.marke} {car.modell}
                </div>
                <div style={{ fontSize: 12, opacity: 0.75 }}>
                  {car.schaltung}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 12,
                  opacity: 0.75,
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <p>{car.leistung} PS</p>
                  <img src="/psIcon.svg" alt="" />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p>{car.kraftstoff}</p> <img src="/pumpIcon.svg" alt="" />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p>{car.verbrauch} L/100km </p>
                  <img src="/typeIcon.svg" alt="" />
                </div>
                {/* <div>CO₂ {car.co2kategorie}</div>
                <div>MWST {car.mwst}%</div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="pt-10"
        style={{ display: "flex", alignItems: "center", marginBottom: 16 }}
      >
        <button
          className="bg-black text-white rounded-lg"
          onClick={goToPrevious}
          disabled={page === 1}
          style={{
            padding: "8px 12px",
            marginRight: 8,
            cursor: page === 1 ? "not-allowed" : "pointer",
          }}
        >
          Previous
        </button>
        <span style={{ marginRight: 8 }}>
          Page {page} of {pageCount}
        </span>
        <button
          className="bg-black text-white rounded-lg"
          onClick={goToNext}
          disabled={page === pageCount}
          style={{
            padding: "8px 12px",
            cursor: page === pageCount ? "not-allowed" : "pointer",
          }}
        >
          Next
        </button>
        <button
          onClick={() => fetchCars(page)}
          style={{
            marginLeft: "auto",
            padding: "8px 12px",
            backgroundColor: "#1F3F56",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default CarList;
