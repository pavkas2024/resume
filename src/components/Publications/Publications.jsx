import React, { useState, useEffect, useRef } from "react";
import ContainerWrap from "../ContainerWrap/ContainerWrap";
import style from "./Publications.module.css";

import ua from '../../assets/locales/ua.json';
import en from '../../assets/locales/en.json';
import publicationsData from "../../assets/locales/publications.json";

const ITEMS_PER_PAGE = 6;

const Publications = ({ currentLang }) => {
  const data = currentLang === 'ua' ? ua : en;
  const publications = data.sections[5] || "";
  const paginationTexts = data.pagination;

  // Отримуємо поточну сторінку з sessionStorage, якщо вона є
  const storedPage = parseInt(sessionStorage.getItem("page")) || 1;

  
  const [page, setPage] = useState(storedPage);

  const totalPages = Math.ceil(publicationsData.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentPublications = publicationsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const sectionRef = useRef(null);
  
  // Записуємо поточну сторінку в sessionStorage
  useEffect(() => {
    sessionStorage.setItem("page", page);
  }, [page]);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Прокручувати тільки якщо сторінка змінилася
  const handlePagination = (direction) => {
    if (direction === "next") {
      setPage((prevPage) => prevPage + 1);
    } else if (direction === "prev") {
      setPage((prevPage) => prevPage - 1);
    }
    scrollToSection();  // Прокрутка при зміні сторінки
  };

  return (
    <section className={style.sectionStyle} ref={sectionRef}>
        <ContainerWrap>
            <div className={style.wrap}>
                <h2 className={style.publicationsH2}>{publications}</h2>
                <ol className={style.list}>
                    {currentPublications.map(pub => (
                        <li key={pub.id} className={style.item}>
                            <p className={style.paragraph}>{pub.description}</p>
                            <a href={pub.cite} target="_blank" rel="noopener noreferrer" aria-label={`Publication ${pub.cite} site`} className={style.link}>
                                {pub.cite}
                            </a>
                        </li>
                    ))}
                </ol>

                <div className="pagination">
                    <button
                        className={style.paginationButtonBefore}
                        disabled={page === 1}
                        onClick={() => handlePagination("prev")}
                    >
                        {paginationTexts.prev}  
                    </button>
                    <span className={style.paginationSpan}> {paginationTexts.page} {page} {paginationTexts.from} {totalPages} </span>
                    <button
                        className={style.paginationButtonAfter}
                        disabled={page === totalPages}
                        onClick={() => handlePagination("next")}
                    >
                         {paginationTexts.next} 
                    </button>
                </div>
            </div>
        </ContainerWrap>
    </section>
  );
};

export default Publications;