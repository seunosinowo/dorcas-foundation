import { SectionHeading } from '@/components/ui/SectionHeading'
import Link from 'next/link'
import { Handshake, Heart, Briefcase, MessageCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
// import PaystackDonateForm from '@/components/payments/PaystackDonateForm'
// import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'

export default function Page() {
  return (
    <>
      {/* <section className="pt-10 md:pt-16 pb-16 md:pb-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeading
                eyebrow="Partnership"
                title="Become a Partner"
                description="Join hands with us to empower youths: give, support aspiring traders, or reach out with a message."
                align="left"
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <Dialog>
                  <DialogTrigger className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-all">
                    Give Now
                    <ArrowRight size={16} className="ml-2" />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[540px] p-0">
                      <DialogHeader className="sr-only">
                        <DialogTitle>Become a Partner</DialogTitle>
                        <DialogDescription>Support our mission with a donation</DialogDescription>
                      </DialogHeader>
                      <PaystackDonateForm simple />
                    </DialogContent>
                </Dialog>
                <Link
                  href="https://wa.me/2348056679806"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors shadow-soft"
                >
                  <MessageCircle size={16} className="mr-2" />
                  Apply via WhatsApp
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-border rounded-full text-sm font-medium hover:bg-muted transition-all"
                >
                  Send a Message
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative w-full h-[260px] rounded-2xl overflow-hidden shadow-soft border border-border">
                <Image
                  src="/image/mum_6.jpg"
                  alt="Community impact"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-6 md:py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              eyebrow="Ways to Partner"
              title="Three Simple Ways to Engage"
              description="Choose the path that works for you—every action helps a young person take a step forward."
            />
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-elevated transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Give</h3>
              <p className="text-muted-foreground mb-4">
                Make a donation to fund training, equipment, and startup support for youths.
              </p>
              {/* <Dialog>
                <DialogTrigger className="inline-flex items-center text-primary font-medium hover:underline">
                  Give
                  <ArrowRight size={16} className="ml-2" />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[540px] p-0">
                  <DialogHeader className="sr-only">
                    <DialogTitle>Give to Dorcas Scholars Fund</DialogTitle>
                    <DialogDescription>Your contribution helps empower youths</DialogDescription>
                  </DialogHeader>
                  <PaystackDonateForm simple />
                </DialogContent>
              </Dialog> */}
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-elevated transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Volunteer</h3>
              <p className="text-muted-foreground mb-4">
                Offer your skill in training others
              </p>
              <Link href="https://wa.me/2348056679806" target="_blank" rel="noreferrer" className="inline-flex items-center text-primary font-medium hover:underline">
                Apply via WhatsApp
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-elevated transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Send a Message</h3>
              <p className="text-muted-foreground mb-4">
                Ask a question, propose a partnership, or email us to get started.
              </p>
              <Link href="/contact" className="inline-flex items-center text-primary font-medium hover:underline">
                Contact Us
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
