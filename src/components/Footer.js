import {LuGithub, LuLinkedin, LuTwitter} from "react-icons/lu";

export function Icon(href, {children}) {
    return (
        <a className="transition-all hover:text-accent"
           href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}

export function Signature({children}) {
    return (
        <p className="text-3xl font-cursive font-bold">
            {children}
        </p>
    );
}

export default function Footer() {
    return (
        <footer className="bg-neutral text-dark p-8 mt-4">
            <div className="container mx-auto flex flex-col gap-8 justify-center items-center">
                <div className="flex gap-5 space-x-4">
                    <Icon href="#"><LuGithub/></Icon>
                    <Icon href="#"><LuLinkedin/></Icon>
                    <Icon href="#"><LuTwitter/></Icon>
                </div>
                <Signature>
                    Crafted with <span className="text-accent">&#10084;</span> by Izzat Alsharif
                </Signature>
            </div>
        </footer>
    );
}
