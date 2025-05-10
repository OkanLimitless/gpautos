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
      
      // First verify the reCAPTCHA token
      const recaptchaResponse = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: captchaValue }),
      })
      
      const recaptchaData = await recaptchaResponse.json()
      
      if (!recaptchaResponse.ok || !recaptchaData.success) {
        throw new Error('reCAPTCHA verificatie mislukt. Probeer het opnieuw.')
      }
      
      // If reCAPTCHA verification is successful, submit the form
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
      <div className="pt-32 min-h-screen white-section">
        <div className="container py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="section-title-dark text-center mb-8">Maak een Afspraak</h1>
            
            {/* Progress Steps */}
            <div className="flex justify-between mb-12">
              <div className={`flex-1 text-center ${step >= 1 ? 'text-primary' : 'text-text-dark/50'}`}>
                <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${
                  step >= 1 ? 'border-primary bg-primary/10' : 'border-text-dark/30'
                }`}>1</div>
                <span className="text-sm mt-2 uppercase tracking-wide">Kenteken</span>
              </div>
              <div className={`flex-1 text-center ${step >= 2 ? 'text-primary' : 'text-text-dark/50'}`}>
                <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${
                  step >= 2 ? 'border-primary bg-primary/10' : 'border-text-dark/30'
                }`}>2</div>
                <span className="text-sm mt-2 uppercase tracking-wide">Details</span>
              </div>
              <div className={`flex-1 text-center ${step >= 3 ? 'text-primary' : 'text-text-dark/50'}`}>
                <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${
                  step >= 3 ? 'border-primary bg-primary/10' : 'border-text-dark/30'
                }`}>3</div>
                <span className="text-sm mt-2 uppercase tracking-wide">Bevestiging</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded shadow-sonic">
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-base font-medium text-white mb-2 uppercase tracking-wide">
                      Kenteken
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="AA-11-BB"
                      className="mt-1 block w-full rounded bg-black border-accent text-white shadow-sm focus:border-primary focus:ring-primary text-base py-3 px-4"
                      value={formData.kenteken}
                      onChange={(e) => setFormData({...formData, kenteken: e.target.value.toUpperCase()})}
                    />
                    <p className="mt-2 text-sm text-text-gray">Voer uw kenteken in zonder streepjes</p>
                  </div>
                  
                  <div>
                    <label className="block text-base font-medium text-white mb-2 uppercase tracking-wide">
                      Chassisnummer
                    </label>
                    <input
                      type="text"
                      placeholder="Volledig chassisnummer"
                      className="mt-1 block w-full rounded bg-black border-accent text-white shadow-sm focus:border-primary focus:ring-primary text-base py-3 px-4"
                    />
                    <p className="mt-2 text-sm text-text-gray">Vul hier het volledige chassisnummer van uw voertuig in</p>
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 px-4 rounded text-center transition-colors text-base uppercase tracking-wide shadow-sonic"
                  >
                    Volgende
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-base font-medium text-white mb-2 uppercase tracking-wide">
                      Gewenste Datum
                    </label>
                    <DatePicker
                      selected={formData.date}
                      onChange={(date) => setFormData({...formData, date})}
                      locale="nl"
                      dateFormat="P"
                      minDate={new Date()}
                      className="mt-1 block w-full rounded bg-black border-accent text-white shadow-sm focus:border-primary focus:ring-primary text-base py-3 px-4"
                      placeholderText="Selecteer een datum"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-white mb-2 uppercase tracking-wide">
                      Omschrijving van de werkzaamheden
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="mt-1 block w-full rounded bg-black border-accent text-white shadow-sm focus:border-primary focus:ring-primary text-base py-3 px-4"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Beschrijf hier wat er aan uw auto gedaan moet worden"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-full border border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-4 rounded text-center transition-colors text-base uppercase tracking-wide"
                    >
                      Terug
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 px-4 rounded text-center transition-colors text-base uppercase tracking-wide shadow-sonic"
                    >
                      Volgende
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-base font-medium text-white mb-2 uppercase tracking-wide">
                      Naam
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Uw volledige naam"
                      className="mt-1 block w-full rounded bg-black border-accent text-white shadow-sm focus:border-primary focus:ring-primary text-base py-3 px-4"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-white mb-2 uppercase tracking-wide">
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="uw.email@voorbeeld.nl"
                      className="mt-1 block w-full rounded bg-black border-accent text-white shadow-sm focus:border-primary focus:ring-primary text-base py-3 px-4"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-white mb-2 uppercase tracking-wide">
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06 12345678"
                      className="mt-1 block w-full rounded bg-black border-accent text-white shadow-sm focus:border-primary focus:ring-primary text-base py-3 px-4"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  
                  <div className="mt-8">
                    <div className="flex justify-center mb-4">
                      <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                        onChange={handleCaptchaChange}
                        theme="dark"
                      />
                    </div>
                    
                    <div className="text-center text-sm text-text-gray mb-6">
                      Door op versturen te klikken gaat u akkoord met onze{' '}
                      <Link href="/privacyverklaring" className="text-primary hover:underline">
                        privacyverklaring
                      </Link>
                    </div>
                    
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-full border border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-4 rounded text-center transition-colors text-base uppercase tracking-wide"
                        disabled={loading}
                      >
                        Terug
                      </button>
                      <button
                        type="submit"
                        className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 px-4 rounded text-center transition-colors text-base uppercase tracking-wide shadow-sonic"
                        disabled={loading}
                      >
                        {loading ? 'Even geduld...' : 'Versturen'}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
            
            <div className="mt-8 text-center">
              <Link href="/" className="text-primary hover:text-red-400 transition-colors">
                Terug naar de homepagina
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 