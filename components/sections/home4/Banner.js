
'use client'
import Link from "next/link"
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


export default function Banner() {
    return (
        <>
        
        {/*Main Slider Four Start*/}
        <section className="main-slider-four">
            <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                <div className="swiper-wrapper">
                    <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="main-slider-four__bg"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/slider-4-1.jpg' }} ></div>
                        <div className="main-slider-four__img-1">
                            <img src="assets/images/resources/main-slider-four-img-1-1.jpg" alt=""/>
                        </div>
                        <div className="main-slider-four__img-2">
                            <img src="assets/images/resources/main-slider-four-img-1-2.jpg" alt=""/>
                        </div>
                        <div className="main-slider-four__shape-1"></div>
                        <div className="main-slider-four__shape-2"></div>
                        <div className="main-slider-four__shape-3"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider-four__content">
                                        <h2 className="main-slider-four__title">Smart financial the <br/>
                                            <span>solutions</span> for <br/> better brighter</h2>
                                        <p className="main-slider-four__text">Magnis viverra nisl rhoncus egestas rhoncus
                                            elit at. Massa volutpat <br/> eleifend pellentesque vivamus nulla Magnis
                                            viverra nisl
                                        </p>
                                        <div className="main-slider-four__btn-and-call-box">
                                            <div className="main-slider-four__btn-box">
                                                <Link href="about" className="main-slider-four__btn thm-btn">Read
                                                    more<span className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                            <div className="main-slider-four__call">
                                                <div className="main-slider-four__call-icon">
                                                    <span className="icon-call"></span>
                                                </div>
                                                <div className="main-slider-four__call-number">
                                                    <p>Need Help</p>
                                                    <h5><Link href="tel:2085550112">(208) 555-0112</Link></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="main-slider-four__bg"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/slider-4-2.jpg' }} ></div>
                        <div className="main-slider-four__img-1">
                            <img src="assets/images/resources/main-slider-four-img-1-1.jpg" alt=""/>
                        </div>
                        <div className="main-slider-four__img-2">
                            <img src="assets/images/resources/main-slider-four-img-1-2.jpg" alt=""/>
                        </div>
                        <div className="main-slider-four__shape-1"></div>
                        <div className="main-slider-four__shape-2"></div>
                        <div className="main-slider-four__shape-3"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider-four__content">
                                        <h2 className="main-slider-four__title">Smart financial the <br/>
                                            <span>solutions</span> for <br/> better brighter</h2>
                                        <p className="main-slider-four__text">Magnis viverra nisl rhoncus egestas rhoncus
                                            elit at. Massa volutpat <br/> eleifend pellentesque vivamus nulla Magnis
                                            viverra nisl
                                        </p>
                                        <div className="main-slider-four__btn-and-call-box">
                                            <div className="main-slider-four__btn-box">
                                                <Link href="about" className="main-slider-four__btn thm-btn">Read
                                                    more<span className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                            <div className="main-slider-four__call">
                                                <div className="main-slider-four__call-icon">
                                                    <span className="icon-call"></span>
                                                </div>
                                                <div className="main-slider-four__call-number">
                                                    <p>Need Help</p>
                                                    <h5><Link href="tel:2085550112">(208) 555-0112</Link></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="main-slider-four__bg"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/slider-4-3.jpg' }} ></div>
                        <div className="main-slider-four__img-1">
                            <img src="assets/images/resources/main-slider-four-img-1-1.jpg" alt=""/>
                        </div>
                        <div className="main-slider-four__img-2">
                            <img src="assets/images/resources/main-slider-four-img-1-2.jpg" alt=""/>
                        </div>
                        <div className="main-slider-four__shape-1"></div>
                        <div className="main-slider-four__shape-2"></div>
                        <div className="main-slider-four__shape-3"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider-four__content">
                                        <h2 className="main-slider-four__title">Smart financial the <br/>
                                            <span>solutions</span> for <br/> better brighter</h2>
                                        <p className="main-slider-four__text">Magnis viverra nisl rhoncus egestas rhoncus
                                            elit at. Massa volutpat <br/> eleifend pellentesque vivamus nulla Magnis
                                            viverra nisl
                                        </p>
                                        <div className="main-slider-four__btn-and-call-box">
                                            <div className="main-slider-four__btn-box">
                                                <Link href="about" className="main-slider-four__btn thm-btn">Read
                                                    more<span className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                            <div className="main-slider-four__call">
                                                <div className="main-slider-four__call-icon">
                                                    <span className="icon-call"></span>
                                                </div>
                                                <div className="main-slider-four__call-number">
                                                    <p>Need Help</p>
                                                    <h5><Link href="tel:2085550112">(208) 555-0112</Link></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>


                </div>


                {/* If we need navigation buttons */}
                <div className="main-slider-three__nav">
                    <div className="swiper-button-prev h1p" id="main-slider__swiper-button-next">
                        <i className="icon-arrow-left"></i>
                    </div>
                    <div className="swiper-button-next h1n" id="main-slider__swiper-button-prev">
                        <i className="icon-arrow-right"></i>
                    </div>
                </div>
            </Swiper>
        </section>
        {/*Main Slider Four End*/}
        </>
    )
}
