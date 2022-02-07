import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Map from "../../components/Map/Map";
import SearchBar from '../../components/Searchbar/Searchbar';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import WeatherDay from "../../components/WeatherDay/WeatherDay";
import { WeatherDataContext } from "../../WeatherDataContext";
import './Weather.scss';

export default function Weather() {

    const { weatherData } = useContext(WeatherDataContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (weatherData == undefined) {
            navigate("/");
        }
      }, []);

    return (<>
        <Helmet>
            <title>{weatherData?.name ?? 'Search'} | WeatherApp</title>
        </Helmet>
        <div className="flex flex-row h-screen bg-slate-200">
            <div className="hidden lg:block w-5/12 h-screen">
                {weatherData ? <Map lat={weatherData.lat} lng={weatherData.lon} data={weatherData}/> : ''}
            </div>
            <div className="weather-app weather-app bg-no-repeat bg-bottom w-full lg:w-7/12 flex flex-col px-16 justify-center bg-inherit z-50">
                <div className="h-1/6 flex justify-center items-center">
                    <SearchBar />
                </div>
                <div className="h-2/6 flex justify-center items-center">
                  {weatherData ? <WeatherCard data={weatherData}/> : ''}
                </div>
                <div className="h-3/6 flex justify-between items-center py-12 overflow-y-auto space-x-6 mb-4">
                  {weatherData?.daily.map((data,index) => <WeatherDay key={index} data={data}/>)}
                </div>
               
            </div>
        </div>
    </>)
}