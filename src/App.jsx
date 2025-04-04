// 1. 앱 실행 즉시 현재 위치 기반 날씨 정보 보이기 (지역, 섭씨 온도, 화씨 온도, 날씨 상태)
// 2. 5개 버튼 (1개는 현재 위치, 4개는 지역)
// 3. 버튼을 클릭하면 그에 맞는 날씨 정보 보이기
// 4. 정보를 가져오는 동안 로딩 중 표시

import React, {useEffect} from 'react';
import './App.css';
import WeatherBox from "./component/WeatherBox";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from "./component/WeatherButton.jsx";

const App = () => {
    const getCurrentLocation = () => {
        // console.log("getCurrentLocation")
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude
            let lon = position.coords.longitude
            getWeatherByCurrentlocation(lat,lon);
        });
    };
    const getWeatherByCurrentlocation = async(lat,lon) =>{
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c7c7b34b6a15f7f79d2a5967c5800734`
        let response = await fetch(url)
        let data = await response.json();
        console.log(data)
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return(
    <div>
        <div className="container">
        <WeatherBox />
        <WeatherButton />
        </div>
    </div>
);
};

export default App;