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
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Mosaic Panels">      
        
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'200px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/hard/135.webp" alt="Mosaic Panels"/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3><br/>
                        <ul className="project-details__information-list list-unstyled">

                            <li>
                                <p><span>Material:</span> Stone, glass, metal, wood, PVC, WPC, resin, composites</p>
                            </li>

                            <li>
                                <p><span>Size:</span> 300×300 mm, 600×300 mm, 8×2 ft, 8×4 ft</p>
                            </li>

                            <li>
                                <p><span>Thickness:</span> 6–15 mm</p>
                            </li>

                            <li>
                                <p><span>Finish:</span> Glossy, matte, textured, 3D, metallic/wood grain</p>
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
                        Mosaic Panels – Artistic,<br/> Elegant & Modern Decorative<br/> Wall Solutions
                    </h3>

                    <p className="project-details__text">
                        Mosaic Panels are pre-designed decorative panels made from stone, glass, metal, wood, or <br/>composite materials 
                        arranged in stylish patterns. They add depth, texture, and artistic detail <br/>to interiors—ideal for feature walls, décor 
                        accents, and premium architectural spaces.
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
    margin-top: -800px !important;
    margin-bottom: 610px !important;
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
