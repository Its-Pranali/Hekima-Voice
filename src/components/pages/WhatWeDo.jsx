import React, { useState } from "react";
import { Sparkles, Maximize2, X } from "lucide-react";
import { COLORS, Reveal, SoundBars, Eyebrow } from "../../utils/ui";

function WhatWeDo() {
  const [activeImage, setActiveImage] = useState(null);

  const items = [
    {
      id: "01",
      subtitle: "Out-of-School Empowerment",
      title: "Her STEAM – Entrepreneurship & Economic Empowerment",
      accent: COLORS.purple,
      text: "We support out-of-school adolescent girls and young women (AGYW) with practical training in entrepreneurship, business planning, financial literacy, pricing, customer care, marketing, and small-business management. Participants learn from existing women-led businesses and receive guidance to start or strengthen their own income-generating activities.",
      highlights: ["Entrepreneurship", "Financial Literacy", "Business Management", "Mentorship"],
      image: "/assets/IMG_1316.jpeg",
      imageAlt: "Her STEAM Out-of-School Empowerment session in Kagera",
    },
    {
      id: "02",
      subtitle: "In-School Foundation",
      title: "STEAM in Schools – Career Skills",
      accent: COLORS.gold,
      text: "We provide in-school girls with practical digital skills, problem-solving, creativity, teamwork, and career guidance. The programme encourages girls to remain in school, develop confidence, and prepare for future education and employment opportunities.",
      highlights: ["Digital Literacy", "Problem Solving", "Career Guidance", "Teamwork"],
      image: "/assets/IMG_1323.jpeg",
      imageAlt: "STEAM in Schools student workshop activity",
    },
    {
      id: "03",
      subtitle: "Global Collaboration",
      title: "Exchange & Partnerships – Local and International Learning",
      accent: COLORS.purpleDeep,
      text: "We develop partnerships with universities, students, organizations, and institutions in Tanzania and abroad to create opportunities for knowledge sharing, mentorship, learning, and cultural exchange. Participants learn from one another by sharing daily experiences, cultures, skills, and perspectives, strengthening global understanding and collaboration.",
      highlights: ["Global Partnerships", "Cultural Exchange", "Mentorship", "Knowledge Sharing"],
      image: "/assets/IMG_1373.jpeg",
      imageAlt: "Cultural Exchange & International Learning workshop",
    },
  ];

  return (
    <section id="what-we-do" className="py-20 md:py-32 relative overflow-hidden" style={{ background: COLORS.cream }}>
      {/* Decorative ambient background glows */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: COLORS.purple }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: COLORS.gold }}
      />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        <Reveal>
          <SoundBars className="mb-4" />
          <Eyebrow tone="purple">What We Do</Eyebrow>
          <h2
            className="font-serif mt-4 leading-[1.15] tracking-tight max-w-[640px]"
            style={{ color: COLORS.ink, fontSize: "clamp(28px, 3.6vw, 44px)" }}
          >
            Three ways we turn voice into change.
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-[15px] max-w-[680px] leading-relaxed">
            Our targeted initiatives bridge education, economic opportunity, and international learning for young women and girls.
          </p>
        </Reveal>

        {/* Feature Cards Grid / Alternating Rows */}
        <div className="mt-16 space-y-12 md:space-y-16">
          {items.map((it, i) => {
            const isEven = i % 2 === 0;
            return (
              <Reveal key={it.title} delay={i * 120}>
                <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center bg-white/70 backdrop-blur-sm border border-purple-900/10 p-6 md:p-10 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group">
                  {/* Image Block */}
                  <div
                    className={`md:col-span-5 ${isEven ? "md:order-1" : "md:order-2"}`}
                  >
                    <div
                      className="relative overflow-hidden rounded-2xl aspect-[4/3] group/img cursor-pointer shadow-md"
                      onClick={() => setActiveImage(it)}
                    >
                      <img
                        src={it.image}
                        alt={it.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover/img:opacity-60 transition-opacity" />

                      {/* Image Tag Badge */}
                      <span
                        className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-md bg-black/40 border border-white/20 shadow-xs"
                      >
                        {it.subtitle}
                      </span>

                      {/* Expand / View Button Overlay */}
                      <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-800 opacity-90 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all shadow-sm">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Text Content Block */}
                  <div
                    className={`md:col-span-7 ${isEven ? "md:order-2" : "md:order-1"}`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <span
                        className="font-serif text-3xl md:text-4xl font-bold tracking-tight"
                        style={{ color: it.accent }}
                      >
                        {it.id}
                      </span>
                      <div
                        className="h-[3px] w-12 rounded-full"
                        style={{ background: it.accent }}
                      />
                      <span className="text-xs uppercase font-bold tracking-widest text-slate-500">
                        {it.subtitle}
                      </span>
                    </div>

                    <h3
                      className="font-serif text-2xl md:text-3xl font-bold tracking-tight mb-4"
                      style={{ color: COLORS.ink }}
                    >
                      {it.title}
                    </h3>
                    <p
                      className="text-base md:text-[15px] leading-relaxed mb-6"
                      style={{ color: COLORS.inkSoft }}
                    >
                      {it.text}
                    </p>

                    {/* Feature Highlights Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {it.highlights.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-purple-900/10 text-slate-700 shadow-2xs"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 transition-opacity"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[4/3] max-h-[70vh] w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeImage.image}
                alt={activeImage.imageAlt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 bg-slate-900 text-white">
              <span className="text-xs uppercase font-bold text-purple-400 tracking-wider">
                {activeImage.subtitle}
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-bold mt-1 mb-2">
                {activeImage.title}
              </h3>
              <p className="text-sm text-slate-300">
                {activeImage.text}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default WhatWeDo;
