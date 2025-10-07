import React, { useId, useMemo, useState, useEffect, useCallback } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const cx = (...c) => c.filter(Boolean).join(" ");

function Dropdown({ name, label, options, value, onChange }) {
  const groupId = useId();

  const handleChange = useCallback(
    (e) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <div className="w-full">
      <label htmlFor={groupId} className="mb-2 block text-sm text-gray-600">
        {label}
      </label>
      <select
        id={groupId}
        name={name}
        value={value}
        onChange={handleChange}
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
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedKm, setSelectedKm] = useState(kmPricingOptions[0]?.km || 5000);
  const [selectedTerm, setSelectedTerm] = useState(
    termPricingOptions[0]?.months || 24
  );

  // Memoized image key for dependency tracking
  const imagesKey = useMemo(
    () => images.map((img) => img.src).join(","),
    [images]
  );

  const gallery = useMemo(() => {
    if (!images || images.length === 0)
      return [{ src: "", alt: "placeholder" }];
    return images;
  }, [imagesKey]);

  // Reset image index when images change
  useEffect(() => {
    setImageIndex(0);
  }, [imagesKey]);

  // Set default values when options change
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

  // Price calculations
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

  const finalPrice = useMemo(() => {
    const total = priceBreakdown.base + priceBreakdown.km + priceBreakdown.term;
    return total;
  }, [priceBreakdown]);

  // Thumbnail logic
  const thumbnails = useMemo(() => {
    const len = gallery.length;
    if (len <= 1) return [];

    const allIndices = Array.from({ length: len }, (_, idx) => idx);
    const otherIndices = allIndices.filter((idx) => idx !== imageIndex);

    return otherIndices.slice(0, 2).map((idx) => ({
      idx,
      ...gallery[idx],
      uniqueKey: `thumb-${idx}`,
    }));
  }, [imageIndex, gallery]);

  // Helper function for PDF image conversion
  const getImageBase64 = useCallback((url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL("image/jpeg", 0.8);
        resolve(dataURL);
      };
      img.onerror = () => reject(new Error("Failed to load image"));
      img.src = url;
    });
  }, []);

  // PDF Download Handler
  const handleDownloadPDF = useCallback(async () => {
    const doc = new jsPDF("p", "mm", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Header
    doc.setFillColor(8, 71, 164);
    doc.rect(0, 0, pageWidth, 30, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont(undefined, "bold");
    doc.text(title, pageWidth / 2, 12, { align: "center" });
    doc.setFontSize(11);
    doc.setFont(undefined, "normal");
    doc.text(subtitle, pageWidth / 2, 20, { align: "center" });
    doc.setFontSize(8);
    doc.text("Sofort verfügbar", pageWidth / 2, 26, { align: "center" });

    doc.setTextColor(0, 0, 0);
    let currentY = 38;

    // Add image if available
    try {
      if (images && images.length > 0 && images[0]?.src) {
        const imageData = await getImageBase64(images[0].src);
        const imgWidth = 120;
        const imgHeight = 65;
        const imgX = (pageWidth - imgWidth) / 2;

        doc.setDrawColor(8, 71, 164);
        doc.setLineWidth(0.5);
        doc.roundedRect(
          imgX - 2,
          currentY - 2,
          imgWidth + 4,
          imgHeight + 4,
          3,
          3
        );
        doc.addImage(imageData, "JPEG", imgX, currentY, imgWidth, imgHeight);
        currentY += imgHeight + 12;
      }
    } catch (error) {
      console.error("Failed to add image:", error);
      currentY += 45;
    }

    // Configuration section
    doc.setFontSize(14);
    doc.setFont(undefined, "bold");
    doc.setTextColor(8, 71, 164);
    doc.text("Ihre Konfiguration", pageWidth / 2, currentY, {
      align: "center",
    });

    doc.setFillColor(243, 245, 250);
    doc.roundedRect(20, currentY + 3, pageWidth - 40, 32, 2, 2, "F");
    currentY += 20;

    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50);
    doc.setFont(undefined, "normal");

    const leftX = 30;
    const rightX = pageWidth / 2 + 5;
    const valueOffset = 55;

    // Left column
    doc.text("Kilometer pro Jahr:", leftX, currentY);
    doc.setFont(undefined, "bold");
    doc.setTextColor(8, 71, 164);
    doc.text(
      `${selectedKm.toLocaleString("de-CH")} km`,
      leftX + valueOffset,
      currentY
    );

    doc.setFont(undefined, "normal");
    doc.setTextColor(50, 50, 50);
    doc.text("Grundpreis:", leftX, currentY + 8);
    doc.setFont(undefined, "bold");
    doc.setTextColor(8, 71, 164);
    doc.text(`CHF ${basePrice.toFixed(2)}`, leftX + valueOffset, currentY + 8);

    // Right column
    doc.setFont(undefined, "normal");
    doc.setTextColor(50, 50, 50);
    doc.text("Vertragslaufzeit:", rightX, currentY);
    doc.setFont(undefined, "bold");
    doc.setTextColor(8, 71, 164);
    doc.text(`${selectedTerm} Monate`, rightX + valueOffset, currentY);

    doc.setFont(undefined, "normal");
    doc.setTextColor(50, 50, 50);
    doc.text("Monatlicher Preis:", rightX, currentY + 8);
    doc.setFont(undefined, "bold");
    doc.setFontSize(11);
    doc.text(
      finalPrice.toLocaleString("de-CH", {
        style: "currency",
        currency: "CHF",
        minimumFractionDigits: 2,
      }),
      rightX + valueOffset,
      currentY + 8
    );

    currentY += 25;

    // Technical specifications
    doc.setFontSize(14);
    doc.setFont(undefined, "bold");
    doc.setTextColor(8, 71, 164);
    doc.text("Technische Daten", pageWidth / 2, currentY, { align: "center" });
    currentY += 8;

    const specs = [
      { label: "Schaltung", value: carData?.Getriebe || "N/A" },
      { label: "Reichweite", value: carData?.reichweite || "N/A" },
      {
        label: "Leistung",
        value: carData?.leistung ? `${carData.leistung} PS` : "N/A",
      },
      {
        label: "Verbrauch",
        value: carData?.verbrauch ? `${carData.verbrauch} L/100km` : "N/A",
      },
      { label: "Türen", value: carData?.turen || "N/A" },
      { label: "Treibstoff", value: carData?.Treibstoff || "N/A" },
    ];

    const colWidth = (pageWidth - 40) / 3;
    let row = 0;
    let col = 0;

    specs.forEach((spec) => {
      const x = 20 + col * colWidth;
      const y = currentY + row * 20;

      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(220, 220, 220);
      doc.setLineWidth(0.1);
      doc.roundedRect(x, y, colWidth - 5, 16, 1, 1, "FD");

      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      doc.setFont(undefined, "normal");
      doc.text(spec.label, x + 3, y + 6);

      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.setFont(undefined, "bold");
      doc.text(spec.value, x + 3, y + 12);

      col++;
      if (col === 3) {
        col = 0;
        row++;
      }
    });

    currentY += (row + 1) * 20 + 20;

    // Footer
    const footerStartY = pageHeight - 30;
    doc.setDrawColor(8, 71, 164);
    doc.setLineWidth(0.3);
    doc.line(20, footerStartY, pageWidth - 20, footerStartY);

    doc.setFillColor(243, 245, 250);
    doc.roundedRect(15, footerStartY + 3, pageWidth - 30, 22, 2, 2, "F");

    const date = new Date().toLocaleDateString("de-CH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    doc.setFontSize(8);
    doc.setTextColor(80, 80, 80);
    doc.setFont(undefined, "normal");
    doc.text(`Erstellt am ${date}`, 20, footerStartY + 10);
    doc.text("Alle Preise inkl. MwSt.", pageWidth / 2, footerStartY + 10, {
      align: "center",
    });

    doc.setTextColor(8, 71, 164);
    doc.setFont(undefined, "bold");
    doc.setFontSize(9);
    doc.text("www.ihrewebsite.ch", pageWidth - 20, footerStartY + 10, {
      align: "right",
    });

    doc.setFontSize(7);
    doc.setTextColor(120, 120, 120);
    doc.setFont(undefined, "italic");
    doc.text(
      "Ihr zuverlässiger Partner für Elektromobilität",
      pageWidth / 2,
      footerStartY + 18,
      {
        align: "center",
      }
    );

    const filename = `${title.replace(/\s/g, "_")}_Datenblatt.pdf`;
    doc.save(filename);
  }, [
    title,
    subtitle,
    images,
    selectedKm,
    selectedTerm,
    basePrice,
    finalPrice,
    carData,
    getImageBase64,
  ]);

  // Event handlers
  const handleSubmit = useCallback(() => {
    const selectionData = {
      kmPerYear: Number(selectedKm),
      termMonths: Number(selectedTerm),
      imageIndex: imageIndex,
      finalPrice: finalPrice,
      basePrice: Number(basePrice),
      priceBreakdown: priceBreakdown,
    };

    onSelect?.(selectionData);
  }, [
    selectedKm,
    selectedTerm,
    imageIndex,
    finalPrice,
    basePrice,
    priceBreakdown,
    onSelect,
  ]);

  const next = useCallback(() => {
    setImageIndex((imageIndex + 1) % gallery.length);
  }, [imageIndex, gallery.length]);

  const prev = useCallback(() => {
    setImageIndex((imageIndex - 1 + gallery.length) % gallery.length);
  }, [imageIndex, gallery.length]);

  const handleKmChange = useCallback((value) => {
    setSelectedKm(Number(value));
  }, []);

  const handleTermChange = useCallback((value) => {
    setSelectedTerm(Number(value));
  }, []);

  return (
    <section className="mx-auto rounded-xl container">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Image Gallery */}
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
                    ❮
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={next}
                    className="pointer-events-auto hover:cursor-pointer flex h-10 w-13 text-[26px] justify-center items-center place-items-center rounded-full bg-[#0847A4] hover:bg-transparent text-white backdrop-blur transition"
                  >
                    ❯
                  </button>
                </div>
              )}
            </div>

            {/* Thumbnails */}
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

          {/* Configuration Options */}
          <div className="grid gap-6 md:grid-cols-1 w-[60%] pt-7 pb-10">
            <Dropdown
              name="km"
              label="Km / Jahr"
              value={selectedKm}
              onChange={handleKmChange}
              options={kmPricingOptions.map((opt) => ({
                value: opt.km,
                label: `${opt.km.toLocaleString("de-CH")} km`,
              }))}
            />
            <Dropdown
              name="term"
              label="Laufzeit"
              value={selectedTerm}
              onChange={handleTermChange}
              options={termPricingOptions.map((opt) => ({
                value: opt.months,
                label: `${opt.months} Monate`,
              }))}
            />
          </div>

          <hr className="text-gray-300 mt-5" />

          {/* Price Display */}
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

            {/* Action Buttons */}
            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex w-full items-center justify-center rounded-md bg-[#0847A4] px-6 py-3 text-sm font-medium text-white shadow hover:bg-black transition"
            >
              {buttonLabel}
            </button>
            <button
              type="button"
              onClick={handleDownloadPDF}
              className="inline-flex w-full items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-[#0847A4] hover:text-white shadow hover:bg-black border transition"
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
