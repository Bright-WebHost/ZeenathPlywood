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
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Sliding and Folding System">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'400px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/hard/97.webp" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
    <p><span>Material:</span> Stainless steel, aluminum alloy, metal rollers</p>
</li>
<li>
    <p><span>Track Type:</span> Top-hung / Bottom-rolling</p>
</li>
<li>
    <p><span>Panel Support:</span> 2–8 panels</p>
</li>
<li>
    <p><span>Load Capacity:</span> 30 kg – 150 kg per panel (depending on system)</p>
</li>
<li>
    <p><span>Roller Type:</span> Ball-bearing, Nylon coated, Heavy-duty</p>
</li>
<li>
    <p><span>Finish Options:</span> Matte steel, Chrome, Black, Brushed aluminum</p>
</li>
<li>
    <p><span>Features:</span> Soft-close (optional), Anti-jump mechanism, Smooth-glide rollers, Adjustable hinges</p>
</li>



                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Sliding–Folding System<br/> Smooth, Space-Saving &<br/>Modern Door Solution</h3>
                    <p className="project-details__text">A Sliding–Folding System, also known as Fold & Slide Hardware, is a premium mechanism <br/>
                    designed for doors and partitions that fold and slide smoothly along a track. This system is<br/>
                     ideal for maximizing space, enhancing accessibility, and achieving a clean, modern look in <br/>
                     residential and commercial interiors.</p>
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
    margin-top: -1140px !important;
    margin-bottom: 700px !important;
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