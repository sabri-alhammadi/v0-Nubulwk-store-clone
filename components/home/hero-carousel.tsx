"use client"

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight, Sparkles, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { heroSlides } from '@/lib/data'

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: 'rtl' }, [
    Autoplay({ delay: 6000 }),
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
    <section className="relative overflow-hidden bg-foreground">
      <div ref={emblaRef}>
        <div className="flex">
          {heroSlides.map((slide, index) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-foreground/95 via-foreground/70 to-foreground/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                
                {/* Decorative elements */}
                <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4">
                    <AnimatePresence mode="wait">
                      {selectedIndex === index && (
                        <motion.div
                          key={slide.id}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.5 }}
                          className="max-w-2xl"
                        >
                          <motion.span 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground text-sm font-bold px-4 py-2 rounded-full mb-6 shadow-lg"
                          >
                            <Sparkles className="h-4 w-4" />
                            {slide.subtitle}
                          </motion.span>
                          
                          <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight text-balance"
                          >
                            {slide.title}
                          </motion.h1>
                          
                          <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-background/90 text-lg md:text-xl mb-8 leading-relaxed"
                          >
                            {slide.description}
                          </motion.p>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                          >
                            <Button size="lg" className="text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/25 group" asChild>
                              <Link href={slide.buttonLink}>
                                {slide.buttonText}
                                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                              </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl bg-background/10 border-background/30 text-background hover:bg-background/20 backdrop-blur-sm" asChild>
                              <Link href="/contact">
                                تواصل معنا
                              </Link>
                            </Button>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="pointer-events-auto">
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full h-12 w-12 bg-background/20 backdrop-blur-md border-0 text-background hover:bg-background/30 shadow-xl"
            onClick={scrollNext}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="pointer-events-auto">
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full h-12 w-12 bg-background/20 backdrop-blur-md border-0 text-background hover:bg-background/30 shadow-xl"
            onClick={scrollPrev}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className="relative h-3 rounded-full overflow-hidden transition-all duration-300"
            style={{ width: index === selectedIndex ? '2rem' : '0.75rem' }}
          >
            <div className="absolute inset-0 bg-background/30 backdrop-blur-sm" />
            {index === selectedIndex && (
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 6, ease: "linear" }}
                style={{ transformOrigin: 'right' }}
              />
            )}
            {index !== selectedIndex && (
              <div className="absolute inset-0 bg-background/50" />
            )}
          </button>
        ))}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
