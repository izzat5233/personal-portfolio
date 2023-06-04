import Layout from "@/components/Layout";

export default function Index() {
    return (
        <Layout title="Home | Portfolio">
            <section id="introduction" className="container mx-auto text-center py-5 ">
                <div className="container">
                    <h1 className={`display-4 mb-3 font-title transition-all cursor-default
                     hover:text-accent hover:text-5xl`}>Welcome to My
                        Portfolio</h1>
                    <p className="lead">I'm a Full Stack Developer based in New York, specializing in React.js, Node.js,
                        and MongoDB.</p>
                    <hr className="my-4"/>
                    <p>With several years of experience in the industry, I have a strong understanding of the full
                        web development life cycle, and I'm experienced in working on all stages of software
                        development projects.</p>
                    <a className="btn btn-primary btn-lg" href="#contact" role="button">Contact Me</a>
                </div>
            </section>
        </Layout>
    );
}
