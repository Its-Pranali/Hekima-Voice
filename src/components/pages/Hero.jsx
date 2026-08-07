import React, { useState, useEffect, useRef } from "react";
import { COLORS, Reveal, Counter, SoundBars, Eyebrow } from "../../utils/ui";
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: COLORS.lavender }} >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      // style={{ opacity: 0.4 }}
      >
        <source src="/assets/Hekima.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay for Readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(#01869db3 0%, rgb(167 112 197 / 68%) 60%, rgb(88 17 125 / 89%) 100%)',
        }}
      />

      {/* ambient blobs */}
      <div className="blob-a pointer-events-none absolute -top-24 -right-16 w-[420px] h-[420px] rounded-full" style={{ background: `radial-gradient(circle, ${COLORS.purple}33, transparent 70%)`, filter: "blur(30px)" }} aria-hidden="true" />
      <div className="blob-b pointer-events-none absolute top-40 -left-24 w-[360px] h-[360px] rounded-full" style={{ background: `radial-gradient(circle, ${COLORS.gold}2e, transparent 70%)`, filter: "blur(30px)" }} aria-hidden="true" />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28 z-10">
        <div className="hero-in" style={{ animationDelay: "0ms" }}>
          <Eyebrow tone="gold">Hekima Voice · Community Advocacy</Eyebrow>
        </div>

        <h1 className="hero-in font-serif mt-6 leading-[1.08] tracking-tight" style={{ color: "#ffffff", fontSize: "clamp(34px, 5.4vw, 58px)", animationDelay: "90ms", textShadow: "0 2px 12px rgba(0, 0, 0, 0.25)" }} >
          Wisdom is what a
          <br className="hidden md:block" /> community
          <br className="hidden md:block" /> already knows.
          <br />
          <span style={{ color: "#56F5FF" }}>We help it be heard.</span>
        </h1>

        <p className="hero-in mt-6 max-w-[480px] text-[16px] leading-relaxed" style={{ color: "rgba(255, 255, 255, 0.9)", animationDelay: "180ms", textShadow: "0 1px 4px rgba(0, 0, 0, 0.2)" }} >
          Hekima Voice works alongside underserved communities to turn lived
          experience into programs, partnerships, and policy that last —
          built with the people they serve, not for them.
        </p>

        <div className="hero-in mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: "270ms" }}>
          <a href="#give" className="inline-flex items-center px-6 py-3.5 rounded-full text-[14px] font-semibold btn-anim btn-gold" style={{ background: COLORS.gold, color: COLORS.dark }} >
            Support our work
          </a>
          <a href="#who-we-are" className="read-more-btn py-3.5" style={{ textDecoration: "none" }}>
            Learn who we are
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <div className="hero-in hidden md:flex flex-col items-end absolute right-10 top-[120px]" style={{ animationDelay: "360ms" }}>
          <span className="text-[11px] tracking-[0.18em] uppercase mb-3" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
            Spread the word
          </span>
          <SoundBars size="lg" tone="dark" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
