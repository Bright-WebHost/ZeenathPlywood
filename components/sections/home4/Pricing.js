import Link from "next/link"

export default function Pricing() {
    return (
        <>


        {/*Pricing Three Start */}
        <section className="pricing-three">
            <div className="pricing-three__shape-1 img-bounce">
                <img src="assets/images/shapes/pricing-three-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Best Pricing</span>
                    </div>
                    <h2 className="section-title__title">Innovating for a better<br/> tomorrow</h2>
                </div>
                <ul className="pricing-three__price-list list-unstyled">
                    <li className="wow fadeInUp" data-wow-delay="100ms">
                        <div className="pricing-three__price-and-btn">
                            <div className="pricing-three__img">
                                <img src="assets/images/resources/pricing-three-img-1.jpg" alt=""/>
                            </div>
                            <div className="pricing-three__price-box">
                                <div className="pricing-three__price">
                                    <h3>$19<span>/mo</span></h3>
                                </div>
                                <div className="pricing-three__price-content">
                                    <h3 className="pricing-three__price-title">Stater Plan</h3>
                                    <p className="pricing-three__price-text">Content Marketing Solutions Engage Inform
                                        and<br/> Convert Your Audience Solutions</p>
                                </div>
                            </div>
                            <div className="pricing-three__btn-box">
                                <Link href="pricing" className="pricing-three__btn thm-btn">Get Now<span
                                        className="icon-dabble-arrow-right"></span></Link>
                            </div>
                        </div>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="200ms">
                        <div className="pricing-three__price-and-btn">
                            <div className="pricing-three__img">
                                <img src="assets/images/resources/pricing-three-img-1.jpg" alt=""/>
                            </div>
                            <div className="pricing-three__price-box">
                                <div className="pricing-three__price">
                                    <h3>$29<span>/mo</span></h3>
                                </div>
                                <div className="pricing-three__price-content">
                                    <h3 className="pricing-three__price-title">Premium Plan</h3>
                                    <p className="pricing-three__price-text">Content Marketing Solutions Engage Inform
                                        and<br/> Convert Your Audience Solutions</p>
                                </div>
                            </div>
                            <div className="pricing-three__btn-box">
                                <Link href="pricing" className="pricing-three__btn thm-btn">Get Now<span
                                        className="icon-dabble-arrow-right"></span></Link>
                            </div>
                        </div>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="300ms">
                        <div className="pricing-three__price-and-btn">
                            <div className="pricing-three__img">
                                <img src="assets/images/resources/pricing-three-img-1.jpg" alt=""/>
                            </div>
                            <div className="pricing-three__price-box">
                                <div className="pricing-three__price">
                                    <h3>$89<span>/mo</span></h3>
                                </div>
                                <div className="pricing-three__price-content">
                                    <h3 className="pricing-three__price-title">Basic Plan</h3>
                                    <p className="pricing-three__price-text">Content Marketing Solutions Engage Inform
                                        and<br/> Convert Your Audience Solutions</p>
                                </div>
                            </div>
                            <div className="pricing-three__btn-box">
                                <Link href="pricing" className="pricing-three__btn thm-btn">Get Now<span
                                        className="icon-dabble-arrow-right"></span></Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        {/*Pricing Three End */}
        </>
    )
}
