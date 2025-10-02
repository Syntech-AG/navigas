import React, { useId, useMemo, useRef, useState } from "react";

const currency = (n) =>
  new Intl.NumberFormat("de-CH", { style: "currency", currency: "CHF" }).format(
    n
  );

const steps = [
  { label: "Fahrzeug wählen" },
  { label: "Anfrage senden" },
  { label: "Lieferung" },
];

const Input = ({
  id,
  label,
  type = "text",
  required,
  placeholder,
  autoComplete,
  pattern,
  maxLength,
  onChange,
  value,
  error,
  ...rest
}) => {
  const inputId = id || useId();
  const [touched, setTouched] = useState(false);
  const invalid = touched && required && !value;

  return (
    <div className="w-full">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-900"
      >
        {label} {required && <span className="text-pink-600">*</span>}
      </label>
      <input
        id={inputId}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        pattern={pattern}
        maxLength={maxLength}
        value={value}
        onChange={(e) => {
          setTouched(true);
          onChange?.(e);
        }}
        onBlur={() => setTouched(true)}
        aria-invalid={invalid ? "true" : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={[
          "mt-2 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition",
          "focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600",
          invalid ? "border-pink-600 ring-2 ring-pink-200" : "border-gray-300",
        ].join(" ")}
        {...rest}
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-1.5 text-xs text-pink-600">
          {error}
        </p>
      )}
    </div>
  );
};

const Textarea = ({ id, label, value, onChange, ...rest }) => {
  const inputId = id || useId();
  return (
    <div className="w-full">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <textarea
        id={inputId}
        value={value}
        onChange={onChange}
        rows={5}
        className="mt-2 block w-full resize-y rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600"
        {...rest}
      />
    </div>
  );
};

