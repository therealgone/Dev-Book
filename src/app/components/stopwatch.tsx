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

    const handelReset = () =>{
        SetTime(0)
    }

    const min = Math.floor(time / 60);
    const sec = time % 60;

    return (
        <div className="min-h-screen bg-dark text-white pt-20">
            <h1 className="text-7xl text-center font-bold text-[#007ACC] text-shadow-[0_0_10px_#007ACC] mb-16">
                Stopwatch
            </h1>
            
            <div className="max-w-2xl mx-auto px-6">
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <h2 className="text-3xl font-bold text-[#007ACC] mb-8 text-center">Timer</h2>
                    
                    <div className="flex flex-col items-center space-y-8">
                        <div className="text-center">
                            <h1 className="text-8xl font-bold text-white font-mono">
                                {min.toString().padStart(2, '0')}:{sec.toString().padStart(2, '0')}
                            </h1>
                        </div>
                        
                        <div className="flex gap-4">
                            <button
                                onClick={() => { SetMode(!mode); }}
                                className={`px-8 py-4 rounded-lg font-semibold transition-colors ${
                                    mode 
                                        ? "bg-red-600 hover:bg-red-700 text-white" 
                                        : "bg-green-600 hover:bg-green-700 text-white"
                                }`}>
                                {mode ? "Stop" : "Start"}
                            </button>
                            
                            <button 
                                onClick={handelReset}
                                className="bg-gray-600 hover:bg-gray-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}