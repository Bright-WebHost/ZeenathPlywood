import Link from "next/link"


export default function Work() {
    return (
        <>
        {/*Work Process Start */}
        <section className="work-process">
            <div className="work-process__bg-shape"
                style={{ backgroundImage: 'url(assets/images/shapes/work-process-bg-shape.png' }} ></div>
            <div className="container">
                <div className="work-process__inner">
                    <div className="work-process__shape-1">
                        <img src="assets/images/shapes/work-process-shape-1.png" alt=""/>
                    </div>
                    <div className="row">
                        {/*Work Process Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                            <div className="work-process__single">
                                <div className="work-process__icon">
                                    <span className="icon-measure-tape"></span>
                                </div>
                                <h3 className="work-process__title"><Link href="about">Carpentry Work</Link></h3>
                                {/* <p className="work-process__text">Lorem ipsum dolor sit amet, consectetur adipiscing </p> */}
                            </div>
                        </div>
                        {/*Work Process Single End*/}
                        {/*Work Process Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                            <div className="work-process__single">
                                <div className="work-process__icon">
                                    <span className="icon-resistor"></span>
                                </div>
                                <h3 className="work-process__title"><Link href="about">Masonry Repair </Link></h3>
                                {/* <p className="work-process__text">Lorem ipsum dolor sit amet, consectetur adipiscing </p> */}
                            </div>
                        </div>
                        {/*Work Process Single End*/}
                        {/*Work Process Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                            <div className="work-process__single">
                                <div className="work-process__icon">
                                    <span className="icon-hand-drill"></span>
                                </div>
                                <h3 className="work-process__title"><Link href="about">Demolition Services</Link></h3>
                                {/* <p className="work-process__text">Lorem ipsum dolor sit amet, consectetur adipiscing </p> */}
                            </div>
                        </div>
                        {/*Work Process Single End*/}
                        {/*Work Process Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                            <div className="work-process__single">
                                <div className="work-process__icon">
                                    <span className="icon-insulating-tape"></span>
                                </div>
                                <h3 className="work-process__title"><Link href="about">Landscaping Design</Link></h3>
                                {/* <p className="work-process__text">Lorem ipsum dolor sit amet, consectetur adipiscing </p> */}
                            </div>
                        </div>
                        {/*Work Process Single End*/}
                    </div>
                </div>
            </div>
        </section>
        {/*Work Process End */}
        </>
    )
}
