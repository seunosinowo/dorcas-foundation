import { SectionHeading } from '@/components/ui/SectionHeading'
import Link from 'next/link'
import { ArrowRight, Heart, Target, Users, Lightbulb, Handshake, Scissors, Hammer, Utensils, MonitorSmartphone, Brush, Wrench, Cpu, PenTool, Briefcase, Gift } from 'lucide-react'
import Image from 'next/image'
import FlutterwaveDonateForm from '@/components/payments/FlutterwaveDonateForm'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
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

const trades = [
  { icon: PenTool, title: 'UI/UX Design' },
  { icon: Scissors, title: 'Barbing' },
  { icon: Utensils, title: 'Catering' },
  { icon: Hammer, title: 'Carpentry' },
  { icon: Wrench, title: 'Welding' },
  { icon: Brush, title: 'Beauty & Makeup' },
  { icon: MonitorSmartphone, title: 'Digital Skills' },
  { icon: Cpu, title: 'Computer Literacy' },
]

const impactSoFar = [
  { number: '25+', label: 'Youths Supported' },
  { number: '12', label: 'Full Scholarships' },
  { number: '8', label: 'Start-up Kits Provided' },
]

const givingOptions = [
  { icon: Heart, title: 'One-Time Donation', description: 'Make a single contribution to support our programs and help transform lives immediately.', amount: 'Any amount helps' },
  { icon: Users, title: 'Sponsor a Youth', description: "Fully sponsor one young person's training and startup kit. Track their journey to success.", amount: 'Any amount helps'},
  { icon: Briefcase, title: 'Corporate Partnership', description: 'Partner with us as a business to create lasting impact in African communities.', amount: 'Custom packages' },
  { icon: Gift, title: 'In-Kind Donations', description: 'Donate equipment, materials, or services that support our training programs.', amount: 'Various needs' },
]

export default function Page() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={mumTeaching1} alt="Trade skills training" fill priority className="object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background/60 to-background" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fade-in-up max-w-4xl mx-auto">
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight tracking-tight">
              Dorcas Scholars <span className="text-secondary font-extrabold">Fund</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-foreground/90 font-medium max-w-3xl mx-auto drop-shadow-md">Empowering African Youth Through Skills & Opportunity</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-secondary/80 transition-all shadow-elevated hover:shadow-lg gap-2">
                    Support Our Mission
                    <ArrowRight size={18} />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[540px] p-0">
                  <FlutterwaveDonateForm simple />
                </DialogContent>
              </Dialog>
              <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 border-2 border-foreground/20 text-foreground font-semibold rounded-full hover:bg-foreground/5 transition-all">
                Learn More
              </Link>
            </div>
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
                The Dorcas Scholars Fund was created to honour Dorcas Igbokwe, a woman whose life reflected love, compassion, and a deep commitment to helping others. We continue her legacy by giving young Africans the skills, support, and confidence they need to build sustainable income and take care of their basic needs.
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
              <p className="text-muted-foreground leading-relaxed">To financially empower African youth through trade skills training scholarships.</p>
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
                Empower <span className="text-primary">100,000</span> African Youths in 5 Years
              </p>
              <p className="mt-2 text-muted-foreground">2,000 empowered every year through training and business support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Give to the Vision" title="Your Support Changes Lives" description="Sponsor training or provide start-up kits to help youths begin earning with dignity." />
          <div className="mt-10 flex items-center justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <button id="pay-now-button" className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-secondary/80 transition-all gap-2">
                  Give Now
                  <ArrowRight size={18} />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[540px] p-0">
                <FlutterwaveDonateForm simple />
              </DialogContent>
            </Dialog>
          </div>

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
                    <p className="text-sm font-medium text-primary">{option.amount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Trade Skills Training" title="Practical Skills That Lead to Income" description="We focus on skills that open immediate doors for work and entrepreneurship." />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {trades.map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 shadow-soft border border-border text-center hover:shadow-elevated transition-shadow">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-display font-semibold text-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Impact So Far" title="How Many People We’ve Supported" description="We’re tracking lives transformed through training and starter support." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {impactSoFar.map((stat) => (
              <div key={stat.label} className="bg-card rounded-2xl p-8 shadow-soft border border-border text-center">
                <p className="font-display text-4xl font-bold text-foreground">{stat.number}</p>
                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
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

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Donate Online" title="Give Online Securely" description="Use your card or bank account to give instantly." />
          <div className="mt-8 max-w-2xl mx-auto">
            <FlutterwaveDonateForm simple />
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
