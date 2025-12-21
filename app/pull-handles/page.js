'use client'
import Layout from "@/components/layout/Layout"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import Project from "@/components/sections/home2/Project"
import Project2 from "@/components/sections/home2/Project2"
import Project4 from "@/components/sections/home2/Project4"

export default function Home() {

    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Pull Handles ">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'300px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/hard/113.webp" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
    <p><span>Material:</span> SS304 / SS316 / Brass / Aluminium / Zinc Alloy</p>
</li>
<li>
    <p><span>Length Options:</span> 300mm, 450mm, 600mm, 900mm, 1200mm & custom</p>
</li>
<li>
    <p><span>Finish Options:</span> Satin Steel, Chrome, Matte Black, Gold / Rose Gold (PVD coated), Antique Brass, Custom textured finishes</p>
</li>
<li>
    <p><span>Mounting:</span> Back-to-back / Single-side fixed</p>
</li>
<li>
    <p><span>Suitable Door Types:</span> Wood, Glass, Metal, Aluminium, UPVC</p>
</li>

                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Pull Handles – Strong,<br/> Stylish & Ergonomic Door <br/>Handle Solutions</h3>
                    <p className="project-details__text">Pull Handles are durable and elegant hardware fittings designed to provide a firm grip for<br/>
                     opening and closing doors. Available in a wide range of designs, materials, and finishes,<br/>
                      pull handles are ideal for main doors, glass doors, sliding doors, and commercial entrances.</p>
                </div>
            </div>
            <style>{`
                /* Add to your CSS file */


@media (max-width: 768px) {
    .project-details__img{
    margin-top: -80px;
    }
    .project-details__information{
    margin-top: 30px !important;
    }
    .project-details__content{
    margin-top: -940px !important;
    margin-bottom: 650px !important;
    }
}
                `}</style>
        </section>
        <Project4 />
        </Layout>
        </>
    )
}