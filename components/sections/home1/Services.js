import Link from "next/link"
export default function Services() {
    return (
        <>

        {/*Services One Start */}
        <section className="services-one">
            <div className="container">
                <div className="row">
                    {/*Services One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-one__single">
                            <div className="services-one__icon">
                                <span className="icon-swift-cargo"></span>
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><Link href="service-details">Swift Cargo</Link></h3>
                                <p className="services-one__text">Porem Ipsum isly dummy text of the printing Lorem Ipsum is
                                    simply</p>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="services-one__single">
                            <div className="services-one__icon">
                                <span className="icon-proconstruct"></span>
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><Link href="service-details">ProConstruct</Link></h3>
                                <p className="services-one__text">Porem Ipsum isly dummy text of the printing Lorem Ipsum is
                                    simply</p>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                        <div className="services-one__single">
                            <div className="services-one__icon">
                                <span className="icon-constructo-pro"></span>
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><Link href="service-details">ConstructoPro</Link></h3>
                                <p className="services-one__text">Porem Ipsum isly dummy text of the printing Lorem Ipsum is
                                    simply</p>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="900ms">
                        <div className="services-one__single">
                            <div className="services-one__icon">
                                <span className="icon-renovate"></span>
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><Link href="service-details">Renovate Right</Link></h3>
                                <p className="services-one__text">Porem Ipsum isly dummy text of the printing Lorem Ipsum is
                                    simply</p>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                </div>
            </div>
        </section>
        {/*Services One Start */}
            

        </>
    )
}
