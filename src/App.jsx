import { useEffect, useRef } from "react";

export default function App() {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    function resizeText() {
        const container = containerRef.current;
        const text = textRef.current;

        const containerWidth = container.offsetWidth;
        let min = 1;
        let max = 2000;

        while (min <= max) {
            const mid = Math.floor((min + max) / 2);
            text.style.fontSize = mid + "px";

            if (text.offsetWidth <= containerWidth) {
                min = mid + 1;
            } else {
                max = mid - 1;
            }
            console.log("I am running");
        }
        text.style.fontSize = max + "px";
        console.log(max);
    }

    useEffect(() => {
        resizeText();

        window.addEventListener("resize", resizeText);

        return () => {
            window.removeEventListener("resize", resizeText);
        };
    }, []);

    return (
        <div
            className="flex h-screen w-full items-center overflow-hidden bg-slate-950"
            ref={containerRef}
        >
            <span
                className="absolute left-0 mx-auto my-auto whitespace-nowrap text-center font-bold uppercase text-slate-700"
                ref={textRef}
            >
                I fit myself here
            </span>
        </div>
    );
}
