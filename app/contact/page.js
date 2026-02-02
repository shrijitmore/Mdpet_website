import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import EnquiryForm from '@/components/EnquiryForm'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { companyInfo } from '@/lib/data'

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with MD PET for all your PET blow molding machine needs. Request a quote, schedule a visit, or get technical support.',
  openGraph: {
    title: 'Contact MD PET - Get Your Free Quote',
    description: 'Contact us for PET blow molding machines, plant setup consultation, and technical support.',
  }
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-[#0055CC]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <Badge className="bg-[#FF7F00] text-white mb-6">Contact Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Discuss Your Requirements
              </h1>
              <p className="text-xl text-gray-200">
                Get in touch with our team for product inquiries, quotes, or technical support. 
                We're here to help you succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <p className="text-gray-600">
                    Have a question about our machines or need a customized solution? 
                    Our team is ready to assist you.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  <a href={`tel:${companyInfo.phone}`} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-[#0055CC]/5 transition">
                    <div className="w-12 h-12 bg-[#0055CC] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Phone</h3>
                      <p className="text-[#0055CC] font-medium">{companyInfo.phone}</p>
                      <p className="text-sm text-gray-500">Mon-Sat, 9AM-6PM IST</p>
                    </div>
                  </a>

                  <a href={`mailto:${companyInfo.email}`} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-[#0055CC]/5 transition">
                    <div className="w-12 h-12 bg-[#0055CC] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Email</h3>
                      <p className="text-[#0055CC] font-medium">{companyInfo.email}</p>
                      <p className="text-sm text-gray-500">Response within 24 hours</p>
                    </div>
                  </a>

                  <a 
                    href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">WhatsApp</h3>
                      <p className="text-green-600 font-medium">{companyInfo.whatsapp}</p>
                      <p className="text-sm text-gray-500">Instant response available</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-[#FF7F00] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        {companyInfo.address.street},<br />
                        {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.pincode},<br />
                        {companyInfo.address.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-[#0055CC] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-xl border">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                  <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                  <EnquiryForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Visit Our Facility</h2>
              <p className="text-gray-600">Schedule a visit to see our machines in action</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MD PET Location"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0055CC]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prefer to Talk to Someone?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Our sales team is available to answer your questions and provide expert guidance 
              on choosing the right machine for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${companyInfo.phone}`}>
                <Button size="lg" className="bg-[#FF7F00] hover:bg-[#e67300] text-white">
                  <Phone className="mr-2" size={20} />
                  Call Now
                </Button>
              </a>
              <a 
                href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0055CC]">
                  <MessageCircle className="mr-2" size={20} />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
