import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, handleMobileMenu, handlePopup }) {
    return (
        <>
            

		<header className={`main-header ${scroll ? "fixed-header" : ""}`}>
            <nav className="main-menu">
                <div className="main-menu__wrapper">
                    <div className="main-menu__wrapper-inner">
                        <div className="main-menu__left">
                            <div className="main-menu__logo">
                                <Link href="/"><img src="assets/images/resources/logo-1.png" alt=""/></Link>
                            </div>
                        </div>
                        <div className="main-menu__right">
                            <div className="main-menu__menu-box-and-call-box">
                                <div className="main-menu__menu-box">
                                    <div className="main-menu__main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                        <Menu/>
                                    </div>
                                    <div className="main-menu__search-box" onClick={handlePopup}>
                                        <Link href="#" className="main-menu__search search-toggler icon-search"></Link>
                                    </div>
                                </div>
                                <div className="main-menu__call">
                                    <div className="main-menu__call-icon">
                                        <img src="assets/images/icon/main-menu-comment-icon.png" alt=""/>
                                    </div>
                                    <div className="main-menu__call-number">
                                        <p>Need Help:</p>
                                        <h5><Link href="tel:3075550133">(307) 555-0133</Link></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <MobileMenu handleMobileMenu={handleMobileMenu} />
        <div className={`stricky-header header_style_one stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link href="/"><img src="assets/images/resources/logo-1.png" alt=""/></Link>
                                </div>
                            </div>
                            <div className="main-menu__right">
                                <div className="main-menu__menu-box-and-call-box">
                                    <div className="main-menu__menu-box">
                                        <div className="main-menu__main-menu-box">
                                            <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                            <Menu/>
                                        </div>
                                        <div className="main-menu__search-box">
                                            <Link href="#" className="main-menu__search search-toggler icon-search" onClick={handlePopup}></Link>
                                        </div>
                                    </div>
                                    <div className="main-menu__call">
                                        <div className="main-menu__call-icon">
                                            <img src="assets/images/icon/main-menu-comment-icon.png" alt=""/>
                                        </div>
                                        <div className="main-menu__call-number">
                                            <p>Need Help:</p>
                                            <h5><Link href="tel:3075550133">(307) 555-0133</Link></h5>
                                        </div>
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
