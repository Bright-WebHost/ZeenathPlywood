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
    <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Gold Bar">      
    
    {/*Project Details Start*/}
    <section className="project-details" style={{paddingBottom:'250px'}}>
        <div className="container">
            <div className="project-details__img">
                <img src="assets/images/hard/139.webp" alt="Gold Bar"/>
                <div className="project-details__information">
                    <div className="project-details__information-minus"></div>
                    <h3 className="project-details__information-title">Technical Specifications</h3><br/>
                    <ul className="project-details__information-list list-unstyled">
                        <li>
                            <p><span>Material:</span> PVC / WPC / MDF (depending on model)</p>
                        </li>
                        <li>
                            <p><span>Thickness:</span> 8mm – 15mm</p>
                        </li>
                        <li>
                            <p><span>Panel Size:</span> 8×4 ft / 8×2 ft / modular bars</p>
                        </li>
                        <li>
                            <p><span>Finish:</span> High-gloss metallic gold / brushed gold</p>
                        </li>
                        <li>
                            <p><span>Pattern:</span> Vertical or horizontal bar design</p>
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
                    Gold Bar – Premium,<br/> Luxurious & High-Gloss <br/>Decorative Panel
                </h3>
                <p className="project-details__text">
                    Gold Bar Panels are stylish decorative wall panels featuring a metallic gold finish with sleek<br/> bar-style grooves. 
                    Designed to create a luxurious, modern, and high-impact look, Gold Bar<br/> panels are perfect for feature walls, 
                    TV units, reception areas, wardrobes, and premium<br/> commercial interiors.
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
    margin-top: -870px !important;
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
