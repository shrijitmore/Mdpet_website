'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

export default function AnimatedCounter({ 
  value, 
  suffix = '', 
  prefix = '',
  duration = 2,
  className = '' 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hasAnimated, setHasAnimated] = useState(false)
  
  // Parse numeric value
  const numericValue = parseInt(value.toString().replace(/[^0-9]/g, ''), 10) || 0
  
  const spring = useSpring(0, { 
    duration: duration * 1000,
    bounce: 0
  })
  
  const display = useTransform(spring, (current) => {
    return Math.floor(current)
  })
  
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      spring.set(numericValue)
    }
  }, [isInView, hasAnimated, numericValue, spring])

  useEffect(() => {
    const unsubscribe = display.on('change', (v) => {
      setDisplayValue(v)
    })
    return () => unsubscribe()
  }, [display])

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  )
}
