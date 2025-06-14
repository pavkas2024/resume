import React from 'react';
import { useTranslation } from 'react-i18next';


import ContainerWrap from "../ContainerWrap/ContainerWrap";

import style from "./InterestsAndProfiles.module.css";

import ua from '../../assets/locales/ua.json';
import en from '../../assets/locales/en.json';


const InterestsAndProfiles = ({currentLang}) => {

    const data = currentLang === 'ua' ? ua : en;
    const interests = data.interests || [];

    const sciInterests = data.sections[3] || "";
    const profiles = data.sections[2] || "";

    return (
        <>
            <section className={style.sectionStyle}>
                <div>
                    <ContainerWrap>
                        <div >
                            <div>
                                <h2>{sciInterests} </h2>
                                <ul>
                                    {interests.map((interest) => (
                                        <li key={interest}>{interest}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h2>{profiles}</h2>
                                <div>
                                    <p>Scopus</p>
                                    <p>Web of Science</p>
                                    <p>ORCID</p>
                                    <p>Google Scholar</p>
                                    <p>Scopus</p>
                                    <p>You Tube</p>
                                    <p>Scopus</p>
                                    <p>nauka.gov.ua</p>
                                </div>
                            </div>
                        </div>
                    </ContainerWrap>
                </div>
            </section>
        </>
    );
};

export default InterestsAndProfiles;