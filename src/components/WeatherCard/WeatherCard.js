import './WeatherCard.scss';
import { format } from 'date-fns'
import { fr } from 'date-fns/locale';
export default function Weather({data}) {

    return (<>
        <div className="w-full bg-gray-500 border-2 border-gray-300 shadow-lg h-full rounded-lg flex-col lg:flex lg:flex-row items-center justify-between p-4 md:p-16 px-24">
            <div className="text-gray-100 text-md lg:text-4xl flex-col lg:flex lg:flex-row just text-center lg:text-left justify-start whitespace-nowrap mr-12 w-full lg:w-1/2 ">
                <img className="self-center hidden lg:block w-32 mr-4" alt="weather icon" src={'http://openweathermap.org/img/wn/' + data?.current.weather[0].icon + '@2x.png'}/>
                <div className="flex flex-col flex-nowrap">
                    <p className="text-6xl mb-3">{Math.floor(data?.current.temp ?? 0 ) }°C </p>
                    <p className="mb-2">Humidity: {data?.current.humidity ?? 'N/C'}%</p>
                    <p>Visibilité: {data ? (data.current.visibility / 1000)+ 'km' : 'N/C'}</p>
                </div>
            </div>
            <div className="text-gray-100 text-md lg:text-4xl flex flex-col flex-nowrap justify-end white w-full lg:w-1/2 text-center lg:text-left">
                <p className="text-md lg:text-6xl mb-3">{data?.name ?? 'N/C'}</p>
                <p className="mb-2 capitalize">{data?.current.dt ? format(data.current.dt * 1000,'EEEE p a',{locale:fr}) : 'N/C'}</p>
                <p className="capitalize">{data?.current?.weather[0].description ?? 'N/C'}</p>
            </div>
        </div>
    </>)
    
}