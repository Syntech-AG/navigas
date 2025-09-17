import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0A1424]">
      <div className="container">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-8">
          <img src="/images/navigasLogo.svg" alt="" />
          <div>
            <h1 className="text-[19px] font-medium text-white">Standort</h1>
            <p className="text-[#727578] font-regular text-[17px]">
              Navigas Services GmbH
              <br />
              Chüsseberg 19
              <br />
              CH-3267 Seedorf BE
            </p>
            <p>contact@navigas-mobility.ch</p>
            <p>+ (0)41 780 31 33</p>
          </div>
          <div>
            <h1>Schnellzugriffe</h1>
            <p>Privatkunden</p>
            <p>Geschäftskunden</p>
            <p>Über Uns</p>
            <p>FAQ</p>
            <p>Kontakt</p>
          </div>
          <div>
            <h1>Newsletter</h1>
            <div>
              <input
                placeholder="Geben Sie Ihre E-Mail-Adresse ein"
                type="text"
              />
              <div>
                <input type="checkbox" />
                <h1>
                  Ich stimme zu, dass die <span>Datenschutzrichtlinie</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1>
              <span>Navigas Services GmbH</span> © 2025. Alle Rechte
              vorbehalten.
            </h1>
            <h1>Entworfen von: SyntechSolutions AG</h1>
          </div>
          <div>
            <h1>Datenschutz</h1>
            <h1>Impressum</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
