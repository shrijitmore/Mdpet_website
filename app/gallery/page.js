'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { X, Play, ChevronLeft, ChevronRight, Image as ImageIcon, Video } from 'lucide-react'
import { galleryImages, galleryVideos } from '@/lib/data'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeTab, setActiveTab] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const categories = ['all', 'factory', 'machinery', 'products', 'team']

  const filteredImages = activeTab === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab)

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setSelectedImage(filteredImages[index])
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const newIndex = (lightboxIndex + 1) % filteredImages.length
    setLightboxIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  const prevImage = () => {
    const newIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
    setLightboxIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-[#0055CC]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <Badge className="bg-[#FF7F00] text-white mb-6">Gallery</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Work in Action
              </h1>
              <p className="text-xl text-gray-200">
                Explore our manufacturing facility, machines, and successful installations worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                variant={activeTab === 'images' ? 'default' : 'outline'}
                onClick={() => setActiveTab('all')}
                className={activeTab !== 'images' ? 'border-gray-300' : 'bg-[#0055CC]'}
              >
                <ImageIcon className="mr-2" size={18} />
                All Images
              </Button>
              {categories.filter(c => c !== 'all').map((category) => (
                <Button
                  key={category}
                  variant={activeTab === category ? 'default' : 'outline'}
                  onClick={() => setActiveTab(category)}
                  className={activeTab === category ? 'bg-[#0055CC]' : 'border-gray-300 capitalize'}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Images Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Photos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <ImageIcon className="text-[#0055CC]" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-medium text-sm">{image.title}</p>
                    <Badge variant="secondary" className="mt-1 text-xs capitalize">
                      {image.category}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              <Video className="inline mr-2" size={24} />
              Videos
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {galleryVideos.map((video) => (
                <div key={video.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-5xl p-0 bg-black/95 border-none">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
            >
              <X className="text-white" size={24} />
            </button>
            
            {selectedImage && (
              <div className="relative">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                </div>
                
                {/* Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
                >
                  <ChevronLeft className="text-white" size={28} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
                >
                  <ChevronRight className="text-white" size={28} />
                </button>
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-medium text-lg">{selectedImage.title}</p>
                  <p className="text-gray-400 text-sm mt-1">
                    {lightboxIndex + 1} of {filteredImages.length}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
