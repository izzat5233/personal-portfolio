import Layout from "@/components/Layout";
import Image from "next/image";

export default function Index() {
    return (
        <Layout title="Home | Portfolio">
            <Section>
                <div className="flex flex-col justify-center gap-10 sm:flex-row p-5">
                    <Image
                        src="/backgrounds/avatar.jpg"
                        width={500}
                        height={500}
                        alt="Avatar"
                        className="sm:mx-10 sm:w-80 w-full rounded-full border-hover-effect"
                    />
                    <div className="flex flex-col gap-10">
                        <h1 className="mt-5 flex-initial font-title">Hi there!</h1>
                        <p className="flex-initial text-4xl flex-grow">
                            I am Izzat, a Computer Engineer.
                        </p>
                    </div>
                </div>
            </Section>
            <hr/>
        </Layout>
    );
}

export function Section({children}) {
    return (
        <section className="p-10 my-10">
            {children}
        </section>
    );
}
