'use client'
import Layout from "@/components/layout/Layout"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import Project from "@/components/sections/home2/Project"
import Project2 from "@/components/sections/home2/Project2"
import Project4 from "@/components/sections/home2/Project4"

export default function Home() {

    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Safe Locks ">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'400px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/hard/118.webp" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
    <p><span>Material:</span> Hardened steel, Brass, Zinc alloy</p>
</li>
<li>
    <p><span>Locking Type:</span> Mechanical / Digital / Biometric / Combination</p>
</li>
<li>
    <p><span>Power (Digital Models):</span> Battery-operated with emergency USB/power option</p>
</li>
<li>
    <p><span>Security Features:</span> Anti-pick pins, Anti-drill plates, Anti-bump mechanism, Alarm-on-wrong-attempt, Dual locking (optional)</p>
</li>
<li>
    <p><span>Finish Options:</span> Matte, Black, Chrome, Stainless</p>
</li>
<li>
    <p><span>Mounting:</span> Safe door integration</p>
</li>


                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Safe Locks – High-Security,<br/> Reliable & Tamper-Proof <br/> Protection for Safes & Vaults</h3>
                    <p className="project-details__text">Safe Locks are advanced locking mechanisms designed to secure safes, vaults, lockers, and <br/>
                    strong rooms. Built for maximum protection, these locks offer anti-theft, anti-tamper, and<br/>
                     high-strength security for both residential and commercial use.</p>
                </div>
            </div>
            <style>{`
                /* Add to your CSS file */


@media (max-width: 768px) {
    .project-details__img{
    margin-top: -80px;
    }
    .project-details__information{
    margin-top: 40px !important;
    }
    .project-details__content{
    margin-top: -1040px !important;
    margin-bottom: 650px !important;
    }
}
                `}</style>
        </section>
        <Project4 />
        </Layout>
        </>
    )
}