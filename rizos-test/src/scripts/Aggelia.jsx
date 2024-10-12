import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { FaFacebook , FaApple } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from "react-router-dom"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { Gallery } from "react-grid-gallery";
import supabase from "./Login"
import { useEffect , useState} from "react"
import { ImageGallery } from "react-image-grid-gallery";
import { CarouselDemo } from "./CarouselAG"





export function Aggelia(id){
  const [rimages]=useState([])
   const [session,setSession]=React.useState(null)
  const navigate = useNavigate();
  
 const handleClick = () => {
  id.setToggleAggelia(false)
  id.map.doubleClickZoom.enable();
  id.map.dragging.enable();
  id.map.scrollWheelZoom.enable();
  id.map.keyboard.enable();
 }
 




  return (
  
        <div className="z-[5001]  bg-black bg-opacity-40   fixed  h-screen w-screen  ">
         
        <Card className="w-[95%]  h-[85%] mx-auto top-20   bg-white   relative     ">
        <Button className=" bg-white w-[3%]   p-0 absolute right-0 text-black hover:bg-white  " onClick={handleClick} ><MdOutlineCancel className="h-5 w-5"/></Button>
        
        <CardContent className=" bg-blue-300 w-full h-fit "  >
        
         {
          
         id.images.map(image => {
         
          if(rimages.length<id.rlength)
         {
          


          
          rimages.push(image.image)}
          
         })}
         {console.log(rimages)}

          <h1>{id.akinito.id}</h1>
          <div className=" bg-red-400 h-full w-full  ">
          
          <CarouselDemo images={rimages}></CarouselDemo>
          </div>          
         
        </CardContent>
        
      
        </Card>
        </div>
  )
    
  
}
