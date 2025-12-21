import Link from "next/link"

export default function Cta() {
    return (
        <>
        {/*CTA Two Start*/}
        <section className="cta-two hide-mobile">
            <div className="cta-two__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/196.png' }} ></div>
            <div className="cta-two__wrap">
                <div className="container">
                    <div className="cta-two__inner">
                        <h3 className="cta-two__title">Get Started on Your Project Today</h3>
                        <div className="cta-two__call-box">
                            <div className="icon">
                                <span className="icon-call"></span>
                            </div>
                            <div className="call-number">
    <Link href="https://wa.me/919606260928" target="_blank">
        +91 96 06 260928
    </Link>
</div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA Two End*/}      

        </>
    )
}
