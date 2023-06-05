import Footer from "@/components/Footer";
import Head from "next/head";

export default function Layout({children, title = "Portfolio"}) {
    return (
        <>
            <Head>
                <link rel="icon" href="./favicon.ico"/>
                <title>{title}</title>
            </Head>
            <main>{children}</main>
            <Footer/>
        </>
    );
}
