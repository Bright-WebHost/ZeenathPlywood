'use client'
import Link from "next/link"


export default function Whychoose() {
    return (
        <>

        {/* Why Choose One Start */}
        <section className="why-choose-one">
            <div className="why-choose-one__bg"
                style={{ backgroundImage: 'url(assets/images/backgrounds/why-choose-one-bg.jpg' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="why-choose-one__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Why Choose Us</span>
                                </div>
                                <h2 className="section-title__title">Logistics made simple <br/>transportation </h2>
                            </div>
                            <p className="why-choose-one__text">Et purus duis sollicitudin dignissim habitant. Egestas nulla
                                quis<br/> venenatis cras sed eu massa eu faucibus. Urna fusce tortor pretium. Et<br/>
                                purus duis
                                sollicitudin dignissim habitant. Egestas nulla </p>
                            <ul className="why-choose-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-crane"></span>
                                    </div>
                                    <h3><Link href="about">Floor installation</Link></h3>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-crane-1"></span>
                                    </div>
                                    <h3><Link href="about">Roof leak repair</Link></h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Why Choose One End */}
            
        </>
    )
}
