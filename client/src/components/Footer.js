import React from "react";

const footerStyle = {
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
  backgroundColor: "white",
  color: "black",
  textAlign: "center"
};

const Footer = React.memo(() => (
  <div>
    <footer style={footerStyle}>© copyright 2018</footer>
  </div>
));

export default Footer;
