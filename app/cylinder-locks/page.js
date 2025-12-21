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
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Cylinder Locks ">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'300px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/hard/109.webp" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
    <p><span>Material:</span> Brass, Stainless Steel, Zinc Alloy</p>
</li>
<li>
    <p><span>Sizes:</span> 60mm, 70mm, 80mm, 100mm & customized</p>
</li>
<li>
    <p><span>Mechanism:</span> Pin-tumbler, Anti-theft variants</p>
</li>
<li>
    <p><span>Finish Options:</span> Satin Nickel, Chrome, Matte Black, Antique Brass, Gold / Champagne</p>
</li>
<li>
    <p><span>Security Features:</span> Anti-drill pins, Anti-pick mechanism, Anti-bump technology, Hardened steel components</p>
</li>
<li>
    <p><span>Operation:</span> Key-key / Key-thumbturn / Single-side</p>
</li>



                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Cylinder Locks – Secure,<br/> Smooth & Reliable Modern<br/>Locking Systems</h3>
                    <p className="project-details__text">Cylinder Locks are high-security door locking mechanisms featuring a removable cylinder that<br/>
                     controls the lock’s operation. Known for their versatility, durability, and easy replacement,<br/>
                      cylinder locks are widely used in residential, commercial, and industrial doors.</p>
                </div>
            </div>
            <style>{`
                /* Add to your CSS file */


@media (max-width: 768px) {
    .project-details__img{
    margin-top: -80px;
    }
    .project-details__information{
    // margin-top: 40px !important;
    }
    .project-details__content{
    margin-top: -1080px !important;
    margin-bottom: 780px !important;
    }
}
                `}</style>
        </section>
        <Project4 />
        </Layout>
        </>
    )
}