import Link from "next/link"

export default function Footer4() {
    return (
        <>
            
        {/*Site Footer Five Start*/}
        <footer className="site-footer-four">
            <div className="site-footer-four__top">
                <div className="container">
                    <div className="site-footer-four__top-inner">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget-four__column footer-widget-four__about">
                                    <div className="footer-widget-four__logo">
                                        <Link href="/"><img src="assets/images/resources/footer-logo-2.png"
                                                alt=""/></Link>
                                    </div>
                                    <p className="footer-widget-four__about-text">Lorem Ipsum is simply is Lorem Ipsum is
                                        simply is dumi omy</p>
                                    <form className="footer-widget-four__about-form mc-form">
                                        <div className="footer-widget-four__about-input-box">
                                            <input type="email" placeholder="Email" name="EMAIL"/>
                                            <button type="submit" className="footer-widget-four__about-btn"><span
                                                    className="icon-paper-plane"></span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget-four__column footer-widget-four__services">
                                    <div className="footer-widget-four__title-box">
                                        <h3 className="footer-widget-four__title">Our Services</h3>
                                    </div>
                                    <ul className="footer-widget-four__services-list list-unstyled">
                                        <li>
                                            <Link href="service-details">Progressive Projects</Link>
                                        </li>
                                        <li>
                                            <Link href="service-details">Urban Builders</Link>
                                        </li>
                                        <li>
                                            <Link href="service-details">Modernized Construction</Link>
                                        </li>
                                        <li>
                                            <Link href="service-details">Innovation in Building</Link>
                                        </li>
                                        <li>
                                            <Link href="service-details">Dynamic Developments</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget-four__column footer-widget-four__link">
                                    <div className="footer-widget-four__title-box">
                                        <h3 className="footer-widget-four__title">Get Free Link</h3>
                                    </div>
                                    <ul className="footer-widget-four__link-list list-unstyled">
                                        <li>
                                            <Link href="about"><span className="icon-dabble-arrow-right"></span>About
                                                us</Link>
                                        </li>
                                        <li>
                                            <Link href="services"><span
                                                    className="icon-dabble-arrow-right"></span>Service</Link>
                                        </li>
                                        <li>
                                            <Link href="projects"><span
                                                    className="icon-dabble-arrow-right"></span>Portfolio</Link>
                                        </li>
                                        <li>
                                            <Link href="team"><span className="icon-dabble-arrow-right"></span>Team</Link>
                                        </li>
                                        <li>
                                            <Link href="about"><span className="icon-dabble-arrow-right"></span>Cta</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget-four__column footer-widget-four__contact">
                                    <div className="footer-widget-four__title-box">
                                        <h3 className="footer-widget-four__title">Contact with us</h3>
                                    </div>
                                    <ul className="footer-widget-four__contact-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-call"></span>
                                            </div>
                                            <p><Link href="tel:6295550129">(629) 555-0129</Link></p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-email"></span>
                                            </div>
                                            <p><Link href="mailto:info@example.com">info@example.com</Link></p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-location"></span>
                                            </div>
                                            <p>6391 Elgin St. Celina,10299</p>
                                        </li>
                                    </ul>
                                    <div className="site-footer-four__social">
                                        <Link href="#"><i className="icon-facebook"></i></Link>
                                        <Link href="#"><i className="icon-Frame"></i></Link>
                                        <Link href="#"><i className="icon-instagram"></i></Link>
                                        <Link href="#"><i className="icon-pinterest"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer-four__bottom">
                <div className="container">
                    <div className="site-footer-four__bottom-inner">
                        <p className="site-footer-four__bottom-text">© Starplate 2024 | All Rights Reserved</p>
                        <ul className="list-unstyled site-footer-four__bottom-menu">
                            <li><Link href="about">Trams & Condition</Link></li>
                            <li><Link href="about">Privacy Policy</Link></li>
                            <li><Link href="contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        {/*Site Footer End*/}

        </>
    )
}
