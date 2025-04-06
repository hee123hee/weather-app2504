import React from 'react';
import Button from "react-bootstrap/Button";

const WeatherButton = ({cities, setCity, handleCityChange}) => {

    return (
        <div className='button-area'>
            <Button
                variant={`${setCity === null ? "light" : "dark"}`}
                onClick={() => {
                    handleCityChange("current")
                }}>
                Current Location

            </Button>

            {cities.map((item, index) => (
                <Button
                    variant={`${setCity === item ? "light" : "dark"}`}
                    key={index}
                    onClick={() => setCity(item)}>
                    {item}
                </Button>
            ))}
        </div>
    );
};

export default WeatherButton;