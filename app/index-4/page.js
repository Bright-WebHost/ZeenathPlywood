
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home4/About"

import Banner from "@/components/sections/home4/Banner"
import Blog from "@/components/sections/home4/Blog"
import Counter from "@/components/sections/home4/Counter"
import Faq from "@/components/sections/home4/Faq"
import Feature from "@/components/sections/home4/Feature"
import Gallery from "@/components/sections/home4/Gallery"
import Joinus from "@/components/sections/home4/Joinus"
import Pricing from "@/components/sections/home4/Pricing"
import Services from "@/components/sections/home4/Services"
import Services2 from "@/components/sections/home4/Services2"
import Slidingtext from "@/components/sections/home4/Slidingtext"
import Team from "@/components/sections/home4/Team"
import Testimonial from "@/components/sections/home4/Testimonial"

export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={4}>
                <Banner />
                <Services />
                <About />
                <Joinus />
                <Services2 />
                <Slidingtext />
                <Gallery />
                <Testimonial />
                <Team />
                <Counter />
                <Feature />
                <Pricing />
                <Faq />
                <Blog />

            </Layout>
        </>
    )
}