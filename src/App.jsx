import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Header from './components/Header';
import Footer from './components/Footer';

import style from "./App.module.css";

const App = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en'); 

  const handleLanguageChange = (lang) => {
    setLanguage(lang); // Оновлюємо мову в стані батьківського компонента
  };

  return (
    <div className={style.app}>
      <Header onLanguageChange={handleLanguageChange}/>
        <main className={style.content}>
          <h1>{t('hello')}</h1>
          <p>{t('description')}</p>
          <p>Current Language: {language}</p>
        </main>
      <Footer />
    </div>
  );
}

export default App;
