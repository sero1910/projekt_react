import React, { useState, useEffect } from 'react';

// Twój klucz API
const API_KEY = '0cb13b4cee97b40b0e6346cdc45ac4a0'; 
const CITY = 'Lublin'; // Upewnij się, że tu jest Lublin

const WeatherWidget = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`
                );

                if (!response.ok) {
                    throw new Error(`Błąd HTTP: ${response.statusText}`);
                }

                const data = await response.json();
                setWeather(data);

            } catch (err) {
                console.error("Błąd pobierania pogody:", err);
                setError("Nie udało się pobrać danych.");
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    // --- RENDEROWANIE ---

    // Klasy dla kontenera, żeby był równy i ładny:
    // h-100 -> rozciągnij na pełną wysokość rodzica
    // d-flex flex-column justify-content-center -> wyśrodkuj zawartość
    const containerClasses = "weather-container p-4 bg-light rounded shadow-sm h-100 d-flex flex-column justify-content-center align-items-center";

    if (loading) {
        return <div className={containerClasses}>Ładowanie pogody...</div>;
    }

    if (error) {
        return <div className={`${containerClasses} text-danger`}>❌ {error}</div>;
    }

    if (!weather) return null;

    const temp = Math.round(weather.main.temp);
    const description = weather.weather[0].description;
    const iconCode = weather.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // @2x dla lepszej jakości
    
    return (
        <div className={containerClasses}>
            <h5 className="mb-3 text-center fw-bold">☀️ Aktualna pogoda w {CITY}</h5>
            <div className="d-flex justify-content-center align-items-center">
                <img src={iconUrl} alt={description} className="weather-icon me-2" style={{ width: '60px', height: '60px' }} />
                <span className="display-4 fw-bold me-3">{temp}°C</span>
            </div>
            <span className="text-muted text-capitalize mt-2">{description}</span>
        </div>
    );
};

export default WeatherWidget;