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





export function Aggelia(id,{setToggleAggelia},akinito){
  
   const [session,setSession]=React.useState(null)
  const navigate = useNavigate();
  
 const handleClick = () => {
  id.setToggleAggelia(false)
 }



  return (
  
  <div className="z-[5001] bg-black   bg-opacity-40 fixed left-0 top-0  h-screen w-screen  " >
        <div className="z-[5001]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <Card className="w-[350px]   ">
        <Button className="fixed right-0 bg-white text-black hover:bg-white" onClick={handleClick} ><MdOutlineCancel className="h-5 w-5"/></Button>
        
        <CardHeader className="">
            <CardTitle className="font-bold">Σύνδεση</CardTitle>
            <CardDescription className=" text-slate-800 font-semibold">Σύνδεση με το λογαριασμό σας ή εγγραφή</CardDescription>
        </CardHeader>
       
        <CardContent >
          
          <h1>{id.akinito.id}</h1>
        <Gallery/>
   
        </CardContent>
        
      
        </Card>
        </div>
    </div>)
    
  
}
