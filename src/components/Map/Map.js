import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import './Map.scss';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
function ChangeView({ center, zoom}) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

export default function Map({lat,lng,data}){
  

    return (<div>
        <MapContainer className="h-screen w-full" center={[lat,lng]} zoom={14}>
            <ChangeView center={[lat,lng]} zoom={14} /> 
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={new Icon({iconUrl: markerIconPng, iconSize: [40, 65], iconAnchor: [12, 41]})} position={[lat,lng]}>
            <Popup >
            <span class="text-3xl text-center">{Math.floor(data?.current.temp ?? 0 ) }°C</span> <br /> <span class="text-2xl">{data?.current?.weather[0].description}</span>
            </Popup>
        </Marker>
    </MapContainer>
    </div>
   
    )
}