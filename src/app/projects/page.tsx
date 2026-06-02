"use client"

import ProjectGrid from "@/components/sections/ProjectGrid"
import { projects } from "@/data/projects"
import { motion } from "motion/react"

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-surface py-20">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-4xl font-bold text-white md:text-5xl"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-gray-400"
          >
            Take a look at some of the projects we&apos;ve delivered for our
            clients across Cape Town&apos;s Northern Suburbs.
          </motion.p>
        </div>
      </section>
      <ProjectGrid projects={projects} />
    </>
  )
}
