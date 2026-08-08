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

  const quotes = [
    {
      text: "Nobody had asked us what we actually needed before. Hekima Voice sat in our kitchen and listened for two hours before writing anything down.",
      by: "Amina",
      role: "Neighbourhood Circle member",
    },
    {
      text: "The fellowship gave me the words and the confidence to speak at a city council meeting for the first time. Now I help run it.",
      by: "Tomas",
      role: "Youth Voice Fellow",
    },
    {
      text: "The Rapid Response Fund covered our electricity bill the week my hours got cut. It bought us time to get back on our feet.",
      by: "Grace",
      role: "Rapid Response recipient",
    },
  ];

  const stats = [
    { num: 1200, prefix: "", suffix: "+", label: "Women Reached" },
    { num: 38, prefix: "", suffix: "", label: "Capital Distributed" },
    { num: 180, prefix: "$", suffix: "K", label: "Participants" },
    { num: 6, prefix: "", suffix: "", label: "Businesses Launched" },
    { num: 100, prefix: "", suffix: "", label: "Training Sessions" },
  ];

  const partners = ["Riverside Community Fund", "Open Table Coalition", "Northside Legal Aid", "Civic Roots Network"];
  const marqueeItems = [...partners, ...partners];

  const avatarPalette = [COLORS.purple, COLORS.gold, COLORS.purpleDeep];

  return (
    <>
      <section id="impact-testimonials" className="relative overflow-hidden py-20 md:py-28" style={{ background: COLORS.cream }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <Reveal>
            <SoundBars className="mb-4" />
            <Eyebrow>Impact Stories</Eyebrow>
            <h2
              className="font-serif my-2 leading-[1.15] tracking-tight max-w-[1200px]"
              style={{ color: COLORS.ink, fontSize: "clamp(26px, 3.4vw, 36px)" }}
            >
              In the words of the people we work with.
            </h2>
          </Reveal>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-8 md:gap-0 items-center">

          {/* Left Column - Image with organic rounded corners */}
          <div className="col-span-12 md:col-span-5 z-0">


            <Reveal delay={150} y={34}>
              <div className="w-full aspect-[4/3] md:aspect-[1/1] lg:aspect-[4/3] overflow-hidden rounded-[0px_90px_90px_90px] shadow-lg">
                <img
                  src="/assets/img10.jpg"
                  alt="Volunteers collaborating"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column - Overlapping Testimonial Slider Card */}
          <div className="col-span-12 md:col-span-7 -ml-0 md:-ml-8 z-10 test-card">
            <Reveal delay={250}>
              <div
                className="rounded-[90px_0px_90px_90px] p-8 md:p-12 shadow-xl border"
                style={{
                  background: COLORS.light,
                  borderColor: `${COLORS.line}1e`,
                  border: '2px solid #0191a8'
                }}
              >
                <div className="mb-2">
                  <Eyebrow tone="gold">Testimonials</Eyebrow>
                </div>
                <h2 className="font-serif text-[28px] md:text-[34px] font-bold tracking-tight mb-8" style={{ color: COLORS.ink, lineHeight: 1.2 }}>
                  Experience From Our Volunteers
                </h2>

                <div className="relative min-h-[160px]">
                  {volunteerTestimonials.map((slide, idx) => (
                    <div
                      key={idx}
                      className={`transition-all duration-500 ease-in-out ${idx === activeVolSlide
                        ? "opacity-100 translate-x-0 relative pointer-events-auto"
                        : "opacity-0 absolute inset-0 -translate-x-4 pointer-events-none"
                        }`}
                    >
                      <p className="text-[15px] md:text-[16px] leading-relaxed italic" style={{ color: COLORS.inkSoft }}>
                        &ldquo;{slide.text}&rdquo;
                      </p>

                      <div className="relative mt-8 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center font-serif text-[13px] font-bold text-white flex-shrink-0"
                            style={{ background: slide.avatarBg }}
                          >
                            {slide.initial}
                          </div>
                          <div>
                            <p className="text-[14px] font-bold" style={{ color: COLORS.ink }}>
                              {slide.by}
                            </p>
                            <p className="text-[12px]" style={{ color: COLORS.purple }}>
                              {slide.role}
                            </p>
                          </div>
                        </div>

                        {/* Quote icon matching the style */}
                        <span
                          className="font-serif select-none text-[60px] font-bold opacity-20 -mt-4"
                          style={{ color: COLORS.purpleDeep, lineHeight: 1 }}
                          aria-hidden="true"
                        >
                          &#8221;&#8221;
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Slider Pagination Dots */}
                <div className="flex gap-2 mt-0 pt-4 border-t border-gray-100">
                  {volunteerTestimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveVolSlide(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeVolSlide ? "w-6 bg-purple-700" : "w-2.5 bg-purple-100 hover:bg-purple-200"
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </section>
      <section id="impact" className="relative overflow-hidden py-20 md:py-20" style={{ background: COLORS.light }}>
        {/* ambient decoration */}


        <div className="relative max-w-[1200px] mx-auto px-6 md:px-10">

          {/* Quote cards */}
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
                <div className="marquee-track flex items-center gap-14 w-max">
                  {marqueeItems.map((p, i) => (
                    <span
                      key={p + i}
                      className="text-[14px] font-semibold whitespace-nowrap"
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
              className="mt-20 rounded-2xl grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6 text-center py-12 px-6"
              style={{ background: COLORS.dark }}
            >
              {stats.map((s, i) => (
                <div key={s.label} className="relative">
                  {i !== 0 && (
                    <span
                      className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -ml-3 h-10 w-px"
                      style={{ background: COLORS.lineDark }}
                      aria-hidden="true"
                    />
                  )}
                  <div className="font-serif text-[32px] md:text-[36px]" style={{ color: COLORS.goldSoft }}>
                    <Counter to={s.num} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-[12px] max-w-[160px] mx-auto" style={{ color: "#B9B2C6" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Partners marquee */}

        </div>
      </section>
    </>
  );
}

export default Impact;
