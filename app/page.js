import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home3/Banner"
import Blog from "@/components/sections/home3/Blog"
import Video from "@/components/sections/home3/Video"
import Services from "@/components/sections/home3/Services"
import About from "@/components/sections/home3/About"
import Services2 from "@/components/sections/home3/Services2"
import Recent from "@/components/sections/home3/Recent"
import Whycoose from "@/components/sections/home3/Whycoose"
import Counter from "@/components/sections/home3/Counter"
import Project from "@/components/sections/home3/Project"
import Contact from "@/components/sections/home3/Contact"
import Testimonial from "@/components/sections/home3/Testimonial"
import About2 from "@/components/sections/home3/About2"
import Team from "@/components/sections/home3/Team"
import Brand from "@/components/sections/home3/Brand"
import Cta from "@/components/sections/home3/Cta"
import SideButton from "@/components/layout/SideButton"
export default function Home() {

    return (
        <>
            <Layout headerStyle={5} footerStyle={3}>
                <SideButton/>
                <Banner />

                <Services />
                <About />
                <Counter />
                <Services2 />
                
                <Recent />
                <Whycoose />
                {/* <Counter /> */}
                {/* <Project /> */}
                {/* <Contact /> */}
                {/* <Testimonial /> */}
                {/* <About2 /> */}
                {/* <Team /> */}
                {/* <Brand /> */}
                <Video />
                {/* <Blog /> */}
                <Cta />
            </Layout>
        </>
    )
}