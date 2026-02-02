import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import EnquiryForm from '@/components/EnquiryForm'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Award, Users, Globe, Factory, Target, Eye, Lightbulb } from 'lucide-react'
import { companyInfo } from '@/lib/data'

export const metadata = {
  title: 'About Us',
  description: 'Learn about MD PET - India\'s leading PET blow molding machine manufacturer with 25+ years of expertise in delivering quality machinery solutions.',
  openGraph: {
    title: 'About MD PET - 25+ Years of PET Manufacturing Excellence',
    description: 'Discover our journey, mission, and commitment to delivering world-class PET blow molding solutions.',
  }
}

export default function AboutPage() {
  const milestones = [
    { year: '2000', title: 'Company Founded', desc: 'Started operations in Mumbai with a vision to revolutionize PET manufacturing in India' },
    { year: '2005', title: 'First Export', desc: 'Successfully exported first machines to Middle East markets' },
    { year: '2010', title: 'ISO Certification', desc: 'Achieved ISO 9001:2008 certification for quality management' },
    { year: '2015', title: '1000+ Machines', desc: 'Crossed milestone of 1000+ machines installed globally' },
    { year: '2020', title: 'Servo Technology', desc: 'Launched advanced all-electric servo machine series' },
    { year: '2025', title: '45+ Countries', desc: 'Expanded presence to 45+ countries with 2500+ installations' }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-[#0055CC]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <Badge className="bg-[#FF7F00] text-white mb-6">About Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                25+ Years of Excellence in PET Manufacturing
              </h1>
              <p className="text-xl text-gray-200">
                MD PET is a pioneering force in the PET blow molding industry, 
                committed to delivering innovative, efficient, and reliable machinery solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/32399141/pexels-photo-32399141.jpeg"
                    alt="MD PET Manufacturing Facility"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#FF7F00] text-white p-6 rounded-xl">
                  <div className="text-3xl font-bold">Since</div>
                  <div className="text-4xl font-bold">2000</div>
                </div>
              </div>
              
              <div>
                <Badge variant="outline" className="mb-4 border-[#0055CC] text-[#0055CC]">
                  Our Story
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  A Legacy of Innovation & Quality
                </h2>
                <p className="text-gray-600 mb-6">
                  Founded in 2000 in Mumbai, MD PET began with a clear vision: to become 
                  India's most trusted name in PET blow molding technology. Over the past 
                  25+ years, we have grown from a small manufacturing unit to a global 
                  leader in the industry.
                </p>
                <p className="text-gray-600 mb-6">
                  Our journey has been marked by continuous innovation, quality excellence, 
                  and a deep commitment to customer satisfaction. Today, we proudly serve 
                  clients across 45+ countries with a portfolio of world-class machines.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '2500+', label: 'Machines Installed' },
                    { value: '500+', label: 'Happy Clients' },
                    { value: '45+', label: 'Countries' },
                    { value: '100+', label: 'Team Members' }
                  ].map((stat, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-[#0055CC]">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Our Mission',
                  desc: 'To deliver innovative, efficient, and reliable PET blow molding solutions that empower our clients to achieve manufacturing excellence and sustainable growth.'
                },
                {
                  icon: Eye,
                  title: 'Our Vision',
                  desc: 'To be the global leader in PET manufacturing technology, setting industry standards for quality, innovation, and customer satisfaction.'
                },
                {
                  icon: Lightbulb,
                  title: 'Our Values',
                  desc: 'Quality excellence, continuous innovation, customer-first approach, integrity in all dealings, and commitment to sustainable manufacturing practices.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-[#0055CC]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="text-[#0055CC]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-[#FF7F00] text-[#FF7F00]">
                Our Journey
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Milestones & Achievements
              </h2>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#0055CC]/20 hidden md:block" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg border">
                        <div className="text-[#FF7F00] font-bold text-2xl mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.desc}</p>
                      </div>
                    </div>
                    
                    <div className="w-12 h-12 bg-[#0055CC] rounded-full flex items-center justify-center z-10 flex-shrink-0">
                      <CheckCircle className="text-white" size={24} />
                    </div>
                    
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-[#0055CC]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose MD PET?
              </h2>
              <p className="text-gray-200 max-w-2xl mx-auto">
                We combine decades of expertise with cutting-edge technology to deliver 
                machines that exceed expectations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Factory, title: 'State-of-Art Facility', desc: '50,000 sq ft manufacturing plant with latest machinery' },
                { icon: Award, title: 'Quality Certified', desc: 'ISO 9001:2015 certified for quality management' },
                { icon: Users, title: 'Expert Team', desc: '100+ skilled engineers and technicians' },
                { icon: Globe, title: 'Global Service', desc: '24/7 support across all time zones' }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                  <div className="w-14 h-14 bg-[#FF7F00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Ready to Partner with MD PET?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Let's discuss how we can help you set up or expand your PET bottle 
                    manufacturing operations with our world-class machinery.
                  </p>
                  <div className="flex gap-4">
                    <a href={`tel:${companyInfo.phone}`}>
                      <Button className="bg-[#0055CC] hover:bg-[#004399] text-white">
                        Call Us Now
                      </Button>
                    </a>
                    <a href={`mailto:${companyInfo.email}`}>
                      <Button variant="outline" className="border-[#0055CC] text-[#0055CC]">
                        Email Us
                      </Button>
                    </a>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Send Us a Message</h3>
                  <EnquiryForm compact />
                </div>
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
