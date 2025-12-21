'use client'
import Layout from "@/components/layout/Layout"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import Project from "@/components/sections/home2/Project"

export default function Home() {

    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Chequered & Truck Flooring">      
        {/*Project Details Start*/}
        <section className="project-details">
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/blog/22.webp" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
    <p><span>Surface:</span> Chequered anti-skid pattern</p>
</li>
<li>
    <p><span>Bonding:</span> Phenol Formaldehyde (PF) Resin – BWP Grade</p>
</li>
<li>
    <p><span>Core:</span> High-density hardwood</p>
</li>
<li>
    <p><span>Thickness:</span> 12mm, 16mm, 18mm, 21mm & 25mm</p>
</li>
<li>
    <p><span>Density:</span> 900+ kg/m³ (approx., varies by manufacturer)</p>
</li>
<li>
    <p><span>Moisture Resistance:</span> Excellent (suitable for outdoor use)</p>
</li>
<li>
    <p><span>Features:</span> High wear resistance, Anti-skid embossed surface, Impact & load resistant</p>
</li>

                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Chequered & Truck Flooring <br/>Plywood<br/><small>Heavy-Duty Industrial Grade</small> </h3>
                    <p className="project-details__text">Chequered & Truck Flooring Plywood is a high-strength, anti-slip plywood designed specifically<br/>
                     for heavy-duty floors in commercial, industrial, and transportation applications. Manufactured <br/>
                     using premium hardwood and bonded with high-grade Phenol Formaldehyde (PF) resin, this<br/>
                      plywood delivers outstanding performance under continuous load, abrasion, and outdoor<br/> weather conditions.</p>
                    {/* <h3 className="project-details__title-2">Excellence in Construction Every Project</h3>
                    <p className="project-details__text-2">Aliquam eros justo, posuere loborti viverra laoreet matti
                        ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoree augue mattis
                        fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti
                        ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis,Aliquam eros justo, posuere
                        loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros.</p>
                    <p className="project-details__text-3">Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc
                        orper posu ere viverra .Aliquam eros justo, posuere lobo, vive rra laoreet augue mattis
                        fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet mat
                        ullamcorper posue viverra .Aliquam. </p>
                    <div className="project-details__bottom">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="project-details__bottom-left">
                                    <ul className="project-details__bottom-points list-unstyled">
                                        <li>
                                            <div className="project-details__points-bullet"></div>
                                            <p>We are starting some laoreet matti ullamcorper mat ulla posue viverra</p>
                                        </li>
                                        <li>
                                            <div className="project-details__points-bullet"></div>
                                            <p>Starting some laoreetmat ullamcorper posue viverra .Aliquam eros</p>
                                        </li>
                                        <li>
                                            <div className="project-details__points-bullet"></div>
                                            <p>Here is the biggest loborti vivea laoreet matti statemat ullamcorper
                                                posue </p>
                                        </li>
                                        <li>
                                            <div className="project-details__points-bullet"></div>
                                            <p>Aliquam eros justo, posuere loborti robart that </p>
                                        </li>
                                    </ul>
                                    <div className="project-details__client-box">
                                        <div className="project-details__client-img">
                                            <img src="assets/images/project/project-details-client-img.jpg" alt=""/>
                                        </div>
                                        <div className="project-details__client-content">
                                            <h3>Stanio lainto</h3>
                                            <p>justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra
                                                liquam eros justo, posuere lobortis non, viverra laoreet augue mattis.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="project-details__bottom-right">
                                    <div className="project-details__bottom-img">
                                        <img src="assets/images/project/project-details-bottom-img.jpg" alt=""/>
                                        <div className="project-details__video-link">
                                            <a onClick={() => setOpen(true)} className="video-popup">
                                                <div className="project-details__video-icon">
                                                    <span className="icon-play"></span>
                                                    <i className="ripple"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        <style>{`@media (max-width: 768px) {
    .project-details__img{
    margin-top:-50px;
    }
    .project-details__content{
    margin-top:-1140px !important;
    margin-bottom: 900px;
    }
    .project-details__information{
    margin-top:150px !important
    }
}`}</style>
        {/*Project Details End*/}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
<Project />

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