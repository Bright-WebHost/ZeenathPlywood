
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
    // navigation: {
    //     nextEl: '.h1n',
    //     prevEl: '.h1p',
    // },

    // Pagination
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },



}

export default function Gallery() {
    return (
        <>
        {/*Gallery Two Start */}
        <section className="gallery-two">
            <div className="gallery-two__shape-1"
                style={{ backgroundImage: 'url(assets/images/shapes/gallery-two-shape-1.png' }} ></div>
            <div className="container">
                <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Latest gallery</span>
                    </div>
                    <h2 className="section-title__title">Constructing the world<br/> we envision</h2>
                </div>
                <div className="gallery-two__bottom">
                <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                        <div className="swiper-wrapper">

                            {/*Gallery Two Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="gallery-two__single-wrap">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/blog/3.png" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="mr-grade"> IS 303 - MR Grade</Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-1.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/blog/4.png" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="marine-grade">IS 710 - MARINE Grade</Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-2.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/blog/5.png" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="bwp-grade">IS 10701 - BWP Grade </Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-3.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/blog/6.png" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="fire-retardant">IS 5509 - FIRE RETARDANT Grade</Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-4.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/blog/7.png" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="block-board">IS 1659 - Block Board </Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-4.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/blog/8.png" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="shuttering-grade">IS 4990 - SHUTTERING Grade </Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-4.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/blog/9.png" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="chequered-truck-flooring">Chequered & Truck flooring</Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-4.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/blog/10.webp" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="particle-board">Particle board </Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-4.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/blog/12.webp" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="bamboo-sheet">Bamboo sheet</Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-4.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/blog/13.webp" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="mdf-hdf-hdhmr">MDF / HDF / HDHMR </Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-4.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/blog/14.webp" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="pvc-wpcframe">PVC / WPC FRAME </Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-4.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/blog/15.webp" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="door">DOOR </Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-4.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/blog/16.webp" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="finger-joints">FINGER JOINT </Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-4.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Gallery Two Single End*/}
                            {/*Gallery Two Single Start*/}
                           
                            {/*Gallery Two Single End*/}
                            {/*Gallery Two Single Start*/}
                           
                            {/*Gallery Two Single End*/}
                        </div>
                    </Swiper>
                    {/* If we need navigation buttons */}
                    {/* <div className="gallery-two__nav">
                        <div className="swiper-button-prev1">
                            <i className="icon-arrow-left"></i>
                        </div>
                        <div className="swiper-button-next1">
                            <i className="icon-arrow-right"></i>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        {/*Gallery Two End */}
        </>
    )
}
