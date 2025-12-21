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
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Door & Window Fittings ">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'300px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/hard/107.webp" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
    <p><span>Material:</span> Stainless Steel, Brass, Aluminum, Zinc Alloy</p>
</li>
<li>
    <p><span>Finish:</span> Satin, Chrome, Black, Antique Brass, Gold, Matt</p>
</li>
<li>
    <p><span>Durability:</span> Rust-proof, Corrosion-resistant</p>
</li>
<li>
    <p><span>Mechanism:</span> Ball-bearing, Hydraulic, Friction-based (depending on fitting)</p>
</li>
<li>
    <p><span>Mounting:</span> Screw-based or Concealed</p>
</li>
<li>
    <p><span>Compatibility:</span> Wooden, UPVC, Aluminum, WPC, Metal frames</p>
</li>


                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Door & Window Fittings<br/> Strong, Stylish & Reliable <br/>Architectural Hardware</h3>
                    <p className="project-details__text">Door & Window Fittings are essential hardware components designed to ensure smooth <br/>
                    operation, secure locking, and long-lasting performance of doors and windows. Made from <br/>
                    high-quality materials like stainless steel, brass, aluminum, and zinc alloy, these fittings <br/>
                    combine functionality, durability, and modern design for residential, commercial, and <br/>
                    industrial applications.</p>
                </div>
            </div>
            <style>{`
                /* Add to your CSS file */


@media (max-width: 768px) {
    .project-details__img{
    margin-top: -80px;
    }
    .project-details__information{
    margin-top: 130px !important;
    }
    .project-details__content{
    margin-top: -1110px !important;
    margin-bottom: 750px !important;
    }
}
                `}</style>
        </section>
<Project4 />
        {/*CTA One Start*/}
        {/* <section className="cta-one">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__shape-1">
                        <img src="assets/images/backgrounds/27.png" alt=""/>
                    </div>
                    <div className="cta-one__img">
                        <img src="assets/images/resources/ply.png" alt=""/>
                    </div>
                    <h3 className="cta-one__title">Strong Products,<br/> Lasting Interior Solutions</h3>
                    <div className="cta-one__from-box">
                        <form className="cta-one__form">
                            <div className="cta-one__input-box">
                                <input type="email" placeholder="Your E-mail" name="email"/>
                            </div>
                            <button type="submit" className="cta-one__btn thm-btn">Subscribe Us</button>
                        </form>
                    </div>
                </div>
            </div>
        </section> */}
        {/*CTA One End*/}
        </Layout>
        </>
    )
}