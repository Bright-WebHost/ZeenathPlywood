'use client'
import Layout from "@/components/layout/Layout"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import Project from "@/components/sections/home2/Project"
import Project2 from "@/components/sections/home2/Project2"
import Project3 from "@/components/sections/home2/Project3"

export default function Home() {

    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Natural Veneer">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'280px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/laminate/60.webp" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
    <p><span>Thickness:</span> 0.5mm to 1mm (varies by species)</p>
</li>
<li>
    <p><span>Sheet Size:</span> 8×4 ft standard, customizable</p>
</li>
<li>
    <p><span>Types:</span> Natural Veneer (from real wood logs), Reconstituted Veneer (eco-friendly, patterned veneer)</p>
</li>
<li>
    <p><span>Finish Options:</span> Matte, Glossy, PU, Oil, Stain, Lacquer</p>
</li>
<li>
    <p><span>Backing:</span> Paper-backed or fleece-backed for flexibility</p>
</li>



                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Natural Veneer<br/> Premium Real Wood Surface <br/>for Elegant Interiors</h3>
                    <p className="project-details__text">Natural Veneer is a thin slice of real wood, carefully crafted to bring the beauty, warmth, and <br/>
                    richness of natural timber to modern furniture and interior spaces. Known for its premium <br/>
                    aesthetic, unique grain patterns, and luxurious finish, natural veneer is widely used in high-end<br/>
                     residential and commercial projects.</p>
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
    // margin-top: 40px !important;
    }
    .project-details__content{
    margin-top: -970px !important;
    margin-bottom: 650px !important;
    }
}
                `}</style>
        </section>
        {/*Project Details End*/}
        {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} /> */}
<Project3 />
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