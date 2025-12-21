import Link from "next/link"

export default function Services() {
    return (
        <>
        {/*Services Five Start */}
        <section className="services-five hide-mobile">
            <div className="container">
                <div className="row" style={{marginTop:'50px'}}>
                    {/*Services Five Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms" >
                        <div className="services-five__single" >
                            <div className="services-five__icon">
                                <span className="icon-swift-cargo"></span>
                            </div>
                            <h3 className="services-five__title"><Link href="#">Quality You Can Trust</Link></h3>
                        </div>
                    </div>
                    {/*Services Five Single End*/}
                    {/*Services Five Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="services-five__single" style={{height:'263px'}}>
                            <div className="services-five__icon">
                                <span className="icon-proconstruct"></span>
                            </div>
                            <h3 className="services-five__title"><Link href="#">Multiple Options for Every Need</Link></h3>
                        </div>
                    </div>
                    {/*Services Five Single End*/}
                    {/*Services Five Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                        <div className="services-five__single">
                            <div className="services-five__icon">
                                <span className="icon-constructo-pro"></span>
                            </div>
                            <h3 className="services-five__title"><Link href="#">Reliability and Expertise</Link></h3>
                        </div>
                    </div>
                    {/*Services Five Single End*/}
                    {/*Services Five Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="900ms">
                        <div className="services-five__single">
                            <div className="services-five__icon">
                                <span className="icon-renovate"></span>
                            </div>
                            <h3 className="services-five__title"><Link href="#">Customer-Centric Approach</Link></h3>
                        </div>
                    </div>
                    {/*Services Five Single End*/}
                </div>
            </div>
        </section>
        {/*Services Five End */}
          
        </>
    )
}
