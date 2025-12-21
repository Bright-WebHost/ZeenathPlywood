import Link from "next/link"


export default function Services() {
    return (
        <>
        {/*Services Nine Start */}
        <section className="services-nine">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Best service</span>
                    </div>
                    <h2 className="section-title__title">Building dreams one<br/> brick at a time</h2>
                </div>
                <div className="row">
                    {/*Service Nine Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-nine__single">
                            <div className="services-nine__img-box">
                                <div className="services-nine__img">
                                    <img src="assets/images/services/services-9-1.jpg" alt=""/>
                                </div>
                                <div className="services-nine__icon">
                                    <span className="icon-proconstruct"></span>
                                </div>
                            </div>
                            <div className="services-nine__content">
                                <h3 className="services-nine__title"><Link href="service-details">Cement mixing</Link></h3>
                                <p className="services-nine__text">Lorem ipsum dt ame ctetur adipiscing elit, sed it Lorem
                                    ipsum</p>
                                <div className="services-nine__read-more">
                                    <Link href="service-details">Read More<span className="icon-dabble-arrow-right
                                        "></span></Link>
                                </div>
                                <div className="services-nine__count"></div>
                            </div>
                        </div>
                    </div>
                    {/*Service Nine Single Start*/}
                    {/*Service Nine Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="services-nine__single">
                            <div className="services-nine__img-box">
                                <div className="services-nine__img">
                                    <img src="assets/images/services/services-9-2.jpg" alt=""/>
                                </div>
                                <div className="services-nine__icon">
                                    <span className="icon-proconstruct"></span>
                                </div>
                            </div>
                            <div className="services-nine__content">
                                <h3 className="services-nine__title"><Link href="service-details">Plumbing
                                        Installation</Link></h3>
                                <p className="services-nine__text">Lorem ipsum dt ame ctetur adipiscing elit, sed it Lorem
                                    ipsum</p>
                                <div className="services-nine__read-more">
                                    <Link href="service-details">Read More<span className="icon-dabble-arrow-right
                                        "></span></Link>
                                </div>
                                <div className="services-nine__count"></div>
                            </div>
                        </div>
                    </div>
                    {/*Service Nine Single Start*/}
                    {/*Service Nine Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="services-nine__single">
                            <div className="services-nine__img-box">
                                <div className="services-nine__img">
                                    <img src="assets/images/services/services-9-3.jpg" alt=""/>
                                </div>
                                <div className="services-nine__icon">
                                    <span className="icon-proconstruct"></span>
                                </div>
                            </div>
                            <div className="services-nine__content">
                                <h3 className="services-nine__title"><Link href="service-details">Building Renovation</Link>
                                </h3>
                                <p className="services-nine__text">Lorem ipsum dt ame ctetur adipiscing elit, sed it Lorem
                                    ipsum</p>
                                <div className="services-nine__read-more">
                                    <Link href="service-details">Read More<span className="icon-dabble-arrow-right
                                        "></span></Link>
                                </div>
                                <div className="services-nine__count"></div>
                            </div>
                        </div>
                    </div>
                    {/*Service Nine Single Start*/}
                </div>
            </div>
        </section>
        {/*Services Nine End */}
        </>
    )
}
