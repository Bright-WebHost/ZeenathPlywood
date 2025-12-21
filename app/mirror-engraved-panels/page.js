'use client'
import Layout from "@/components/layout/Layout"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import Project2 from "@/components/sections/home2/Project2"
import Project5 from "@/components/sections/home2/Project5"

export default function Home() {
    const [isOpen, setOpen] = useState(false)
return (
    <>
    <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Mirror Engraved Panels">      
    
    {/*Project Details Start*/}
    <section className="project-details" style={{paddingBottom:'300px'}}>
        <div className="container">
            <div className="project-details__img">
                <img src="assets/images/hard/137.webp" alt="Mirror Engraved Panels"/>
                <div className="project-details__information">
                    <div className="project-details__information-minus"></div>
                    <h3 className="project-details__information-title">Technical Specifications</h3><br/>
                    <ul className="project-details__information-list list-unstyled">
                        <li>
                            <p><span>Material:</span> Mirror glass / acrylic mirror</p>
                        </li>
                        <li>
                            <p><span>Thickness:</span> 3–6 mm</p>
                        </li>
                        <li>
                            <p><span>Sizes:</span> 12×24 in, 24×48 in, 8×4 ft (custom available)</p>
                        </li>
                        <li>
                            <p><span>Engraving:</span> Laser, CNC, acid-etched</p>
                        </li>
                        <li>
                            <p><span>Finishes:</span> Silver, gold, rose gold, smoked grey, bronze</p>
                        </li>
                        <li>
                            <p><span>Designs:</span> Geometric, floral, abstract, custom, 3D engraved</p>
                        </li>
                        <li>
                            <p>
                              <span>Rating:</span>
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="project-details__content">
                <h3 className="project-details__title">
                    Mirror Engraved Panels <br/> Luxurious, Reflective &<br/> Artistic Wall Décor
                </h3>
                <p className="project-details__text">
                    Mirror Engraved Panels are premium decorative panels crafted from high-quality mirror glass<br/> or acrylic mirror. 
                    With laser or CNC-engraved patterns, they add luxury, depth, and artistic <br/>elegance—perfect for homes, hotels, 
                    boutiques, restaurants, and premium commercial interiors.
                </p>
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
    margin-top: -910px !important;
    margin-bottom: 610px !important;
    }
}
                `}</style>
        </div>
    </section>

    <Project5 />

    </Layout>
    </>
)
}