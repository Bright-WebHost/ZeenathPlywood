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
    <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="MDF Wave Board">      
    
    {/*Project Details Start*/}
    <section className="project-details" style={{paddingBottom:'250px'}}>
        <div className="container">
            <div className="project-details__img">
                <img src="assets/images/hard/145.webp" alt="MDF Wave Board"/>
                <div className="project-details__information">
                    <div className="project-details__information-minus"></div>
                    <h3 className="project-details__information-title">Technical Specifications</h3><br/>
                    <ul className="project-details__information-list list-unstyled">
                        <li>
                            <p><span>Material:</span> MDF (Medium Density Fibreboard)</p>
                        </li>
                        <li>
                            <p><span>Thickness:</span> 8mm – 18mm</p>
                        </li>
                        <li>
                            <p><span>Panel Size:</span> 8×4 ft (standard)</p>
                        </li>
                        <li>
                            <p><span>Texture Style:</span> 3D wave / ripple patterns</p>
                        </li>
                        <li>
                            <p><span>Finish Options:</span> Raw (paintable), PU-coated, laminate/veneer-coated</p>
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
                    MDF Wave Board <br/> Stylish, Textured <br/>& Modern 3D Wall Panels
                </h3>
                <p className="project-details__text">
                    MDF Wave Boards are 3D-designed panels crafted from premium Medium Density Fibreboard <br/>
                    with flowing wave-like textures. These boards create a smooth, modern, and dynamic 
                    visual <br/>effect, making them ideal for contemporary interior wall designs and decorative accents.
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

