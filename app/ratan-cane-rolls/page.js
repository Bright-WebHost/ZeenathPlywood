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
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Rattan Cane Rolls">      
        
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'300px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/hard/136.webp" alt="Rattan Cane Rolls"/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3><br/>
                        <ul className="project-details__information-list list-unstyled">

                            <li>
                                <p><span>Material:</span> Natural rattan / cane fiber</p>
                            </li>

                            <li>
                                <p><span>Types:</span> Open weave, closed weave, basket/diamond, center cane</p>
                            </li>

                            <li>
                                <p><span>Roll Size:</span> 18", 24", 36" width; 15–30 ft length</p>
                            </li>

                            <li>
                                <p><span>Thickness:</span> 1–2 mm</p>
                            </li>

                            <li>
                                <p><span>Applications:</span> Furniture panels, wall accents, headboards, partitions, ceilings, décor crafts</p>
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
                        Rattan Cane Rolls – Natural,<br/> Elegant & Eco-Friendly<br/> Decorative Weaving Material
                    </h3>

                    <p className="project-details__text">
                        Rattan Cane Rolls are natural woven sheets made from high-quality cane fiber. Known for<br/> their airy, timeless texture, 
                        they are widely used in furniture, wall décor, ceilings, and interior<br/> design—adding a warm, organic, and classic 
                        aesthetic to any space.
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
    margin-top: -870px !important;
    margin-bottom: 600px !important;
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