import { useEffect, useState } from "react";

export default function stopwatch() {
    const [time, SetTime] = useState(0)
    const [mode, SetMode] = useState(false)

    useEffect(() => {
        if (mode === false) return;

        const interval = setInterval(() => {
            SetTime(prev => prev + 1)
        }, 1000);

        return () => clearInterval(interval);
    }, [mode]);

    const handelReset = () => {
        SetTime(0)
    }

    const min = Math.floor(time / 60);
    const sec = time % 60;

    return (
        <div>
            <button
                onClick={() => { SetMode(!mode); }}
                className={`border-2 text-black ${mode ? "bg-red-700" : "bg-green-300"}`}>{mode ? "Stop" : "Start"}</button>
            <h1>{min}:{sec}</h1>
            <button onClick={handelReset}>RESET</button>
        </div>
    );
}