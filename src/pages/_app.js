import "../app/globals.css";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <html lang="en"/>
                <title>Portfolio</title>
            </Head>
            <Component {...pageProps}/>
            <Footer/>
        </>
    );
}
