import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {title}
            </h3>
            <div className="space-y-2">
              {options.map((option, index) => (
                <motion.label
                  key={option}
                  className="flex items-center text-gray-700 cursor-pointer group"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <motion.input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    checked={filters[category]?.includes(option) || false}
                    onChange={() => handleCheckboxChange(category, option)}
                    whileTap={{ scale: 0.9 }}
                  />
                  <span className="ml-2 group-hover:text-gray-900 transition-colors">
                    {option}
                  </span>
                </motion.label>
              ))}
            </div>
          </motion.div>
        ),
    [filters, handleCheckboxChange]
  );

  return (
    <div className="w-full md:w-72 lg:w-80 flex-shrink-0">
      <motion.button
        onClick={toggleOpen}
        className="md:hidden w-full bg-white p-3 rounded-lg shadow-md flex justify-between items-center mb-4"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="font-semibold text-gray-700">Filter by</span>
        <motion.svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {(isOpen || window.innerWidth >= 768) && (
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md md:block"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.input
              type="text"
              placeholder="Autoname"
              value={filters.autoname || ""}
              onChange={handleSearchChange}
              className="w-full p-2 mb-6 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
