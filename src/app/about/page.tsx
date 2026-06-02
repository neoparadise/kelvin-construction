"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Award,
  Building2,
  CheckCircle,
  HardHat,
  ShieldCheck,
  Users,
} from 'lucide-react'

const values = [
  {
    icon: HardHat,
    title: 'Quality Craftsmanship',
    description:
      'We take pride in every project, ensuring the highest standards of workmanship in everything we do.',
  },
  {
    icon: CheckCircle,
    title: 'Reliability & Trust',
    description:
      'We show up on time, communicate clearly, and deliver on our promises. Your trust is our most valuable asset.',
  },
  {
    icon: Users,
    title: 'Client-Focused Approach',
    description:
      'Every client is unique. We listen to your needs and tailor our services to match your vision and budget.',
  },
  {
    icon: ShieldCheck,
    title: 'Fully Registered & Insured',
    description:
      'NHBRC registered and fully insured for your peace of mind. We comply with all industry regulations and safety standards.',
  },
  {
    icon: Award,
    title: 'Local Expertise',
    description:
      'Deep knowledge of Bellville, Cape Town, and the Western Cape construction landscape, regulations, and suppliers.',
  },
  {
    icon: Building2,
    title: 'End-to-End Service',
    description:
      'From initial consultation to final handover, we manage every aspect of your project so you can relax.',
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-surface py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-4xl font-bold text-white md:text-5xl"
            >
              About Kelvin Construction
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400"
            >
              Your trusted construction partner in Bellville, Cape Town since
              2010.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
                  alt="Kelvin Construction team at work"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Our Story
              </h2>
              <p className="mb-4 leading-relaxed text-gray-600">
                Kelvin Construction was founded in 2010 by Kelvin van der
                Westhuizen with a simple vision: to provide quality
                construction services to the Bellville community and
                surrounding areas. What started as a small team of three
                has grown into a trusted name in Cape Town construction.
              </p>
              <p className="mb-4 leading-relaxed text-gray-600">
                Over the past 15+ years, we've completed over 250 projects
                ranging from single-room renovations to full residential
                builds and commercial fit-outs. Our success is built on a
                foundation of quality workmanship, clear communication,
                and a genuine commitment to our clients.
              </p>
              <p className="leading-relaxed text-gray-600">
                Today, our team of 12 skilled professionals continues to
                serve homeowners, businesses, and developers across the
                Western Cape with the same dedication and attention to
                detail that has defined us from day one.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  NHBRC Registered
                </div>
                <div className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  Fully Insured
                </div>
                <div className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  CIDB Registered
                </div>
                <div className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  Since 2010
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Our Values
            </h2>
            <p className="text-gray-600">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <Icon className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="flex flex-col items-center gap-12 lg:flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Kelvin Construction team"
                className="rounded-2xl object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Meet Kelvin
              </h2>
              <p className="mb-4 leading-relaxed text-gray-600">
                Kelvin van der Westhuizen is a qualified builder with over
                20 years of experience in the construction industry. He
                founded Kelvin Construction to bring his passion for
                quality building to his home community of Bellville.
              </p>
              <p className="mb-4 leading-relaxed text-gray-600">
                Under his leadership, the company has grown steadily
                through referrals and repeat business — a testament to
                the trust his clients place in him and his team.
              </p>
              <p className="mb-6 leading-relaxed text-gray-600">
                Kelvin personally oversees every project, ensuring that
                each job meets his exacting standards before handover.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
