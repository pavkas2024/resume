import React from 'react';

import style from "./Contacts.module.css";
import svg from "../../images/sprite.svg";

import ua from '../../assets/locales/ua.json';
import en from '../../assets/locales/en.json';


const Contacts = ({currentLang}) => {
    const data = currentLang === 'ua' ? ua : en;
    const address = data.address;

    return (
        
            <div className={style.contacts}>
                <div className={style.row}>
                    <div className={style.emailBlock}>
                        <svg className={style.phoneIcon}>
                            <use href={svg + "#mail"}></use>
                        </svg>
                        <ul className={style.email}>
                            <li>
                                <a className={style.emailItem} aria-label="write to my gmail.com" href="mailto:p.o.kasyanov@gmail.com"> p.o.kasyanov@gmail.com </a>
                            </li>
                            <li>
                                <a className={style.emailItem} aria-label="write to my lll.kpi.ua" href="mailto:kasyanov.pavlo@lll.kpi.ua"> kasyanov.pavlo@lll.kpi.ua</a>
                            </li>
                            <li>
                                <a className={style.emailItem} aria-label="write to my nas.gov.ua" href="mailto:pavlo.kasyanov@nas.gov.ua">pavlo.kasyanov@nas.gov.ua</a>
                            </li>
                            <li>
                                <a className={style.emailItem} aria-label="write to my stonybrook.edu" href="mailto:pavlo.kasyanov@stonybrook.edu">pavlo.kasyanov@stonybrook.edu</a>
                            </li>
                        </ul>
                    </div>
                    <div className={style.phoneBlock}>
                        <svg className={style.phoneIcon}>
                            <use href={svg + "#contacts"}></use>
                        </svg>
                        <a className={style.phone} aria-label="phone to me" href="tel:+380442048145"> +38 (044) 204-81-45</a>
                    </div>
                </div>
                <div className={style.address}>
                    <p>{address.index}, {address.country}, {address.city}, {address.street}, 37, {address.build} 35  </p>
                </div>
            </div>  
      
    );
};

export default Contacts;