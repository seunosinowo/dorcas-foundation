import { SectionHeading } from '@/components/ui/SectionHeading'
import Link from 'next/link'
import {
  MessageCircle, ClipboardList, BadgeCheck, GraduationCap,
  Briefcase, Wallet, ArrowRight, CheckCircle, Scissors, Hammer,
  Utensils, MonitorSmartphone, Brush, Wrench, Cpu, PenTool,
  Code, Camera, Palette, PartyPopper, Zap, Car, Sun, Ruler, Shield,
  Heart, Target, Users, Lightbulb, Handshake
} from 'lucide-react'

export default function Page() {
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

  const steps = [
    {
      number: '01',
      title: 'Apply via WhatsApp',
      description:
        'Send us a message on WhatsApp with your basic information and career interests.',
      details: ['Full Name', 'Age', 'Location', 'Skills or interests', 'Career goals'],
      icon: MessageCircle,
      color: 'bg-green-50 text-green-600',
      borderColor: 'border-green-200',
      button: true,
    },
    {
      number: '02',
      title: 'Interview & Assessment',
      description:
        "We'll schedule a short conversation to understand your goals and readiness.",
      details: ['Your interests', 'Your career goals', 'Your readiness for training'],
      icon: ClipboardList,
      color: 'bg-blue-50 text-blue-600',
      borderColor: 'border-blue-200',
    },
    {
      number: '03',
      title: 'Get Matched to a Skill Program',
      description:
        'Based on your goals, we match you to the right training partner.',
      details: [
        'Digital Skills',
        'Creative & Craft Skills',
        'Business & Vocational Skills',
        'Trade & Technical Skills',
      ],
      icon: BadgeCheck,
      color: 'bg-purple-50 text-purple-600',
      borderColor: 'border-purple-200',
    },
    {
      number: '04',
      title: 'Scholarship & Training',
      description:
        'If selected, DSF covers the full training cost. Begin learning real skills for income.',
      details: [
        'Academic scholarship support',
        'Trade & vocational training',
        'Hands-on technical workshops',
        'Professional mentorship',
      ],
      icon: GraduationCap,
      color: 'bg-amber-50 text-amber-600',
      borderColor: 'border-amber-200',
    },
    {
      number: '05',
      title: 'Job or Startup Support',
      description:
        'After training, we continue supporting your transition to employment or entrepreneurship.',
      details: [
        'Helping you find a job',
        'Supporting your small business',
        'Connecting you to partners',
      ],
      icon: Briefcase,
      color: 'bg-indigo-50 text-indigo-600',
      borderColor: 'border-indigo-200',
    },
    
  ]

  // Helper to get step color for timeline connector
  const getStepColor = (index: number) => {
    const colors = ['green', 'blue', 'purple', 'amber', 'indigo', 'emerald']
    return colors[index % colors.length]
  }

  return (
    <>
      {/* HERO - cleaner, with subtle pattern */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 pt-20 pb-16 md:pt-28 md:pb-24">
        {/* Soft background ornament */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(34,197,94,0.03)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.03)_0%,_transparent_50%)]"></div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              How to Apply
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl">
              At the Dorcas Scholars Fund, we make the process simple and accessible.
              Follow these steps to begin your journey toward gaining a trade skill and
              building a sustainable income.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://wa.me/2348056679806"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <MessageCircle size={20} className="mr-3" />
                Apply via WhatsApp
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS - vertical timeline anchored to the left, cleaner and more scannable */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="relative">
              {/* Vertical line - only visible on md+ */}
              <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-green-200 via-blue-200 to-emerald-200 hidden md:block"></div>

              <div className="space-y-12">
                {steps.map((step, idx) => (
                  <div key={step.number} className="relative flex flex-col md:flex-row md:items-start md:gap-8">
                    {/* Step marker - always visible */}
                    <div className="flex items-center md:block mb-4 md:mb-0">
                      <div
                        className={`
                          flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl
                          ${step.color} border-4 border-white shadow-md
                          md:ml-0 md:h-14 md:w-14 md:rounded-xl
                        `}
                      >
                        <step.icon size={28} className="md:hidden" />
                        <step.icon size={22} className="hidden md:block" />
                      </div>
                      {/* connector dot for mobile line - hidden on desktop */}
                      <div className="ml-4 md:hidden">
                        <span className="text-sm font-bold uppercase tracking-wider text-gray-400">
                          Step {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 md:pl-8">
                      <div
                        className={`
                          overflow-hidden rounded-2xl border bg-white p-6 shadow-sm
                          transition-all duration-200 hover:shadow-md
                          ${step.borderColor}
                        `}
                      >
                        {/* Desktop step number chip */}
                        <div className="mb-3 hidden items-center gap-2 md:flex">
                          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700">
                            Step {step.number}
                          </span>
                        </div>

                        <h3 className="font-display text-xl font-bold text-gray-900 md:text-2xl">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-gray-600">{step.description}</p>

                        {step.details && (
                          <ul className="mt-4 space-y-2.5">
                            {step.details.map((detail, i) => (
                              <li key={i} className="flex items-start">
                                <CheckCircle
                                  size={18}
                                  className="mr-3 mt-0.5 shrink-0 text-green-500"
                                />
                                <span className="text-gray-700">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {step.button && (
                          <div className="mt-5">
                            <Link
                              href="https://wa.me/2348056679806"
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center font-semibold text-green-600 transition-colors hover:text-green-700 group"
                            >
                              Message us on WhatsApp
                              <ArrowRight
                                size={18}
                                className="ml-2 transition-transform group-hover:translate-x-1"
                              />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRADE SKILLS - Academic & Trade Skills section from homepage */}
      <section className="py-16 md:py-24 bg-slate-50/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            eyebrow="Academic & Trade Skills" 
            title="Some of the Academic & Trade Areas We Support" 
            description="We focus on both academic disciplines and trade skills that open doors for work, entrepreneurship, and lifelong learning." 
          />
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