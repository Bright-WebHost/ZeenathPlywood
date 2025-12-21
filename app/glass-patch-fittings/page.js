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
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Glass Patch Fittings">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'300px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/hard/111.webp" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
    <p><span>Material:</span> SS304 / SS316 / Brass / Zinc Alloy</p>
</li>
<li>
    <p><span>Glass Thickness:</span> 8mm, 10mm, 12mm</p>
</li>
<li>
    <p><span>Finish Options:</span> Satin Stainless Steel, Glossy / Mirror, Matte Black, Rose Gold, PVD Gold</p>
</li>
<li>
    <p><span>Mechanism:</span> Compatible with floor springs & top pivots</p>
</li>
<li>
    <p><span>Load Capacity:</span> Depends on patch type & brand (typically 80–150 kg per door)</p>
</li>




                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Glass Patch Fittings - Sleek,<br/> Strong & Premium Hardware<br/>for Frameless Glass Doors</h3>
                    <p className="project-details__text">Glass Patch Fittings are high-quality architectural hardware components used to install and<br/>
                     support frameless glass doors, partitions, and enclosures. Designed for modern interior and<br/>
                      exterior spaces, these fittings offer strength, stability, and a clean, minimalist appearance<br/>
                       while ensuring smooth door operation.</p>
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
    margin-top: -970px !important;
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