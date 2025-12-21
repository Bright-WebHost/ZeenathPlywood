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
    <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Wainscoting">      
    
    {/*Project Details Start*/}
    <section className="project-details" style={{paddingBottom:'300px'}}>
        <div className="container">
            <div className="project-details__img">
                <img src="assets/images/hard/138.webp" alt="Wainscoting"/>
                <div className="project-details__information">
                    <div className="project-details__information-minus"></div>
                    <h3 className="project-details__information-title">Technical Specifications</h3><br/>
                    <ul className="project-details__information-list list-unstyled">
                        <li>
                            <p><span>Material Options:</span> MDF / PVC / WPC / Wood</p>
                        </li>
                        <li>
                            <p><span>Panel Height:</span> 3 ft – 4 ft standard</p>
                        </li>
                        <li>
                            <p><span>Thickness:</span> 10mm – 18mm</p>
                        </li>
                        <li>
                            <p><span>Finish Options:</span> Paintable, Wood grain, Matte, Textured</p>
                        </li>
                        <li>
                            <p><span>Installation:</span> Adhesive or screw-mounted</p>
                        </li>
                        <li>
                            <p><span>Features:</span> Durable, moisture-resistant (PVC/WPC), easy to clean</p>
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
                    Wainscoting – Stylish,<br/> Protective & Classic<br/> Wall Paneling
                </h3>
                <p className="project-details__text">
                    Wainscoting is a decorative wall paneling system installed on the lower half of interior walls<br/> to add elegance, 
                    texture, and protection. It enhances the room's visual appeal while keeping<br/>  walls safe from scratches, marks, 
                    and daily wear. Ideal for homes, hotels, offices, hallways,<br/> and dining areas, wainscoting brings a timeless, 
                    premium look to any space.
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
    margin-top: -1000px !important;
    margin-bottom: 670px !important;
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