import React, { useState, useEffect, useRef } from "react";
import { COLORS, Reveal, Counter, SoundBars, Eyebrow } from "../../utils/ui";
function Support() {
  const cards = [
    {
      title: "Give",
      text: "One-time or monthly gifts fund the Rapid Response Fund and keep our programs free.",
      cta: "Donate now",
    },
    {
      title: "Volunteer",
      text: "Facilitate a Neighbourhood Circle, mentor a fellow, or lend a professional skill.",
      cta: "See openings",
    },
    {
      title: "Spread the Word",
      text: "Share an impact story or invite us to speak with your own community or organization.",
      cta: "Get in touch",
    },
  ];
  return (
    <section id="support" className="py-20 md:py-28" style={{ background: COLORS.light }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <SoundBars className="mb-4" />
          <Eyebrow>Ways to Support</Eyebrow>
          <h2 className="font-serif mt-4 leading-[1.15] tracking-tight max-w-[480px]" style={{ color: COLORS.ink, fontSize: "clamp(26px, 3.4vw, 36px)" }} >
            However you give, it stays close to home.
          </h2>
        </Reveal>

        <div id="give" className="mt-14 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="lift rounded-xl p-7 h-full" style={{ border: `1px solid ${COLORS.line}` }}>
                <h3 className="font-serif text-[19px]" style={{ color: COLORS.ink }}>
                  {c.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed" style={{ color: COLORS.inkSoft }}>
                  {c.text}
                </p>
                <a href="#contact" className="link-underline inline-block mt-5 text-[13px] font-semibold" style={{ color: COLORS.purple }}>
                  {c.cta} →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Support;
