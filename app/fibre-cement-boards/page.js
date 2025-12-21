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
    <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Fibre Cement Board">      
    
    {/*Project Details Start*/}
    <section className="project-details" style={{paddingBottom:'300px'}}>
        <div className="container">
            <div className="project-details__img">
                <img src="assets/images/hard/184.webp" alt="Fibre Cement Board"/>
                <div className="project-details__information">
                    <div className="project-details__information-minus"></div>
                    <h3 className="project-details__information-title">Technical Specifications</h3><br/>
                    <ul className="project-details__information-list list-unstyled">
                        <li>
                            <p><span>Material:</span> Cement + cellulose fiber composite</p>
                        </li>
                        <li>
                            <p><span>Thickness Options:</span> 4mm – 18mm</p>
                        </li>
                        <li>
                            <p><span>Standard Sizes:</span> 6×4 ft, 8×4 ft</p>
                        </li>
                        <li>
                            <p><span>Density:</span> Medium to high density (varies by grade)</p>
                        </li>
                        <li>
                            <p><span>Finish Options:</span> Smooth, textured, or primed</p>
                        </li>
                        <li>
                            <p><span>Fire Rating:</span> Non-combustible (A-class, brand dependent)</p>
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
                    Fibre Cement Board <br/> Strong, Durable & Versatile<br/> Building Material
                </h3>
                <p className="project-details__text">
                    Fibre Cement Board is a high-performance building sheet made from cement reinforced with <br/>cellulose fibers. 
                    Known for its strength, stability, and smooth finish, it is widely used in interior<br/> and exterior construction 
                    for walls, ceilings, partitions, and cladding. Fibre Cement Boards <br/>offer a solid, long-lasting alternative 
                    to traditional plywood and gypsum boards.
                </p>
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
    margin-top: -1000px !important;
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
