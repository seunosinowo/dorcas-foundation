import { SectionHeading } from '@/components/ui/SectionHeading'
import Link from 'next/link'
import { MessageCircle, ClipboardList, BadgeCheck, GraduationCap, Briefcase, Wallet, ArrowRight, CheckCircle, Scissors, Hammer, Utensils, MonitorSmartphone, Brush, Wrench, Cpu, PenTool, Code, Camera, Palette, PartyPopper, Zap, Car, Sun, Ruler, Shield } from 'lucide-react'

export default function Page() {
  const tradeCategories = [
    {
      title: 'Digital Trades',
      items: [
        { icon: Cpu, title: 'ICT Support & Computer Maintenance' },
        { icon: Code, title: 'Web Development' },
        { icon: Palette, title: 'Graphic Design' },
        { icon: MonitorSmartphone, title: 'Digital Marketing' },
        { icon: Camera, title: 'Video Editing & Content Production' },
        { icon: PenTool, title: 'UI/UX Design' },
        { icon: Cpu, title: 'Data Analysis' },
        { icon: Cpu, title: 'Computer Networking Essentials' },
      ],
    },
    {
      title: 'Creative Trades',
      items: [
        { icon: Scissors, title: 'Tailoring & Fashion Design' },
        { icon: Brush, title: 'Beauty & Cosmetology (hair, makeup, nails. etc)' },
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

  const steps = [
    {
      number: "01",
      title: "Apply via WhatsApp",
      description: "Send us a message on WhatsApp with your basic information and career interests.",
      details: [
        "Full Name",
        "Age",
        "Location",
        "Skills or interests",
        "Career goals"
      ],
      icon: MessageCircle,
      color: "bg-green-50 text-green-600",
      borderColor: "border-green-200",
      button: true
    },
    {
      number: "02",
      title: "Interview & Assessment",
      description: "We'll schedule a short conversation to understand your goals and readiness.",
      details: [
        "Your interests",
        "Your career goals",
        "Your readiness for training"
      ],
      icon: ClipboardList,
      color: "bg-blue-50 text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      number: "03",
      title: "Get Matched to a Skill Program",
      description: "Based on your goals, we match you to the right training partner.",
      details: [
        "Digital Skills",
        "Creative & Craft Skills",
        "Business & Vocational Skills",
        "Trade & Technical Skills"
      ],
      icon: BadgeCheck,
      color: "bg-purple-50 text-purple-600",
      borderColor: "border-purple-200"
    },
    {
      number: "04",
      title: "Scholarship & Training",
      description: "If selected, DSF covers the full training cost. Begin learning real skills for income.",
      icon: GraduationCap,
      color: "bg-amber-50 text-amber-600",
      borderColor: "border-amber-200"
    },
    {
      number: "05",
      title: "Job or Startup Support",
      description: "After training, we continue supporting your transition to employment or entrepreneurship.",
      details: [
        "Helping you find a job",
        "Supporting your small business",
        "Connecting you to partners"
      ],
      icon: Briefcase,
      color: "bg-indigo-50 text-indigo-600",
      borderColor: "border-indigo-200"
    },
    {
      number: "06",
      title: "Begin Earning",
      description: "Start earning and building a sustainable future for yourself and your family.",
      icon: Wallet,
      color: "bg-emerald-50 text-emerald-600",
      borderColor: "border-emerald-200"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              How to Apply
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At the Dorcas Scholars Fund, we make the process simple and accessible. Follow these steps to begin your journey toward gaining a trade skill and building a sustainable income.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://wa.me/2348056679806"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <MessageCircle size={20} className="mr-3" />
                Apply via WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Mobile: single-column ordered steps */}
            <div className="space-y-8 lg:hidden">
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  <div className={`bg-white rounded-xl p-4 border ${step.borderColor} shadow-soft`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center`}>
                        <step.icon size={22} />
                      </div>
                      <div className="text-3xl font-bold text-gray-100">{step.number}</div>
                    </div>
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    {step.details && (
                      <ul className="space-y-2 mb-4">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {step.button && (
                      <Link href="https://wa.me/2348056679806" target="_blank" rel="noreferrer" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 group">
                        Message us on WhatsApp
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop/large: two-column timeline */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Left Column - Odd Steps */}
              <div className="space-y-8 lg:mt-12">
                {steps.filter((_, i) => i % 2 === 0).map((step) => (
                  <div key={step.number} className="relative">
                    <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-200 via-blue-200 to-emerald-200 translate-x-1/2" />
                    <div className={`bg-white rounded-xl p-4 border ${step.borderColor} shadow-soft hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-1`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center`}>
                          <step.icon size={22} />
                        </div>
                        <div className="text-3xl font-bold text-gray-100">{step.number}</div>
                      </div>
                      <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      {step.details && (
                        <ul className="space-y-2 mb-4">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {step.button && (
                        <Link href="https://wa.me/2348056679806" target="_blank" rel="noreferrer" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 group">
                          Message us on WhatsApp
                          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column - Even Steps */}
              <div className="space-y-8">
                {steps.filter((_, i) => i % 2 === 1).map((step) => (
                  <div key={step.number} className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-indigo-200 -translate-x-1/2" />
                    <div className={`bg-white rounded-xl p-4 border ${step.borderColor} shadow-soft hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-1`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center`}>
                          <step.icon size={22} />
                        </div>
                        <div className="text-3xl font-bold text-gray-100">{step.number}</div>
                      </div>
                      <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      {step.details && (
                        <ul className="space-y-2 mb-4">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline Line */}
            <div className="lg:hidden relative mt-12">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-200 via-blue-200 to-emerald-200 transform -translate-x-1/2" />
              
              {steps.map((step, index) => (
                <div key={step.number} className="relative mb-8 last:mb-0">
                  <div className={`absolute left-1/2 w-8 h-8 rounded-full ${step.color} border-4 border-white transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center`}>
                    <step.icon size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trade Skills Training Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Trade Skills Training" title="Some of the Trade Skills we Support" description="We focus on trade skills that open immediate doors for work and entrepreneurship." />
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
    </>
  )
}
