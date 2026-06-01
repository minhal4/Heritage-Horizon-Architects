'use client';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const details = [
  { icon: MapPin, label: 'Head Office',   val: '45 Zindabazar Main Road, Sylhet 3100' },
  { icon: MapPin, label: 'Branch Studio', val: '12 Amberkhana Circle Road, Sylhet 3100' },
  { icon: Phone,  label: 'Telephone',     val: '+880 821 716 4800' },
  { icon: Mail,   label: 'Email',         val: 'studio@heritagehorizon.com.bd' },
  { icon: Clock,  label: 'Studio Hours',  val: 'Saturday – Thursday, 9:00 am – 6:00 pm' },
];

export function Contact() {
  const [toast, setToast] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const fname = (fd.get('fname') as string).trim();
    const email = (fd.get('email') as string).trim();
    const proj  = fd.get('project-type') as string;
    const msg   = (fd.get('message') as string).trim();

    if (!fname) return setToast('Please enter your name.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setToast('Please enter a valid email.');
    if (!proj) return setToast('Please select a project type.');
    if (msg.length < 20) return setToast('Please describe your project further.');

    setSending(true);
    setTimeout(() => {
      (e.target as HTMLFormElement).reset();
      setSending(false);
      setToast(`Thank you, ${fname}! We will be in touch within one working day.`);
      setTimeout(() => setToast(''), 5000);
    }, 1300);
  };

  return (
    <section id="contact" className="py-[110px] bg-[#0e0e0e]">
      <div className="max-w-[1180px] mx-auto px-[4vw]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-20 items-start">

          {/* Info */}
          <div>
            <span className="inline-flex items-center gap-2 text-[.68rem] font-bold tracking-[.24em] uppercase text-[#c9973a] mb-3">
              <span className="w-6 h-px bg-[#c9973a]" /> Get in Touch
            </span>
            <h2 className="font-['Palatino_Linotype',Palatino,serif] font-normal text-[clamp(1.85rem,3.4vw,2.85rem)] text-white leading-snug mb-4">
              Let's Build Something Remarkable
            </h2>
            <p className="text-[.98rem] text-[#7a7470] leading-[1.85] mb-10">
              We respond to all enquiries within one working day and offer a free 30-minute initial consultation.
            </p>
            {details.map(d => (
              <div key={d.label} className="flex gap-4 mb-6">
                <div className="w-10 h-10 flex-shrink-0 bg-[#151515] border border-[rgba(201,151,58,0.18)] flex items-center justify-center text-[#c9973a]">
                  <d.icon size={16} />
                </div>
                <div>
                  <div className="text-[.67rem] font-bold tracking-[.12em] uppercase text-[#6b6357] mb-[3px]">{d.label}</div>
                  <div className="text-[.9rem] text-[#c0b8ad]">{d.val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-[#151515] border border-[rgba(201,151,58,0.09)] p-11">
            <h3 className="font-['Palatino_Linotype',Palatino,serif] font-normal text-[1.4rem] text-white mb-1">Project Enquiry</h3>
            <p className="text-[.86rem] text-[#7a7470] mb-8">Complete the form and we will be in touch shortly.</p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-2 gap-5 mb-5">
                <div className="flex flex-col">
                  <label className="text-[.68rem] font-bold tracking-[.12em] uppercase text-[#6b6357] mb-2">First Name *</label>
                  <input name="fname" type="text" placeholder="James" className="bg-black border border-[rgba(200,191,174,0.1)] px-4 py-3 text-[.9rem] text-white placeholder-[rgba(200,191,174,0.22)] focus:border-[#c9973a] focus:outline-none focus:ring-2 focus:ring-[rgba(201,151,58,0.1)] transition-all" />
                </div>
                <div className="flex flex-col">
                  <label className="text-[.68rem] font-bold tracking-[.12em] uppercase text-[#6b6357] mb-2">Last Name *</label>
                  <input name="lname" type="text" placeholder="Whitmore" className="bg-black border border-[rgba(200,191,174,0.1)] px-4 py-3 text-[.9rem] text-white placeholder-[rgba(200,191,174,0.22)] focus:border-[#c9973a] focus:outline-none focus:ring-2 focus:ring-[rgba(201,151,58,0.1)] transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5 mb-5">
                <div className="flex flex-col">
                  <label className="text-[.68rem] font-bold tracking-[.12em] uppercase text-[#6b6357] mb-2">Email *</label>
                  <input name="email" type="email" placeholder="james@example.com" className="bg-black border border-[rgba(200,191,174,0.1)] px-4 py-3 text-[.9rem] text-white placeholder-[rgba(200,191,174,0.22)] focus:border-[#c9973a] focus:outline-none focus:ring-2 focus:ring-[rgba(201,151,58,0.1)] transition-all" />
                </div>
                <div className="flex flex-col">
                  <label className="text-[.68rem] font-bold tracking-[.12em] uppercase text-[#6b6357] mb-2">Phone</label>
                  <input name="phone" type="tel" placeholder="+880 17..." className="bg-black border border-[rgba(200,191,174,0.1)] px-4 py-3 text-[.9rem] text-white placeholder-[rgba(200,191,174,0.22)] focus:border-[#c9973a] focus:outline-none focus:ring-2 focus:ring-[rgba(201,151,58,0.1)] transition-all" />
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-[.68rem] font-bold tracking-[.12em] uppercase text-[#6b6357] mb-2">Project Type *</label>
                <select name="project-type" defaultValue="" className="bg-black border border-[rgba(200,191,174,0.1)] px-4 py-3 text-[.9rem] text-[#c0b8ad] focus:border-[#c9973a] focus:outline-none focus:ring-2 focus:ring-[rgba(201,151,58,0.1)] transition-all appearance-none">
                  <option value="" disabled>Select a service…</option>
                  <option value="structural">Structural Design</option>
                  <option value="management">Project Management</option>
                  <option value="renovation">Renovation &amp; Retrofit</option>
                  <option value="consultation">Design Consultation</option>
                  <option value="interior">Interior Architecture</option>
                  <option value="supervision">Site Supervision</option>
                  <option value="other">Other / Not Sure Yet</option>
                </select>
              </div>
              <div className="flex flex-col mb-6">
                <label className="text-[.68rem] font-bold tracking-[.12em] uppercase text-[#6b6357] mb-2">Your Project *</label>
                <textarea name="message" rows={5} placeholder="Briefly describe your project — location, scope, approximate budget, and timescales if known."
                  className="bg-black border border-[rgba(200,191,174,0.1)] px-4 py-3 text-[.9rem] text-white placeholder-[rgba(200,191,174,0.22)] focus:border-[#c9973a] focus:outline-none focus:ring-2 focus:ring-[rgba(201,151,58,0.1)] transition-all resize-y" />
              </div>
              <button type="submit" disabled={sending}
                className="w-full py-4 bg-[#c9973a] text-black text-[.8rem] font-bold tracking-[.14em] uppercase hover:bg-[#e8b95a] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(201,151,58,0.4)] transition-all disabled:opacity-60">
                {sending ? 'Sending…' : 'Send Enquiry →'}
              </button>
              <p className="text-center text-[.73rem] text-[#6b6357] mt-4">Your information will never be shared with third parties.</p>
            </form>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-8 right-8 z-50 bg-[#1c1c1c] text-white px-6 py-4 text-[.85rem] border-l-[3px] border-[#c9973a] shadow-2xl animate-[fadeUp_.4s_ease]">
          {toast}
        </div>
      )}
    </section>
  );
}
