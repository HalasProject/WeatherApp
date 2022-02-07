
import { useContext, useEffect, useState } from 'react'
import AlgoliaPlace from '../../api/algolia'
import WeatherInstance from '../../api/weather'
import { WeatherDataContext } from '../../WeatherDataContext';
import { useLocation,useNavigate } from 'react-router-dom';
import './Searchbar.scss'

export default function Searchbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const { setWeatherData } = useContext(WeatherDataContext);
    const [algolia,setAlgolia] = useState(undefined)

    const getWeatherInfo = (lat,lng,name) => {
        let WI = new WeatherInstance(lat,lng)
        WI.getDailyWeather().then(data => {
            setWeatherData({...data,name})
            if (location.pathname === '/') {
                navigate("/search");
            }
        })
    }

    const currentPosition = () => {
        let options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(({coords}) => {
                getWeatherInfo(coords.latitude,coords.longitude,"Ma position")
            },(error) => {
                console.error(error)}
            ,options)
        }
    }

    useEffect(() => {
        if (algolia === undefined) {
             setAlgolia(AlgoliaPlace('#search-algolia'))
        } else {
            algolia.on('change', (e) => {
                const {suggestion: {name,latlng: {lat,lng}}} = e
                getWeatherInfo(lat,lng,name)
            })

            algolia.on('locate',(e) =>{
                this.currentPosition();
            })
        }
    },[algolia])

    return (
        <div className="w-full flex-col lg:w-6/12 lg:flex lg:flex-row">
            <input id="search-algolia" type="text" placeholder="Rechercher une ville, une station, un pays, ..." 
            className="drop-shadow-md form-input px-4 py-3  block bg-gray-100 w-full border-transparent rounded-md focus:bg-white focus:outline-0 focus:ring-0 focus:drop-shadow-lg" />
            <button onClick={() => currentPosition()} className="my-4 lg:my-0 lg:ml-6 whitespace-nowrap drop-shadow-md bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 px-4 border-transparent rounded-md focus:outline-0 focus:ring-0 focus:drop-shadow-lg" type="button">Position Actuelle</button>
        </div>
       
    )
}