'use client';
import { useEffect, useRef } from 'react';
import { AnimatedBuilding } from '@/components/ui/animated-building';
import { Spotlight } from '@/components/ui/spotlight';

const words = [
  { text: 'Engineering', delay: 0.4, gold: false },
  { text: 'the',         delay: 0.55, gold: false },
  { text: 'Future,',     delay: 0.7,  gold: true  },
];
const words2 = [
  { text: 'Honoring', delay: 0.85, gold: false },
  { text: 'the',      delay: 1.0,  gold: false },
  { text: 'Past.',    delay: 1.15, gold: false },
];

const stats = [
  { target: 27,  suffix: '+', label: 'Years of Practice'   },
  { target: 340, suffix: '',  label: 'Projects Delivered'  },
  { target: 18,  suffix: '',  label: 'Industry Awards'     },
  { target: 98,  suffix: '%', label: 'Client Satisfaction' },
];

function useCountUp(ref: React.RefObject<HTMLSpanElement | null>, target: number, suffix: string) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let c = 0;
      const step = Math.ceil(target / 60);
      const iv = setInterval(() => {
        c = Math.min(c + step, target);
        el.textContent = c + suffix;
        if (c >= target) clearInterval(iv);
      }, 28);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, target, suffix]);
}

function StatItem({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useCountUp(ref, target, suffix);
  return (
    <div>
      <span ref={ref} className="block font-['Palatino_Linotype',Palatino,serif] text-[2.4rem] text-[#c9973a] leading-none">
        0{suffix}
      </span>
      <span className="block text-[.7rem] tracking-[.12em] uppercase text-[#6b6357] mt-1">{label}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-black flex items-center overflow-hidden">
      {/* particle canvas */}
      <ParticleCanvas />

      <div className="relative z-10 max-w-[1180px] mx-auto px-[4vw] w-full flex items-center gap-8 pt-[90px] pb-[60px]">

        {/* LEFT */}
        <div className="flex-[0_0_54%]">
          {/* eyebrow */}
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-[fadeUp_.9s_ease_.2s_forwards]">
            <span className="block w-9 h-px bg-[#c9973a]" />
            <span className="text-[.68rem] font-bold tracking-[.24em] uppercase text-[#c9973a]">
              Est. 1998 &nbsp;·&nbsp; Sylhet, Bangladesh
            </span>
          </div>

          {/* animated title */}
          <h1 className="font-['Palatino_Linotype',Palatino,serif] font-normal text-[clamp(2.6rem,5.5vw,5rem)] text-white leading-[1.08] mb-7">
            <span className="block">
              {words.map(w => (
                <span
                  key={w.text}
                  className={`inline-block opacity-0 translate-y-10 mr-[.3em]
                    ${w.gold ? 'text-[#c9973a] italic' : ''}`}
                  style={{ animation: `wordUp .72s cubic-bezier(.22,.61,.36,1) ${w.delay}s forwards` }}
                >
                  {w.text}
                </span>
              ))}
            </span>
            <span className="block">
              {words2.map(w => (
                <span
                  key={w.text}
                  className="inline-block opacity-0 translate-y-10 mr-[.3em]"
                  style={{ animation: `wordUp .72s cubic-bezier(.22,.61,.36,1) ${w.delay}s forwards` }}
                >
                  {w.text}
                </span>
              ))}
            </span>
          </h1>

          <p className="text-[1.02rem] text-[rgba(192,184,173,0.7)] max-w-[480px] mb-10 leading-[1.9] opacity-0 animate-[fadeUp_.9s_ease_1.1s_forwards]">
            From landmark civic buildings to carefully considered private residences,
            Heritage &amp; Horizon Architects brings precision engineering and
            thoughtful design to every project we undertake.
          </p>

          <div className="flex flex-wrap gap-4 opacity-0 animate-[fadeUp_.9s_ease_1.3s_forwards]">
            <a href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9973a] text-black text-[.78rem] font-bold tracking-[.12em] uppercase transition-all hover:-translate-y-0.5 hover:bg-[#e8b95a] hover:shadow-[0_8px_28px_rgba(201,151,58,0.4)]">
              Explore Our Work →
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-white text-[.78rem] font-bold tracking-[.12em] uppercase border border-[rgba(240,235,224,0.3)] transition-all hover:-translate-y-0.5 hover:border-white hover:bg-[rgba(240,235,224,0.07)]">
              Get a Consultation
            </a>
          </div>

          {/* stats */}
          <div className="flex flex-wrap gap-12 mt-16 pt-10 border-t border-[rgba(201,151,58,0.15)] opacity-0 animate-[fadeUp_.9s_ease_1.5s_forwards]">
            {stats.map(s => <StatItem key={s.label} {...s} />)}
          </div>
        </div>

        {/* RIGHT — building */}
        <div className="flex-1 flex items-center justify-center min-h-[500px] relative">
          <Spotlight size={320} />
          <AnimatedBuilding />
        </div>
      </div>

      <style>{`
        @keyframes wordUp  { to { opacity:1; transform:translateY(0); } }
        @keyframes fadeUp  { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </section>
  );
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const particles: { x:number; y:number; vx:number; vy:number; r:number; a:number }[] = [];
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < 55; i++) {
      particles.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, vx:(Math.random()-.5)*.28, vy:(Math.random()-.5)*.28, r:Math.random()*1.4+.4, a:Math.random()*.5+.1 });
    }
    let raf: number;
    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle = `rgba(201,151,58,${p.a})`; ctx.fill();
      });
      for (let i=0;i<particles.length;i++) for (let j=i+1;j<particles.length;j++) {
        const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y;
        const dist=Math.sqrt(dx*dx+dy*dy);
        if (dist<120) { ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y); ctx.lineTo(particles[j].x,particles[j].y); ctx.strokeStyle=`rgba(201,151,58,${.06*(1-dist/120)})`; ctx.lineWidth=.5; ctx.stroke(); }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize',resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[3]" />;
}
