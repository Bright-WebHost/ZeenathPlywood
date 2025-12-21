'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
        // When window width is >= 320px (mobile)
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        // When window width is >= 768px (tablet)
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        // When window width is >= 1024px (desktop)
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
}

const projects = [
    { 
        title: "Acrylic sheets",
        link: "/mr-grade",
        image: "assets/images/hard/63.webp"
    },
    { 
        title: "Pvc", 
        link: "/marine-grade",
        image: "assets/images/hard/64.webp"
    },
    { 
        title: "1.25mm Laminate",
        link: "/bwp-grade",
        image: "assets/images/hard/65.webp"
    },
    { 
        title: "1mm Laminate",
        link: "/fire-retardant",
        image: "assets/images/hard/66.webp"
    },
    { 
        title: "0.8mm Laminate",
        link: "/0-8-mm-laminates",
        image: "assets/images/hard/67.webp"
    },
    { 
        title: "Liner Laminate",
        link: "/shuttering-grade",
        image: "assets/images/hard/68.webp"
    },
    { 
        title: "Hylam",
        link: "/chequered-truck-flooring",
        image: "assets/images/hard/69.webp"
    }
];



export default function Project2() {
    return (
        <>
        {/* Project Two Start */}
        <section className="project-two">
            <div className="container">
                <div className="project-two__top">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            {/* <span className="section-title__tagline">Our Latest portfolio</span> */}
                        </div>
                        <h2 className="section-title__title">Other</h2>
                    </div>
                    <div className="project-two__nav">
                        <div className="swiper-button-prev1 h1p">
                            <i className="icon-arrow-left"></i>
                        </div>
                        <div className="swiper-button-next1 h1n">
                            <i className="icon-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="project-two__bottom">
                    <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                        <div className="swiper-wrapper">
                            {projects.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <div className="project-two__single">
                                        <div className="project-two__img">
                                            <img src={project.image} alt={project.title}/>
                                            <div className="project-two__content">
                                                <div className="project-two__title-box">
                                                    <h5 className="project-two__title">
                                                        <Link href={project.link}>{project.title}</Link>
                                                    </h5>
                                                </div>
                                                <div className="project-two__arrow">
                                                    <Link href={project.link} className="img-popup">
                                                        <span className="icon-dabble-arrow-right"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
            </div>
            <style>{`
                /* Add to your CSS file */


@media (max-width: 768px) {
    .project-two__img img {
    width: 100%;
    height: 220px;
    object-fit: cover;
}
}
                `}</style>
        </section>
        {/* Project Two End */}
        </>
    )
}