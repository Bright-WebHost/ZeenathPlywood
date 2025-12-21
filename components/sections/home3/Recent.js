import Link from "next/link"

export default function Recent() {
    return (
        <>

        {/*Recent Project Start */}
        <section className="recent-project">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box" style={{marginTop:'170px'}}>
                        <span className="section-title__tagline"></span>
                    </div>
                    <h2 className="section-title__title">Our Key Strengths</h2>
                </div>
                <ul className="recent-project__list-box list-unstyled">
                    <li className="wow fadeInUp" data-wow-delay="100ms">
                        <div className="recent-project__img">
                            <img src="assets/images/backgrounds/28.png" alt=""/>
                        </div>
                        <div className="recent-project__list-content">
                            <div className="icon">
                                <span className="icon-architect"></span>
                            </div>
                            <div className="content">
                                <h3><Link href="project-details">Trusted Since 1996</Link></h3>
                                <p>Over 25 years of experience in the industry </p>
                            </div>
                        </div>
                        <div className="recent-project__btn-box">
                            <Link href="about" className="recent-project__btn thm-btn">Read more<span
                                    className="icon-dabble-arrow-right"></span></Link>
                        </div>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="300ms">
                        <div className="recent-project__img">
                            <img src="assets/images/backgrounds/29.png" alt=""/>
                        </div>
                        <div className="recent-project__list-content">
                            <div className="icon">
                                <span className="icon-blueprint-2"></span>
                            </div>
                            <div className="content">
                                <h3><Link href="project-details">Quality Products</Link></h3>
                                <p>Durable plywood, laminates, and veneers you can rely on </p>
                            </div>
                        </div>
                        <div className="recent-project__btn-box">
                            <Link href="about" className="recent-project__btn thm-btn">Read more<span
                                    className="icon-dabble-arrow-right"></span></Link>
                        </div>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="600ms">
                        <div className="recent-project__img">
                            <img src="assets/images/backgrounds/30.png" alt=""/>
                        </div>
                        <div className="recent-project__list-content">
                            <div className="icon">
                                <span className="icon-blueprint-1"></span>
                            </div>
                            <div className="content">
                                <h3><Link href="project-details">Customer Focused</Link></h3>
                                <p>We support and guide our customers at every step</p>
                            </div>
                        </div>
                        <div className="recent-project__btn-box">
                            <Link href="about" className="recent-project__btn thm-btn">Read more<span
                                    className="icon-dabble-arrow-right"></span></Link>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        {/*Recent Project End */}

        </>
    )
}
