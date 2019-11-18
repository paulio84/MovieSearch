import React from "react";

const Footer = () => {
  return (
    <footer style={{ marginTop: "20px", textAlign: "center" }}>
      <a
        href="https://www.themoviedb.org/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          style={{ maxWidth: "130px", width: "20%" }}
          src="assets/powered-by-rectangle-blue.svg"
          alt="Powered By The Movie DB"
        />
      </a>
    </footer>
  );
};

export default Footer;
