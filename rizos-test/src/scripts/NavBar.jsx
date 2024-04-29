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
import { CircleUserRound } from "lucide-react";
import supabase from "./Login";
import { DialogDemo } from "./DialogLogarismos";
import { useEffect, useState } from "react";
import { DialogExit } from "./DIalogExit";
import { useNavigate } from "react-router-dom";


export function NavBar() {
    const navigate = useNavigate();
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

    
      


    return (
        <>

        <div className="bg-opacity-90 fixed inset-x-0 top-4 z-[2] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent bg-white py-2 pl-8 pr-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
           
            
           
            
            <Button variant="link" className="hover:text-emerald-600  text-black h-auto">ΑΝΕΒΑΣΜΑ</Button>
            <Button variant="link" className=" bg-gradient-to-tr from-slate-500 to-emerald-500  rounded-full center text-black font-semi-bold h-auto">ΣΥΝΔΕΣΗ</Button>
            <DropdownMenu >
            <DropdownMenuTrigger className=" ">
            <Button variant="link" className=" hover:text-emerald-700  text-slate-800 h-auto  "><CircleUserRound/>
            <IoIosArrowDown/></Button> 
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white bg-opacity-90" side="bottom" sideOffset="1">
            {console.log(email  )}
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