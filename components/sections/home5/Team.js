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



        {/*Team Five Start */}
        <section className="team-five">
            <div className="container">
                <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">OUR TEAM</span>
                    </div>
                    <h2 className="section-title__title">Building with precision<br/> and expertise</h2>
                </div>
                <div className="team-five__swiper-box">
                    <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                        <div className="swiper-wrapper">

                            {/*Team Five Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="team-five__single">
                                    <div className="team-five__img-box">
                                        <div className="team-five__img">
                                            <img src="assets/images/team/team-5-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="team-five__content">
                                        <div className="team-five__title-box">
                                            <h3 className="team-five__title"><Link href="team">Jacob Jones</Link></h3>
                                            <p className="team-five__sub-title">Web Designer</p>
                                        </div>
                                        <div className="team-five__share-and-social">
                                            <div className="team-five__share">
                                                <Link href="#"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-five__social">
                                                <Link href="#"><span className="icon-pinterest"></span></Link>
                                                <Link href="#"><span className="icon-link-in"></span></Link>
                                                <Link href="#"><span className="icon-Frame"></span></Link>
                                                <Link href="#"><span className="icon-facebook"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team Five Single End*/}
                            {/*Team Five Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="team-five__single">
                                    <div className="team-five__img-box">
                                        <div className="team-five__img">
                                            <img src="assets/images/team/team-5-2.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="team-five__content">
                                        <div className="team-five__title-box">
                                            <h3 className="team-five__title"><Link href="team">Sakib Hasan</Link></h3>
                                            <p className="team-five__sub-title">Marketing Coordinator</p>
                                        </div>
                                        <div className="team-five__share-and-social">
                                            <div className="team-five__share">
                                                <Link href="#"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-five__social">
                                                <Link href="#"><span className="icon-pinterest"></span></Link>
                                                <Link href="#"><span className="icon-link-in"></span></Link>
                                                <Link href="#"><span className="icon-Frame"></span></Link>
                                                <Link href="#"><span className="icon-facebook"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team Five Single End*/}
                            {/*Team Five Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="team-five__single">
                                    <div className="team-five__img-box">
                                        <div className="team-five__img">
                                            <img src="assets/images/team/team-5-3.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="team-five__content">
                                        <div className="team-five__title-box">
                                            <h3 className="team-five__title"><Link href="team">Devid Malan</Link></h3>
                                            <p className="team-five__sub-title">Web Development</p>
                                        </div>
                                        <div className="team-five__share-and-social">
                                            <div className="team-five__share">
                                                <Link href="#"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-five__social">
                                                <Link href="#"><span className="icon-pinterest"></span></Link>
                                                <Link href="#"><span className="icon-link-in"></span></Link>
                                                <Link href="#"><span className="icon-Frame"></span></Link>
                                                <Link href="#"><span className="icon-facebook"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team Five Single End*/}
                            {/*Team Five Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="team-five__single">
                                    <div className="team-five__img-box">
                                        <div className="team-five__img">
                                            <img src="assets/images/team/team-5-4.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="team-five__content">
                                        <div className="team-five__title-box">
                                            <h3 className="team-five__title"><Link href="team">Arlene McCoy</Link></h3>
                                            <p className="team-five__sub-title">Nursing Assistant</p>
                                        </div>
                                        <div className="team-five__share-and-social">
                                            <div className="team-five__share">
                                                <Link href="#"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-five__social">
                                                <Link href="#"><span className="icon-pinterest"></span></Link>
                                                <Link href="#"><span className="icon-link-in"></span></Link>
                                                <Link href="#"><span className="icon-Frame"></span></Link>
                                                <Link href="#"><span className="icon-facebook"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team Five Single End*/}
                        </div>
                    </Swiper>
                    {/* If we need navigation buttons */}
                    <div className="team-five__nav">
                        <div className="swiper-button-prev1">
                            <i className="icon-angle-right"></i>
                        </div>
                        <div className="swiper-button-next1">
                            <i className="icon-angle-left"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Team Five End */}
        </>
    )
}
