'use client'
import Link from "next/link"

export default function Blog() {
    return (
        <>

    

        {/*Blog Five Start */}
        <section className="blog-five">
            <div className="container">
                <div className="blog-five__top">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Latest Blog</span>
                        </div>
                        <h2 className="section-title__title">Building Trust Structures<br/> that Stand the Test</h2>
                    </div>
                    <div className="blog-five__btn-box">
                        <Link href="blog" className="blog-five__btn thm-btn">More Blog<span
                                className="icon-dabble-arrow-right"></span></Link>
                    </div>
                </div>
                <div className="row">
                    {/*Blog Five Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="blog-five__single">
                            <div className="blog-five__img-box">
                                <div className="blog-five__img">
                                    <img src="assets/images/blog/blog-5-1.jpg" alt=""/>
                                </div>
                                <div className="blog-five__date">
                                    <p>30 May 2023</p>
                                </div>
                            </div>
                            <div className="blog-five__content">
                                <ul className="blog-five__meta list-unstyled">
                                    <li>
                                        <Link href="blog-details"><span className="icon-user"></span>By admin</Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details"><span className="icon-comments-2"></span>Comments
                                            (05)</Link>
                                    </li>
                                </ul>
                                <h3 className="blog-five__title"><Link href="blog-details">Construction is the process
                                        then Construction, Every</Link></h3>
                                <div className="blog-five__read-more">
                                    <Link href="blog-details">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Five Single End*/}
                    {/*Blog Five Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="blog-five__single">
                            <div className="blog-five__img-box">
                                <div className="blog-five__img">
                                    <img src="assets/images/blog/blog-5-2.jpg" alt=""/>
                                </div>
                                <div className="blog-five__date">
                                    <p>30 May 2023</p>
                                </div>
                            </div>
                            <div className="blog-five__content">
                                <ul className="blog-five__meta list-unstyled">
                                    <li>
                                        <Link href="blog-details"><span className="icon-user"></span>By admin</Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details"><span className="icon-comments-2"></span>Comments
                                            (05)</Link>
                                    </li>
                                </ul>
                                <h3 className="blog-five__title"><Link href="blog-details">The process of building the of
                                        a MasterCraft Construction</Link></h3>
                                <div className="blog-five__read-more">
                                    <Link href="blog-details">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Five Single End*/}
                    {/*Blog Five Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="blog-five__single">
                            <div className="blog-five__img-box">
                                <div className="blog-five__img">
                                    <img src="assets/images/blog/blog-5-3.jpg" alt=""/>
                                </div>
                                <div className="blog-five__date">
                                    <p>30 May 2023</p>
                                </div>
                            </div>
                            <div className="blog-five__content">
                                <ul className="blog-five__meta list-unstyled">
                                    <li>
                                        <Link href="blog-details"><span className="icon-user"></span>By admin</Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details"><span className="icon-comments-2"></span>Comments
                                            (05)</Link>
                                    </li>
                                </ul>
                                <h3 className="blog-five__title"><Link href="blog-details">It involves various activities
                                        the BuildTech Solutions</Link></h3>
                                <div className="blog-five__read-more">
                                    <Link href="blog-details">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Five Single End*/}
                </div>
            </div>
        </section>
        {/*Blog Five End */}
        </>
    )
}
