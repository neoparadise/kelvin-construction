"use client"

import { motion } from 'motion/react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import * as icons from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Service } from '@/data/services'

interface ServicesGridProps {
  services: Service[]
  limit?: number
}

export default function ServicesGrid({ services, limit }: ServicesGridProps) {
  const displayServices = limit ? services.slice(0, limit) : services

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold text-surface md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            From concept to completion, we offer a comprehensive range of
            construction services for residential and commercial clients across Cape
            Town.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {displayServices.map((service, index) => {
            const Icon = (icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[
              service.icon
            ]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="group flex h-full flex-col">
                  <CardHeader>
                    <div className="mb-3">
                      {Icon && <Icon className="h-10 w-10 text-primary" />}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="line-clamp-3 text-sm text-gray-500">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <ul className="mb-6 flex-1 space-y-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services#${service.id}`}
                      className="group inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-hover"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
