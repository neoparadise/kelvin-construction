"use client"

import { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion } from 'motion/react'
import {
  MapPin,
  Calendar,
  User,
  Quote,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react'
import type { Project } from '@/data/projects'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

interface ProjectGridProps {
  projects: Project[]
}

const categoryLabels: Record<string, string> = {
  all: 'All',
  residential: 'Residential',
  renovation: 'Renovation',
  commercial: 'Commercial',
  roofing: 'Roofing',
  flooring: 'Flooring',
}

function ProjectDialog({ project }: { project: Project }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [showAfter, setShowAfter] = useState(false)

  const hasBeforeAfter = project.beforeImage && project.afterImage

  return (
    <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
      <VisuallyHidden>
        <DialogTitle>{project.title}</DialogTitle>
      </VisuallyHidden>

      <div className="space-y-6">
        {hasBeforeAfter ? (
          <div>
            <div className="relative mb-3 aspect-video overflow-hidden rounded-lg">
              <img
                src={showAfter ? project.afterImage : project.beforeImage}
                alt={showAfter ? 'After renovation' : 'Before renovation'}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setShowAfter(false)}
                className={`rounded-md px-4 py-1.5 text-sm transition-colors ${
                  !showAfter
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Before
              </button>
              <button
                onClick={() => setShowAfter(true)}
                className={`rounded-md px-4 py-1.5 text-sm transition-colors ${
                  showAfter
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                After
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="relative mb-3 aspect-video overflow-hidden rounded-lg">
              <img
                src={project.images[selectedImage]}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
            {project.images.length > 1 && (
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() =>
                    setSelectedImage(
                      (prev) =>
                        (prev === 0 ? project.images.length - 1 : prev - 1)
                    )
                  }
                  className="rounded-md bg-gray-100 p-1.5 transition-colors hover:bg-gray-200"
                  aria-label="Previous image"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <span className="text-sm text-gray-500">
                  {selectedImage + 1} / {project.images.length}
                </span>
                <button
                  onClick={() =>
                    setSelectedImage(
                      (prev) =>
                        (prev === project.images.length - 1 ? 0 : prev + 1)
                    )
                  }
                  className="rounded-md bg-gray-100 p-1.5 transition-colors hover:bg-gray-200"
                  aria-label="Next image"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        )}

        <div>
          <h3 className="mb-2 text-xl font-bold text-surface">
            {project.title}
          </h3>
          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {project.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {project.completed}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-gray-600">
            {project.description}
          </p>
        </div>

        {project.testimonial && (
          <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
            <div className="flex items-start gap-3">
              <Quote className="mt-0.5 h-5 w-5 shrink-0 text-primary/40" />
              <div>
                <p className="text-sm italic text-gray-600">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <p className="mt-2 flex items-center gap-1 text-xs text-gray-500">
                  <User className="h-3 w-3" />
                  {project.testimonial.name}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </DialogContent>
  )
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState('all')

  const uniqueCategories = Array.from(new Set(projects.map((p) => p.category)))
  const availableCategories = [
    { value: 'all', label: 'All' },
    ...uniqueCategories
      .filter((c) => categoryLabels[c])
      .map((c) => ({ value: c, label: categoryLabels[c] })),
  ]

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

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
            Our Projects
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Take a look at some of the projects we&apos;ve delivered for our
            clients across Cape Town&apos;s Northern Suburbs.
          </p>
        </motion.div>

        <Tabs
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="mb-8"
        >
          <TabsList className="flex h-auto flex-wrap justify-center gap-1 p-1">
            {availableCategories.map((category) => (
              <TabsTrigger key={category.value} value={category.value}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={activeCategory}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="group h-full cursor-pointer overflow-hidden transition-shadow hover:shadow-md">
                        <div className="relative">
                          <img
                            src={project.images[0]}
                            alt={project.title}
                            className="aspect-video w-full rounded-t-lg object-cover"
                          />
                          <Badge className="absolute left-3 top-3 capitalize">
                            {project.category}
                          </Badge>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-base">
                            {project.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="flex items-center gap-1 text-sm text-gray-500">
                            <MapPin className="h-3.5 w-3.5 shrink-0" />
                            {project.location}
                          </p>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <ProjectDialog project={project} />
                  </Dialog>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
