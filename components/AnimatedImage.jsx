'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'

// Global image cache to track loaded images
const imageCache = new Set()

export default function AnimatedImage({ 
  src, 
  alt, 
  fill = false, 
  width, 
  height, 
  className = '', 
  priority = false,
  sizes,
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(imageCache.has(src))
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    if (!imgRef.current) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    )
    
    observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    imageCache.add(src)
    setIsLoaded(true)
  }

  return (
    <div ref={imgRef} className={`relative ${fill ? 'w-full h-full' : ''}`} style={!fill ? { width, height } : undefined}>
      {/* Skeleton loader */}
      {!isLoaded && (
        <Skeleton className={`absolute inset-0 ${className}`} />
      )}
      
      {/* Actual image */}
      {(isInView || priority || imageCache.has(src)) && (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          onLoad={handleLoad}
          priority={priority}
          sizes={sizes}
          {...props}
        />
      )}
    </div>
  )
}
