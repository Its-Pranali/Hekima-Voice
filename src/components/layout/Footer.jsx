import React, { useState, useEffect, useRef } from "react";
import { COLORS, Reveal, Counter, SoundBars, Eyebrow } from "../../utils/ui";

import { Facebook, Instagram, Twitter } from "lucide-react";
function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  }

  const quickLinks = ["Who We Are", "What We Do", "Programs", "Impact", "Support", "Contact"];
  const programLinks = ["Neighbourhood Circles", "Youth Voice Fellowship", "Rapid Response Fund", "Policy Table"];

  return (
    <footer className="relative overflow-hidden" style={{ background: COLORS.dark }}>
      {/* ambient blob, consistent with Hero/Contact */}
      <div
        className="blob-b pointer-events-none absolute -top-24 -left-16 w-[380px] h-[380px] rounded-full"
        style={{ background: `radial-gradient(circle, ${COLORS.purple}22, transparent 70%)`, filter: "blur(30px)" }}
        aria-hidden="true"
      />
      <div
        className="blob-a pointer-events-none absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full"
        style={{ background: `radial-gradient(circle, ${COLORS.gold}1f, transparent 70%)`, filter: "blur(30px)" }}
        aria-hidden="true"
      />

      {/* Main footer content */}
      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 pt-40 pb-10">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1.3fr] gap-12">
          {/* Brand column */}
          <Reveal>
            <SoundBars tone="dark" className="mb-4" />
            <span className="font-serif text-[22px]" style={{ color: "#F6F1E6" }}>
              Hekima<span style={{ color: COLORS.goldSoft }}>Voice</span>
            </span>
            <p className="mt-4 text-[14px] leading-relaxed max-w-[280px]" style={{ color: "#B9B2C6" }}>
              Turning lived community experience into programs, partnerships,
              and policy that last.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="#top"
                className="icon-hover w-9 h-9 rounded-full flex items-center justify-center"
                style={{ border: `1px solid ${COLORS.lineDark}` }}
                aria-label="Facebook"
              >
                <Facebook size={15} color="#B9B2C6" />
              </a>
              <a
                href="#top"
                className="icon-hover w-9 h-9 rounded-full flex items-center justify-center"
                style={{ border: `1px solid ${COLORS.lineDark}` }}
                aria-label="Instagram"
              >
                <Instagram size={15} color="#B9B2C6" />
              </a>
              <a
                href="#top"
                className="icon-hover w-9 h-9 rounded-full flex items-center justify-center"
                style={{ border: `1px solid ${COLORS.lineDark}` }}
                aria-label="Twitter"
              >
                <Twitter size={15} color="#B9B2C6" />
              </a>
            </div>
          </Reveal>

          {/* Quick links */}
          <Reveal delay={80}>
            <Eyebrow tone="gold">Explore</Eyebrow>
            <ul className="mt-5 flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                    className="link-underline text-[14px]"
                    style={{ color: "#B9B2C6" }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Programs */}
          <Reveal delay={140}>
            <Eyebrow tone="gold">Programs</Eyebrow>
            <ul className="mt-5 flex flex-col gap-3">
              {programLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#programs"
                    className="link-underline text-[14px]"
                    style={{ color: "#B9B2C6" }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Newsletter */}
          <Reveal delay={200}>
            <Eyebrow tone="gold">Stay in the loop</Eyebrow>
            <p className="mt-5 text-[14px] leading-relaxed" style={{ color: "#B9B2C6" }}>
              Occasional updates on programs, stories, and ways to get
              involved. No spam.
            </p>
            <form onSubmit={handleSubscribe} className="mt-5 flex gap-2">
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-anim flex-1 min-w-0 rounded-full px-4 py-2.5 text-[13px] outline-none"
                style={{
                  background: COLORS.darkSoft,
                  color: "#F6F1E6",
                  border: `1px solid ${COLORS.lineDark}`,
                }}
              />
              <button
                type="submit"
                className="btn-anim btn-gold shrink-0 rounded-full px-5 py-2.5 text-[13px] font-semibold"
                style={{ background: subscribed ? "#5E8C61" : COLORS.gold, color: COLORS.dark }}
              >
                {subscribed ? "✓" : "Join"}
              </button>
            </form>
          </Reveal>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: `1px solid ${COLORS.lineDark}` }}>
          {/* <span className="text-[12px]" style={{ color: "#8B84A0" }}>
            © 2026 Hekima Voice. All rights reserved.
          </span> */}

          <p className="text-[12px]" style={{ color: "#8B84A0" }}>
  © 2026 Hekima Voice. All rights reserved.{" "}
  <span className="text-slate-500">
    Developed by{" "}
    <a href="https://pranalis-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-slate-300 underline-offset-2 hover:text-slate-700 transition-colors" >
      Pranali Nikam
    </a>
  </span>
</p>
          <div className="flex items-center gap-6">
            <a href="#top" className="link-underline text-[12px]" style={{ color: "#8B84A0" }}>
              Privacy Policy
            </a>
            <a href="#top" className="link-underline text-[12px]" style={{ color: "#8B84A0" }}>
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
