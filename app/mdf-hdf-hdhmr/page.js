'use client'
import Layout from "@/components/layout/Layout"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import Project from "@/components/sections/home2/Project"

export default function Home() {

    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="MDF/HDF/HDHMR">      
        {/*Project Details Start*/}
        <section className="project-details">
            <div className="container">
                <div className="project-details__img" >
                    <img src="assets/images/blog/25.webp" alt=""/>
                    <div className="project-details__information" id="project-details-info">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">MDF Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
    <p><span>Density:</span> Medium</p>
</li>
<li>
    <p><span>Strength:</span> Moderate</p>
</li>
<li>
    <p><span>Moisture Resistance:</span> Low</p>
</li>
<li>
    <p><span>Machinability:</span> Excellent</p>
</li>
<li>
    <p><span>Ideal For:</span> CNC, décor, interior furniture</p>
</li>


                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">MDF / HDF / HDHMR – <br/><small>Premium Engineered Wood Solutions</small></h3>
                    <p className="project-details__text">Engineered wood panels like MDF, HDF, and HDHMR are widely used in modern furniture, <br/>
                    modular kitchens, wardrobes, and interior décor. Each of these boards offers unique advantages <br/>in terms of density, durability, workability, and moisture resistance.</p>
                    
                    {/* <p className="project-details__text-2">Aliquam eros justo, posuere loborti viverra laoreet matti
                        ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoree augue mattis
                        fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti
                        ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis,Aliquam eros justo, posuere
                        loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros.</p>
                    <p className="project-details__text-3">Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc
                        orper posu ere viverra .Aliquam eros justo, posuere lobo, vive rra laoreet augue mattis
                        fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet mat
                        ullamcorper posue viverra .Aliquam. </p> */}
                    <div className="project-details__bottom" id="project-hdf">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="project-details__bottom-left">
                                    <h3 className="project-details__title-2" id="title-2">HDF Specifications</h3>
                                    <ul className="project-details__bottom-points list-unstyled">
                                       <li>
    <p>✔<span style={{color:'#06A6A1', fontWeight:'600'}}>Density:</span> High</p>
</li>
<li>
    <p>✔<span style={{color:'#06A6A1', fontWeight:'600'}}>Strength:</span> High</p>
</li>
<li>
    <p>✔<span style={{color:'#06A6A1', fontWeight:'600'}}> Moisture Resistance:</span> Moderate</p>
</li>
<li>
    <p>✔<span style={{color:'#06A6A1', fontWeight:'600'}}>Machinability:</span> Excellent</p>
</li>
<li>
    <p>✔<span style={{color:'#06A6A1', fontWeight:'600'}}>Ideal For:</span> Durable furniture, flooring</p>
</li>

                                    </ul>
                                    {/* <div className="project-details__client-box">
                                        <div className="project-details__client-img">
                                            <img src="assets/images/project/project-details-client-img.jpg" alt=""/>
                                        </div>
                                        <div className="project-details__client-content">
                                            <h3>Stanio lainto</h3>
                                            <p>justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra
                                                liquam eros justo, posuere lobortis non, viverra laoreet augue mattis.
                                            </p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="project-details__bottom-right" id="project-hdhmr">
                                    <div className="project-details__information" style={{marginTop:'-400px'}}>
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">HDHMR Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
    <p><span>Density:</span> Higher</p>
</li>
<li>
    <p><span>Strength:</span> Very High</p>
</li>
<li>
    <p><span>Moisture Resistance:</span> High</p>
</li>
<li>
    <p><span>Machinability:</span> Good</p>
</li>
<li>
    <p><span>Ideal For:</span> Kitchens, bathrooms, heavy-duty use</p>
</li>

                        </ul>
                    </div>
                    <style>{`
                    @media(max-width:768px){
                    .project-details__img{
                    margin-top: -80px;
                    }
                    .project-details__content{
                    margin-top:-780px !important;
                    margin-bottom:250px !important;
                    }
                    #project-details-info{
                    // margin-top:-120px !important;
                    }
                    #project-hdf{
                    margin-top: 540px !important;
                    }
                    #project-hdhmr{
                    margin-top: -400px !important;
                    }
                    }
                    `}</style>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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