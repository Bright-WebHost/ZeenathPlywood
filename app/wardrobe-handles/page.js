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
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Wardrobe Handles">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'250px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/hard/103.webp" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                           <li>
    <p><span>Material:</span> SS, Zinc Alloy, Brass, Aluminum, Ceramic, Acrylic</p>
</li>
<li>
    <p><span>Center-to-Center Sizes:</span> 96mm, 128mm, 160mm, 224mm, 288mm & custom</p>
</li>
<li>
    <p><span>Finish:</span> Matte, Glossy, Brushed, Textured, Antique</p>
</li>
<li>
    <p><span>Installation:</span> Screw-mounted</p>
</li>
<li>
    <p><span>Durability:</span> Rust-proof and long-lasting</p>
</li>


                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Wardrobe Handles<br/> Stylish, Durable & Comfortable <br/>Furniture Hardware</h3>
                    <p className="project-details__text">Wardrobe Handles are essential hardware fittings designed for smooth opening and closing of<br/>
                     wardrobe shutters while adding style and elegance to your interior décor. Available in modern,<br/>
                      classic, and premium designs, these handles elevate the overall look of bedrooms, dressing<br/>
                       areas, and walk-in wardrobes.</p>
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
    margin-top: -900px !important;
    margin-bottom: 650px !important;
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