'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">⚠️</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong!</h2>
        <p className="text-gray-600 mb-8">An unexpected error occurred. Please try again.</p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} className="bg-[#0055CC] hover:bg-[#004399] text-white">
            <RefreshCw className="mr-2" size={18} />
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline">
              <Home className="mr-2" size={18} />
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
