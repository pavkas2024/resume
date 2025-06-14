import React from 'react';
import { useTranslation } from 'react-i18next';


import ContainerWrap from "../ContainerWrap/ContainerWrap";

import style from "./Memberships.module.css";

import ua from '../../assets/locales/ua.json';
import en from '../../assets/locales/en.json';


const MemberShips = ({currentLang}) => {

    const data = currentLang === 'ua' ? ua : en;
    const memberships = data.memberships || [];

    const memberFellow = data.sections[4] || "";

    return (
        <>
            <section className={style.sectionStyle}>
                <div>
                    <ContainerWrap>
                        <div>
                            <h2>{memberFellow}</h2>
                            <ul>
                                {memberships.map((membership) => (
                                    <li key={membership.org}>
                                        <div>
                                            <p>{membership.org}</p>
                                            <p>{membership.position}</p>
                                            <p>{membership.year}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ContainerWrap>
                </div>
            </section>
        </>
    );
};

export default MemberShips;