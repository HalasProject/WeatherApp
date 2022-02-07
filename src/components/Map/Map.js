import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import './Map.scss';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import { useEffect, useRef, useState } from "react";
function ChangeView({ center, zoom}) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

export default function Map({lat,lng,data}){
    const [map, setMap] = useState();
    const [refReady, setRefReady] = useState(false);
    let popupRef = useRef();

    useEffect(() => {
        if (refReady) {
            popupRef.openOn(map);
        }
    }, [refReady, map]);

    return (<div>
        <MapContainer className="h-screen w-full" center={[lat,lng]} zoom={13}  whenCreated={setMap}>
            <ChangeView center={[lat,lng]} /> 
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker  icon={new Icon({iconUrl: markerIconPng, iconSize: [40, 65], iconAnchor: [20, 0]})} position={[lat,lng]}>
                <Popup ref={(r) => { popupRef = r; setRefReady(true);}} >
                <span class="text-3xl text-center">{Math.floor(data?.current.temp ?? 0 ) }°C</span> <br /> <span class="text-2xl capitalize">{data?.current?.weather[0].description}</span>
                </Popup>
            </Marker>
        </MapContainer>
    </div>)
}