'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
}

export default function Gallery3() {
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
        <h2 style={{color:'white'}}>Furniture Fittings</h2>
        <div className="row">

            {/* 73 */}
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/73.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <h3 className="gallery-two__title"><Link href="hinges">Hinges</Link></h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* 74 */}
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/74.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <h3 className="gallery-two__title"><Link href="sliding-folding">Sliding & Folding systems</Link></h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* 75 */}
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/75.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <h3 className="gallery-two__title"><Link href="wardrobe-accessories">Wardrobe accessories</Link></h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* 76 */}
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/76.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <h3 className="gallery-two__title"><Link href="drawer-runners">Drawer runners</Link></h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* 77 */}
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/77.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <h3 className="gallery-two__title"><Link href="kitchen-acc">Kitchen accessories</Link></h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* 78 */}
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/78.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <h3 className="gallery-two__title"><Link href="profiles">Profiles</Link></h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* 79 */}
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/79.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <h3 className="gallery-two__title"><Link href="home-decor">Home Decor Handles</Link></h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* 80 */}
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/80.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <h3 className="gallery-two__title"><Link href="wardrobe-handles">Wardrobe Handles</Link></h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* 81 */}
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/81.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <h3 className="gallery-two__title"><Link href="bed-fittings">Bed Fittings</Link></h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* 82 */}
            <div className="col-xl-3 col-lg-6">
                <div className="gallery-two__single">
                    <div className="gallery-two__img-box">
                        <div className="gallery-two__img">
                            <img src="assets/images/hard/82.webp" alt=""/>
                        </div>
                        <div className="gallery-two__content">
                            <h3 className="gallery-two__title"><Link href="sofa-legs">Sofa legs</Link></h3>
                        </div>
                    </div>
                </div>
            </div>

            <h2 style={{color:'white'}}>Architectural Hardware</h2>

            {/* 83 */}
<div className="col-xl-3 col-lg-6">
    <div className="gallery-two__single">
        <div className="gallery-two__img-box">
            <div className="gallery-two__img">
                <img src="assets/images/hard/83.webp" alt=""/>
            </div>
            <div className="gallery-two__content">
                <h3 className="gallery-two__title"><Link href="door-hinge">Door hinge</Link></h3>
            </div>
        </div>
    </div>
</div>

{/* 84 */}
<div className="col-xl-3 col-lg-6">
    <div className="gallery-two__single">
        <div className="gallery-two__img-box">
            <div className="gallery-two__img">
                <img src="assets/images/hard/84.webp" alt=""/>
            </div>
            <div className="gallery-two__content">
                <h3 className="gallery-two__title"><Link href="door-window-fittings">Door & Window fittings</Link></h3>
            </div>
        </div>
    </div>
</div>

{/* 85 */}
<div className="col-xl-3 col-lg-6">
    <div className="gallery-two__single">
        <div className="gallery-two__img-box">
            <div className="gallery-two__img">
                <img src="assets/images/hard/85.webp" alt=""/>
            </div>
            <div className="gallery-two__content">
                <h3 className="gallery-two__title"><Link href="mortice-locking-solutions">Mortice locking solutions</Link></h3>
            </div>
        </div>
    </div>
</div>

{/* 86 */}
<div className="col-xl-3 col-lg-6">
    <div className="gallery-two__single">
        <div className="gallery-two__img-box">
            <div className="gallery-two__img">
                <img src="assets/images/hard/86.webp" alt=""/>
            </div>
            <div className="gallery-two__content">
                <h3 className="gallery-two__title"><Link href="cylinder-locks">Cylinder locks</Link></h3>
            </div>
        </div>
    </div>
</div>

{/* 87 */}
<div className="col-xl-3 col-lg-6">
    <div className="gallery-two__single">
        <div className="gallery-two__img-box">
            <div className="gallery-two__img">
                <img src="assets/images/hard/87.webp" alt=""/>
            </div>
            <div className="gallery-two__content">
                <h3 className="gallery-two__title"><Link href="floor-springs">Floor springs</Link></h3>
            </div>
        </div>
    </div>
</div>

{/* 88 */}
<div className="col-xl-3 col-lg-6">
    <div className="gallery-two__single">
        <div className="gallery-two__img-box">
            <div className="gallery-two__img">
                <img src="assets/images/hard/88.webp" alt=""/>
            </div>
            <div className="gallery-two__content">
                <h3 className="gallery-two__title"><Link href="glass-patch-fittings">Glass patch fittings</Link></h3>
            </div>
        </div>
    </div>
</div>

{/* 89 */}
<div className="col-xl-3 col-lg-6">
    <div className="gallery-two__single">
        <div className="gallery-two__img-box">
            <div className="gallery-two__img">
                <img src="assets/images/hard/89.webp" alt=""/>
            </div>
            <div className="gallery-two__content">
                <h3 className="gallery-two__title"><Link href="digital-locking-solutions">Digital locking solutions</Link></h3>
            </div>
        </div>
    </div>
</div>

{/* 90 */}
<div className="col-xl-3 col-lg-6">
    <div className="gallery-two__single">
        <div className="gallery-two__img-box">
            <div className="gallery-two__img">
                <img src="assets/images/hard/90.webp" alt=""/>
            </div>
            <div className="gallery-two__content">
                <h3 className="gallery-two__title"><Link href="pull-handles">Pull handles</Link></h3>
            </div>
        </div>
    </div>
</div>

{/* 91 */}
<div className="col-xl-3 col-lg-6">
    <div className="gallery-two__single">
        <div className="gallery-two__img-box">
            <div className="gallery-two__img">
                <img src="assets/images/hard/91.webp" alt=""/>
            </div>
            <div className="gallery-two__content">
                <h3 className="gallery-two__title"><Link href="rim-locks">Rim Locks</Link></h3>
            </div>
        </div>
    </div>
</div>

{/* 92 */}
<div className="col-xl-3 col-lg-6">
    <div className="gallery-two__single">
        <div className="gallery-two__img-box">
            <div className="gallery-two__img">
                <img src="assets/images/hard/92.webp" alt=""/>
            </div>
            <div className="gallery-two__content">
                <h3 className="gallery-two__title"><Link href="pad-locks">Pad Locks</Link></h3>
            </div>
        </div>
    </div>
</div>

{/* 93 */}
<div className="col-xl-3 col-lg-6">
    <div className="gallery-two__single">
        <div className="gallery-two__img-box">
            <div className="gallery-two__img">
                <img src="assets/images/hard/93.webp" alt=""/>
            </div>
            <div className="gallery-two__content">
                <h3 className="gallery-two__title"><Link href="furniture-locks">Furniture Locks</Link></h3>
            </div>
        </div>
    </div>
</div>

{/* 94 */}
<div className="col-xl-3 col-lg-6">
    <div className="gallery-two__single">
        <div className="gallery-two__img-box">
            <div className="gallery-two__img">
                <img src="assets/images/hard/94.webp" alt=""/>
            </div>
            <div className="gallery-two__content">
                <h3 className="gallery-two__title"><Link href="door-hooks">Door hooks</Link></h3>
            </div>
        </div>
    </div>
</div>

<h2 style={{color:'white'}}>Safety Hardware</h2>

{/* 95 */}
<div className="col-xl-3 col-lg-6">
    <div className="gallery-two__single">
        <div className="gallery-two__img-box">
            <div className="gallery-two__img">
                <img src="assets/images/hard/95.webp" alt=""/>
            </div>
            <div className="gallery-two__content">
                <h3 className="gallery-two__title"><Link href="safe-locks">Safe locks</Link></h3>
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