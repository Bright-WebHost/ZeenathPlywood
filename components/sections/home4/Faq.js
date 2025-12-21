'use client'
import { useState } from 'react'
 



export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>

        {/*Faq Three Start */}
        <section className="faq-three">
            <div className="faq-three__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/faq-three-bg.jpg' }} ></div>
            <div className="faq-three__year">
                <p>Since 1950</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5"></div>
                    <div className="col-xl-7">
                        <div className="faq-three__right wow slideInRight" data-wow-delay="100ms"
                            data-wow-duration="2500ms">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Some faq</span>
                                </div>
                                <h2 className="section-title__title">Building the we live </h2>
                            </div>
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>What are the typical steps cons project?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. Many desktop
                                                publishing packages and web page editors now use Lorem Ipsum as their
                                                default model text</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>How long does a construction usually take?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. Many desktop
                                                publishing packages and web page editors now use Lorem Ipsum as their
                                                default model text</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4>What factors can affect a construction project?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. Many desktop
                                                publishing packages and web page editors now use Lorem Ipsum as their
                                                default model text</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                    <div className="accrodion-title">
                                        <h4>Is it necessary to obtain construction projects?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. Many desktop
                                                publishing packages and web page editors now use Lorem Ipsum as their
                                                default model text</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Faq Three End */}
        </>
    )
}
