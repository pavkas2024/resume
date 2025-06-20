import React from 'react';


import ContainerWrap from "../ContainerWrap/ContainerWrap";

import style from "./InterestsAndProfiles.module.css";

import ua from '../../assets/locales/ua.json';
import en from '../../assets/locales/en.json';


const InterestsAndProfiles = ({currentLang}) => {

    const data = currentLang === 'ua' ? ua : en;

    const profiles = data.sections[2] || "";

    return (
            <section className={style.sectionStyle}>
                    <ContainerWrap>
                        <div className={style.interstsStyle}>
                            <div className={style.profilesBlock}>
                                <h2 className={style.profileH2}>{profiles}</h2>
                                <ul className={style.list}>
                                    <li className={style.item}>
                                        <a href="https://scholar.google.com/citations?user=khjERZkAAAAJ&hl" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar Profile">
                                        Google Scholar
                                        </a>
                                    </li>
                                    <li className={style.item}>
                                        <a href="https://www.scopus.com/authid/detail.uri?authorId=23985304400" target="_blank" rel="noopener noreferrer" aria-label="Scopus Profile">
                                        Scopus
                                        </a>
                                    </li>
                                    <li className={style.item}>
                                        <a href="https://www.webofscience.com/wos/author/record/B-7347-2013" target="_blank" rel="noopener noreferrer" aria-label="Web of Science Profile">
                                        Web of Science
                                        </a>
                                    </li>
                                    <li className={style.item}>
                                        <a href="https://orcid.org/0000-0002-6662-0160" target="_blank" rel="noopener noreferrer" aria-label="ORCID Profile">
                                        ORCID
                                        </a>
                                    </li>
                                    <li className={style.item}>
                                        <a href="https://www.linkedin.com/in/pavlokasyanov/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                                        LinkedIn
                                        </a>
                                    </li>
                                    <li className={style.item}>
                                        <a href="https://www.facebook.com/pkasyanov" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
                                        Facebook
                                        </a>
                                    </li>
                                   
                                    <li className={style.item}>
                                        <a href="https://www.youtube.com/@Darkmist82" target="_blank" rel="noopener noreferrer" aria-label="You Tube Chanel">
                                        You Tube
                                        </a>
                                    </li>
                                    <li className={style.item}>
                                        <a href="https://www.old.nas.gov.ua/UA/PersonalSite/Pages/default.aspx?PersonID=0000005371" target="_blank" rel="noopener noreferrer" aria-label="National academy of sciences Profile">
                                        nauka.gov.ua
                                        </a>
                                    </li>
                                </ul>
                            </div>
                          
                        </div>
                    </ContainerWrap>
            </section>
    );
};

export default InterestsAndProfiles;