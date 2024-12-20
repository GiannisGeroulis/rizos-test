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
      plugins={[
        Autoplay({
          delay:1500,
        }),
      ]}
      opts={{
      loop:true,
      dragGree:true
      }}className="w-80 " >
     <CarouselContent >
     {images.images.map((image,index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className="">
                <CardContent className=" aspect-video  items-center justify-center p-1">
                <img className="bg-white w-full h-full "  src={image.image.src}></img>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
    </Carousel>
  )
}