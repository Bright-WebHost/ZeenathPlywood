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
    <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Artificial Gardening">      
    
    {/*Project Details Start*/}
    <section className="project-details" style={{paddingBottom:'300px'}}>
        <div className="container">
            <div className="project-details__img">
                <img src="assets/images/hard/146.webp" alt="Artificial Gardening"/>
                <div className="project-details__information">
                    <div className="project-details__information-minus"></div>
                    <h3 className="project-details__information-title">Technical Specifications</h3><br/>
                    <ul className="project-details__information-list list-unstyled">
                        <li>
                            <p><span>Material:</span> High-quality PVC / PE / Silk fiber</p>
                        </li>
                        <li>
                            <p><span>Product Types:</span> Artificial grass, plants, creepers, vertical garden panels</p>
                        </li>
                        <li>
                            <p><span>Grass Thickness:</span> 25mm – 50mm (varies by model)</p>
                        </li>
                        <li>
                            <p><span>Panel Size (Vertical Garden):</span> 1×1 ft / 2×2 ft sheets</p>
                        </li>
                        <li>
                            <p><span>Color Tones:</span> Natural green, dark green, mixed green shades</p>
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
                    Artificial Gardening <br/> Evergreen, Low-Maintenance<br/> & Stylish Green Decor
                </h3>
                <p className="project-details__text">
                    Artificial Gardening products are realistic, long-lasting decorative greens designed to recreate <br/>
                    the beauty of natural plants without the need for watering or maintenance. They bring freshness, <br/>
                    color, and aesthetic appeal to homes, offices, balconies, and commercial spaces with lifelike <br/>
                    textures and vibrant detailing.
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
