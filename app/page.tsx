import { SectionHeading } from '@/components/ui/SectionHeading'
import Link from 'next/link'
import { ArrowRight, Heart, Target, Users, Lightbulb, Handshake, Scissors, Hammer, Utensils, MonitorSmartphone, Brush, Wrench, Cpu, PenTool, Code, Camera, Palette, PartyPopper, Zap, Car, Sun, Ruler, Shield, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import PaystackDonateForm from '@/components/payments/PaystackDonateForm'
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
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
    title: 'Funding Academic Scholarships',
    description:
      'We provide scholarships for formal education, helping young Africans access university, polytechnic, and other academic opportunities.',
  },
  {
    title: 'Supporting Trade Skills Scholarships',
    description:
      'We sponsor practical, income-generating skills training in areas like fashion, tech, catering, carpentry, and more.',
  },
  {
    title: 'Connecting Scholars to Opportunities',
    description:
      'We link scholars to mentorship, startup support, and job opportunities that help them start earning and building their future.',
  },
]

const tradeCategories = [
  {
    title: 'Academic Disciplines',
    items: [
      { icon: Lightbulb, title: 'Science & Technology' },
      { icon: PenTool, title: 'Arts & Humanities' },
      { icon: Cpu, title: 'Engineering' },
      { icon: Users, title: 'Social Sciences' },
      { icon: Shield, title: 'Law & Security Studies' },
      { icon: Heart, title: 'Health & Medical Sciences' },
      { icon: Code, title: 'Computer Science' },
      { icon: Brush, title: 'Creative Arts' },
    ],
  },
  {
    title: 'Digital & Creative Trades',
    items: [
      { icon: Cpu, title: 'ICT Support & Computer Maintenance' },
      { icon: Code, title: 'Web Development' },
      { icon: Palette, title: 'Graphic Design' },
      { icon: MonitorSmartphone, title: 'Digital Marketing' },
      { icon: Camera, title: 'Video Editing & Content Production' },
      { icon: PenTool, title: 'UI/UX Design' },
      { icon: Camera, title: 'Photography & Videography' },
      { icon: PartyPopper, title: 'Event Decoration & Planning' },
      { icon: Utensils, title: 'Baking & Pastry Making' },
      { icon: Utensils, title: 'Catering & Culinary Skills' },
      { icon: Palette, title: 'Jewelry & Accessories Design' },
      { icon: Brush, title: 'Interior Decoration' },
    ],
  },
  {
    title: 'Technical Trades',
    items: [
      { icon: Wrench, title: 'Plumbing' },
      { icon: Zap, title: 'Electrical Installation' },
      { icon: Wrench, title: 'Welding & Fabrication' },
      { icon: Hammer, title: 'Carpentry' },
      { icon: Ruler, title: 'Aluminum & POP Fittings' },
      { icon: Car, title: 'Auto Mechanics / Auto Repair' },
      { icon: Sun, title: 'Solar Panel Installation & Renewable Energy' },
      { icon: Zap, title: 'Generator Repair & Maintenance' },
      { icon: Wrench, title: 'Refrigeration Systems' },
      { icon: Hammer, title: 'Masonry & Tiling' },
      { icon: Brush, title: 'Painting & Finishing' },
      { icon: Shield, title: 'CCTV & Security Systems' },
      { icon: Zap, title: 'Inverter Installation & Maintenance' },
      { icon: Wrench, title: 'Metal Gates & Window Frames' },
      { icon: Wrench, title: 'Borehole Pump Installation' },
      { icon: Ruler, title: 'Cable Trunking & House Wiring' },
      { icon: MonitorSmartphone, title: 'Smartphone & Device Repair' },
      { icon: Wrench, title: 'Industrial Machine Maintenance' },
    ],
  },
]

const impactSoFar = [
  { number: '20', label: 'Scholarships given' },
  { number: '2', label: 'Partners institutions' },
  { number: '1000', label: 'Annual Scholarships targeted' },
  { number: '5', label: 'Employment secured' },
]

