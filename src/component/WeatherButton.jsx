import React from 'react';
import Button from "react-bootstrap/Button";

const WeatherButton = ({cities, setCity}) => {
    console.log("cities?", cities)



    return (
        <div className='button-area'>
            <Button variant="success">Current Location</Button>

            {cities.map((item, index) => (
                <Button variant="warning" key={index} onClick={()=>setCity(item) }>
                    {item}
                </Button>
            ))}
        </div>
    );
};

export default WeatherButton;