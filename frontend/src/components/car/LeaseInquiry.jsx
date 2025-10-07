import React, {
  useId,
  useMemo,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  textarea: "",
};

const STEPS = [
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

  const handleChange = useCallback(
    (e) => {
      setTouched(true);
      onChange?.(e);
    },
    [onChange]
  );

  const handleBlur = useCallback(() => setTouched(true), []);

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
        onChange={handleChange}
        onBlur={handleBlur}
        aria-invalid={invalid ? "true" : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={[
          "mt-2 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition",
          "focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600",
          invalid ? "border-pink-600 ring-2 ring-pink-200" : "border-[#696D79]",
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
        className="mt-2 block w-full resize-y rounded-lg border border-[#696D79] bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600"
        {...rest}
      />
    </div>
  );
};

export default function LeaseInquiry({ car }) {
  const navigate = useNavigate();
  const [currentStep] = useState(2);
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [submitting, setSubmitting] = useState(false);
  const submitRef = useRef(null);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const displayPrice = useMemo(() => {
    const final = Number(car?.finalPrice);
    const base = Number(car?.price);

    if (!isNaN(final) && final > 0) return final;
    if (!isNaN(base) && base > 0) return base;
    return 0;
  }, [car?.finalPrice, car?.price]);

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

  const handleChange = useCallback(
    (key) => (e) => setForm((s) => ({ ...s, [key]: e.target.value })),
    []
  );

  const handleImageError = useCallback((e) => {
    console.log("Image failed to load:", e.target.src);
    e.target.src = "/images/car.png";
  }, []);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (Object.keys(errors).length) {
        submitRef.current?.focus();
        return;
      }
      setSubmitting(true);

      try {
        const baseTemplateParams = {
          from_name: `${form.firstName} ${form.lastName}`,
          client_email: form.email,
          phone: form.phone,
          message: form.textarea || "Keine Bemerkungen",
          car_name: car.name,
          km_per_year: car.kmPerYear,
          term_months: car.termMonths,
          price: displayPrice.toLocaleString("de-CH", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
        };

        const [companyResponse, clientResponse] = await Promise.all([
          emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_COMPANY,
            baseTemplateParams
          ),
          emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_CLIENT,
            { ...baseTemplateParams, client_name: baseTemplateParams.from_name }
          ),
        ]);

        console.log("✅ Emails sent successfully");

        navigate("/reserve-car-2", {
          state: {
            car: {
              id: car.id || 1,
              name: car.name,
              image: car.imageUrls || car.img || "/images/Image.png",
              kmPerYear: `${car.kmPerYear?.toLocaleString("de-CH")} km`,
              duration: `${car.termMonths} Monate`,
              price: `${displayPrice.toLocaleString("de-CH", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })} CHF`,
            },
          },
        });
      } catch (error) {
        console.error("❌ Error sending email:", error);
        alert(
          "Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut."
        );
      } finally {
        setSubmitting(false);
      }
    },
    [form, errors, car, displayPrice, navigate]
  );

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-12 lg:py-16">
        <div
          className="flex items-center justify-center w-full py-6"
          aria-label="Progress"
        >
          {STEPS.map((step, idx) => {
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
                {idx < STEPS.length - 1 && (
                  <div
                    className="flex-1 border-t border-dashed border-gray-300 mx-2"
                    role="presentation"
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="mt-25 flex lg:flex-row-reverse flex-col justify-between w-full gap-8">
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl lg:max-w-[40%] bg-[#F3F5FA] p-5 shadow-sm sm:p-10 flex flex-col justify-center"
          >
            <h3 className="lg:text-[34px] text-[24px] max-sm:mx-auto font-semibold text-gray-900">
              Ihre Anfragen
            </h3>

            <div className="mt-5 flex flex-col items-center gap-7">
              <div className="flex flex-row items-center w-full gap-3">
                <Input
                  label="Vorname"
                  required
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={handleChange("firstName")}
                  placeholder="Ihren Vorname"
                  error={errors.firstName}
                />
                <Input
                  label="Nachname"
                  required
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={handleChange("lastName")}
                  placeholder="Ihren Nachname"
                  error={errors.lastName}
                />
              </div>
              <div className="flex flex-col items-center w-full gap-7">
                <Input
                  label="E‑mail Adresse"
                  required
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="Ihre E-Mail-Adressen"
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
                  placeholder="Ihre Telefonnummer"
                  error={errors.phone}
                />
                <Textarea
                  label="Ihre Wünsche oder Bemerkungen (optional)"
                  value={form.textarea}
                  onChange={handleChange("textarea")}
                  placeholder="Haben Sie besondere Wünsche?"
                />
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <button
                ref={submitRef}
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-blue-700/20 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600/30 active:translate-y-px disabled:opacity-60"
                aria-busy={submitting ? "true" : "false"}
              >
                {submitting ? "Wird gesendet..." : "Jetzt Anfrage absenden"}
              </button>
            </div>

            <div className="mt-10">
              <hr className="text-gray-300 w-full py-4" />
              <div className="flex flex-row items-center justify-start gap-2">
                <img src="/images/qelsi.svg" alt="" />
                <h1 className="text-[#696D79] text-[10px]">
                  Ihre Daten sind sicher und werden verschlüsselt übermittelt.
                </h1>
              </div>
            </div>
          </form>

          <aside className="lg:max-w-[60%]">
            <div className="flex flex-col items-start gap-[20px]">
              <h1 className="text-[#010101] text-[32px] font-medium">
                Super Wahl – Ihr {car?.name || "Fahrzeug"} wartet auf Sie!
              </h1>
              <p className="text-[#474747] text-[13px]">
                Füllen Sie bitte noch kurz das Anfrage-Formular aus. Danach
                senden wir Ihnen einen Registrierungslink für Ihre Bestellung
                und die Bonitätsprüfung.
              </p>
              <h1 className="text-[#010101] text-[32px] font-semibold py-[31px] border-[#DCDCDC] border-t border-b w-[95%]">
                {car?.name || "Fahrzeug"}
              </h1>
            </div>

            <div>
              <div className="mt-10 flex flex-row items-center justify-start gap-10 flex-wrap">
                <div className="flex flex-col items-start gap-2">
                  <h1 className="text-[#5E83E7] text-[14px] tracking-loose ml-2">
                    Km / Jahr:
                  </h1>
                  <h1 className="text-[#010101] py-2 p-8 border-[#D1D5DD] border rounded-2xl text-[22px] font-semibold">
                    {car?.kmPerYear?.toLocaleString("de-CH") || "0"} km
                  </h1>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <h1 className="text-[#5E83E7] text-[14px] tracking-loose ml-2">
                    Laufzeit:
                  </h1>
                  <h1 className="text-[#010101] py-2 px-8 border-[#D1D5DD] border rounded-2xl text-[22px] font-semibold">
                    {car?.termMonths || "0"} Monate
                  </h1>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <h1 className="text-[#5E83E7] text-[14px] tracking-loose ml-2">
                    Preis
                  </h1>
                  <h1 className="text-[#010101] py-2 px-8 border-[#D1D5DD] border rounded-2xl text-[22px] font-semibold">
                    {displayPrice > 0 ? (
                      <>
                        {displayPrice.toLocaleString("de-CH", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}{" "}
                        CHF
                      </>
                    ) : (
                      "Preis auf Anfrage"
                    )}
                  </h1>
                </div>
              </div>

              <div className="mt-10">
                <img
                  src={car?.imageUrls || car?.img || "/images/car.png"}
                  alt={car?.name || "Fahrzeug"}
                  className="w-full rounded-xl object-cover"
                  onError={handleImageError}
                />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
