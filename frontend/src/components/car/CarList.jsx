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

export const CarList = ({ filters }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const inflightRef = useRef(null);
  const debouncedAutoname = useDebounce(filters?.autoname || "", 500);

  const loadCars = useCallback(async (pageToFetch, currentFilters) => {
    if (inflightRef.current) {
      inflightRef.current.abort();
    }
    const controller = new AbortController();
    inflightRef.current = controller;

    setLoading(true);
    try {
      const { cars: fetchedCars, pageCount: newPageCount } = await fetchCars(
        pageToFetch,
        currentFilters,
        controller.signal
      );

      setCars(fetchedCars);
      setPageCount(newPageCount);
    } catch (err) {
      if (!controller.signal.aborted) {
        console.error(
          "Failed to fetch cars:",
          err.response?.data || err.message
        );
        setCars([]);
        setPageCount(1);
      }
    } finally {
      if (inflightRef.current === controller) inflightRef.current = null;
      setLoading(false);
    }
  }, []);

  // Memoize filter dependencies
  const filterDeps = useMemo(
    () => [
      filters?.fahrzeugart,
      filters?.treibstoff,
      filters?.getriebe,
      debouncedAutoname,
    ],
    [
      filters?.fahrzeugart,
      filters?.treibstoff,
      filters?.getriebe,
      debouncedAutoname,
    ]
  );

  useEffect(() => {
    setPage(1);
  }, filterDeps);

  useEffect(() => {
    const currentFilters = { ...filters, autoname: debouncedAutoname };
    loadCars(page, currentFilters);

    return () => {
      if (inflightRef.current) inflightRef.current.abort();
    };
  }, [page, ...filterDeps, loadCars]);

  const goToPrevious = useCallback(
    () => setPage((p) => Math.max(1, p - 1)),
    []
  );
  const goToNext = useCallback(
    () => setPage((p) => Math.min(pageCount, p + 1)),
    [pageCount]
  );

  if (loading) {
    return <div className="text-center py-10">Loading cars...</div>;
  }

  if (cars.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No cars found matching your criteria.
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 -m-2">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {pageCount > 1 && (
        <div className="pt-10 flex justify-center items-center gap-4">
          <button
            className="bg-black text-white rounded-lg px-4 py-2 disabled:bg-gray-400"
            onClick={goToPrevious}
            disabled={page === 1}
          >
            Previous
          </button>
          <span>
            Page {page} of {pageCount}
          </span>
          <button
            className="bg-black text-white rounded-lg px-4 py-2 disabled:bg-gray-400"
            onClick={goToNext}
            disabled={page === pageCount}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
