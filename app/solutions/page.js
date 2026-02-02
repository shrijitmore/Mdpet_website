'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import EnquiryForm from '@/components/EnquiryForm'
import ScrollReveal from '@/components/ScrollReveal'
import AnimatedImage from '@/components/AnimatedImage'
import AnimatedCounter from '@/components/AnimatedCounter'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, ArrowRight, Settings, Wrench, GraduationCap, TrendingUp, Zap, Droplets, Wind, Thermometer, Package, Truck, Users, Headphones } from 'lucide-react'
import { solutionSteps, companyInfo } from '@/lib/data'

const auxiliaryEquipment = [
  { icon: Wind, name: 'Air Compressors', desc: 'High & low pressure compressors for blow molding operations' },
  { icon: Droplets, name: 'Water Chillers', desc: 'Industrial chillers for mould cooling systems' },
  { icon: Thermometer, name: 'Air Dryers', desc: 'Moisture-free compressed air for quality production' },
  { icon: Zap, name: 'Conveyors', desc: 'Air & belt conveyors for bottle handling' }
]

const processSteps = [
  { icon: Users, title: 'Consultation', desc: 'Understand your requirements' },
  { icon: Settings, title: 'Design', desc: 'Custom solution planning' },
  { icon: Package, title: 'Manufacturing', desc: 'Precision engineering' },
  { icon: Truck, title: 'Delivery', desc: 'On-time shipping' },
  { icon: Wrench, title: 'Installation', desc: 'Expert setup team' },
  { icon: GraduationCap, title: 'Training', desc: 'Operator certification' },
  { icon: Headphones, title: 'Support', desc: '24/7 assistance' },
  { icon: TrendingUp, title: 'Optimization', desc: 'Performance tuning' }
]

