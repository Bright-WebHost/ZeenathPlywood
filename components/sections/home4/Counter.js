
import CounterUp from "@/components/elements/CounterUp"

export default function Counter() {
    return (
        <>

        {/* Counter Four Start */}
        <section className="counter-four">
            <div className="container">
                <div className="row">
                    {/* Counter Four Single Start */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="counter-four__single">
                            <div className="counter-four__icon">
                                <span className="icon-hook"></span>
                            </div>
                            <div className="counter-four__content">
                                <div className="counter-four__count count-box">
                                <CounterUp end={200} />
                                    <span>+</span>
                                </div>
                                <p className="counter-four__text">Team member</p>
                            </div>
                        </div>
                    </div>
                    {/* Counter Four Single End */}
                    {/* Counter Four Single Start */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="counter-four__single">
                            <div className="counter-four__icon">
                                <span className="icon-crane-4"></span>
                            </div>
                            <div className="counter-four__content">
                                <div className="counter-four__count count-box">
                                <CounterUp end={100} />
                                    <span>+</span>
                                </div>
                                <p className="counter-four__text">Winning award</p>
                            </div>
                        </div>
                    </div>
                    {/* Counter Four Single End */}
                    {/* Counter Four Single Start */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                        <div className="counter-four__single">
                            <div className="counter-four__icon">
                                <span className="icon-industry"></span>
                            </div>
                            <div className="counter-four__content">
                                <div className="counter-four__count count-box">
                                <CounterUp end={400} />
                                    <span>+</span>
                                </div>
                                <p className="counter-four__text">Complete project</p>
                            </div>
                        </div>
                    </div>
                    {/* Counter Four Single End */}
                    {/* Counter Four Single Start */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="900ms">
                        <div className="counter-four__single">
                            <div className="counter-four__icon">
                                <span className="icon-robotic-arm"></span>
                            </div>
                            <div className="counter-four__content">
                                <div className="counter-four__count count-box">
                                <CounterUp end={900} />
                                    <span>+</span>
                                </div>
                                <p className="counter-four__text">Client review</p>
                            </div>
                        </div>
                    </div>
                    {/* Counter Four Single End */}
                </div>
            </div>
        </section>
        {/* Counter Four End */}
           
        </>
    )
}
