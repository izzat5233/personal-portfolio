import "../styles/globals.css";
import {useEffect, useState} from "react";

export default function MyApp({Component, pageProps}) {
    return (
        <CursorCircleEffect>
            <Component {...pageProps}/>
        </CursorCircleEffect>
    );
}

export function CursorCircleEffect({children}) {
    const [cursorPos, setCursorPos] = useState({x: 0, y: 0});
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(hover: none)").matches) {
            setIsTouchDevice(true);
        }
    }, []);

    useEffect(() => {
        if (isTouchDevice) return; // Don't run the effect if it's a touch device

        let animationFrameId = null;
        const updateCursorPos = (e) => {
            if (animationFrameId) {
                window.cancelAnimationFrame(animationFrameId);
            }

            animationFrameId = window.requestAnimationFrame(() => {
                setCursorPos({x: e.clientX, y: e.clientY});
            });
        };

        window.addEventListener('mousemove', updateCursorPos);

        return () => {
            window.removeEventListener('mousemove', updateCursorPos);
            if (animationFrameId) {
                window.cancelAnimationFrame(animationFrameId);
            }
        };
    }, [isTouchDevice]); // Re-run the effect when isTouchDevice changes

    return (
        <div>
            {!isTouchDevice && (
                <div
                    className="fixed transform -translate-x-1/2 -translate-y-1/2
                     blur-3xl opacity-10 rounded-full pointer-events-none from-fore to-neutral"
                    style={{
                        backgroundImage: 'radial-gradient(var(--tw-gradient-stops))',
                        top: cursorPos.y,
                        left: cursorPos.x,
                        width: '1000px',
                        height: '1000px',
                    }}
                />
            )}
            {children}
        </div>
    );
}

