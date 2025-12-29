'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect, useState } from "react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
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

// Slide data with separate images for desktop and mobile
const slides = [
    {
        desktopBg: 'assets/images/backgrounds/06.jpg',
        mobileBg: 'assets/images/backgrounds/1.webp', // Add your mobile image path
    },
    {
        desktopBg: 'assets/images/backgrounds/5.jpg',
        mobileBg: 'assets/images/backgrounds/2.webp', // Add your mobile image path
    },
    {
        desktopBg: 'assets/images/backgrounds/4.jpg',
        mobileBg: 'assets/images/backgrounds/3.webp', // Add your mobile image path
    }
]

export default function Banner() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Check if window is defined (client-side)
        if (typeof window !== 'undefined') {
            const checkDevice = () => {
                setIsMobile(window.innerWidth <= 768)
            }

            // Initial check
            checkDevice()

            // Add event listener for resize
            window.addEventListener('resize', checkDevice)

            // Cleanup
            return () => window.removeEventListener('resize', checkDevice)
        }
    }, [])

    return (
        <>
            {/*Main Slider Three Start*/}
            <section className="main-slider-three">
                <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                    <div className="swiper-wrapper">
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="swiper-slide">
                                    <div className="main-slider-three__social-box">
                                        <div className="main-slider-three__social-title-box">
                                            <h5 className="main-slider-three__social-title">Follow Us</h5>
                                            <div className="main-slider-three__social-shape"></div>
                                        </div>
                                        <div className="main-slider-three__social">
                                            <Link href="https://www.facebook.com/p/Zeenath-Plywood-61564139555929/" target="blank">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                            <Link href="https://www.instagram.com/zeenathplywoodmangalore/" target="blank">
                                                <i className="icon-instagram"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div 
                                        className="main-slider-three__bg"
                                        style={{ 
                                            backgroundImage: `url(${isMobile ? slide.mobileBg : slide.desktopBg})` 
                                        }}
                                    ></div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="main-slider-three__content">
                                                    <h2 className="main-slider-three__title hide-mobile">
                                                        Crafting Space <br/> Since 1996 
                                                    </h2>
                                                    <p className="main-slider-three__text hide-mobile">
                                                        Premium Plywood, Laminates & Veneers <br/> Designed for Quality, Built for Durability.
                                                    </p>
                                                    <div className="main-slider-three__btn-boxes">
                                                        <div className="main-slider-three__btn-box-1 hide-mobile">
                                                            <Link href="about" className="main-slider-three__btn-1 thm-btn">
                                                                Read more<span className="icon-dabble-arrow-right"></span>
                                                            </Link>
                                                        </div>
                                                        <div className="main-slider-three__btn-box-2 hide-mobile">
                                                            <Link href="contact" className="main-slider-three__btn-2 thm-btn">
                                                                Contact Us<span className="icon-dabble-arrow-right"></span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>

                    {/* Navigation buttons (commented out as in original) */}
                    {/* <div className="main-slider-three__nav">
                        <div className="swiper-button-prev h1p" id="main-slider__swiper-button-next">
                            <i className="icon-arrow-left"></i>
                        </div>
                        <div className="swiper-button-next h1n" id="main-slider__swiper-button-prev">
                            <i className="icon-arrow-right"></i>
                        </div>
                    </div> */}
                </Swiper>
            </section>
            {/*Main Slider Three End*/}
        </>
    )
}