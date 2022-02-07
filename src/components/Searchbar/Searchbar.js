
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
    const [isLoading,setIsLoading] = useState(false)

    const getWeatherInfo = (lat,lng,name) => {
        let WI = new WeatherInstance(lat,lng)
        WI.getDailyWeather().then(data => {
            setWeatherData({...data,name})
            setIsLoading(false)
            if (location.pathname === '/') {
                navigate("/search");
            }
        })
    }

    const currentPosition = () => {
        setIsLoading(true);
        let options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(({coords}) => {
                getWeatherInfo(coords.latitude,coords.longitude,"Ma position")
            },(error) => {
                setIsLoading(false)
                console.error(error)}
            ,options)
        }
    }

    useEffect(() => {
        if (algolia === undefined) {
             setAlgolia(AlgoliaPlace('#search-algolia'))
        } else {
            algolia.on('change', (e) => {
                setIsLoading(true);
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
            <button disabled={isLoading} onClick={() => currentPosition()} className="my-4 lg:my-0 lg:ml-6 flex items-center justify-center whitespace-nowrap drop-shadow-md bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 px-4 border-transparent rounded-md focus:outline-0 focus:ring-0 focus:drop-shadow-lg" type="button">
                {isLoading ? <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg> : ''}
            Position Actuelle
            </button>
        </div>
       
    )
}