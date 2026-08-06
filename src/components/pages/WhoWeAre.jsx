import React, { useState, useEffect, useRef } from "react";
import { COLORS, Reveal, Counter, SoundBars, Eyebrow } from "../../utils/ui";

function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-20 md:py-28 overflow-hidden" style={{ background: COLORS.cream }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
        <Reveal>
          <SoundBars className="mb-4" />
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="font-serif mt-4 leading-[1.15] tracking-tight" style={{ color: COLORS.ink, fontSize: "clamp(26px, 3.4vw, 36px)" }} >
            Founded on the belief that people are the experts on their own
            lives.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed" style={{ color: COLORS.inkSoft }}>
            Hekima Voice began as a handful of neighbours meeting in a living
            room to talk about what their community needed and wasn't
            getting. Today we're a small, growing team that still starts
            every project the same way: by listening first.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: COLORS.inkSoft }}>
            We partner with residents, local leaders, and organizers to
            design programs that reflect real priorities — then stay
            accountable to the people those programs are meant to serve, long
            after launch day.
          </p>
        </Reveal>

        <Reveal delay={150} y={34}>
          <div className="img-zoom w-full aspect-[4/3] rounded-2xl" style={{ background: COLORS.lavender }}>
            <div className="img-zoom-inner w-full h-full flex items-center justify-center">
              <span className="text-[13px] text-center overflow-hidden" style={{ color: COLORS.purpleDeep }}>
                {/* Photo of the team or community, coming soon */}
                <img src="../../../public/assets/img2.jpg" alt="Team Photo" />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default WhoWeAre;
