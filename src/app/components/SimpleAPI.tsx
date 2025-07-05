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
        <div>
            <button onClick={() => setCoords({ lat: 24.45, lon: 54.37 })}>🇦🇪 Abu Dhabi</button>
            <button onClick={() => setCoords({ lat: 28.61, lon: 77.21 })}>🇮🇳 India (Delhi)</button>
            <button onClick={() => setCoords({ lat: 35.68, lon: 139.69 })}>🇯🇵 Japan (Tokyo)</button>
            <button onClick={() => setCoords({ lat: 37.57, lon: 126.98 })}>🇰🇷 South Korea (Seoul)</button>
            <button onClick={() => setCoords({ lat: 1.35, lon: 103.82 })}>🇸🇬 Singapore</button>

            {weather && (
                <div>
                    <p>Temp: {weather.temp}°C</p>
                    <p>Wind: {weather.wind} m/s</p>
                </div>
            )}
        </div>
    );
}