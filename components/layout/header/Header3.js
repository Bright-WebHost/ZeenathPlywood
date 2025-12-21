import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header3({ scroll, handlePopup, handleMobileMenu  }) {
    return (
        <>

        <header className={`main-header-three ${scroll ? "fixed-header" : ""}`}>
            <nav className="main-menu main-menu-three">
                <div className="main-menu-three__wrapper">
                    <div className="container">
                        <div className="main-menu-three__wrapper-inner">
                            <div className="main-menu-three__left">
                                <div className="main-menu-three__logo">
                                    <Link href="/"><img src="assets/images/shapes/zee-logo.webp" alt="" style={{height:'75px'}} /></Link>
                                </div>
                            </div>
                            <div className="main-menu-three__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                <Menu/>
                            </div>
                            <div className="main-menu-three__right">
                                <div className="main-menu-three__btn-box">
                                    <Link href="contact" className="main-menu-three__btn thm-btn">Get A Quote</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <MobileMenu handleMobileMenu={handleMobileMenu} />
        <div className={`stricky-header stricked-menu main-menu main-menu-three ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu main-menu-three">
                    <div className="main-menu-three__wrapper">
                        <div className="container">
                            <div className="main-menu-three__wrapper-inner">
                                <div className="main-menu-three__left">
                                    <div className="main-menu-three__logo">
                                        <Link href="/"><img src="assets/images/shapes/zee-logo.webp" alt="" style={{height:'75px'}}/></Link>
                                    </div>
                                </div>
                                <div className="main-menu-three__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                    <Menu/>
                                </div>
                                <div className="main-menu-three__right">
                                    <div className="main-menu-three__btn-box">
                                        <Link href="contact" className="main-menu-three__btn thm-btn">Get A Quote</Link>
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
