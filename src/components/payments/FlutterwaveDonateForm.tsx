'use client'

import { useMemo, useState } from 'react'
import Script from 'next/script'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select'
import { toast } from '@/components/ui/sonner'

type FlutterwaveCustomer = { email: string; phone_number?: string; name?: string }
type FlutterwaveCustomizations = { title?: string; description?: string; logo?: string }
type FlutterwaveConfig = {
  public_key: string
  tx_ref: string
  amount: number
  currency?: string
  payment_options?: string
  customer: FlutterwaveCustomer
  customizations?: FlutterwaveCustomizations
  callback?: (data: unknown) => void
  onclose?: () => void
}

declare global {
  interface Window {
    FlutterwaveCheckout: (config: FlutterwaveConfig) => void
  }
}

type Props = { defaultEmail?: string }

export default function FlutterwaveDonateForm({ defaultEmail = '' }: Props) {
  const [email, setEmail] = useState(defaultEmail)
  const [amount, setAmount] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [currency, setCurrency] = useState('NGN')
  const [currencies] = useState<string[]>([
    'GBP','CAD','XAF','COP','EGP','EUR','GHS','KES','INR','NGN','RWF','SLL','ZAR','TZS','UGX','USD','XOF','ZMW',
  ])
  const currencyNames: Record<string, string> = {
    NGN: 'Nigerian Naira',
    USD: 'US Dollar',
    GBP: 'British Pound Sterling',
    CAD: 'Canadian Dollar',
    XAF: 'Central African CFA Franc',
    COP: 'Colombian Peso',
    EGP: 'Egyptian Pound',
    EUR: 'Euro',
    GHS: 'Ghanaian Cedi',
    KES: 'Kenyan Shilling',
    INR: 'Indian Rupee',
    RWF: 'Rwandan Franc',
    SLL: 'Sierra Leonean Leone',
    ZAR: 'South African Rand',
    TZS: 'Tanzanian Shilling',
    UGX: 'Ugandan Shilling',
    XOF: 'West African CFA Franc',
    ZMW: 'Zambian Kwacha',
  }
  const publicKey = process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY

  const disabled = useMemo(() => {
    const amt = Number(amount)
    return !email || !publicKey || Number.isNaN(amt) || amt <= 0
  }, [email, publicKey, amount])

  const startPayment = () => {
    try {
      const amt = Math.round(Number(amount))
      if (!publicKey) {
        toast.error('Missing Flutterwave public key')
        return
      }
      if (!window.FlutterwaveCheckout) {
        toast.error('Flutterwave script not loaded')
        return
      }

      const txRef = `DSF-${Date.now()}`
      const paymentOptions = currency === 'NGN' ? 'card,banktransfer,ussd' : 'card'
      window.FlutterwaveCheckout({
        public_key: publicKey,
        tx_ref: txRef,
        amount: amt,
        currency,
        payment_options: paymentOptions,
        customer: { email, phone_number: phone, name },
        customizations: {
          title: 'Dorcas Scholars Fund',
          description: 'Donation',
        },
        callback: () => {
          toast.success('Payment successful')
        },
        onclose: () => {
          toast.warning('Payment cancelled')
        },
      })
    } catch {
      toast.error('Unable to start payment')
    }
  }


  return (
    <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
      <Script src="https://checkout.flutterwave.com/v3.js" strategy="afterInteractive" />
      <div className="grid gap-4">
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Full Name</label>
          <Input placeholder="e.g. Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Email</label>
          <Input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Phone (optional)</label>
          <Input type="tel" placeholder="08012345678" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Currency</label>
          <Select value={currency} onValueChange={setCurrency}>
            <SelectTrigger>
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent className="max-h-60 overflow-y-auto">
              {currencies.map((c) => (
                <SelectItem key={c} value={c}>
                  {currencyNames[c] ? `${currencyNames[c]} (${c})` : c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Amount ({currency})</label>
          <Input type="number" min={100} placeholder="5000" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <Button disabled={disabled} onClick={startPayment} className="mt-2">
          Donate Now
        </Button>
        {!publicKey && (
          <p className="text-xs text-destructive/80">Set payment public key in .env.local</p>
        )}
      </div>
    </div>
  )
}