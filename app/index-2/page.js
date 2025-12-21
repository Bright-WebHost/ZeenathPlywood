
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import Services from "@/components/sections/home2/Services"
import About from "@/components/sections/home2/About"
import Slidingtext from "@/components/sections/home2/Slidingtext"
import Whychoose from "@/components/sections/home2/Whychoose"
import Joinus from "@/components/sections/home2/Joinus"
import Services2 from "@/components/sections/home2/Services2"
import Project from "@/components/sections/home2/Project"
import Pricing from "@/components/sections/home2/Pricing"
import Team from "@/components/sections/home2/Team"
import Success from "@/components/sections/home2/Success"
import Faq from "@/components/sections/home2/Faq"
import Counter from "@/components/sections/home2/Counter"
import Testimonial from "@/components/sections/home2/Testimonial"
import Brand from "@/components/sections/home2/Brand"
import Blog from "@/components/sections/home2/Blog"


export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Banner />
                <Services />
                <About />
                <Slidingtext />
                <Whychoose />
                <Joinus />
                <Services2 />
                <Project />
                <Pricing />
                <Team />
                <Success />
                <Faq />
                <Counter />
                <Testimonial />
                <Brand />
                <Blog />
 
            </Layout>
        </>
    )
}