import React from "react";

const Impress = () => {
  return (
    <div className="bg-gradient-to-b from-[#0A1424] to-[#162339] min-h-screen py-36">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Impressum
          </h1>
          <div className="w-24 h-1 bg-[#2860B7] mx-auto"></div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 hover:border-[#2860B7]/50 transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Company Info */}
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-[#2860B7] mb-4 flex items-center gap-3">
                <span className="w-2 h-6 bg-[#2860B7] rounded-full"></span>
                Navigas Services GmbH
              </h2>
              <p className="text-[#E8EBF1] text-base md:text-lg leading-relaxed">
                Chüsseberg 19
                <br />
                CH-3267 Seedorf BE
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Telefon</h3>
                <a
                  href="tel:+41417803133"
                  className="text-[#E8EBF1] text-base md:text-lg hover:text-[#2860B7] transition-colors duration-300"
                >
                  041 780 31 33
                </a>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-2">E-Mail</h3>
                <a
                  href="mailto:contact@navigas-mobility.ch"
                  className="text-[#E8EBF1] text-base md:text-lg hover:text-[#2860B7] transition-colors duration-300 break-all"
                >
                  contact@navigas-mobility.ch
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white/10 my-10"></div>

          {/* Additional Info Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-[#2860B7]/30 transition-all duration-300">
              <h3 className="text-lg font-medium text-white mb-3">
                Geschäftsleitung
              </h3>
              <p className="text-[#E8EBF1] text-base leading-relaxed">
                Diana und Mehmet von Burg
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-[#2860B7]/30 transition-all duration-300">
              <h3 className="text-lg font-medium text-white mb-3">
                Handelsregister-Nr.
              </h3>
              <p className="text-[#E8EBF1] text-base font-mono">
                CH-170.4.013.264-6
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-[#2860B7]/30 transition-all duration-300">
              <h3 className="text-lg font-medium text-white mb-3">UID-Nr.</h3>
              <p className="text-[#E8EBF1] text-base font-mono">
                CHE-375.578.247
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-4 bg-[#2860B7]/10 rounded-full border border-[#2860B7]/30">
            <p className="text-[#E8EBF1] text-sm">
              Alle Angaben gemäß den gesetzlichen Bestimmungen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impress;
