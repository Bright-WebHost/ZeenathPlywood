import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header4({ scroll, handlePopup, handleMobileMenu }) {
    return (
        <>

        <header className={`main-header-four ${scroll ? "fixed-header" : ""}`}>
            <div className="main-header-four__top">
                <div className="container">
                    <div className="main-header-four__top-inner">
                        <div className="main-header-four__social">
                            <Link href="#"><i className="icon-facebook"></i></Link>
                            <Link href="#"><i className="icon-instagram"></i></Link>
                            <Link href="#"><i className="icon-Frame"></i></Link>
                            <Link href="#"><i className="icon-link-in"></i></Link>
                        </div>
                        <ul className="list-unstyled main-header-four__contact-list">
                            <li>
                                <div className="icon">
                                    <i className="icon-call"></i>
                                </div>
                                <div className="text">
                                    <p><Link href="tel:6295550129">(629) 555-0129</Link>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="icon-email"></i>
                                </div>
                                <div className="text">
                                    <p><Link href="mailto:info@example.com">info@example.com</Link>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="icon-location"></i>
                                </div>
                                <div className="text">
                                    <p>6391 Elgin St. Celina, 10299</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav className="main-menu main-menu-four">
                <div className="main-menu-four__wrapper">
                    <div className="container">
                        <div className="main-menu-four__wrapper-inner">
                            <div className="main-menu-four__left">
                                <div className="main-menu-four__logo">
                                    <Link href="/"><img src="assets/images/resources/logo-1.png" alt=""/></Link>
                                </div>
                            </div>
                            <div className="main-menu-four__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                <Menu/>
                            </div>
                            <div className="main-menu-four__right">
                                <div className="main-menu-four__btn-box">
                                    <Link href="contact" className="main-menu-four__btn thm-btn">Get a quote<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <MobileMenu handleMobileMenu={handleMobileMenu} />
        <div className={`stricky-header stricked-menu main-menu main-menu-four ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu main-menu-four">
                    <div className="main-menu-four__wrapper">
                        <div className="container">
                            <div className="main-menu-four__wrapper-inner">
                                <div className="main-menu-four__left">
                                    <div className="main-menu-four__logo">
                                        <Link href="/"><img src="assets/images/resources/logo-1.png" alt=""/></Link>
                                    </div>
                                </div>
                                <div className="main-menu-four__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                    <Menu/>
                                </div>
                                <div className="main-menu-four__right">
                                    <div className="main-menu-four__btn-box">
                                        <Link href="contact" className="main-menu-four__btn thm-btn">Get a quote<span
                                                className="icon-dabble-arrow-right"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        </>
    )
}
