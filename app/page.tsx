import { SectionHeading } from '@/components/ui/SectionHeading'
import Link from 'next/link'
import { ArrowRight, Heart, Target, Users, Lightbulb, Handshake } from 'lucide-react'
import Image from 'next/image'
const mumPortrait1 = '/mum-portrait-1.jpg'
const mumCommunity1 = '/image/mum_6.jpg'
const mumTeaching1 = '/image/mum-teaching-1.jpg'
const mumPortrait2 = '/image/mum_15.jpg'

const values = [
  { icon: Heart, title: 'Faith', description: "We trust in God's purpose and act with integrity." },
  { icon: Users, title: 'Love', description: 'We serve others with compassion and kindness.' },
  { icon: Handshake, title: 'Respect', description: 'We honour the dignity and potential of every youth.' },
  { icon: Lightbulb, title: 'Growth', description: 'We encourage continuous progress and development.' },
  { icon: Target, title: 'Dignity', description: 'We help youths build lives they can be proud of.' },
]

const whatWeDo = [
  {
    title: 'Trade Skills Scholarships',
    description:
      'We sponsor training in fashion, tech, catering, beauty, carpentry, welding, and other practical skills that lead directly to income.',
  },
  {
    title: 'Business Start-Up Support',
    description:
      'We provide equipment, starter kits, or seed funding to help beneficiaries start small businesses after completing their training.',
  },
  {
    title: 'Mentorship & Guidance',
    description:
      'We connect youths with mentors who support them in planning, starting, and growing their businesses.',
  },
]

export default function Page() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={mumPortrait1} alt="Dorcas Igbokwe" fill priority className="object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fade-in-up max-w-4xl mx-auto">
            <span className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4">In Loving Memory</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Dorcas Igbokwe <span className="text-primary">Foundation</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">Empowering African Youth Through Skills & Opportunity</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/give" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all shadow-gold hover:shadow-lg gap-2">
                Support Our Mission
                <ArrowRight size={18} />
              </Link>
              <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 border-2 border-foreground/20 text-foreground font-semibold rounded-full hover:bg-foreground/5 transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse-soft" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in-delay-1">
              <span className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4">About the Foundation</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">Continuing Her Legacy of Love</h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                The Dorcas Igbokwe Foundation was created to honour Dorcas Igbokwe, a woman whose life reflected love, compassion, and a deep commitment to helping others. We continue her legacy by giving young Africans the skills, support, and confidence they need to build sustainable income and take care of their basic needs.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 mt-8 text-primary font-medium hover:gap-3 transition-all">
                Read Our Full Story
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative animate-fade-in-delay-2">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated h-[400px]">
                <Image src={mumCommunity1} alt="Community work" fill className="object-cover object-top" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl overflow-hidden shadow-gold border-4 border-background hidden lg:block">
                <Image src={mumPortrait2} alt="Dorcas Igbokwe portrait" fill className="object-cover" />
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
              <p className="text-muted-foreground leading-relaxed">To empower African youths to earn a living by providing trade skills training and financial support.</p>
            </div>

            <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 md:p-10 shadow-soft">
              <div className="w-14 h-14 rounded-full bg-secondary-foreground/10 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-secondary-foreground/80 leading-relaxed">To offer scholarships for trade skills training and provide start-up support that helps young Africans launch income-generating businesses.</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-primary/5 rounded-2xl px-8 py-6 md:px-12 md:py-8">
              <p className="text-sm uppercase tracking-wider text-primary font-medium mb-2">Our Impact Goal</p>
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Empower <span className="text-primary">10,000</span> African Youths in 5 Years
              </p>
              <p className="mt-2 text-muted-foreground">2,000 empowered every year through training and business support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What We Do" title="Transforming Lives Through Practical Skills" description="We believe every young person deserves the opportunity to build a sustainable future." />

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {whatWeDo.map((item, index) => (
              <div key={item.title} className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-elevated transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary font-display font-bold text-xl">{index + 1}</div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Values" title="The Principles That Guide Us" description="These values reflect the life and spirit of Dorcas Igbokwe." />

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center group">
                <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <value.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[50vh] min-h-[400px]">
        <Image src={mumTeaching1} alt="Teaching young people" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
      </section>
    </>
  )
}
