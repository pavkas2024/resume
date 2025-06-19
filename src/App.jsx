import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';

import Header from './components/Header';
import Hero from './components/Hero/Hero';
import InterestsAndProfiles from './components/InterestsAndProfiles/InterestsAndProfiles';
import Memberships from './components/Memberships/Memberships';
// import Projects from './components/Projects/Projects';
import Footer from './components/Footer';
import ButtonUp from './components/ButtonUp/ButtonUp';

import style from "./App.module.css";

const Projects = lazy(() => import('./components/Projects/Projects'));


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
      <Header onLanguageChange={handleLanguageChange}/>
      <main>
        <Hero currentLang={language} />
        <InterestsAndProfiles currentLang={language}/>
        <Memberships  currentLang={language}/>
        <Suspense fallback={<div>Loading...</div>}>
          <Projects currentLang={language}/>
        </Suspense>
      </main>
      <Footer currentLang={language}/>
      <ButtonUp />
    </div>
  );
}

export default App;
