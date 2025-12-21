
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home5/About"
import Banner from "@/components/sections/home5/Banner"
import Blog from "@/components/sections/home5/Blog"
import Counter from "@/components/sections/home5/Counter"
import Faq from "@/components/sections/home5/Faq"
import Gallery from "@/components/sections/home5/Gallery"
import Pricing from "@/components/sections/home5/Pricing"
import Services from "@/components/sections/home5/Services"
import Team from "@/components/sections/home5/Team"
import Testimonial from "@/components/sections/home5/Testimonial"
import Cta from "@/components/sections/home5/Cta"
import Progress from "@/components/sections/home5/Progress"
import Work from "@/components/sections/home5/Work"

export default function Home() {

    return (
        <>
            <Layout headerStyle={5} footerStyle={5}>
                <Banner />
                <About />
                <Services />
                <Faq />
                <Counter />
                <Gallery />
                <Work />
                <Testimonial />
                <Pricing />
                <Team />
                <Progress />
                <Blog />
                <Cta />

            </Layout>
        </>
    )
}