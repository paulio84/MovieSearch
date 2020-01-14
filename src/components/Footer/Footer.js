import React from "react";

import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={`${styles.footer} center-align`}>
    <a
      href="https://www.themoviedb.org/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        className={`${styles.footer__attribution}`}
        src="assets/powered-by-rectangle-blue.svg"
        alt="Powered By The Movie DB"
      />
    </a>
  </footer>
);

export default Footer;
