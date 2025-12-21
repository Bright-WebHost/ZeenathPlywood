'use client'
import Layout from "@/components/layout/Layout"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import Project from "@/components/sections/home2/Project"

export default function Home() {

    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="PVC/WPC Frame">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'230px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/blog/26.webp" alt=""/>
                    <div className="project-details__information" id="project-pvc">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
    <p><span>Material:</span> Pure PVC</p>
</li>
<li>
    <p><span>Waterproof:</span> 100%</p>
</li>
<li>
    <p><span>Termite Resistance:</span> Excellent</p>
</li>
<li>
    <p><span>Density:</span> Low–Medium</p>
</li>
<li>
    <p><span>Screw Holding Strength:</span> Moderate</p>
</li>
<li>
    <p><span>Thickness Options:</span> 45mm, 50mm, 75mm</p>
</li>
<li>
    <p><span>Finish:</span> Smooth / Laminated</p>
</li>

                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">PVC / WPC Door Frames</h3>
                    <p className="project-details__text">PVC (Polyvinyl Chloride) and WPC (Wood Polymer Composite) Door Frames are modern,<br/>
                     durable, and maintenance-free alternatives to traditional wooden door frames. Designed to<br/> 
                     withstand moisture, termites, and weather changes, these frames ensure long-lasting <br/>
                     performance in both residential and commercial spaces.</p>
                    
                    {/* <p className="project-details__text-2">Aliquam eros justo, posuere loborti viverra laoreet matti
                        ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoree augue mattis
                        fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti
                        ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis,Aliquam eros justo, posuere
                        loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros.</p>
                    <p className="project-details__text-3">Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc
                        orper posu ere viverra .Aliquam eros justo, posuere lobo, vive rra laoreet augue mattis
                        fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet mat
                        ullamcorper posue viverra .Aliquam. </p> */}
                    <div className="project-details__bottom">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="project-details__bottom-left">
                                    <h3 className="project-details__title-2">Technical Specifications of WPC Frame</h3>
                                    <ul className="project-details__bottom-points list-unstyled">
                                        <li>
    <p>✔<span style={{color:'#06A6A1', fontWeight:'600'}}>Material:</span> Wood Fiber + PVC Polymer</p>
</li>
<li>
    <p>✔ <span style={{color:'#06A6A1', fontWeight:'600'}}>Waterproof:</span> 100%</p>
</li>
<li>
    <p>✔<span style={{color:'#06A6A1', fontWeight:'600'}}>Termite Resistance:</span> Excellent</p>
</li>
<li>
    <p>✔<span style={{color:'#06A6A1', fontWeight:'600'}}>Density:</span> High</p>
</li>
<li>
    <p>✔<span style={{color:'#06A6A1', fontWeight:'600'}}>Screw Holding Strength:</span> Strong</p>
</li>
<li>
    <p>✔<span style={{color:'#06A6A1', fontWeight:'600'}}>Thickness Options:</span> 50mm, 70mm, 90mm</p>
</li>
<li>
    <p>✔<span style={{color:'#06A6A1', fontWeight:'600'}}>Finish:</span> Wooden finish / Matte</p>
</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
            @media(max-width:768px){
            .project-details__img{
            margin-top:-60px;
            }
            .project-details__content{
            margin-top:-900px !important;
            margin-bottom: -10px;
            }
            .project-details__bottom{
            margin-top:690px;
            }
            }
            `}</style>
        </section>
        {/*Project Details End*/}
        {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} /> */}

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