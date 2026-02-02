import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import EnquiryForm from '@/components/EnquiryForm'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, Download, Play, ArrowLeft, Phone, Zap, Settings, Box } from 'lucide-react'
import { products, getProductBySlug, companyInfo } from '@/lib/data'

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug)
  
  if (!product) {
    return { title: 'Product Not Found' }
  }

  return {
    title: `${product.name} - ${product.capacity}`,
    description: product.description,
    keywords: [product.name, 'PET blow molding', product.category, 'MD PET'],
    openGraph: {
      title: `${product.name} | MD PET`,
      description: product.shortDescription,
      images: [{ url: product.images[0], width: 1200, height: 630, alt: product.name }],
    }
  }
}

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug)
  
  if (!product) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images,
    brand: {
      '@type': 'Brand',
      name: 'MD PET'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'MD PET',
      url: process.env.NEXT_PUBLIC_BASE_URL
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'INR'
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-[#0055CC]">Home</Link>
              <span className="text-gray-400">/</span>
              <Link href="/products" className="text-gray-500 hover:text-[#0055CC]">Products</Link>
              <span className="text-gray-400">/</span>
              <span className="text-[#0055CC]">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Hero */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Images */}
              <div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  {product.featured && (
                    <Badge className="absolute top-4 left-4 bg-[#FF7F00] text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {product.images.map((img, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-[#0055CC] cursor-pointer">
                      <Image
                        src={img}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <Badge variant="outline" className="mb-4 border-[#0055CC] text-[#0055CC]">
                  {product.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                  {product.description}
                </p>

                {/* Quick Specs */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-[#0055CC]/5 rounded-xl p-4 text-center">
                    <Zap className="w-8 h-8 text-[#0055CC] mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Capacity</div>
                    <div className="font-bold text-[#0055CC]">{product.capacity}</div>
                  </div>
                  <div className="bg-[#0055CC]/5 rounded-xl p-4 text-center">
                    <Settings className="w-8 h-8 text-[#0055CC] mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Cavities</div>
                    <div className="font-bold text-[#0055CC]">{product.cavities}</div>
                  </div>
                  <div className="bg-[#0055CC]/5 rounded-xl p-4 text-center">
                    <Box className="w-8 h-8 text-[#0055CC] mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Max Volume</div>
                    <div className="font-bold text-[#0055CC]">{product.maxVolume}</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <Link href="/contact">
                    <Button size="lg" className="bg-[#FF7F00] hover:bg-[#e67300] text-white">
                      Request Quote
                    </Button>
                  </Link>
                  <a href={`tel:${companyInfo.phone}`}>
                    <Button size="lg" variant="outline" className="border-[#0055CC] text-[#0055CC]">
                      <Phone className="mr-2" size={18} />
                      Call Now
                    </Button>
                  </a>
                  {product.brochure && (
                    <Button size="lg" variant="outline">
                      <Download className="mr-2" size={18} />
                      Brochure
                    </Button>
                  )}
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hi, I'm interested in the ${product.name}. Please provide more details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4 hover:bg-green-100 transition"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-green-800">Chat on WhatsApp</div>
                    <div className="text-sm text-green-600">Get instant response from our team</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="w-full justify-start mb-8 bg-white p-1 rounded-xl">
                <TabsTrigger value="features" className="px-6 py-3">Features</TabsTrigger>
                <TabsTrigger value="specs" className="px-6 py-3">Specifications</TabsTrigger>
                {product.video && <TabsTrigger value="video" className="px-6 py-3">Video</TabsTrigger>}
              </TabsList>
              
              <TabsContent value="features">
                <div className="bg-white rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="specs">
                <div className="bg-white rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody>
                        {Object.entries(product.specifications).map(([key, value], index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                            <td className="py-4 px-6 font-medium text-gray-900">{key}</td>
                            <td className="py-4 px-6 text-gray-600">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              
              {product.video && (
                <TabsContent value="video">
                  <div className="bg-white rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Video</h2>
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <iframe
                        src={product.video}
                        title={`${product.name} Video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </TabsContent>
              )}
            </Tabs>
          </div>
        </section>

        {/* Enquiry Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Interested in {product.name}?
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border">
                <EnquiryForm selectedProduct={product.slug} />
              </div>
            </div>
          </div>
        </section>

        {/* Back to Products */}
        <div className="container mx-auto px-4 pb-12">
          <Link href="/products">
            <Button variant="outline" className="border-gray-300">
              <ArrowLeft className="mr-2" size={18} />
              Back to All Products
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
