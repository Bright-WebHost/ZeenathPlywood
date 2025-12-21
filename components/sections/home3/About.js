'use client'


export default function About() {
    return (
        <>

           {/*About Three Start */}
        <section className="about-three">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-three__left">
                            <div className="about-three__img wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <img src="assets/images/backgrounds/10.png" alt=""/>
                            </div>
                            <style>{`
                            @media (max-width: 768px) {
  .about-three__left {
    margin-top: 60px !important;
  }
}

                            `}</style>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-three__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box"style={{marginTop:'80px'}}>
                                    <span className="section-title__tagline">About Us</span>
                                </div>
                                <h2 className="section-title__title">Crafting Interiors with Excellence</h2>
                            </div>
                            <p className="about-three__text">For over 25 years, we have been providing high-quality
                                 products and solutions that help create beautiful and durable interiors</p>
                            <ul className="about-three__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-check-3"></span>
                                    </div>
                                    <div className="content">
                                        <h3> Experience You Can Trust</h3>
                                        <p>Since 1996, we have been serving our clients with knowledge and skill,
                                             offering plywood, laminates, and veneers that meet every need.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check-3"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Commitment to Quality</h3>
                                        <p>We make sure every product we offer is strong, long-lasting, 
                                            and designed to give the best results for any project.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About Three End */}
    
        </>
    )
}
