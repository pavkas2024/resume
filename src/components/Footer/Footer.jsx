import React from 'react';

import style from "./Footer.module.css";

import  logo from "../../images/DLP_compact_logo.svg";

const Footer = () => (
    <footer className={style.footer}>
      <div className={style.copyrightWrap}>
        <p className={style.copyright}>
          © 2025
          <img src={logo} className={style.logo} alt="DevLiPan Logo" />
          DevLiPan
        </p>
      </div>
      
    </footer>
  );
  
  export default Footer;