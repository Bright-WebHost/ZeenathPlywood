
import Layout from "@/components/layout/Layout"
import SideButton from "@/components/layout/SideButton"
import Link from "next/link"
export default function Home() {

    return (
        <>
    <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Contact">
        <SideButton/>
        {/*Contact Page Start*/}
        <section className="contact-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-page__left">
                            <div className="contact-page__img">
                                <img src="assets/images/backgrounds/23.png" alt=""/>
                            </div>
                            <style>{`
        
        @media(max-width:768px){
            .contact-page__left img{
            margin-top: -60px !important;
            }
            
        }
        
        `}</style>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-page__right">
                            <h3 className="contact-page__title">Get In Touch With Us</h3>
                            <ul className="contact-page__contact-list list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-location"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Location</h3>
                                        <p>Polymer House, Nellikai Road, Mangalore</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-call"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Phone number</h3>
                                        <p><Link href="tel:+91 96 06 260928 ">+91 96 06 260928 </Link></p>
                                        {/* <p><Link href="tel:1234000000">1234 - 000 - 000 </Link></p> */}
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-email"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Email</h3>
                                        <p><Link href="mailto:zeenathplywood@gmail.com">zeenathplywood@gmail.com</Link></p>
                                    </div>
                                </li>
                            </ul>
                            <div className="contact-page__social">
                                <Link href="https://www.facebook.com/p/Zeenath-Plywood-61564139555929/" target="blank"><i className="icon-facebook"></i></Link>
                                        <Link href="https://www.instagram.com/zeenathplywoodmangalore/" target="blank"><i className="icon-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Contact Page End*/}

        {/*Google Map Start*/}
        <section className="google-map-one">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62235.274763042165!2d74.7599268486328!3d12.862341599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35bad026c7401%3A0x556cd852559ce9d4!2sZeenath%20Plywoods%20And%20Corporate%20Interior%20Exclusives!5e0!3m2!1sen!2sin!4v1766212210605!5m2!1sen!2sin"   
                className="google-map__one" style={{height:'450px'}}></iframe>

        </section>
        {/*Google Map End*/}

        {/*Contact Three Start*/}
        <section className="contact-three">
            <div className="container">
                <div className="row">
                    <div className="section-title text-center">
                        <div className="section-title__tagline-box" style={{marginTop:'150px'}}>
                            <span className="section-title__tagline">Get in touch</span>
                        </div>
                        <h2 className="section-title__title">Send us a message</h2>
                    </div>
                    <form action="assets/inc/sendemail.php" className="contact-three__form contact-form-validated">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6">
                                <div className="contact-three__input-box">
                                    <input type="text" placeholder="Your Name" name="name"/>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="contact-three__input-box">
                                    <input type="email" placeholder="Your Email" name="email"/>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="contact-three__input-box">
                                    <input type="text" placeholder="Phone Number" name="Phone"/>
                                </div>
                            </div>
                            {/* <div className="col-xl-3 col-lg-6">
                                <div className="contact-three__input-box">
                                    <input type="text" placeholder="Your Subject" name="Subject"/>
                                </div>
                            </div> */}
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="contact-three__input-box text-message-box">
                                    <textarea name="message" placeholder="Write your Message"></textarea>
                                </div>
                                <div className="contact-three__btn-box">
                                    <button type="submit" className="thm-btn contact-three__btn">Send message<span
                                            className="icon-dabble-arrow-right"></span></button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="result"></div>
                </div>
            </div>
        </section>
        {/*Contact Three End*/}

        {/*CTA One Start*/}
        <section className="cta-one hide-mobile">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__shape-1">
                        <img src="assets/images/backgrounds/26.png" alt="" style={{marginRight: '-240px'}}/>

                    </div>
                    <div className="cta-one__img">
                        {/* <img src="assets/images/backgrounds/27.png" alt=""/> */}
                    </div>
                    <h3 className="cta-one__title">Craftin digital experiences<br/> With that inspire</h3>
                    <div className="cta-one__from-box">
                        <form className="cta-one__form">
                            <div className="cta-one__input-box">
                                {/* <input type="email" placeholder="Your E-mail" name="email"/> */}
                            </div>
                            {/* <button type="submit" className="cta-one__btn thm-btn">Subscribe Us</button> */}
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA One End*/}

    </Layout>
    </>
    )
}