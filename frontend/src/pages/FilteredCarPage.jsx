import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import axios from "axios";
import qs from "qs";

const API_BASE = "http://localhost:1337";
const PAGE_SIZE = 9;
const IMAGE_FIELD = "Image"; // must match schema field casing

// --- Custom Hook for Debouncing ---
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

// ##################################################################
// # 1. FILTER PANEL COMPONENT (UI for filtering)
// ##################################################################

const FilterPanel = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false); // For mobile toggle

  // UI options; note that enum values must match schema exactly
  const filterOptions = {
    fahrzeugart: ["Kleinwagen", "Kompakt", "Mittelklasse", "SUV", "Premium"],
    treibstoff: ["Elektrisch", "Hybrid", "Gas"],
    // UI label kept, normalized later: "Allrad (4x4)" -> "Allrad"
    getriebe: ["Automatik", "Handschaltung", "Allrad (4x4)"],
  };

  const handleSearchChange = (e) => {
    setFilters((prev) => ({ ...prev, autoname: e.target.value }));
  };

  const handleCheckboxChange = (category, option) => {
    setFilters((prev) => {
      const currentSelection = prev[category] || [];
      const newSelection = currentSelection.includes(option)
        ? currentSelection.filter((item) => item !== option)
        : [...currentSelection, option];
      return { ...prev, [category]: newSelection };
    });
  };

  const FilterGroup = ({ title, category, options }) => (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
        {title}
      </h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center text-gray-700 cursor-pointer"
          >
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={filters[category]?.includes(option) || false}
              onChange={() => handleCheckboxChange(category, option)}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full md:w-72 lg:w-80 flex-shrink-0">
      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-full bg-white p-3 rounded-lg shadow-md flex justify-between items-center mb-4"
      >
        <span className="font-semibold text-gray-700">Filter by</span>
        <svg
          className={`w-6 h-6 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Filter Content */}
      <div
        className={`bg-white p-6 rounded-lg shadow-md ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        <input
          type="text"
          placeholder="Autoname"
          value={filters.autoname || ""}
          onChange={handleSearchChange}
          className="w-full p-2 mb-6 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
        <FilterGroup
          title="Fahrzeugart"
          category="fahrzeugart"
          options={filterOptions.fahrzeugart}
        />
        <FilterGroup
          title="Treibstoff"
          category="treibstoff"
          options={filterOptions.treibstoff}
        />
        <FilterGroup
          title="Getriebe"
          category="getriebe"
          options={filterOptions.getriebe}
        />
      </div>
    </div>
  );
};

// ##################################################################
// # 2. CAR LIST COMPONENT
// ##################################################################

// Helper functions
const toAbsolute = (maybeUrl) =>
  maybeUrl && !maybeUrl.startsWith("http")
    ? `${API_BASE}${maybeUrl}`
    : maybeUrl || "";
const getFileAttrs = (f) => (f && f.attributes ? f.attributes : f || {});
const pickBestUrl = (file) => {
  const fa = getFileAttrs(file);
  const fmts = fa.formats || {};
  return toAbsolute(
    fmts.thumbnail?.url ||
      fmts.small?.url ||
      fmts.medium?.url ||
      fmts.large?.url ||
      fa.url ||
      ""
  );
};

