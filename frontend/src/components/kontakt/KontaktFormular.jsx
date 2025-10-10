import { motion } from "framer-motion";

export default function KontaktSection() {
  return (
    <section className="relative w-full">
      <img
        src="/images/KontaktBgg.png"
        alt=""
        className="hidden md:block h-[1200px] lg:h-[1100px] w-full xl:h-auto"
      />

      <img
        src="/images/form-mobile.png"
        alt=""
        className="block md:hidden h-[1400px]"
      />

      <div className="absolute inset-0">
        <div className="mx-auto flex h-full w-full container flex-col justify-center gap-10 p-6 md:p-10">
          <div className="grid grid-cols-1 items-center gap-10 md:gap-40 lg:grid-cols-2">
            <motion.div
              className="flex flex-col items-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex flex-row items-center justify-start gap-2">
                <div className="h-7 w-[4px] bg-[#0847A4]" />
                <h1 className="text-[24px] font-semibold text-[#010101]">
                  Öffnungszeiten
                </h1>
              </div>

              <motion.div
                className="mt-10 flex w-full flex-col font-semibold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {[
                  { day: "Monday – Friday", time: "08:00 – 22:00" },
                  { day: "Saturday", time: "09:00 – 23:00" },
                  { day: "Sunday", time: "10:00 – 20:00" },
                ].map((schedule, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-row items-center justify-between py-3 text-[15px] uppercase text-[#010101]"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <h1>{schedule.day}</h1>
                    <h1>{schedule.time}</h1>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col items-start"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className="mb-5 flex flex-row items-center justify-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img src="/images/line.svg" alt="" />
                <h1 className="text-[14px] uppercase text-[#0847A4]">
                  Die Fahrt beginnt hier
                </h1>
              </motion.div>

              <motion.div
                className="flex flex-col items-start justify-between gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
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
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="rounded-3xl bg-[#000815CC]/90 p-6 backdrop-blur-xl ring-1 ring-white/10 md:p-8 lg:p-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <form className="space-y-6">
              <motion.div
                className="grid grid-cols-1 gap-5 md:grid-cols-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {[
                  {
                    label: "Name",
                    type: "text",
                    placeholder: "Geben Sie Ihren vollständigen Namen ein",
                    autoComplete: "name",
                  },
                  {
                    label: "Email Address",
                    type: "email",
                    placeholder: "Geben Sie Ihre E‑Mail‑Adresse ein",
                    autoComplete: "email",
                  },
                  {
                    label: "Phone Number",
                    type: "tel",
                    placeholder: "Geben Sie Ihre Telefonnummer ein",
                    autoComplete: "tel",
                  },
                ].map((field, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <label className="text-white/90 mb-4 font-semibold">
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="h-12 w-full rounded-xl px-4 text-white placeholder:text-white/50 placeholder:text-[12px] ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 bg-transparent transition-all"
                      autoComplete={field.autoComplete}
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label className="text-sm text-white/90 mb-5 font-semibold">
                  Nachricht
                </label>
                <motion.textarea
                  rows={6}
                  placeholder="Haben Sie besondere Wünsche?"
                  className="w-full rounded-xl p-4 text-white placeholder:text-white/50 ring-1 ring-white/10 placeholder:text-[12px] focus:outline-none focus:ring-2 focus:ring-white/30 bg-transparent transition-all"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.div
                className="pt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.button
                  type="submit"
                  className="w-full rounded-full bg-[#0847A4] py-4 tracking-[0.4em] text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  whileHover={{
                    backgroundColor: "#0A5AC2",
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  SENDEN
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
