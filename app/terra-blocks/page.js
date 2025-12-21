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
    <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Terra Blocks">      
    
    {/*Project Details Start*/}
    <section className="project-details" style={{paddingBottom:'250px'}}>
        <div className="container">
            <div className="project-details__img">
                <img src="assets/images/hard/185.webp" alt="Terra Blocks"/>
                <div className="project-details__information">
                    <div className="project-details__information-minus"></div>
                    <h3 className="project-details__information-title">Technical Specifications</h3><br/>
                    <ul className="project-details__information-list list-unstyled">
                        <li>
                            <p><span>Material:</span> Clay / Terracotta-based composite</p>
                        </li>
                        <li>
                            <p><span>Thickness:</span> 10mm – 25mm</p>
                        </li>
                        <li>
                            <p><span>Block Size:</span> 6×6 inch, 12×12 inch, 12×24 inch (varies by design)</p>
                        </li>
                        <li>
                            <p><span>Finish Options:</span> Natural terracotta, matte, textured</p>
                        </li>
                        <li>
                            <p><span>Color Variants:</span> Earthy red, brown, beige, charcoal tones</p>
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
                    Terra Blocks <br/> Natural, Textured & Elegant<br/> Decorative Wall Panels
                </h3>
                <p className="project-details__text">
                    Terra Blocks are decorative wall cladding panels inspired by natural clay and earthy textures.<br/> 
                    Designed to bring a warm, rustic, and contemporary feel to interiors, Terra Blocks offer a stylish <br/>
                    surface finish that enhances living rooms, commercial walls, and architectural spaces with<br/> natural 
                    charm and depth.
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
