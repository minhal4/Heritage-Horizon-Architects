'use client';
import { useEffect, useRef } from 'react';

const FLOORS = 12;
const WINS_PER_FLOOR = 4;
type WinColor = 'gold' | 'blue' | 'white' | 'off';
const PALETTE: WinColor[] = ['gold', 'gold', 'gold', 'blue', 'white', 'off'];

const winClass: Record<WinColor, string> = {
  gold:  'bg-[rgba(201,151,58,0.75)] shadow-[0_0_8px_rgba(201,151,58,0.55)] border-[rgba(201,151,58,0.5)]',
  blue:  'bg-[rgba(150,195,255,0.62)] shadow-[0_0_7px_rgba(150,195,255,0.4)] border-[rgba(180,215,255,0.4)]',
  white: 'bg-[rgba(240,235,225,0.55)] shadow-[0_0_5px_rgba(240,235,225,0.3)] border-[rgba(240,235,225,0.4)]',
  off:   'bg-[#080808] border-[rgba(201,151,58,0.12)]',
};

function randomColor(): WinColor {
  return PALETTE[Math.floor(Math.random() * PALETTE.length)];
}

export function AnimatedBuilding() {
  const gridRef = useRef<(WinColor[])[]>(
    Array.from({ length: FLOORS }, () =>
      Array.from({ length: WINS_PER_FLOOR }, randomColor)
    )
  );
  const cellRefs = useRef<(HTMLDivElement | null)[][]>(
    Array.from({ length: FLOORS }, () => Array(WINS_PER_FLOOR).fill(null))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      for (let f = 0; f < FLOORS; f++) {
        for (let w = 0; w < WINS_PER_FLOOR; w++) {
          if (Math.random() < 0.13) {
            const c = randomColor();
            gridRef.current[f][w] = c;
            const el = cellRefs.current[f][w];
            if (el) {
              el.className = `w-[22px] h-[18px] border rounded-[1px] transition-all duration-500 ${winClass[c]}`;
            }
          }
        }
      }
    }, 1100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-[300px] h-[480px] animate-[float_7s_ease-in-out_infinite]">
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-14px) rotate(.4deg)} }
        @keyframes craneSwing { 0%,100%{transform:rotate(-8deg)} 50%{transform:rotate(14deg)} }
      `}</style>

      {/* Blueprint grid */}
      <div className="absolute inset-[-20px] rounded-sm"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,151,58,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(201,151,58,.05) 1px,transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Glow */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/3 w-[200px] h-[200px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(201,151,58,.13) 0%,transparent 70%)' }}
      />

      {/* Floor tag */}
      <p className="absolute left-0 top-10 text-[10px] tracking-widest text-[rgba(201,151,58,.38)] uppercase"
        style={{ writingMode: 'vertical-rl' }}>
        12 Floors · 42 m
      </p>

      {/* Height measurement */}
      <div className="absolute right-1 top-10 bottom-20 w-px bg-[rgba(201,151,58,.2)]">
        <span className="absolute top-1/2 right-2 -translate-y-1/2 text-[10px] text-[rgba(201,151,58,.42)] tracking-widest"
          style={{ writingMode: 'vertical-rl' }}>42 m</span>
        <div className="absolute top-0 -left-[3px] w-[7px] h-px bg-[rgba(201,151,58,.35)]" />
        <div className="absolute bottom-0 -left-[3px] w-[7px] h-px bg-[rgba(201,151,58,.35)]" />
      </div>

      {/* Crane */}
      <div className="absolute left-4 bottom-[76px]">
        <div className="w-[5px] h-[155px] mx-auto rounded-sm bg-gradient-to-r from-[#c9973a] to-[#9a7228]" />
        <div className="absolute top-0 -left-[48px] w-[110px] h-[4px] bg-[#c9973a] rounded-sm origin-[51px_center]"
          style={{ animation: 'craneSwing 9s ease-in-out infinite' }}>
          <div className="absolute right-[-6px] top-[4px] w-[8px] h-[8px] border-[1.5px] border-[#c9973a] border-t-0 rounded-b-sm" />
        </div>
      </div>

      {/* Building */}
      <div className="absolute bottom-7 left-1/2"
        style={{ transform: 'translateX(-30%) perspective(700px) rotateY(-14deg) rotateX(5deg)' }}>

        {/* Spire */}
        <div className="w-[3px] h-8 mx-auto mb-[-1px]"
          style={{ background: 'linear-gradient(to top,#c9973a,transparent)' }} />

        {/* Cap */}
        <div className="w-[70px] h-3 mx-auto mb-[-1px] bg-gradient-to-br from-[#1e1e1e] to-[#111] border border-[rgba(201,151,58,.35)]" />

        {/* Floors */}
        <div className="w-[170px] border border-[rgba(201,151,58,.28)] bg-[#0c0c0c] overflow-hidden">
          {Array.from({ length: FLOORS }, (_, f) => (
            <div key={f} className="flex items-center justify-evenly px-2 border-b border-[rgba(201,151,58,.07)]"
              style={{ height: 26 }}>
              {Array.from({ length: WINS_PER_FLOOR }, (__, w) => (
                <div
                  key={w}
                  ref={el => { cellRefs.current[f][w] = el; }}
                  className={`w-[22px] h-[18px] border rounded-[1px] transition-all duration-500 ${winClass[gridRef.current[f][w]]}`}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Lobby */}
        <div className="h-9 bg-[#101010] border border-t-0 border-[rgba(201,151,58,.22)] flex items-end justify-center gap-2 w-[170px]">
          <div className="w-5 h-[26px] bg-[rgba(201,151,58,.1)] border border-b-0 border-[rgba(201,151,58,.3)] rounded-t-sm" />
          <div className="w-5 h-[26px] bg-[rgba(201,151,58,.1)] border border-b-0 border-[rgba(201,151,58,.3)] rounded-t-sm" />
        </div>

        {/* Base */}
        <div className="h-[7px] w-[190px] -ml-[10px]"
          style={{ background: 'linear-gradient(to right,transparent,rgba(201,151,58,.18),transparent)' }} />
      </div>

      {/* Ground shadow */}
      <div className="absolute bottom-6 left-1/2 w-[140px] h-[10px] -translate-x-[30%] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(201,151,58,.18) 0%,transparent 70%)' }} />
    </div>
  );
}
