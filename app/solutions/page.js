import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import EnquiryForm from '@/components/EnquiryForm'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, ArrowRight, Settings, Wrench, GraduationCap, TrendingUp, Zap, Droplets, Wind, Thermometer } from 'lucide-react'
import { solutionSteps, companyInfo } from '@/lib/data'

export const metadata = {
  title: 'Turnkey PET Plant Solutions',
  description: 'Complete turnkey PET bottle manufacturing plant setup - from consultation to installation and training. Get your production line running with MD PET.',
  keywords: ['PET plant setup', 'turnkey bottle plant', 'PET manufacturing plant', 'blow molding plant installation'],
  openGraph: {
    title: 'Turnkey PET Plant Solutions | MD PET',
    description: 'End-to-end PET bottle manufacturing plant solutions.',
  }
}

export default function SolutionsPage() {
  const auxiliaryEquipment = [
    { icon: Wind, name: 'Air Compressors', desc: 'High & low pressure compressors for blow molding operations' },
    { icon: Droplets, name: 'Water Chillers', desc: 'Industrial chillers for mould cooling systems' },
    { icon: Thermometer, name: 'Air Dryers', desc: 'Moisture-free compressed air for quality production' },
    { icon: Zap, name: 'Conveyors', desc: 'Air & belt conveyors for bottle handling' }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-[#0055CC]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <Badge className="bg-[#FF7F00] text-white mb-6">Turnkey Solutions</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Complete PET Plant Setup Solutions
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  From consultation to commissioning, we provide end-to-end support 
                  for setting up your PET bottle manufacturing plant.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-[#FF7F00] hover:bg-[#e67300] text-white">
                      Get Plant Quote
                    </Button>
                  </Link>
                  <a href={`tel:${companyInfo.phone}`}>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0055CC]">
                      Speak to Expert
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/34222005/pexels-photo-34222005.jpeg"
                  alt="PET Plant Setup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-[#0055CC] text-[#0055CC]">
                Our Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How We Set Up Your Plant
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our systematic approach ensures smooth setup and quick production startup.
              </p>
            </div>

            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#0055CC]/20 hidden lg:block" />
              
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                {solutionSteps.map((step, index) => (
                  <div key={step.step} className="relative">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border text-center relative z-10">
                      <div className="w-16 h-16 bg-[#0055CC] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">{step.step}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                    {index < solutionSteps.length - 1 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                        <ArrowRight className="text-[#FF7F00]" size={24} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Provide */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 border-[#FF7F00] text-[#FF7F00]">
                  Complete Package
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  What's Included in Our Turnkey Solution
                </h2>
                <p className="text-gray-600 mb-8">
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
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/11679684/pexels-photo-11679684.jpeg"
                    alt="Complete Plant Setup"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Auxiliary Equipment */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-[#0055CC] text-[#0055CC]">
                Supporting Equipment
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Auxiliary Equipment for Complete Setup
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {auxiliaryEquipment.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition">
                  <div className="w-14 h-14 bg-[#0055CC]/10 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="text-[#0055CC]" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capacity Options */}
        <section className="py-20 bg-[#0055CC]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Plant Capacity Options
              </h2>
              <p className="text-gray-200 max-w-2xl mx-auto">
                Choose from our range of production capacities based on your market needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Starter Plant', capacity: '1000-2000 BPH', ideal: 'Small businesses & startups', machines: 'Semi-automatic 2-cavity' },
                { name: 'Growth Plant', capacity: '3000-4000 BPH', ideal: 'Medium scale production', machines: '3-4 Cavity Automatic', featured: true },
                { name: 'Industrial Plant', capacity: '8000-10000 BPH', ideal: 'Large scale operations', machines: '6 Cavity Servo Electric' }
              ].map((plant, index) => (
                <div key={index} className={`rounded-2xl p-8 ${plant.featured ? 'bg-white scale-105' : 'bg-white/10 backdrop-blur'}`}>
                  {plant.featured && (
                    <Badge className="bg-[#FF7F00] text-white mb-4">Most Popular</Badge>
                  )}
                  <h3 className={`text-xl font-bold mb-2 ${plant.featured ? 'text-gray-900' : 'text-white'}`}>
                    {plant.name}
                  </h3>
                  <div className={`text-3xl font-bold mb-4 ${plant.featured ? 'text-[#0055CC]' : 'text-[#FF7F00]'}`}>
                    {plant.capacity}
                  </div>
                  <ul className={`space-y-2 mb-6 text-sm ${plant.featured ? 'text-gray-600' : 'text-gray-300'}`}>
                    <li>• Ideal for: {plant.ideal}</li>
                    <li>• Machine: {plant.machines}</li>
                    <li>• Complete auxiliary setup</li>
                    <li>• Installation & training</li>
                  </ul>
                  <Link href="/contact">
                    <Button className={`w-full ${plant.featured ? 'bg-[#FF7F00] hover:bg-[#e67300] text-white' : 'bg-white text-[#0055CC]'}`}>
                      Get Quote
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Ready to Set Up Your PET Plant?
                </h2>
                <p className="text-gray-600 mb-8">
                  Our team of experts is ready to help you design and set up your ideal 
                  PET bottle manufacturing facility. Get a customized quote today.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-[#0055CC] hover:bg-[#004399] text-white">
                      Request Plant Quote
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button size="lg" variant="outline" className="border-[#0055CC] text-[#0055CC]">
                      View Machines
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get Plant Consultation</h3>
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
