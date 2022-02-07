import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default function WeatherDay({data}) {
    return (<>
      <div className="bg-gray-500 border-2 border-gray-300 shadow-lg h-full rounded-lg flex justify-between p-8 flex-col py-20 text-center text-gray-200 text-md md:text-5xl ">
        <p className="mb-2 capitalize">{format(data.dt * 1000,'EEEE',{locale:fr})}</p>
        <img className="w-32 self-center" src={'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'}/>
        <p className="text-sm md:text-3xl whitespace-nowrap">{Math.floor(data.feels_like.day)}°C | {Math.floor(data.feels_like.morn)}°C</p>
        </div>
    </>)
}