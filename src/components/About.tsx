import { SlideIn } from "@/components/ui/scroll-reveal";

export function About() {
  return (
    <section id="about" className="py-[110px] bg-[#0e0e0e]">
      <div className="max-w-[1180px] mx-auto px-[4vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* Image side — slides from left */}
          <SlideIn from="left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80&auto=format&fit=crop"
                alt="Heritage and Horizon studio"
                className="w-full h-[520px] object-cover brightness-90"
              />
              <img
                src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=600&q=80&auto=format&fit=crop"
                alt="Site supervision"
                className="absolute -bottom-7 -right-7 w-[44%] h-[220px] object-cover border-[5px] border-[#0e0e0e] shadow-2xl brightness-80 hidden md:block"
              />
              <div className="absolute top-7 -left-4 bg-[#c9973a] text-black px-6 py-4 text-center shadow-[0_8px_36px_rgba(201,151,58,0.45)]">
                <span className="block font-['Palatino_Linotype',Palatino,serif] text-[2.4rem] leading-none">27</span>
                <span className="text-[.62rem] font-bold tracking-[.1em] uppercase text-black/65">Years of<br/>Excellence</span>
              </div>
            </div>
          </SlideIn>

          {/* Text side — slides from right */}
          <SlideIn from="right" delay={100}>
            <div>
              <span className="inline-flex items-center gap-2 text-[.68rem] font-bold tracking-[.24em] uppercase text-[#c9973a] mb-3">
                <span className="w-6 h-px bg-[#c9973a]" /> Who We Are
              </span>
              <h2 className="font-['Palatino_Linotype',Palatino,serif] font-normal text-[clamp(1.85rem,3.4vw,2.85rem)] text-white leading-[1.18] mb-5">
                Built on Integrity.<br/>Designed for Longevity.
              </h2>
              <p className="text-[#7a7470] text-[.97rem] leading-7 mb-5">
                Founded in 1998, Heritage &amp; Horizon Architects has grown from a two-person design studio into one
                of Bangladesh's most trusted full-spectrum architectural and structural engineering practices.
              </p>
              <p className="text-[#7a7470] text-[.97rem] leading-7 mb-5">
                Our team of 42 professionals spans architecture, civil and structural engineering, interior design,
                and project management — delivering seamless service from earliest concept through to final handover.
              </p>
              <p className="text-[#7a7470] text-[.97rem] leading-7">
                We work with private clients, commercial developers, housing associations, and public sector bodies
                across Sylhet and Bangladesh.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-9">
                {[
                  { title: 'Precision Engineering', desc: 'Structural calculations you can build on with confidence.' },
                  { title: 'Heritage Sensitivity',  desc: 'Respecting the character embedded in every existing structure.' },
                  { title: 'Sustainable Design',    desc: 'Low-impact materials and energy strategies built in from day one.' },
                  { title: 'Client Partnership',    desc: 'Transparent communication throughout every phase.' },
                ].map((v, i) => (
                  <SlideIn key={v.title} from={i % 2 === 0 ? "left" : "right"} delay={200 + i * 80}>
                    <div className="flex gap-3 p-4 border border-[rgba(201,151,58,0.09)] hover:border-[rgba(201,151,58,0.32)] hover:bg-[rgba(201,151,58,0.04)] transition-all h-full">
                      <span className="text-[#c9973a] mt-1 flex-shrink-0">◆</span>
                      <div>
                        <div className="text-[.8rem] font-bold text-white tracking-[.04em] mb-1">{v.title}</div>
                        <div className="text-[.82rem] text-[#7a7470] leading-snug">{v.desc}</div>
                      </div>
                    </div>
                  </SlideIn>
                ))}
              </div>
            </div>
          </SlideIn>

        </div>
      </div>
    </section>
  );
}
