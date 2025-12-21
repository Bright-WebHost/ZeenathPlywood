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
    <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Cork Sheets">      
    
    {/*Project Details Start*/}
    <section className="project-details" style={{paddingBottom:'300px'}}>
        <div className="container">
            <div className="project-details__img">
                <img src="assets/images/hard/141.webp" alt="Cork Sheets"/>
                <div className="project-details__information">
                    <div className="project-details__information-minus"></div>
                    <h3 className="project-details__information-title">Technical Specifications</h3><br/>
                    <ul className="project-details__information-list list-unstyled">
                        <li>
                            <p><span>Material:</span> Natural cork</p>
                        </li>
                        <li>
                            <p><span>Thickness:</span> 2mm – 10mm</p>
                        </li>
                        <li>
                            <p><span>Sheet Size:</span> 2×3 ft, 2×4 ft, 4×6 ft, 4×8 ft (varies by manufacturer)</p>
                        </li>
                        <li>
                            <p><span>Color:</span> Natural tan/brown cork shade</p>
                        </li>
                        <li>
                            <p><span>Installation:</span> Adhesive-mounted</p>
                        </li>
                        <li>
                            <p><span>Features:</span> Eco-friendly, acoustic insulation, thermal insulation, flexible, durable</p>
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
                    Cork Sheets – Natural,<br/> Eco-Friendly & Versatile <br/>Decorative Panels
                </h3>
                <p className="project-details__text">
                    Cork Sheets are sustainable, lightweight, and flexible panels made from natural cork bark.<br/> 
                    Known for their warm texture, acoustic properties, and environmental friendliness, cork sheets <br/>
                    are ideal for wall coverings, pinboards, flooring underlays, craft projects, and interior decor. <br/>
                    They bring a soft, organic feel to modern spaces while offering excellent insulation.
                </p>
            </div>
                <style>{`
                /* Add to your CSS file */


@media (max-width: 768px) {
    .project-details__img{
    margin-top: -80px;
    }
    .project-details__information{
    margin-top: 120px !important;
    }
    .project-details__content{
    margin-top: -950px !important;
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
