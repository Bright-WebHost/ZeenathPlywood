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
    <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Breeze Blocks">      
    
    {/*Project Details Start*/}
    <section className="project-details" style={{paddingBottom:'300px'}}>
        <div className="container">
            <div className="project-details__img">
                <img src="assets/images/hard/186.webp" alt="Breeze Blocks"/>
                <div className="project-details__information">
                    <div className="project-details__information-minus"></div>
                    <h3 className="project-details__information-title">Technical Specifications</h3><br/>
                    <ul className="project-details__information-list list-unstyled">
                        <li>
                            <p><span>Material:</span> Concrete / Cement / Clay</p>
                        </li>
                        <li>
                            <p><span>Block Size:</span> 8×8 inch, 12×12 inch, 16×16 inch (varies by design)</p>
                        </li>
                        <li>
                            <p><span>Thickness:</span> 3 inch – 4 inch</p>
                        </li>
                        <li>
                            <p><span>Design Options:</span> Geometric, floral, abstract patterns</p>
                        </li>
                        <li>
                            <p><span>Color Variants:</span> Grey, white, terracotta, charcoal</p>
                        </li>
                        <li>
                            <p><span>Installation:</span> Mortar or adhesive-based</p>
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
                    Breeze Blocks <br/> Stylish, Airy & Decorative<br/> Ventilation Blocks
                </h3>
                <p className="project-details__text">
                    Breeze Blocks are decorative concrete or clay blocks designed with patterned cut-outs that<br/> allow 
                    natural airflow and light to pass through. They add a modern, retro, and architectural<br/> touch to 
                    walls, partitions, facades, and outdoor spaces while maintaining privacy and visual<br/> appeal.
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
    margin-top: -940px !important;
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

