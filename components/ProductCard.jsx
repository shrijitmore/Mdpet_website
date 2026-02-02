import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden product-card border border-gray-100 group">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.featured && (
          <Badge className="absolute top-4 left-4 bg-[#FF7F00] text-white">
            Featured
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <Badge variant="secondary" className="bg-white/90 text-[#0055CC]">
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
          <div className="flex items-center gap-1 text-[#0055CC]">
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
          <Button variant="outline" className="w-full group-hover:bg-[#0055CC] group-hover:text-white group-hover:border-[#0055CC] transition">
            View Details
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
