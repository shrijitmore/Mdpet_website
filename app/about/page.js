'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import EnquiryForm from '@/components/EnquiryForm'
import ScrollReveal from '@/components/ScrollReveal'
import AnimatedCounter from '@/components/AnimatedCounter'
import AnimatedImage from '@/components/AnimatedImage'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Award, Users, Globe, Factory, Target, Eye, Lightbulb, ArrowRight } from 'lucide-react'
import { companyInfo } from '@/lib/data'

const milestones = [
  { year: '2009', title: 'Company Founded', desc: 'Started operations in Vasai with a vision to revolutionize PET manufacturing in India' },
  { year: '2012', title: 'First Distribution', desc: 'Successfully started distribution to multiple states' },
  { year: '2016', title: 'ISO Certification', desc: 'Achieved ISO 9001:2008 certification for quality management' },
  { year: '2019', title: '100+ Machines', desc: 'Crossed milestone of 100+ machines installed nationwide' },
  { year: '2022', title: 'Servo Technology', desc: 'Launched advanced all-electric servo machine series' },
  { year: '2025', title: '5+ States', desc: 'Expanded presence to 5+ states with 150+ installations' }
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-[#0055CC] to-[#003d99] overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-[#FF7F00] text-white mb-6">About Us</Badge>
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <AnimatedCounter value={15} suffix="+" /> Years of Excellence in PET Manufacturing
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                MD PET is a pioneering force in the PET blow molding industry, 
                committed to delivering innovative, efficient, and reliable machinery solutions.
              </motion.p>
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-40 w-20 h-20 bg-[#FF7F00]/20 rounded-full blur-lg"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal animation="fadeRight">
                <div className="relative">
                  <motion.div 
                    className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AnimatedImage
                      src="https://images.pexels.com/photos/32399141/pexels-photo-32399141.jpeg"
                      alt="MD PET Manufacturing Facility"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="absolute -bottom-8 -right-8 bg-gradient-to-br from-[#FF7F00] to-[#e67300] text-white p-8 rounded-2xl shadow-xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="text-4xl font-bold">Since</div>
                    <div className="text-5xl font-bold">2009</div>
                  </motion.div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fadeLeft" delay={0.2}>
                <div>
                  <Badge variant="outline" className="mb-4 border-[#0055CC] text-[#0055CC]">
                    Our Story
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    A Legacy of <span className="text-[#0055CC]">Innovation</span> & Quality
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    Founded in 2009 in Vasai, MD PET began with a clear vision: to become 
                    India's most trusted name in PET blow molding technology. Over the past 
                    15+ years, we have grown from a small manufacturing unit to a nationwide 
                    leader in the industry.
                  </p>
                  <p className="text-gray-600 mb-8 text-lg">
                    Our journey has been marked by continuous innovation, quality excellence, 
                    and a deep commitment to customer satisfaction. Today, we proudly serve 
                    clients across 5+ states with a portfolio of world-class machines.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: 150, suffix: '+', label: 'Machines Installed' },
                      { value: 100, suffix: '+', label: 'Happy Clients' },
                      { value: 5, suffix: '+', label: 'States' },
                      { value: 100, suffix: '+', label: 'Team Members' }
                    ].map((stat, index) => (
                      <ScrollReveal key={index} animation="fadeUp" delay={index * 0.1}>
                        <motion.div 
                          className="bg-gray-50 rounded-xl p-5 hover:shadow-lg transition-shadow"
                          whileHover={{ y: -5 }}
                        >
                          <div className="text-3xl font-bold text-[#0055CC]">
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                          </div>
                          <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                        </motion.div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 border-[#FF7F00] text-[#FF7F00]">
                  Our Foundation
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Mission, Vision & Values
                </h2>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Our Mission',
                  desc: 'To deliver innovative, efficient, and reliable PET blow molding solutions that empower our clients to achieve manufacturing excellence and sustainable growth.',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  icon: Eye,
                  title: 'Our Vision',
                  desc: 'To be the global leader in PET manufacturing technology, setting industry standards for quality, innovation, and customer satisfaction.',
                  color: 'from-[#FF7F00] to-[#e67300]'
                },
                {
                  icon: Lightbulb,
                  title: 'Our Values',
                  desc: 'Quality excellence, continuous innovation, customer-first approach, integrity in all dealings, and commitment to sustainable manufacturing practices.',
                  color: 'from-green-500 to-green-600'
                }
              ].map((item, index) => (
                <ScrollReveal key={index} animation="fadeUp" delay={index * 0.15}>
                  <motion.div 
                    className="bg-white rounded-3xl p-8 shadow-lg text-center h-full"
                    whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="text-white" size={36} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 border-[#0055CC] text-[#0055CC]">
                  Our Journey
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Milestones & Achievements
                </h2>
              </div>
            </ScrollReveal>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#0055CC] to-[#FF7F00] hidden md:block" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <ScrollReveal 
                    key={index} 
                    animation={index % 2 === 0 ? 'fadeRight' : 'fadeLeft'} 
                    delay={index * 0.1}
                  >
                    <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <motion.div 
                          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                          whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -15px rgba(0, 85, 204, 0.2)' }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="text-[#FF7F00] font-bold text-3xl mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.desc}</p>
                        </motion.div>
                      </div>
                      
                      <motion.div 
                        className="w-14 h-14 bg-gradient-to-br from-[#0055CC] to-[#003d99] rounded-full flex items-center justify-center z-10 flex-shrink-0 shadow-xl"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle className="text-white" size={24} />
                      </motion.div>
                      
                      <div className="flex-1 hidden md:block" />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-gradient-to-br from-[#0055CC] to-[#003d99] relative overflow-hidden">
          {/* Background Elements */}
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Choose MD PET?
                </h2>
                <p className="text-gray-200 max-w-2xl mx-auto text-lg">
                  We combine decades of expertise with cutting-edge technology to deliver 
                  machines that exceed expectations.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Factory, title: 'State-of-Art Facility', desc: '50,000 sq ft manufacturing plant with latest machinery' },
                { icon: Award, title: 'Quality Certified', desc: 'ISO 9001:2015 certified for quality management' },
                { icon: Users, title: 'Expert Team', desc: '100+ skilled engineers and technicians' },
                { icon: Globe, title: 'Global Service', desc: '24/7 support across all time zones' }
              ].map((item, index) => (
                <ScrollReveal key={index} animation="fadeUp" delay={index * 0.1}>
                  <motion.div 
                    className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center"
                    whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.2)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-[#FF7F00] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="text-white" size={28} />
                    </motion.div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Ready to Partner with MD PET?
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg">
                      Let's discuss how we can help you set up or expand your PET bottle 
                      manufacturing operations with our world-class machinery.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a href={`tel:${companyInfo.phone}`}>
                        <Button className="bg-[#0055CC] hover:bg-[#004399] text-white group">
                          Call Us Now
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </Button>
                      </a>
                      <a href={`mailto:${companyInfo.email}`}>
                        <Button variant="outline" className="border-[#0055CC] text-[#0055CC]">
                          Email Us
                        </Button>
                      </a>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="bg-white rounded-2xl p-8 shadow-xl"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                    <EnquiryForm compact />
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
