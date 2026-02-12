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

type PaystackConfig = {
  key: string
  email: string
  amount: number
  currency?: string
  ref: string
  callback: (response: any) => void
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
      // We don't necessarily want to remove the script on unmount 
      // as it might be needed by other instances, but if it's specific to this form:
      // if (formRef.current && script.parentNode === formRef.current) {
      //   formRef.current.removeChild(script)
      // }
    }
  }, [])
  
  const currencyName = 'Nigerian Naira'

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY

  const disabled = useMemo(() => {
    const amt = Number(amount)
    const hasEmail = simple ? true : !!email
    return !hasEmail || !publicKey || Number.isNaN(amt) || amt <= 0
  }, [email, publicKey, amount, simple])

  const startPayment = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
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
        callback: (response: any) => {
          console.log('Payment successful', response)
          toast.success('Payment successful')
          setShowSuccessModal(true)
          // Reset form
          setAmount('')
          if (!simple) {
            setName('')
            setPhone('')
          }
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
      {simple ? (
        <div className="grid gap-4">
          <div className="grid gap-3">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Amount (NGN)</label>
              <Input type="number" min={1} placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
          </div>
          <Button type="submit" disabled={disabled || !scriptLoaded} className="mt-2">
            {scriptLoaded ? 'Give Now' : 'Loading...'}
          </Button>
          {!publicKey && (
            <p className="text-xs text-destructive/80">Set payment public key in .env</p>
          )}
        </div>
      ) : (
        <div className="grid gap-4">
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Full Name</label>
            <Input placeholder="e.g. Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Email</label>
            <Input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Phone (optional)</label>
            <Input type="tel" placeholder="08012345678" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Amount (NGN)</label>
            <Input type="number" min={100} placeholder="5000" value={amount} onChange={(e) => setAmount(e.target.value)} required />
          </div>
          <Button type="submit" disabled={disabled || !scriptLoaded} className="mt-2">
            {scriptLoaded ? 'Give Now' : 'Loading...'}
          </Button>
          {!publicKey && (
            <p className="text-xs text-destructive/80">Set payment public key in .env</p>
          )}
        </div>
      )}
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
