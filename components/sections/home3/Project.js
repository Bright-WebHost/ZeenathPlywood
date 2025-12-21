'use client'
import Link from "next/link"
import { useState } from 'react'


export default function Project() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

        {/*Project Three Start */}
        <section className="project-three">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">our Portfolio</span>
                    </div>
                    <h2 className="section-title__title">Building with Integrity<br/> Building with Love</h2>
                </div>
                <div className="row">
                    {/*Project Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                        <div className="project-three__single">
                            <div className="project-three__img-box">
                                <div className="project-three__img">
                                    <img src="assets/images/project/project-3-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="project-three__content">
                                <div className="project-three__title-box">
                                    <h3 className="project-three__title"><Link href="project-details">Build
                                            Construction</Link></h3>
                                    <p className="project-three__sub-title">Et purus duis sollicit</p>
                                </div>
                                <div className="project-three__plus">
                                    <Link href="assets/images/project/project-3-1.jpg" className="img-popup"><span
                                            className="icon-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project Three Single End*/}
                    {/*Project Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="project-three__single">
                            <div className="project-three__img-box">
                                <div className="project-three__img">
                                    <img src="assets/images/project/project-3-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="project-three__content">
                                <div className="project-three__title-box">
                                    <h3 className="project-three__title"><Link href="project-details">Precision
                                            Craftsmen</Link></h3>
                                    <p className="project-three__sub-title">Et purus duis sollicit</p>
                                </div>
                                <div className="project-three__plus">
                                    <Link href="assets/images/project/project-3-1.jpg" className="img-popup"><span
                                            className="icon-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project Three Single End*/}
                    {/*Project Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="600ms">
                        <div className="project-three__single">
                            <div className="project-three__img-box">
                                <div className="project-three__img">
                                    <img src="assets/images/project/project-3-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="project-three__content">
                                <div className="project-three__title-box">
                                    <h3 className="project-three__title"><Link href="project-details">Hammer
                                            Construction</Link></h3>
                                    <p className="project-three__sub-title">Et purus duis sollicit</p>
                                </div>
                                <div className="project-three__plus">
                                    <Link href="assets/images/project/project-3-1.jpg" className="img-popup"><span
                                            className="icon-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project Three Single End*/}
                </div>
            </div>
        </section>
        {/*Project Three End */}
        </>
    )
}
