import Link from "next/link"

export default function About() {
    return (
        <>
        {/*About Six Start */}
        <section className="about-six">
            <div className="about-six__shape-3 float-bob-x">
                <img src="assets/images/shapes/about-six-shape-3.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-six__left">
                            <div className="about-six__img-box wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="about-six__img">
                                    <img src="assets/images/resources/about-six-img-1.jpg" alt=""/>
                                </div>
                                <div className="about-six__shape-1"></div>
                                <div className="about-six__shape-2"></div>
                                <div className="about-six__count-box">
                                    <div className="about-six__count count-box">
                                        <h3>200</h3>
                                        <span>+</span>
                                    </div>
                                    <p className="about-six__count-text">Project Complete</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-six__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">About Us</span>
                                </div>
                                <h2 className="section-title__title">Innovating construction <br/> the industry </h2>
                            </div>
                            <p className="about-six__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                                amet rcus nunc. Duis egestas ac ante sed tincidunt.</p>
                            <ul className="about-six__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-check-2"></span>
                                    </div>
                                    <p>International Development Authority</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check-2"></span>
                                    </div>
                                    <p>Real Authority Method</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check-2"></span>
                                    </div>
                                    <p>Live Project Done With Practical</p>
                                </li>
                            </ul>
                            <div className="about-six__btn-box">
                                <Link href="contact" className="about-six__btn thm-btn">Contact Us<span className="icon-dabble-arrow-right
                                    "></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About Six End */}

        </>
    )
}
