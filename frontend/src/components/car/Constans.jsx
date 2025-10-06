export const API_BASE = "http://localhost:1337";
export const PAGE_SIZE = 9;
export const IMAGE_FIELD = "Image";

export const FILTER_OPTIONS = {
  fahrzeugart: ["Kleinwagen", "Kompakt", "Mittelklasse", "SUV", "Premium"],
  treibstoff: ["Elektrisch", "Hybrid", "Gas"],
  getriebe: ["Automatik", "Handschaltung", "Allrad (4x4)"],
};

export const UI_TO_SCHEMA_KEY = {
  fahrzeugart: "Fahrzeugart",
  treibstoff: "Treibstoff",
  getriebe: "Getriebe",
};
