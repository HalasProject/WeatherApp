import { createContext, useState } from "react";


const WeatherDataContext = createContext();

const WeatherDataContextProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(undefined);
    
    return (
        <WeatherDataContext.Provider value={{ weatherData, setWeatherData }}>
        {children}
        </WeatherDataContext.Provider>
    );
};

export { WeatherDataContext, WeatherDataContextProvider };