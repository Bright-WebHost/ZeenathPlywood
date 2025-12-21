


export default function Progress() {
    return (
        <>
        {/*Progress One Start */}
        <section className="progress-one">
            <div className="container">
                <div className="progress-one__inner">
                    <ul className="progress-one__progress-list list-unstyled">
                        <li>
                            <div className="progress-one__single">
                                <div className="progress-one__progress-box">
                                    <div className="circle-progress"
                                        data-options='{ "value": 0.7,"thickness": 5,"emptyFill": "#ff6e2d","lineCap": "square", "size": 140, "fill": { "color": "#ffffff" } }'>
                                    </div>{/* /.circle-progress */}
                                    <div className="price__pack">
                                        <p>70%</p>
                                    </div>
                                </div>
                                <div className="progress-one__progress-content">
                                    <p>Elevator Maintenance</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="progress-one__single">
                                <div className="progress-one__progress-box">
                                    <div className="circle-progress"
                                        data-options='{ "value": 0.95,"thickness": 5,"emptyFill": "#ff6e2d","lineCap": "square", "size": 140, "fill": { "color": "#ffffff" } }'>
                                    </div>{/* /.circle-progress */}
                                    <div className="price__pack">
                                        <p>95%</p>
                                    </div>
                                </div>
                                <div className="progress-one__progress-content">
                                    <p>Security System </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="progress-one__single">
                                <div className="progress-one__progress-box">
                                    <div className="circle-progress"
                                        data-options='{ "value": 0.8,"thickness": 5,"emptyFill": "#ff6e2d","lineCap": "square", "size": 140, "fill": { "color": "#ffffff" } }'>
                                    </div>{/* /.circle-progress */}
                                    <div className="price__pack">
                                        <p>80%</p>
                                    </div>
                                </div>
                                <div className="progress-one__progress-content">
                                    <p>Glass Installation</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="progress-one__single">
                                <div className="progress-one__progress-box">
                                    <div className="circle-progress"
                                        data-options='{ "value": 0.9,"thickness": 5,"emptyFill": "#ff6e2d","lineCap": "square", "size": 140, "fill": { "color": "#ffffff" } }'>
                                    </div>{/* /.circle-progress */}
                                    <div className="price__pack">
                                        <p>90%</p>
                                    </div>
                                </div>
                                <div className="progress-one__progress-content">
                                    <p>Concrete Flooring</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        {/*Progress One End */}
        </>
    )
}
