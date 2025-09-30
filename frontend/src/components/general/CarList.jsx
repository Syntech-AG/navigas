import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import axios from "axios";
import qs from "qs";

const API_BASE = "http://localhost:1337";
const PAGE_SIZE = 9;
const Image = "Image";

const toAbsolute = (maybeUrl) =>
  maybeUrl && !maybeUrl.startsWith("http")
    ? `${API_BASE}${maybeUrl}`
    : maybeUrl || "";

const getFileAttrs = (f) => (f && f.attributes ? f.attributes : f || {});

const pickBestUrl = (file) => {
  const fa = getFileAttrs(file);
  const fmts = fa.formats || {};
  const url =
    fmts.thumbnail?.url ||
    fmts.small?.url ||
    fmts.medium?.url ||
    fmts.large?.url ||
    fa.url ||
    "";
  return toAbsolute(url);
};

const CarCard = memo(function CarCard({ car }) {
  return (
    <div className="" key={car.id}>
      <div className="bg-[#0A1424] w-fit rounded-xl">
        <div className="relative">
          <img
            className="min-w-[300px] rounded-t-xl"
            src={car.imageUrl}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <div className="absolute w-[90%] bottom-5 flex flex-row translate-x-[-50%] left-1/2 justify-start gap-1 items-end">
            <h1 className="text-[24px] text-white font-medium tracking-[2px]">
              {car.preis}
            </h1>
            <p className="text-[10px] text-white ">
              pro Monat <br /> inkl. MwSt.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[90%] mx-auto py-5 border-b border-b-[#152032]">
          <h1 className="text-[20px] text-white font-medium">
            {car.marke} {car.modell}
          </h1>
          <h1 className="text-[#C0C0C1] text-[14px] font-regular">
            {car.schaltung}
          </h1>
        </div>

        <div className="flex flex-row justify-between w-[80%] mx-auto py-5">
          <div className="flex flex-col-reverse items-center gap-2">
            <p className="text-[#C0C0C1] text-[12px] font-regular">
              {car.leistung} PS
            </p>
            <img src="/images/psIcon.svg" alt="" />
          </div>
          <div className="flex flex-col-reverse items-center gap-2">
            <p className="text-[#C0C0C1] text-[12px] font-regular">
              {car.kraftstoff}
            </p>
            <img src="/images/pumpIcon.svg" alt="" />
          </div>
          <div className="flex flex-col-reverse items-center gap-2">
            <p className="text-[#C0C0C1] text-[12px] font-regular">
              {car.verbrauch} L/100km
            </p>
            <img src="/images/typeIcon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
});

const CarList = ({ refreshTrigger }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  console.log(cars);

  const cacheRef = useRef(new Map());
  const inflightRef = useRef(null);

  const normalize = (arr) =>
    (arr || []).map((item) => {
      const attrs = item?.attributes ? item.attributes : item || {};
      const mediaNode = (attrs?.[Image]?.data ?? attrs?.[Image]) || [];
      const files = Array.isArray(mediaNode)
        ? mediaNode
        : mediaNode && typeof mediaNode === "object"
        ? [mediaNode]
        : [];
      const imageUrls = files.map(pickBestUrl);

      return {
        id: item?.documentId || item?.id,
        ...attrs,
        imageUrls,
        imageUrl: imageUrls[0] || "",
      };
    });

  const fetchCars = useCallback(async (pageToFetch, { force = false } = {}) => {
    if (!force && cacheRef.current.has(pageToFetch)) {
      const cached = cacheRef.current.get(pageToFetch);
      setCars(cached.cars);
      setPageCount(cached.pageCount);
      return;
    }

    if (inflightRef.current) {
      inflightRef.current.abort();
    }
    const controller = new AbortController();
    inflightRef.current = controller;

    setLoading(true);
    try {
      const query = qs.stringify(
        {
          pagination: {
            page: pageToFetch,
            pageSize: PAGE_SIZE,
            withCount: true,
          },
          sort: ["updatedAt:desc"],
          fields: [
            "marke",
            "modell",
            "schaltung",
            "leistung",
            "kraftstoff",
            "verbrauch",
            "updatedAt",
            "Autokategorien",
            "Fahrzeugtypen",
            "Spezifikationen",
            "preis",
          ],
          populate: {
            [Image]: {
              fields: ["url", "formats"],
            },
          },
        },
        { encodeValuesOnly: true }
      );

      const { data } = await axios.get(`${API_BASE}/api/cars?${query}`, {
        signal: controller.signal,
      });

      const normalized = normalize(data?.data);
      const nextPageCount = data?.meta?.pagination?.pageCount || 1;

      cacheRef.current.set(pageToFetch, {
        cars: normalized,
        pageCount: nextPageCount,
      });

      setCars(normalized);
      setPageCount(nextPageCount);
    } catch (err) {
      if (!controller.signal.aborted) {
        console.error("Failed to fetch cars:", err?.response?.data || err);
      }
    } finally {
      if (inflightRef.current === controller) {
        inflightRef.current = null;
      }
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setPage(1);
  }, [refreshTrigger]);

  useEffect(() => {
    fetchCars(page);
    return () => {
      if (inflightRef.current) inflightRef.current.abort();
    };
  }, [page, fetchCars]);

  const goToPrevious = useCallback(
    () => setPage((p) => Math.max(1, p - 1)),
    []
  );
  const goToNext = useCallback(
    () => setPage((p) => Math.min(pageCount, p + 1)),
    [pageCount]
  );

  if (loading) return <div>Loading cars...</div>;

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      <div className="pt-10">
        <button
          className="bg-black text-white rounded-lg"
          onClick={goToPrevious}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>
          {" "}
          Page {page} of {pageCount}{" "}
        </span>
        <button
          className="bg-black text-white rounded-lg"
          onClick={goToNext}
          disabled={page === pageCount}
        >
          Next
        </button>
        <button onClick={() => fetchCars(page, { force: true })}>
          Refresh
        </button>
      </div>
    </div>
  );
};

export default CarList;
