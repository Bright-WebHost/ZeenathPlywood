'use client'
import Layout from "@/components/layout/Layout"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import Project from "@/components/sections/home2/Project"
import Project2 from "@/components/sections/home2/Project2"

export default function Home() {

    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Hylam Sheet">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'400px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/laminate/56.webp" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
    <p><span>Material:</span> Phenolic resin + kraft paper</p>
</li>
<li>
    <p><span>Thickness:</span> 1mm – 50mm</p>
</li>
<li>
    <p><span>Standard Size:</span> 8×4 ft (varies by manufacturer)</p>
</li>
<li>
    <p><span>Color:</span> Brown, black (standard), custom options available</p>
</li>
<li>
    <p><span>Electrical Properties:</span> High dielectric strength, Excellent insulation</p>
</li>
<li>
    <p><span>Mechanical Properties:</span> High load-bearing capacity, Impact & abrasion resistant</p>
</li>
<li>
    <p><span>Temperature Resistance:</span> Withstands high heat</p>
</li>
<li>
    <p><span>Chemical Resistance:</span> Excellent</p>
</li>


                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Hylam Sheet<br/> High-Strength, Heat-Resistant <br/>Industrial Laminate</h3>
                    <p className="project-details__text">Hylam Sheets (also known as Phenolic Laminated Sheets or Bakelite Hylam Sheets) are <br/>
                    high-pressure decorative and industrial laminates manufactured from kraft paper and<br/>
                     phenolic resin. They are known for their excellent mechanical strength, electrical insulation<br/>
                      properties, heat resistance, and durability, making them ideal for electrical, industrial, and <br/>
                      engineering applications.</p>
                    {/* <p className="project-details__text-2">Aliquam eros justo, posuere loborti viverra laoreet matti
                        ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoree augue mattis
                        fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti
                        ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis,Aliquam eros justo, posuere
                        loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros.</p>
                    <p className="project-details__text-3">Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc
                        orper posu ere viverra .Aliquam eros justo, posuere lobo, vive rra laoreet augue mattis
                        fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet mat
                        ullamcorper posue viverra .Aliquam. </p> */}
                </div>
            </div>
            <style>{`
                /* Add to your CSS file */


@media (max-width: 768px) {
    .project-details__img{
    margin-top: -80px;
    }
    .project-details__information{
    margin-top: 110px !important;
    }
    .project-details__content{
    margin-top: -1200px !important;
    margin-bottom: 730px !important;
    }
}
                `}</style>
        </section>
        {/*Project Details End*/}
        {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} /> */}
<Project2 />
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