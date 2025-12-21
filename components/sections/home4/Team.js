'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
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
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }



}



export default function Team() {
    return (
        <>

    

        {/* Team Four Start */}
        <section className="team-four">
            <div className="team-four__shape-1" style={{ backgroundImage: 'url(assets/images/shapes/team-four-shape-1.png' }} >
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">OUR TEAM</span>
                    </div>
                    <h2 className="section-title__title">Quality craftsmanship the <br/> exceptional out</h2>
                </div>
                <div className="team-four__swiper-box">
                    <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                        <div className="swiper-wrapper">

                            {/*Testimonial One Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="team-four__single">
                                    <div className="team-four__img">
                                        <img src="assets/images/team/team-4-1.jpg" alt=""/>
                                    </div>
                                    <div className="team-four__content">
                                        <div className="team-four__title-box">
                                            <h4 className="team-four__name"><Link href="team">Bessie Cooper</Link></h4>
                                            <p className="team-four__sub-title">Marketing Coordinator</p>
                                        </div>
                                        <div className="team-four__share-and-social">
                                            <div className="team-four__share">
                                                <Link href="#"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-four__social">
                                                <Link href="#"><span className="icon-link-in"></span></Link>
                                                <Link href="#"><span className="icon-twitter"></span></Link>
                                                <Link href="#"><span className="icon-instagram"></span></Link>
                                                <Link href="#"><span className="icon-facebook"></span></Link>
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
                                <div className="team-four__single">
                                    <div className="team-four__img">
                                        <img src="assets/images/team/team-4-2.jpg" alt=""/>
                                    </div>
                                    <div className="team-four__content">
                                        <div className="team-four__title-box">
                                            <h4 className="team-four__name"><Link href="team">Courtney Henry</Link></h4>
                                            <p className="team-four__sub-title">President of Sales</p>
                                        </div>
                                        <div className="team-four__share-and-social">
                                            <div className="team-four__share">
                                                <Link href="#"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-four__social">
                                                <Link href="#"><span className="icon-link-in"></span></Link>
                                                <Link href="#"><span className="icon-twitter"></span></Link>
                                                <Link href="#"><span className="icon-instagram"></span></Link>
                                                <Link href="#"><span className="icon-facebook"></span></Link>
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
                                <div className="team-four__single">
                                    <div className="team-four__img">
                                        <img src="assets/images/team/team-4-3.jpg" alt=""/>
                                    </div>
                                    <div className="team-four__content">
                                        <div className="team-four__title-box">
                                            <h4 className="team-four__name"><Link href="team">Ronald Richards</Link></h4>
                                            <p className="team-four__sub-title">Contact Dealer</p>
                                        </div>
                                        <div className="team-four__share-and-social">
                                            <div className="team-four__share">
                                                <Link href="#"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-four__social">
                                                <Link href="#"><span className="icon-link-in"></span></Link>
                                                <Link href="#"><span className="icon-twitter"></span></Link>
                                                <Link href="#"><span className="icon-instagram"></span></Link>
                                                <Link href="#"><span className="icon-facebook"></span></Link>
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
                                <div className="team-four__single">
                                    <div className="team-four__img">
                                        <img src="assets/images/team/team-4-4.jpg" alt=""/>
                                    </div>
                                    <div className="team-four__content">
                                        <div className="team-four__title-box">
                                            <h4 className="team-four__name"><Link href="team">Carlos Brathwet</Link></h4>
                                            <p className="team-four__sub-title">Efficient Builders</p>
                                        </div>
                                        <div className="team-four__share-and-social">
                                            <div className="team-four__share">
                                                <Link href="#"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-four__social">
                                                <Link href="#"><span className="icon-link-in"></span></Link>
                                                <Link href="#"><span className="icon-twitter"></span></Link>
                                                <Link href="#"><span className="icon-instagram"></span></Link>
                                                <Link href="#"><span className="icon-facebook"></span></Link>
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
                                <div className="team-four__single">
                                    <div className="team-four__img">
                                        <img src="assets/images/team/team-4-3.jpg" alt=""/>
                                    </div>
                                    <div className="team-four__content">
                                        <div className="team-four__title-box">
                                            <h4 className="team-four__name"><Link href="team">Ronald Richards</Link></h4>
                                            <p className="team-four__sub-title">Contact Dealer</p>
                                        </div>
                                        <div className="team-four__share-and-social">
                                            <div className="team-four__share">
                                                <Link href="#"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-four__social">
                                                <Link href="#"><span className="icon-link-in"></span></Link>
                                                <Link href="#"><span className="icon-twitter"></span></Link>
                                                <Link href="#"><span className="icon-instagram"></span></Link>
                                                <Link href="#"><span className="icon-facebook"></span></Link>
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
                                <div className="team-four__single">
                                    <div className="team-four__img">
                                        <img src="assets/images/team/team-4-4.jpg" alt=""/>
                                    </div>
                                    <div className="team-four__content">
                                        <div className="team-four__title-box">
                                            <h4 className="team-four__name"><Link href="team">Carlos Brathwet</Link></h4>
                                            <p className="team-four__sub-title">Efficient Builders</p>
                                        </div>
                                        <div className="team-four__share-and-social">
                                            <div className="team-four__share">
                                                <Link href="#"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-four__social">
                                                <Link href="#"><span className="icon-link-in"></span></Link>
                                                <Link href="#"><span className="icon-twitter"></span></Link>
                                                <Link href="#"><span className="icon-instagram"></span></Link>
                                                <Link href="#"><span className="icon-facebook"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Testimonial One Single End*/}
                        </div>
                        {/* If we need navigation buttons */}
                        <div className="team-four__dot-style">
                            <div className="swiper-dot-style1"></div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
        {/* Team Four End */}
        </>
    )
}
