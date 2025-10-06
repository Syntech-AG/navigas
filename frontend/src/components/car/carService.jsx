import axios from "axios";
import qs from "qs";
import { API_BASE, PAGE_SIZE, IMAGE_FIELD, UI_TO_SCHEMA_KEY } from "./Constans";
import { normalizeCarData } from "./ImageHelpers";

const normalizeEnumValue = (key, val) => {
  if (key === "getriebe" && val === "Allrad (4x4)") return "Allrad";
  return val;
};

export const fetchCars = async (page, filters, signal) => {
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
    if (selected.length > 0) {
      const schemaKey = UI_TO_SCHEMA_KEY[uiKey];
      strapiFilters[schemaKey] = { $in: selected };
    }
  });

  const query = qs.stringify(
    {
      pagination: {
        page,
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
    }
  );

  const { data } = await axios.get(`${API_BASE}/api/cars?${query}`, {
    signal,
  });

  return {
    cars: normalizeCarData(data?.data),
    pageCount: data?.meta?.pagination?.pageCount || 1,
  };
};

export const fetchCarById = async (documentId) => {
  const query = qs.stringify(
    {
      populate: {
        [IMAGE_FIELD]: { fields: ["url", "formats"] },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const { data } = await axios.get(
    `${API_BASE}/api/cars/${documentId}?${query}`
  );

  const normalized = normalizeCarData([data.data]);
  return normalized[0];
};
