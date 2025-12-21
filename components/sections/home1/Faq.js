'use client'
import Link from "next/link"
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
        {/*FAQ One Start*/}
        <section className="faq-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">SOME fAQS</span>
                                </div>
                                <h2 className="section-title__title">Creating Structures that <br/> Stand of Time </h2>
                            </div>
                            <p className="faq-one__text">Et purus duis sollicitudin dignissim habitant. Egestas nulla quis
                                venenatis cras sed eu massa eu faucibus. Urna fusce aenean tortor pretium. Et purus duis
                                sollicitudin dignissim habitant. Egestas </p>
                            <div className="faq-one__btn-box">
                                <Link href="faq" className="faq-one__btn thm-btn">Learn more<span
                                        className="icon-dabble-arrow-right"></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__right">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>What is construction?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis cras
                                                sed
                                                eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                sollicitudin dignissim habitant</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>How long does project typically take?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis cras
                                                sed
                                                eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                sollicitudin dignissim habitant</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4>What different of construction projects?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis cras
                                                sed
                                                eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                sollicitudin dignissim habitant</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                    <div className="accrodion-title">
                                        <h4>What is the role of a construction manager?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis cras
                                                sed
                                                eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                sollicitudin dignissim habitant</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*FAQ One End*/}
            
        </>
    )
}
