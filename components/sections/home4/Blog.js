'use client'
import Link from "next/link"

export default function Blog() {
    return (
        <>

    

        {/*Blog Four Start */}
        <section className="blog-four">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Latests Blog</span>
                    </div>
                    <h2 className="section-title__title">Construction excellence<br/> the delivered</h2>
                </div>
                <div className="row">
                    {/*Blog Four Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="blog-four__single">
                            <div className="blog-four__img-box">
                                <div className="blog-four__img">
                                    <img src="assets/images/blog/blog-4-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-four__content">
                                <ul className="blog-four__meta list-unstyled">
                                    <li>
                                        <Link href="blog-details"><span className="icon-calender"></span>By admin</Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details"><span className="icon-comments-2"></span>October 19,
                                            2022</Link>
                                    </li>
                                </ul>
                                <h3 className="blog-four__title"><Link href="blog-details">Construction is the process of
                                        creating or assembling </Link></h3>
                                <div className="blog-four__read-more">
                                    <Link href="blog-details">Read more<span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Four Single End*/}
                    {/*Blog Four Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="blog-four__single">
                            <div className="blog-four__img-box">
                                <div className="blog-four__img">
                                    <img src="assets/images/blog/blog-4-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-four__content">
                                <ul className="blog-four__meta list-unstyled">
                                    <li>
                                        <Link href="blog-details"><span className="icon-calender"></span>By admin</Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details"><span className="icon-comments-2"></span>October 19,
                                            2022</Link>
                                    </li>
                                </ul>
                                <h3 className="blog-four__title"><Link href="blog-details">Building the world we live in
                                        Precision Construction</Link></h3>
                                <div className="blog-four__read-more">
                                    <Link href="blog-details">Read more<span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Four Single End*/}
                    {/*Blog Four Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="blog-four__single">
                            <div className="blog-four__img-box">
                                <div className="blog-four__img">
                                    <img src="assets/images/blog/blog-4-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-four__content">
                                <ul className="blog-four__meta list-unstyled">
                                    <li>
                                        <Link href="blog-details"><span className="icon-calender"></span>By admin</Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details"><span className="icon-comments-2"></span>October 19,
                                            2022</Link>
                                    </li>
                                </ul>
                                <h3 className="blog-four__title"><Link href="blog-details">Proactive Property Solutions
                                        infrastructure</Link></h3>
                                <div className="blog-four__read-more">
                                    <Link href="blog-details">Read more<span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Four Single End*/}
                </div>
            </div>
        </section>
        {/*Blog Four End */}
        </>
    )
}
