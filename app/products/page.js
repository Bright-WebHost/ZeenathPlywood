'use client'
import Layout from "@/components/layout/Layout"
import SideButton from "@/components/layout/SideButton"
import Gallery from "@/components/sections/home5/Gallery"
import Work from "@/components/sections/home5/Work"
import Link from "next/link"

export default function Home() {
    return (
        <>
            <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Products">
                {/* Services Page Start */}
                <SideButton/>
                <Work />

                <section className="services-page">
                    <div className="container">
                        <div className="row justify-content-center">
                            {/* Existing cards remain the same */}
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="services-four__single">
                                    <div className="services-four__img">
                                        <img src="assets/images/backgrounds/18.png" alt=""/>
                                    </div>
                                    <div className="services-four__content">
                                        <h5 className="services-four__title"><Link href="plywood">Plywood</Link></h5>
                                        <div className="services-four__btn-box">
                                            <Link href="plywood" className="services-four__btn">Explore <span className="icon-dabble-arrow-right"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="services-four__single">
                                    <div className="services-four__img">
                                        <img src="assets/images/backgrounds/19.png" alt=""/>
                                    </div>
                                    <div className="services-four__content">
                                        <h5 className="services-four__title"><Link href="laminates">Laminates</Link></h5>
                                        <div className="services-four__btn-box">
                                            <Link href="laminates" className="services-four__btn">Explore <span className="icon-dabble-arrow-right"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="services-four__single">
                                    <div className="services-four__img">
                                        <img src="assets/images/backgrounds/20.png" alt=""/>
                                    </div>
                                    <div className="services-four__content">
                                        <h5 className="services-four__title"><Link href="veneer">Veneer</Link></h5>
                                        <div className="services-four__btn-box">
                                            <Link href="veneer" className="services-four__btn">Explore <span className="icon-dabble-arrow-right"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 4th Card - Centered */}
                            <div className="col-xl-4 col-lg-4 col-md-6 offset-xl-0 offset-lg-0 offset-md-3">
                                <div className="services-four__single">
                                    <div className="services-four__img">
                                        <img src="assets/images/backgrounds/21.png" alt=""/>
                                    </div>
                                    <div className="services-four__content">
                                        <h5 className="services-four__title"><Link href="hardware">Hardware</Link></h5>
                                        <div className="services-four__btn-box">
                                            <Link href="hardware" className="services-four__btn">Explore <span className="icon-dabble-arrow-right"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 5th Card - Centered */}
                            <div className="col-xl-4 col-lg-4 col-md-6 offset-xl-0 offset-lg-0 offset-md-3">
                                <div className="services-four__single">
                                    <div className="services-four__img">
                                        <img src="assets/images/backgrounds/22.png" alt=""/>
                                    </div>
                                    <div className="services-four__content">
                                        <h5 className="services-four__title"><Link href="decorative-panels">Decorative Panels</Link></h5>
                                        <div className="services-four__btn-box">
                                            <Link href="decorative-panels" className="services-four__btn">Explore <span className="icon-dabble-arrow-right"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <style>{`
        
        @media(max-width:768px){
            .services-page{
            margin-bottom: -80px !important;
            margin-top: -50px !important;
            }
            
        }
        
        `}</style>
                </section>

                {/* Rest of your components remain the same */}
                <section className="cta-one hide-mobile">
                    <div className="container">
                        <div className="cta-one__inner">
                            <div className="cta-one__shape-1">
                                <img src="assets/images/backgrounds/24.png" alt=""/>
                            </div>
                            <div className="cta-one__img">
                                {/* <img src="assets/images/backgrounds/27.png" alt=""/> */}
                            </div>
                            <h3 className="cta-one__title">Craftin digital experiences<br/> With that inspire</h3>
                            <div className="cta-one__from-box">
                                <form className="cta-one__form">
                                    <div className="cta-one__input-box">
                                        <input type="email" placeholder="Your E-mail" name="email"/>
                                    </div>
                                    <button type="submit" className="cta-one__btn thm-btn">Subscribe Us</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}