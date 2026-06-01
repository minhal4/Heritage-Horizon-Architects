import { SlideIn } from "@/components/ui/scroll-reveal";

const testimonials = [
  {
    stars: 5,
    quote: 'Heritage & Horizon were exceptional throughout the Zindabazar project. Their structural team resolved a genuinely complex foundation challenge on time and within the agreed fee. The civic centre was delivered three weeks ahead of programme.',
    name: 'Douglas MacAllister',
    role: 'Head of Development, Sylhet City Corporation',
    initials: 'DM',
  },
  {
    stars: 5,
    quote: 'We appointed Heritage & Horizon on our Amberkhana scheme after seeing their track record on mixed-use residential. Their integrated team — architects, engineers, and interior designers under one roof — saved us significant coordination costs.',
    name: 'Sarah Reeves',
    role: 'Development Director, Zindabazar Properties Ltd',
    initials: 'SR',
  },
  {
    stars: 5,
    quote: 'The Bondor Bazar Heritage Hall restoration is one of the finest pieces of heritage work I have seen in twenty years of conservation practice. The team understood what the building was trying to tell them and responded with real craft.',
    name: 'Prof. Patricia Holt',
    role: 'Director, Sylhet Heritage Foundation',
    initials: 'PH',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-[110px] bg-[#080808]">
      <div className="max-w-[1180px] mx-auto px-[4vw]">

        <SlideIn from="bottom">
          <div className="text-center mb-16">
            <span className="inline-flex items-center justify-center gap-2 text-[.68rem] font-bold tracking-[.24em] uppercase text-[#c9973a] mb-3">
              <span className="w-6 h-px bg-[#c9973a]" /> Client Voices
            </span>
            <h2 className="font-['Palatino_Linotype',Palatino,serif] font-normal text-[clamp(1.85rem,3.4vw,2.85rem)] text-white leading-snug mb-4">
              What Our Clients Say
            </h2>
            <p className="text-[.98rem] text-[#7a7470] max-w-[520px] mx-auto leading-[1.85]">
              Our reputation is built on results — and on the trust of the clients who work alongside us.
            </p>
          </div>
        </SlideIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const directions = ["left", "bottom", "right"] as const;
            return (
              <SlideIn key={t.name} from={directions[i % 3]} delay={i * 100}>
                <div className="bg-[#151515] border border-[rgba(201,151,58,0.07)] p-10 relative hover:border-[rgba(201,151,58,0.28)] hover:-translate-y-1.5 transition-all duration-300 h-full">
                  <span className="absolute top-4 right-6 font-['Palatino_Linotype',serif] text-[5rem] text-[rgba(201,151,58,0.1)] leading-none">&ldquo;</span>
                  <div className="text-[#c9973a] tracking-[.12em] text-[.88rem] mb-5">{'★'.repeat(t.stars)}</div>
                  <p className="text-[.93rem] text-[#c0b8ad] leading-[1.82] italic mb-7">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-[46px] h-[46px] rounded-full border-[1.5px] border-[#c9973a] flex items-center justify-center bg-[#1a1a1a] text-[.75rem] font-bold text-[#c9973a]">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-[.88rem] font-bold text-white mb-[2px]">{t.name}</div>
                      <div className="text-[.74rem] text-[#6b6357]">{t.role}</div>
                    </div>
                  </div>
                </div>
              </SlideIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
