import Link from "next/link"


export default function About() {
    return (
        <>
        

        {/*About Five Start */}
        <section className="about-five">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-five__left">
                            <div className="about-five__img-box wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="about-five__shape-1 float-bob-y">
                                    <img src="assets/images/shapes/about-five-shape-1.png" alt=""/>
                                </div>
                                <div className="about-five__shape-2 float-bob-x">
                                    <img src="assets/images/shapes/about-five-shape-2.png" alt=""/>
                                </div>
                                <div className="about-five__img">
                                    <img src="assets/images/resources/about-five-img-1.jpg" alt=""/>
                                </div>
                                <div className="about-five__img-two">
                                    <img src="assets/images/resources/about-five-img-2.jpg" alt=""/>
                                </div>
                                <div className="about-five__experience">
                                    <div className="about-five__experience-icon">
                                        <span className="icon-medal"></span>
                                    </div>
                                    <div className="about-five__experience-content">
                                        <div className="about-five__experience-count-outer">
                                            <div className="about-five__experience-count count-box">
                                                <h3>15</h3>
                                                <span>+</span>
                                            </div>
                                            <h3 className="about-five__experience-text">Years</h3>
                                        </div>
                                        <p className="about-five__experience-count-text">of experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-five__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">About Us</span>
                                </div>
                                <h2 className="section-title__title">Creating foundations for the success</h2>
                            </div>
                            <div className="about-five__text-box">
                                <p className="about-five__text">Construction is the process of creating or assembling
                                    infrast buildings or other large structures. It involves planning, designing and
                                    executing various tasks to ensure the successful</p>
                            </div>
                            <ul className="about-five__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-blueprint-1"></span>
                                    </div>
                                    <div className="text">
                                        <p>Progressive <br/> Projects</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-renovate"></span>
                                    </div>
                                    <div className="text">
                                        <p>Modernized <br/> Construction</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="about-five__btn-box">
                                <Link href="about" className="about-five__btn thm-btn">Read more<span
                                        className="icon-dabble-arrow-right"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About Five End */}

        </>
    )
}
