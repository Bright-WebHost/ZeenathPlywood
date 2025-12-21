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

    

        {/*FAQ Four Start */}
        <section className="faq-four">
            <div className="faq-four__shape-1 img-bounce">
                <img src="assets/images/shapes/faq-four-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="faq-four__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">FAQ</span>
                                </div>
                                <h2 className="section-title__title">Building bridges between <br/>businesses customers</h2>
                            </div>
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>What typical steps construction project?</h4>
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
                                        <h4>What factors can construction project?</h4>
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
                                        <h4>Is it necessary construction projects?</h4>
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
                    <div className="col-xl-6">
                        <div className="faq-four__right">
                            <div className="faq-four__img-box">
                                <div className="faq-four__img">
                                    <img src="assets/images/resources/faq-four-img-1.jpg" alt=""/>
                                </div>
                                <div className="faq-four__img-2">
                                    <img src="assets/images/resources/faq-four-img-2.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*FAQ Four End */}
        </>
    )
}
