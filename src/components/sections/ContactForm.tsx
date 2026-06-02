"use client"

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
} from 'lucide-react'
import { services } from '@/data/services'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  function onSubmit(_data: ContactFormData) {
    toast.success(
      'Thank you for your message! We will get back to you shortly.'
    )
    reset()
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-surface md:text-4xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Ready to start your project? Contact us for a free, no-obligation
            quote. We&apos;ll respond within 24 hours.
          </p>
        </div>

        <div className="mx-auto flex max-w-5xl flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="flex-1">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register('name')}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+27 21 555 1234"
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service</Label>
                <Select
                  onValueChange={(value) => setValue('service', value, { shouldValidate: true })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-sm text-red-500">
                    {errors.service.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  {...register('message')}
                />
                {errors.message && (
                  <p className="text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="xl"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          <div className="w-full space-y-6 lg:w-80">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-surface">
                  Phone
                </h4>
                <a
                  href="tel:+27215551234"
                  className="text-sm text-gray-600 transition-colors hover:text-primary"
                >
                  +27 21 555 1234
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-surface">
                  Email
                </h4>
                <a
                  href="mailto:info@kelvinconstruction.co.za"
                  className="text-sm text-gray-600 transition-colors hover:text-primary"
                >
                  info@kelvinconstruction.co.za
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-surface">
                  Address
                </h4>
                <p className="text-sm text-gray-600">
                  Bellville, Cape Town, South Africa
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10">
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-surface">
                  WhatsApp
                </h4>
                <a
                  href="https://wa.me/27215551234?text=Hi%20Kelvin%20Construction%2C%20I%27d%20like%20a%20quote%20please"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#25D366] transition-colors hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-surface">
                  Business Hours
                </h4>
                <p className="text-sm text-gray-600">Mon-Fri: 7:30 - 17:00</p>
                <p className="text-sm text-gray-600">Sat: 8:00 - 13:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
