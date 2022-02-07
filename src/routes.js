import { Navigate, useRoutes } from "react-router-dom";
import Home from './pages/Home/Home';
import Weather from './pages/Weather/Weather'

export default function Router() {
    return useRoutes([
      {
        path: '/',
        children: [
          { element: <Home title="Home | WeatherApp" />, index: true },
          { path: 'search', element: <Weather /> },
        ],
      },
      { path: '*', element: <Navigate to="/" replace /> },
    ]);
  }
  