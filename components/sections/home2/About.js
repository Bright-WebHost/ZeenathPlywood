'use client'

export default function About() {
    return (
        <>

        {/*About Two Start */}
        <section className="about-two">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-two__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">ABOUT US</span>
                                </div>
                                <h2 className="section-title__title">Building Dreams One Brick at a Time</h2>
                            </div>
                            <p className="about-two__text">Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies
                                dictum facilisis sem. Imperdiet massa</p>
                            <ul className="list-unstyled about-two__points">
                                <li>
                                    <div className="icon">
                                        <span className="icon-check-2"></span>
                                    </div>
                                    <div className="text">
                                        <p>ConstructoPro Building Your Dreams</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check-2"></span>
                                    </div>
                                    <div className="text">
                                        <p>Construction with Precision</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check-2"></span>
                                    </div>
                                    <div className="text">
                                        <p>Constructive Innovations</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check-2"></span>
                                    </div>
                                    <div className="text">
                                        <p>Craftsmen Construction</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-two__right">
                            <div className="about-two__img wow slideInRight" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <img src="assets/images/resources/about-two-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About Two End */}
        </>
    )
}
