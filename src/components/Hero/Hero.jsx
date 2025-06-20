import React from 'react';

import ContainerWrap from "../ContainerWrap/ContainerWrap";
import CV from "../CV/CV";

import style from "./Hero.module.css";

import ua from '../../assets/locales/ua.json';
import en from '../../assets/locales/en.json';


const Hero = ({currentLang}) => {

    const data = currentLang === 'ua' ? ua : en;

    return (
            <section className={style.sectionStyle}>  
                <ContainerWrap>
                    <div className={style.heroStyle}>
                        <div className={style.info}>
                            <div className={style.imageWrapper}>
                                <img 
                                    src={process.env.PUBLIC_URL + '/files/photo.webp'} 
                                    alt="Pavlo Kasyanov" 
                                    width="280"
                                    height="280"
                                    loading="eager"
                                    decoding="async"
                                    fetchpriority="high"
                                />
                            </div>
                            <div className={style.infoShort}>
                                <h1 className={style.name}>{data.surname} {data.name} {data.patron} </h1>
                                <p className={style.position}>{data.position}</p>
                                <div >
                                    <p className={style.org}>{data.organization.inst}</p>
                                    <p className={style.org}>{data.organization.un}</p>
                                    <p className={style.org}>{data.organization.min}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={style.additionalInf}>
                            <div className={style.degree}>
                                <p>{data.corMemb}</p>
                                <p>{data.degree}</p>
                                <p>{data.acadTitle}</p>
                            </div>
                            <CV />
                        </div>
                    </div>
                </ContainerWrap>
            </section>
    );
};

export default Hero;