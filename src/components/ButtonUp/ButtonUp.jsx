import React, { useEffect, useState } from "react";

import style from "./ButtonUp.module.css";
import sprite from "../../images/sprite.svg";


const ButtonUp = () => {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setBackToTop(window.scrollY > 300);
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        })
    }

    return (
        <>
            {backToTop && (
                <button className={style.btn} type='submit' onClick={scrollUp} title="Up" aria-label="Up button">
                    <svg className={style.icon} >
                        <use href={sprite + '#up'} ></use>
                    </svg>
                </button>
            )}
        </>
    )
}

export default ButtonUp;