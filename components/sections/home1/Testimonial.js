'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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



}


export default function Testimonial() {
    return (
        <>

        {/*Testimonial One Start*/}
        <section className="testimonial-one">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Testimonial</span>
                    </div>
                    <h2 className="section-title__title">Unlocking Constructing<br/> Excellence Delivering</h2>
                </div>
                <div className="testimonial-one__swiper-box">
                    <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                        <div className="swiper-wrapper">

                            {/*Testimonial One Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="testimonial-one__single">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="testimonial-one__content">
                                                <div className="testimonial-one__quote">
                                                    <span className="icon-quote"></span>
                                                </div>
                                                <div className="testimonial-one__client-info">
                                                    <h3 className="testimonial-one__title">Brooklyn Simmons</h3>
                                                    <p className="testimonial-one__sub-title">President of Sales</p>
                                                </div>
                                                <p className="testimonial-one__text">There are many variations of pas of
                                                    Lorem
                                                    Ipsu
                                                    thei available, but the desig majo have suffered alterati in some
                                                    form.There
                                                    a are many variations of the ma passages of Lorem ispum is most an
                                                    valuable
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="testimonial-one__img">
                                                <img src="assets/images/testimonial/testimonial-1-1.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Testimonial One Single End*/}
                            {/*Testimonial One Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="testimonial-one__single">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="testimonial-one__content">
                                                <div className="testimonial-one__quote">
                                                    <span className="icon-quote"></span>
                                                </div>
                                                <div className="testimonial-one__client-info">
                                                    <h3 className="testimonial-one__title">Adam Smith</h3>
                                                    <p className="testimonial-one__sub-title">President of Sales</p>
                                                </div>
                                                <p className="testimonial-one__text">There are many variations of pas of
                                                    Lorem
                                                    Ipsu
                                                    thei available, but the desig majo have suffered alterati in some
                                                    form.There
                                                    a are many variations of the ma passages of Lorem ispum is most an
                                                    valuable
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="testimonial-one__img">
                                                <img src="assets/images/testimonial/testimonial-1-2.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Testimonial One Single End*/}
                            {/*Testimonial One Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="testimonial-one__single">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="testimonial-one__content">
                                                <div className="testimonial-one__quote">
                                                    <span className="icon-quote"></span>
                                                </div>
                                                <div className="testimonial-one__client-info">
                                                    <h3 className="testimonial-one__title">Harbert Spin</h3>
                                                    <p className="testimonial-one__sub-title">President of Sales</p>
                                                </div>
                                                <p className="testimonial-one__text">There are many variations of pas of
                                                    Lorem
                                                    Ipsu
                                                    thei available, but the desig majo have suffered alterati in some
                                                    form.There
                                                    a are many variations of the ma passages of Lorem ispum is most an
                                                    valuable
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="testimonial-one__img">
                                                <img src="assets/images/testimonial/testimonial-1-3.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Testimonial One Single End*/}
                        </div>
                    </Swiper>
                    {/* If we need navigation buttons */}
                    <div className="testimonial-one__nav">
                        <div className="swiper-button-prev1 h1p">
                            <i className="icon-arrow-left"></i>
                        </div>
                        <div className="swiper-button-next1 h1n">
                            <i className="icon-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Testimonial One End*/}
            
        </>
    )
}
