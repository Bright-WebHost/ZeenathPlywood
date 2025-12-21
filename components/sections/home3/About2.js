import Link from "next/link"

export default function About2() {
    return (
        <>
            {/*About Four Start */}
        <section className="about-four">
            <div className="about-four__bg-color"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-four__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box" style={{marginTop:'90px'}}>
                                    <span className="section-title__tagline">Know About Us</span>
                                </div>
                                <h2 className="section-title__title"> What Makes<br/> Us Different</h2>
                            </div>
                            <p className="about-four__text">We combine quality products, reliable service,<br/>
                                 and a customer-first approach to deliver interiors that<br/> truly stand out.</p>
                            <div className="about-four__btn-box">
                                <Link href="about" className="about-four__btn thm-btn">Read more<span
                                        className="icon-dabble-arrow-right"></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-four__right">
                            <div className="row">
                                {/*About Four Single Start*/}
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                    <div className="about-four__single">
                                        <div className="about-four__icon">
                                            <span className="icon-hook"></span>
                                        </div>
                                        <h3 className="about-four__title"><Link href="about">Wide Selection</Link></h3>
                                        <p className="about-four__text">Choose from a variety of plywood, laminates, and veneers
                                             to suit every style and need
                                        </p>
                                    </div>
                                </div>
                                {/*About Four Single End*/}
                                {/*About Four Single Start*/}
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                    <div className="about-four__single">
                                        <div className="about-four__icon">
                                            <span className="icon-robotic-arm"></span>
                                        </div>
                                        <h3 className="about-four__title"><Link href="about">Trusted Quality</Link></h3>
                                        <p className="about-four__text">All our products are strong, durable, and made to last
                                        </p>
                                    </div>
                                </div>
                                {/*About Four Single End*/}
                                {/*About Four Single Start*/}
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                    <div className="about-four__single">
                                        <div className="about-four__icon">
                                            <span className="icon-crane-4"></span>
                                        </div>
                                        <h3 className="about-four__title"><Link href="about">Helpful Support</Link></h3>
                                        <p className="about-four__text">We guide and assist our customers through every step of their project
                                        </p>
                                    </div>
                                </div>
                                {/*About Four Single End*/}
                                {/*About Four Single Start*/}
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                    <div className="about-four__single">
                                        <div className="about-four__icon">
                                            <span className="icon-industry"></span>
                                        </div>
                                        <h3 className="about-four__title"><Link href="about">Value & Care</Link></h3>
                                        <p className="about-four__text">We focus on giving the best products and service at fair value
                                        </p>
                                    </div>
                                </div>
                                {/*About Four Single End*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About Four End */}
        </>
    )
}
