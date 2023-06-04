import "../styles/globals.css";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Head>
                <title>Portfolio</title>
            </Head>
            <Component {...pageProps}/>
        </Layout>
    );
}
