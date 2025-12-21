import Link from "next/link"

export default function Services() {
    return (
        <>
        {/*Services Seven Start */}
        <section className="services-seven">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="services-seven__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Latest Service</span>
                                </div>
                                <h2 className="section-title__title">Construction is the main process of creating</h2>
                            </div>
                            <p className="services-seven__text">Magnis viverra nisl rhoncus egestas rhoncus elit at. Massa
                                volutpat eleifend pellentesque vivamus nulla</p>
                            <div className="services-seven__btn-box">
                                <Link href="services" className="services-seven__btn thm-btn">View More<span
                                        className="icon-dabble-arrow-right"></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="services-seven__right">
                            <div className="row">
                                {/*Services Seven Single Start */}
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                                    <div className="services-seven__single">
                                        <div className="services-seven__title-box">
                                            <h4 className="services-seven__title"><Link href="service-details">Efficient
                                                    Builders</Link></h4>
                                            <p className="services-seven__sub-title">Constructo Pro</p>
                                        </div>
                                        <div className="services-seven__icon">
                                            <span className="icon-proconstruct"></span>
                                        </div>
                                    </div>
                                </div>
                                {/*Services Seven Single End */}
                                {/*Services Seven Single Start */}
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="200ms">
                                    <div className="services-seven__single">
                                        <div className="services-seven__title-box">
                                            <h4 className="services-seven__title"><Link href="service-details">Structural
                                                    Solutions</Link></h4>
                                            <p className="services-seven__sub-title">Enduring Edifices</p>
                                        </div>
                                        <div className="services-seven__icon">
                                            <span className="icon-constructo-pro"></span>
                                        </div>
                                    </div>
                                </div>
                                {/*Services Seven Single End */}
                                {/*Services Seven Single Start */}
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                                    <div className="services-seven__single">
                                        <div className="services-seven__title-box">
                                            <h4 className="services-seven__title"><Link href="service-details">Intelligent
                                                    Infrastruc</Link>
                                            </h4>
                                            <p className="services-seven__sub-title">Building a legacy that lasts</p>
                                        </div>
                                        <div className="services-seven__icon">
                                            <span className="icon-buildings"></span>
                                        </div>
                                    </div>
                                </div>
                                {/*Services Seven Single End */}
                                {/*Services Seven Single Start */}
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="400ms">
                                    <div className="services-seven__single">
                                        <div className="services-seven__title-box">
                                            <h4 className="services-seven__title"><Link href="service-details">Master
                                                    Builders</Link></h4>
                                            <p className="services-seven__sub-title">Crafted Construction</p>
                                        </div>
                                        <div className="services-seven__icon">
                                            <span className="icon-swift-cargo"></span>
                                        </div>
                                    </div>
                                </div>
                                {/*Services Seven Single End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Services Seven End */}
        </>
    )
}
