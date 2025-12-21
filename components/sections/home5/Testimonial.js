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
        nextEl: '.srn',
        prevEl: '.srp',
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


        {/*Testimonial Five Start */}
        <section className="testimonial-five">
            <div className="container">
                
                <div className="row">
                    <div className="col-xl-6">
                        
                        <div className="testimonial-five__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Clients talk</span>
                                </div>
                                <h2 className="section-title__title">Constructing possibilities building realities</h2>
                            </div>
                            <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                                <div className="swiper-wrapper">

                                    <SwiperSlide>
                                        <div className="swiper-slides">
                                            <div className="testimonial-five__single">
                                                <div className="testimonial-five__quote">
                                                    <img src="assets/images/icon/quote-icon-1.png" alt=""/>
                                                </div>
                                                <div className="testimonial-five__client-info">
                                                    <div className="testimonial-five__client-img">
                                                        <img src="assets/images/testimonial/testimonial-5-client-img-1.jpg"
                                                            alt=""/>
                                                    </div>
                                                    <div className="testimonial-five__client-content">
                                                        <h3>Courtney Henry</h3>
                                                        <p>Nursing Assistant</p>
                                                    </div>
                                                </div>
                                                <div className="testimonial-five__ratting">
                                                    <span className="icon-star"></span>
                                                    <span className="icon-star"></span>
                                                    <span className="icon-star"></span>
                                                    <span className="icon-star"></span>
                                                    <span className="icon-star"></span>
                                                </div>
                                                <p className="testimonial-five__text">Financial planners help people to
                                                    knowledge in about how to invest and save their moneye the most
                                                    efficient way eve.planners efficie Financial planners help people to
                                                    knowledge in about how to invest</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slides">
                                            <div className="testimonial-five__single">
                                                <div className="testimonial-five__quote">
                                                    <img src="assets/images/icon/quote-icon-1.png" alt=""/>
                                                </div>
                                                <div className="testimonial-five__client-info">
                                                    <div className="testimonial-five__client-img">
                                                        <img src="assets/images/testimonial/testimonial-5-client-img-1.jpg"
                                                            alt=""/>
                                                    </div>
                                                    <div className="testimonial-five__client-content">
                                                        <h3>Courtney Henry</h3>
                                                        <p>Nursing Assistant</p>
                                                    </div>
                                                </div>
                                                <div className="testimonial-five__ratting">
                                                    <span className="icon-star"></span>
                                                    <span className="icon-star"></span>
                                                    <span className="icon-star"></span>
                                                    <span className="icon-star"></span>
                                                    <span className="icon-star"></span>
                                                </div>
                                                <p className="testimonial-five__text">Financial planners help people to
                                                    knowledge in about how to invest and save their moneye the most
                                                    efficient way eve.planners efficie Financial planners help people to
                                                    knowledge in about how to invest</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                            
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="testimonial-five__right">
                            <div className="testimonial-five__img-box">
                                <div className="testimonial-five__img">
                                    <img src="assets/images/testimonial/testimonial-5-1.jpg" alt=""/>
                                </div>
                                <div className="testimonial-five__shape-1">
                                    <img src="assets/images/shapes/testimonial-five-shape-1.png" alt=""/>
                                </div>
                                <div className="testimonial-five__shape-2">
                                    <img src="assets/images/shapes/testimonial-five-shape-2.png" alt=""/>
                                </div>
                                <div className="testimonial-five__shape-3">
                                    <img src="assets/images/shapes/testimonial-five-shape-3.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Testimonial Five End */}

            
        </>
    )
}
