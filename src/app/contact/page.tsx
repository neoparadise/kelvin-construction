"use client"

import ContactForm from "@/components/sections/ContactForm"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <>
      <section className="bg-surface py-20">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-4xl font-bold text-white md:text-5xl"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-gray-400"
          >
            Ready to start your project? Get in touch for a free,
            no-obligation quote.
          </motion.p>
        </div>
      </section>
      <ContactForm />
    </>
  )
}
