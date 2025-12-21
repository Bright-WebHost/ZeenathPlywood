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
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Door Hooks  ">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'300px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/hard/117.webp" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                           <li>
    <p><span>Material:</span> SS, Brass, Zinc Alloy, Aluminum</p>
</li>
<li>
    <p><span>Finish Options:</span> Satin Steel, Chrome, Matte Black, Gold / Rose Gold (PVD), Antique Brass</p>
</li>
<li>
    <p><span>Mounting:</span> Screw-mounted / Adhesive / Over-the-door</p>
</li>
<li>
    <p><span>Load Capacity:</span> 3–15 kg depending on model</p>
</li>
<li>
    <p><span>Shape:</span> Round, Angular, Designer styles</p>
</li>



                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Door Hooks – Convenient,<br/> Stylish & Durable Hanging <br/> Solutions</h3>
                    <p className="project-details__text">Door Hooks are practical and stylish hardware accessories designed for hanging clothes, bags,<br/>
                     towels, keys, and daily essentials on doors or walls. Available in various styles and materials,<br/>
                      door hooks add convenience and organization to homes, offices, and commercial spaces.</p>
                </div>
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
        </section>
        <Project4 />
        </Layout>
        </>
    )
}