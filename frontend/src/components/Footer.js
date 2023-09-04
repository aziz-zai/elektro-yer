import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import React from "react";
import "./Styling.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">
        <div className="col-2">
          <h3>Bilal Yer</h3>
          <p className="footer-p">Nagolder Straße 4</p>
          <p className="footer-p">71131 Jettingen</p>
          <p className="footer-p">Deutschland</p>
        </div>
        <div className="col-3">
          <h3>Kontakt</h3>
          <p className="footer-p">
            <PhoneInTalkIcon /> (+49)179 5988329
          </p>
          <p className="footer-p">
            <EmailIcon /> info@elektro-yer.de
          </p>
          <p className="footer-p">
            <LanguageIcon /> www.elektro-yer.de
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
