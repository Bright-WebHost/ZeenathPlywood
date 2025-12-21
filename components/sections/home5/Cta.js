

export default function Cta() {
    return (
        <>

        {/*CTA Three Start */}
        <section className="cta-three">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="cta-three__left">
                            <div className="cta-three__img-box">
                                <div className="cta-three__img">
                                    <img src="assets/images/resources/cta-three-img-1.png" alt=""/>
                                </div>
                                <div className="cta-three__img-2">
                                    <img src="assets/images/resources/cta-three-img-2.png" alt=""/>
                                </div>
                                <div className="cta-three__img-shape"></div>
                                <div className="cta-three__shape-1 float-bob-x">
                                    <img src="assets/images/shapes/cta-three-shape-1.png" alt=""/>
                                </div>
                                <div className="cta-three__shape-2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="cta-three__right">
                            <h3 className="cta-three__title">Subscribe to Our<br/> Newsletter</h3>
                            <p className="cta-three__text">It is a long established fact that a reader will be
                                distracted<br/> by
                                the readable content of a page when looking at its layout</p>
                            <form className="cta-three__form">
                                <div className="cta-three__input-box">
                                    <input type="email" placeholder="Enter Your Email" name="EMAIL"/>
                                    <button type="submit" className="cta-three__btn thm-btn">Subscribe Now<span
                                            className="icon-dabble-arrow-right"></span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA Three End */}
        </>
    )
}
