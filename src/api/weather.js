import { OPEN_WEATHER_API_KEY } from "../environment";

export default function WeatherInstance(lat,lng,cnt = 16){
    
    this.lat = lat;
    this.lng = lng;
    this.cnt = cnt;
    
    this.getDailyWeather = async function(){
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&lang=fr&exclude=hourly,minutely,alerts&units=metric&appid=${OPEN_WEATHER_API_KEY}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

}