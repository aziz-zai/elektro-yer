import React from 'react';
import "./Datenschutz.css";

const Datenschutz = () => {
  return (
    <div className="datenschutz">
      <h1>Datenschutzerklärung</h1>

      <section>
        <h2>1. Allgemeine Hinweise</h2>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
        </p>
      </section>

      <section>
        <h2>2. Verantwortliche Stelle</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
          <strong>Bilal Yer</strong><br />
          Nagolder Straße 4<br />
          71131 Jettingen<br />
          Deutschland<br />
          Telefon: (+49)179 5988329<br />
          E-Mail: info@elektro-yer.de
        </p>
      </section>

      <section>
        <h2>3. Erfassung von Daten beim Website-Besuch</h2>
        <p>
          Beim Besuch unserer Website werden durch den Provider automatisch Informationen in sogenannten Server-Logfiles erfasst. Diese Informationen umfassen:
          <ul>
            <li>IP-Adresse des zugreifenden Geräts</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Browsertyp und -version</li>
            <li>Verwendetes Betriebssystem</li>
          </ul>
          Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt. Sie dienen ausschließlich der Sicherstellung eines störungsfreien Betriebs der Seite.
        </p>
      </section>

      <section>
        <h2>4. Ihre Rechte</h2>
        <p>
          Sie haben das Recht:
          <ul>
            <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen,</li>
            <li>gemäß Art. 16 DSGVO die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen,</li>
            <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen,</li>
            <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen,</li>
            <li>gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen.</li>
          </ul>
        </p>
        <p>
          Um diese Rechte auszuüben, können Sie uns jederzeit unter den angegebenen Kontaktdaten erreichen.
        </p>
      </section>

      <section>
        <h2>5. Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h2>
        <p>
          Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Die zuständige Aufsichtsbehörde für datenschutzrechtliche Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz hat.
        </p>
      </section>

      <section>
        <h2>6. Datensicherheit</h2>
        <p>
          Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten vor Manipulation, Verlust, Zerstörung oder dem unbefugten Zugriff durch Dritte zu schützen.
        </p>
      </section>

      <section>
        <h2>7. Änderungen der Datenschutzerklärung</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Dienstleistungen in der Datenschutzerklärung umzusetzen.
        </p>
      </section>
    </div>
  );
};

export default Datenschutz;