const CarCard = memo(function CarCard({ car }) {
  return (
    <div className="p-2">
      <div className="bg-[#0A1424] w-full rounded-xl shadow-lg overflow-hidden">
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src={car.imageUrl}
            alt={`${car.marke} ${car.modell}`}
            loading="lazy"
            decoding="async"
          />
          <div className="absolute w-[90%] bottom-5 flex flex-row translate-x-[-50%] left-1/2 justify-start gap-1 items-end">
            <h1 className="text-[24px] text-white font-medium tracking-[2px]">
              {car.preis}
            </h1>
            <p className="text-[10px] text-white ">
              {" "}
              pro Monat <br /> inkl. MwSt.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[90%] mx-auto py-5 border-b border-b-[#152032]">
          <h1 className="text-[20px] text-white font-medium truncate">
            {car.marke} {car.modell}
          </h1>
          <h1 className="text-[#C0C0C1] text-[14px] font-regular">
            {car.Getriebe}
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
              {car.Treibstoff}
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

const CarList = ({ filters }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const inflightRef = useRef(null);

  const debouncedAutoname = useDebounce(filters.autoname, 500);

  const normalize = (arr) =>
    (arr || []).map((item) => {
      const attrs = item?.attributes ? item.attributes : item || {};
      const mediaNode =
        (attrs?.[IMAGE_FIELD]?.data ?? attrs?.[IMAGE_FIELD]) || [];
      const files = Array.isArray(mediaNode)
        ? mediaNode
        : mediaNode && typeof mediaNode === "object"
        ? [mediaNode]
        : [];
      const imageUrls = files.map(pickBestUrl);
      return {
        id: item?.id,
        ...attrs,
        imageUrls,
        imageUrl: imageUrls[0] || "",
      };
    });

  const fetchCars = useCallback(async (pageToFetch, currentFilters) => {
    if (inflightRef.current) {
      inflightRef.current.abort();
    }
    const controller = new AbortController();
    inflightRef.current = controller;

    setLoading(true);
    try {
      const strapiFilters = {};

      // Text search across marke/modell using $or array
      if (currentFilters.autoname) {
        strapiFilters.$or = [
          { marke: { $containsi: currentFilters.autoname } },
          { modell: { $containsi: currentFilters.autoname } },
        ];
      }

      // Map UI keys (lowercase) to schema keys (capitalized enums)
      const uiToSchemaKey = {
        fahrzeugart: "Fahrzeugart",
        treibstoff: "Treibstoff",
        getriebe: "Getriebe",
      };

      // Normalize UI labels to actual enum values
      const normalizeEnumValue = (key, val) => {
        if (key === "getriebe" && val === "Allrad (4x4)") return "Allrad";
        return val;
      };

      Object.keys(uiToSchemaKey).forEach((uiKey) => {
        const selected = (currentFilters[uiKey] || []).map((v) =>
          normalizeEnumValue(uiKey, v)
        );
        if (selected.length > 0) {
          const schemaKey = uiToSchemaKey[uiKey];
          strapiFilters[schemaKey] = { $in: selected };
        }
      });

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
            "Getriebe",
            "leistung",
            "Treibstoff",
            "verbrauch",
            "preis",
          ],
          populate: { [IMAGE_FIELD]: { fields: ["url", "formats"] } },
          filters:
            Object.keys(strapiFilters).length > 0 ? strapiFilters : undefined,
        },
        {
          encodeValuesOnly: true,
          // arrayFormat: "indices"
        }
      );

      const { data } = await axios.get(`${API_BASE}/api/cars?${query}`, {
        signal: controller.signal,
      });

      const normalized = normalize(data?.data);
      const newPageCount = data?.meta?.pagination?.pageCount || 1;

      setCars(normalized);
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

  useEffect(() => {
    setPage(1);
  }, [
    filters.fahrzeugart,
    filters.treibstoff,
    filters.getriebe,
    debouncedAutoname,
  ]);

  useEffect(() => {
    fetchCars(page, { ...filters, autoname: debouncedAutoname });
    return () => {
      if (inflightRef.current) inflightRef.current.abort();
    };
  }, [
    page,
    filters.fahrzeugart,
    filters.treibstoff,
    filters.getriebe,
    debouncedAutoname,
    fetchCars,
  ]);

  const goToPrevious = useCallback(
    () => setPage((p) => Math.max(1, p - 1)),
    []
  );
  const goToNext = useCallback(
    () => setPage((p) => Math.min(pageCount, p + 1)),
    [pageCount]
  );

  return (
    <div className="w-full">
      {loading ? (
        <div className="text-center py-10">Loading cars...</div>
      ) : cars.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No cars found matching your criteria.
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 -m-2">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}

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

// ##################################################################
// # 3. PARENT CONTAINER
// ##################################################################

const FilteredCarPage = () => {
  const [filters, setFilters] = useState({
    autoname: "",
    fahrzeugart: [],
    treibstoff: [],
    getriebe: [],
  });

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row md:gap-8 lg:gap-12">
        <FilterPanel filters={filters} setFilters={setFilters} />
        <div className="flex-1 mt-6 md:mt-0">
          <CarList filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default FilteredCarPage;
