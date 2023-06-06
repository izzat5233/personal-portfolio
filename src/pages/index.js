import Image from "next/image";
import Layout from "@/components/Layout";
import {LuGithub, LuLinkedin, LuMail, LuTwitter} from "react-icons/lu";
import {IconLink} from "@/components/Custom";

export default function Index() {
    return (
        <Layout title="Home | Portfolio">
            <Section>
                <div className="flex flex-col justify-center gap-10 sm:flex-row p-5">
                    <Image
                        src="/backgrounds/me.jpg"
                        width={500}
                        height={500}
                        alt="Avatar"
                        className="sm:mx-10 sm:w-80 w-full rounded-full border-hover-effect"
                    />
                    <div className="flex flex-col gap-10">
                        <h1 className="mt-5 flex-initial font-title">Hi there!</h1>
                        <p className="flex-initial text-4xl">
                            I am Izzat, a Computer Engineer.
                        </p>
                        <div className="flex-initial flex gap-5 space-x-4">
                            <IconLink href="https://github.com/izzat5233">
                                <LuGithub/>
                            </IconLink>
                            <IconLink href="mailto://contact@izzatalsharif.com">
                                <LuMail/>
                            </IconLink>
                        </div>
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
