'use client'

import { useMemo, useState, useEffect, useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/sonner'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { CheckCircle2 } from 'lucide-react'

type PaystackResponse = {
  reference: string
  [key: string]: unknown
}

type PaystackConfig = {
  key: string
  email: string
  amount: number
  currency?: string
  ref: string
  callback: (response: PaystackResponse) => void
  onClose: () => void
  metadata?: unknown
}

declare global {
  interface Window {
    PaystackPop: {
      setup: (config: PaystackConfig) => { openIframe: () => void }
    }
  }
}

type Props = { defaultEmail?: string; simple?: boolean }

export default function PaystackDonateForm({ defaultEmail = '', simple = false }: Props) {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState(defaultEmail)
  const [amount, setAmount] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [currency] = useState('NGN')
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    // If script is already globally available
    if (window.PaystackPop) {
      setScriptLoaded(true)
      return
    }

    // Manual script injection into the form to satisfy Paystack's "must be in form" check
    const script = document.createElement('script')
    script.src = "https://js.paystack.co/v1/inline.js"
    script.async = true
    script.onload = () => setScriptLoaded(true)
    
    if (formRef.current) {
      formRef.current.appendChild(script)
    }

    // Fallback interval check
    const interval = setInterval(() => {
      if (window.PaystackPop) {
        setScriptLoaded(true)
        clearInterval(interval)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  
  const currencyName = 'Nigerian Naira'

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY

  const canProceedToStep2 = useMemo(() => {
    const amt = Number(amount)
    return !Number.isNaN(amt) && amt > 0
  }, [amount])

  const disabled = useMemo(() => {
    const amt = Number(amount)
    return !email || !publicKey || Number.isNaN(amt) || amt <= 0
  }, [email, publicKey, amount])

  const startPayment = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (step === 1) {
      if (canProceedToStep2) {
        setStep(2)
      }
      return
    }
    try {
      const amt = Math.round(Number(amount))
      if (!publicKey) {
        toast.error('Missing Paystack public key')
        return
      }
      if (!window.PaystackPop) {
        toast.error('Paystack script not loaded')
        return
      }

      const emailToUse = email || defaultEmail || 'donor@example.com'
      
      const handler = window.PaystackPop.setup({
        key: publicKey,
        email: emailToUse,
        amount: amt * 100, // Paystack expects amount in kobo/cents
        currency,
        ref: `DSF-${Date.now()}`,
        metadata: {
          custom_fields: [
            {
              display_name: "Full Name",
              variable_name: "full_name",
              value: name
            },
            {
              display_name: "Phone Number",
              variable_name: "phone_number",
              value: phone
            }
          ]
        },
        callback: (response: PaystackResponse) => {
          console.log('Payment successful', response)
          toast.success('Payment successful')
          setShowSuccessModal(true)

          // Send appreciation email (async)
          fetch('/api/donate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: emailToUse,
              name: name,
              amount: amt,
              reference: response.reference
            })
          }).catch((err) => {
            console.error('Failed to send donation email', err)
          })

          // Reset form
          setAmount('')
          setEmail('')
          setName('')
          setPhone('')
          setStep(1)
        },
        onClose: () => {
          console.log('Payment cancelled')
          toast.warning('Payment cancelled')
        },
      })
      handler.openIframe()
    } catch (error) {
      console.error('Paystack error:', error)
      toast.error('Unable to start payment')
    }
  }

  return (
    <>
    <form 
      id="paymentForm" 
      ref={formRef}
      onSubmit={startPayment}
      className="bg-card rounded-2xl p-6 shadow-soft border border-border"
    >
      <div className="grid gap-4">
        {step === 1 ? (
          <>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Amount (NGN)</label>
              <Input 
                type="number" 
                min={1} 
                placeholder="Enter amount" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                required 
                autoFocus
              />
            </div>
            <Button 
              type="submit" 
              disabled={!canProceedToStep2} 
              className="mt-2"
            >
              Continue to Details
            </Button>
          </>
        ) : (
          <>
            {!simple && (
              <>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Full Name</label>
                  <Input placeholder="e.g. Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Phone (optional)</label>
                  <Input type="tel" placeholder="08012345678" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </>
            )}
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Email</label>
              <Input 
                type="email" 
                placeholder="you@example.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                autoFocus
              />
            </div>
            <div className="flex gap-3 mt-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setStep(1)}
                className="flex-1"
              >
                Back
              </Button>
              <Button 
                type="submit" 
                disabled={disabled || !scriptLoaded} 
                className="flex-[2]"
              >
                {scriptLoaded ? `Give ₦${Number(amount).toLocaleString()}` : 'Loading...'}
              </Button>
            </div>
          </>
        )}
        {!publicKey && (
          <p className="text-xs text-destructive/80">Set payment public key in .env</p>
        )}
      </div>
    </form>

    <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <div className="space-y-2">
            <DialogTitle className="text-2xl font-bold text-center">Thank You!</DialogTitle>
            <DialogDescription className="text-center text-base">
              Thank you for your payment to Dorcas Scholars Fund. Your support helps us continue our mission.
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className="flex justify-center mt-4">
          <Button 
            onClick={() => setShowSuccessModal(false)}
            className="w-full sm:w-auto"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  </>
)
}
