'use client'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 border-b border-white/10 pb-4 font-bebas tracking-wider uppercase">Contact</h2>
            <form className="space-y-4">
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
                <select className="bg-[#1A1A1A] border border-white/5 rounded-sm p-4 text-white/30 focus:outline-none focus:border-primary transition-colors">
                  <option>Dienst selecteren</option>
                  <option>Onderhoud</option>
                  <option>Reparatie</option>
                  <option>Diagnose</option>
                  <option>Tuning</option>
                </select>
              </div>
              <textarea
                placeholder="Bericht"
                rows={4}
                className="w-full bg-[#1A1A1A] border border-white/5 rounded-sm p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 px-8 rounded-sm transition-all duration-300 uppercase tracking-widest"
              >
                Bericht verzenden
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-white font-bold uppercase tracking-widest mb-4">Contact</h3>
                <div className="space-y-6 text-sm">
                  <div>
                    <p className="text-white/40 mb-1">Adres</p>
                    <p className="text-white">Galileïstraat 5, 7131PE Lichtenvoorde</p>
                  </div>
                  <div>
                    <p className="text-white/40 mb-1">Telefoon</p>
                    <p className="text-white">+31 6 15530641</p>
                  </div>
                  <div>
                    <p className="text-white/40 mb-1">E-mail</p>
                    <p className="text-white">info@gpautos.nl</p>
                  </div>
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

        </div>
      </div>
    </section>
  )
}
