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
    <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="MDF Grill Board">      
    
    {/*Project Details Start*/}
    <section className="project-details" style={{paddingBottom:'250px'}}>
        <div className="container">
            <div className="project-details__img">
                <img src="assets/images/hard/144.webp" alt="MDF Grill Board"/>
                <div className="project-details__information">
                    <div className="project-details__information-minus"></div>
                    <h3 className="project-details__information-title">Technical Specifications</h3><br/>
                    <ul className="project-details__information-list list-unstyled">
                        <li>
                            <p><span>Material:</span> MDF (Medium Density Fibreboard)</p>
                        </li>
                        <li>
                            <p><span>Thickness:</span> 6mm – 18mm</p>
                        </li>
                        <li>
                            <p><span>Board Size:</span> 8×4 ft standard (custom sizes vary)</p>
                        </li>
                        <li>
                            <p><span>Cutting Type:</span> CNC precision-cut patterns</p>
                        </li>
                        <li>
                            <p><span>Finish Options:</span> Raw (paintable), pre-laminated, veneer-coated</p>
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
                    MDF Grill Board <br/> Decorative, Versatile <br/>& Precision-Cut Panels
                </h3>
                <p className="project-details__text">
                    MDF Grill Boards are intricately CNC-cut panels made from high-quality Medium Density<br/> Fibreboard. 
                    Designed with detailed patterns and geometric designs, these boards add an<br/>elegant and stylish 
                    decorative touch to interior partitions, wall accents, ceilings, and furniture<br/> elements.
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
