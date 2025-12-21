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
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Furniture Locks ">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'300px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/hard/116.webp" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
    <p><span>Material:</span> Zinc alloy, Brass cylinder, Steel body</p>
</li>
<li>
    <p><span>Finish Options:</span> Chrome, Matte, Satin, Black, Brass</p>
</li>
<li>
    <p><span>Mounting:</span> Panel/Side-mounted, Glass-mounted, Cam-based</p>
</li>
<li>
    <p><span>Key Type:</span> Standard, Reversible, Dimple key, Master-key systems</p>
</li>
<li>
    <p><span>Locking:</span> 1-way / 2-way / Central locking</p>
</li>
<li>
    <p><span>Security Features:</span> Anti-pick pins, Smooth key rotation, Sturdy locking plates</p>
</li>


                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Furniture Locks – Secure,<br/> Smooth & Reliable Locking for <br/> Cabinets & Drawers</h3>
                    <p className="project-details__text">Furniture Locks are compact, durable locking mechanisms designed to secure cabinets, drawers,<br/>
                     wardrobes, sliding units, and office furniture. With smooth operation, strong build quality, and<br/>
                      multiple design options, these locks ensure convenience, privacy, and safety across residential<br/>
                       and commercial furniture.</p>
                </div>
            </div>
            <style>{`
                /* Add to your CSS file */


@media (max-width: 768px) {
    .project-details__img{
    margin-top: -80px;
    }
    .project-details__information{
    margin-top: 110px !important;
    }
    .project-details__content{
    margin-top: -1090px !important;
    margin-bottom: 750px !important;
    }
}
                `}</style>
        </section>
        <Project4 />
        </Layout>
        </>
    )
}