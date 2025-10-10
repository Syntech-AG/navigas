import React, { useState } from "react";

const Unverbindlich = () => {
  const [formData, setFormData] = useState({
    firma: "",
    ansprechperson: "",
    email: "",
    telefon: "",
    kategorie: "",
    dauer: "",
    nachricht: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="py-16 ">
      <div className=" bg-[#0847A4] rounded-xl py-[50px] px-[20px] md:py-[100px] md:px-[65px] container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-2">
            Jetzt unverbindlich
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl  text-white/30 mb-8">
            angragen
          </h2>
          <p className="text-lg md:text-xl mb-12 text-white">
            Teilen Sie uns kurz Ihre Anforderungen mit - wir melden uns <br />
            umgehend mit einem passenden Angebot.
          </p>

          <div className="space-y-6 mt-[112px]">
            <div>
              <p className="text-[20px] text-white/30 mb-1">E-Mail</p>
              <a
                href="mailto:contact@navigas-mobility.ch"
                className="text-xl md:text-2xl text-white  hover:underline"
              >
                contact@navigas-mobility.ch
              </a>
            </div>
            <div>
              <p className="text-[20px] text-white/30 mb-1">Telefon</p>
              <a
                href="tel:0417803133"
                className="text-xl md:text-2xl text-white  hover:underline"
              >
                041 780 31 33
              </a>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm mb-2">Firma *</label>
                <input
                  type="text"
                  name="firma"
                  value={formData.firma}
                  onChange={handleChange}
                  placeholder="Firma Name"
                  required
                  className="w-full px-4 py-3  border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">
                  Ansprechperson *
                </label>
                <input
                  type="text"
                  name="ansprechperson"
                  value={formData.ansprechperson}
                  onChange={handleChange}
                  placeholder="Ansprechpersone name"
                  required
                  className="w-full px-4 py-3  border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ihre email"
                  required
                  className="w-full px-4 py-3  border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  placeholder="Ihre Telefonnummer"
                  required
                  className="w-full px-4 py-3  border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm mb-2">
                  Kategorie
                </label>
                <input
                  type="text"
                  name="kategorie"
                  value={formData.kategorie}
                  onChange={handleChange}
                  placeholder="Fahrzeugkategorie"
                  className="w-full px-4 py-3  border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">Dauer</label>
                <input
                  type="text"
                  name="dauer"
                  value={formData.dauer}
                  onChange={handleChange}
                  placeholder="Monate"
                  className="w-full px-4 py-3  border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-white text-sm mb-2">Nachricht</label>
              <textarea
                name="nachricht"
                value={formData.nachricht}
                onChange={handleChange}
                placeholder="Haben Sie besondere Wünsche?"
                rows="4"
                className="w-full px-4 py-3  border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-[#0047AB] tracking-[4px] font-bold text-sm  py-4 rounded-full hover:bg-gray-100 transition-colors uppercase"
            >
              Anfrage senden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Unverbindlich;