export default function Page() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src={mumTeaching1} 
            alt="Trade skills training" 
            fill 
            priority 
            sizes="100vw"
            className="object-cover object-top" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background/60 to-background" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fade-in-up max-w-4xl mx-auto">
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight tracking-tight">
              Dorcas Scholars Fund <span className="text-secondary font-extrabold"></span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-foreground/90 font-medium max-w-3xl mx-auto drop-shadow-md">
              Providing Scholarships. <br className="lg:hidden" />
              Building Futures.
            </p>
            <div className="mt-10 flex flex-row items-center justify-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-secondary/80 transition-all shadow-elevated hover:shadow-lg gap-2">
                    Give now
                  </button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[540px] p-0">
                  <DialogHeader className="sr-only">
                    <DialogTitle>Support Dorcas Scholars Fund</DialogTitle>
                    <DialogDescription>Your donation helps us provide scholarships and training</DialogDescription>
                  </DialogHeader>
                  <PaystackDonateForm simple />
                </DialogContent>
              </Dialog>

              <Link 
                href="/apply"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/80 transition-all shadow-elevated hover:shadow-lg gap-2"
              >
                Apply here
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
                <Image 
                  src={mumCommunity1} 
                  alt="Community work" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top" 
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl overflow-hidden shadow-gold border-4 border-background hidden lg:block">
                <Image 
                  src={mumPortrait2} 
                  alt="Dorcas Igbokwe portrait" 
                  fill 
                  sizes="192px"
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 md:p-10 shadow-soft">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-secondary-foreground/80 leading-relaxed text-lg">A future where every African youth has access to learning opportunities that enable them to earn, thrive, and live with dignity.</p>
            </div>

            <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 md:p-10 shadow-soft">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-secondary-foreground/80 leading-relaxed text-lg">To invest in learning by providing academic and trade scholarships that empower African youth to pursue their passions, build valuable skills, and achieve financial independence.</p>
            </div>

            <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 md:p-10 shadow-soft">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Our Goal</h3>
              <p className="text-secondary-foreground/80 leading-relaxed text-lg">To empower 100,000 African youth from low-income communities through academic and trade scholarships.</p>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <button className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all">
                  Support Our Mission
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[540px] p-0">
                <DialogHeader className="sr-only">
                  <DialogTitle>Support Our Mission</DialogTitle>
                  <DialogDescription>Your donation helps us provide scholarships and training</DialogDescription>
                </DialogHeader>
                <PaystackDonateForm simple />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="" title="What we do" description="We believe every young person deserves the opportunity to build a sustainable future—whether through academics or practical skills." />
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

      <section className="py-4 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="" title="Our impact so far" description="Applications are now open on a rolling basis" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {impactSoFar.map((stat) => (
              <div key={stat.label} className="bg-card rounded-2xl p-8 shadow-soft border border-border text-center">
                <p className="font-display text-4xl font-bold text-foreground">{stat.number}</p>
                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Academic & Trade Skills" title="Some of the Academic & Trade Areas We Support" description="We focus on both academic disciplines and trade skills that open doors for work, entrepreneurship, and lifelong learning." />
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {tradeCategories.map((cat) => (
              <div
                key={cat.title}
                className={`bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-elevated transition-shadow ${cat.title === 'Technical Trades' ? 'md:col-span-2' : ''}`}
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">{cat.title}</h3>
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${cat.title === 'Technical Trades' ? 'lg:grid-cols-3' : ''}`}>
                  {cat.items.map((item) => (
                    <div key={item.title} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-foreground">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How It Works" title="From Application to Impact" description="Our simple, transparent process helps youths gain skills, start earning, and build dignified livelihoods." />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto justify-items-center text-center">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Apply here</h3>
              <p className="text-muted-foreground">Interested youths submit applications and are assessed based on need.</p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Interview</h3>
              <p className="text-muted-foreground">
              Shortlisted applicants are interviewed to assess their motivation, goals, and depth of their need.</p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Handshake className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Scholarship</h3>
              <p className="text-muted-foreground">Successful candidates are awarded scholarships to pursue academic or trade programs, empowering them to build a brighter future.</p>
            </div>
          </div>
          <div className="mt-10 flex flex-row items-center justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <button className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-secondary/80 transition-all shadow-elevated hover:shadow-lg gap-2">
                  Give now
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[540px] p-0">
                <DialogHeader className="sr-only">
                  <DialogTitle>Give to Dorcas Scholars Fund</DialogTitle>
                  <DialogDescription>Your donation helps us provide scholarships and training</DialogDescription>
                </DialogHeader>
                <PaystackDonateForm simple />
              </DialogContent>
            </Dialog>

            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/80 transition-all shadow-elevated hover:shadow-lg gap-2"
            >
              Apply here
            </Link>
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

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Give Online Securely" description="Use your card or bank account to give instantly." />
          <div className="mt-8 max-w-2xl mx-auto">
            <PaystackDonateForm simple />
          </div>
        </div>
      </section>

      <section className="relative h-[50vh] min-h-[400px]">
        <Image 
          src={mumTeaching1} 
          alt="Teaching young people" 
          fill 
          sizes="100vw"
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
      </section>
    </>
  )
}
