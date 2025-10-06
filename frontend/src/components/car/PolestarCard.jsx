import { useId, useMemo, useState, useEffect } from "react";

const cx = (...c) => c.filter(Boolean).join(" ");

function Dropdown({ name, label, options, value, onChange }) {
  const groupId = useId();

  return (
    <div className="w-full">
      <label htmlFor={groupId} className="mb-2 block text-sm text-gray-600">
        {label}
      </label>
      <select
        id={groupId}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function ImageWithFallback({ src, alt, className }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  return failed ? (
    <div
      aria-label="image unavailable"
      className={cx(
        "grid place-items-center bg-gray-100 text-gray-400",
        className
      )}
    >
      <span className="text-xs">No image</span>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={cx("h-full w-full object-cover", className)}
    />
  );
}

export default function PolestarCard({
  title = "Polestar 2",
  subtitle = "Long Range Dual Motor",
  images = [],
  kmPricingOptions = [],
  termPricingOptions = [],
  basePrice = 749,
  buttonLabel = "Jetzt wählen",
  onSelect,
}) {
  const imagesKey = useMemo(
    () => images.map((img) => img.src).join("|"),
    [images]
  );

  const gallery = useMemo(() => {
    if (!images || images.length === 0) {
      return [{ src: "", alt: "placeholder" }];
    }
    return images;
  }, [imagesKey]);

  // State management with regular useState
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedKm, setSelectedKm] = useState(kmPricingOptions[0]?.km || 5000);
  const [selectedTerm, setSelectedTerm] = useState(
    termPricingOptions[0]?.months || 24
  );

  // Reset selections when options change
  useEffect(() => {
    setImageIndex(0);
  }, [imagesKey]);

  useEffect(() => {
    if (kmPricingOptions.length > 0) {
      setSelectedKm(kmPricingOptions[0].km);
    }
  }, [kmPricingOptions]);

  useEffect(() => {
    if (termPricingOptions.length > 0) {
      setSelectedTerm(termPricingOptions[0].months);
    }
  }, [termPricingOptions]);

  // Calculate price breakdown with explicit return
  const priceBreakdown = useMemo(() => {
    const kmValue = Number(selectedKm);
    const termValue = Number(selectedTerm);

    const kmOption = kmPricingOptions.find((opt) => Number(opt.km) === kmValue);
    const termOption = termPricingOptions.find(
      (opt) => Number(opt.months) === termValue
    );

    return {
      base: Number(basePrice) || 0,
      km: Number(kmOption?.priceModifier) || 0,
      term: Number(termOption?.priceModifier) || 0,
    };
  }, [
    selectedKm,
    selectedTerm,
    kmPricingOptions,
    termPricingOptions,
    basePrice,
  ]);

  // Calculate final price with explicit return
  const finalPrice = useMemo(() => {
    const total = priceBreakdown.base + priceBreakdown.km + priceBreakdown.term;
    console.log("PolestarCard finalPrice calculated:", total);
    return total;
  }, [priceBreakdown]);

  const thumbnails = useMemo(() => {
    const i = imageIndex;
    const len = gallery.length;

    if (len <= 1) return [];

    const allIndices = Array.from({ length: len }, (_, idx) => idx);
    const otherIndices = allIndices.filter((idx) => idx !== i);

    return otherIndices.slice(0, 2).map((idx) => ({
      idx,
      ...gallery[idx],
      uniqueKey: `thumb-${idx}`,
    }));
  }, [imageIndex, gallery]);

  const handleSubmit = () => {
    const selectionData = {
      kmPerYear: Number(selectedKm),
      termMonths: Number(selectedTerm),
      imageIndex: imageIndex,
      finalPrice: finalPrice,
      basePrice: Number(basePrice),
      priceBreakdown: priceBreakdown,
    };

    console.log("PolestarCard handleSubmit:", selectionData);
    console.log("finalPrice being sent:", finalPrice);

    onSelect?.(selectionData);
  };

  const next = () => setImageIndex((imageIndex + 1) % gallery.length);
  const prev = () =>
    setImageIndex((imageIndex - 1 + gallery.length) % gallery.length);

  const handleKmChange = (value) => {
    console.log("KM changed to:", value);
    setSelectedKm(Number(value));
  };

  const handleTermChange = (value) => {
    console.log("Term changed to:", value);
    setSelectedTerm(Number(value));
  };

  return (
    <section className="mx-auto rounded-xl container">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-[65%] w-full">
          <div className="grid gap-3 md:grid-cols-1">
            <div className="relative md:cols-span-2">
              <div className="aspect-[5/3] overflow-hidden rounded-lg bg-gray-100">
                <ImageWithFallback
                  src={gallery[imageIndex]?.src}
                  alt={gallery[imageIndex]?.alt || title}
                  className="h-full w-full object-cover"
                />
              </div>

              {gallery.length > 1 && (
                <div className="pointer-events-none absolute flex items-center justify-center gap-4 px-2 w-fit bottom-8 right-6">
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={prev}
                    className="pointer-events-auto hover:cursor-pointer flex h-10 w-13 text-[26px] justify-center items-center place-items-center rounded-full bg-[#0847A4] hover:bg-transparent text-white backdrop-blur transition"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={next}
                    className="pointer-events-auto hover:cursor-pointer flex h-10 w-13 text-[26px] justify-center items-center place-items-center rounded-full bg-[#0847A4] hover:bg-transparent text-white backdrop-blur transition"
                  >
                    ›
                  </button>
                </div>
              )}
            </div>

            {thumbnails.length > 0 && (
              <div className="grid grid-cols-2 gap-3 overflow-hidden max-md:hidden">
                {thumbnails.map((img) => (
                  <button
                    type="button"
                    key={img.uniqueKey}
                    onClick={() => setImageIndex(img.idx)}
                    className="overflow-hidden rounded-lg ring-1 ring-gray-200 hover:ring-gray-300 transition"
                  >
                    <div className="aspect-[4/3]">
                      <ImageWithFallback src={img.src} alt={img.alt} />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="md:w-[30%] w-full">
          <div className="mt-7 flex flex-col gap-2">
            <p className="text-xs text-[#0847A4] bg-[#0847A41A] py-1 px-4 rounded-xl w-fit">
              Sofort verfügbar
            </p>
            <h1 className="mt-1 lg:text-[40px] text-[30px] font-semibold text-gray-900">
              {title}
            </h1>
            <p className="text-[20px] text-black">{subtitle}</p>
          </div>

          <hr className="text-gray-300 mt-10" />

          <div className="grid gap-6 md:grid-cols-1 w-[60%] pt-7 pb-10">
            <Dropdown
              name="km"
              label="Km / Jahr:"
              value={selectedKm}
              onChange={handleKmChange}
              options={kmPricingOptions.map((opt) => ({
                value: opt.km,
                label: `${opt.km.toLocaleString("de-CH")} km`,
              }))}
            />
            <Dropdown
              name="term"
              label="Laufzeit:"
              value={selectedTerm}
              onChange={handleTermChange}
              options={termPricingOptions.map((opt) => ({
                value: opt.months,
                label: `${opt.months} Monate`,
              }))}
            />
          </div>

          <hr className="text-gray-300 mt-5" />

          <div className="mt-6 flex flex-col items-start justify-between gap-4 pt-4">
            <div className="w-full">
              <div className="lg:text-[34px] text-[28px] font-semibold text-[#0847A4] flex flex-col gap-2">
                <h1>
                  {finalPrice.toLocaleString("de-CH", {
                    style: "currency",
                    currency: "CHF",
                    minimumFractionDigits: 2,
                  })}
                </h1>
                <span className="text-[14px] font-light text-black">
                  pro Monat inkl. MwSt.
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex w-full items-center justify-center rounded-md bg-[#0847A4] px-6 py-3 text-sm font-medium text-white shadow hover:bg-[black] transition"
            >
              {buttonLabel}
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex w-full items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-[#0847A4] hover:text-white shadow hover:bg-black border transition"
            >
              <img src="/images/pdf.svg" alt="" className="mr-3" />
              Datenblatt (PDF)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
