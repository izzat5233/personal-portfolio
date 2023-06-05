import {LuGithub, LuLinkedin, LuTwitter} from "react-icons/lu";

export function Icon({children, href}) {
    return (
        <a
            className="transition-all hover:text-accent"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}

export function Signature({children}) {
    return <p className="font-cursive text-3xl font-bold">{children}</p>;
}

export default function Footer() {
    return (
        <footer className="text-dark mt-4 bg-neutral p-8">
            <div className="container mx-auto flex flex-col items-center justify-center gap-8">
                <div className="flex gap-5 space-x-4">
                    <Icon href="#">
                        <LuGithub/>
                    </Icon>
                    <Icon href="#">
                        <LuLinkedin/>
                    </Icon>
                    <Icon href="#">
                        <LuTwitter/>
                    </Icon>
                </div>
                <Signature>
                    Crafted with <span className="text-accent">&#10084;</span> by Izzat
                    Alsharif
                </Signature>
            </div>
        </footer>
    );
}
