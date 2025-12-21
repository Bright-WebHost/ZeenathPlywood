import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, handlePopup, handleMobileMenu }) {
    return (
        <>

        <header className={`main-header-two ${scroll ? "fixed-header" : ""}`}>
            <div className="main-header-two__wrap">
                <div className="main-header-two__logo">
                    <Link href="/">
                        <img src="assets/images/resources/logo-2.png" alt=""/>
                    </Link>
                </div>
                <div className="main-header-two__top">
                    <div className="main-header-two__top-inner">
                        <ul className="list-unstyled main-header-two__contact-list">
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
                        <div className="main-header-two__top-right">
                            <div className="main-header-two__social-box">
                                <div className="main-header-two__social-box-inner">
                                    <h4 className="main-header-two__social-box-title">Follow On:</h4>
                                    <div className="main-header-two__social">
                                        <Link href="#"><i className="icon-facebook"></i></Link>
                                        <Link href="#"><i className="icon-instagram"></i></Link>
                                        <Link href="#"><i className="icon-Frame"></i></Link>
                                        <Link href="#"><i className="icon-link-in"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main-menu main-menu-two">
                    <div className="main-menu-two__wrapper">
                        <div className="main-menu-two__wrapper-inner">
                            <div className="main-menu-two__menu-box-and-btn-box">
                                <div className="main-menu-two__menu-box">
                                    <div className="main-menu-two__main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                        <Menu/>
                                    </div>
                                </div>
                                <div className="main-menu-two__btn-box">
                                    <Link href="contact" className="main-menu-two__btn thm-btn">Get A quato</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <MobileMenu handleMobileMenu={handleMobileMenu} />
        <div className={`stricky-header stricked-menu main-menu main-menu-two ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
            <nav className="main-menu main-menu-two">
                    <div className="main-menu-two__wrapper">
                        <div className="main-menu-two__wrapper-inner">
                            <div className="main-menu-two__menu-box-and-btn-box">
                                <div className="main-menu-two__menu-box">
                                    <div className="main-menu-two__main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                        <Menu/>
                                    </div>
                                </div>
                                <div className="main-menu-two__btn-box">
                                    <Link href="contact" className="main-menu-two__btn thm-btn">Get A quato</Link>
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
