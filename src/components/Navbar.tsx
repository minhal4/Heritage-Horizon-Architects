'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 90;
      let cur = '';
      document.querySelectorAll('section[id]').forEach(s => {
        if (y >= (s as HTMLElement).offsetTop) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({ top: (el as HTMLElement).offsetTop - 78, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(8,8,8,0.94)] backdrop-blur-lg border-b border-[rgba(201,151,58,0.1)]">
      <div className="max-w-[1180px] mx-auto px-[4vw]">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <button onClick={() => handleLink('#hero')} className="flex flex-col text-left">
            <span className="font-['Palatino_Linotype',Palatino,serif] text-[1.08rem] text-white tracking-[.07em] leading-tight">
              Heritage <span className="text-[#c9973a]">&amp;</span> Horizon
            </span>
            <span className="text-[.57rem] tracking-[.2em] uppercase text-[#6b6357]">
              Architects &amp; Engineers
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex list-none gap-9">
            {links.map(l => (
              <li key={l.href}>
                <button
                  onClick={() => handleLink(l.href)}
                  className={`text-[.74rem] font-semibold tracking-[.1em] uppercase transition-colors relative pb-[3px] group
                    ${active === l.href.slice(1) ? 'text-[#c9973a]' : 'text-[#7a7470] hover:text-[#c9973a]'}`}
                >
                  {l.label}
                  <span className={`absolute bottom-0 left-0 h-px bg-[#c9973a] transition-all duration-300
                    ${active === l.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => handleLink('#contact')}
            className="hidden md:block text-[.72rem] font-bold tracking-[.1em] uppercase px-5 py-2 text-[#c9973a] border border-[#c9973a] hover:bg-[#c9973a] hover:text-black transition-all duration-300"
          >
            Start a Project
          </button>

          {/* Hamburger */}
          <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[rgba(201,151,58,0.08)]">
          <ul className="list-none">
            {links.map(l => (
              <li key={l.href}>
                <button
                  onClick={() => handleLink(l.href)}
                  className="block w-full text-left px-6 py-4 text-[.85rem] font-semibold tracking-[.1em] uppercase text-[#7a7470] hover:text-[#c9973a] hover:pl-8 transition-all border-b border-[rgba(255,255,255,0.04)]"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleLink('#contact')}
            className="block w-full mx-6 my-4 w-[calc(100%-3rem)] text-center py-3 bg-[#c9973a] text-black text-[.76rem] font-bold tracking-[.12em] uppercase"
          >
            Start a Project
          </button>
        </div>
      )}
    </nav>
  );
}
