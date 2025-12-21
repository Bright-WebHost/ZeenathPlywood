import Link from "next/link"

export default function Team() {
    return (
        <>
        {/*Team Three Start */}
        <section className="team-three">
            <div className="team-three__bg-box">
                <div className="team-three__bg-shape" >
                    <img src="assets/images/shapes/team-three-shape-1.png" alt="" />
                </div>
            </div>
            <div className="container">
                <div className="section-title text-center" >
                    <div className="section-title__tagline-box" style={{marginTop:'110px'}}>
                        <span className="section-title__tagline">Our Team</span>
                    </div>
                    <h2 className="section-title__title">Our Experts at Work</h2>
                </div>
                <div className="row">
                    {/*Team Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="team-three__single">
                            <div className="team-three__img-box">
                                <div className="team-three__img">
                                    <img src="assets/images/team/team-3-1.jpg" alt=""/>
                                </div>
                                <div className="team-three__content">
                                    <div className="team-three__title-box">
                                        <h3 className="team-three__title"><Link href="team">Esther Howard</Link></h3>
                                        <p className="team-three__sub-title">Project Manager</p>
                                    </div>
                                    <div className="team-three__share-and-social">
                                        <div className="team-three__share">
                                            <Link href="#"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-three__social">
                                            <Link href="#"><span className="icon-link-in"></span></Link>
                                            <Link href="#"><span className="icon-twitter"></span></Link>
                                            <Link href="#"><span className="icon-instagram"></span></Link>
                                            <Link href="#"><span className="icon-facebook"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Team Three Single End*/}
                    {/*Team Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="team-three__single">
                            <div className="team-three__img-box">
                                <div className="team-three__img">
                                    <img src="assets/images/team/team-3-2.jpg" alt=""/>
                                </div>
                                <div className="team-three__content">
                                    <div className="team-three__title-box">
                                        <h3 className="team-three__title"><Link href="team">Savannah Nguyen</Link>
                                        </h3>
                                        <p className="team-three__sub-title">President of Sales</p>
                                    </div>
                                    <div className="team-three__share-and-social">
                                        <div className="team-three__share">
                                            <Link href="#"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-three__social">
                                            <Link href="#"><span className="icon-link-in"></span></Link>
                                            <Link href="#"><span className="icon-twitter"></span></Link>
                                            <Link href="#"><span className="icon-instagram"></span></Link>
                                            <Link href="#"><span className="icon-facebook"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Team Three Single End*/}
                    {/*Team Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="600ms">
                        <div className="team-three__single">
                            <div className="team-three__img-box">
                                <div className="team-three__img">
                                    <img src="assets/images/team/team-3-3.jpg" alt=""/>
                                </div>
                                <div className="team-three__content">
                                    <div className="team-three__title-box">
                                        <h3 className="team-three__title"><Link href="team">Sakib Howard</Link></h3>
                                        <p className="team-three__sub-title">Project Manager</p>
                                    </div>
                                    <div className="team-three__share-and-social">
                                        <div className="team-three__share">
                                            <Link href="#"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-three__social">
                                            <Link href="#"><span className="icon-link-in"></span></Link>
                                            <Link href="#"><span className="icon-twitter"></span></Link>
                                            <Link href="#"><span className="icon-instagram"></span></Link>
                                            <Link href="#"><span className="icon-facebook"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Team Three Single End*/}
                </div>
            </div>
        </section>
        {/*Team Three End */}      

        </>
    )
}
