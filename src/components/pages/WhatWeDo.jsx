import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { COLORS, Reveal, SoundBars, Eyebrow } from "../../utils/ui";

function WhatWeDo() {
  const [activeItem, setActiveItem] = useState(0);

  const items = [
    {
      id: "01",
      subtitle: "Out-of-School Empowerment",
      title: "Her STEAM – Entrepreneurship & Economic Empowerment",
      accent: COLORS.purple,
      text: "We support out-of-school adolescent girls and young women (AGYW) with practical training in entrepreneurship, business planning, financial literacy, pricing, customer care, marketing, and small-business management. Participants learn from existing women-led businesses and receive guidance to start or strengthen their own income-generating activities.",
      highlights: ["Entrepreneurship", "Financial Literacy", "Business Management", "Mentorship"],
    },
    {
      id: "02",
      subtitle: "In-School Foundation",
      title: "STEAM in Schools – Career Skills",
      accent: COLORS.gold,
      text: "We provide in-school girls with practical digital skills, problem-solving, creativity, teamwork, and career guidance. The programme encourages girls to remain in school, develop confidence, and prepare for future education and employment opportunities.",
      highlights: ["Digital Literacy", "Problem Solving", "Career Guidance", "Teamwork"],
    },
    {
      id: "03",
      subtitle: "Global Collaboration",
      title: "Exchange & Partnerships – Local and International Learning",
      accent: COLORS.purpleDeep,
      text: "We develop partnerships with universities, students, organizations, and institutions in Tanzania and abroad to create opportunities for knowledge sharing, mentorship, learning, and cultural exchange. Participants learn from one another by sharing daily experiences, cultures, skills, and perspectives, strengthening global understanding and collaboration.",
      highlights: ["Global Partnerships", "Cultural Exchange", "Mentorship", "Knowledge Sharing"],
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

        {/* Stacked Editorial Feature Rows (No Cards) */}
        <div className="mt-16 border-t border-purple-900/15">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 100}>
              <div
                onMouseEnter={() => setActiveItem(i)}
                className={`py-10 md:py-14 border-b border-purple-900/15 transition-all duration-300 group cursor-pointer ${activeItem === i ? "bg-white/40 -mx-4 px-4 md:-mx-8 md:px-8 rounded-2xl" : ""
                  }`}
              >
                <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
                  {/* Left Column: Number & Subtitle */}
                  <div className="md:col-span-4 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <span
                          className="font-serif text-3xl md:text-4xl font-bold tracking-tight"
                          style={{ color: it.accent }}
                        >
                          {it.id}
                        </span>
                        <div
                          className="h-[3px] w-10 group-hover:w-20 transition-all duration-500 rounded-full"
                          style={{ background: it.accent }}
                        />
                      </div>
                      <span className="text-xs uppercase font-bold tracking-widest text-slate-500">
                        {it.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Title, Description & Tags */}
                  <div className="md:col-span-8">
                    <h3
                      className="font-serif text-2xl md:text-3xl font-bold tracking-tight mb-4 group-hover:text-purple-950 transition-colors"
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
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/80 border border-purple-900/10 text-slate-700 shadow-2xs"
                        >
                          <Sparkles className="w-3 h-3 text-purple-600" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
