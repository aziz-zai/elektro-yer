import React from "react";
import logo1 from "../assets/logo_1.png";
import logo2 from "../assets/logo_2.png";
import logo3 from "../assets/logo_3.png";
import section_img from "../assets/section_img.png";

function AboutSection() {
  return (
    <div className="about-section">
      <div className="about-section-header">
        <div>
          <h2 className="about-section-header-h2">Unsere Dienstleistungen</h2>
          <p className="about-section-header-p">
            Hier ein Überblick von unseren Schwerpunkten.
            <br />
            Dies ist nur ein kleiner Ausschnitt unseren Angebots. Sollten Sie
            nicht fündig werden - Kontaktieren Sie uns gerne!
          </p>
        </div>
        <div className="about-header-wrapper">
          <img className="about-header-logo1" src={logo1} alt="alleskönner" />
          <img className="about-header-logo2" src={logo2} alt="powerlifter" />
          <img className="about-header-logo3" src={logo3} alt="zapfer" />
        </div>
      </div>
      <div className="about-text">
        <img src={section_img} alt="sectionimg" />
        <div className="about-text-wrapper">
          <p className="about-text-item">Beratung</p>
          <p className="about-text-item">Neu-& Altbauinstallation</p>
          <p className="about-text-item">KNX/EIB-installation</p>
          <p className="about-text-item">VDE-Prüfung</p>
          <p className="about-text-item">TV&Satanlagen</p>
          <p className="about-text-item">Netzwerktechnik</p>
          <p className="about-text-item">Türsprehanlagen</p>
          <p className="about-text-item">Zählerplatzanlagen</p>
          <p className="about-text-item">Photovoltaikanlagen</p>
          <p className="about-text-item">Brandmeldeanlagen</p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
