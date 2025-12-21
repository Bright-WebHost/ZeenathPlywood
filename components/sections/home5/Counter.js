import CounterUp from "@/components/elements/CounterUp"

export default function Counter() {
    return (
        <>

        {/*Counter Five Start */}
        <section className="counter-five">
            <div className="counter-five__wrap">
                <div className="counter-five__shape-1">
                    <img src="assets/images/shapes/counter-five-shape-1.png" alt=""/>
                </div>
                <div className="counter-five__shape-2">
                    <img src="assets/images/shapes/counter-five-shape-2.png" alt=""/>
                </div>
                <div className="counter-five__shape-3">
                    <img src="assets/images/shapes/counter-five-shape-3.png" alt=""/>
                </div>
                <div className="container">
                    <div className="counter-five__inner">
                        <ul className="counter-five__count-list list-unstyled">
                            <li>
                                <div className="counter-five__count count-box">
                                <CounterUp end={200} />
                                    <span>+</span>
                                </div>
                                <p className="counter-five__text">Team member</p>
                            </li>
                            <li>
                                <div className="counter-five__count count-box">
                                <CounterUp end={30} />
                                    <span>K</span>
                                    <span>+</span>
                                </div>
                                <p className="counter-five__text">Winning award</p>
                            </li>
                            <li>
                                <div className="counter-five__count count-box">
                                <CounterUp end={20} />
                                    <span>+</span>
                                </div>
                                <p className="counter-five__text">Complete project</p>
                            </li>
                            <li>
                                <div className="counter-five__count count-box">
                                <CounterUp end={300} />
                                    <span>+</span>
                                </div>
                                <p className="counter-five__text">Client review</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/*Counter Five End */}
           
        </>
    )
}
