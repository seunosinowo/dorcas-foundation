'use client'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'


const extraFiles = [
  '/image/mum_2.jpg',
  '/image/mum_4.jpg',
  '/image/mum_7.jpg',
  '/image/mum_5.jpg',
  
  '/image/mum_8.jpg',
  '/image/mum_11.jpg',
  '/image/mum_12.jpg',
  '/image/mum_9.jpg',
  '/image/mum_10.jpg',
  
  
  '/image/mum_13.jpg',
  '/image/mum_14.jpg',
  '/image/mum_15.jpg',
]

const galleryImages = [
  ...extraFiles.map((src, i) => ({ src, alt: `Gallery Image ${i + 1}`, category: 'Gallery' })),
]
const categories = ['Gallery']

// Categories removed per request; we keep a simple text banner instead

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState('Gallery')
  const filteredImages = activeCategory === 'Gallery' ? galleryImages : []
  const benefitItems = [
    { title: 'Trade Skills Scholarships', description: 'Sponsoring practical training that leads directly to income.' },
    { title: 'Start-Up Support', description: 'Providing equipment and seed funding to launch small businesses.' },
    { title: 'Mentorship & Guidance', description: 'Connecting youths with mentors for planning and growth.' },
    { title: 'Community Impact', description: 'Encouraging service, dignity, and sustainable livelihoods.' },
  ]

  return (
    <>
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4">Photo Gallery</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Precious <span className="text-primary">Memories</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">A collection of cherished moments celebrating the life, love, and legacy of Dorcas Igbokwe.</p>
          </div>
        </div>
      </section>

      <section className="py-8 border-b border-border sticky top-16 md:top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category ? 'bg-primary text-primary-foreground shadow-gold' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {activeCategory === 'Gallery' ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredImages.map((image, index) => (
                <button key={index} onClick={() => setSelectedImage(image.src)} className="group relative aspect-square rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all">
                  <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-background text-sm font-medium">Cherished Memory</span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <SectionHeading eyebrow="Her Impact" title="Benefits She Inspired" description="How her legacy empowers and uplifts." />
              <div className="mt-8 grid gap-6">
                {benefitItems.map((item) => (
                  <div key={item.title} className="bg-card rounded-xl p-6 shadow-soft border border-border">
                    <p className="font-display text-lg font-semibold text-foreground">{item.title}</p>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground italic">This gallery is a living tribute.</p>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 p-2 text-background hover:text-primary transition-colors" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <img src={selectedImage} alt="Gallery image" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-elevated" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  )
}
