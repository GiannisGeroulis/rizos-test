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
