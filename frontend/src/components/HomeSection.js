import React from "react";
import { GrMail } from "react-icons/gr";
import homeImg from "../assets/homeImg.png";
import "./Styling.css";
function HomeSection() {
  return (
    <div className="home-background">
      <div className="home-content">
        <div className="home-content-left">
          <h2 className="home-content-left-h2">
            Elektro Yer - Ihr Partner für Elektroinstallationen in Herrenberg
            und Umgebung.
          </h2>
          <p className="home-content-left-p">
            Egal ob Sie langfristige Elektroinstallationen planen oder bei
            spontanen Elektro-Notfällen Hilfe benötigen – wir sind für Sie da.
            Melden Sie sich einfach telefonisch oder per E-Mail.
          </p>
          <button className="home-btn">
            {" "}
            <GrMail size={22} />
            info@elektro-yer.de
          </button>
        </div>
        <div>
          <img className="home-img" src={homeImg} alt="homebild" />
        </div>
      </div>
      <div class="divider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default HomeSection;
