'use client'
import Link from "next/link"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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



}

export default function Banner() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

        {/*Main Slider Start*/}
        <section className="main-slider">
            <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                <div className="swiper-wrapper">
                    <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="main-slider__bg"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/slider-1-1.jpg' }} ></div>
                        <div className="main-slider__shape-1"
                            style={{ backgroundImage: 'url(assets/images/shapes/main-slider-shape-1.jpg' }} ></div>
                        <div className="main-slider__img">
                            <img src="assets/images/resources/main-slider-img-1.png" alt=""/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider__content">
                                        <div className="main-slider__sub-title-box">
                                            <p className="main-slider__sub-title">welcome to Echelon</p>
                                            <div className="main-slider__sub-title-shape"></div>
                                        </div>
                                        <h2 className="main-slider__title">We are special <br/> solutions</h2>
                                        <p className="main-slider__text">Et purus duis sollicitudin dignissim habitant.
                                            Egestas nulla quis <br/> venenatis cras sed eu massa eu faucibus. Urna fusce
                                        </p>
                                        <div className="main-slider__btn-and-video-box">
                                            <div className="main-slider__btn-box">
                                                <Link href="contact" className="main-slider__btn thm-btn">Contact Us<span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                            <div className="main-slider__video-link">
                                                <a onClick={() => setOpen(true)}
                                                    className="video-popup">
                                                    <div className="main-slider__video-icon">
                                                        <span className="icon-play"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                                <h4 className="main-slider__video-text">Play Video</h4>
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
                        <div className="main-slider__bg"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/slider-1-2.jpg' }} ></div>
                        <div className="main-slider__shape-1"
                            style={{ backgroundImage: 'url(assets/images/shapes/main-slider-shape-1.jpg' }} ></div>
                        <div className="main-slider__img">
                            <img src="assets/images/resources/main-slider-img-1.png" alt=""/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider__content">
                                        <div className="main-slider__sub-title-box">
                                            <p className="main-slider__sub-title">welcome to Echelon</p>
                                            <div className="main-slider__sub-title-shape"></div>
                                        </div>
                                        <h2 className="main-slider__title">We are special <br/> solutions</h2>
                                        <p className="main-slider__text">Et purus duis sollicitudin dignissim habitant.
                                            Egestas nulla quis <br/> venenatis cras sed eu massa eu faucibus. Urna fusce
                                        </p>
                                        <div className="main-slider__btn-and-video-box">
                                            <div className="main-slider__btn-box">
                                                <Link href="contact" className="main-slider__btn thm-btn">Contact Us<span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                            <div className="main-slider__video-link">
                                                <a onClick={() => setOpen(true)}
                                                    className="video-popup">
                                                    <div className="main-slider__video-icon">
                                                        <span className="icon-play"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                                <h4 className="main-slider__video-text">Play Video</h4>
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
                        <div className="main-slider__bg"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/slider-1-3.jpg' }} ></div>
                        <div className="main-slider__shape-1"
                            style={{ backgroundImage: 'url(assets/images/shapes/main-slider-shape-1.jpg' }} ></div>
                        <div className="main-slider__img">
                            <img src="assets/images/resources/main-slider-img-1.png" alt=""/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider__content">
                                        <div className="main-slider__sub-title-box">
                                            <p className="main-slider__sub-title">welcome to Echelon</p>
                                            <div className="main-slider__sub-title-shape"></div>
                                        </div>
                                        <h2 className="main-slider__title">We are special <br/> solutions</h2>
                                        <p className="main-slider__text">Et purus duis sollicitudin dignissim habitant.
                                            Egestas nulla quis <br/> venenatis cras sed eu massa eu faucibus. Urna fusce
                                        </p>
                                        <div className="main-slider__btn-and-video-box">
                                            <div className="main-slider__btn-box">
                                                <Link href="contact" className="main-slider__btn thm-btn">Contact Us<span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                            <div className="main-slider__video-link">
                                                <a onClick={() => setOpen(true)}
                                                    className="video-popup">
                                                    <div className="main-slider__video-icon">
                                                        <span className="icon-play"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                                <h4 className="main-slider__video-text">Play Video</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                </div>

                <div className="swiper-pagination" id="main-slider-pagination"></div>
                {/* If we need navigation buttons */}

            </Swiper>
        </section>
        {/*Main Slider End*/}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
            
        </>
    )
}
