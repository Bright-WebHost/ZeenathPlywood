import Link from "next/link"

export default function Footer3() {
    return (
        <>
       {/*Site Footer Two Start*/}
       <footer className="site-footer-three">
            <div className="site-footer-three__shape-1 float-bob-x">
                {/* <img src="assets/images/shapes/199.webp" alt=""/> */}
            </div>
            <div className="site-footer-three__top">
                <div className="container">
                    <div className="site-footer-three__top-inner">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget-three__column footer-widget-three__about">
                                    <div className="footer-widget-three__logo ">
                                        <Link href="/"><img src="assets/images/resources/z-logo-w.png"
                                                alt=""/></Link>
                                    </div>
                                    <p className="footer-widget-three__about-text"> Bring Your Interiors to Life – Explore our quality plywood,
                                         laminates, and veneers to create beautiful and lasting spaces</p>
                                    <form className="footer-widget-three__about-form mc-form">
                                        <div className="footer-widget-three__about-form-input-box">
                                            <input type="email" placeholder="Your mail address" name="EMAIL"/>
                                            <button type="submit" className="footer-widget-three__about-btn"><span
                                                    className="icon-paper-plane"></span></button>
                                        </div>
                                    </form>
                                    <div className="site-footer-three__social">
                                        <Link href="https://www.facebook.com/p/Zeenath-Plywood-61564139555929/" target="blank"><i className="icon-facebook"></i></Link>
                                        <Link href="https://www.instagram.com/zeenathplywoodmangalore/" target="blank"><i className="icon-instagram"></i></Link>
                                        {/* <Link href="#"><i className="icon-link-in"></i></Link>
                                        <Link href="#"><i className="icon-pinterest"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp hide-mobile" data-wow-delay="200ms" >
                                <div className="footer-widget-three__column footer-widget-three__link">
                                    <div className="footer-widget-three__title-box">
                                        <h3 className="footer-widget-three__title">Quick Links</h3>
                                    </div>
                                    <ul className="footer-widget-three__link-list list-unstyled">
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link href="products">Products</Link>
                                        </li>
                                        <li>
                                            <Link href="contact">Contact Us</Link>
                                        </li>
                                        {/* <li>
                                            <Link href="service-details">Software development</Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp hide-mobile" data-wow-delay="300ms">
                                <div className="footer-widget-three__column footer-widget-three__page">
                                    <div className="footer-widget-three__title-box">
                                        <h3 className="footer-widget-three__title">Categories</h3>
                                    </div>
                                    <ul className="footer-widget-three__link-list list-unstyled">
                                        <li>
                                            <Link href="plywood">Plywood</Link>
                                        </li>
                                        <li>
                                            <Link href="laminates">Laminates</Link>
                                        </li>
                                        <li>
                                            <Link href="veneer">Veneer</Link>
                                        </li>
                                        <li>
                                            <Link href="hardware">Hardware</Link>
                                        </li>
                                        <li>
                                            <Link href="decorative-panels">Decorative Panels</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms" >
                                <div className="footer-widget-three__column footer-widget-three__contact">
                                    <div className="footer-widget-three__title-box">
                                        <h3 className="footer-widget-three__title">Contact</h3>
                                    </div>
                                    <ul className="footer-widget-three__contact-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-location"></span>
                                            </div>
                                            <div className="content">
                                                <span>Address</span>
                                                <p>Polymer House, Nellikai<br/> Road, Mangalore</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-call"></span>
                                            </div>
                                            <div className="content">
                                                <span>Phone Number</span>
                                                <p><Link href="https://wa.me/919606260928" target="_blank">
        +91 96 06 260928
    </Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-email"></span>
                                            </div>
                                            <div className="content">
                                                <span>Email</span>
                                                <p><Link href="mailto:zeenathplywood@gmail.com">zeenathplywood@gmail.com</Link></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer-three__bottom">
                <div className="container">
                    <div className="site-footer-three__bottom-inner">
                        <p className="site-footer-three__bottom-text">© <Link href="https://brightmedia.tech/" target="blank">Bright Media</Link> 2025 | All Rights Reserved</p>
                        {/* <ul className="list-unstyled site-footer-three__bottom-menu">
                            <li><Link href="about">Trams & Condition</Link></li>
                            <li><Link href="about">Privacy Policy</Link></li>
                            <li><Link href="contact">Contact Us</Link></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </footer>
        {/*Site Footer End*/}
        </>
    )
}
