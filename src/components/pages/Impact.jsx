import React, { useState, useEffect, useRef } from "react";
import { COLORS, Reveal, Counter, SoundBars, Eyebrow } from "../../utils/ui";
function Impact() {
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
    { num: 1200, prefix: "", suffix: "+", label: "Residents engaged since founding" },
    { num: 38, prefix: "", suffix: "", label: "Neighbourhood Circles running" },
    { num: 180, prefix: "$", suffix: "K", label: "Distributed via Rapid Response Fund" },
    { num: 6, prefix: "", suffix: "", label: "Local policies shaped by our advocacy" },
  ];

  const partners = ["Riverside Community Fund", "Open Table Coalition", "Northside Legal Aid", "Civic Roots Network"];
  const marqueeItems = [...partners, ...partners];

  const avatarPalette = [COLORS.purple, COLORS.gold, COLORS.purpleDeep];

  return (
    <section id="impact" className="relative overflow-hidden py-20 md:py-28" style={{ background: COLORS.cream }}>
      {/* ambient decoration */}
      <div
        className="blob-a pointer-events-none absolute -top-20 right-[-10%] w-[420px] h-[420px] rounded-full"
        style={{ background: `radial-gradient(circle, ${COLORS.purple}1c, transparent 70%)`, filter: "blur(30px)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <SoundBars className="mb-4" />
          <Eyebrow>Impact Stories</Eyebrow>
          <h2
            className="font-serif mt-4 leading-[1.15] tracking-tight max-w-[520px]"
            style={{ color: COLORS.ink, fontSize: "clamp(26px, 3.4vw, 36px)" }}
          >
            In the words of the people we work with.
          </h2>
        </Reveal>

        {/* Quote cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <Reveal key={q.by} delay={i * 100}>
              <div
                className="lift relative rounded-2xl p-7 h-full overflow-hidden"
                style={{
                  background: COLORS.lavenderSoft,
                  border: `1px solid ${COLORS.line}`,
                }}
              >
                {/* giant quote mark watermark */}
                <span
                  className="absolute -top-2 right-4 font-serif select-none"
                  style={{ fontSize: "80px", color: COLORS.purple, opacity: 0.1, lineHeight: 1 }}
                  aria-hidden="true"
                >
                  &rdquo;
                </span>

                <p className="relative text-[15px] leading-relaxed italic" style={{ color: COLORS.ink }}>
                  &ldquo;{q.text}&rdquo;
                </p>

                <div className="relative mt-6 flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-serif text-[13px] font-semibold flex-shrink-0"
                    style={{ background: avatarPalette[i % avatarPalette.length], color: "#fff" }}
                  >
                    {q.by.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold" style={{ color: COLORS.ink }}>
                      {q.by}
                    </p>
                    <p className="text-[12px]" style={{ color: COLORS.purpleDeep }}>
                      {q.role}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <Reveal delay={100}>
          <div
            className="mt-20 rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center py-12 px-6"
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
        <Reveal delay={150}>
          <div className="mt-16 text-center">
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
      </div>
    </section>
  );
}

export default Impact;
