import React, { useState, useEffect } from "react";
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

const CarList = ({ refreshTrigger }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const fetchCars = async (pageToFetch = page) => {
    setLoading(true);
    try {
      const query = qs.stringify(
        {
          pagination: { page: pageToFetch, pageSize: PAGE_SIZE },
          sort: ["updatedAt:desc"],
          populate: { [Image]: true },
        },
        { encodeValuesOnly: true }
      );

      const { data } = await axios.get(`${API_BASE}/api/cars?${query}`);

      const normalized = (data?.data || []).map((item) => {
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

      setCars(normalized);
      setPageCount(data?.meta?.pagination?.pageCount || 1);
    } catch (err) {
      console.error("Failed to fetch cars:", err?.response?.data || err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(1);
    fetchCars(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshTrigger]);

  useEffect(() => {
    fetchCars(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (loading) return <div>Loading cars...</div>;

  const goToPrevious = () => setPage((p) => Math.max(1, p - 1));
  const goToNext = () => setPage((p) => Math.min(pageCount, p + 1));

  console.log(cars[0]);

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {cars.map((car) => (
          <div className="" key={car.id}>
            <div>
              <div>
                <div>
                  {car.marke} {car.modell}
                </div>
                <div>{car.schaltung}</div>
              </div>

              <div>
                <div className="flex flex-col items-center gap-2">
                  <p>{car.leistung} PS</p>
                  <img src="/images/psIcon.svg" alt="" />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p>{car.kraftstoff}</p>
                  <img src="/images/pumpIcon.svg" alt="" />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p>{car.verbrauch} L/100km</p>
                  <img src="/images/typeIcon.svg" alt="" />
                </div>
              </div>
              <img src={car.imageUrl} alt="" />

              {/* {car.imageUrls?.length >= 1 && (
                <div>
                  {car.imageUrls.slice(1).map((url, idx) => (
                    <img
                      key={idx}
                      src={url}
                      alt=""
                     
                    />
                  ))}
                  
                </div>
              )} */}
            </div>
          </div>
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
          Page {page} of {pageCount}
        </span>
        <button
          className="bg-black text-white rounded-lg"
          onClick={goToNext}
          disabled={page === pageCount}
        >
          Next
        </button>
        <button onClick={() => fetchCars(page)}>Refresh</button>
      </div>
    </div>
  );
};

export default CarList;
