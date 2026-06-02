"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface CTABannerProps {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
}

export default function CTABanner({
  title,
  subtitle,
  buttonText,
  buttonLink,
}: CTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-hover py-16 text-white md:py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="text-center lg:text-left">
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">{title}</h2>
            <p className="text-white/80">{subtitle}</p>
          </div>
          <Button asChild variant="secondary" size="xl" className="shrink-0">
            <Link href={buttonLink}>
              {buttonText}
              <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
