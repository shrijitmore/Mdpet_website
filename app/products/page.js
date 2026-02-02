import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ProductCard from '@/components/ProductCard'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { products, categories } from '@/lib/data'

export const metadata = {
  title: 'PET Blow Molding Machines',
  description: 'Browse our complete range of PET blow molding machines - from semi-automatic to fully automatic servo-driven systems. Find the perfect machine for your production needs.',
  keywords: ['PET blow molding machine', 'stretch blow molding', 'PET bottle making machine', 'automatic blow molding'],
  openGraph: {
    title: 'PET Blow Molding Machines - MD PET',
    description: 'Complete range of PET stretch blow molding machines for all production scales.',
  }
}

export default function ProductsPage({ searchParams }) {
  const selectedCategory = searchParams?.category || 'all'
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-[#0055CC]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <Badge className="bg-[#FF7F00] text-white mb-6">Our Products</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                PET Blow Molding Machines
              </h1>
              <p className="text-xl text-gray-200">
                Discover our comprehensive range of PET stretch blow molding machines 
                designed for efficiency, precision, and reliability.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="mb-10">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Link 
                    key={category.id} 
                    href={category.id === 'all' ? '/products' : `/products?category=${category.id}`}
                  >
                    <Button 
                      variant={selectedCategory === category.id ? 'default' : 'outline'}
                      className={selectedCategory === category.id 
                        ? 'bg-[#0055CC] text-white' 
                        : 'border-gray-300 text-gray-700 hover:border-[#0055CC] hover:text-[#0055CC]'
                      }
                    >
                      {category.name}
                      <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                        {category.count}
                      </span>
                    </Button>
                  </Link>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
                <Link href="/products">
                  <Button className="mt-4 bg-[#0055CC] text-white">View All Products</Button>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-[#0055CC] rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Need Help Choosing the Right Machine?
              </h2>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                Our experts will help you select the perfect machine based on your 
                production requirements, budget, and future growth plans.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#FF7F00] hover:bg-[#e67300] text-white">
                    Get Expert Advice
                  </Button>
                </Link>
                <Link href="/solutions">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0055CC]">
                    Explore Solutions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
