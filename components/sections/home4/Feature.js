'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
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



}




export default function Feature() {
    return (
        <>
           

        {/*Feature One Start */}
        <section className="feature-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="feature-one__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Our Features</span>
                                </div>
                                <h2 className="section-title__title">Building the we live </h2>
                            </div>
                            <p className="feature-one__text">Construction is the process of creating or ass infrastructure a
                                buildings, or other large structures. It involves plan designing and executing various
                                tasks</p>
                            <div className="feature-one__count-box">
                                <div className="feature-one__count-icon">
                                    <span className="icon-madel-2"></span>
                                </div>
                                <div className="feature-one__count-content">
                                    <div className="feature-one__count count-box">
                                        <h3>20</h3>
                                        <span>+</span>
                                    </div>
                                    <p className="feature-one__count-text">Winning award</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="feature-one__right">
                            <div className="feature-one__img">
                                <img src="assets/images/resources/feature-one-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Feature One End */}
        </>
    )
}
