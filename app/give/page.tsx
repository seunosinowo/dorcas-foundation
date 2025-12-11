import { SectionHeading } from '@/components/ui/SectionHeading'
import { Heart, Users, Briefcase, Gift, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import FlutterwaveDonateForm from '@/components/payments/FlutterwaveDonateForm'
const mumTeaching1 = '/mum-teaching-1.jpg'

const givingOptions = [
  { icon: Heart, title: 'One-Time Donation', description: 'Make a single contribution to support our programs and help transform lives immediately.' },
  { icon: Users, title: 'Sponsor a Youth', description: "Fully sponsor one young person's training and startup kit. Track their journey to success." },
  { icon: Briefcase, title: 'Corporate Partnership', description: 'Partner with us as a business to create lasting impact in African communities.' },
  { icon: Gift, title: 'In-Kind Donations', description: 'Donate equipment, materials, or services that support our training programs.' },
]

const impactStats = [
  { number: '₦50,000', description: 'Provides training materials for one youth' },
  { number: '₦150,000', description: 'Sponsors complete training for one person' },
  { number: '₦300,000', description: 'Training + business startup kit' },
  { number: '₦1,000,000', description: 'Sponsors 5 youths completely' },
]

export default function Page() {
  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={mumTeaching1} alt="Teaching young people" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4">Support Our Mission</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-background leading-tight">
              Give the Gift of <span className="text-primary">Opportunity</span>
            </h1>
            <p className="mt-6 text-xl text-background/80 max-w-xl">Your generosity empowers young Africans to build sustainable futures. Every contribution creates ripples of change.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Ways to Give" title="Choose How You Want to Help" description="There are many ways to support the Dorcas Igbokwe Foundation and make a difference." />

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {givingOptions.map((option) => (
              <div key={option.title} className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-elevated transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <option.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{option.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{option.description}</p>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <SectionHeading eyebrow="Donate Online" title="Give Online Securely" description="Use your card or bank account to give instantly." />

            <div className="mt-8">
              <FlutterwaveDonateForm simple />
            </div>

            

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Have questions about donating?</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">Other Ways to Help</h2>
            <p className="text-xl text-primary-foreground/80 mb-10">Not able to donate financially? There are still many ways you can support our mission.</p>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: 'Volunteer', description: 'Share your skills and time with our beneficiaries' },
                { title: 'Spread the Word', description: 'Tell others about our mission and impact' },
                { title: 'Refer a Youth', description: 'Know someone who could benefit? Connect them with us' },
              ].map((item) => (
                <div key={item.title} className="bg-primary-foreground/10 rounded-2xl p-6">
                  <p className="font-display font-semibold mb-2">{item.title}</p>
                  <p className="text-primary-foreground/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
