import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { IoIosArrowDown } from "react-icons/io";
import MarkerClusterGroup from "react-leaflet-cluster";
import { CircleUserRound, Home } from "lucide-react";
import supabase from "./Login";
import { DialogDemo } from "./DialogLogarismos";
import { useEffect, useState } from "react";
import { DialogExit } from "./DIalogExit";
import { useNavigate } from "react-router-dom";
import { HomeIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
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
  setDefaults({
    key: "AIzaSyCc0hRFnqdTN3KNB6vwc9_qWttkhjsGAmE", // Your API key here.
    language: "en", // Default language for responses.
    region: "es", // Default region for responses.
  });  
import { FaSearch } from "react-icons/fa";


export function NavBar({map}) {

    
    const navigate = useNavigate();
    const [lat,setLat]=useState(null)
    const [lng,setLng]=useState(null)
    const [search,setSearch]=useState("")
    const [user,setUser]=useState(null)
    const [email,setEmail]=useState("")
    useEffect(() => {
        //Runs only on the first render
        async function getUser () {
            const { data: { user } } = await supabase.auth.getUser()
            if(user===null)
            {
                navigate("/")
            }
            setEmail(user)
            
        }
        getUser()
       
      }, []);

    
    function handleDashboard(){
        navigate("/dashboard")
    }
    function handleHome(){
        navigate("/home")
    }
    function handleChange(event){
        setSearch(event.target.value)
    }
    
    function handleKeyDown(event){
        if(event.key === "Enter"){
            handleSubmit();
        }
    }
    async function handleSubmit(){
        const response = await fromAddress(search);

            const { lat, lng } = response.results[0].geometry.location;
            setLng(lng)
            setLat(lat)
            console.log(lat,lng,search)
            map.flyTo({lng,lat,},14)
            
            
        }
        

        
    

    return (
        <>

        <div className="bg-opacity-90  fixed inset-x-0 top-4 z-[2] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent bg-white py-2 pl-8 pr-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
           
            
           
            <Input placeholder="Πληκτρολόγησε περιοχή" onKeyDown={handleKeyDown} onChange={handleChange} className="rounded-full bg-gray-50  "></Input>
            <Button onClick={handleSubmit} className="rounded-full hover:bg-gray-200 bg-gray-100 "><FaSearch className="text-black"></FaSearch></Button>
            <Button variant="link" onClick={handleDashboard}  className="hover:text-[#FFE44A] text-black h-auto">ΑΝΕΒΑΣΜΑ</Button>
            <Button variant="link" onClick={handleHome}className=" bg-gradient-to-tr from-gray-400 to-[#FFE44A]  rounded-full center text-black font-semi-bold h-auto"><HomeIcon className="text-slate-700"></HomeIcon></Button>
            <DropdownMenu >
            <DropdownMenuTrigger className=" ">
            <Button variant="link" className=" hover:text-[#FFE44A]  text-slate-700 h-auto  "><CircleUserRound/>
            <IoIosArrowDown/></Button> 
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white bg-opacity-90" side="bottom" sideOffset="1">
            
                <div className="flex flex-col justify-items-start">
                <DialogDemo email={email}></DialogDemo>
                <DialogExit user={email}></DialogExit>
               
                </div>
            </DropdownMenuContent>
            </DropdownMenu>
            
          

        </div>
        </>
    )
}