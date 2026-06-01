const navLinks = ['About', 'Services', 'Projects', 'Testimonials', 'Contact'];
const services  = ['Structural Design', 'Project Management', 'Renovation & Retrofit', 'Design Consultation', 'Interior Architecture', 'Site Supervision'];

export function Footer() {
  return (
    <footer className="bg-[#040404] text-[#6b6357] border-t border-[rgba(201,151,58,0.08)]">
      <div className="max-w-[1180px] mx-auto px-[4vw] pt-[70px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[rgba(255,255,255,0.04)]">

          <div>
            <div className="font-['Palatino_Linotype',Palatino,serif] text-[1.1rem] text-white mb-1">
              Heritage <span className="text-[#c9973a]">&amp;</span> Horizon
            </div>
            <div className="text-[.65rem] tracking-[.18em] uppercase mb-5">Architects &amp; Engineers · Est. 1998</div>
            <p className="text-[.85rem] leading-[1.82]">
              A full-spectrum architectural and structural engineering practice delivering projects of ambition,
              craft, and lasting value across Bangladesh. IEB Registered Practice. BNBC Compliant.
            </p>
          </div>

          <div>
            <div className="text-[.68rem] font-bold tracking-[.18em] uppercase text-white mb-6">Our Services</div>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}><a href="#services" className="text-[.85rem] hover:text-[#c9973a] transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[.68rem] font-bold tracking-[.18em] uppercase text-white mb-6">Company</div>
            <ul className="space-y-3">
              {navLinks.map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="text-[.85rem] hover:text-[#c9973a] transition-colors">{l === 'About' ? 'About the Practice' : l}</a></li>
              ))}
              <li><a href="#contact" className="text-[.85rem] hover:text-[#c9973a] transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[.68rem] font-bold tracking-[.18em] uppercase text-white mb-6">Contact</div>
            {[
              { icon: '📍', text: '45 Zindabazar Main Road\nSylhet 3100' },
              { icon: '📍', text: '12 Amberkhana Circle Road\nSylhet 3100' },
              { icon: '📞', text: '+880 821 716 4800' },
              { icon: '✉️', text: 'studio@heritagehorizon.com.bd' },
            ].map((c, i) => (
              <div key={i} className="flex gap-3 mb-4">
                <span className="text-[#c9973a] text-[.9rem] mt-[2px]">{c.icon}</span>
                <span className="text-[.85rem] leading-snug whitespace-pre-line">{c.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 py-6">
          <span className="text-[.74rem]">&copy; 2026 Heritage &amp; Horizon Architects Ltd. All rights reserved. Registered in Bangladesh, Sylhet Division.</span>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Accessibility'].map(l => (
              <a key={l} href="#contact" className="text-[.74rem] hover:text-[#c9973a] transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Developer credit */}
      <div className="border-t border-[rgba(201,151,58,0.18)] py-8 text-center bg-[#0a0a0a]">
        <p className="text-[.65rem] font-bold tracking-[.22em] uppercase text-[#6b6357] mb-1">Designed &amp; Built by</p>
        <p className="font-['Palatino_Linotype',Palatino,serif] text-[1.25rem] text-[#c9973a] tracking-[.08em]">Minhal Ahamed Abir</p>
        <p className="text-[.78rem] italic text-[#6b6357] mt-1">Learner of Web Development</p>
      </div>
    </footer>
  );
}
