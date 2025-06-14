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
        const slides = swiperWrapperRef.current?.querySelectorAll('.swiper-slide');
        if (!slides?.length) return;

        let maxHeight = 0;
        slides.forEach((slide) => {
            slide.style.height = 'auto';
            const height = slide.offsetHeight;
            if (height > maxHeight) maxHeight = height;
        });

        slides.forEach((slide) => {
            slide.style.height = `${maxHeight}px`;
        });
    }, [projects]);

    return (
        <>
            <section className={style.sectionStyle}>
                <ContainerWrap>
                    <h2>{projectSection}</h2>
                    <div ref={swiperWrapperRef} className={style.swiperContainer}>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            loop
                        >
                            {projects.map((project) => (
                                <SwiperSlide key={project.title}>
                                    <div className={style.slideContent}>
                                        <p><strong>{project.title}</strong></p>
                                        <p>{project.yearStart} — {project.yearEnd}</p>
                                        <p>{project.org}</p>
                                        <p>{project.description}</p>
                                        <p>
                                            <a href={project.site} target="_blank" rel="noopener noreferrer">
                                                {project.site}
                                            </a>
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </ContainerWrap>
            </section>
        </>
    );
};

export default Projects;