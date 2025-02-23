'use client'

import { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { nl } from 'date-fns/locale'
import "react-datepicker/dist/react-datepicker.css"
import toast from 'react-hot-toast'
import Layout from '@/components/Layout'

// Register Dutch locale
registerLocale('nl', nl)

export default function AppointmentPage() {
  const [step, setStep] = useState(1)
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

    // Here we'll add the API call to save the appointment
    toast.success('Bedankt voor uw aanvraag! We nemen zo spoedig mogelijk contact met u op.')
  }

  return (
    <Layout>
      <div className="pt-20 min-h-screen bg-zinc-950">
        <div className="container py-12">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">Maak een Afspraak</h1>
            
            {/* Progress Steps */}
            <div className="flex justify-between mb-12">
              <div className={`flex-1 text-center ${step >= 1 ? 'text-red-500' : 'text-gray-500'}`}>
                <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center border-2 ${
                  step >= 1 ? 'border-red-500 bg-red-500/10' : 'border-gray-500'
                }`}>1</div>
                <span className="text-sm mt-2">Kenteken</span>
              </div>
              <div className={`flex-1 text-center ${step >= 2 ? 'text-red-500' : 'text-gray-500'}`}>
                <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center border-2 ${
                  step >= 2 ? 'border-red-500 bg-red-500/10' : 'border-gray-500'
                }`}>2</div>
                <span className="text-sm mt-2">Details</span>
              </div>
              <div className={`flex-1 text-center ${step >= 3 ? 'text-red-500' : 'text-gray-500'}`}>
                <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center border-2 ${
                  step >= 3 ? 'border-red-500 bg-red-500/10' : 'border-gray-500'
                }`}>3</div>
                <span className="text-sm mt-2">Bevestiging</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-zinc-900 p-8 rounded-lg shadow-lg">
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Kenteken
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="AA-11-BB"
                      className="mt-1 block w-full rounded-md bg-zinc-800 border-zinc-700 text-white shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                      value={formData.kenteken}
                      onChange={(e) => setFormData({...formData, kenteken: e.target.value.toUpperCase()})}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full btn btn-primary"
                  >
                    Volgende
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Gewenste Datum
                    </label>
                    <DatePicker
                      selected={formData.date}
                      onChange={(date) => setFormData({...formData, date})}
                      locale="nl"
                      dateFormat="P"
                      minDate={new Date()}
                      className="mt-1 block w-full rounded-md bg-zinc-800 border-zinc-700 text-white shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                      placeholderText="Selecteer een datum"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Omschrijving van de werkzaamheden
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="mt-1 block w-full rounded-md bg-zinc-800 border-zinc-700 text-white shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                  </div>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-full btn btn-outline"
                    >
                      Terug
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="w-full btn btn-primary"
                    >
                      Volgende
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Naam
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full rounded-md bg-zinc-800 border-zinc-700 text-white shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      className="mt-1 block w-full rounded-md bg-zinc-800 border-zinc-700 text-white shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      required
                      className="mt-1 block w-full rounded-md bg-zinc-800 border-zinc-700 text-white shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full btn btn-outline"
                    >
                      Terug
                    </button>
                    <button
                      type="submit"
                      className="w-full btn btn-primary"
                    >
                      Afspraak Aanvragen
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