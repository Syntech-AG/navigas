import axios from "axios";
import qs from "qs";
import {
  API_BASE,
  PAGE_SIZE,
  IMAGE_FIELD,
  UI_TO_SCHEMA_KEY,
  PRICING_TYPE,
} from "./Constans";
import { normalizeCarData } from "./ImageHelpers";

const normalizeEnumValue = (key, val) => {
  if (key === "getriebe" && val === "Allrad (4x4)") return "Allrad";
  return val;
};

export const transformPricingOptions = (car) => {
  if (!car) return { kmOptions: [], termOptions: [] };

  const kmOptions = [
    { km: 5000, priceModifier: car.FuenftausendKilometer || 0 },
    { km: 10000, priceModifier: car.ZehntausendKilometer || 0 },
    { km: 15000, priceModifier: car.FuenfzehntausendKilometer || 0 },
    { km: 20000, priceModifier: car.ZwanzigtausendKilometer || 0 },
    { km: 25000, priceModifier: car.FuenfundzwanzigtausendKilometer || 0 },
  ];

  const termOptions = [
    { months: 24, priceModifier: car.VierundzwanzigMonate || 0 },
    { months: 36, priceModifier: car.SechsunddreissigMonate || 0 },
    { months: 48, priceModifier: car.AchtundvierzigMonate || 0 },
  ];

  return { kmOptions, termOptions };
};

export const getPrice = (car, pricingType = PRICING_TYPE.NORMAL) => {
  if (pricingType === PRICING_TYPE.COMPANY) {
    return parseInt(car.PreisFurUnternehmen || car.preis) || 0;
  }
  return parseInt(car.preis) || 0;
};

export const fetchCars = async (
  page,
  filters,
  signal,
  pricingType = PRICING_TYPE.NORMAL
) => {
  const strapiFilters = {};

  if (filters.autoname) {
    strapiFilters.$or = [
      { marke: { $containsi: filters.autoname } },
      { modell: { $containsi: filters.autoname } },
    ];
  }

  Object.keys(UI_TO_SCHEMA_KEY).forEach((uiKey) => {
    const selected = (filters[uiKey] || []).map((v) =>
      normalizeEnumValue(uiKey, v)
    );
    if (selected.length) {
      strapiFilters[UI_TO_SCHEMA_KEY[uiKey]] = { $in: selected };
    }
  });

  const query = qs.stringify(
    {
      pagination: { page, pageSize: PAGE_SIZE, withCount: true },
      sort: ["updatedAt:desc"],
      fields: [
        "marke",
        "modell",
        "Getriebe",
        "leistung",
        "Treibstoff",
        "verbrauch",
        "preis",
        "PreisFurUnternehmen",
      ],
      populate: { [IMAGE_FIELD]: { fields: ["url", "formats"] } },
      filters: Object.keys(strapiFilters).length ? strapiFilters : undefined,
    },
    { encodeValuesOnly: true }
  );

  const { data } = await axios.get(`${API_BASE}/api/cars?${query}`, { signal });

  const cars = normalizeCarData(data.data).map((car) => ({
    ...car,
    displayPrice: getPrice(car, pricingType),
    pricingType,
  }));

  return {
    cars,
    pageCount: data.meta.pagination.pageCount || 1,
  };
};

export const fetchCarById = async (id, pricingType = PRICING_TYPE.NORMAL) => {
  const query = qs.stringify(
    { populate: { [IMAGE_FIELD]: { fields: ["url", "formats"] } } },
    { encodeValuesOnly: true }
  );

  const { data } = await axios.get(`${API_BASE}/api/cars/${id}?${query}`);
  const normalized = normalizeCarData([data.data])[0];

  return {
    ...normalized,
    displayPrice: getPrice(normalized, pricingType),
    pricingType,
  };
};
