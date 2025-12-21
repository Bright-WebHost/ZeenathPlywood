import Link from "next/link"


export default function About() {
    return (
        <>
        {/*About One Start */}
        <section className="about-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left">
                            <div className="about-one__img wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <img src="assets/images/resources/about-one-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">ABOUT US</span>
                                </div>
                                <h2 className="section-title__title">We are specialized solutions Building</h2>
                            </div>
                            <p className="about-one__text">Content Marketing Solutions: Engage, Inform, and Convert Content
                                Marketing Solutions: Engage, Inform, and Convert </p>
                            <ul className="about-one__points-list list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-analytics"></span>
                                    </div>
                                    <div className="content">
                                        <h3><Link href="about">Smart Analytics</Link></h3>
                                        <p>Content Marketing printing Solutions: Engage, <br/> Inform, and Convert</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-prestige"></span>
                                    </div>
                                    <div className="content">
                                        <h3><Link href="about">Prestige Construction</Link></h3>
                                        <p>Content Marketing printing Solutions: Engage, <br/> Inform, and Convert</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End */}
        </>
    )
}
