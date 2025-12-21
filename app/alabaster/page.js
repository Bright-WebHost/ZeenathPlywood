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
    <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Alabaster">      
    
    {/*Project Details Start*/}
    <section className="project-details" style={{paddingBottom:'250px'}}>
        <div className="container">
            <div className="project-details__img">
                <img src="assets/images/hard/140.webp" alt="Alabaster"/>
                <div className="project-details__information">
                    <div className="project-details__information-minus"></div>
                    <h3 className="project-details__information-title">Technical Specifications</h3><br/>
                    <ul className="project-details__information-list list-unstyled">
                        <li>
                            <p><span>Material:</span> Polyresin / Artificial alabaster</p>
                        </li>
                        <li>
                            <p><span>Thickness:</span> 4mm – 12mm</p>
                        </li>
                        <li>
                            <p><span>Sheet Size:</span> 8×4 ft (standard), custom sizes available</p>
                        </li>
                        <li>
                            <p><span>Finish:</span> Translucent marble and onyx patterns</p>
                        </li>
                        <li>
                            <p><span>Light Transmission:</span> Suitable for LED backlighting</p>
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
                    Alabaster – Elegant,<br/> Translucent & Premium <br/>Decorative Panels
                </h3>
                <p className="project-details__text">
                    Alabaster Panels are luxurious, semi-translucent decorative sheets that beautifully mimic the<br/> look of natural stone. 
                    When backlit, they create a soft, glowing effect, making them perfect for<br/> premium interiors such as hotels, 
                    restaurants, living rooms, pooja units, bars, and feature walls.<br/> Their smooth texture and elegant patterns 
                    add a high-end, sophisticated look to any space.
                </p>
            </div>
                <style>{`
                /* Add to your CSS file */


@media (max-width: 768px) {
    .project-details__img{
    margin-top: -80px;
    }
    .project-details__information{
    margin-top:140px !important;
    }
    .project-details__content{
    margin-top: -940px !important;
    margin-bottom: 650px !important;
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