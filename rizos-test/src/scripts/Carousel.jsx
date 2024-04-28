import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react"
import supabase from "./Login"

export function CarouselDemo(images) {
  async function downloadImage(image)
  {
    console.log("patata" + image)
    const { data, error } = await supabase
      .storage
      .from('asdf')
      .download(image)
  }
  const [rimages,setRimages]=useState([]);
  if(images.images===null) {return}
  images.images.map(image => (
   downloadImage(image.image))
  )
  return (
    <Carousel opts={{
      
      loop:true,
      dragGree:true
      }}className="w-full max-w-xs">
      <CarouselContent>
        
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
