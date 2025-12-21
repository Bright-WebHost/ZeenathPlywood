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
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Charcoal Sheets">      
        
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'300px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/hard/134.webp" alt="Charcoal Sheets"/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3><br/>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
                                <p><span>Material:</span> Polystyrene / Charcoal polymer</p>
                            </li>
                            <li>
                                <p><span>Thickness:</span> 4–6 mm</p>
                            </li>
                            <li>
                                <p><span>Size:</span> 8×2 ft / 8×4 ft</p>
                            </li>
                            <li>
                                <p><span>Finish Options:</span> Wood texture, metallic, matte, gloss, 3D patterns</p>
                            </li>
                            {/* <li>
                                <p><span>Installation:</span> Adhesive-based; supports nails & screws</p>
                            </li> */}
                            <li>
                                <p><span>Applications:</span> Walls, ceilings, wardrobes, furniture panels, décor elements</p>
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
                        Charcoal Sheets – Stylish, <br/>Lightweight & Premium <br/>Decorative Wall Panels
                    </h3>
                    <p className="project-details__text">
                        Charcoal Sheets are premium decorative panels made from polystyrene-based materials,<br/> offering rich textures, 
                        3D patterns, and elegant finishes. They are lightweight, moisture-proof,<br/> termite-proof, and easy to work with—ideal 
                        for feature walls, ceilings, wardrobes, TV units,<br/> and luxury interior décor.
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
    margin-bottom: 580px !important;
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
