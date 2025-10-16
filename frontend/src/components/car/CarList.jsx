import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { CarCard } from "./CarCard";
import { fetchCars } from "./carService";
import { useDebounce } from "./useDebounce";
import { PRICING_TYPE } from "./Constans";

export const CarList = ({ filters, pricingType = PRICING_TYPE.NORMAL }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const inflightRef = useRef(null);
  const debouncedAutoname = useDebounce(filters.autoname || "", 500);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);

    setTimeout(() => {
      window.scrollTo({
        top: 500,
        behavior: "smooth",
      });
    }, 100);
  };

  const loadCars = useCallback(async (pageNum, currentFilters, type) => {
    if (inflightRef.current) inflightRef.current.abort();
    const controller = new AbortController();
    inflightRef.current = controller;

    setLoading(true);
    try {
      const { cars: fetched, pageCount: count } = await fetchCars(
        pageNum,
        currentFilters,
        controller.signal,
        type
      );
      setCars(fetched);
      setPageCount(count);
    } catch (e) {
      if (!controller.signal.aborted) {
        console.error("Failed to fetch cars:", e);
        setCars([]);
        setPageCount(1);
      }
    } finally {
      if (inflightRef.current === controller) inflightRef.current = null;
      setLoading(false);
    }
  }, []);

  const deps = useMemo(
    () => [
      filters.fahrzeugart,
      filters.treibstoff,
      filters.getriebe,
      debouncedAutoname,
      pricingType,
    ],
    [
      filters.fahrzeugart,
      filters.treibstoff,
      filters.getriebe,
      debouncedAutoname,
      pricingType,
    ]
  );

  useEffect(() => setPage(1), deps);

  useEffect(() => {
    const current = { ...filters, autoname: debouncedAutoname };
    loadCars(page, current, pricingType);
    return () => inflightRef.current?.abort();
  }, [page, ...deps, loadCars]);

  if (loading) return <div className="text-center py-10">Autos laden...</div>;
  if (!cars.length)
    return (
      <div className="text-center py-10 text-gray-500">
        Es wurden keine Fahrzeuge gefunden, die Ihren Kriterien entsprechen.
      </div>
    );

  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 -m-2">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} pricingType={pricingType} />
        ))}
      </div>
      {pageCount > 1 && (
        <div className="pt-10 flex justify-center items-center gap-2">
          <div className="flex flex-start w-full gap-2">
            {Array.from({ length: pageCount }, (_, i) => i + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                    page === pageNumber
                      ? "bg-[#0A1424] text-white"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {pageNumber}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};
