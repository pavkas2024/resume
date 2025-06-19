import React from 'react';

import { useTranslation } from 'react-i18next';

import style from "./Header.module.css";


const Header = ({ onLanguageChange }) => {

  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('appLanguage', lang); 
    onLanguageChange(lang);
  };

  return (
    <header className={style.headerStyle}>
      <div className={style.logo}></div>
      <div className={style.languageSwitch}>
        <button className={style.languageButton} onClick={() => handleLanguageChange('en')}>
          EN
        </button>
        <button className={style.languageButton} onClick={() => handleLanguageChange('ua')}>
          UA
        </button>
      </div>
    </header>
  );
};

export default Header;