"use client"

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { heroSlides } from '@/lib/data'

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: 'rtl' }, [
    Autoplay({ delay: 5000 }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <section className="relative overflow-hidden">
      <div ref={emblaRef}>
        <div className="flex">
          {heroSlides.map((slide) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-l from-foreground/80 to-foreground/40" />
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-xl">
                      <span className="inline-block bg-secondary text-secondary-foreground text-sm font-semibold px-3 py-1 rounded mb-4">
                        {slide.subtitle}
                      </span>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4 text-balance">
                        {slide.title}
                      </h1>
                      <p className="text-background/90 text-lg mb-6">
                        {slide.description}
                      </p>
                      <Button size="lg" asChild>
                        <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full opacity-80 hover:opacity-100"
        onClick={scrollPrev}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full opacity-80 hover:opacity-100"
        onClick={scrollNext}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-primary' : 'bg-background/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
