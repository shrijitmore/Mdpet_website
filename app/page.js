import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ProductCard from '@/components/ProductCard'
import EnquiryForm from '@/components/EnquiryForm'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Factory, Globe, Award, Users, Play, ChevronRight, Zap, Shield, Clock, Headphones } from 'lucide-react'
import { companyInfo, products, galleryImages, testimonials, clients, getFeaturedProducts } from '@/lib/data'

export default function Home() {
  const featuredProducts = getFeaturedProducts()
  
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.pexels.com/photos/34222005/pexels-photo-34222005.jpeg"
              alt="Industrial Manufacturing"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <Badge className="bg-[#FF7F00] text-white mb-6 text-sm px-4 py-2">
                25+ Years of Excellence
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Complete PET Bottle Manufacturing Plant Solutions
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                India's leading manufacturer of PET Stretch Blow Molding Machines. 
                From 2-cavity to 6-cavity systems, we deliver precision-engineered 
                solutions for your bottle production needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <Button size="lg" className="bg-[#FF7F00] hover:bg-[#e67300] text-white px-8 py-6 text-lg">
                    Explore Products
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white text-white hover:bg-white hover:text-[#0055CC] px-8 py-6 text-lg">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Floating Stats */}
          <div className="absolute bottom-8 left-0 right-0 z-10">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: '25+', label: 'Years Experience' },
                  { value: '2500+', label: 'Machines Installed' },
                  { value: '45+', label: 'Countries Exported' },
                  { value: '500+', label: 'Happy Clients' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#FF7F00]">{stat.value}</div>
                    <div className="text-white text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-[#0055CC] text-[#0055CC]">
                Our Products
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                PET Blow Molding Machines
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From semi-automatic to fully automatic servo-driven systems, 
                we offer machines for every production scale and requirement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link href="/products">
                <Button size="lg" variant="outline" className="border-[#0055CC] text-[#0055CC] hover:bg-[#0055CC] hover:text-white">
                  View All Products
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 border-[#FF7F00] text-[#FF7F00]">
                  Why MD PET
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  What Makes MD PET the Best Choice?
                </h2>
                <p className="text-gray-600 mb-8">
                  With over 25 years of expertise in PET blow molding technology, 
                  we deliver precision-engineered machines that set industry standards 
                  for performance, efficiency, and reliability.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: Factory, title: 'Industry Expertise', desc: '25+ years of manufacturing excellence' },
                    { icon: Zap, title: 'Advanced Technology', desc: 'Latest servo-driven systems' },
                    { icon: Shield, title: 'Quality Assurance', desc: 'ISO certified manufacturing' },
                    { icon: Headphones, title: '24/7 Support', desc: 'Round-the-clock technical assistance' }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-[#0055CC]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-[#0055CC]" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/29842696/pexels-photo-29842696.jpeg"
                    alt="Manufacturing Excellence"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#0055CC] text-white p-6 rounded-xl shadow-xl">
                  <div className="text-4xl font-bold">25+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-[#0055CC]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  See Our Machines in Action
                </h2>
                <p className="text-gray-200 mb-8">
                  Watch how our state-of-the-art PET blow molding machines 
                  deliver exceptional performance, precision, and reliability 
                  in real production environments.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'High-speed bottle production up to 10,000 BPH',
                    'Energy-efficient servo motor technology',
                    'Precision temperature control system',
                    'Automatic fault detection and recovery'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-[#FF7F00] flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/gallery">
                  <Button className="bg-[#FF7F00] hover:bg-[#e67300] text-white">
                    View Gallery
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
              
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/NPHnMvt4Cbs"
                  title="MD PET Machine Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Trusted by Industry Leaders</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
              {clients.map((client, index) => (
                <div key={index} className="text-xl font-bold text-gray-600 px-6 py-3">
                  {client}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-[#0055CC] text-[#0055CC]">
                Global Reach
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Global Presence
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We've successfully delivered and installed machines across 45+ countries, 
                earning the trust of clients worldwide.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-gray-100 rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <Globe className="w-16 h-16 text-[#0055CC] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">45+ Countries</h3>
                  <p className="text-gray-600">Successfully exported machines across Asia, Africa, Middle East, Europe & Americas</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {[
                  { region: 'Asia Pacific', count: '15+ Countries', color: 'bg-blue-500' },
                  { region: 'Middle East & Africa', count: '20+ Countries', color: 'bg-orange-500' },
                  { region: 'Europe & Americas', count: '10+ Countries', color: 'bg-green-500' }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border">
                    <div className={`w-3 h-3 rounded-full ${item.color} mb-3`} />
                    <h3 className="font-bold text-gray-900">{item.region}</h3>
                    <p className="text-[#0055CC] font-semibold">{item.count}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-[#FF7F00] text-[#FF7F00]">
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0055CC] to-[#003d99]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Start Your PET Bottle Manufacturing Journey?
                </h2>
                <p className="text-gray-200 mb-8">
                  Get in touch with our experts for a customized solution that fits 
                  your production requirements and budget.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-[#FF7F00] hover:bg-[#e67300] text-white">
                      Get Free Consultation
                    </Button>
                  </Link>
                  <a href={`tel:${companyInfo.phone}`}>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0055CC]">
                      Call Now: {companyInfo.phone}
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Enquiry</h3>
                <EnquiryForm compact />
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
