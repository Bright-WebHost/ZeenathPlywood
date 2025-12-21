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
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Rim Locks ">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'300px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/hard/114.webp" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
    <p><span>Material:</span> Mild Steel, Stainless Steel, Brass, Zinc Alloy</p>
</li>
<li>
    <p><span>Finish Options:</span> Satin Steel, Black, Antique Brass, Chrome, Ivory / Brown (for classic styles)</p>
</li>
<li>
    <p><span>Mechanism:</span> Latch + Lock with key</p>
</li>
<li>
    <p><span>Mounting:</span> Surface-mounted installation</p>
</li>
<li>
    <p><span>Operation:</span> Key-key or Key-knob (depending on model)</p>
</li>
<li>
    <p><span>Durability:</span> Corrosion-resistant; Long-lasting</p>
</li>


                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Rim Locks – Simple,<br/> Secure & Easy-to-Install Door <br/>Locking Solutions</h3>
                    <p className="project-details__text">Rim Locks are surface-mounted door locks designed for quick installation and reliable security.<br/>
                     Mounted on the inside surface of the door rather than being embedded, rim locks offer a<br/>
                      practical and durable locking solution for wooden doors, room doors, gates, and light<br/>
                       commercial spaces.</p>
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
    margin-top: -1000px !important;
    margin-bottom: 690px !important;
    }
}
                `}</style>
        </section>
        <Project4 />
        </Layout>
        </>
    )
}