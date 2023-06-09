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

export function TitleHr({title}) {
    return (
        <div className="flex items-center gap-5">
            <hr/>
            <p className="font-bold font-title text-4xl text-fore">{title}</p>
            <hr/>
        </div>
    );
}
