"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  category: string;
  location: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const Gallery4 = ({
  title = "Selected Works",
  description = "A cross-section of projects illustrating our breadth of experience and consistent commitment to quality.",
  items,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => { carouselApi.off("select", updateSelection); };
  }, [carouselApi]);

  return (
    <section id="projects" className="py-[110px] bg-[#0e0e0e]">
      <div className="max-w-[1180px] mx-auto px-[4vw]">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 text-[.68rem] font-bold tracking-[.24em] uppercase text-[#c9973a] mb-3">
              <span className="w-6 h-px bg-[#c9973a]" /> Portfolio
            </span>
            <h2 className="font-['Palatino_Linotype',Palatino,serif] font-normal text-[clamp(1.85rem,3.4vw,2.85rem)] text-white leading-snug mb-3">
              {title}
            </h2>
            <p className="text-[.98rem] text-[#7a7470] max-w-[520px] leading-[1.85]">
              {description}
            </p>
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              aria-label="Previous project"
              className="w-11 h-11 flex items-center justify-center border border-[rgba(201,151,58,0.25)] text-[#c9973a] hover:border-[#c9973a] hover:bg-[rgba(201,151,58,0.08)] disabled:opacity-25 disabled:cursor-not-allowed transition-all"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              aria-label="Next project"
              className="w-11 h-11 flex items-center justify-center border border-[rgba(201,151,58,0.25)] text-[#c9973a] hover:border-[#c9973a] hover:bg-[rgba(201,151,58,0.08)] disabled:opacity-25 disabled:cursor-not-allowed transition-all"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Full-width carousel */}
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": { dragFree: true },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(4rem,calc(50vw-590px))] pl-[4vw] 2xl:pl-0">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[340px] pl-[20px] lg:max-w-[400px]"
              >
                <a href={item.href} className="group block">
                  <div className="relative h-[420px] w-full overflow-hidden lg:h-[480px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.07]"
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    {/* Gold top accent line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c9973a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                    <div className="absolute inset-x-0 bottom-0 p-7">
                      <div className="text-[.63rem] font-bold tracking-[.2em] uppercase text-[#c9973a] mb-1">
                        {item.category}
                      </div>
                      <div className="font-['Palatino_Linotype',Palatino,serif] text-white text-[1.2rem] leading-snug mb-1">
                        {item.title}
                      </div>
                      <div className="text-[.75rem] text-[#6b6357] mb-5">📍 {item.location}</div>
                      <p className="text-[.84rem] text-[#c0b8ad]/80 leading-relaxed line-clamp-2 mb-5">
                        {item.description}
                      </p>
                      <div className="inline-flex items-center gap-2 text-[.72rem] font-bold tracking-[.1em] uppercase text-[#c9973a] group-hover:gap-4 transition-all">
                        View Project <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dot indicators */}
        <div className="mt-10 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-[3px] transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 bg-[#c9973a]"
                  : "w-3 bg-[rgba(201,151,58,0.25)] hover:bg-[rgba(201,151,58,0.5)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
