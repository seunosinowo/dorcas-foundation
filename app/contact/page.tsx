'use client'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function Page() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('Message sent successfully!', { description: "We'll get back to you as soon as possible." })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        const errorData = await response.json()
        toast.error(errorData.error || 'Failed to send message', { description: 'Please try again later.' })
      }
    } catch (error) {
      toast.error('An error occurred', { description: 'Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4">Get In Touch</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
              We'd Love to <span className="text-primary">Hear From You</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">Whether you want to partner, volunteer, donate, or just learn more about our work—we're here to connect.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">Lagos, Nigeria<br /></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:info@dorcasigbokwe.org" className="text-muted-foreground hover:text-primary transition-colors">info@dorcasigbokwe.org</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+234XXXXXXXXXX" className="text-muted-foreground hover:text-primary transition-colors">+234 </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-secondary text-secondary-foreground rounded-2xl">
                <h3 className="font-display font-semibold text-lg mb-3">Office Hours</h3>
                <p className="text-secondary-foreground/80 text-sm">Monday - Friday: 9:00 AM - 5:00 PM (WAT)<br />Saturday - Sunday: Closed</p>
              </div>
            </div>

            <div>
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft border border-border">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" placeholder="Name" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" placeholder="john@example.com" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors">
                      <option value="">Select a subject</option>
                      <option value="donation">Donation Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="beneficiary">Beneficiary Application</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none" placeholder="How can we help you?" />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-gold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Sending...' : (<><span>Send Message</span><Send size={18} /></>)}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" description="Find answers to common questions about our foundation." />
          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            {[
              { question: 'How can I apply to be a beneficiary?', answer: "You can apply by filling out our contact form and selecting 'Beneficiary Application' as the subject. Our team will reach out with next steps." },
              { question: 'How are donations used?', answer: '100% of donations go directly to our programs—sponsoring trade skills training, providing startup kits, and supporting mentorship initiatives.' },
              { question: 'Can I volunteer with the foundation?', answer: 'Yes! We welcome volunteers who can mentor youth, teach skills, or help with administration. Contact us to learn about current opportunities.' },
              { question: 'How do you select beneficiaries?', answer: 'We prioritize youth who demonstrate commitment and need but lack resources. Our selection process includes interviews and assessments to match skills with training programs.' },
            ].map((faq) => (
              <div key={faq.question} className="bg-card rounded-2xl p-6 shadow-soft border border-border">
                <p className="font-display font-semibold mb-2">{faq.question}</p>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
