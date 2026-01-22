import { Navigation } from '@/ui/navigation'
import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import { Inter } from 'next/font/google'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Patrik Kljajic Gebäudereinigung - Professionelle Reinigung in Hamburg',
  description: 'Professionelle Gebäudereinigung in Hamburg seit über 20 Jahren. Unterhaltsreinigung, Grundreinigung, Treppenhausreinigung, Bauendreinigung und Fensterreinigung – zuverlässig, gründlich und mit Liebe zum Detail.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}