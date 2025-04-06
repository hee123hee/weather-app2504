// 1. 앱 실행 즉시 현재 위치 기반 날씨 정보 보이기 (지역, 섭씨 온도, 화씨 온도, 날씨 상태)
// 2. 5개 버튼 (1개는 현재 위치, 4개는 지역)
// 3. 버튼을 클릭하면 그에 맞는 날씨 정보 보이기
// 4. 정보를 가져오는 동안 로딩 중 표시

import React, {useEffect, useState} from 'react';
import './App.css';
import WeatherBox from "./component/WeatherBox";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from "./component/WeatherButton.jsx";
import ClipLoader from "react-spinners/ClipLoader";

const App = () => {
    const [loading, setLoading] = useState(false);

    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('')
    const cities = ['paris', 'new york', 'tokyo', 'seoul']
    const getCurrentLocation = () => {
        // console.log("getCurrentLocation")
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude
            let lon = position.coords.longitude
            getWeatherByCurrentlocation(lat, lon);
        });
    };
    const getWeatherByCurrentlocation = async (lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c7c7b34b6a15f7f79d2a5967c5800734&units=metric`
        setLoading(true);
        let response = await fetch(url)
        let data = await response.json();
        setWeather(data);
        setLoading(false);

    };
    const getWeatherByCity = async () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c7c7b34b6a15f7f79d2a5967c5800734&units=metric`
        setLoading(true)
        let response = await fetch(url)
        let data = await response.json()
        setWeather(data);
        setLoading(false)
    }

    useEffect(() => {
        if (city === "") {
            getCurrentLocation();
        } else {
            getWeatherByCity();
        }
    }, [city]);


    return (
        <div>
            {loading ? (
                    <div className="container">
                        <ClipLoader
                            color="#000000"
                            loading={loading}
                            size={150}
                        /></div>) :
                <div className="container">
                    <WeatherBox weather={weather}/>
                    <WeatherButton cities={cities} setCity={setCity}/>
                </div>
            }


        </div>
    );
};

export default App;