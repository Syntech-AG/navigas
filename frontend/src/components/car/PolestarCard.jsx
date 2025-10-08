import React, { useId, useMemo, useState, useEffect, useCallback } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { PRICING_TYPE } from "./Constans";

const cx = (...classes) => classes.filter(Boolean).join(" ");

function Dropdown({ name, label, options, value, onChange }) {
  const id = useId();
  const handleChange = useCallback((e) => onChange(e.target.value), [onChange]);
  return (
    <div className="w-full">
      <label htmlFor={id} className="mb-2 block text-sm text-gray-600">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-blue-600"
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
  useEffect(() => setFailed(false), [src]);
  const handleError = useCallback(() => setFailed(true), []);
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
      onError={handleError}
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
  carData,
  onSelect,
  pricingType = PRICING_TYPE.NORMAL,
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedKm, setSelectedKm] = useState(kmPricingOptions[0]?.km || 5000);
  const [selectedTerm, setSelectedTerm] = useState(
    termPricingOptions[0]?.months || 24
  );

  const imagesKey = useMemo(() => images.map((i) => i.src).join(","), [images]);
  const gallery = useMemo(
    () => (images.length ? images : [{ src: "", alt: "placeholder" }]),
    [imagesKey]
  );

  useEffect(() => setImageIndex(0), [imagesKey]);
  useEffect(
    () => kmPricingOptions.length && setSelectedKm(kmPricingOptions[0].km),
    [kmPricingOptions]
  );
  useEffect(
    () =>
      termPricingOptions.length &&
      setSelectedTerm(termPricingOptions[0].months),
    [termPricingOptions]
  );

  const priceBreakdown = useMemo(() => {
    const kmOpt = kmPricingOptions.find((o) => o.km === selectedKm) || {};
    const termOpt =
      termPricingOptions.find((o) => o.months === selectedTerm) || {};
    return {
      base: basePrice,
      km: kmOpt.priceModifier || 0,
      term: termOpt.priceModifier || 0,
    };
  }, [
    selectedKm,
    selectedTerm,
    kmPricingOptions,
    termPricingOptions,
    basePrice,
  ]);

  const finalPrice = useMemo(
    () => priceBreakdown.base + priceBreakdown.km + priceBreakdown.term,
    [priceBreakdown]
  );

  const thumbnails = useMemo(() => {
    const len = gallery.length;
    if (len <= 1) return [];
    return gallery
      .map((_, idx) => idx)
      .filter((i) => i !== imageIndex)
      .slice(0, 2)
      .map((idx) => ({ idx, ...gallery[idx], key: `thumb-${idx}` }));
  }, [gallery, imageIndex]);

  const taxLabel =
    pricingType === PRICING_TYPE.COMPANY ? "exkl. MwSt." : "inkl. MwSt.";

  const handleSubmit = useCallback(() => {
    onSelect({
      kmPerYear: selectedKm,
      termMonths: selectedTerm,
      imageIndex,
      finalPrice,
    });
  }, [onSelect, selectedKm, selectedTerm, imageIndex, finalPrice]);

  const next = () => setImageIndex((i) => (i + 1) % gallery.length);
  const prev = () =>
    setImageIndex((i) => (i - 1 + gallery.length) % gallery.length);

  const handleKmChange = (v) => setSelectedKm(Number(v));
  const handleTermChange = (v) => setSelectedTerm(Number(v));

  const getImageBase64 = useCallback((url) => {
    return new Promise((res, rej) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        const c = document.createElement("canvas");
        c.width = img.width;
        c.height = img.height;
        c.getContext("2d").drawImage(img, 0, 0);
        res(c.toDataURL("image/jpeg", 0.8));
      };
      img.onerror = () => rej("Image load failed");
      img.src = url;
    });
  }, []);

  const handleDownloadPDF = useCallback(async () => {
    const doc = new jsPDF("p", "mm", "a4");
    const w = doc.internal.pageSize.getWidth();
    const h = doc.internal.pageSize.getHeight();
    doc.setFillColor(8, 71, 164);
    doc.rect(0, 0, w, 30, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont(undefined, "bold");
    doc.text(title, w / 2, 12, { align: "center" });
    doc.setFontSize(11);
    doc.setFont(undefined, "normal");
    doc.text(subtitle, w / 2, 20, { align: "center" });
    doc.setFontSize(8);
    doc.text("Sofort verfügbar", w / 2, 26, { align: "center" });
    let y = 38;
    try {
      const data = await getImageBase64(gallery[0].src);
      const imgW = 120,
        imgH = 65,
        x = (w - imgW) / 2;
      doc.setDrawColor(8, 71, 164).setLineWidth(0.5);
      doc.roundedRect(x - 2, y - 2, imgW + 4, imgH + 4, 3, 3);
      doc.addImage(data, "JPEG", x, y, imgW, imgH);
      y += imgH + 12;
    } catch {
      y += 45;
    }
    doc.setFontSize(14).setFont(undefined, "bold").setTextColor(8, 71, 164);
    doc.text("Ihre Konfiguration", w / 2, y, { align: "center" });
    doc
      .setFillColor(243, 245, 250)
      .roundedRect(20, y + 3, w - 40, 32, 2, 2, "F");
    y += 20;
    doc.setFontSize(10).setFont(undefined, "normal").setTextColor(50, 50, 50);
    const left = 30,
      right = w / 2 + 5,
      off = 55;
    doc
      .text("Kilometer pro Jahr:", left, y)
      .setFont(undefined, "bold")
      .setTextColor(8, 71, 164)
      .text(`${selectedKm.toLocaleString("de-CH")} km`, left + off, y)
      .setFont(undefined, "normal")
      .setTextColor(50, 50, 50)
      .text("Grundpreis:", left, y + 8)
      .setFont(undefined, "bold")
      .setTextColor(8, 71, 164)
      .text(`CHF ${basePrice.toFixed(2)}`, left + off, y + 8);
    doc
      .setFont(undefined, "normal")
      .setTextColor(50, 50, 50)
      .text("Vertragslaufzeit:", right, y)
      .setFont(undefined, "bold")
      .setTextColor(8, 71, 164)
      .text(`${selectedTerm} Monate`, right + off, y)
      .setFont(undefined, "normal")
      .setTextColor(50, 50, 50)
      .text("Monatlicher Preis:", right, y + 8)
      .setFont(undefined, "bold")
      .setFontSize(11)
      .text(
        finalPrice.toLocaleString("de-CH", {
          style: "currency",
          currency: "CHF",
          minimumFractionDigits: 2,
        }),
        right + off,
        y + 8
      );
    y += 25;
    doc.setFontSize(14).setFont(undefined, "bold").setTextColor(8, 71, 164);
    doc.text("Technische Daten", w / 2, y, { align: "center" });
    y += 8;
    const specs = [
      { label: "Schaltung", val: carData.Getriebe },
      { label: "Reichweite", val: carData.reichweite },
      { label: "Leistung", val: `${carData.leistung} PS` },
      { label: "Verbrauch", val: `${carData.verbrauch} L/100km` },
      { label: "Türen", val: carData.turen },
      { label: "Treibstoff", val: carData.Treibstoff },
    ];
    const colW = (w - 40) / 3;
    let row = 0,
      col = 0;
    specs.forEach((s) => {
      const x = 20 + col * colW,
        yy = y + row * 20;
      doc
        .setFillColor(255, 255, 255)
        .setDrawColor(220, 220, 220)
        .setLineWidth(0.1)
        .roundedRect(x, yy, colW - 5, 16, 1, 1, "FD")
        .setFontSize(9)
        .setTextColor(100, 100, 100)
        .setFont(undefined, "normal")
        .text(s.label, x + 3, yy + 6)
        .setFontSize(10)
        .setTextColor(0, 0, 0)
        .setFont(undefined, "bold")
        .text(s.val || "N/A", x + 3, yy + 12);
      col++;
      if (col === 3) {
        col = 0;
        row++;
      }
    });
    y += (row + 1) * 20 + 20;
    const fy = h - 30;
    doc
      .setDrawColor(8, 71, 164)
      .setLineWidth(0.3)
      .line(20, fy, w - 20, fy);
    doc
      .setFillColor(243, 245, 250)
      .roundedRect(15, fy + 3, w - 30, 22, 2, 2, "F");
    const date = new Date().toLocaleDateString("de-CH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    doc
      .setFontSize(8)
      .setTextColor(80, 80, 80)
      .setFont(undefined, "normal")
      .text(`Erstellt am ${date}`, 20, fy + 10)
      .text("Alle Preise inkl. MwSt.", w / 2, fy + 10, { align: "center" })
      .setFont(undefined, "bold")
      .setFontSize(9)
      .setTextColor(8, 71, 164)
      .text("www.ihrewebsite.ch", w - 20, fy + 10, { align: "right" })
      .setFont(undefined, "italic")
      .setFontSize(7)
      .setTextColor(120, 120, 120)
      .text("Ihr zuverlässiger Partner für Elektromobilität", w / 2, fy + 18, {
        align: "center",
      });
    doc.save(`${title.replace(/\s/g, "_")}_Datenblatt.pdf`);
  }, [
    title,
    subtitle,
    gallery,
    selectedKm,
    selectedTerm,
    basePrice,
    finalPrice,
    carData,
    getImageBase64,
  ]);

  return (
    <section className="mx-auto rounded-xl container">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Image Gallery */}
        <div className="md:w-[65%] w-full">
          <div className="grid gap-3 md:grid-cols-1">
            <div className="relative md:cols-span-2">
              <div className="aspect-[5/3] overflow-hidden rounded-lg bg-gray-100">
                <ImageWithFallback
                  src={gallery[imageIndex].src}
                  alt={gallery[imageIndex].alt}
                  className="h-full w-full object-cover"
                />
              </div>
              {gallery.length > 1 && (
                <div className="absolute bottom-8 right-6 flex gap-4 pointer-events-none px-2">
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={prev}
                    className="pointer-events-auto flex h-10 w-13 items-center justify-center bg-[#0847A4] text-white rounded-full hover:bg-transparent transition"
                  >
                    ❮
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={next}
                    className="pointer-events-auto flex h-10 w-13 items-center justify-center bg-[#0847A4] text-white rounded-full hover:bg-transparent transition"
                  >
                    ❯
                  </button>
                </div>
              )}
            </div>
            {/* Thumbnails */}
            {thumbnails.length > 0 && (
              <div className="grid grid-cols-2 gap-3 max-md:hidden">
                {thumbnails.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setImageIndex(t.idx)}
                    className="overflow-hidden rounded-lg ring-1 ring-gray-200 hover:ring-gray-300 transition"
                  >
                    <div className="aspect-[4/3]">
                      <ImageWithFallback src={t.src} alt={t.alt} />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Configuration Panel */}
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
          <div className="grid gap-6 w-[60%] pt-7 pb-10">
            <Dropdown
              name="km"
              label="Km / Jahr"
              value={selectedKm}
              onChange={handleKmChange}
              options={kmPricingOptions.map((o) => ({
                value: o.km,
                label: `${o.km.toLocaleString("de-CH")} km`,
              }))}
            />
            <Dropdown
              name="term"
              label="Laufzeit"
              value={selectedTerm}
              onChange={handleTermChange}
              options={termPricingOptions.map((o) => ({
                value: o.months,
                label: `${o.months} Monate`,
              }))}
            />
          </div>
          <hr className="text-gray-300 mt-5" />
          <div className="mt-6 flex flex-col gap-4 pt-4 w-full">
            <div className="text-[#0847A4] font-semibold text-[28px] lg:text-[34px]">
              {finalPrice.toLocaleString("de-CH", {
                style: "currency",
                currency: "CHF",
                minimumFractionDigits: 2,
              })}
            </div>
            <div className="text-[14px] font-light text-black">
              pro Monat {taxLabel}
            </div>
            <button
              onClick={handleSubmit}
              className="mt-4 w-full rounded-md bg-[#0847A4] px-6 py-3 text-sm font-medium text-white hover:bg-black transition"
            >
              {buttonLabel}
            </button>
            <button
              onClick={handleDownloadPDF}
              className="mt-2 w-full rounded-md border border-[#0847A4] px-6 py-3 text-sm font-medium text-[#0847A4] hover:bg-black hover:text-white transition inline-flex items-center justify-center"
            >
              <img src="/images/pdf.svg" alt="" className="mr-3" />
              Datenblatt PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
