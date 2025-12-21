'use client'
import Layout from "@/components/layout/Layout"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import Project2 from "@/components/sections/home2/Project2"
import Project5 from "@/components/sections/home2/Project5"

export default function Home() {
    
const [isOpen, setOpen] = useState(false)
return (
    <>
    <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="HD-HMR Fluted Panels">      
    
    {/*Project Details Start*/}
    <section className="project-details" style={{paddingBottom:'250px'}}>
        <div className="container">
            <div className="project-details__img">
                <img src="assets/images/hard/143.webp" alt="HD-HMR Fluted Panels"/>
                <div className="project-details__information">
                    <div className="project-details__information-minus"></div>
                    <h3 className="project-details__information-title">Technical Specifications</h3><br/>
                    <ul className="project-details__information-list list-unstyled">
                        <li>
                            <p><span>Material:</span> HD-HMR (High Density – High Moisture Resistant Board)</p>
                        </li>
                        <li>
                            <p><span>Thickness:</span> 12mm – 18mm</p>
                        </li>
                        <li>
                            <p><span>Panel Size:</span> 8×4 ft (standard)</p>
                        </li>
                        <li>
                            <p><span>Groove Type:</span> Deep fluted / narrow fluted / wide fluted</p>
                        </li>
                        <li>
                            <p><span>Finish Options:</span> Paintable, veneer-coated, laminate-coated</p>
                        </li>
                        <li>
                            <p>
                              <span>Rating:</span>
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="project-details__content">
                <h3 className="project-details__title">
                    HD-HMR Fluted Panels <br/> Durable, Stylish & <br/>High-Definition Wall Paneling
                </h3>
                <p className="project-details__text">
                    HD-HMR Fluted Panels are premium decorative wall panels made from High-Density, 
                    High-<br/>Moisture-Resistant boards. With deep, defined grooves and a smooth finish, 
                    these panels <br/>offer a modern, elegant look for interior spaces, making them ideal 
                    for premium homes and <br/>commercial designs.
                </p>
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
    margin-top: -880px !important;
    margin-bottom: 650px !important;
    }
}
                `}</style>
        </div>
    </section>

    <Project5 />

    </Layout>
    </>
)
}