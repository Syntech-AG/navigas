import React, { useState } from "react";
import { FilterPanel } from "../components/car/FilterPanel";
import { CarList } from "../components/car/CarList";

const FilteredCarPage = () => {
  const [filters, setFilters] = useState({
    autoname: "",
    fahrzeugart: [],
    treibstoff: [],
    getriebe: [],
  });

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row md:gap-8 lg:gap-12 py-30">
        <FilterPanel filters={filters} setFilters={setFilters} />
        <div className="flex-1 mt-6 md:mt-0">
          <CarList filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default FilteredCarPage;