export default function SolutionsPage() {
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
          
          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 right-20 w-40 h-40 bg-[#FF7F00]/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Badge className="bg-[#FF7F00] text-white mb-6">Turnkey Solutions</Badge>
                </motion.div>
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Complete PET Plant Setup Solutions
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-200 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  From consultation to commissioning, we provide end-to-end support 
                  for setting up your PET bottle manufacturing plant.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Link href="/contact">
                    <Button size="lg" className="bg-[#FF7F00] hover:bg-[#e67300] text-white group">
                      Get Plant Quote
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Button>
                  </Link>
                  <a href={`tel:${companyInfo.phone}`}>
                    <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0055CC]">
                      Speak to Expert
                    </Button>
                  </a>
                </motion.div>
              </div>
              
              <motion.div 
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <AnimatedImage
                  src="https://images.pexels.com/photos/34222005/pexels-photo-34222005.jpeg"
                  alt="PET Plant Setup"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Flow */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 border-[#0055CC] text-[#0055CC]">
                  Our Process
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  End-to-End Implementation
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Our systematic 8-step approach ensures smooth setup and quick production startup.
                </p>
              </div>
            </ScrollReveal>

            {/* Process Steps Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <ScrollReveal key={index} animation="fadeUp" delay={index * 0.1}>
                  <motion.div
                    className="relative"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center h-full">
                      {/* Step Number */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FF7F00] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        {index + 1}
                      </div>
                      
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-[#0055CC] to-[#003d99] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <step.icon className="text-white" size={28} />
                      </motion.div>
                      <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.desc}</p>
                    </div>
                    
                    {/* Connector Arrow */}
                    {index < processSteps.length - 1 && index % 4 !== 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-[#0055CC] z-10">
                        <ArrowRight size={20} />
                      </div>
                    )}
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal animation="fadeRight">
                <div>
                  <Badge variant="outline" className="mb-4 border-[#FF7F00] text-[#FF7F00]">
                    Complete Package
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    What's Included in Our <span className="text-[#0055CC]">Turnkey Solution</span>
                  </h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    We provide everything you need to start your PET bottle production, 
                    from machinery to training.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      'PET Blow Molding Machine (Semi/Fully Automatic)',
                      'Air Compressor (High & Low Pressure)',
                      'Water Chiller System',
                      'Air Dryer & Filters',
                      'Conveyor Systems',
                      'Complete Installation & Commissioning',
                      'Operator Training Program',
                      '1 Year Warranty & Support',
                      'Spare Parts Kit'
                    ].map((item, index) => (
                      <ScrollReveal key={index} animation="fadeRight" delay={index * 0.05}>
                        <motion.div 
                          className="flex items-center gap-3"
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="text-white" size={14} />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </motion.div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fadeLeft" delay={0.2}>
                <div className="relative">
                  <motion.div 
                    className="aspect-square rounded-3xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AnimatedImage
                      src="https://images.pexels.com/photos/11679684/pexels-photo-11679684.jpeg"
                      alt="Complete Plant Setup"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  
                  {/* Floating Badge */}
                  <motion.div 
                    className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="text-3xl font-bold text-[#0055CC]">
                      <AnimatedCounter value={100} suffix="%" />
                    </div>
                    <div className="text-sm text-gray-600">Customer Satisfaction</div>
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Auxiliary Equipment */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 border-[#0055CC] text-[#0055CC]">
                  Supporting Equipment
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Auxiliary Equipment for Complete Setup
                </h2>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {auxiliaryEquipment.map((item, index) => (
                <ScrollReveal key={index} animation="scale" delay={index * 0.1}>
                  <motion.div 
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full"
                    whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 85, 204, 0.15)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-[#0055CC]/10 to-[#0055CC]/20 rounded-2xl flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="text-[#0055CC]" size={32} />
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Capacity Options */}
        <section className="py-24 bg-gradient-to-br from-[#0055CC] to-[#003d99] relative overflow-hidden">
          {/* Background Elements */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Plant Capacity Options
                </h2>
                <p className="text-gray-200 max-w-2xl mx-auto text-lg">
                  Choose from our range of production capacities based on your market needs.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: 'Starter Plant', capacity: '1000-2000', unit: 'BPH', ideal: 'Small businesses & startups', machines: 'Semi-automatic 2-cavity', price: '₹25-35 Lakhs*' },
                { name: 'Growth Plant', capacity: '3000-4000', unit: 'BPH', ideal: 'Medium scale production', machines: '3-4 Cavity Automatic', featured: true, price: '₹50-70 Lakhs*' },
                { name: 'Industrial Plant', capacity: '8000-10000', unit: 'BPH', ideal: 'Large scale operations', machines: '6 Cavity Servo Electric', price: '₹1-1.5 Crore*' }
              ].map((plant, index) => (
                <ScrollReveal key={index} animation="fadeUp" delay={index * 0.15}>
                  <motion.div 
                    className={`rounded-3xl p-8 ${plant.featured ? 'bg-white scale-105 shadow-2xl' : 'bg-white/10 backdrop-blur'}`}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {plant.featured && (
                      <Badge className="bg-[#FF7F00] text-white mb-4">Most Popular</Badge>
                    )}
                    <h3 className={`text-xl font-bold mb-2 ${plant.featured ? 'text-gray-900' : 'text-white'}`}>
                      {plant.name}
                    </h3>
                    <div className={`text-4xl font-bold mb-1 ${plant.featured ? 'text-[#0055CC]' : 'text-[#FF7F00]'}`}>
                      <AnimatedCounter value={parseInt(plant.capacity.split('-')[1])} />
                    </div>
                    <div className={`text-sm mb-4 ${plant.featured ? 'text-gray-500' : 'text-gray-300'}`}>
                      Bottles Per Hour
                    </div>
                    <ul className={`space-y-2 mb-6 text-sm ${plant.featured ? 'text-gray-600' : 'text-gray-300'}`}>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={14} className={plant.featured ? 'text-green-500' : 'text-[#FF7F00]'} />
                        Ideal for: {plant.ideal}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={14} className={plant.featured ? 'text-green-500' : 'text-[#FF7F00]'} />
                        Machine: {plant.machines}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={14} className={plant.featured ? 'text-green-500' : 'text-[#FF7F00]'} />
                        Complete auxiliary setup
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={14} className={plant.featured ? 'text-green-500' : 'text-[#FF7F00]'} />
                        Installation & training
                      </li>
                    </ul>
                    <div className={`text-lg font-bold mb-4 ${plant.featured ? 'text-[#FF7F00]' : 'text-white'}`}>
                      {plant.price}
                    </div>
                    <Link href="/contact">
                      <Button className={`w-full ${plant.featured ? 'bg-[#FF7F00] hover:bg-[#e67300] text-white' : 'bg-white text-[#0055CC] hover:bg-gray-100'}`}>
                        Get Quote
                      </Button>
                    </Link>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
            
            <p className="text-center text-gray-300 text-sm mt-8">
              * Prices are indicative and may vary based on specific requirements
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal animation="fadeRight">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Ready to Set Up Your <span className="text-[#0055CC]">PET Plant?</span>
                  </h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    Our team of experts is ready to help you design and set up your ideal 
                    PET bottle manufacturing facility. Get a customized quote today.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact">
                      <Button size="lg" className="bg-[#0055CC] hover:bg-[#004399] text-white group">
                        Request Plant Quote
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </Button>
                    </Link>
                    <Link href="/products">
                      <Button size="lg" variant="outline" className="border-[#0055CC] text-[#0055CC]">
                        View Machines
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fadeLeft" delay={0.2}>
                <motion.div 
                  className="bg-gray-50 rounded-3xl p-8"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Get Plant Consultation</h3>
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
