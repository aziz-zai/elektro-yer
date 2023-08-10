import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import logo from "../assets/elektro.png";

import "./Styling.css";
const StyledTooltip = ({ title, color, children, ...props }) => (
  <Tooltip
    {...props}
    title={title}
    placement="right"
    componentsProps={{
      tooltip: {
        sx: {
          backgroundColor: color,
        },
      },
    }}
  >
    {children}
  </Tooltip>
);
function NavBar() {
  const [isCopied, setIsCopied] = useState([false, false]);

  const handleCopyClick = (text, index) => {
    // Select the text to copy
    navigator.clipboard.writeText(text);

    // Update isCopied state to show check circle icon
    setIsCopied((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });

    // Reset isCopied state after 1 second
    setTimeout(() => {
      setIsCopied((prevState) => {
        const newState = [...prevState];
        newState[index] = false;
        return newState;
      });
    }, 1000);
  };
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <img className="navbar-logo" src={logo} alt="logo" />
        <div className="navbar-btns">
          <button className="navbar-btn">
            <div style={{ display: "flex", alignItems: "center" }}>
              <BsTelephoneForwardFill size={15} />
              <p className="navbar-btn-p">0179 5988329</p>
            </div>
            <StyledTooltip
              title={`${isCopied[0] ? "Erfolgreich kopiert" : "Kopieren"}`}
              color={`${isCopied[0] ? "green" : "#636363"}`}
            >
              <IconButton
                sx={{
                  cursor: "pointer",
                  color: "white",
                  aspectRatio: "1 / 1",
                }}
                onClick={() => {
                  handleCopyClick("0179 5988329", 0);
                }}
              >
                {isCopied[0] ? (
                  <CheckCircleOutlineIcon sx={{ width: 15, color: "black" }} />
                ) : (
                  <ContentCopyIcon sx={{ width: 15, color: "black" }} />
                )}
              </IconButton>
            </StyledTooltip>
          </button>
          <button className="navbar-btn2">
            <div style={{ display: "flex", alignItems: "center" }}>
              <GrMail size={15} />
              <p className="navbar-btn-p">info@elektro-yer.de</p>
            </div>
            <StyledTooltip
              title={`${isCopied[1] ? "Erfolgreich kopiert" : "Kopieren"}`}
              color={`${isCopied[1] ? "green" : "#636363"}`}
            >
              <IconButton
                sx={{
                  cursor: "pointer",
                  color: "white",
                  aspectRatio: "1 / 1",
                }}
                onClick={() => {
                  handleCopyClick("info@elektro-yer.de", 1);
                }}
              >
                {isCopied[1] ? (
                  <CheckCircleOutlineIcon sx={{ width: 15, color: "black" }} />
                ) : (
                  <ContentCopyIcon sx={{ width: 15, color: "black" }} />
                )}
              </IconButton>
            </StyledTooltip>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
