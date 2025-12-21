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
            {/*Testimonial Three Start */}
        <section className="testimonial-three">
            <div className="testimonial-three__bg"
                style={{ backgroundImage: 'url(assets/images/backgrounds/testimonial-three-bg.jpg' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6"></div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial-three__right">
                            <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                                <div className="swiper-wrapper">

                                    {/*Testimonial Three Single Start*/}
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="testimonial-three__single">
                                            <div className="testimonial-three__text-box">
                                                <p>There are many variations of passage of Lorem Ipsu thei available,
                                                    but the desig majority have suffered alteration in some form.There a
                                                    are many variations of the ma passages of Lorem ispum is most an
                                                    valuable are many variations dwesign valuable</p>
                                                <div className="testimonial-three__quote">
                                                    <span className="icon-quote"></span>
                                                </div>
                                            </div>
                                            <div className="testimonial-three__client-info">
                                                <div className="testimonial-three__client-img">
                                                    <img src="assets/images/testimonial/testimonial-3-1.jpg" alt=""/>
                                                </div>
                                                <h3 className="testimonial-three__client-name">Brooklyn Simmons</h3>
                                                <p className="testimonial-three__client-sub-title">President of Sales</p>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    {/*Testimonial Three Single End*/}
                                    {/*Testimonial Three Single Start*/}
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="testimonial-three__single">
                                            <div className="testimonial-three__text-box">
                                                <p>There are many variations of passage of Lorem Ipsu thei available,
                                                    but the desig majority have suffered alteration in some form.There a
                                                    are many variations of the ma passages of Lorem ispum is most an
                                                    valuable are many variations dwesign valuable</p>
                                                <div className="testimonial-three__quote">
                                                    <span className="icon-quote"></span>
                                                </div>
                                            </div>
                                            <div className="testimonial-three__client-info">
                                                <div className="testimonial-three__client-img">
                                                    <img src="assets/images/testimonial/testimonial-3-2.jpg" alt=""/>
                                                </div>
                                                <h3 className="testimonial-three__client-name">Robert Simmons</h3>
                                                <p className="testimonial-three__client-sub-title">President of Sales</p>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    {/*Testimonial Three Single End*/}
                                    {/*Testimonial Three Single Start*/}
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="testimonial-three__single">
                                            <div className="testimonial-three__text-box">
                                                <p>There are many variations of passage of Lorem Ipsu thei available,
                                                    but the desig majority have suffered alteration in some form.There a
                                                    are many variations of the ma passages of Lorem ispum is most an
                                                    valuable are many variations dwesign valuable</p>
                                                <div className="testimonial-three__quote">
                                                    <span className="icon-quote"></span>
                                                </div>
                                            </div>
                                            <div className="testimonial-three__client-info">
                                                <div className="testimonial-three__client-img">
                                                    <img src="assets/images/testimonial/testimonial-3-3.jpg" alt=""/>
                                                </div>
                                                <h3 className="testimonial-three__client-name">Alisha Martin</h3>
                                                <p className="testimonial-three__client-sub-title">President of Sales</p>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    {/*Testimonial Three Single End*/}
                                </div>
                                {/* If we need navigation buttons */}
                                <div className="testimonial-three__dot-style">
                                    <div className="swiper-dot-style1"></div>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Testimonial Three End */}
        </>
    )
}
