import React, { useState, useEffect, useRef } from "react";
import { COLORS, Reveal, Counter, SoundBars, Eyebrow } from "../../utils/ui";
function WhatWeDo() {
  const items = [
    {
      title: "Community Organizing",
      accent: COLORS.purple,
      text: "Training and supporting local residents to identify shared priorities and lead the response themselves.",
    },
    {
      title: "Advocacy & Policy",
      accent: COLORS.gold,
      text: "Carrying community voice into rooms where decisions are made — from town halls to legislative hearings.",
    },
    {
      title: "Direct Support",
      accent: COLORS.goldSoft,
      text: "Practical, dignified assistance that meets urgent needs while longer-term solutions take shape.",
    },
    {
      title: "Storytelling",
      accent: COLORS.purpleDeep,
      text: "Documenting lived experience so it can inform funders, partners, and policy — in people's own words.",
    },
  ];
  return (
    <section id="what-we-do" className="py-20 md:py-28" style={{ background: COLORS.cream }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <SoundBars className="mb-4" />
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="font-serif mt-4 leading-[1.15] tracking-tight max-w-[560px]" style={{ color: COLORS.ink, fontSize: "clamp(26px, 3.4vw, 36px)" }} >
            Four ways we turn voice into change.
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 90}>
              <div className="lift">
                <div className="accent-line h-[2px] w-10 mb-5" style={{ background: it.accent }} />
                <h3 className="font-serif text-[19px]" style={{ color: COLORS.ink }}>
                  {it.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed" style={{ color: COLORS.inkSoft }}>
                  {it.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


 export default WhatWeDo;
