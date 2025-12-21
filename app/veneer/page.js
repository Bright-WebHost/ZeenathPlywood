import Layout from "@/components/layout/Layout"
import Gallery2 from "@/components/sections/home5/Gallery2"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Veneer">
            <Gallery2/>
        </Layout>
        </>
    )
}