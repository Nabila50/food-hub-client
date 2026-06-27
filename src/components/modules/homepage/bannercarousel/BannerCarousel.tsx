"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const images = [
  "https://i.ibb.co/s9ysCx7h/soups-2.jpg",
  "https://i.ibb.co/Z67kx8Zw/resturant-pic.jpg",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200",
]

export default function BannerCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
    })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-6xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="p-0">
                <img
                  src={image}
                  alt={`Banner ${index + 1}`}
                  className="w-7xl h-[350px] object-cover"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}