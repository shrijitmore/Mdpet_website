'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import AnimatedImage from './AnimatedImage'

export default function ProductCard({ product }) {
  const isEco = product.category === 'Eco Series' || product.priceTier === 'Budget'
  
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-full"
      whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 85, 204, 0.2)' }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <AnimatedImage
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <motion.div 
          className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors"
          whileHover={{ opacity: 1 }}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {product.featured && (
            <Badge className="bg-[#FF7F00] text-white">
              Featured
            </Badge>
          )}
          {isEco && (
            <Badge className="bg-green-500 text-white">
              Budget / Economy
            </Badge>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <Badge variant="secondary" className={`${isEco ? 'bg-green-100 text-green-700' : 'bg-white/90 text-[#0055CC]'}`}>
            {product.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0055CC] transition">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.shortDescription}
        </p>
        
        {/* Specs */}
        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className={`flex items-center gap-1 ${isEco ? 'text-green-600' : 'text-[#0055CC]'}`}>
            <Zap size={16} />
            <span className="font-semibold">{product.capacity}</span>
          </div>
          {product.cavities !== 'N/A' && product.cavities !== 'Custom' && (
            <div className="text-gray-500">
              {product.cavities} {typeof product.cavities === 'number' ? 'Cavities' : ''}
            </div>
          )}
        </div>

        {/* CTA */}
        <Link href={`/products/${product.slug}`}>
          <Button 
            variant="outline" 
            className={`w-full transition-all duration-300 ${isEco ? 'hover:bg-green-600 hover:text-white hover:border-green-600' : 'hover:bg-[#0055CC] hover:text-white hover:border-[#0055CC]'}`}
          >
            View Details
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
