'use client'
import Layout from "@/components/layout/Layout"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import Pricing from "@/components/sections/home2/Pricing"
import Project from "@/components/sections/home2/Project"

export default function Home() {

    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="MR Grade">      
        {/*Project Details Start*/}
        <section className="project-details">
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/blog/1.png" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
                                <p><span>Standard:</span>IS 303 Certified</p>
                            </li>
                            <li>
                                <p><span>Glue Type:</span>Urea Formaldehyde (UF)</p>
                            </li>
                            <li>
                                <p><span>Thickness: </span>4, 6, 9, 12, 16, 18, 25mm</p>
                            </li>
                            <li>
                                <p><span>Core Materia:</span>Hardwood / Poplar / Mixed Core</p>
                            </li>
                            <li>
                                <p><span>Density:</span>Approx. 550–700 kg/m³</p>
                            </li>
                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                 <style>{`@media (max-width: 768px) {
  .project-details__information {
    margin-top: 90px !important;
    margin-bottom: 180px !important;
  }
    .project-details__img{
    margin-top:-40px;
    }
}`}</style>
                <div className="project-details__content">
                    <h3 className="project-details__title">MR Grade Plywood <br/><small>Moisture Resistant Plywood for Interior</small></h3>
                    <p className="project-details__text">MR Grade Plywood, also known as Commercial Plywood, is a popular choice for interior <br/>
                    furniture and woodworking projects. Designed to handle humidity and occasional moisture,<br/>
                     this plywood offers excellent durability, smooth finishing, and strong bonding — all at an <br/>
                     affordable price. If you're looking for reliable plywood for home or office interiors, MR Grade is<br/>
                      one of the best options available.</p>
                    {/* <h3 className="project-details__title-2">What Is MR Grade Plywood?</h3>
                    <p className="project-details__text-2">MR stands for Moisture Resistant. This plywood is manufactured using premium-quality <br/>
                    hardwood or mixed wood veneers, bonded with Urea Formaldehyde resin, giving it superior<br/> strength and resistance to humidity.</p>
                    <p className="project-details__text-3">It is widely preferred for interior carpentry, especially in areas where water contact is minimal<br/> but humidity is present. </p>
                    <div className="project-details__bottom">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="project-details__bottom-left">
                                    <h3>Key Features of MR Grade Plywood</h3><br/>
                                    <ul className="project-details__bottom-points list-unstyled">
                                        <li>
                                            <div className="project-details__points-bullet"></div>
                                            <p>Moisture Resistant – Ideal for interiors with moderate humidity</p>
                                        </li>
                                        <li>
                                            <div className="project-details__points-bullet"></div>
                                            <p>High Durability – Strong core for long-lasting performance</p>
                                        </li>
                                        <li>
                                            <div className="project-details__points-bullet"></div>
                                            <p> Smooth Surface – Suitable for laminates, veneers, and paint finishes</p>
                                        </li>
                                        <li>
                                            <div className="project-details__points-bullet"></div>
                                            <p> Termite & Borer Resistant (when chemically treated)</p>
                                        </li>
                                        <li>
                                            <div className="project-details__points-bullet"></div>
                                            <p>Easy to Cut & Shape – Perfect for all types of woodwork</p>
                                        </li>
                                        <li>
                                            <div className="project-details__points-bullet"></div>
                                            <p>Affordable – Best budget-friendly plywood option for interiors</p>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        {/*Project Details End*/}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
<Project />

        {/*CTA One Start*/}
        <section className="cta-one">
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
        </section>
        {/*CTA One End*/}
        </Layout>
        </>
    )
}