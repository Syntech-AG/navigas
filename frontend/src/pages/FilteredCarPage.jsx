import React, { useState, useMemo } from "react";
import { FilterPanel } from "../components/car/FilterPanel";
import { CarList } from "../components/car/CarList";

const INITIAL_FILTERS = {
  autoname: "",
  fahrzeugart: [],
  treibstoff: [],
  getriebe: [],
};

const FilteredCarPage = () => {
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const memoizedFilters = useMemo(
    () => filters,
    [
      filters.autoname,
      filters.fahrzeugart,
      filters.treibstoff,
      filters.getriebe,
    ]
  );

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row md:gap-8 lg:gap-12 py-30">
        <FilterPanel filters={memoizedFilters} setFilters={setFilters} />
        <div className="flex-1 mt-6 md:mt-0">
          <CarList filters={memoizedFilters} />
        </div>
      </div>
    </div>
  );
};

export default FilteredCarPage;
