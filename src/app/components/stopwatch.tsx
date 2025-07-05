/**
 * Stopwatch Component
 * 
 * A functional stopwatch built with React that demonstrates timing operations,
 * useEffect hook usage, and interval management. This component showcases
 * real-time updates and state management for time-based applications.
 * 
 * Features:
 * - Start/Stop functionality with visual feedback
 * - Reset functionality to return to zero
 * - Real-time display in MM:SS format
 * - Automatic time formatting with leading zeros
 * - Responsive button states and styling
 * 
 * Learning Concepts Demonstrated:
 * - useState hook for managing timer state and mode
 * - useEffect hook for side effects (interval management)
 * - setInterval and clearInterval for timing operations
 * - Conditional rendering based on timer state
 * - Time formatting and calculations
 * - Cleanup functions in useEffect
 * 
 * @component
 * @returns {JSX.Element} Interactive stopwatch with start, stop, and reset functionality
 */
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function stopwatch() {
    // State Management for stopwatch functionality
    const [time, SetTime] = useState(0)      // Current time in seconds
    const [mode, SetMode] = useState(false)  // Timer running state (true = running, false = stopped)
    const router = useRouter();

    /**
     * useEffect hook to manage the timer interval
     * Creates and cleans up intervals based on the mode state
     * Increments time by 1 second when timer is running
     */
    useEffect(() => {
        // Don't start interval if timer is stopped
        if (mode === false) return;

        // Create interval that runs every 1000ms (1 second)
        const interval = setInterval(() => {
            SetTime(prev => prev + 1)  // Increment time by 1 second
        }, 1000);

        // Cleanup function to clear interval when component unmounts or mode changes
        return () => clearInterval(interval);
    }, [mode]); // Dependency array: re-run effect when mode changes

    /**
     * Resets the timer to zero
     * Stops the timer if it's running and sets time back to 0
     */
    const handelReset = () =>{
        SetTime(0)  // Reset time to 0
    }

    // Time formatting calculations
    const min = Math.floor(time / 60);  // Calculate minutes (integer division)
    const sec = time % 60;              // Calculate seconds (remainder)

    return (
        <div className="min-h-screen bg-dark text-white pt-20">
            {/* Stopwatch Title */}
            <h1 className="text-7xl text-center font-bold text-[#007ACC] text-shadow-[0_0_10px_#007ACC] mb-16">
                Stopwatch
            </h1>
            
            <div className="max-w-2xl mx-auto px-6">
                {/* Main Stopwatch Container */}
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <button className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
                        onClick={() => router.push('/stopwatch')}>Show Code</button>
                    <h2 className="text-3xl font-bold text-[#007ACC] mb-8 text-center">Timer</h2>
                    
                    <div className="flex flex-col items-center space-y-8">
                        {/* Time Display Section */}
                        <div className="text-center">
                            <h1 className="text-8xl font-bold text-white font-mono">
                                {/* Format time with leading zeros for consistent display */}
                                {min.toString().padStart(2, '0')}:{sec.toString().padStart(2, '0')}
                            </h1>
                        </div>
                        
                        {/* Control Buttons Section */}
                        <div className="flex gap-4">
                            {/* Start/Stop Button - Changes color and text based on state */}
                            <button
                                onClick={() => { SetMode(!mode); }}
                                className={`px-8 py-4 rounded-lg font-semibold transition-colors ${mode ? "bg-red-600 hover:bg-red-700 text-white" : "bg-green-600 hover:bg-green-700 text-white" }`} >
                                {mode ? "Stop" : "Start"}
                            </button>
                            
                            {/* Reset Button */}
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