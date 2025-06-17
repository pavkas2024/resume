import React, { useRef, useEffect  } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import ContainerWrap from "../ContainerWrap/ContainerWrap";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import style from "./Projects.module.css";

import ua from '../../assets/locales/ua.json';
import en from '../../assets/locales/en.json';


const Projects = ({currentLang}) => {
    const swiperWrapperRef = useRef(null);

  const data = currentLang === 'ua' ? ua : en;
  const projects = data.projects || [];
  const projectSection = data.sections[0] || "";

  useEffect(() => {
    const updateHeights = () => {
      const slides = swiperWrapperRef.current?.querySelectorAll('.swiper-slide');
      if (!slides?.length) return;

      // Скидаємо висоту, щоб коректно виміряти
      slides.forEach(slide => {
        slide.style.height = 'auto';
      });

      // Знаходимо максимальну
      let maxHeight = 0;
      slides.forEach(slide => {
        const h = slide.offsetHeight;
        if (h > maxHeight) maxHeight = h;
      });

      // Виставляємо всім однакову висоту
      slides.forEach(slide => {
        slide.style.height = `${maxHeight}px`;
      });
    };

    // Перше виконання після рендеру
    updateHeights();
    // Перерахунок при зміні розміру вікна
    window.addEventListener('resize', updateHeights);

    // Чистимо слухача при розмонтуванні
    return () => {
      window.removeEventListener('resize', updateHeights);
    };
  }, [projects]);


    return (
            <section className={style.sectionStyle}>
                <ContainerWrap>
                   <div className={style.projectStyle}>
                    <h2>{projectSection}</h2>
                        <div ref={swiperWrapperRef} className={style.swiperContainer}>
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000 }}
                                loop
                                breakpoints={{
                                    // від 768px і вище — 2 слайди
                                    768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                    },
                                    // від 1440px і вище — 3 слайди
                                    1440: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                    },
                                }}
                            >
                                {projects.map((project) => (
                                    <SwiperSlide key={project.title}>
                                        <div className={style.slideContent}>
                                            <p><strong>{project.title}</strong></p>
                                            <p>{project.yearStart} — {project.yearEnd}</p>
                                            <p>{project.org}</p>
                                            <p>{project.description}</p>
                                            <p>
                                                <a href={project.site} target="_blank" rel="noopener noreferrer" className={style.site}>
                                                    {project.site}
                                                </a>
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                   </div>
                </ContainerWrap>
            </section>
    );
};

export default Projects;