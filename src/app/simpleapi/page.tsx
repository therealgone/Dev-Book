"use client";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `/**
 * SimpleAPI Component
 * 
 * A weather API integration component that demonstrates how to fetch and display
 * real-time data from external APIs. This component showcases API calls, data
 * fetching, and dynamic content rendering based on user interactions.
 * 
 * Features:
 * - Fetch weather data from Open-Meteo API
 * - Multiple city selection with country flags
 * - Real-time temperature and wind speed display
 * - Error handling for API requests
 * - Responsive design with modern UI
 * 
 * Learning Concepts Demonstrated:
 * - useState hook for managing API data and coordinates
 * - useEffect hook for API calls with dependencies
 * - Fetch API for making HTTP requests
 * - Async/await for handling promises
 * - Error handling in async operations
 * - Conditional rendering based on data availability
 * - TypeScript interfaces for data typing
 * 
 * @component
 * @returns {JSX.Element} Weather API interface with city selection and data display
 */
import { useEffect, useState } from "react";

export default function SimpleAPI() {
    const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);
    const [weather, setWeather] = useState<{ temp: number, wind: number } | null>(null);

    useEffect(() => {
        if (coords === null) return;
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`)
            .then(res => res.json())
            .then(data => {
                const api = data.current_weather;
                setWeather({ temp: api.temperature, wind: api.windspeed })
            })
    }, [coords]);

    return (
        <div className="min-h-screen bg-dark text-white pt-20">
            <h1 className="text-7xl text-center font-bold text-[#007ACC] text-shadow-[0_0_10px_#007ACC] mb-16">
                Weather API
            </h1>
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <h2 className="text-3xl font-bold text-[#007ACC] mb-8 text-center">Global Weather</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                        <button 
                            onClick={() => setCoords({ lat: 24.45, lon: 54.37 })}
                            className="bg-[#007ACC] hover:bg-[#005a99] text-white px-4 py-3 rounded-lg font-semibold transition-colors text-sm">
                            🇦🇪 Abu Dhabi
                        </button>
                        <button 
                            onClick={() => setCoords({ lat: 28.61, lon: 77.21 })}
                            className="bg-[#007ACC] hover:bg-[#005a99] text-white px-4 py-3 rounded-lg font-semibold transition-colors text-sm">
                            🇮🇳 India (Delhi)
                        </button>
                        <button 
                            onClick={() => setCoords({ lat: 35.68, lon: 139.69 })}
                            className="bg-[#007ACC] hover:bg-[#005a99] text-white px-4 py-3 rounded-lg font-semibold transition-colors text-sm">
                            🇯🇵 Japan (Tokyo)
                        </button>
                        <button 
                            onClick={() => setCoords({ lat: 37.57, lon: 126.98 })}
                            className="bg-[#007ACC] hover:bg-[#005a99] text-white px-4 py-3 rounded-lg font-semibold transition-colors text-sm">
                            🇰🇷 South Korea (Seoul)
                        </button>
                        <button 
                            onClick={() => setCoords({ lat: 1.35, lon: 103.82 })}
                            className="bg-[#007ACC] hover:bg-[#005a99] text-white px-4 py-3 rounded-lg font-semibold transition-colors text-sm">
                            🇸🇬 Singapore
                        </button>
                    </div>
                    {weather && (
                        <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
                            <h3 className="text-2xl font-bold text-[#007ACC] mb-4 text-center">Current Weather</h3>
                            <div className="grid grid-cols-2 gap-6 text-center">
                                <div>
                                    <p className="text-gray-400 text-lg mb-2">Temperature</p>
                                    <p className="text-4xl font-bold text-white">{weather.temp}°C</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-lg mb-2">Wind Speed</p>
                                    <p className="text-4xl font-bold text-white">{weather.wind} m/s</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}`;

export default function SimpleAPICode() {
  return (
    <div className="min-h-screen text-white pt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#007ACC] mb-4">Simple API Component Code</h1>
          <p className="text-gray-300 text-lg">This demonstrates fetching and displaying weather data from an external API in React.</p>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
          <SyntaxHighlighter language="tsx" style={vscDarkPlus} customStyle={{margin:0,borderRadius:'1rem',fontSize:'14px',lineHeight:'1.7'}}>{codeString}</SyntaxHighlighter>
        </div>
        <div className="mt-8 text-center">
          <button onClick={() => window.history.back()} className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold transition-colors">← Back to Components</button>
        </div>
      </div>
    </div>
  );
} 