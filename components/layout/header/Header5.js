import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header5({ scroll, handlePopup, handleMobileMenu }) {
    return (
        <>
            
        <header className={`main-header-five ${scroll ? "fixed-header" : ""}`}>
            <nav className="main-menu main-menu-five">
                <div className="main-menu-five__wrapper">
                    <div className="container">
                        <div className="main-menu-five__wrapper-inner">
                            <div className="main-menu-five__left">
                                <div className="main-menu-five__logo">
                                    <Link href="/"><img src="assets/images/shapes/zee-logo.webp" alt="" style={{height:'75px'}}/></Link>
                                    
                                </div>
                            </div>
                            <div className="main-menu-five__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                <Menu/>
                            </div>
                            <div className="main-menu-five__right">
                                {/* <div className="main-menu-five__search-box">
                                    <Link href="#" className="main-menu-five__search search-toggler icon-search" onClick={handlePopup}></Link>
                                </div> */}
                                <div className="main-menu-five__btn-box hide-mobile ">
                                    <Link href="contact" className="main-menu-five__btn thm-btn">Get a quote<span
                                            className="icon-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <MobileMenu handleMobileMenu={handleMobileMenu} />
        <div className={`stricky-header stricked-menu main-menu main-menu-five ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu main-menu-five">
                    <div className="main-menu-five__wrapper">
                        <div className="container">
                            <div className="main-menu-five__wrapper-inner">
                                <div className="main-menu-five__left">
                                    <div className="main-menu-five__logo">
                                        <Link href="/"><img src="assets/images/shapes/zee-logo.webp" alt="" style={{height:'65px'}}/></Link>
                                    </div>
                                </div>
                               
                                <div className="main-menu-five__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                    <Menu/>
                                </div>
                                <div className="main-menu-five__right">
                                    {/* <div className="main-menu-five__search-box">
                                        <Link href="#" className="main-menu-five__search search-toggler icon-search"></Link>
                                    </div> */}
                                    <div className="main-menu-five__btn-box hide-mobile">
                                        <Link href="contact" className="main-menu-five__btn thm-btn">Get a quote<span
                                                className="icon-plus"></span></Link>
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
