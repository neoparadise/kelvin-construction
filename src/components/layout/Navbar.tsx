"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Phone, Mail, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

interface NavLink {
  path: string
  label: string
}

const navLinks: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-200/50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-white font-bold text-sm">
            KC
          </div>
          <span className="text-lg font-bold text-surface hidden sm:inline">
            Kelvin Construction
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                isActive(link.path)
                  ? 'text-primary'
                  : 'text-gray-600 hover:text-primary hover:bg-primary/5'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild size="lg">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="shrink-0">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-sm flex flex-col">
            <div className="flex items-center gap-2 mt-2 mb-8">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-white font-bold text-sm">
                KC
              </div>
              <span className="text-lg font-bold text-surface">
                Kelvin Construction
              </span>
            </div>

            <div className="flex flex-col gap-1 flex-1">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.path}>
                  <Link
                    href={link.path}
                    className={cn(
                      'flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors',
                      isActive(link.path)
                        ? 'text-primary bg-primary/5'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-6 mt-6 space-y-4">
              <SheetClose asChild>
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </SheetClose>

              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://wa.me/27215551234?text=Hi%20Kelvin%20Construction%2C%20I%27d%20like%20a%20quote%20please"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-[#25D366] text-white hover:opacity-90 transition-opacity"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href="tel:+27215551234"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white hover:opacity-90 transition-opacity"
                  aria-label="Call us"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <a
                  href="mailto:info@kelvinconstruction.co.za"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                  aria-label="Email us"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
