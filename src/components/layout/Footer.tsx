"use client"

import Link from 'next/link'
import { Phone, Mail, MapPin, Globe } from 'lucide-react'

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { path: '/services#new-builds', label: 'New Home Builds' },
  { path: '/services#renovations', label: 'Renovations & Extensions' },
  { path: '/services#roofing', label: 'Roofing Solutions' },
  { path: '/services#concrete', label: 'Concrete Works' },
  { path: '/services#painting', label: 'Painting & Finishing' },
  { path: '/services#project-management', label: 'Project Management' },
]

const socialLinks = [
  { icon: Globe, href: '#', label: 'Facebook' },
  { icon: Globe, href: '#', label: 'Instagram' },
  { icon: Globe, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-surface text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-white font-bold text-sm">
                KC
              </div>
              <span className="text-lg font-bold">Kelvin Construction</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Kelvin Construction is a trusted Cape Town-based building company
              specialising in residential and commercial construction. With years
              of experience, we deliver quality, reliability, and excellence on
              every project.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-9 w-9 rounded-full bg-surface-light text-gray-400 hover:bg-primary hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-300">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-300">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-300">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <a
                  href="tel:+27215551234"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  +27 21 555 1234
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <a
                  href="mailto:info@kelvinconstruction.co.za"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  info@kelvinconstruction.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">
                  Bellville, Cape Town, South Africa
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-white/10" />

      <div className="container py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Kelvin Construction. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="inline-flex items-center gap-2 text-xs text-gray-500 bg-surface-light px-3 py-1.5 rounded">
              <span className="h-3 w-3 rounded-full bg-primary/60" />
              NHBRC Registered
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
