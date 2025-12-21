'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
}

export default function Gallery4() {
    return (
        <>
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
                            <SwiperSlide>
                            <div className="swiper-slide">
    <div className="gallery-two__single-wrap">
        <div className="row">
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/119.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <div className="gallery-two__title-box">
                                <h3 className="gallery-two__title">
                                    <Link href="seamless-louver-panels">Seamless Louver panels</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/120.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <div className="gallery-two__title-box">
                                <h3 className="gallery-two__title">
                                    <Link href="charcoal-sheets">Charcoal sheets</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/121.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <div className="gallery-two__title-box">
                                <h3 className="gallery-two__title">
                                    <Link href="mosaic-panels">Mosaic panels</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/122.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <div className="gallery-two__title-box">
                                <h3 className="gallery-two__title">
                                    <Link href="ratan-cane-rolls">Ratan Cane rolls</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/123.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <div className="gallery-two__title-box">
                                <h3 className="gallery-two__title">
                                    <Link href="mirror-engraved-panels">Mirror engraved panels</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/124.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <div className="gallery-two__title-box">
                                <h3 className="gallery-two__title">
                                    <Link href="wainscoting">Wainscoting</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/125.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <div className="gallery-two__title-box">
                                <h3 className="gallery-two__title">
                                    <Link href="gold-bar">Gold Bar</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/126.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <div className="gallery-two__title-box">
                                <h3 className="gallery-two__title">
                                    <Link href="alabaster">Alabaster</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/127.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <div className="gallery-two__title-box">
                                <h3 className="gallery-two__title">
                                    <Link href="cork-sheets">Cork sheets</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/179.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <div className="gallery-two__title-box">
                                <h3 className="gallery-two__title">
                                    <Link href="charcofab-fabric-panels">Charcofab fabric panels</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/180.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <div className="gallery-two__title-box">
                                <h3 className="gallery-two__title">
                                    <Link href="fibre-cement-boards">Fibre cement boards</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/181.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <div className="gallery-two__title-box">
                                <h3 className="gallery-two__title">
                                    <Link href="terra-blocks">Terra blocks</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/182.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <div className="gallery-two__title-box">
                                <h3 className="gallery-two__title">
                                    <Link href="breeze-blocks">Breeze blocks</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/128.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <div className="gallery-two__title-box">
                                <h3 className="gallery-two__title">
                                    <Link href="clayneer">Clayneer</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/129.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <div className="gallery-two__title-box">
                                <h3 className="gallery-two__title">
                                    <Link href="hd-hmr-fluted-panels">HD-HMR Fluted Panels</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/130.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <div className="gallery-two__title-box">
                                <h3 className="gallery-two__title">
                                    <Link href="mdf-grill-board">MDF Grill board</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/131.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <div className="gallery-two__title-box">
                                <h3 className="gallery-two__title">
                                    <Link href="mdf-wave-board">MDF wave board</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/132.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <div className="gallery-two__title-box">
                                <h3 className="gallery-two__title">
                                    <Link href="artificial-gardening">Artificial Gardening</Link>
                                </h3>
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
                    </Swiper>
                </div>
            </div>
        </section>
        </>
    )
}