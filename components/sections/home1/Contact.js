'use client'
import Link from "next/link"
 

export default function Contact() {
    
    return (
        <>
        {/*Contact And Team Start*/}
        <section className="contact-and-team">
            <div className="contact-and-team__bg-shape"
                style={{ backgroundImage: 'url(assets/images/shapes/contact-and-team-bg-shape.png' }} ></div>
            <div className="contact-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="contact-one__left">
                                <form className="contact-one__form contact-form-validated">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-one__input-box">
                                                <input type="text" placeholder="Name" name="name"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-one__input-box">
                                                <input type="email" placeholder="E-mail" name="email"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-one__input-box">
                                                <input type="text" placeholder="Phone" name="email"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-one__input-box">
                                                <input type="text" placeholder="Address" name="email"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12">
                                            <div className="contact-one__input-box text-message-box">
                                                <textarea name="message" placeholder="Type Here..."></textarea>
                                            </div>
                                            <div className="contact-one__btn-box">
                                                <button type="submit" className="thm-btn contact-one__btn">Submit
                                                    Now<span className="icon-dabble-arrow-right"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="result"></div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="contact-one__right">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">Talk to us</span>
                                    </div>
                                    <h2 className="section-title__title">Building with the Passion Ensuring Satisfaction
                                    </h2>
                                </div>
                                <p className="contact-one__text">Et purus duis sollicitudin dignissim.Egestas nulla qui
                                    venen acras sed eu massa eu faucibus. Urna fusce aenean tortor pretium. Et purus
                                    duis sollicitudin loren ipsum dummy text</p>
                                <ul className="contact-one__call-box list-unstyled">
                                    <li>
                                        <h4 className="contact-one__call-title">Helpline 24/7</h4>
                                        <div className="contact-one__call-number">
                                            <div className="icon">
                                                <span className="icon-call"></span>
                                            </div>
                                            <p><Link href="tel:+236856220">+236 856 220</Link></p>
                                        </div>
                                    </li>
                                    <li>
                                        <h4 className="contact-one__call-title">E-mail Us:</h4>
                                        <div className="contact-one__call-number">
                                            <div className="icon">
                                                <span className="icon-email"></span>
                                            </div>
                                            <p><Link href="mailto:de.olt@exa.com">de.olt@exa.com</Link></p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="contact-one__social-box">
                                    <div className="contact-one__social-title">Follow Us</div>
                                    <div className="contact-one__social">
                                        <Link href="#"><span className="icon-facebook"></span></Link>
                                        <Link href="#"><span className="icon-twitter"></span></Link>
                                        <Link href="#"><span className="icon-link-in"></span></Link>
                                        <Link href="#"><span className="icon-pinterest"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team-one">
                <div className="container">
                    <div className="section-title text-center">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Talk to us</span>
                        </div>
                        <h2 className="section-title__title">Sustainable Building for a<br/> Tomorrow Shaping </h2>
                    </div>
                    <div className="row">
                        {/*Team One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="team-one__single">
                                <div className="team-one__img-box">
                                    <div className="team-one__img">
                                        <img src="assets/images/team/team-1-1.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__title"><Link href="team">Esther Howard</Link></h3>
                                    <p className="team-one__text">President of Sales</p>
                                    <div className="team-one__share-and-social">
                                        <div className="team-one__share">
                                            <Link href="#"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-one__social">
                                            <Link href="#"><span className="icon-link-in"></span></Link>
                                            <Link href="#"><span className="icon-twitter"></span></Link>
                                            <Link href="#"><span className="icon-instagram"></span></Link>
                                            <Link href="#"><span className="icon-facebook"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Team One Single End*/}
                        {/*Team One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                            <div className="team-one__single">
                                <div className="team-one__img-box">
                                    <div className="team-one__img">
                                        <img src="assets/images/team/team-1-2.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__title"><Link href="team">Savannah Nguyen</Link></h3>
                                    <p className="team-one__text">Ui/Ux Designer</p>
                                    <div className="team-one__share-and-social">
                                        <div className="team-one__share">
                                            <Link href="#"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-one__social">
                                            <Link href="#"><span className="icon-link-in"></span></Link>
                                            <Link href="#"><span className="icon-twitter"></span></Link>
                                            <Link href="#"><span className="icon-instagram"></span></Link>
                                            <Link href="#"><span className="icon-facebook"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Team One Single End*/}
                        {/*Team One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                            <div className="team-one__single">
                                <div className="team-one__img-box">
                                    <div className="team-one__img">
                                        <img src="assets/images/team/team-1-3.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__title"><Link href="team">Sakib Howard</Link></h3>
                                    <p className="team-one__text">Web Development</p>
                                    <div className="team-one__share-and-social">
                                        <div className="team-one__share">
                                            <Link href="#"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-one__social">
                                            <Link href="#"><span className="icon-link-in"></span></Link>
                                            <Link href="#"><span className="icon-twitter"></span></Link>
                                            <Link href="#"><span className="icon-instagram"></span></Link>
                                            <Link href="#"><span className="icon-facebook"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Team One Single End*/}
                        {/*Team One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="900ms">
                            <div className="team-one__single">
                                <div className="team-one__img-box">
                                    <div className="team-one__img">
                                        <img src="assets/images/team/team-1-4.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__title"><Link href="team">Devid Miller</Link></h3>
                                    <p className="team-one__text">Marketing Ceo</p>
                                    <div className="team-one__share-and-social">
                                        <div className="team-one__share">
                                            <Link href="#"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-one__social">
                                            <Link href="#"><span className="icon-link-in"></span></Link>
                                            <Link href="#"><span className="icon-twitter"></span></Link>
                                            <Link href="#"><span className="icon-instagram"></span></Link>
                                            <Link href="#"><span className="icon-facebook"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Team One Single End*/}
                    </div>
                </div>
            </div>
        </section>
        {/*Contact And Team End*/}
            
        </>
    )
}
