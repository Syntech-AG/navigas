import { useId, useMemo, useState, useEffect } from "react";

const cx = (...c) => c.filter(Boolean).join(" ");

function useSelection(initial) {
  const [value, set] = useState(initial);
  return { value, set };
}

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

  const imageSel = useSelection(0);
  const kmSel = useSelection(kmPricingOptions[0]?.km || 5000);
  const termSel = useSelection(termPricingOptions[0]?.months || 24);

  useEffect(() => {
    imageSel.set(0);
  }, [imagesKey]);

  const priceBreakdown = useMemo(() => {
    const kmOption = kmPricingOptions.find(
      (opt) => opt.km === Number(kmSel.value)
    );
    const termOption = termPricingOptions.find(
      (opt) => opt.months === Number(termSel.value)
    );

    return {
      base: basePrice,
      km: kmOption?.priceModifier || 0,
      term: termOption?.priceModifier || 0,
    };
  }, [
    basePrice,
    kmSel.value,
    termSel.value,
    kmPricingOptions,
    termPricingOptions,
  ]);

  const finalPrice = useMemo(() => {
    return priceBreakdown.base + priceBreakdown.km + priceBreakdown.term;
  }, [priceBreakdown]);

  const thumbnails = useMemo(() => {
    const i = imageSel.value;
    const len = gallery.length;

    if (len <= 1) return [];

    const allIndices = Array.from({ length: len }, (_, idx) => idx);
    const otherIndices = allIndices.filter((idx) => idx !== i);

    return otherIndices.slice(0, 2).map((idx) => ({
      idx,
      ...gallery[idx],
      uniqueKey: `thumb-${idx}`,
    }));
  }, [imageSel.value, gallery]);

  const handleSubmit = () => {
    onSelect?.({
      kmPerYear: Number(kmSel.value),
      termMonths: Number(termSel.value),
      imageIndex: imageSel.value,
      finalPrice,
      basePrice,
      priceBreakdown,
    });
  };

  const next = () => imageSel.set((imageSel.value + 1) % gallery.length);
  const prev = () =>
    imageSel.set((imageSel.value - 1 + gallery.length) % gallery.length);

  return (
    <section className="mx-auto rounded-xl container">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-[65%] w-full">
          <div className="grid gap-3 md:grid-cols-1">
            <div className="relative md:cols-span-2">
              <div className="aspect-[5/3] overflow-hidden rounded-lg bg-gray-100">
                <ImageWithFallback
                  src={gallery[imageSel.value]?.src}
                  alt={gallery[imageSel.value]?.alt || title}
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
                    onClick={() => imageSel.set(img.idx)}
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
              value={kmSel.value}
              onChange={kmSel.set}
              options={kmPricingOptions.map((opt) => ({
                value: opt.km,
                label: `${opt.km.toLocaleString("de-CH")} km`,
              }))}
            />
            <Dropdown
              name="term"
              label="Laufzeit:"
              value={termSel.value}
              onChange={termSel.set}
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

              {/* {(priceBreakdown.km !== 0 || priceBreakdown.term !== 0) && (
                <div className="mt-3 text-xs text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Basispreis:</span>
                    <span>{priceBreakdown.base} CHF</span>
                  </div>
                  {priceBreakdown.km !== 0 && (
                    <div className="flex justify-between">
                      <span>Km-Paket:</span>
                      <span>+{priceBreakdown.km} CHF</span>
                    </div>
                  )}
                  {priceBreakdown.term !== 0 && (
                    <div className="flex justify-between">
                      <span>Laufzeit:</span>
                      <span>
                        {priceBreakdown.term > 0 ? "+" : ""}
                        {priceBreakdown.term} CHF
                      </span>
                    </div>
                  )}
                </div>
              )} */}
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
