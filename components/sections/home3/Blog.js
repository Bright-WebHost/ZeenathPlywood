import Link from "next/link"


export default function Blog() {
    return (
        <>
            {/*Blog Three Start*/}
        <section className="blog-three">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Blog and news</span>
                    </div>
                    <h2 className="section-title__title">here Innovation Meets the<br/> Construction</h2>
                </div>
                <div className="row">
                    {/*Blog Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="blog-three__single">
                            <div className="blog-three__img-box">
                                <div className="blog-three__img">
                                    <img src="assets/images/blog/blog-3-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-three__content">
                                <div className="blog-three__admin">
                                    <p>Admin</p>
                                </div>
                                <ul className="blog-three__meta list-unstyled">
                                    <li>
                                        <Link href="blog-details"><span className="icon-calender"></span>October 19,
                                            2022</Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details"><span className="icon-comments-2"></span>Comments
                                            (05)</Link>
                                    </li>
                                </ul>
                                <h3 className="blog-three__title"><Link href="blog-details">Bringing the power of the sun
                                        to you</Link></h3>
                                <div className="blog-three__read-more">
                                    <Link href="blog-details">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Three Single End*/}
                    {/*Blog Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="blog-three__single">
                            <div className="blog-three__img-box">
                                <div className="blog-three__img">
                                    <img src="assets/images/blog/blog-3-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-three__content">
                                <div className="blog-three__admin">
                                    <p>Admin</p>
                                </div>
                                <ul className="blog-three__meta list-unstyled">
                                    <li>
                                        <Link href="blog-details"><span className="icon-calender"></span>October 19,
                                            2022</Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details"><span className="icon-comments-2"></span>Comments
                                            (05)</Link>
                                    </li>
                                </ul>
                                <h3 className="blog-three__title"><Link href="blog-details">Building Your Dreams Our the
                                        Priority</Link></h3>
                                <div className="blog-three__read-more">
                                    <Link href="blog-details">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Three Single End*/}
                    {/*Blog Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="600ms">
                        <div className="blog-three__single">
                            <div className="blog-three__img-box">
                                <div className="blog-three__img">
                                    <img src="assets/images/blog/blog-3-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-three__content">
                                <div className="blog-three__admin">
                                    <p>Admin</p>
                                </div>
                                <ul className="blog-three__meta list-unstyled">
                                    <li>
                                        <Link href="blog-details"><span className="icon-calender"></span>October 19,
                                            2022</Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details"><span className="icon-comments-2"></span>Comments
                                            (05)</Link>
                                    </li>
                                </ul>
                                <h3 className="blog-three__title"><Link href="blog-details">Excellence in Construction and
                                        Every</Link></h3>
                                <div className="blog-three__read-more">
                                    <Link href="blog-details">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Three Single End*/}
                </div>
            </div>
        </section>
        {/*Blog Three End*/}
        </>
    )
}
