'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/termin-buchung', label: 'Termin buchen' },
  { href: '/kontakt', label: 'Kontakt' },
  { href: '/impressum', label: 'Impressum' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-blue-100/90 shadow-xs sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Firmenname und Slogan links */}
          <Link href="/" className="flex flex-col">
            <h1 className="text-2xl sm:text-2xl font-bold text-gray-900">
              Patrik Kljajic - Gebäudereinigung
            </h1>
            <p className="text-sm sm:text-base text-gray-400 italic mt-1">
              Putz, Putz, weg mit dem Schmutz, wir machen Schmutz Geschichte!
            </p>
          </Link>

          {/* Klassische horizontale Navigation */}
          <div className="hidden md:flex md:space-x-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-5 py-3 text-sm font-semibold rounded-none transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-800 text-white shadow-md shadow-blue-600/100'
                      : 'bg-white text-blue-800 hover:bg-blue-800 hover:-translate-y-0.5 hover:shadow-lg hover:text-white' 
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-none text-gray-700 hover:text-blue-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-expanded="false"
          >
            <span className="sr-only">Hauptmenü öffnen</span>
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
