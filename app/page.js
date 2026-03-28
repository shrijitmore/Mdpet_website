'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import EnquiryForm from '@/components/EnquiryForm'
import ScrollReveal from '@/components/ScrollReveal'
import AnimatedCounter from '@/components/AnimatedCounter'
import AnimatedImage from '@/components/AnimatedImage'
import ClientCarousel from '@/components/ClientCarousel'
import WorldMap from '@/components/WorldMap'
import ProductSlider from '@/components/ProductSlider'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Factory, Globe, Award, Users, Play, ChevronDown, Zap, Shield, Headphones } from 'lucide-react'
import { companyInfo, testimonials } from '@/lib/data'

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const [videoLoaded, setVideoLoaded] = useState(false)
  
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section with Video Background */}
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
          {/* Video Background */}
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ scale: heroScale }}
          >
            {/* Fallback Image */}
            <div className="absolute inset-0">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1603514457784-db13e512fd56?q=80&w=2670&auto=format&fit=crop"
                alt="Industrial Manufacturing"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Video removed */}
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0055CC]/95 via-[#0055CC]/85 to-[#003d99]/75" />
            
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 md:w-2 md:h-2 bg-white/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -80, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Hero Content */}
          <motion.div 
            className="container mx-auto px-4 relative z-10 py-20 md:py-24 lg:py-32"
            style={{ opacity: heroOpacity }}
          >
            <div className="max-w-4xl mx-auto lg:mx-0">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <Badge className="bg-[#FF7F00] text-white text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  15+ Years of Excellence
                </Badge>
              </motion.div>
              
              {/* Headline */}
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Complete{' '}
                <span className="text-[#FF7F00] inline-block">PET Bottle</span>
                <br className="hidden sm:block" />
                <span className="block sm:inline"> Manufacturing Solutions</span>
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                India's leading manufacturer of PET Stretch Blow Molding Machines. 
                From semi-automatic to servo-driven systems, we deliver precision-engineered 
                solutions for every scale of production.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 md:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/products" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-[#FF7F00] hover:bg-[#e67300] text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg group">
                    Explore Products
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent backdrop-blur border-2 border-white text-white hover:bg-white hover:text-[#0055CC] px-6 md:px-8 py-5 md:py-6 text-base md:text-lg">
                    Get Free Quote
                  </Button>
                </Link>
              </motion.div>

              {/* Stats Grid */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {[
                  { value: 15, suffix: '+', label: 'Years Experience' },
                  { value: 150, suffix: '+', label: 'Machines Installed' },
                  { value: 5, suffix: '+', label: 'States Served' },
                  { value: 100, suffix: '+', label: 'Happy Clients' }
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-5 text-center border border-white/20"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF7F00]">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-white/80 text-xs md:text-sm mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          {/* Scroll Indicator - Hidden on mobile */}
          <motion.div 
            className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="text-white/60" size={24} />
          </motion.div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <ScrollReveal animation="fadeRight">
                <div>
                  <Badge variant="outline" className="mb-4 border-[#FF7F00] text-[#FF7F00]">
                    Why MD PET
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                    What Makes MD PET the{' '}
                    <span className="text-[#0055CC]">Best Choice?</span>
                  </h2>
                  <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
                    With over 15 years of expertise in PET blow molding technology, 
                    we deliver precision-engineered machines that set industry standards 
                    for performance, efficiency, and reliability.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {[
                      { icon: Factory, title: 'Industry Expertise', desc: '15+ years of manufacturing excellence', delay: 0 },
                      { icon: Zap, title: 'Advanced Technology', desc: 'Latest servo-driven systems', delay: 0.1 },
                      { icon: Shield, title: 'Quality Assurance', desc: 'ISO certified manufacturing', delay: 0.2 },
                      { icon: Headphones, title: '24/7 Support', desc: 'Round-the-clock technical assistance', delay: 0.3 }
                    ].map((item, index) => (
                      <ScrollReveal key={index} animation="fadeUp" delay={item.delay}>
                        <motion.div 
                          className="flex gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-gray-50 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#0055CC] to-[#003d99] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <item.icon className="text-white" size={22} />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 text-sm md:text-base">{item.title}</h3>
                            <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </motion.div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fadeLeft" delay={0.2}>
                <div className="relative mt-8 lg:mt-0">
                  <motion.div 
                    className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AnimatedImage
                      src="https://images.pexels.com/photos/10376368/pexels-photo-10376368.jpeg"
                      alt="Manufacturing Excellence"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  
                  {/* Floating badge */}
                  <motion.div 
                    className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-gradient-to-br from-[#0055CC] to-[#003d99] text-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-2xl"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="text-3xl md:text-5xl font-bold">
                      <AnimatedCounter value={15} suffix="+" />
                    </div>
                    <div className="text-xs md:text-sm opacity-90">Years of Excellence</div>
                  </motion.div>
                  
                  {/* Award icon */}
                  <motion.div 
                    className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-[#FF7F00] text-white p-3 md:p-4 rounded-xl shadow-xl"
                    animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Award size={24} />
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Products Slider Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-10 md:mb-16">
                <Badge variant="outline" className="mb-4 border-[#0055CC] text-[#0055CC]">
                  Our Products
                </Badge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                  PET Blow Molding Machines
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
                  From semi-automatic to fully automatic servo-driven systems, 
                  we offer machines for every production scale.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <ProductSlider />
            </ScrollReveal>
            
            <ScrollReveal animation="fadeUp" delay={0.3}>
              <div className="text-center mt-8 md:mt-12">
                <Link href="/products">
                  <Button size="lg" className="bg-[#0055CC] hover:bg-[#004399] text-white group">
                    View All Products
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>



        {/* Clients Carousel */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Trusted by Industry Leaders</h2>
                <p className="text-gray-600 mt-2 text-sm md:text-base">Supported by 50+ MSMEs and 100+ satisfied clients nationwide</p>
              </div>
            </ScrollReveal>
            <ClientCarousel />
          </div>
        </section>

        {/* Global Presence with World Map */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-10 md:mb-16">
                <Badge variant="outline" className="mb-4 border-[#0055CC] text-[#0055CC]">
                  India Reach
                </Badge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                  Our Presence in India
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
                  We've successfully delivered machines across 5+ states, 
                  earning the trust of clients nationwide.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="scale" delay={0.2}>
              <WorldMap />
            </ScrollReveal>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-10 md:mb-16">
                <Badge variant="outline" className="mb-4 border-[#FF7F00] text-[#FF7F00]">
                  Testimonials
                </Badge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                  What Our Clients Say
                </h2>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={testimonial.id} animation="fadeUp" delay={index * 0.1}>
                  <motion.div 
                    className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 h-full"
                    whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex gap-1 mb-3 md:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.svg 
                          key={i} 
                          className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" 
                          viewBox="0 0 20 20"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 md:mb-6 italic text-sm md:text-lg">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#0055CC] to-[#003d99] rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                        <div className="text-xs md:text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#0055CC] to-[#003d99] relative overflow-hidden">
          {/* Animated background elements */}
          <motion.div
            className="absolute top-10 left-10 w-40 md:w-64 h-40 md:h-64 bg-white/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-60 md:w-96 h-60 md:h-96 bg-[#FF7F00]/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <ScrollReveal animation="fadeRight">
                <div className="text-white text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                    Ready to Start Your PET Bottle Manufacturing Journey?
                  </h2>
                  <p className="text-gray-200 mb-6 md:mb-8 text-base md:text-lg">
                    Get in touch with our experts for a customized solution that fits 
                    your production requirements and budget.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                    <Link href="/contact">
                      <Button size="lg" className="w-full sm:w-auto bg-[#FF7F00] hover:bg-[#e67300] text-white group">
                        Get Free Consultation
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <a href={`tel:${companyInfo.phone}`}>
                      <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0055CC]">
                        Call: {companyInfo.phone}
                      </Button>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fadeLeft" delay={0.2}>
                <motion.div 
                  className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-2xl"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Quick Enquiry</h3>
                  <EnquiryForm compact />
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
