import Footer from "@/components/Footer";
import Head from "next/head";

export default function Layout({children, title = "Portfolio"}) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}
