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
import Autoplay from "embla-carousel-autoplay"


export function CarouselDemo(images) {
 
  console.log(images.images)
  return (
    <Carousel
      
      opts={{
      loop:false,
      dragGree:true
      }}className="lg:w-96 lg:h-96  ">
     <CarouselContent >
     {images.images.map((image,index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square h-full items-center justify-center p-6">
                <img className="bg-white w-full "  src={image.src}></img>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="bg-transparent border-none hover:bg-white/60 h-6 w-6"></CarouselNext>
      <CarouselPrevious className="bg-transparent border-none hover:bg-white/60 h-6 w-6"></CarouselPrevious>
    </Carousel>
  )
}