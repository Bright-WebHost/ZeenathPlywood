import Link from "next/link"

export default function Footer5() {
    return (
        <>
        {/*Site Footer Five Start*/}
        <footer className="site-footer-five">
            <div className="site-footer-five__shape-1">
                <img src="assets/images/shapes/site-footer-five-shape-1.png" alt=""/>
            </div>
            <div className="site-footer-five__shape-2">
                <img src="assets/images/shapes/site-footer-five-shape-2.png" alt=""/>
            </div>
            <div className="site-footer-five__top">
                <div className="container">
                    <div className="site-footer-five__top-inner">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget-five__column footer-widget-five__about">
                                    <div className="footer-widget-five__logo">
                                        <Link href="/"><img src="assets/images/resources/footer-logo-2.png"
                                                alt=""/></Link>
                                    </div>
                                    <p className="footer-widget-five__about-text">It is a long established ft that a will
                                        being li distracted by the content of amj page ghjkl when looking</p>
                                    <div className="site-footer-five__social">
                                        <Link href="#"><i className="icon-facebook"></i></Link>
                                        <Link href="#"><i className="icon-Frame"></i></Link>
                                        <Link href="#"><i className="icon-instagram"></i></Link>
                                        <Link href="#"><i className="icon-pinterest"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget-five__column footer-widget-five__services">
                                    <div className="footer-widget-five__title-box">
                                        <h3 className="footer-widget-five__title">More Service</h3>
                                    </div>
                                    <ul className="footer-widget-five__services-list list-unstyled">
                                        <li>
                                            <Link href="service-details">Cement mixing</Link>
                                        </li>
                                        <li>
                                            <Link href="service-details">Plumbing Installation</Link>
                                        </li>
                                        <li>
                                            <Link href="service-details">Building Renovation</Link>
                                        </li>
                                        <li>
                                            <Link href="service-details">Pixel Craft</Link>
                                        </li>
                                        <li>
                                            <Link href="service-details">Elite Structures</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget-five__column footer-widget-five__contact">
                                    <div className="footer-widget-five__title-box">
                                        <h3 className="footer-widget-five__title">Contact</h3>
                                    </div>
                                    <ul className="footer-widget-five__contact-list list-unstyled">
                                        <li>
                                            <p>Requesting A Call:</p>
                                            <Link href="tel:6295550129">(629) 555-0129</Link>
                                        </li>
                                        <li>
                                            <p>Our E-mail:</p>
                                            <Link href="mailto:info@example.com">info@example.com</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget-five__column footer-widget-five__newsletter">
                                    <div className="footer-widget-five__title-box">
                                        <h3 className="footer-widget-five__title">Newsletter</h3>
                                    </div>
                                    <p className="footer-widget-five__newsletter-text">It is a long established ft that a
                                        will being li distracted content </p>
                                    <form className="footer-widget-five__newsletter-form mc-form">
                                        <div className="footer-widget-five__newsletter-input-box">
                                            <input type="email" placeholder="Email" name="EMAIL"/>
                                            <button type="submit" className="footer-widget-five__newsletter-btn"><span
                                                    className="icon-paper-plane"></span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer-five__bottom">
                <div className="container">
                    <div className="site-footer-five__bottom-inner">
                        <p className="site-footer-five__bottom-text">© Starplate 2024 | All Rights Reserved</p>
                        <ul className="list-unstyled site-footer-five__bottom-menu">
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
