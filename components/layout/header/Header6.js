import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header6({ scroll, isMobileMenu, handleMobileMenu, handlePopup }) {
    return (
        <>
            
        <header className={`main-header-six ${scroll ? "fixed-header" : ""}`}>
            <nav className="main-menu main-menu-six">
                <div className="main-menu-six__wrapper">
                    <div className="container">
                        <div className="main-menu-six__wrapper-inner">
                            <div className="main-menu-six__left">
                                <div className="main-menu-six__logo">
                                    <Link href="/"><img src="assets/images/resources/zeenath-logo.png" alt=""/></Link>
                                </div>
                            </div>
                            <div className="main-menu-six__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                <Menu/>
                            </div>
                            <div className="main-menu-six__right">
                                <div className="main-menu-six__call">
                                    <div className="main-menu-six__call-icon">
                                        <img src="assets/images/icon/main-menu-comment-icon.png" alt=""/>
                                    </div>
                                    <div className="main-menu-six__call-number">
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
        <div className={`stricky-header stricked-menu main-menu main-menu-six ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu main-menu-six">
                    <div className="main-menu-six__wrapper">
                        <div className="container">
                            <div className="main-menu-six__wrapper-inner">
                                <div className="main-menu-six__left">
                                    <div className="main-menu-six__logo">
                                        <Link href="/"><img src="assets/images/resources/logo-3.png" alt=""/></Link>
                                    </div>
                                </div>
                                <div className="main-menu-six__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                    <Menu/>
                                </div>
                                <div className="main-menu-six__right">
                                    <div className="main-menu-six__call">
                                        <div className="main-menu-six__call-icon">
                                            <img src="assets/images/icon/main-menu-comment-icon.png" alt=""/>
                                        </div>
                                        <div className="main-menu-six__call-number">
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
