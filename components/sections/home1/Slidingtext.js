'use client'
import Link from "next/link"

export default function Slidingtext() {
    
    return (
        <>

        {/* Sliding Text Start */}
        <section className="sliding-text">
            <div className="sliding-text__inner">
                <ul className="sliding-text__list marquee_mode">
                    <li>
                        <Link href="" className="sliding-text__icon"><span className="icon-renovate"></span></Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__text">Renovate Right</Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__icon"><span className="icon-hammer"></span></Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__text">Prestige Construction</Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__icon"><span className="icon-under-construction"></span></Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__text">Renovate Right</Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__icon"><span className="icon-paint-roller"></span></Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__text">Prestige Construction</Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__icon"><span className="icon-renovate"></span></Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__text">Renovate Right</Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__icon"><span className="icon-hammer"></span></Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__text">Prestige Construction</Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__icon"><span className="icon-under-construction"></span></Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__text">Renovate Right</Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__icon"><span className="icon-paint-roller"></span></Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__text">Prestige Construction</Link>
                    </li>
                </ul>
            </div>
        </section>
        {/* Sliding Text End */}
        
        </>
    )
}
