'use client'

import { useState, useEffect } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { nl } from 'date-fns/locale'
import "react-datepicker/dist/react-datepicker.css"
import toast from 'react-hot-toast'
import Layout from '@/components/Layout'
import ReCAPTCHA from "react-google-recaptcha"
import Link from 'next/link'

// Register Dutch locale
registerLocale('nl', nl)

export default function AppointmentPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    kenteken: '',
    name: '',
    email: '',
    phone: '',
    description: '',
    date: null as Date | null
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.date) {
      toast.error('Selecteer een datum voor de afspraak')
      return
    }

    if (!captchaValue) {
      toast.error('Bevestig dat u geen robot bent')
      return
    }

    try {
      setLoading(true)
      
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: captchaValue
        }),
      })

      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Er is iets misgegaan')
      }
      
      // Reset form
      setFormData({
        kenteken: '',
        name: '',
        email: '',
        phone: '',
        description: '',
        date: null
      })
      setCaptchaValue(null)
      
      // Go back to step 1
      setStep(1)
      
      toast.success('Bedankt voor uw aanvraag! We nemen zo spoedig mogelijk contact met u op.')
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error(error instanceof Error ? error.message : 'Er is iets misgegaan')
    } finally {
      setLoading(false)
    }
  }

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value)
  }

  return (
    <Layout>
      <div className="pt-20 min-h-screen bg-zinc-950">
        <div className="container py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">Maak een Afspraak</h1>
            
            {/* Progress Steps */}
            <div className="flex justify-between mb-12">
              <div className={`flex-1 text-center ${step >= 1 ? 'text-red-500' : 'text-gray-500'}`}>
                <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${
                  step >= 1 ? 'border-red-500 bg-red-500/10' : 'border-gray-500'
                }`}>1</div>
                <span className="text-sm mt-2">Kenteken</span>
              </div>
              <div className={`flex-1 text-center ${step >= 2 ? 'text-red-500' : 'text-gray-500'}`}>
                <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${
                  step >= 2 ? 'border-red-500 bg-red-500/10' : 'border-gray-500'
                }`}>2</div>
                <span className="text-sm mt-2">Details</span>
              </div>
              <div className={`flex-1 text-center ${step >= 3 ? 'text-red-500' : 'text-gray-500'}`}>
                <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${
                  step >= 3 ? 'border-red-500 bg-red-500/10' : 'border-gray-500'
                }`}>3</div>
                <span className="text-sm mt-2">Bevestiging</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-zinc-900 p-8 rounded-lg shadow-lg">
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-base font-medium text-gray-200 mb-2">
                      Kenteken
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="AA-11-BB"
                      className="mt-1 block w-full rounded-md bg-zinc-800 border-zinc-700 text-white shadow-sm focus:border-red-500 focus:ring-red-500 text-base py-3 px-4"
                      value={formData.kenteken}
                      onChange={(e) => setFormData({...formData, kenteken: e.target.value.toUpperCase()})}
                    />
                    <p className="mt-2 text-sm text-gray-400">Voer uw kenteken in zonder streepjes</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-4 rounded-md text-center transition-colors text-base"
                  >
                    Volgende
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-base font-medium text-gray-200 mb-2">
                      Gewenste Datum
                    </label>
                    <DatePicker
                      selected={formData.date}
                      onChange={(date) => setFormData({...formData, date})}
                      locale="nl"
                      dateFormat="P"
                      minDate={new Date()}
                      className="mt-1 block w-full rounded-md bg-zinc-800 border-zinc-700 text-white shadow-sm focus:border-red-500 focus:ring-red-500 text-base py-3 px-4"
                      placeholderText="Selecteer een datum"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-gray-200 mb-2">
                      Omschrijving van de werkzaamheden
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="mt-1 block w-full rounded-md bg-zinc-800 border-zinc-700 text-white shadow-sm focus:border-red-500 focus:ring-red-500 text-base py-3 px-4"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Beschrijf hier wat er aan uw auto gedaan moet worden"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-4 px-4 rounded-md text-center transition-colors text-base"
                    >
                      Terug
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-4 rounded-md text-center transition-colors text-base"
                    >
                      Volgende
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-base font-medium text-gray-200 mb-2">
                      Naam
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Uw volledige naam"
                      className="mt-1 block w-full rounded-md bg-zinc-800 border-zinc-700 text-white shadow-sm focus:border-red-500 focus:ring-red-500 text-base py-3 px-4"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-gray-200 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="uw.email@voorbeeld.nl"
                      className="mt-1 block w-full rounded-md bg-zinc-800 border-zinc-700 text-white shadow-sm focus:border-red-500 focus:ring-red-500 text-base py-3 px-4"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-gray-200 mb-2">
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06 12345678"
                      className="mt-1 block w-full rounded-md bg-zinc-800 border-zinc-700 text-white shadow-sm focus:border-red-500 focus:ring-red-500 text-base py-3 px-4"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  
                  <div className="mt-6">
                    <ReCAPTCHA
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Replace with your actual site key in production
                      onChange={handleCaptchaChange}
                      theme="dark"
                    />
                    <p className="mt-2 text-xs text-gray-400">
                      Door op 'Afspraak Aanvragen' te klikken, gaat u akkoord met onze <Link href="/privacyverklaring" className="text-red-500 hover:underline">privacyverklaring</Link>.
                    </p>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-4 px-4 rounded-md text-center transition-colors text-base"
                      disabled={loading}
                    >
                      Terug
                    </button>
                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-4 rounded-md text-center transition-colors text-base"
                      disabled={loading || !captchaValue}
                    >
                      {loading ? 'Bezig met verzenden...' : 'Afspraak Aanvragen'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
} 