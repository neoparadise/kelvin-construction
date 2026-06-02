"use client"

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import * as icons from 'lucide-react'

interface Stat {
  value: number
  suffix?: string
  label: string
  icon: string
}

interface StatsCounterProps {
  stats: Stat[]
}

function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
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
    <span ref={ref} className="text-4xl font-bold text-white md:text-5xl">
      {count}
      {suffix}
    </span>
  )
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <section className="bg-surface py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = (icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[
              stat.icon
            ]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {Icon && <Icon className="mx-auto mb-3 h-8 w-8 text-primary" />}
                <CountUp value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
