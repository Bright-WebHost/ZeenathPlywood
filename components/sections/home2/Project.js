'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

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
        title: "IS 303 - MR Grade",
        link: "/mr-grade",
        image: "assets/images/blog/29.webp"
    },
    { 
        title: "IS 710 - MARINE Grade", 
        link: "/marine-grade",
        image: "assets/images/blog/30.webp"
    },
    { 
        title: "IS 10701 - BWP Grade",
        link: "/bwp-grade",
        image: "assets/images/blog/31.webp"
    },
    { 
        title: "IS 5509 - FIRE RETARDANT Grade",
        link: "/fire-retardant",
        image: "assets/images/blog/32.webp"
    },
    { 
        title: "IS 1659 - Block Board",
        link: "/block-board",
        image: "assets/images/blog/33.webp"
    },
    { 
        title: "IS 4990 - SHUTTERING Grade",
        link: "/shuttering-grade",
        image: "assets/images/blog/34.webp"
    },
    { 
        title: "Chequered & Truck flooring",
        link: "/chequered-truck-flooring",
        image: "assets/images/blog/35.webp"
    },
    { 
        title: "Particle board",
        link: "/particle-board",
        image: "assets/images/blog/37.webp"
    },
    { 
        title: "Bamboo sheet",
        link: "/bamboo-sheet",
        image: "assets/images/blog/38.webp"
    },
    { 
        title: "MDF / HDF / HDHMR",
        link: "/mdf-hdf-hdhmr",
        image: "assets/images/blog/39.webp"
    },
    { 
        title: "PVC / WPC / WPC FRAME",
        link: "/pvc-wpcframe",
        image: "assets/images/blog/40.webp"
    },
    { 
        title: "DOOR",
        link: "/door",
        image: "assets/images/blog/41.webp"
    },
    { 
        title: "FINGER JOINT",
        link: "/finger-joints",
        image: "assets/images/blog/42.webp"
    }
]

export default function Project() {
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
                        <h2 className="section-title__title" style={{marginBottom:'-220px !important'}}>Other </h2>
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
                    <Swiper {...swiperOptions} className="thm-swiper__slider">
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
                    </Swiper>
                </div>
                <style>{`
                /* Add to your CSS file */


@media (max-width: 767px) {
    .project-two__img img {
    width: 100%;
    height: 220px;
    object-fit: cover;
}
}
                `}</style>
            </div>
        </section>
        {/* Project Two End */}
        </>
    )
}