export default function LeaseInquiry({ car }) {
  const [currentStep, setCurrentStep] = useState(2);

  const totals = useMemo(
    () => ({
      monthly: car.price,
      fees: 0,
      total: car.price,
    }),
    [car.price]
  );

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
    coupon: "",
  });

  const errors = useMemo(() => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Vorname ist erforderlich.";
    if (!form.lastName.trim()) e.lastName = "Name ist erforderlich.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim() || ""))
      e.email = "Gültige E-Mail angeben.";
    if (!/^[+()0-9\s-]{6,}$/.test(form.phone.trim() || ""))
      e.phone = "Gültige Telefonnummer angeben.";
    return e;
  }, [form]);

  const submitRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (key) => (e) =>
    setForm((s) => ({ ...s, [key]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length) {
      submitRef.current?.focus();
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
    setCurrentStep(2);
  };

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-12 lg:py-16">
        {/* Stepper */}
        <div
          className="flex items-center justify-center w-full py-6"
          aria-label="Progress"
        >
          {steps.map((step, idx) => {
            const isCompleted = idx + 1 < currentStep;
            const isActive = idx + 1 === currentStep;

            return (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center min-w-[120px]">
                  <div
                    className={
                      isCompleted
                        ? "bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center"
                        : isActive
                        ? "bg-blue-900 text-white w-10 h-10 rounded-xl flex items-center justify-center"
                        : "bg-gray-100 text-gray-400 w-10 h-10 rounded-xl flex items-center justify-center"
                    }
                  >
                    {isCompleted ? (
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 10l4 4 6-6"
                          stroke="white"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <span className="font-semibold text-lg">{idx + 1}</span>
                    )}
                  </div>
                  <span
                    className={
                      isCompleted
                        ? "mt-2 text-xs text-blue-600"
                        : isActive
                        ? "mt-2 text-xs text-black"
                        : "mt-2 text-xs text-gray-400"
                    }
                  >
                    {step.label}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className="flex-1 border-t border-dashed border-gray-300 mx-2"
                    role="presentation"
                  ></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-gray-200 bg-gray-50/80 p-5 shadow-sm sm:p-7 flex flex-col justify-center"
          >
            <h3 className="lg:text-[34px] text-[24px] max-sm:mx-auto font-semibold text-gray-900">
              Ihre Anfragen
            </h3>

            <div className="mt-5 flex flex-col items-center">
              <div className="flex flex-row items-center w-full gap-3">
                <Input
                  label="Vorname"
                  required
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={handleChange("firstName")}
                  placeholder="Geben Sie Ihren Vornamen ein"
                  error={errors.firstName}
                />
                <Input
                  label="Nachname"
                  required
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={handleChange("lastName")}
                  placeholder="Geben Sie Ihren Nachnamen ein"
                  error={errors.lastName}
                />
              </div>
              <div className="flex flex-col items-center w-full">
                <Input
                  label="E‑mail Adresse"
                  required
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="Geben Sie Ihre E‑Mail Adresse ein"
                  error={errors.email}
                />
                <Input
                  label="Telefonnummer"
                  required
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  placeholder="Geben Sie Ihre Telefonnummer ein"
                  error={errors.phone}
                />
              </div>
            </div>
            <div aria-live="polite" className="sr-only">
              {Object.values(errors).join(". ")}
            </div>

            <div className="mt-6 sm:mt-8">
              <button
                ref={submitRef}
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-blue-700/20 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600/30 active:translate-y-px disabled:opacity-60"
                aria-busy={submitting ? "true" : "false"}
              >
                {submitting ? "Senden..." : "Senden"}
              </button>
              {submitted && (
                <p className="mt-3 text-sm text-green-700">
                  Anfrage gesendet – wir melden uns umgehend.
                </p>
              )}
            </div>
          </form>

          {/* Sidebar */}
          <aside className="rounded-2xl border border-gray-200 bg-white pb-5">
            <div className="flex flex-col items-start gap-4">
              <div className="w-full overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={car.img}
                  alt={`${car.name}`}
                  className="h-full w-auto object-contain mx-auto"
                  loading="lazy"
                  decoding="async"
                  width="320"
                  height="240"
                />
              </div>
              <div className="px-5">
                <h4 className="text-base font-semibold text-gray-900">
                  {car.name}
                </h4>
                <p className="mt-1 text-xs text-gray-600">
                  {car.kmPerYear.toLocaleString("de-CH")} KM x {car.termMonths}{" "}
                  Monate
                </p>
              </div>
            </div>

            <dl className="mt-5 space-y-3 text-sm px-5">
              <Row label="Preis / Monat" value={currency(totals.monthly)} />
              <Row label="Steuern und Gebühren" value={currency(totals.fees)} />
              <Row label="Gesamt" value={currency(totals.total)} strong />
            </dl>

            <div className="mt-4 px-5">
              <div className="flex items-stretch rounded-xl border border-gray-300 bg-white focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/20">
                <input
                  type="text"
                  inputMode="text"
                  value={form.coupon}
                  onChange={handleChange("coupon")}
                  placeholder="Gutscheincode hinzufügen"
                  className="min-w-0 flex-1 rounded-l-xl bg-transparent px-3.5 py-2.5 text-sm outline-none placeholder-gray-400"
                  aria-label="Gutscheincode"
                />
                <button
                  type="button"
                  onClick={() => {}}
                  className="grid w-10 place-items-center rounded-r-xl bg-blue-600 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                  aria-label="Gutscheincode anwenden"
                >
                  ↗
                </button>
              </div>
            </div>

            <hr className="w-full h-[1px] text-[#DDE2EC] my-7" />
            <p className="mt-4 text-xs text-gray-500 px-5">
              Stornierung verfügbar
              <br />
              Vor: Fr. 15. Nov, 10:30 Uhr
            </p>

            <div className="w-full px-5">
              <button
                type="button"
                onClick={() => {
                  submitRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className="mt-4 px-5 w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-blue-700/20 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600/30 active:translate-y-px"
              >
                Senden
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Row({ label, value, strong = false }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-gray-600">{label}</dt>
      <dd className={strong ? "font-semibold text-gray-900" : "text-gray-900"}>
        {value}
      </dd>
    </div>
  );
}
