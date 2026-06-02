"use client"

import { motion } from 'motion/react'
import ServicesGrid from '@/components/sections/ServicesGrid'
import CTABanner from '@/components/sections/CTABanner'
import { services } from '@/data/services'
import * as icons from 'lucide-react'

const serviceCategories = [
  { label: 'Construction', icon: 'Building2' },
  { label: 'Renovations', icon: 'Hammer' },
  { label: 'Finishing', icon: 'PaintBucket' },
  { label: 'Maintenance', icon: 'Tool' },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-surface py-20">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-4xl font-bold text-white md:text-5xl"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-gray-400"
          >
            From foundation to finish — we handle every aspect of your
            construction project with professionalism and precision.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {serviceCategories.map((cat, i) => {
              const IconComponent = (icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[cat.icon]
              return (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  {IconComponent && <IconComponent className="mb-3 h-8 w-8 text-primary" />}
                  <span className="font-medium text-gray-900">
                    {cat.label}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <ServicesGrid services={services} />

      <CTABanner
        title="Not Sure What You Need?"
        subtitle="We'll assess your project and recommend the best approach. Free consultation."
        buttonText="Get Advice"
        buttonLink="/contact"
      />
    </>
  )
}
