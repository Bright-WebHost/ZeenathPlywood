'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
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
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }



}



export default function Services2() {
    return (
        <>
        {/* Services Eight Start */}
        <section className="services-eight">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Best Service</span>
                    </div>
                    <h2 className="section-title__title">Constructing dreams one <br/> brick at a time</h2>
                </div>
                <div className="services-eight__carousel-box">
                    <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                        <div className="swiper-wrapper">

                            {/*Services Eight Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="services-eight__single">
                                    <div className="services-eight__img-box">
                                        <div className="services-eight__img">
                                            <img src="assets/images/services/services-2-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="services-eight__content">
                                        <div className="services-eight__title-box">
                                            <div className="services-eight__icon">
                                                <span className="icon-engineer-2"></span>
                                            </div>
                                            <h4 className="services-eight__title"><Link href="service-details">Reimagined
                                                    Spaces</Link></h4>
                                        </div>
                                        <p className="services-eight__text">Construction is the process of creating or asse
                                            Construction is the process of creating or assembling infrastruce buildings
                                            or
                                            other large structuresinfrastructure buildings</p>
                                        <div className="services-eight__btn-box">
                                            <Link href="service-details" className="services-eight__btn thm-btn">Read
                                                more<span className="icon-dabble-arrow-right"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services Eight Single End*/}
                            {/*Services Eight Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="services-eight__single">
                                    <div className="services-eight__img-box">
                                        <div className="services-eight__img">
                                            <img src="assets/images/services/services-2-2.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="services-eight__content">
                                        <div className="services-eight__title-box">
                                            <div className="services-eight__icon">
                                                <span className="icon-analytics"></span>
                                            </div>
                                            <h4 className="services-eight__title"><Link href="service-details">Sustainable
                                                    Structures</Link>
                                            </h4>
                                        </div>
                                        <p className="services-eight__text">Construction is the process of creating or asse
                                            Construction is the process of creating or assembling infrastruce buildings
                                            or
                                            other large structuresinfrastructure buildings</p>
                                        <div className="services-eight__btn-box">
                                            <Link href="service-details" className="services-eight__btn thm-btn">Read
                                                more<span className="icon-dabble-arrow-right"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services Eight Single End*/}
                            {/*Services Eight Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="services-eight__single">
                                    <div className="services-eight__img-box">
                                        <div className="services-eight__img">
                                            <img src="assets/images/services/services-2-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="services-eight__content">
                                        <div className="services-eight__title-box">
                                            <div className="services-eight__icon">
                                                <span className="icon-engineer-2"></span>
                                            </div>
                                            <h4 className="services-eight__title"><Link href="service-details">Reimagined
                                                    Spaces</Link></h4>
                                        </div>
                                        <p className="services-eight__text">Construction is the process of creating or asse
                                            Construction is the process of creating or assembling infrastruce buildings
                                            or
                                            other large structuresinfrastructure buildings</p>
                                        <div className="services-eight__btn-box">
                                            <Link href="service-details" className="services-eight__btn thm-btn">Read
                                                more<span className="icon-dabble-arrow-right"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services Eight Single End*/}
                        </div>
                        {/* If we need navigation buttons */}
                        <div className="services-eight__dot-style">
                            <div className="swiper-dot-style1"></div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
        {/* Services Eight End */}
        </>
    )
}
