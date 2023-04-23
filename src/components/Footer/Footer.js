import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="copy">
        &copy; <span>DeepJais{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
