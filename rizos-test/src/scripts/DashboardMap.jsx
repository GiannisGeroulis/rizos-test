import { MapContainer , Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button";
import { CarouselDemo } from "./Carousel";
import { Icon } from "leaflet";
import {
    setKey,
    setDefaults,
    setLanguage,
    setRegion,
    fromAddress,
    fromLatLng,
    fromPlaceId,
    setLocationType,
    geocode,
    RequestType,
  } from "react-geocode";

import MarkerClusterGroup from "react-leaflet-cluster";


export function DashboardMap (lat , lng) {
    
    

    


    return (
        <MapContainer zoomControl={false} attributionControl={false} center={[38.046760019263566, 23.806316278589556]} zoom={14} className="w-full mx-auto h-96 static rounded-lg ">
         <TileLayer    
        
        url="https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token={accessToken}"
  
        accessToken='PSCZypC2UTOKN8ZJkSz7ubwLlEWDQG8RSFRa2W2jsXl0t8ugcQp4A5ZDZ1mYK2GF'/>
        </MapContainer>
    )
}