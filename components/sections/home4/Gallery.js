'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }



}

export default function Gallery() {
    return (
        <>
        {/* Gallery One Start */}
        <section className="gallery-one">
            <div className="gallery-one__top">
                <div className="container">
                    <div className="gallery-one__top-inner">
                        <div className="section-title text-left">
                            <div className="section-title__tagline-box">
                                <span className="section-title__tagline">Latest gallery</span>
                            </div>
                            <h2 className="section-title__title">Dependable construction a <br/> reliable results</h2>
                        </div>
                        <div className="gallery-one__nav">
                            <div className="swiper-button-prev1 h1p">
                                <i className="icon-arrow-left"></i>
                            </div>
                            <div className="swiper-button-next1 h1n">
                                <i className="icon-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery-one__bottom">
                <div className="container">
                    <div className="gallery-one__swiper-box">
                        <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                            <div className="swiper-wrapper">

                                {/*Gallery One Single Start*/}
                                <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="gallery-one__single">
                                        <div className="gallery-one__img">
                                            <img src="assets/images/gallery/gallery-1-1.jpg" alt=""/>
                                            <div className="gallery-one__content-box">
                                                <div className="gallery-one__title-box">
                                                    <h4 className="gallery-one__title"><Link
                                                            href="project-details">Perfectly Planned</Link>
                                                    </h4>
                                                    <p className="gallery-one__sub-title">Lorem Ipsum is simply dummy</p>
                                                </div>
                                                <div className="gallery-one__arrow">
                                                    <Link href="assets/images/gallery/gallery-1-1.jpg"
                                                        className="img-popup"><span className="icon-right-arrow"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                {/*Gallery One Single End*/}
                                {/*Gallery One Single Start*/}
                                <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="gallery-one__single">
                                        <div className="gallery-one__img">
                                            <img src="assets/images/gallery/gallery-1-2.jpg" alt=""/>
                                            <div className="gallery-one__content-box">
                                                <div className="gallery-one__title-box">
                                                    <h4 className="gallery-one__title"><Link
                                                            href="project-details">Perfectly Planned</Link>
                                                    </h4>
                                                    <p className="gallery-one__sub-title">Lorem Ipsum is simply dummy</p>
                                                </div>
                                                <div className="gallery-one__arrow">
                                                    <Link href="assets/images/gallery/gallery-1-2.jpg"
                                                        className="img-popup"><span className="icon-right-arrow"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                {/*Gallery One Single End*/}
                                {/*Gallery One Single Start*/}
                                <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="gallery-one__single">
                                        <div className="gallery-one__img">
                                            <img src="assets/images/gallery/gallery-1-3.jpg" alt=""/>
                                            <div className="gallery-one__content-box">
                                                <div className="gallery-one__title-box">
                                                    <h4 className="gallery-one__title"><Link
                                                            href="project-details">Perfectly Planned</Link>
                                                    </h4>
                                                    <p className="gallery-one__sub-title">Lorem Ipsum is simply dummy</p>
                                                </div>
                                                <div className="gallery-one__arrow">
                                                    <Link href="assets/images/gallery/gallery-1-3.jpg"
                                                        className="img-popup"><span className="icon-right-arrow"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                {/*Gallery One Single End*/}
                                <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="gallery-one__single">
                                        <div className="gallery-one__img">
                                            <img src="assets/images/gallery/gallery-1-2.jpg" alt=""/>
                                            <div className="gallery-one__content-box">
                                                <div className="gallery-one__title-box">
                                                    <h4 className="gallery-one__title"><Link
                                                            href="project-details">Perfectly Planned</Link>
                                                    </h4>
                                                    <p className="gallery-one__sub-title">Lorem Ipsum is simply dummy</p>
                                                </div>
                                                <div className="gallery-one__arrow">
                                                    <Link href="assets/images/gallery/gallery-1-2.jpg"
                                                        className="img-popup"><span className="icon-right-arrow"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                {/*Gallery One Single End*/}
                                {/*Gallery One Single Start*/}
                                <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="gallery-one__single">
                                        <div className="gallery-one__img">
                                            <img src="assets/images/gallery/gallery-1-3.jpg" alt=""/>
                                            <div className="gallery-one__content-box">
                                                <div className="gallery-one__title-box">
                                                    <h4 className="gallery-one__title"><Link
                                                            href="project-details">Perfectly Planned</Link>
                                                    </h4>
                                                    <p className="gallery-one__sub-title">Lorem Ipsum is simply dummy</p>
                                                </div>
                                                <div className="gallery-one__arrow">
                                                    <Link href="assets/images/gallery/gallery-1-3.jpg"
                                                        className="img-popup"><span className="icon-right-arrow"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                {/*Gallery One Single End*/}
                            </div>
                        </Swiper>
                        {/* If we need navigation buttons */}

                    </div>
                </div>
            </div>
        </section>
        {/* Gallery One End */}
        </>
    )
}
