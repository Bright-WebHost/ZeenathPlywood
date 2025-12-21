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
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Floor Springs ">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'300px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/hard/110.webp" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                           <li>
    <p><span>Material:</span> Cast iron body, Stainless steel cover plate</p>
</li>
<li>
    <p><span>Door Weight Capacity:</span> 60 kg – 150+ kg (varies by model)</p>
</li>
<li>
    <p><span>Max Door Width:</span> 700mm – 1300mm</p>
</li>
<li>
    <p><span>Opening Angle:</span> Up to 90° / 180°</p>
</li>
<li>
    <p><span>Mechanism:</span> Hydraulic-controlled</p>
</li>
<li>
    <p><span>Features:</span> Adjustable speed control, Hold-open (optional), Two-way swing, Corrosion-resistant components</p>
</li>



                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Floor Springs<br/> Heavy-Duty, Smooth &<br/>Reliable Door Closing Systems</h3>
                    <p className="project-details__text">Floor Springs are concealed hydraulic door closing mechanisms designed for frameless glass<br/>
                     doors, wooden doors, and metal doors. Installed in the floor, they offer smooth operation,<br/>
                      controlled closing, and long-lasting performance, making them ideal for high-traffic commercial<br/>
                       and residential spaces.</p>
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