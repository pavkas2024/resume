import React from 'react';

import Contacts from '../Contacts/Contacts';
import ContactForm from '../ContactForm/ContactForm';

import style from "./Footer.module.css";


const Footer = ({currentLang}) => (
    <footer className={style.footerStyle}>
      <div className={style.footer}>
        <ContactForm currentLang={currentLang}/>

        <div className={style.contactsWrap}>
          <Contacts currentLang={currentLang}/>
        </div>
      </div>
    

      <div className={style.copyrightWrap}>
        <p className={style.copyright}>
          © 2025
          DevLiPan
        </p>
      </div>
      
    </footer>
  );
  
  export default Footer;