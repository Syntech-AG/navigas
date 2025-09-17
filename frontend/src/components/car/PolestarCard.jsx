import { useId, useMemo, useState } from "react";

const cx = (...c) => c.filter(Boolean).join(" ");
const mod = (n, m) => ((n % m) + m) % m;

function useSelection(initial) {
  const [value, set] = useState(initial);
  return { value, set };
}

function SegmentedRadio({ name, label, options, value, onChange }) {
  const groupId = useId();
  return (
    <fieldset aria-labelledby={`${groupId}-label`} className="w-full">
      <div id={`${groupId}-label`} className="mb-2 text-sm text-gray-600">
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const id = `${groupId}-${opt.value}`;
          const checked = value === opt.value;
          return (
            <label
              key={opt.value}
              htmlFor={id}
              className={cx(
                "cursor-pointer select-none rounded-md border px-3 py-2 text-sm transition",
                checked
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 bg-white text-gray-900 hover:border-gray-400",
                "focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2"
              )}
            >
              <input
                id={id}
                name={name}
                type="radio"
                value={String(opt.value)}
                checked={checked}
                onChange={() => onChange(opt.value)}
                className="sr-only"
              />
              {opt.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

function ImageWithFallback({ src, alt, className }) {
  const [failed, setFailed] = useState(false);
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
  images = [
    { src: "/images/polestar-1.jpg", alt: "Front 3/4 view" },
    { src: "/images/polestar-2.jpg", alt: "Front view" },
    { src: "/images/polestar-3.jpg", alt: "Rear view" },
  ],
  kmPerYearOptions = [5000, 10000, 15000, 20000, 25000],
  termOptions = [24, 36, 48],
  priceChf = 749,
  buttonLabel = "Jetzt wählen",
  onSelect,
}) {
  const gallery = useMemo(
    () => (images.length ? images : [{ src: "", alt: "placeholder" }]),
    [images]
  );

  const imageSel = useSelection(0);
  const kmSel = useSelection(kmPerYearOptions[21] ?? kmPerYearOptions);
  const termSel = useSelection(termOptions[22] ?? termOptions);
  const trio = useMemo(() => {
    const i = imageSel.value;
    const len = gallery.length;
    const prev = mod(i - 1, len);
    const next = mod(i + 1, len);
    return [
      { idx: prev, ...gallery[prev] },
      { idx: i, ...gallery[i] },
      { idx: next, ...gallery[next] },
    ];
  }, [imageSel.value, gallery]);

  const handleSubmit = () => {
    onSelect?.({
      kmPerYear: kmSel.value,
      termMonths: termSel.value,
      imageIndex: imageSel.value,
    });
  };

  const next = () => imageSel.set((imageSel.value + 1) % gallery.length);
  const prev = () =>
    imageSel.set((imageSel.value - 1 + gallery.length) % gallery.length);

  return (
    <section className="mx-auto rounded-xl container">
      <div className="grid gap-3 md:grid-cols-3">
        <div className="relative md:col-span-2">
          <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
            <ImageWithFallback
              src={gallery[imageSel.value]?.src}
              alt={gallery[imageSel.value]?.alt || title}
            />
          </div>
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
        </div>
        <div className="grid grid-rows-2 gap-3 overflow-hidden max-md:hidden">
          {trio
            .filter((img) => img.idx !== imageSel.value)
            .map((img) => (
              <button
                type="button"
                key={img.idx}
                onClick={() => imageSel.set(img.idx)}
                aria-pressed={imageSel.value === img.idx}
                className={cx(
                  "overflow-hidden rounded-lg ring-1 transition",
                  imageSel.value === img.idx
                    ? "ring-blue-600"
                    : "ring-gray-200 hover:ring-gray-300"
                )}
              >
                <div className="aspect-[4/3]">
                  <ImageWithFallback src={img.src} alt={img.alt} />
                </div>
              </button>
            ))}
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-2">
        <p className="text-xs text-[#0847A4] bg-[#0847A41A] py-1 px-4 rounded-xl w-fit">
          Sofort verfügbar
        </p>
        <h1 className="mt-1 lg:text-[40px] text-[30px] font-semibold text-gray-900">
          {title}
        </h1>
        <p className="text-sm text-black">{subtitle}</p>
      </div>

      <div className="mt-5 grid gap-6 md:grid-cols-2 border-y border-y-[#D1D5DD] pt-7 pb-10">
        <SegmentedRadio
          name="km"
          label="Km / Jahr:"
          value={kmSel.value}
          onChange={kmSel.set}
          options={kmPerYearOptions.map((k) => ({
            value: k,
            label: k.toLocaleString("de-CH") + " km",
          }))}
        />
        <SegmentedRadio
          name="term"
          label="Laufzeit:"
          value={termSel.value}
          onChange={termSel.set}
          options={termOptions.map((m) => ({
            value: m,
            label: `${m} Monate`,
          }))}
        />
      </div>

      <div className="mt-6 flex flex-col items-start justify-between gap-4 pt-4 md:flex-row md:items-center">
        <div>
          <div className="lg:text-[34px] text-[28px] font-semibold text-[#0847A4] flex flex-col gap-2">
            <h1>
              {priceChf.toLocaleString("de-CH", {
                style: "currency",
                currency: "CHF",
                minimumFractionDigits: 2,
              })}{" "}
            </h1>
            <span className="text-[14px] font-light text-black">
              pro Monat inkl. MwSt.
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-flex w-full items-center justify-center rounded-md bg-[#0847A4] px-6 py-3 text-sm font-medium text-white shadow hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 md:w-[50%]"
        >
          Jetzt wählen
        </button>
      </div>
    </section>
  );
}
