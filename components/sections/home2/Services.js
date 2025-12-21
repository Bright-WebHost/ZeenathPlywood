'use client'
import Link from "next/link"


export default function Services() {
    return (
        <>

        {/*Services Three Start */}
        <section className="services-three">
            <div className="container">
                <div className="row">
                    {/*Services Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-three__single">
                            <div className="services-three__icon">
                                <span className="icon-architect"></span>
                            </div>
                            <h3 className="services-three__title"><Link href="service-details">Master Craft
                                    Construction</Link></h3>
                            <p className="services-three__text">Customer satisfaction is crucial for the amohlodi business
                                as it leads to desini customer loyalty loves repeat</p>
                            <div className="services-three__btn-box">
                                <Link href="service-details" className="services-three__btn thm-btn">Read more<span
                                        className="icon-dabble-arrow-right"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*Services Three Single End*/}
                    {/*Services Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="services-three__single">
                            <div className="services-three__icon">
                                <span className="icon-buildings"></span>
                            </div>
                            <h3 className="services-three__title"><Link href="service-details">Build Tech Solutions</Link>
                            </h3>
                            <p className="services-three__text">Customer satisfaction is crucial for the amohlodi business
                                as it leads to desini customer loyalty loves repeat</p>
                            <div className="services-three__btn-box">
                                <Link href="service-details" className="services-three__btn thm-btn">Read more<span
                                        className="icon-dabble-arrow-right"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*Services Three Single End*/}
                    {/*Services Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="600ms">
                        <div className="services-three__single">
                            <div className="services-three__icon">
                                <span className="icon-hook"></span>
                            </div>
                            <h3 className="services-three__title"><Link href="service-details">Stellar Structures</Link></h3>
                            <p className="services-three__text">Customer satisfaction is crucial for the amohlodi business
                                as it leads to desini customer loyalty loves repeat</p>
                            <div className="services-three__btn-box">
                                <Link href="service-details" className="services-three__btn thm-btn">Read more<span
                                        className="icon-dabble-arrow-right"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*Services Three Single End*/}
                </div>
            </div>
        </section>
        {/*Services Three Start */}

        </>
    )
}
