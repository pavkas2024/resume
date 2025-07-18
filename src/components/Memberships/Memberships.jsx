import React from 'react';

import ContainerWrap from "../ContainerWrap/ContainerWrap";

import style from "./Memberships.module.css";

import ua from '../../assets/locales/ua.json';
import en from '../../assets/locales/en.json';


const MemberShips = ({currentLang}) => {

    const data = currentLang === 'ua' ? ua : en;
    const memberships = data.memberships || [];
    const interests = data.interests || [];

    const sciInterests = data.sections[3] || "";
    const memberFellow = data.sections[4] || "";

    return (
            <section className={style.sectionStyle}>
                    <ContainerWrap>
                        <div className={style.memberStyle}>
                            <div className={style.interestsBlock}>
                                <h2 className={style.title}>{sciInterests} </h2>
                                <ul>
                                    {interests.map((interest) => (
                                        <li key={interest}>{interest}</li>
                                    ))}
                                </ul>
                            </div>
                                  
                            <div className={style.memberBlock}>
                                <h2 className={style.title}>{memberFellow}</h2>
                                <ul className={style.memberList}>
                                    {memberships.map((membership) => (
                                        <li key={membership.org} className={style.memberItem}>
                                            <div className={style.itemWrap}>
                                                <p>{membership.org}</p>
                                                <p>{membership.position}</p>
                                                <p>{membership.year}</p>
                                            </div>
                                            <a className={style.itemLink} href={membership.link} target="_blank" rel="noopener noreferrer" aria-label={`${membership.org} Profile`}>{membership.link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </ContainerWrap>
            </section>
    );
};

export default MemberShips;