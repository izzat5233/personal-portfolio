export function IconLink({children, href}) {
    return (
        <a
            className="transition-all hover:text-primary"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}
