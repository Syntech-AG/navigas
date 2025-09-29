export default function KontaktSection() {
  return (
    <section className="relative w-full">
      <img
        src="/images/KontaktBgg.png"
        alt=""
        className="h-[1400px] md:h-[1200px] lg:h-[1100px] xl:h-auto"
      />
      <div className="absolute inset-0">
        <div className="mx-auto flex h-full w-full container flex-col justify-center gap-10  p-6 md:p-10">
          <div className="grid grid-cols-1 items-center gap-10 md:gap-40 lg:grid-cols-2">
            <div className="flex flex-col items-start">
              <div className="flex flex-row items-center justify-start gap-2">
                <div className="h-7 w-[4px] bg-[#0847A4]" />
                <h1 className="text-[24px] font-semibold text-[#010101]">
                  Öffnungszeiten
                </h1>
              </div>
              <div className="mt-10 flex w-full flex-col font-semibold">
                <div className="flex flex-row items-center justify-between py-3 text-[15px] uppercase text-[#010101]">
                  <h1>Monday – Friday</h1>
                  <h1>08:00 – 22:00</h1>
                </div>
                <div className="flex flex-row items-center justify-between py-3 text-[15px] uppercase text-[#010101]">
                  <h1>Saturday</h1>
                  <h1>09:00 – 23:00</h1>
                </div>
                <div className="flex flex-row items-center justify-between py-3 text-[15px] uppercase text-[#010101]">
                  <h1>Sunday</h1>
                  <h1>10:00 – 20:00</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-5 flex flex-row items-center justify-start gap-3">
                <img src="/images/line.svg" alt="" />
                <h1 className="text-[14px] uppercase text-[#0847A4]">
                  Die Fahrt beginnt hier
                </h1>
              </div>

              <div className="flex flex-col items-start justify-between gap-5">
                <h1 className="text-[36px] font-semibold text-[#010101] md:text-[48px]">
                  Ihre Reise beginnt mit einem Klick
                </h1>
                <p className="text-[#494B4E]">
                  Ob Fragen, Beratung oder ein individuelles Angebot – unser
                  Team ist
                  <br />
                  nur eine Nachricht entfernt. Füllen Sie <br />
                  das Formular aus oder rufen Sie uns an, und wir kümmern uns um
                  den Rest.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-[#000815CC]/90 p-6 backdrop-blur-xl ring-1 ring-white/10 md:p-8 lg:p-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <div className="flex flex-col gap-2">
                  <label className=" text-white/90 mb-4 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Geben Sie Ihren vollständigen Namen ein"
                    className="h-12 w-full rounded-xl px-4 text-white placeholder:text-white/50 placeholder:text-[12px] ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                    autoComplete="name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-white/90 mb-5 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Geben Sie Ihre E‑Mail‑Adresse ein"
                    className="h-12 w-full rounded-xl px-4 text-white placeholder:text-white/50 placeholder:text-[12px] ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                    autoComplete="email"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-white/90 mb-5 font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Geben Sie Ihre Telefonnummer ein"
                    className="h-12 w-full rounded-xl px-4 text-white placeholder:text-white/50 placeholder:text-[12px] ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/90 mb-5 font-semibold">
                  Nachricht
                </label>
                <textarea
                  rows={6}
                  placeholder="Haben Sie besondere Wünsche?"
                  className="w-full rounded-xl  p-4 text-white placeholder:text-white/50 ring-1 ring-white/10 placeholder:text-[12px] focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#0847A4] py-4 tracking-[0.4em] text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  SENDEN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
