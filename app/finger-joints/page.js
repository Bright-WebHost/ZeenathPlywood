'use client'
import Layout from "@/components/layout/Layout"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import Project from "@/components/sections/home2/Project"

export default function Home() {

    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Finger Joints">      
        {/*Project Details Start*/}
        <section className="project-details">
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/blog/28.webp" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
    <p><span>Wood Types:</span> Pine, Rubberwood, Teak, Hardwood, etc.</p>
</li>
<li>
    <p><span>Thickness:</span> 12mm, 18mm, 25mm, 30mm, 38mm</p>
</li>
<li>
    <p><span>Length:</span> Up to 8 ft (custom sizes available)</p>
</li>
<li>
    <p><span>Bonding:</span> PU, Melamine, or Waterproof Adhesive</p>
</li>
<li>
    <p><span>Moisture Content:</span> 6–12%</p>
</li>
<li>
    <p><span>Surface:</span> Sanded, smooth & finish-ready</p>
</li>

                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Finger Joint Boards<br/> <small>(Premium Engineered Wood Panels)</small></h3>
                    <p className="project-details__text">Finger Joint Boards (also known as FJ Boards / Finger Jointed Timber) are high-quality<br/> 
                    engineered wood panels made by joining small wooden pieces using interlocking “finger-<br/>
                    shaped” cuts. These joints are bonded with strong adhesive, creating a stable, durable, and <br/>
                    dimensionally consistent board ideal for furniture and interior applications.</p>
                    {/* <h3 className="project-details__title-2">Excellence in Construction Every Project</h3>
                    <p className="project-details__text-2">Aliquam eros justo, posuere loborti viverra laoreet matti
                        ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoree augue mattis
                        fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti
                        ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis,Aliquam eros justo, posuere
                        loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros.</p>
                    <p className="project-details__text-3">Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc
                        orper posu ere viverra .Aliquam eros justo, posuere lobo, vive rra laoreet augue mattis
                        fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet mat
                        ullamcorper posue viverra .Aliquam. </p>*/}
                </div>
            </div>
        </section>
        {/*Project Details End*/}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
<Project />
 <style>
{`
  @media (max-width: 768px) {
  .project-details__img{
  margin-top:-60px !important;
  }
    .project-details__content {
      margin-top: -970px !important;
      margin-bottom: 820px !important;
    }
  }
`}
</style>
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