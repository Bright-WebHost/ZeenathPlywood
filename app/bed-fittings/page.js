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
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Bed Fittings">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'400px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/hard/104.webp" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
    <p><span>Material:</span> Mild steel, Stainless steel, Aluminum alloy</p>
</li>
<li>
    <p><span>Finish:</span> Galvanized, Powder-coated, Matte black</p>
</li>
<li>
    <p><span>Load Capacity:</span> 60–300+ kg (varies by mechanism)</p>
</li>
<li>
    <p><span>Mechanism Options:</span> Soft-close hydraulic lift, Heavy-duty lift-up, Manual brackets</p>
</li>
<li>
    <p><span>Sizes:</span> Standard & custom hardware sets</p>
</li>

                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Bed Fittings – Strong, <br/>Reliable & Smart Hardware for<br/> Modern Beds</h3>
                    <p className="project-details__text">Bed Fittings are high-quality hardware components designed to assemble, support, and<br/>
                     enhance the functionality of modern beds. Built for durability and stability, these fittings<br/>
                      ensure smooth operation, strong structural support, and long-term comfort in residential<br/>
                       and commercial furniture.</p>
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
    margin-top: -930px !important;
    margin-bottom: 550px !important;
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