import { MapContainer , Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button";
import { CarouselDemo } from "./Carousel";
import { Icon,divIcon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import supabase from "./Login";
import { useState ,useEffect } from "react";
import { custom } from "zod";
import { useNavigate } from "react-router-dom";
import { data } from "autoprefixer";    

const customIcon = new Icon({
    iconUrl: require("../assets/marker-icon.png"),
    iconSize: [40,40]

  })


export function Map () {
    
    const navigate= useNavigate();

    
    const createClusterCustomIcon = function (cluster) {
        return L.divIcon({
          html: `<div style="background-color:#34d399;height:2.4rem;width:2.4rem;border-radius:50%;transform:translate(-25%,-25%);display:flex;justify-content:center;align-items:center;font-weight:200;font-size:2.0rem;color:black;font-family:Monospace;">${cluster.getChildCount()}</div>`,
          // customMarker is the class name in the styles.css file
          className: "customMarker",
          iconSize: L.point(30, 30, true)
        });
      };
   const [fetchError,setFetchError] = useState(null)
   const [akinita,setAkinita] = useState(null)
  
   useEffect(() => {
    const fetchAkinita = async () => {
        
    let { data , error } = await supabase
        .from('akinito')
        .select('*')


            if(error){
                setFetchError("asdfasd")
                setAkinita(null)
                console.log(error)
            }
            if (data){
                setAkinita(data)
                setFetchError(null)
                console.log("lel")
            }
            if (!data)
            {
                console.log("lmao")
            }
    }
    fetchAkinita()
    
   }, [])


    return (
        <>
        
        <MapContainer  zoomControl={false} attributionControl={false} center={[38.046760019263566, 23.806316278589556]} zoom={14} className="w-full h-full fixed left-0 top-0 z-0 filter ">
            <TileLayer    
        
            url='https://tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token={accessToken}'
            
            accessToken='PSCZypC2UTOKN8ZJkSz7ubwLlEWDQG8RSFRa2W2jsXl0t8ugcQp4A5ZDZ1mYK2GF'
            className="filter hue-rotate-[8deg]"/>
            <MarkerClusterGroup showCoverageOnHover={false} chunkedLoading={true} removeOutsideVisibleBounds={true} animate={true} iconCreateFunction={createClusterCustomIcon}>
           {akinita && (
                akinita.map(akinito => (
                    <Marker position={[akinito.lat, akinito.lng]} icon={customIcon}>
                            <Popup>
                                <CarouselDemo>
                                    
                                </CarouselDemo>
                            </Popup>
                    </Marker>
                    
                   
                    
                ))
           )}
          </MarkerClusterGroup>
        </MapContainer>
        
        
        
        </>
    )
    
}