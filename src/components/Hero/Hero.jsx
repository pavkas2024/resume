import React from 'react';

import ContainerWrap from "../ContainerWrap/ContainerWrap";

import style from "./Hero.module.css";

import ua from '../../assets/locales/ua.json';
import en from '../../assets/locales/en.json';


const Hero = ({currentLang}) => {

    const data = currentLang === 'ua' ? ua : en;

    return (
        <>
            <section className={style.sectionStyle}>
                <div className={style.container}>
                    <ContainerWrap>
                        <div className={style.title}>
                            <div className={style.info}>
                                <h1>{data.surname} {data.name} {data.patron} </h1>
                                <p>{data.position}</p>
                                <p>{data.organization}</p>
                            </div>
                            <div>
                                <p>{data.corMemb}</p>
                                <p>{data.degree}</p>
                                <p>{data.acadTitle}</p>
                            </div>
                        </div>
                    </ContainerWrap>
                </div>
            </section>
        </>
    );
};

export default Hero;