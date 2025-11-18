import React from "react";
import "./WebFooter.css";

import { ReactComponent as Beau } from "../../assets/characters/Beau_TRANSPARENT.svg";

const WebFooter = ({ children }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="web-footer">
      <Beau />
      <p>© {currentYear} <strong>SIMPLETRINKET</strong></p>
      {children}
    </footer>
  );
};

export default WebFooter;
