import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';

import Header from './components/Header';
import Hero from './components/Hero/Hero';

import style from "./App.module.css";

// Lazy-loaded components
const InterestsAndProfiles = lazy(() => import('./components/InterestsAndProfiles/InterestsAndProfiles'));
const Memberships = lazy(() => import('./components/Memberships/Memberships'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Footer = lazy(() => import('./components/Footer'));
const ButtonUp = lazy(() => import('./components/ButtonUp/ButtonUp'));


const App = () => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('appLanguage') || 'ua';
  }); 

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem('appLanguage', language);
  }, [language, i18n]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang); // оновлення стану — це запустить useEffect
  };

  return (
    <div className={style.app}>
      <Header onLanguageChange={handleLanguageChange} />
      <main>
        <Hero currentLang={language} />
        <Suspense fallback={<div>Loading...</div>}>
          <InterestsAndProfiles currentLang={language} />
          <Memberships currentLang={language} />
          <Projects currentLang={language} />
          <Footer currentLang={language} />
          <ButtonUp />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
