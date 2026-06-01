import { SlideIn } from "@/components/ui/scroll-reveal";

const services = [
  { icon: '✏️', title: 'Structural Design',      desc: 'Rigorous, code-compliant designs for foundations, frames, and load-bearing elements using advanced FEA modelling — ensuring structures that are safe, efficient, and built to last.' },
  { icon: '📋', title: 'Project Management',     desc: 'Single point of accountability coordinating consultants, contractors, and statutory bodies. PRINCE2-accredited managers deliver full visibility from planning through practical completion.' },
  { icon: '🏗️', title: 'Renovation & Retrofit',  desc: "Combining heritage sensitivity with modern performance standards. We upgrade energy efficiency, spatial quality, and structural integrity without erasing a building's character." },
  { icon: '💬', title: 'Design Consultation',    desc: 'Focused expert guidance on feasibility, planning strategy, and design direction. A well-timed consultation can save months and significant expenditure by identifying constraints early.' },
  { icon: '🔧', title: 'Interior Architecture',  desc: 'Designing the spaces between the walls — finishes, lighting, joinery, and layouts that support how people live and work, from concept mood boards to coordinated technical drawings.' },
  { icon: '👷', title: 'Site Supervision',       desc: 'Experienced professionals on the ground verifying work is executed in accordance with drawings, specifications, and Building Regulations — your eyes and ears from groundbreak to handover.' },
];

export function Services() {
  return (
    <section id="services" className="py-[110px] bg-[#080808]">
      <div className="max-w-[1180px] mx-auto px-[4vw]">

        <SlideIn from="bottom">
          <div className="text-center mb-16">
            <span className="inline-flex items-center justify-center gap-2 text-[.68rem] font-bold tracking-[.24em] uppercase text-[#c9973a] mb-3">
              <span className="w-6 h-px bg-[#c9973a]" /> What We Do
            </span>
            <h2 className="font-['Palatino_Linotype',Palatino,serif] font-normal text-[clamp(1.85rem,3.4vw,2.85rem)] text-white leading-snug mb-4">
              A Complete Range of<br/>Architectural &amp; Engineering Services
            </h2>
            <p className="text-[.98rem] text-[#7a7470] max-w-[580px] mx-auto leading-[1.85]">
              Whether breaking ground on a new development or breathing life into an existing structure,
              our practice guides your project from vision to reality.
            </p>
          </div>
        </SlideIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(201,151,58,0.09)] border border-[rgba(201,151,58,0.09)]">
          {services.map((s, i) => (
            <SlideIn
              key={s.title}
              from={i % 2 === 0 ? "left" : "right"}
              delay={i * 70}
            >
              <div className="bg-[#080808] p-10 group hover:bg-[#151515] transition-colors relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c9973a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[.45s]" />
                <span className="block text-[1.7rem] mb-6">{s.icon}</span>
                <h3 className="font-['Palatino_Linotype',Palatino,serif] font-normal text-[1.15rem] text-white mb-3">{s.title}</h3>
                <p className="text-[.87rem] text-[#7a7470] leading-[1.8]">{s.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-1 mt-5 text-[.73rem] font-bold tracking-[.1em] uppercase text-[#c9973a] hover:gap-3 transition-all">
                  Enquire →
                </a>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
