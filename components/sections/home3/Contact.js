'use client'
import Link from "next/link"

export default function Contact() {
    
    return (
        <>

        {/*Contact Two Start */}
        <section className="contact-two">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-two__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">talk to us</span>
                                </div>
                                <h2 className="section-title__title">Crafting Perfect from <br/> Foundation to Finish</h2>
                            </div>
                            <p className="contact-two__text">Et purus duis sollicitudin dignissim habitant. Egestas nulla
                                <br/> quis venenatis cras sed eu massa eu faucibus</p>
                            <div className="contact-two__call-box">
                                <div className="icon">
                                    <span className="icon-call"></span>
                                </div>
                                <div className="content">
                                    <span>Need help?</span>
                                    <p><Link href="tel:+8085550111">+(808) 555-0111</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-two__right">
                            <form className="contact-two__form contact-form-validated">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-two__input-box">
                                            <input type="text" placeholder="Your Name" name="name"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-two__input-box">
                                            <input type="email" placeholder="Your E-mail" name="email"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-two__input-box">
                                            <input type="text" placeholder="Your Phone" name="email"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-two__input-box">
                                            <input type="text" placeholder="Your Location" name="email"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12">
                                        <div className="contact-two__input-box text-message-box">
                                            <textarea name="message" placeholder="Your Massage"></textarea>
                                        </div>
                                        <div className="contact-two__btn-box">
                                            <button type="submit" className="thm-btn contact-two__btn">Send us<span
                                                    className="icon-dabble-arrow-right"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="result"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Contact Two End */}
        </>
    )
}
