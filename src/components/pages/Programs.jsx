import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Clock } from "lucide-react";
import { COLORS, Reveal, SoundBars, Eyebrow } from "../../utils/ui";

function Programs() {
  const programData = [
    {
      id: 1,
      title: "Child Protection & Education",
      desc: "Preventing child marriage, child labour, trafficking, violence, and school dropout while promoting education and STEAM skills.",
      img: "/assets/img11.jpeg",
      tag: "Education & Safety",
    },
    {
      id: 2,
      title: "AGYW Empowerment",
      desc: "Supporting adolescent girls and young women through leadership, life skills, SRHR awareness, mentorship, and gender equality.",
      img: "/assets/img5.jpg",
      tag: "Leadership & Rights",
    },
    {
      id: 3,
      title: "Climate Action & Green Innovation",
      desc: "Promoting environmental awareness, climate adaptation, recycling, green entrepreneurship, and sustainable income opportunities.",
      img: "/assets/img16.jpeg",
      tag: "Sustainability",
    },
    {
      id: 4,
      title: "Cultural Exchange & International Partnerships",
      desc: "Empower adolescent girls and young women (AGYW) through creative arts, cultural learning, and international exchange while promoting mutual understanding, skills development, and sustainable partnerships.",
      img: "/assets/img21.jpeg",
      tag: "Global Exchange",
    },
  ];

  const totalItems = programData.length;
  // Triple array to form infinite buffer
  const extendedData = [...programData, ...programData, ...programData];

  const [currentIndex, setCurrentIndex] = useState(totalItems);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  // Responsive visible slides calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Infinite autoplay timer
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [currentIndex, isHovered]);

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    // Seamless infinite reset when entering left or right overflow buffer
    if (currentIndex >= totalItems * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - totalItems);
    } else if (currentIndex < totalItems) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + totalItems);
    }
  };

  // Re-enable smooth transition after instant position adjustment
  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  // Touch Swipe Handling
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePrev();
    }
  };

  // Calculate current active dot index (0..3)
  const activeDotIndex = ((currentIndex % totalItems) + totalItems) % totalItems;

  const goToSlide = (dotIdx) => {
    setIsTransitioning(true);
    setCurrentIndex(totalItems + dotIdx);
  };

  return (
    <section id="current-programmes" className="py-20 md:py-28 overflow-hidden" style={{ background: COLORS.light }}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 text-center">
        <Reveal className="mb-8">
          <SoundBars tone="dark" className="mb-4 text-center justify-center" />
          <Eyebrow tone="gold" style={{ color: "rgb(122, 63, 163)" }}>Our Programs</Eyebrow>
          <h2 className="font-serif my-4 leading-[1.15] tracking-tight" style={{ color: "rgb(33, 27, 46)", fontSize: "clamp(26px, 3.4vw, 36px)" }}>
            Ongoing work, shaped by the people it serves.
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed">
            Discover how we empower communities, adolescent girls, and young women through impactful education, leadership, climate action, and global partnerships.
          </p>
        </Reveal>

        {/* Carousel Outer Container */}
        <div
          className="relative mt-12 group/carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Window */}
          <div className="overflow-hidden py-4 -my-4 px-1 -mx-1">
            <div
              className={`flex items-stretch transition-transform duration-500 ease-out ${
                !isTransitioning ? "transition-none" : ""
              }`}
              style={{
                transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedData.map((prog, idx) => (
                <div
                  key={`${prog.id}-${idx}`}
                  className="px-3 flex-shrink-0 flex"
                  style={{ width: `${100 / visibleSlides}%` }}
                >
                  <div className="w-full bg-white rounded-2xl border border-purple-100/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group/card text-left">
                    {/* Card Image */}
                    <div className="relative h-56 w-full overflow-hidden flex-shrink-0 bg-slate-100">
                      <img
                        src={prog.img}
                        alt={prog.title}
                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity" />
                      {prog.tag && (
                        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[11px] font-bold text-purple-900 px-3 py-1 rounded-full shadow-sm uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-amber-500" />
                          {prog.tag}
                        </span>
                      )}
                    </div>

                    {/* Card Content (Equal Height Flex Column) */}
                    <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif font-bold text-lg md:text-xl text-[rgb(33,27,46)] group-hover/card:text-[rgb(122,63,163)] transition-colors mb-3 leading-snug">
                          {prog.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {prog.desc}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-purple-700 group-hover/card:translate-x-1.5 transition-transform inline-flex items-center gap-1.5">
                          Explore Program <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium">Hekima Voice</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 z-20 w-11 h-11 rounded-full bg-white/90 shadow-lg border border-purple-100 text-purple-950 flex items-center justify-center hover:bg-purple-700 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 z-20 w-11 h-11 rounded-full bg-white/90 shadow-lg border border-purple-100 text-purple-950 flex items-center justify-center hover:bg-purple-700 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {programData.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => goToSlide(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeDotIndex === dotIdx
                  ? "w-8 bg-[rgb(122,63,163)]"
                  : "w-2.5 bg-purple-200 hover:bg-purple-300"
              }`}
            />
          ))}
        </div>

        {/* Past Programs Section */}
        <div className="mt-20 pt-16 border-t border-purple-100/80 text-left">
          <Reveal className="mb-10 text-center">
            <Eyebrow tone="purple">Impact Legacy</Eyebrow>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mt-2" style={{ color: "rgb(33, 27, 46)" }}>
              Past Programs
            </h3>
            <p className="max-w-xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed mt-2">
              Foundational initiatives that established our core protection frameworks and community trust.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Past Program 1 */}
            <Reveal delay={100} className="h-full flex">
              <div className="w-full bg-slate-50/80 hover:bg-white rounded-2xl p-7 md:p-8 border border-purple-100/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-900">
                      <Clock className="w-3.5 h-3.5 text-purple-700" />
                      Past Program
                    </span>
                    <span className="text-xs font-semibold text-slate-400">01</span>
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[rgb(33,27,46)] group-hover:text-purple-800 transition-colors mb-3">
                    Street-Connected Children Program
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Supports children living or working on the streets through protection, education, family reunification, and access to basic services.
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span>Focus: Child Protection & Reunification</span>
                  <span className="text-purple-700 font-semibold">Completed Initiative</span>
                </div>
              </div>
            </Reveal>

            {/* Past Program 2 */}
            <Reveal delay={200} className="h-full flex">
              <div className="w-full bg-slate-50/80 hover:bg-white rounded-2xl p-7 md:p-8 border border-purple-100/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                      <Clock className="w-3.5 h-3.5 text-amber-700" />
                      Past Program
                    </span>
                    <span className="text-xs font-semibold text-slate-400">02</span>
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[rgb(33,27,46)] group-hover:text-purple-800 transition-colors mb-3">
                    Family Strengthening Program
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Supports vulnerable families to improve childcare, protection, economic stability, and household resilience, reducing the risk of children entering street situations.
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span>Focus: Household Resilience</span>
                  <span className="text-purple-700 font-semibold">Completed Initiative</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;

