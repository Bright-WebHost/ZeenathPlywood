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
    <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="CharcoFab Fabric Panels">      
    
    {/*Project Details Start*/}
    <section className="project-details" style={{paddingBottom:'250px'}}>
        <div className="container">
            <div className="project-details__img">
                <img src="assets/images/hard/183.webp" alt="CharcoFab Fabric Panels"/>
                <div className="project-details__information">
                    <div className="project-details__information-minus"></div>
                    <h3 className="project-details__information-title">Technical Specifications</h3><br/>
                    <ul className="project-details__information-list list-unstyled">
                        <li>
                            <p><span>Material:</span> Fabric surface with charcoal/foam acoustic core</p>
                        </li>
                        <li>
                            <p><span>Thickness:</span> 12mm – 25mm</p>
                        </li>
                        <li>
                            <p><span>Panel Size:</span> 2×2 ft, 2×4 ft, 4×8 ft</p>
                        </li>
                        <li>
                            <p><span>Finish Options:</span> Plain, textured, or woven fabric</p>
                        </li>
                        <li>
                            <p><span>Acoustic Rating:</span> Medium to high sound absorption</p>
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
                    CharcoFab Fabric Panels <br/> Acoustic, Stylish <br/>& Premium Wall Décor
                </h3>
                <p className="project-details__text">
                    CharcoFab Fabric Panels are premium decorative acoustic panels made with a soft fabric<br/> surface 
                    and charcoal-acoustic backing. They enhance interior design while helping reduce<br/> echo and noise, 
                    making them ideal for modern residential and commercial spaces.
                </p>
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
    margin-top: -840px !important;
    margin-bottom: 640px !important;
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
