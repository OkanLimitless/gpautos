'use client'

import Link from 'next/link'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
            Afspraak en contact
          </p>
          <h2 className="text-4xl font-bold text-white mb-5 border-b border-white/10 pb-4 font-bebas tracking-wider uppercase">
            Plan uw bezoek aan GP Auto&apos;s
          </h2>
          <p className="max-w-2xl text-white/60 leading-7">
            Stuur uw kenteken, omschrijving van de klacht en gewenste datum mee. Dan kunnen we u sneller helpen met onderhoud, APK of diagnose in Lichtenvoorde en de Achterhoek.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Form */}
          <div>
            <form className="space-y-4 rounded-2xl border border-white/10 bg-[#0f0f0f] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
                Vraag een afspraak aan
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Naam"
                  className="bg-[#1A1A1A] border border-white/5 rounded-sm p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="bg-[#1A1A1A] border border-white/5 rounded-sm p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Telefoon"
                  className="bg-[#1A1A1A] border border-white/5 rounded-sm p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                />
                <select className="bg-[#1A1A1A] border border-white/5 rounded-sm p-4 text-white/70 focus:outline-none focus:border-primary transition-colors">
                  <option>Dienst selecteren</option>
                  <option>APK keuring</option>
                  <option>Onderhoud & service</option>
                  <option>Diagnose & storing</option>
                  <option>Airco service</option>
                  <option>Retrofit & tuning</option>
                  <option>Anders</option>
                </select>
              </div>
              <textarea
                placeholder="Vertel kort wat er aan de hand is, bijvoorbeeld storingslampje, onderhoud of APK."
                rows={4}
                className="w-full bg-[#1A1A1A] border border-white/5 rounded-sm p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
              <p className="text-xs leading-5 text-white/40">
                Voeg indien mogelijk ook uw kenteken en een voorkeursdag toe. Dat helpt ons sneller plannen.
              </p>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 px-8 rounded-sm transition-all duration-300 uppercase tracking-widest"
              >
                Aanvraag versturen
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between gap-6">
            <div className="rounded-2xl border border-white/10 bg-[#0f0f0f] p-6 md:p-8">
              <h3 className="text-white font-bold uppercase tracking-widest mb-6">Snel contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6 text-sm">
                  <div>
                    <p className="text-white/40 mb-1">Adres</p>
                    <p className="text-white">Galileïstraat 5, 7131PE Lichtenvoorde</p>
                  </div>
                  <div>
                    <p className="text-white/40 mb-1">Telefoon</p>
                    <a href="tel:+31615530641" className="text-white transition-colors hover:text-primary">
                      +31 6 15530641
                    </a>
                  </div>
                  <div>
                    <p className="text-white/40 mb-1">E-mail</p>
                    <a href="mailto:info@gpautos.nl" className="text-white transition-colors hover:text-primary">
                      info@gpautos.nl
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Link
                      href="/afspraak"
                      className="inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-red-700"
                    >
                      Afspraak pagina
                    </Link>
                    <a
                      href="tel:+31615530641"
                      className="inline-flex items-center justify-center rounded-sm border border-white/10 px-5 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/5"
                    >
                      Bel direct
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-widest mb-4">Openingstijden</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/40">Maandag</span>
                      <span className="text-white">Op afspraak</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/40">Dinsdag</span>
                      <span className="text-white">Op afspraak</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/40">Woensdag</span>
                      <span className="text-white">Op afspraak</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/40">Donderdag</span>
                      <span className="text-white">Op afspraak</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/40">Vrijdag</span>
                      <span className="text-white">Op afspraak</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/40">Zaterdag</span>
                      <span className="text-white">Op afspraak</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/40">Zondag</span>
                      <span className="text-white">Gesloten</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-bold uppercase tracking-widest mb-3">Wij helpen vooral met</h3>
              <p className="text-sm leading-6 text-white/60">
                APK, onderhoud, diagnose, remmen, airco en VAG-specialisme voor klanten uit Lichtenvoorde, Groenlo, Aalten, Winterswijk, Eibergen en Varsseveld.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
