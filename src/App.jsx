import React, { useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero/Hero';
import InterestsAndProfiles from './components/InterestsAndProfiles/InterestsAndProfiles';
import Memberships from './components/Memberships/Memberships';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer';

import style from "./App.module.css";


const App = () => {
  const [language, setLanguage] = useState('ua'); 

  const handleLanguageChange = (lang) => {
    setLanguage(lang); // Оновлюємо мову в стані батьківського компонента
  };

  return (
    <div className={style.app}>
      <Header onLanguageChange={handleLanguageChange}/>
      <main>
        <Hero currentLang={language} />
        <InterestsAndProfiles currentLang={language}/>
        <Memberships  currentLang={language}/>
        <Projects currentLang={language}/>
      </main>
      <Footer currentLang={language}/>
    </div>
  );
}

export default App;
