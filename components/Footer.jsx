import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Youtube, Linkedin } from 'lucide-react'
import { companyInfo, products } from '@/lib/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#0055CC] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">MD</span>
              </div>
              <div>
                <span className="font-bold text-2xl text-white">MD PET</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              India's leading manufacturer of PET Blow Molding Machines with 15+ years of expertise in providing complete plant solutions.
            </p>
            <div className="flex gap-4">
              <a href={companyInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0055CC] transition">
                <Facebook size={20} />
              </a>
              <a href={companyInfo.socialMedia.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <Youtube size={20} />
              </a>
              <a href={companyInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-[#FF7F00] transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#FF7F00] transition">About Us</Link></li>
              <li><Link href="/products" className="hover:text-[#FF7F00] transition">Products</Link></li>
              <li><Link href="/solutions" className="hover:text-[#FF7F00] transition">Solutions</Link></li>
              <li><Link href="/gallery" className="hover:text-[#FF7F00] transition">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF7F00] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Products</h3>
            <ul className="space-y-3">
              {products.slice(0, 6).map((product) => (
                <li key={product.id}>
                  <Link href={`/products/${product.slug}`} className="hover:text-[#FF7F00] transition">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#FF7F00] flex-shrink-0 mt-1" />
                <span>
                  {companyInfo.address.street},<br />
                  {companyInfo.address.city}, {companyInfo.address.state}<br />
                  {companyInfo.address.pincode}, {companyInfo.address.country}
                </span>
              </li>
              <li>
                <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-3 hover:text-[#FF7F00] transition">
                  <Phone size={20} className="text-[#FF7F00]" />
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 hover:text-[#FF7F00] transition">
                  <Mail size={20} className="text-[#FF7F00]" />
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} MD PET. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-500 hover:text-white transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
