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
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Pad Locks ">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'300px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/hard/115.webp" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
    <p><span>Material:</span> Brass, Stainless Steel, Hardened Steel, Zinc Alloy</p>
</li>
<li>
    <p><span>Body Sizes:</span> 20mm – 90mm</p>
</li>
<li>
    <p><span>Shackle Types:</span> Long shackle, Short shackle, Hardened, Covered</p>
</li>
<li>
    <p><span>Finish Options:</span> Chrome, Brass, Matte Steel, Powder Coated</p>
</li>
<li>
    <p><span>Security Features:</span> Double locking mechanism, Anti-drill plates, Anti-pick pins, Anti-cut shackles</p>
</li>
<li>
    <p><span>Usage:</span> Indoor & Outdoor</p>
</li>


                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Pad Locks – Strong,<br/> Portable & Secure Locking <br/> Solutions</h3>
                    <p className="project-details__text">Pad Locks are versatile, portable locking devices used to secure gates, doors, lockers, luggage, <br/>
                    shutters, and storage units. Designed for high durability and reliability, padlocks provide quick,<br/>
                     convenient, and effective security for both indoor and outdoor applications.</p>
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
    margin-top: -970px !important;
    margin-bottom: 700px !important;
    }
}
                `}</style>
        </section>
        <Project4 />
        </Layout>
        </>
    )
}