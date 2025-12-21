import Layout from "@/components/layout/Layout"
import Gallery3 from "@/components/sections/home5/Gallery3"
import Gallery from "@/components/sections/home5/Gallery1"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Hardware">
            <Gallery3/>
        </Layout>
                </>
            )
        }