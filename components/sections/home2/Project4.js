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
        title: "Hinges",
        link: "/hinges",
        image: "assets/images/hard/147.webp"
    },
    { 
        title: "Sliding & Folding Systems", 
        link: "/sliding-folding",
        image: "assets/images/hard/148.webp"
    },
    { 
        title: "Wardrobe Accessories", 
        link: "/wardrobe-accessories",
        image: "assets/images/hard/149.webp"
    },
    { 
        title: "Drawer Runners", 
        link: "/drawer-runners",
        image: "assets/images/hard/150.webp"
    },
    { 
        title: "Kitchen Accessories", 
        link: "/kitchen-acc",
        image: "assets/images/hard/191.webp"
    },
    { 
        title: "Profiles", 
        link: "/profiles",
        image: "assets/images/hard/192.webp"
    },
    { 
        title: "Home Decor Handles", 
        link: "/home-decor",
        image: "assets/images/hard/193.webp"
    },
    { 
        title: "Wardrobe Handles", 
        link: "/wardrobe-handles",
        image: "assets/images/hard/194.webp"
    },
    { 
        title: "Bed Fittings", 
        link: "/bed-fittings",
        image: "assets/images/hard/195.webp"
    },
    { 
        title: "Sofa Legs", 
        link: "/sofa-legs",
        image: "assets/images/hard/151.webp"
    },
    { 
        title: "Door Hinges",
        link: "/door-hinge",
        image: "assets/images/hard/152.webp"
    },
    { 
        title: "Door & Window Fittings", 
        link: "/door-window-fittings",
        image: "assets/images/hard/153.webp"
    },
    { 
        title: "Mortice Locking Solutions", 
        link: "/mortice-locking-solutions",
        image: "assets/images/hard/154.webp"
    },
    { 
        title: "Cylinder Locks", 
        link: "/cylinder-locks",
        image: "assets/images/hard/155.webp"
    },
    { 
        title: "Floor Springs", 
        link: "/floor-springs",
        image: "assets/images/hard/156.webp"
    },
    { 
        title: "Glass Patch Fittings", 
        link: "/glass-patch-fittings",
        image: "assets/images/hard/157.webp"
    },
    { 
        title: "Digital Locking Solutions", 
        link: "/digital-locking-solutions",
        image: "assets/images/hard/158.webp"
    },
    { 
        title: "Pull Handles", 
        link: "/pull-handles",
        image: "assets/images/hard/159.webp"
    },
    { 
        title: "Rim Locks", 
        link: "/rim-locks",
        image: "assets/images/hard/160.webp"
    },
    { 
        title: "Pad Locks", 
        link: "/pad-locks",
        image: "assets/images/hard/161.webp"
    },
    { 
        title: "Furniture Locks", 
        link: "/furniture-locks",
        image: "assets/images/hard/162.webp"
    },
    { 
        title: "Door Hooks", 
        link: "/door-hooks",
        image: "assets/images/hard/163.webp"
    },
    { 
        title: "Safe Locks", 
        link: "/safe-locks",
        image: "assets/images/hard/164.webp"
    }
];




export default function Project4() {
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
                                                    <Link href={project.image} className="img-popup">
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


@media (max-width: 767px) {
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