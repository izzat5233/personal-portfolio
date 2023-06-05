import Layout from "@/components/Layout";

export default function Index() {
    return (
        <Layout title="Home | Portfolio">
            <Section>
                <div className="flex flex-col justify-center gap-10 sm:flex-row">
                    <img
                        src="https://picsum.photos/300/300"
                        alt="Avatar"
                        className="mx-10 rounded-full"
                    />
                    <div className="flex flex-col gap-10">
                        <h1 className="mt-5 flex-initial font-title">Hi there!</h1>
                        <p className="flex-initial flex-grow">
                            I am Izzat, a Computer Engineer.
                        </p>
                    </div>
                </div>
            </Section>
        </Layout>
    );
}

export function Section({children}) {
    return (
        <section className="p-10 my-10 bg-neutral">
            {children}
        </section>
    );
}
