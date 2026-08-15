import React, { useState, useEffect, useRef } from "react";
import { COLORS, Reveal, Counter, SoundBars, Eyebrow } from "../../utils/ui";

function Impact() {
  const [activeVolSlide, setActiveVolSlide] = useState(0);

  const volunteerTestimonials = [
    {
      text: "Every dollar donated is a step towards making the world a better place, and being part of this cause has given me a sense of purpose and fulfillment like no other. Together, we're giving hope.",
      by: "James Anderson",
      role: "Mentor",
      initial: "JA",
      avatarBg: COLORS.purple,
    },
    {
      text: "Volunteering with the youth fellowship program has shown me the power of community organizing. The young people are incredibly inspired.",
      by: "Elena Rostova",
      role: "Youth Leader",
      initial: "ER",
      avatarBg: COLORS.gold,
    },
    {
      text: "Running the Neighbourhood Circles has allowed me to connect deeply with my community and address urgent local priorities.",
      by: "Marcus Vance",
      role: "Circle Facilitator",
      initial: "MV",
      avatarBg: COLORS.purpleDeep,
    },
  ];

  const stats = [
    { num: 1200, prefix: "", suffix: "+", label: "Women Reached" },
    { num: 38, prefix: "", suffix: "", label: "Capital Distributed" },
    { num: 180, prefix: "", suffix: "K", label: "Participants" },
    { num: 6, prefix: "", suffix: "", label: "Businesses Launched" },
    { num: 100, prefix: "", suffix: "", label: "Training Sessions" },
  ];

  const partners = ["Riverside Community Fund", "Open Table Coalition", "Northside Legal Aid", "Civic Roots Network"];
  const marqueeItems = [...partners, ...partners];

  // --- Testimonial slider: swipe / drag support ---
  const volCount = volunteerTestimonials.length;

  const goToVolSlide = (idx) => {
    setActiveVolSlide(((idx % volCount) + volCount) % volCount);
  };
  const handleVolNext = () => goToVolSlide(activeVolSlide + 1);
  const handleVolPrev = () => goToVolSlide(activeVolSlide - 1);

  // Auto-advance, paused while the user is dragging/hovering
  const [isVolHovered, setIsVolHovered] = useState(false);
  useEffect(() => {
    if (isVolHovered) return;
    const timer = setInterval(() => {
      setActiveVolSlide((prev) => (prev + 1) % volCount);
    }, 5000);
    return () => clearInterval(timer);
  }, [isVolHovered, volCount]);

  // Unified drag state for mouse + touch
  const dragStartX = useRef(0);
  const dragDeltaX = useRef(0);
  const isDragging = useRef(false);
  const SWIPE_THRESHOLD = 40;

  const startDrag = (clientX) => {
    isDragging.current = true;
    dragStartX.current = clientX;
    dragDeltaX.current = 0;
  };

  const moveDrag = (clientX) => {
    if (!isDragging.current) return;
    dragDeltaX.current = clientX - dragStartX.current;
  };

  const endDrag = () => {
    if (!isDragging.current) return;
    if (dragDeltaX.current > SWIPE_THRESHOLD) {
      handleVolPrev();
    } else if (dragDeltaX.current < -SWIPE_THRESHOLD) {
      handleVolNext();
    }
    isDragging.current = false;
    dragDeltaX.current = 0;
  };

  // Touch handlers
  const handleTouchStart = (e) => startDrag(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => moveDrag(e.targetTouches[0].clientX);
  const handleTouchEnd = () => endDrag();

  // Mouse handlers (desktop click-and-drag)
  const handleMouseDown = (e) => {
    e.preventDefault();
    startDrag(e.clientX);
  };
  const handleMouseMove = (e) => {
    if (isDragging.current) moveDrag(e.clientX);
  };
  const handleMouseUp = () => endDrag();
  const handleMouseLeave = () => {
    setIsVolHovered(false);
    endDrag();
  };

  return (
    <>
      <section id="impact-testimonials" className="relative overflow-hidden py-12 md:py-28" style={{ background: COLORS.cream }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
          <Reveal>
            <SoundBars className="mb-3 md:mb-4" />
            <Eyebrow>Impact Stories</Eyebrow>
            <h2
              className="font-serif my-2 leading-[1.15] tracking-tight max-w-[1200px]"
              style={{ color: COLORS.ink, fontSize: "clamp(24px, 3.4vw, 36px)" }}
            >
              In the words of the people we work with.
            </h2>
          </Reveal>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 items-center mt-4 md:mt-0">

          {/* Left Column - Image with organic rounded corners */}
          <div className="col-span-1 md:col-span-5 z-0">
            <Reveal delay={150} y={34}>
              <div className="w-full aspect-[16/10] sm:aspect-[4/3] md:aspect-[1/1] lg:aspect-[4/3] max-h-[280px] sm:max-h-none md:max-h-none overflow-hidden rounded-[20px] sm:rounded-[28px] md:rounded-[0px_90px_90px_90px] shadow-lg">
                <img
                  src="/assets/img10.jpg"
                  alt="Volunteers collaborating"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column - Overlapping Testimonial Slider Card */}
          <div className="col-span-1 md:col-span-7 -mt-4 sm:-mt-8 md:mt-0 -ml-0 md:-ml-8 z-10 test-card">
            <Reveal delay={250}>
              <div
                className="rounded-[20px] sm:rounded-[28px] md:rounded-[90px_0px_90px_90px] p-5 sm:p-8 md:p-12 shadow-xl border select-none cursor-grab active:cursor-grabbing"
                style={{
                  background: COLORS.light,
                  borderColor: `${COLORS.line}1e`,
                  border: '2px solid #0191a8',
                  touchAction: "pan-y",
                }}
                onMouseEnter={() => setIsVolHovered(true)}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="mb-2">
                  <Eyebrow tone="gold">Testimonials</Eyebrow>
                </div>
                <h2 className="font-serif text-[22px] sm:text-[28px] md:text-[34px] font-bold tracking-tight mb-4 sm:mb-6 md:mb-8" style={{ color: COLORS.ink, lineHeight: 1.2 }}>
                  Experience From Our Volunteers
                </h2>

                <div className="relative min-h-[240px] sm:min-h-[180px] md:min-h-[160px] flex flex-col justify-between">
                  {volunteerTestimonials.map((slide, idx) => (
                    <div
                      key={idx}
                      className={`transition-all duration-500 ease-in-out ${idx === activeVolSlide
                        ? "opacity-100 translate-x-0 relative pointer-events-auto"
                        : "opacity-0 absolute inset-0 -translate-x-4 pointer-events-none"
                        }`}
                    >
                      <p className="text-[13.5px] sm:text-[15px] md:text-[16px] leading-relaxed italic" style={{ color: COLORS.inkSoft }}>
                        &ldquo;{slide.text}&rdquo;
                      </p>

                      <div className="relative mt-5 sm:mt-6 md:mt-8 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-9 h-9 sm:w-10 sm:h-10 md:w-10 md:h-10 rounded-full flex items-center justify-center font-serif text-[12px] sm:text-[13px] md:text-[13px] font-bold text-white flex-shrink-0"
                            style={{ background: slide.avatarBg }}
                          >
                            {slide.initial}
                          </div>
                          <div>
                            <p className="text-[13px] sm:text-[14px] md:text-[14px] font-bold" style={{ color: COLORS.ink }}>
                              {slide.by}
                            </p>
                            <p className="text-[11px] sm:text-[12px] md:text-[12px]" style={{ color: COLORS.purple }}>
                              {slide.role}
                            </p>
                          </div>
                        </div>

                        {/* Quote icon matching the style */}
                        <span
                          className="font-serif select-none text-[36px] sm:text-[48px] md:text-[60px] font-bold opacity-20 -mt-2 md:-mt-4"
                          style={{ color: COLORS.purpleDeep, lineHeight: 1 }}
                          aria-hidden="true"
                        >
                          &#8221;&#8221;
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Slider Pagination Controls */}
                <div className="flex items-center justify-between md:justify-start gap-2 mt-4 md:mt-0 pt-4 border-t border-gray-100">
                  {/* Slider Pagination Dots */}
                  <div className="flex gap-2">
                    {volunteerTestimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goToVolSlide(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeVolSlide ? "w-6 bg-purple-700" : "w-2.5 bg-purple-100 hover:bg-purple-200"
                          }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Arrow Controls (Mobile only) */}
                  <div className="flex md:hidden items-center gap-2">
                    <button
                      onClick={handleVolPrev}
                      className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 hover:border-purple-600 hover:bg-purple-50 active:scale-95 transition-all text-purple-700"
                      aria-label="Previous testimonial"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={handleVolNext}
                      className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 hover:border-purple-600 hover:bg-purple-50 active:scale-95 transition-all text-purple-700"
                      aria-label="Next testimonial"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </section>

      <section id="impact" className="relative overflow-hidden py-12 md:py-20" style={{ background: COLORS.light }}>
        <div className="relative max-w-[1200px] mx-auto px-4 md:px-10">

          {/* Marquee section */}
          <Reveal delay={150}>
            <div className="text-center">
              <span className="text-[11px] tracking-[0.18em] uppercase" style={{ color: COLORS.inkSoft }}>
                Working Alongside
              </span>
              <div
                className="marquee-wrap mt-6 overflow-hidden py-4"
                style={{
                  maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
                  borderTop: `1px solid ${COLORS.line}`,
                  borderBottom: `1px solid ${COLORS.line}`,
                }}
              >
                <div className="marquee-track flex items-center gap-8 md:gap-14 w-max">
                  {marqueeItems.map((p, i) => (
                    <span
                      key={p + i}
                      className="text-[13px] md:text-[14px] font-semibold whitespace-nowrap"
                      style={{ color: COLORS.purpleDeep, opacity: 0.75 }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLORS.gold }} aria-hidden="true" />
                <span className="text-[13px] font-medium" style={{ color: COLORS.ink }}>
                  Harbor &amp; Hill Foundation
                </span>
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={100}>
            <div
              className="mt-12 sm:mt-16 md:mt-20 rounded-2xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 gap-x-4 md:gap-y-10 md:gap-x-6 text-center py-10 sm:py-12 px-4 md:px-6"
              style={{ background: COLORS.dark }}
            >
              {stats.map((s, i) => (
                <div key={s.label} className={`relative ${i === 4 ? "col-span-2 sm:col-span-1" : ""}`}>
                  {i !== 0 && (
                    <span
                      className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -ml-3 h-10 w-px"
                      style={{ background: COLORS.lineDark }}
                      aria-hidden="true"
                    />
                  )}
                  <div className="font-serif text-[24px] sm:text-[32px] md:text-[36px]" style={{ color: COLORS.goldSoft }}>
                    <Counter to={s.num} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-[11px] sm:text-[12px] md:text-[12px] max-w-[160px] mx-auto" style={{ color: "#B9B2C6" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </section>
    </>
  );
}

export default Impact;