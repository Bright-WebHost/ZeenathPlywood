import Link from "next/link"

export default function Whycoose() {
    return (
        <>


        {/*Why Choose Three Start */}
        <section className="why-choose-three" style={{marginBottom:'50px'}}>
            <div className="why-choose-three__bg"
                style={{ backgroundImage: 'url(assets/images/backgrounds/14.png' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-7">
                        <div className="why-choose-three__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box" style={{marginTop:'80px'}}>
                                    <span className="section-title__tagline">Why Cho0se us </span>
                                </div>
                                <h2 className="section-title__title">Your Partner in <br/> Interiors</h2>
                            </div>
                            <p className="why-choose-three__text">Since 1996, we have been providing high-quality plywood, 
                                laminates, and veneers along with reliable service, helping our customers create beautiful,
                                 durable, and functional interiors for homes and projects of all sizes.
                            </p>
                            <div className="why-choose-three__btn-box">
                                <Link href="about" className="why-choose-three__btn thm-btn">Read more<span
                                        className="icon-dabble-arrow-right"></span></Link>
                            </div>
                            <ul className="why-choose-three__contact-list list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-phone-call"></span>
                                    </div>
                                    <div className="content">
                                        <span>Need help?</span>
                                        <p><Link href="tel:+919606260928">+91 96 06 260928</Link></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-Group"></span>
                                    </div>
                                    <div className="content">
                                        <span>Requesting A Call:</span>
                                        <p><Link href="mailto:zeenathplywood@gmail.com">zeenathplywood@gmail.com</Link></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Why Choose Three End */}
            

        </>
    )
}
