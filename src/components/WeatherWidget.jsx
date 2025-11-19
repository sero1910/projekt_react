// src/components/WeatherWidget.jsx

import React, { useState, useEffect } from 'react';

// 🛑 Wklej tutaj swój klucz API z OpenWeatherMap!
const API_KEY = '0cb13b4cee97b40b0e6346cdc45ac4a0'; // Używam Twojego klucza dla przykładu
const CITY = 'Warszawa'; // Ustaw miasto

const WeatherWidget = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // UWAGA: Poprawiona składnia: używamy klamer {}
    useEffect(() => {
        /*if (!API_KEY || API_KEY === '0cb13b4cee97b40b0e6346cdc45ac4a0') {
            setError("Błąd: Użyj własnego klucza API, lub klucz jest nieaktywny.");
            setLoading(false);
            return;
        }
*/
        const fetchWeather = async () => {
            try {
                // Zapytanie do OpenWeatherMap
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
                setError("Nie udało się pobrać danych pogodowych.");
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    // --- RENDEROWANIE STANU ---

    if (loading) {
        return <div className="weather-container">Ładowanie pogody...</div>;
    }

    if (error) {
        return <div className="weather-container text-danger">❌ {error}</div>;
    }

    if (!weather) {
        return null; // Nic nie wyświetlaj, jeśli dane są puste
    }

    // Ekstrakcja danych
    const temp = Math.round(weather.main.temp);
    const description = weather.weather[0].description;
    const iconCode = weather.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
    
    return (
        <div className="weather-container my-4 p-3 bg-light rounded shadow-sm">
            <h5 className="mb-3 text-center">☀️ Aktualna pogoda w {CITY}</h5>
            <div className="d-flex justify-content-center align-items-center">
                <img src={iconUrl} alt={description} className="weather-icon me-2" />
                <span className="fs-3 fw-bold me-3">{temp}°C</span>
                <span className="text-muted text-capitalize">{description}</span>
            </div>
        </div>
    );
};

export default WeatherWidget;