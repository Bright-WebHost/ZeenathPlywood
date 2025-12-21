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
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="1.25mm Laminate">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'280px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/laminate/52.webp" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
    <p><span>Thickness:</span> 1.25 mm</p>
</li>
<li>
    <p><span>Size:</span> 8×4 ft (standard), custom sizes available</p>
</li>
<li>
    <p><span>Material:</span> Phenolic & melamine resin-based laminate</p>
</li>
<li>
    <p><span>Finish Options:</span> Matte, Glossy, Textured, Suede, High-Gloss</p>
</li>
<li>
    <p><span>Properties:</span> Scratch resistant, Heat & stain resistant, Moisture resistant, Anti-bacterial variants available</p>
</li>


                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">1.25 mm Laminate<br/> Premium, Durable & Stylish <br/>Surface Solution</h3>
                    <p className="project-details__text">1.25 mm Laminates are high-quality decorative laminates used to enhance the look and<br/>
                     durability of furniture and interior surfaces. Known for their strength, scratch resistance,<br/>
                      and long-lasting finish, these laminates are ideal for both residential and commercial<br/> applications.</p>
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
    margin-top: 40px !important;
    }
    .project-details__content{
    margin-top: -900px !important;
    margin-bottom: 650px !important;
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