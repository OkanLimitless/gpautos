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
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Maak een Afspraak
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Plan eenvoudig uw afspraak online. Wij nemen contact met u op om de details te bespreken.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-between">
                {[
                  { number: 1, title: "Voertuig Info", active: step >= 1 },
                  { number: 2, title: "Afspraak Details", active: step >= 2 },
                  { number: 3, title: "Contact Info", active: step >= 3 }
                ].map((stepItem, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 font-bold text-lg ${
                      stepItem.active 
                        ? 'bg-primary text-white border-primary' 
                        : 'bg-white text-gray-400 border-gray-300'
                    }`}>
                      {stepItem.number}
                    </div>
                    <div className="ml-3">
                      <div className={`text-sm font-semibold ${
                        stepItem.active ? 'text-primary' : 'text-gray-400'
                      }`}>
                        Stap {stepItem.number}
                      </div>
                      <div className={`text-xs ${
                        stepItem.active ? 'text-gray-900' : 'text-gray-400'
                      }`}>
                        {stepItem.title}
                      </div>
                    </div>
                    {index < 2 && (
                      <div className={`flex-1 h-0.5 mx-4 ${
                        step > stepItem.number ? 'bg-primary' : 'bg-gray-300'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Voertuig Informatie</h2>
                      <p className="text-gray-600">Vul de gegevens van uw voertuig in</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Kenteken *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Bijvoorbeeld: 12-ABC-3"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        value={formData.kenteken}
                        onChange={(e) => setFormData({...formData, kenteken: e.target.value.toUpperCase()})}
                      />
                      <p className="mt-1 text-sm text-gray-500">Voer uw kenteken in inclusief streepjes</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Chassisnummer (optioneel)
                      </label>
                      <input
                        type="text"
                        placeholder="Volledig chassisnummer"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      />
                      <p className="mt-1 text-sm text-gray-500">Helpt ons bij het vinden van de juiste onderdelen</p>
                    </div>
                    
                    <div className="flex justify-end pt-6">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center"
                      >
                        <span>Volgende</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Afspraak Details</h2>
                      <p className="text-gray-600">Wanneer en wat wilt u laten doen?</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Gewenste Datum *
                      </label>
                      <DatePicker
                        selected={formData.date}
                        onChange={(date) => setFormData({...formData, date})}
                        locale="nl"
                        dateFormat="EEEE d MMMM yyyy"
                        minDate={new Date()}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholderText="Selecteer een datum"
                      />
                      <p className="mt-1 text-sm text-gray-500">Wij nemen contact op om de exacte tijd af te spreken</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Beschrijving van de werkzaamheden *
                      </label>
                      <textarea
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        placeholder="Beschrijf zo duidelijk mogelijk wat er aan uw auto gedaan moet worden. Bijvoorbeeld: 'APK keuring', 'Remmen piepen', 'Motorlampje brandt', etc."
                      />
                    </div>
                    
                    <div className="flex justify-between pt-6">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-8 rounded-lg transition-colors flex items-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Vorige</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center"
                      >
                        <span>Volgende</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Informatie</h2>
                      <p className="text-gray-600">Hoe kunnen wij u bereiken?</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Volledige Naam *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Voor- en achternaam"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        E-mailadres *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="uw.email@voorbeeld.nl"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefoonnummer *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="06 12 34 56 78"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6 mt-8">
                      <div className="flex justify-center mb-4">
                        <ReCAPTCHA
                          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                          onChange={handleCaptchaChange}
                        />
                      </div>
                      
                      <div className="text-center text-sm text-gray-600 mb-6">
                        Door op versturen te klikken gaat u akkoord met onze{' '}
                        <Link href="/privacyverklaring" className="text-primary hover:underline font-semibold">
                          privacyverklaring
                        </Link>
                      </div>
                    </div>
                    
                    <div className="flex justify-between pt-6">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-8 rounded-lg transition-colors flex items-center"
                        disabled={loading}
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Vorige</span>
                      </button>
                      <button
                        type="submit"
                        className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Versturen...
                          </>
                        ) : (
                          <>
                            <span>Afspraak Versturen</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
            
            {/* Back to Home Link */}
            <div className="mt-8 text-center">
              <Link href="/" className="text-primary hover:text-red-700 transition-colors font-semibold flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Terug naar homepagina
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 