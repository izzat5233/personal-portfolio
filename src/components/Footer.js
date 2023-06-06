export default function Footer() {
    return (
        <footer className="text-dark mt-4 p-8">
            <div className="container mx-auto flex flex-col items-center justify-center gap-8">
                <Signature>
                    Crafted with <span className="text-primary">&#10084;</span> by Izzat
                    Alsharif
                </Signature>
            </div>
        </footer>
    );
}

export function Signature({children}) {
    return <p className="font-cursive text-3xl font-bold">{children}</p>;
}
