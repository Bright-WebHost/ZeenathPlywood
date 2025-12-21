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
    <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Clayneer">      
    
    {/*Project Details Start*/}
    <section className="project-details" style={{paddingBottom:'300px'}}>
        <div className="container">
            <div className="project-details__img">
                <img src="assets/images/hard/142.webp" alt="Clayneer"/>
                <div className="project-details__information">
                    <div className="project-details__information-minus"></div>
                    <h3 className="project-details__information-title">Technical Specifications</h3><br/>
                    <ul className="project-details__information-list list-unstyled">
                        <li>
                            <p><span>Material:</span> Natural clay veneer</p>
                        </li>
                        <li>
                            <p><span>Thickness:</span> 2mm – 4mm</p>
                        </li>
                        <li>
                            <p><span>Sheet Size:</span> 2×4 ft, 2×8 ft (varies by manufacturer)</p>
                        </li>
                        <li>
                            <p><span>Finish Options:</span> Raw clay, textured, matte</p>
                        </li>
                        <li>
                            <p><span>Color Variants:</span> Terracotta, beige, brown, charcoal, rustic shades</p>
                        </li>
                        <li>
                            <p><span>Installation:</span> Adhesive-mounted</p>
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
                    Clayneer – Natural,<br/> Lightweight & Premium<br/> Clay Veneer Panels
                </h3>
                <p className="project-details__text">
                    Clayneer panels are ultra-thin clay veneer sheets crafted from natural clay and minerals, <br/>
                    designed to bring the raw beauty of earthy textures into modern interiors. Their lightweight, <br/>
                    flexible structure makes them ideal for creating warm, rustic, and contemporary wall finishes <br/>
                    in homes and commercial spaces.
                </p>
            </div>
                    <style>{`
                /* Add to your CSS file */


@media (max-width: 768px) {
    .project-details__img{
    margin-top: -80px;
    }
    .project-details__information{
    margin-top: 100px !important;
    }
    .project-details__content{
    margin-top: -940px !important;
    margin-bottom: 630px !important;
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
