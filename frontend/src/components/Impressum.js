import React from 'react';
import "./Impressum.css";

const Impressum = () => {
  return (
    <div className="impressum">
      <h1>Impressum</h1>
      <p>Angaben gemäß § 5 DDG</p>
      <p>
        Bilal Yer <br />
        Nagolder Straße 4 <br />
        71131 Jettingen <br />
      </p>
      <p>
        <strong>Vertreten durch:</strong> <br />
        Bilal Yer
      </p>
      <p>
        <strong>Kontakt:</strong> <br />
        Telefon: +49-1795988329 <br />
        E-Mail: <a href="mailto:info@elektro-yer.de">info@elektro-yer.de</a>
      </p>
      <p>
        <strong>Umsatzsteuer-ID:</strong> <br />
        Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE313524830
      </p>
      <p>
        <strong>Aufsichtsbehörde:</strong> <br />
        Handwerkskammer Region Stuttgart
      </p>
    </div>
  );
};

export default Impressum;
