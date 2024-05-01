import { MapContainer , Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button";
import { CarouselDemo } from "./Carousel";
import { Icon,divIcon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import supabase, { Login } from "./Login";
import { useState ,useEffect } from "react";
import { custom } from "zod";
import { useNavigate } from "react-router-dom";
import { data } from "autoprefixer";    
import { Aggelia } from "./Aggelia";
import Autoplay from "embla-carousel-autoplay"
import { Gallery } from "react-grid-gallery";
import { getImageSize, useImageSize } from "react-image-size";
const customIcon = new Icon({
    iconUrl: require("../assets/marker-icon.png"),
    iconSize: [40,40],
    

  })



export function Map () {
    const [dimensions,setDimensions]=useState(null)
    const [rlength,setRlength]=useState(null)
    const [rimagesURL,setRimagesURL]=([])
    const [images,setImages]=useState([])
    const [imagesURL,setImagesURL]=useState([])
    const [ids,setIds]=useState([]) 
    const [toggleAggelia,settoggleAggelia]=useState(false)
    const handleStateChange = (value) => {
        settoggleAggelia(value)
    }
    const addnewImage = (image) => {
        setImages(prevArray=> [
            ...prevArray,
            {image}
        ]);
    };
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
   const [rakinito,setRakinito] = useState(null)
   
   
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
   async function listImagesURL(id)
   {
        
       if(imagesURL.length<ids.length)
       {
       
       const {data,error} = await supabase
           .storage
           .from("asdf")
           .list(id);
       imagesURL.push(data)
       }
      
       

   }
   
   async function listRimagesURL(id)
   {
    
    const {data,error} = await supabase
        .storage
        .from("asdf")
        .list(id);
       
        data.map(url => {
            
            imagesURL.map(rurl => {
                rurl.map(lurl => {
                    if (lurl.name === url.name)
                    {
                        downloadImages(url.name,id)
                    }
                })
                
        }
       
    )

    setRlength(data.length)
}

        )
        

   }
   async function downloadImages(url,id)
   {
    const {data,error} = await supabase
        .storage
        .from("asdf")
        .getPublicUrl(id + "/" + url
            
        )
        
    
    
    {
    
        
    
    const image = {src:data.publicUrl,width:1920,height:1080,alt:"",customOverlay: (
        <div className=" pt-40">
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    

   addnewImage(image)
    }
    
   }
useEffect(() => {
    if((akinita!==null) && ids.length<akinita.length)
    {
    akinita.map(akinito => (
        ids.push(akinito.id)
    ))}
    else{
    ids.map(id => (
        
        listImagesURL(id)
        
    ))
    }
    
  
    
})



   const [id,setid] = useState(null)
   

    return ( 
        <>
        
        <MapContainer  zoomControl={false} attributionControl={false} center={[38.046760019263566, 23.806316278589556]} zoom={14} className="w-full h-full fixed left-0 top-0 z-0 filter ">
            <TileLayer    
        
           // url='https://tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token={accessToken}'
           url="https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token={accessToken}"
            accessToken='PSCZypC2UTOKN8ZJkSz7ubwLlEWDQG8RSFRa2W2jsXl0t8ugcQp4A5ZDZ1mYK2GF'
            className="filter hue-rotate-[8deg]"/>
            <MarkerClusterGroup showCoverageOnHover={false} chunkedLoading={true} removeOutsideVisibleBounds={true} animate={true} iconCreateFunction={createClusterCustomIcon}>
           
           {akinita && (
                akinita.map(akinito => (
                    
                    <Marker 
                    
                    position={[akinito.lat, akinito.lng]} 
                    icon={customIcon}
                    eventHandlers={{
                        mouseover: (event) => event.target.openPopup(),
                        mouseout: (event) => event.target.closePopup(),
                        click: (event) => {
                            images.length=0
                            settoggleAggelia(!toggleAggelia)
                            setid(akinito.id)
                            
                            setRakinito(akinito)
                            
                            listRimagesURL(akinito.id)
                            

                        }
                    }
                }>
                
              
          
                
             
                            <Popup  
                                autoPan={false}
                               
                                
                                >
                               
                               
                            </Popup>
                    </Marker>
                    
                   
                    
                ))
           )}
           
           { toggleAggelia && (<Aggelia  
                      setToggleAggelia={settoggleAggelia} akinito={rakinito} images={images} rlength={rlength} >
                        
                      </Aggelia>)}
          </MarkerClusterGroup>
        </MapContainer>
        
        
        
        
        
        </>
    )
    
}