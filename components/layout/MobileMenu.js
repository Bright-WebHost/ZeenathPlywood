'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  // Function to handle menu item clicks
  const handleMenuItemClick = () => {
    handleMobileMenu(); // Close the mobile menu
  };

  return (
    <>
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu}></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-times"></i></span>

          <div className="logo-box">
            <Link href="/" aria-label="logo image" onClick={handleMenuItemClick}><img src="assets/images/resources/z-logo-w.png" width="150" alt="" /></Link>
          </div>

          <div className="mobile-nav__container">
            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
              <ul className="main-menu__list">
                <li>
                  <Link href="/" onClick={handleMenuItemClick}>Home</Link>
                </li>
                <li>
                  <Link href="about" onClick={handleMenuItemClick}>About</Link>
                </li>
                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}>
                  <Link href="products" onClick={handleMenuItemClick}>Products</Link>
                  <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                    <li><Link href="/plywood" onClick={handleMenuItemClick}>Plywood</Link></li>
                    <li><Link href="/laminates" onClick={handleMenuItemClick}>Laminates</Link></li>
                    <li><Link href="/veneer" onClick={handleMenuItemClick}>Veneer</Link></li>
                    <li><Link href="/hardware" onClick={handleMenuItemClick}>Hardware</Link></li>
                    <li><Link href="/decorative-panels" onClick={handleMenuItemClick}>Decorative Panels</Link></li>
                  </ul>
                  <button 
                    className={isActive.key == 3 ? "expanded open" : ""} 
                    onClick={() => handleToggle(3)}
                    aria-label="Toggle products submenu"
                  >
                    <span className="fa fa-angle-right" />
                  </button>
                </li>
                <li>
                  <Link href="contact" onClick={handleMenuItemClick}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link href="mailto:zeenathplywood@gmail.com" onClick={handleMenuItemClick}>zeenathplywood@gmail.com</Link>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <Link href="tel:+919606260928" onClick={handleMenuItemClick}>+91 96 06 260928</Link>
            </li>
          </ul>
          
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link href="https://www.facebook.com/p/Zeenath-Plywood-61564139555929/" target="blank" onClick={handleMenuItemClick}><i className="icon-facebook"></i></Link>
              <Link href="https://www.instagram.com/zeenathplywoodmangalore/" target="blank" onClick={handleMenuItemClick}><i className="icon-instagram"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu;