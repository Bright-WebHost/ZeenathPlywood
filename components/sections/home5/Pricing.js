import Link from "next/link"

export default function Pricing() {
    return (
        <>


        {/*Pricing Four Start */}
        <section className="pricing-four">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Best Pricing</span>
                    </div>
                    <h2 className="section-title__title">Constructing visions building<br/> success at a time</h2>
                </div>
                <div className="row">
                    {/*Pricing Four Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="pricing-four__single">
                            <h4 className="pricing-four__title">Stater Plan</h4>
                            <div className="pricing-four__price-box">
                                <p>$19<span>/mo</span></p>
                            </div>
                            <div className="pricing-four__points-and-btn">
                                <ul className="pricing-four__points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-2"></span>
                                        </div>
                                        <p>Mistakes To Avoid</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-2"></span>
                                        </div>
                                        <p>Your Startup</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-2"></span>
                                        </div>
                                        <p>Knew About Fonts</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-2"></span>
                                        </div>
                                        <p>Winning Metric for Your Startup</p>
                                    </li>
                                </ul>
                                <div className="pricing-four__btn-box">
                                    <Link href="pricing" className="thm-btn pricing-four__btn">Get Now<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Pricing Four Single End*/}
                    {/*Pricing Four Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="pricing-four__single">
                            <h4 className="pricing-four__title">Basic Plan</h4>
                            <div className="pricing-four__price-box">
                                <p>$29<span>/mo</span></p>
                            </div>
                            <div className="pricing-four__points-and-btn">
                                <ul className="pricing-four__points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-2"></span>
                                        </div>
                                        <p>Mistakes To Avoid</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-2"></span>
                                        </div>
                                        <p>Your Startup</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-2"></span>
                                        </div>
                                        <p>Knew About Fonts</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-2"></span>
                                        </div>
                                        <p>Winning Metric for Your Startup</p>
                                    </li>
                                </ul>
                                <div className="pricing-four__btn-box">
                                    <Link href="pricing" className="thm-btn pricing-four__btn">Get Now<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Pricing Four Single End*/}
                    {/*Pricing Four Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="pricing-four__single">
                            <h4 className="pricing-four__title">Premium Plan</h4>
                            <div className="pricing-four__price-box">
                                <p>$89<span>/mo</span></p>
                            </div>
                            <div className="pricing-four__points-and-btn">
                                <ul className="pricing-four__points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-2"></span>
                                        </div>
                                        <p>Mistakes To Avoid</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-2"></span>
                                        </div>
                                        <p>Your Startup</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-2"></span>
                                        </div>
                                        <p>Knew About Fonts</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-2"></span>
                                        </div>
                                        <p>Winning Metric for Your Startup</p>
                                    </li>
                                </ul>
                                <div className="pricing-four__btn-box">
                                    <Link href="pricing" className="thm-btn pricing-four__btn">Get Now<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Pricing Four Single End*/}
                </div>
            </div>
        </section>
        {/*Pricing Four End */}
        </>
    )
}
