import { useId, useMemo, useRef, useState } from "react";

const currency = (n) =>
  new Intl.NumberFormat("de-CH", { style: "currency", currency: "CHF" }).format(
    n
  );

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
        className={[
          "mt-2 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition",
          "focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600",
          invalid ? "border-pink-600 ring-2 ring-pink-200" : "border-gray-300",
          "aria-[invalid=true]:border-pink-600",
        ].join(" ")}
        aria-invalid={invalid ? "true" : "false"}
        {...rest}
      />
      {invalid && (
        <p className="mt-1.5 text-xs text-pink-600">
          Dieses Feld ist erforderlich. [5]
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

export default function LeaseInquiry({
  car = {
    name: "Polestar 2",
    img: "/images/car.png",
    kmPerYear: 5000,
    termMonths: 48,
    price: 599,
  },
}) {
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
    if (!form.firstName.trim()) e.firstName = "Vorname ist erforderlich. [3]";
    if (!form.lastName.trim()) e.lastName = "Name ist erforderlich. [3]";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim() || ""))
      e.email = "Gültige E-Mail angeben. [3]";
    if (!/^[+()0-9\s-]{6,}$/.test(form.phone.trim() || ""))
      e.phone = "Gültige Telefonnummer angeben. [3]";
    return e;
  }, [form]);

  const submitRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (key) => (e) =>
    setForm((s) => ({ ...s, [key]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("validated");
    if (Object.keys(errors).length) {
      submitRef.current?.focus();
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-12 lg:py-16">
        <header className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
            Sle haben die richtige Wahl getroffen!
          </h1>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            Sie haben Ihre Auswahl getroffen, senden Sie uns jetzt Ihre Anfrage
            | Wir melden uns umgehend mit einer unverbindlichen Offerte.
          </p>
        </header>

        <div className="mt-10 rounded-2xl bg-gradient-to-b from-[#0F56FF] to-[#0D43C7] p-6 text-white shadow-xl sm:p-8">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <div className="mx-auto aspect-[4/3] w-full max-w-[420px] overflow-hidden rounded-xl">
              <img
                src={car.img}
                alt={`${car.name}`}
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
                width="800"
                height="600"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{car.name}</h2>
              <hr className="my-4 border-white/20" />
              <div className="grid grid-cols-2 gap-4 sm:max-w-sm">
                <Spec
                  label="KM / Jahr"
                  value={`${car.kmPerYear.toLocaleString("de-CH")} km`}
                />
                <Spec label="Laufzeit" value={`${car.termMonths} Monate`} />
                <Spec label="Preis" value={`${currency(car.price)} / Monat`} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-gray-200 bg-gray-50/80 p-5 shadow-sm sm:p-7 flex flex-col justify-center"
          >
            <h3 className="lg:text-[34px] text-[24px] max-sm:mx-auto font-semibold text-gray-900">
              Anfragen per Formular
            </h3>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="Vorname"
                required
                autoComplete="given-name"
                value={form.firstName}
                onChange={handleChange("firstName")}
                placeholder="Geben Sie Ihren Vornamen ein"
                aria-errormessage={
                  errors.firstName ? "err-firstName" : undefined
                }
              />
              <Input
                label="Name"
                required
                autoComplete="family-name"
                value={form.lastName}
                onChange={handleChange("lastName")}
                placeholder="Geben Sie Ihren Nachnamen ein"
                aria-errormessage={errors.lastName ? "err-lastName" : undefined}
              />
              <Input
                label="E‑mail Adresse"
                required
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange("email")}
                placeholder="Geben Sie Ihre E‑Mail Adresse ein"
                aria-errormessage={errors.email ? "err-email" : undefined}
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
                aria-errormessage={errors.phone ? "err-phone" : undefined}
              />
            </div>

            <h3 className="mt-8 text-lg font-semibold text-gray-900">
              Rückruf gewünscht
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="Datum (optional)"
                type="date"
                value={form.date}
                onChange={handleChange("date")}
              />
              <Input
                label="Zeit (optional)"
                type="time"
                value={form.time}
                onChange={handleChange("time")}
              />
              <div className="sm:col-span-2">
                <Textarea
                  label="Ihre Wünsche und Bemerkungen (optional)"
                  value={form.notes}
                  onChange={handleChange("notes")}
                  placeholder="Haben Sie besondere Wünsche?"
                />
              </div>
            </div>

            <div aria-live="polite" className="sr-only">
              {Object.values(errors).join(". ")}
            </div>

            {/* <div className="mt-6 sm:mt-8">
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
            </div> */}
          </form>

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

function Spec({ label, value }) {
  return (
    <div className="rounded-lg bg-white/5 px-4 py-3">
      <p className="text-xs uppercase tracking-wide text-white/80">{label}</p>
      <p className="mt-1 text-base font-semibold">{value}</p>
    </div>
  );
}
