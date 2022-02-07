import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async'
import reportWebVitals from './reportWebVitals';
import "./index.scss";
import Router from './routes';
import { BrowserRouter } from 'react-router-dom';
import { WeatherDataContextProvider } from './WeatherDataContext';

ReactDOM.render(
  <HelmetProvider>
    <BrowserRouter>
      <WeatherDataContextProvider>
        <Router />
      </WeatherDataContextProvider>
    </BrowserRouter>
  </HelmetProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
