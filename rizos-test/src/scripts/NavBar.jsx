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





export function NavBar() {
    



    return (
        <>
      
        <div className="bg-opacity-90 fixed inset-x-0 top-4 z-[4999] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent bg-white py-2 pl-8 pr-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
           
            
            
            <Button variant="link" className="hover:text-emerald-600  text-black h-auto">ΑΝΑΘΕΣΗ</Button>
            <Button variant="link" className=" bg-gradient-to-tr from-slate-500 to-emerald-500  rounded-full center text-black font-semi-bold h-auto">ΣΥΝΔΕΣΗ</Button>
            <DropdownMenu >
            <DropdownMenuTrigger className=" ">
            <Button variant="link" className=" hover:text-emerald-700  text-slate-800 h-auto  "><CircleUserRound/>
            <IoIosArrowDown/></Button> 
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white bg-opacity-90" side="bottom" sideOffset="1">
                <div className="border-b">
                    
                    
                </div>
                <DropdownMenuItem >Λογαριασμός</DropdownMenuItem>
                <DropdownMenuItem >Ρυθμίσεις</DropdownMenuItem>
                <DropdownMenuItem >Αποσύνδεση</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
          

        </div>
        </>
    )
}