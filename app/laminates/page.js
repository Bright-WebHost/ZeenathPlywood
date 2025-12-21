import Layout from "@/components/layout/Layout"
import Gallery1 from "@/components/sections/home5/Gallery1"
import Gallery from "@/components/sections/home5/Gallery1"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Laminates">
            <Gallery1/>
        </Layout>
                </>
            )
        }