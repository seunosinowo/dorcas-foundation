import { SectionHeading } from '@/components/ui/SectionHeading'
import { Heart, Target, Users, Lightbulb, Handshake } from 'lucide-react'
import Image from 'next/image'
const mumPortrait2 = '/image/mum_6.jpg'
const mumPrayer1 = '/image/mum_15.jpg'
const mumFamily1 = '/mum-family-1.jpg'

const values = [
  { icon: Heart, title: 'Faith', description: "We trust in God's purpose and act with integrity." },
  { icon: Users, title: 'Love', description: 'We serve others with compassion and kindness.' },
  { icon: Handshake, title: 'Respect', description: 'We honour the dignity and potential of every youth.' },
  { icon: Lightbulb, title: 'Growth', description: 'We encourage continuous progress and development.' },
  { icon: Target, title: 'Dignity', description: 'We help youths build lives they can be proud of.' },
]

export default function Page() {
  return (
    <>
      <section className="relative py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4">About the Foundation</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Honouring a Life of <span className="text-primary">Love & Service</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">The Dorcas Scholars Fund continues the legacy of a woman who dedicated her life to uplifting others.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated relative h-[500px]">
                <Image src={mumPrayer1} alt="Dorcas Igbokwe" fill className="object-cover object-top " />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl overflow-hidden shadow-gold border-4 border-background hidden lg:block">
                <Image src={mumPortrait2} alt="Dorcas in prayer" fill className="object-cover" />
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-tight">About the Foundation</h2>
              <div className="mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>The Dorcas Scholars Fund was created to honour Dorcas Igbokwe, a woman whose life reflected love, compassion, and a deep commitment to helping others.</p>
                <p>We continue her legacy by giving young Africans the skills, support, and confidence they need to build sustainable income and take care of their basic needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">Why We Exist</h2>
              <div className="mt-6 space-y-4 text-secondary-foreground/80 text-lg leading-relaxed">
                <p>Many young Africans have the desire to work but lack the skills or capital to begin. The Dorcas Scholars Fund bridges that gap by equipping them with practical skills and startup support.</p>
                <p>Our work gives youths the opportunity to earn, provide for themselves, and build a future filled with dignity and hope—just as Dorcas Igbokwe did throughout her life.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-elevated relative h-[400px]">
                <Image src={mumFamily1} alt="Dorcas with family" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft border border-border">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">To empower African youths to earn a living by providing trade skills training and financial support.</p>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 shadow-gold">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-primary-foreground/90 leading-relaxed text-lg">To offer scholarships for trade skills training and provide start-up support that helps young Africans launch income-generating businesses.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading eyebrow="Our Impact Goal" title="Empowering 10,000 African Youths" description="Over the next 5 years, we aim to transform 10,000 lives through skills training and business support—2,000 young people empowered every year." />

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '10,000', label: 'Youth Target' },
                { number: '5', label: 'Years' },
                { number: '2,000', label: 'Per Year' },
                { number: '∞', label: 'Impact' },
              ].map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl p-6 shadow-soft border border-border">
                  <p className="font-display text-3xl md:text-4xl font-bold text-primary">{stat.number}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Values" title="The Principles That Guide Us" description="These values reflect the life and spirit of Dorcas Scholars Fund." />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-2xl p-6 shadow-soft border border-border text-center hover:shadow-elevated transition-shadow">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
