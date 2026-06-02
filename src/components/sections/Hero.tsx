"use client"

import Link from 'next/link'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Award, Building2, CheckCircle, Users } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

function AnimatedCounter({
  value,
  suffix = '',
  label,
  icon: Icon,
}: {
  value: number
  suffix?: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const start = performance.now()

          function animate(current: number) {
            const elapsed = current - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * value))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center">
      <Icon className="mx-auto mb-2 h-8 w-8 text-primary" />
      <div className="text-3xl font-bold text-white md:text-4xl">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-gray-400">{label}</div>
    </div>
  )
}

export default function Hero() {
  const stats = [
    { value: 15, suffix: '+', label: 'Years Experience', icon: Award },
    { value: 250, suffix: '+', label: 'Projects Completed', icon: Building2 },
    { value: 200, suffix: '+', label: 'Happy Clients', icon: CheckCircle },
    { value: 12, suffix: '', label: 'Team Members', icon: Users },
  ]

  return (
    <section className="relative flex min-h-[90vh] items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30" />
      <div className="relative container z-10 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-6 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary">
              Trusted Builders in Bellville, Cape Town
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-4xl font-bold leading-tight text-white lg:text-6xl"
          >
            Building Your Vision,{' '}
            <span className="text-primary">Brick by Brick</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-gray-300"
          >
            Kelvin Construction is your trusted partner for quality residential and
            commercial construction in Cape Town. From new builds to renovations, we
            deliver excellence on every project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="xl">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Link href="/projects">View Our Work</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 rounded-2xl bg-white/10 p-6 backdrop-blur-sm md:grid-cols-4 md:gap-8 md:p-8"
        >
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
