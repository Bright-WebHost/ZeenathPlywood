'use client'
import Layout from "@/components/layout/Layout"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import Project from "@/components/sections/home2/Project"
import Project2 from "@/components/sections/home2/Project2"
import Project5 from "@/components/sections/home2/Project5"

export default function Home() {

    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Seamless Louver Panels">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'300px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/hard/133.webp" alt="Seamless Louver Panels"/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title"> Technical Specifications </h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
                                <p><span>Material:</span> WPC / PVC / MDF / HDHMR / Aluminum</p>
                            </li>
                            <li>
                                <p><span>Size:</span> 150–300 mm width, 8 ft length</p>
                            </li>
                            <li>
                                <p><span>Thickness:</span> 9–20 mm</p>
                            </li>
                            <li>
                                <p><span>Installation:</span> Click-fit / T&amp;G / Screw mount</p>
                            </li>
                            <li>
                                <p><span>Finishes:</span> Wood grain, matte, textured, PU</p>
                            </li>
                            <li>
                                <p><span>Typical Uses:</span> Homes, offices, hotels, commercial interiors</p>
                            </li>
                            <li>
                                <p><span>Feature:</span> Smooth, joint-free continuous louvered appearance</p>
                            </li>

                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Seamless Louver Panels <br/> Modern, Elegant &amp; Continuous <br/>Wall Paneling</h3>
                    <p className="project-details__text">
                        Seamless Louver Panels are stylish decorative wall panels crafted to create a smooth, joint-free<br/>
                         louvered look.
                        They deliver the warmth and texture of wood with clean vertical lines and a<br/> premium modern finish — ideal for
                        residential and commercial interiors including homes,<br/> offices, hotels, and showrooms. Available in multiple materials
                        and finishes, these panels <br/>offer flexible installation options and a refined, minimalist aesthetic.
                    </p>
                </div>
            </div>
            <style>{`
                /* Add to your CSS file */


@media (max-width: 768px) {
    .project-details__img{
    margin-top: -80px;
    }
    .project-details__information{
    margin-top: 140px !important;
    }
    .project-details__content{
    margin-top: -1140px !important;
    margin-bottom: 750px !important;
    }
}
                `}</style>
        </section>
        <Project5 />
        </Layout>
        </>
    )
}
