import React from 'react';

const WeatherBox = ({weather}) => {
    console.log("weather?",weather)
    return (
        <div className="weather-box">
            <div>{weather?.name}</div>
            <h2>
                {Math.trunc(weather?.main.temp)}°C / {Math.trunc(weather?.main.temp * (9 / 5) + 32)}°F
            </h2>
            <div>{weather?.weather[0].description}</div>
        </div>
    );
};

export default WeatherBox;