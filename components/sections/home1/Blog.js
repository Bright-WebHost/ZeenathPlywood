
'use client'
import Link from "next/link"
export default function Blog() {
    return (
        <>

        {/*Blog One Start*/}
        <section className="blog-one">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Our Blogs</span>
                    </div>
                    <h2 className="section-title__title">Engineering the Extraordinary<br/> power of imagination</h2>
                </div>
                <div className="row">
                    {/*Blog One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-1.jpg" alt="@@title"/>
                                    <img src="assets/images/blog/blog-1-1.jpg" alt="@@title"/>
                                    <Link href="blog-details-right" className="blog-one__link"><span
                                            className="sr-only"></span></Link>
                                </div>
                                <div className="blog-one__date">
                                    <span>Oct 19, 2023</span>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <h3 className="blog-one__title"><Link href="blog-details">BuildTech Solutions Building the
                                        Future Today</Link></h3>
                                <div className="blog-one__read-more">
                                    <Link href="blog-details-right">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                    {/*Blog One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-2.jpg" alt="@@title"/>
                                    <img src="assets/images/blog/blog-1-2.jpg" alt="@@title"/>
                                    <Link href="blog-details-right" className="blog-one__link"><span
                                            className="sr-only"></span></Link>
                                </div>
                                <div className="blog-one__date">
                                    <span>Oct 19, 2023</span>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <h3 className="blog-one__title"><Link href="blog-details">Excellence in Construction and
                                        Every</Link></h3>
                                <div className="blog-one__read-more">
                                    <Link href="blog-details">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                    {/*Blog One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="600ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-3.jpg" alt="@@title"/>
                                    <img src="assets/images/blog/blog-1-3.jpg" alt="@@title"/>
                                    <Link href="blog-details-right" className="blog-one__link"><span
                                            className="sr-only"></span></Link>
                                </div>
                                <div className="blog-one__date">
                                    <span>Oct 19, 2023</span>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <h3 className="blog-one__title"><Link href="blog-details">Innovate Create Inspire your
                                        brand to life in </Link></h3>
                                <div className="blog-one__read-more">
                                    <Link href="blog-details">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                </div>
            </div>
        </section>
        {/*Blog One End*/}
        </>
    )
}
