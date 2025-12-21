'use client'
import Link from "next/link"

export default function Banner5() {
    return (
        <>
        
        {/* Banner One Start */}
        <section className="banner-one">
            <div className="banner-one__sec-img-1">
                <img src="assets/images/resources/banner-one-sec-img-1.png" alt="" className="float-bob-x"/>
            </div>
            <div className="banner-one__sec-img-2">
                <img src="assets/images/resources/banner-one-sec-img-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="banner-one__top">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="banner-one__top-left">
                                <h2 className="banner-one__top-title">Building dreams one <br/> brick at a time</h2>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="banner-one__top-right">
                                <p className="banner-one__top-text">We have been operating for over a decade, providing
                                    top-notch services to our clients and building a strong</p>
                                <div className="banner-one__btn-box">
                                    <Link href="about" className="banner-one__btn thm-btn">read More<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-one__bottom">
                    <div className="banner-one__img">
                        <img src="assets/images/resources/banner-one-img-1.png" alt=""/>
                    </div>
                    <div className="banner-one__img-shape-1">
                        <img src="assets/images/shapes/banner-one-img-shape-1.png" alt=""/>
                    </div>
                    <div className="banner-one__img-shape-2">
                        <img src="assets/images/shapes/banner-one-img-shape-2.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        {/*Banner One Start */}
        </>
    )
}
