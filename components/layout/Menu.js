import Link from "next/link"

export default function Menu() {
    return (
        <>
            <ul className="main-menu__list">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="about">About</Link>
                </li>
                <li>
                    <Link href="products">Products</Link>
                    <ul>
                        {/* Plywood Submenu */}
                        <li className="dropdown">
                            <Link href="/plywood">Plywood</Link>
                            {/* <ul>
                                <li><Link href="/plywood/is-303-mr-grade">IS 303 - MR Grade</Link></li>
                                <li><Link href="/plywood/is-710-marine-grade">IS 710 - MARINE Grade</Link></li>
                                <li><Link href="/plywood/is-10701-bwp-grade">IS 10701 - BWP Grade</Link></li>
                                <li><Link href="/plywood/is-5509-fire-retardant">IS 5509 - FIRE RETARDANT Grade</Link></li>
                                <li><Link href="/plywood/is-1659-block-board">IS 1659 - Block Board</Link></li>
                                <li><Link href="/plywood/is-4990-shuttering">IS 4990 - SHUTTERING Grade</Link></li>
                                <li><Link href="/plywood/chequered-truck-flooring">Chequered & Truck flooring</Link></li>
                                <li><Link href="/plywood/particle-board">Particle board</Link></li>
                                <li><Link href="/plywood/bamboo-sheet">Bamboo sheet</Link></li>
                                <li><Link href="/plywood/mdf-hdf-hdhmr">MDF / HDF / HDHMR</Link></li>
                                <li><Link href="/plywood/pvc-wpc-frame">PVC / WPC / WPC FRAME</Link></li>
                                <li><Link href="/plywood/door">DOOR</Link></li>
                                <li><Link href="/plywood/finger-joint">FINGER JOINT</Link></li>
                            </ul> */}
                        </li>

                        {/* Laminates Submenu */}
                        <li className="dropdown">
                            <Link href="/laminates">Laminates</Link>
                            {/* <ul>
                                <li><Link href="/laminates/acrylic-sheets">Acrylic sheets</Link></li>
                                <li><Link href="/laminates/pvc">Pvc</Link></li>
                                <li><Link href="/laminates/1-25mm-laminate">1.25mm Laminate</Link></li>
                                <li><Link href="/laminates/1mm-laminate">1mm Laminate</Link></li>
                                <li><Link href="/laminates/0-8mm-laminate">0.8mm Laminate</Link></li>
                                <li><Link href="/laminates/liner-laminate">Liner Laminate</Link></li>
                                <li><Link href="/laminates/hylam">Hylam</Link></li>
                            </ul> */}
                        </li>

                        {/* Veneer Submenu */}
                        <li className="dropdown">
                            <Link href="/veneer">Veneer</Link>
                            {/* <ul>
                                <li className="dropdown">
                                    <Link href="/veneer/wood-veneer">Wood veneer</Link>
                                    <ul>
                                        <li><Link href="/veneer/wood-veneer/natural">Natural</Link></li>
                                        <li><Link href="/veneer/wood-veneer/recon">Recon</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/veneer/stone-veneer">Stone veneer</Link></li>
                            </ul> */}
                        </li>

                        {/* Hardware Submenu */}
                        <li className="dropdown">
                            <Link href="/hardware">Hardware</Link>
                            {/* <ul>
                                <li className="dropdown">
                                    <Link href="/hardware/furniture-fittings">Furniture Fittings</Link>
                                    <ul>
                                        <li><Link href="/hardware/furniture-fittings/hinges">Hinges</Link></li>
                                        <li><Link href="/hardware/furniture-fittings/sliding-folding">Sliding & Folding systems</Link></li>
                                        <li><Link href="/hardware/furniture-fittings/wardrobe-accessories">Wardrobe accessories</Link></li>
                                        <li><Link href="/hardware/furniture-fittings/drawer-runners">Drawer runners</Link></li>
                                        <li><Link href="/hardware/furniture-fittings/kitchen-accessories">Kitchen accessories</Link></li>
                                        <li><Link href="/hardware/furniture-fittings/profiles">Profiles</Link></li>
                                        <li><Link href="/hardware/furniture-fittings/home-decor-handles">Home Decor Handles</Link></li>
                                        <li><Link href="/hardware/furniture-fittings/wardrobe-handles">Wardrobe Handles</Link></li>
                                        <li><Link href="/hardware/furniture-fittings/bed-fittings">Bed Fittings</Link></li>
                                        <li><Link href="/hardware/furniture-fittings/sofa-legs">Sofa legs</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link href="/hardware/architectural-hardware">Architectural Hardware</Link>
                                    <ul>
                                        <li><Link href="/hardware/architectural-hardware/door-hinge">Door hinge</Link></li>
                                        <li><Link href="/hardware/architectural-hardware/door-window-fittings">Door & Window fittings</Link></li>
                                        <li><Link href="/hardware/architectural-hardware/mortice-locking">Mortice locking solutions</Link></li>
                                        <li><Link href="/hardware/architectural-hardware/cylinder-locks">Cylinder locks</Link></li>
                                        <li><Link href="/hardware/architectural-hardware/floor-springs">Floor springs</Link></li>
                                        <li><Link href="/hardware/architectural-hardware/glass-patch-fittings">Glass patch fittings</Link></li>
                                        <li><Link href="/hardware/architectural-hardware/digital-locking">Digital locking solutions</Link></li>
                                        <li><Link href="/hardware/architectural-hardware/pull-handles">Pull handles</Link></li>
                                        <li><Link href="/hardware/architectural-hardware/rim-locks">Rim Locks</Link></li>
                                        <li><Link href="/hardware/architectural-hardware/pad-locks">Pad Locks</Link></li>
                                        <li><Link href="/hardware/architectural-hardware/furniture-locks">Furniture Locks</Link></li>
                                        <li><Link href="/hardware/architectural-hardware/door-hooks">Door hooks</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link href="/hardware/safety-hardware">Safety Hardware</Link>
                                    <ul>
                                        <li><Link href="/hardware/safety-hardware/safe-locks">Safe locks</Link></li>
                                    </ul>
                                </li>
                            </ul> */}
                        </li>

                        {/* Decorative Panels Submenu */}
                        <li className="dropdown">
                            <Link href="/decorative-panels">Decorative Panels</Link>
                            {/* <ul>
                                <li><Link href="/decorative-panels/seamless-louver">Seamless Louver panels</Link></li>
                                <li><Link href="/decorative-panels/charcoal-sheets">Charcoal sheets</Link></li>
                                <li><Link href="/decorative-panels/mosaic-panels">Mosaic panels</Link></li>
                                <li><Link href="/decorative-panels/ratan-cane">Ratan Cane rolls</Link></li>
                                <li><Link href="/decorative-panels/mirror-engraved">Mirror engraved panels</Link></li>
                                <li><Link href="/decorative-panels/wainscoting">Wainscoting</Link></li>
                                <li><Link href="/decorative-panels/gold-bar">Gold Bar</Link></li>
                                <li><Link href="/decorative-panels/alabaster">Alabaster</Link></li>
                                <li><Link href="/decorative-panels/kork-sheets">Kork sheets</Link></li>
                                <li><Link href="/decorative-panels/charcofab-fabric">Charcofab fabric panels</Link></li>
                                <li><Link href="/decorative-panels/fibre-cement">Fibre cement boards</Link></li>
                                <li><Link href="/decorative-panels/terra-blocks">Terra blocks</Link></li>
                                <li><Link href="/decorative-panels/breeze-blocks">Breeze blocks</Link></li>
                                <li><Link href="/decorative-panels/clayneer">Clayneer</Link></li>
                                <li><Link href="/decorative-panels/hd-hmr-fluted">HD-HMR Fluted Panels</Link></li>
                                <li><Link href="/decorative-panels/mdf-grill">MDF Grill board</Link></li>
                                <li><Link href="/decorative-panels/mdf-wave">MDF wave board</Link></li>
                                <li><Link href="/decorative-panels/artificial-gardening">Artificial Gardening</Link></li>
                            </ul> */}
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="brands">Brands</Link>
                </li>
                <li>
                    <Link href="contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}