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
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Mortice Locking Solutions ">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'500px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/hard/108.webp" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
    <p><span>Material:</span> Stainless Steel, Brass, Zinc Alloy</p>
</li>
<li>
    <p><span>Backset Options:</span> 45mm, 50mm, 60mm (varies by model)</p>
</li>
<li>
    <p><span>Lock Body:</span> Single latch / Latch + Deadbolt</p>
</li>
<li>
    <p><span>Cylinder:</span> Euro profile, High-security brass cylinder</p>
</li>
<li>
    <p><span>Finish Options:</span> Satin Steel, Chrome, Matte Black, Antique Brass, Gold / Rose Gold</p>
</li>
<li>
    <p><span>Operation:</span> Key-key / Key-thumbturn / Privacy</p>
</li>
<li>
    <p><span>Durability:</span> Rust-proof, Corrosion-resistant, Smooth internal mechanism</p>
</li>


                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Mortice Locking Solutions<br/> Secure, Stylish & High<br/>Performance Door Locks</h3>
                    <p className="project-details__text">Mortice Locking Solutions are premium door locking systems installed inside the door <br/>
                    through a cut-in “mortice” pocket. Designed for superior security, smooth operation, and<br/>
                     long-term durability, these locks are ideal for main doors, bedroom doors, commercial<br/>
                     spaces, and high-traffic areas.</p>
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
    margin-top: -1160px !important;
    margin-bottom: 680px !important;
    }
}
                `}</style>
        </section>
<Project4 />
        </Layout>
        </>
    )
}