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
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Digital Locking Solutions ">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'450px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/hard/112.webp" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                           <li>
    <p><span>Material:</span> Zinc Alloy, Stainless Steel, Aluminium</p>
</li>
<li>
    <p><span>Power:</span> 4–8 AA batteries / Rechargeable battery pack</p>
</li>
<li>
    <p><span>Unlock Modes:</span> Fingerprint, PIN, RFID Card, App, Mechanical Key</p>
</li>
<li>
    <p><span>Connectivity:</span> Bluetooth / Wi-Fi (depending on model)</p>
</li>
<li>
    <p><span>Fingerprint Capacity:</span> 50–200+ prints</p>
</li>
<li>
    <p><span>Card Capacity:</span> 50–150 cards</p>
</li>
<li>
    <p><span>Finish Options:</span> Black, Silver, Rose Gold, Gold, Matte Grey</p>
</li>
<li>
    <p><span>Compatibility:</span> Wooden, Metal, UPVC, WPC, and Main Doors</p>
</li>




                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Digital Locking Solutions<br/> Smart, Secure & Convenient<br/>Access Control</h3>
                    <p className="project-details__text">Digital Locking Solutions are advanced electronic door locks designed to offer keyless, secure,<br/>
                     and convenient access to homes, offices, shops, hotels, and commercial spaces. With multiple<br/>
                      unlocking modes and intelligent features, digital locks provide enhanced safety and modern<br/>
                       functionality for everyday use.</p>
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
    margin-top: -1140px !important;
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