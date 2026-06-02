"use client"

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Star, Quote } from 'lucide-react'
import type { Testimonial } from '@/data/testimonials'
import { useEffect, useState } from 'react'

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export default function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [api, setApi] = useState<any>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!api || isHovering) return
    const interval = setInterval(() => {
      api.scrollNext()
    }, 4000)
    return () => clearInterval(interval)
  }, [api, isHovering])

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-surface md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Don&apos;t just take our word for it — hear from the homeowners and
            businesses we&apos;ve worked with across Cape Town.
          </p>
        </div>

        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="mx-auto max-w-6xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full">
                    <CardContent className="flex h-full flex-col p-6">
                      <Quote className="mb-3 h-6 w-6 text-primary/30" />
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-5">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="mb-3 flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating
                                ? 'fill-primary text-primary'
                                : 'fill-gray-200 text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-3 border-t border-gray-100 pt-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-surface">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {testimonial.role}
                            {testimonial.company && (
                              <> &middot; {testimonial.company}</>
                            )}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
