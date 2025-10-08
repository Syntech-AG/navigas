import React, { useState, useCallback, useMemo } from "react";
import { FILTER_OPTIONS } from "./Constans";

export const FilterPanel = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchChange = useCallback(
    (e) => {
      setFilters((prev) => ({ ...prev, autoname: e.target.value }));
    },
    [setFilters]
  );

  const handleCheckboxChange = useCallback(
    (category, option) => {
      setFilters((prev) => {
        const currentSelection = prev[category] || [];
        const newSelection = currentSelection.includes(option)
          ? currentSelection.filter((item) => item !== option)
          : [...currentSelection, option];
        return { ...prev, [category]: newSelection };
      });
    },
    [setFilters]
  );

  const toggleOpen = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const FilterGroup = useMemo(
    () =>
      ({ title, category, options }) =>
        (
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
        ),
    [filters, handleCheckboxChange]
  );

  return (
    <div className="w-full md:w-72 lg:w-80 flex-shrink-0">
      <button
        onClick={toggleOpen}
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
          options={FILTER_OPTIONS.fahrzeugart}
        />
        <FilterGroup
          title="Treibstoff"
          category="treibstoff"
          options={FILTER_OPTIONS.treibstoff}
        />
        <FilterGroup
          title="Getriebe"
          category="getriebe"
          options={FILTER_OPTIONS.getriebe}
        />
      </div>
    </div>
  );
};
