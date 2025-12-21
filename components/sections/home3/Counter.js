import CounterUp from "@/components/elements/CounterUp"

export default function Counter() {
    return (
        <>
            {/*Counter Three Start */}
        <section className="counter-three">
            <div className="container">
                <div className="counter-three__inner">
                    <ul className="counter-three__count-list list-unstyled">
                        <li>
                            <div className="counter-three__big-count count-box">
                            <CounterUp end={25} />
                                <span>+</span>
                            </div>
                            <div className="counter-three__count count-box">
                            <CounterUp end={25} />
                                <span>+</span>
                            </div>
                            <p className="counter-three__text">Years <br/>of Experience</p>
                        </li>
                        <li>
                            <div className="counter-three__big-count count-box">
                            <CounterUp end={100} />
                                <span>+</span>
                            </div>
                            <div className="counter-three__count count-box">
                            <CounterUp end={100} />
                                <span>+</span>
                            </div>
                            <p className="counter-three__text">Products</p>
                        </li>
                        <li>
                            <div className="counter-three__big-count count-box">
                            <CounterUp end={500} />
                                <span>+</span>
                            </div>
                            <div className="counter-three__count count-box">
                            <CounterUp end={500} />
                                <span>+</span>
                            </div>
                            <p className="counter-three__text">Projects</p>
                        </li>
                        <li>
                            <div className="counter-three__big-count count-box">
                            <CounterUp end={1000} />
                                <span>+</span>
                            </div>
                            <div className="counter-three__count count-box">
                            <CounterUp end={1000} />
                                <span>+</span>
                            </div>
                            <p className="counter-three__text">Happy <br/>Clients</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        {/*Counter Three End */}
        </>
    )
}
