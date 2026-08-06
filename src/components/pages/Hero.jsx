import React, { useState, useEffect, useRef } from "react";
import { COLORS, Reveal, Counter, SoundBars, Eyebrow } from "../../utils/ui";
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${COLORS.lavender} 0%, ${COLORS.lavenderSoft} 55%, ${COLORS.cream} 100%)`, }} >
      {/* ambient blobs */}
      <div className="blob-a pointer-events-none absolute -top-24 -right-16 w-[420px] h-[420px] rounded-full" style={{ background: `radial-gradient(circle, ${COLORS.purple}33, transparent 70%)`, filter: "blur(30px)" }} aria-hidden="true" />
      <div className="blob-b pointer-events-none absolute top-40 -left-24 w-[360px] h-[360px] rounded-full" style={{ background: `radial-gradient(circle, ${COLORS.gold}2e, transparent 70%)`, filter: "blur(30px)" }} aria-hidden="true" />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="hero-in" style={{ animationDelay: "0ms" }}>
          <Eyebrow>Hekima Voice · Community Advocacy</Eyebrow>
        </div>

        <h1 className="hero-in font-serif mt-6 leading-[1.08] tracking-tight" style={{ color: COLORS.ink, fontSize: "clamp(34px, 5.4vw, 58px)", animationDelay: "90ms" }} >
          Wisdom is what a
          <br className="hidden md:block" /> community
          <br className="hidden md:block" /> already knows.
          <br />
          <span style={{ color: COLORS.purple }}>We help it be heard.</span>
        </h1>

        <p className="hero-in mt-6 max-w-[480px] text-[16px] leading-relaxed" style={{ color: COLORS.inkSoft, animationDelay: "180ms" }} >
          Hekima Voice works alongside underserved communities to turn lived
          experience into programs, partnerships, and policy that last —
          built with the people they serve, not for them.
        </p>

        <div className="hero-in mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: "270ms" }}>
          <a href="#give" className="inline-flex items-center px-6 py-3.5 rounded-full text-[14px] font-semibold btn-anim btn-gold" style={{ background: COLORS.gold, color: COLORS.dark }} >
            Support our work
          </a>
          <a href="#who-we-are" className="btn-anim btn-outline inline-flex items-center px-6 py-3.5 rounded-full text-[14px] font-semibold border" style={{ borderColor: COLORS.ink, color: COLORS.ink, "--ink": COLORS.ink, "--cream": COLORS.cream }} >
            Learn who we are
          </a>
        </div>

        <div className="hero-in hidden md:flex flex-col items-end absolute right-10 top-[120px]" style={{ animationDelay: "360ms" }}>
          <span className="text-[11px] tracking-[0.18em] uppercase mb-3" style={{ color: COLORS.inkSoft }}>
            Spread the word
          </span>
          <SoundBars size="lg" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
