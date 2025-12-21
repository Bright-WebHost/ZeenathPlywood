'use client'
import CounterUp from "@/components/elements/CounterUp"


export default function Counter() {
    return (
        <>

        {/* Counter One Start */}
        <section className="counter-one">
            <div className="container">
                <div className="counter-one__inner">
                    <div className="counter-one__bg-shape"
                        style={{ backgroundImage: 'url(assets/images/shapes/counter-one-bg-shape.png' }} ></div>
                    <div className="row">
                        {/*Counter One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-one__single">
                                <div className="counter-one__icon">
                                    <span className="icon-blueprint-1"></span>
                                </div>
                                <div className="counter-one__count-list-content">
                                    <div className="counter-one__count count-box">
                                    <CounterUp end={20} />
                                        <span>+</span>
                                    </div>
                                    <p className="counter-one__text">Winning award</p>
                                </div>
                            </div>
                        </div>
                        {/*Counter One Single End*/}
                        {/*Counter One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-one__single">
                                <div className="counter-one__icon">
                                    <span className="icon-brick-wall"></span>
                                </div>
                                <div className="counter-one__count-list-content">
                                    <div className="counter-one__count count-box">
                                    <CounterUp end={900} />
                                        <span>+</span>
                                    </div>
                                    <p className="counter-one__text">Client review</p>
                                </div>
                            </div>
                        </div>
                        {/*Counter One Single End*/}
                        {/*Counter One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-one__single">
                                <div className="counter-one__icon">
                                    <span className="icon-blueprint"></span>
                                </div>
                                <div className="counter-one__count-list-content">
                                    <div className="counter-one__count count-box">
                                    <CounterUp end={10} />
                                        <span>K</span>
                                        <span>+</span>
                                    </div>
                                    <p className="counter-one__text">Complete project</p>
                                </div>
                            </div>
                        </div>
                        {/*Counter One Single End*/}
                        {/*Counter One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-one__single">
                                <div className="counter-one__icon">
                                    <span className="icon-blueprint-2"></span>
                                </div>
                                <div className="counter-one__count-list-content">
                                    <div className="counter-one__count count-box">
                                    <CounterUp end={200} />
                                        <span>+</span>
                                    </div>
                                    <p className="counter-one__text">Team member</p>
                                </div>
                            </div>
                        </div>
                        {/*Counter One Single End*/}
                    </div>
                </div>
            </div>
        </section>
        {/* Counter One End */}
            
        </>
    )
}
