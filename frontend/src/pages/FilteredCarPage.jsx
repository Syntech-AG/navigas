import React, { useState, useMemo } from "react";
import { FilterPanel } from "../components/car/FilterPanel";
import { CarList } from "../components/car/CarList";
import { PRICING_TYPE } from "../components/car/Constans";
import AboutStart from "../components/about/AboutStart";

const INITIAL_FILTERS = {
  autoname: "",
  fahrzeugart: [],
  treibstoff: [],
  getriebe: [],
};

const FilteredCarPage = ({ pricingType = PRICING_TYPE.NORMAL }) => {
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
    <div>
      <AboutStart
        src="images/filter.png "
        title="Privatkunden"
        mobileSrc="images/filterMobile.png"
      />
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:gap-8 lg:gap-12 py-30">
          <FilterPanel filters={memoizedFilters} setFilters={setFilters} />
          <div className="flex-1 mt-6 md:mt-0">
            <CarList filters={memoizedFilters} pricingType={pricingType} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilteredCarPage;
