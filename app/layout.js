import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: {
    default: 'MD PET - PET Blow Molding Machine Manufacturer India',
    template: '%s | MD PET'
  },
  description: 'MD PET is India\'s leading manufacturer of PET Blow Molding Machines, Stretch Blow Molding Machines, and complete PET plant setup solutions. 25+ years of expertise.',
  keywords: ['PET blow molding machine', 'stretch blow molding machine', 'PET bottle making machine', 'PET plant setup', 'blow molding manufacturer India'],
  authors: [{ name: 'MD PET' }],
  creator: 'MD PET',
  publisher: 'MD PET',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: 'MD PET',
    title: 'MD PET - PET Blow Molding Machine Manufacturer India',
    description: 'India\'s leading manufacturer of PET Blow Molding Machines and complete plant solutions.',
    images: [
      {
        url: 'https://images.pexels.com/photos/34222005/pexels-photo-34222005.jpeg',
        width: 1200,
        height: 630,
        alt: 'MD PET Manufacturing Facility'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MD PET - PET Blow Molding Machine Manufacturer',
    description: 'India\'s leading manufacturer of PET Blow Molding Machines',
    images: ['https://images.pexels.com/photos/34222005/pexels-photo-34222005.jpeg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0055CC" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}
