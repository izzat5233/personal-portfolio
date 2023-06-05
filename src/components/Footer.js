import {LuGithub, LuLinkedin, LuTwitter} from "react-icons/lu";

export default function Footer() {
    return (
        <footer className="bg-neutral text-dark font-cursive p-8 mt-4">
            <div className="container mx-auto flex flex-col gap-8 justify-center items-center">
                <div className="flex gap-5 space-x-4">
                    <a className="transition-all hover:text-accent"
                       href="#" target="_blank" rel="noopener noreferrer">
                        <LuGithub/>
                    </a>
                    <a className="transition-all hover:text-accent"
                       href="#" target="_blank" rel="noopener noreferrer">
                        <LuLinkedin/>
                    </a>
                    <a className="transition-all hover:text-accent"
                       href="#" target="_blank" rel="noopener noreferrer">
                        <LuTwitter/>
                    </a>
                </div>
                <p className="text-3xl font-bold">Crafted with <span className="text-accent">
                    &#10084;</span> by Izzat Alsharif</p>
            </div>
        </footer>
    );
}
