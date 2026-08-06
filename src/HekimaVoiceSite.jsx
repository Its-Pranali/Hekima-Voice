import React, { useEffect, useRef, useState } from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";


/* ---------- Design tokens ---------- */
const COLORS = {
  cream: "#F7F2E7",
  creamSoft: "#F9F5EC",
  lavender: "#EDE6F6",
  lavenderSoft: "#F1EBF8",
  dark: "#1B1626",
  darkSoft: "#241E33",
  purple: "#7A3FA3",
  purpleDeep: "#5E2E82",
  gold: "#C9A227",
  goldSoft: "#D9B646",
  ink: "#211B2E",
  inkSoft: "#5B5468",
  line: "#E4DCCB",
  lineDark: "#3A3348",
};

/* ================= Motion helpers ================= */

/** IntersectionObserver hook — fires once, true after threshold crossed */
function useReveal(threshold = 0.18) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/** Wraps children in a fade + rise reveal, triggered on scroll into view */
function Reveal({ children, delay = 0, y = 26, className = "", as = "div" }) {
  const [ref, inView] = useReveal();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "reveal-in" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms`, "--reveal-y": `${y}px` }}
    >
      {children}
    </Tag>
  );
}

/** Counts up from 0 to `to` once it scrolls into view */
function Counter({ to, prefix = "", suffix = "", duration = 1300 }) {
  const [ref, inView] = useReveal(0.5);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ---------- Little sound-wave mark used throughout (animates like an equalizer) ---------- */
function SoundBars({ tone = "light", className = "", size = "sm" }) {
  const heights =
    size === "lg" ? [14, 22, 34, 46, 28, 42, 20, 50, 16, 26] : [6, 10, 16, 22, 14, 20, 10, 24, 8, 12];
  const palette =
    tone === "light"
      ? [COLORS.gold, COLORS.gold, COLORS.purple, COLORS.purple, COLORS.ink]
      : [COLORS.gold, COLORS.goldSoft, COLORS.purple, "#B79CDA", "#F5F0E6"];
  return (
    <div className={`flex items-end gap-[3px] ${className}`} aria-hidden="true">
      {heights.map((h, i) => (
        <span
          key={i}
          className="eq-bar"
          style={{
            width: size === "lg" ? 4 : 3,
            height: h,
            background: palette[i % palette.length],
            borderRadius: 2,
            opacity: 0.9,
            animationDelay: `${i * 0.09}s`,
            animationDuration: `${0.9 + (i % 4) * 0.18}s`,
          }}
        />
      ))}
    </div>
  );
}

function Eyebrow({ children, tone = "purple" }) {
  const color = tone === "purple" ? COLORS.purple : COLORS.gold;
  return (
    <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color }}>
      {children}
    </span>
  );
}

/* ---------- Global keyframes (single injected stylesheet) ---------- */
function MotionStyles() {
  return (
    <style>{`
      @keyframes eq {
        0%, 100% { transform: scaleY(0.45); }
        50% { transform: scaleY(1.3); }
      }
      .eq-bar { transform-origin: bottom; animation-name: eq; animation-iteration-count: infinite; animation-timing-function: ease-in-out; }

      @keyframes float-a {
        0%, 100% { transform: translate(0,0) scale(1); }
        50% { transform: translate(26px,-32px) scale(1.08); }
      }
      @keyframes float-b {
        0%, 100% { transform: translate(0,0) scale(1); }
        50% { transform: translate(-22px,24px) scale(1.05); }
      }
      .blob-a { animation: float-a 11s ease-in-out infinite; }
      .blob-b { animation: float-b 13s ease-in-out infinite; }

      .reveal {
        opacity: 0;
        transform: translateY(var(--reveal-y, 26px));
        transition: opacity .7s cubic-bezier(.16,1,.3,1) var(--reveal-delay,0ms),
                    transform .7s cubic-bezier(.16,1,.3,1) var(--reveal-delay,0ms);
        will-change: opacity, transform;
      }
      .reveal-in { opacity: 1; transform: translateY(0); }

      @keyframes hero-up {
        from { opacity: 0; transform: translateY(22px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .hero-in { animation: hero-up .8s cubic-bezier(.16,1,.3,1) both; }

      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      .marquee-track { animation: marquee 26s linear infinite; }
      .marquee-wrap:hover .marquee-track { animation-play-state: paused; }

      @keyframes underline-grow {
        from { width: 0; }
        to { width: 48px; }
      }
      .accent-line { animation: underline-grow .8s cubic-bezier(.16,1,.3,1) both; }

      .lift { transition: transform .35s cubic-bezier(.16,1,.3,1), box-shadow .35s cubic-bezier(.16,1,.3,1); }
      .lift:hover { transform: translateY(-6px); box-shadow: 0 20px 40px -18px rgba(27,22,38,0.28); }

      .btn-anim { transition: transform .28s cubic-bezier(.16,1,.3,1), box-shadow .28s cubic-bezier(.16,1,.3,1), background-color .28s ease; }
      .btn-anim:hover { transform: translateY(-2px) scale(1.03); }
      .btn-anim:active { transform: translateY(0) scale(0.98); }
      .btn-gold:hover { box-shadow: 0 14px 30px -10px rgba(201,162,39,0.55); }
      .btn-outline:hover { background: var(--ink); color: var(--cream); }

      .link-underline { position: relative; }
      .link-underline::after {
        content: ""; position: absolute; left: 0; bottom: -4px; height: 2px; width: 0;
        background: currentColor; transition: width .3s cubic-bezier(.16,1,.3,1);
      }
      .link-underline:hover::after { width: 100%; }

      .row-hover { transition: background-color .3s ease, padding-left .3s ease; }
      .row-hover:hover { background-color: rgba(255,255,255,0.03); padding-left: 12px; }

      .img-zoom { overflow: hidden; }
      .img-zoom-inner { transition: transform .6s cubic-bezier(.16,1,.3,1); }
      .img-zoom:hover .img-zoom-inner { transform: scale(1.05); }

      .icon-hover { transition: transform .3s cubic-bezier(.16,1,.3,1), opacity .3s ease; }
      .icon-hover:hover { transform: translateY(-3px); opacity: 1 !important; }

      .input-anim { transition: border-color .25s ease, box-shadow .25s ease, transform .25s ease; }
      .input-anim:focus { border-color: ${COLORS.goldSoft} !important; box-shadow: 0 0 0 3px rgba(201,162,39,0.18); }

      .header-shadow { transition: box-shadow .3s ease, background-color .3s ease; }

      .menu-panel {
        display: grid;
        grid-template-rows: 0fr;
        opacity: 0;
        transition: grid-template-rows .35s cubic-bezier(.16,1,.3,1), opacity .3s ease;
      }
      .menu-panel.open { grid-template-rows: 1fr; opacity: 1; }
      .menu-panel > div { overflow: hidden; }

      @media (prefers-reduced-motion: reduce) {
        .eq-bar, .blob-a, .blob-b, .hero-in, .marquee-track, .accent-line { animation: none !important; }
        .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
        .lift:hover, .btn-anim:hover, .icon-hover:hover { transform: none !important; }
      }
    `}</style>
  );
}

/* ---------- Header ---------- */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ["Who We Are", "What We Do", "Programs", "Impact", "Support", "Contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur header-shadow" style={{
        background: "rgba(247,242,231,0.9)",
        borderBottom: `1px solid ${COLORS.line}`,
        boxShadow: scrolled ? "0 8px 24px -18px rgba(27,22,38,0.35)" : "none",
      }}
    >

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-[76px] flex items-center justify-between">
        {/* <a href="#top" className="font-serif text-[20px] tracking-tight btn-anim inline-block" style={{ color: COLORS.ink }}>
          Hekima<span style={{ color: COLORS.purple }}>Voice</span>
        </a> */}

        <a href="#top">
          <img src="./../public/assets/site-logo.png" alt="Site Logo" className="site-logo" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="text-[14px] font-medium link-underline" style={{ color: COLORS.ink }} >
              {l}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#give" className="inline-flex items-center px-5 py-2.5 rounded-full text-[13px] font-semibold btn-anim btn-gold" style={{ background: COLORS.gold, color: COLORS.dark }} >
            Donate
          </a>
        </div>

        <button className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px]" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open} >
          <span className="w-6 h-[2px] transition-transform duration-300" style={{ background: COLORS.ink, transform: open ? "translateY(3.5px) rotate(45deg)" : "none" }}
          />
          <span
            className="w-6 h-[2px] transition-transform duration-300"
            style={{ background: COLORS.ink, transform: open ? "translateY(-3.5px) rotate(-45deg)" : "none" }}
          />
        </button>
      </div>

      <div className={`lg:hidden menu-panel ${open ? "open" : ""}`}>
        <div>
          <div className="px-6 pb-6 flex flex-col gap-4" style={{ borderTop: `1px solid ${COLORS.line}` }}>
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[15px] font-medium pt-4"
                style={{ color: COLORS.ink }}
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            ))}
            <a
              href="#give"
              className="inline-flex justify-center items-center px-5 py-3 rounded-full text-[14px] font-semibold mt-2 btn-anim"
              style={{ background: COLORS.gold, color: COLORS.dark }}
              onClick={() => setOpen(false)}
            >
              Donate
            </a>
          </div>
        </div>
      </div>

      <div className="banner-area-one-main-demo tmp-section-gap shape-move">
        <div className="separator-animated-border border-top-footer animated-true"></div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${COLORS.lavender} 0%, ${COLORS.lavenderSoft} 55%, ${COLORS.cream} 100%)`,}} >
      {/* ambient blobs */}
      <div className="blob-a pointer-events-none absolute -top-24 -right-16 w-[420px] h-[420px] rounded-full" style={{ background: `radial-gradient(circle, ${COLORS.purple}33, transparent 70%)`, filter: "blur(30px)" }} aria-hidden="true" />
      <div
        className="blob-b pointer-events-none absolute top-40 -left-24 w-[360px] h-[360px] rounded-full"
        style={{ background: `radial-gradient(circle, ${COLORS.gold}2e, transparent 70%)`, filter: "blur(30px)" }}
        aria-hidden="true"
      />

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

/* ---------- Who We Are ---------- */
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
              <span className="text-[13px] px-6 text-center" style={{ color: COLORS.purpleDeep }}>
                Photo of the team or community, coming soon
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- What We Do ---------- */
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
      accent: "#5E8C61",
      text: "Practical, dignified assistance that meets urgent needs while longer-term solutions take shape.",
    },
    {
      title: "Storytelling",
      accent: "#4C7DAA",
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

/* ---------- Programs (dark) ---------- */
function Programs() {
  const rows = [
    {
      name: "Neighbourhood Circles",
      desc: "Monthly resident-led meetings that surface priorities and shape our yearly agenda.",
    },
    {
      name: "Youth Voice Fellowship",
      desc: "A paid fellowship training young people in organizing, public speaking, and civic process.",
    },
    {
      name: "Rapid Response Fund",
      desc: "Emergency grants for families facing eviction, utility shutoff, or sudden crisis.",
    },
    {
      name: "Policy Table",
      desc: "A standing coalition that briefs local officials using data gathered directly from residents.",
    },
  ];
  return (
    <section id="programs" className="py-20 md:py-28" style={{ background: COLORS.dark }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <SoundBars tone="dark" className="mb-4" />
          <Eyebrow tone="gold">Our Programs</Eyebrow>
          <h2 className="font-serif mt-4 leading-[1.15] tracking-tight max-w-[520px]" style={{ color: "#F6F1E6", fontSize: "clamp(26px, 3.4vw, 36px)" }} >
            Ongoing work, shaped by the people it serves.
          </h2>
        </Reveal>

        <div className="mt-14" style={{ borderTop: `1px solid ${COLORS.lineDark}` }}>
          {rows.map((r, i) => (
            <Reveal key={r.name} delay={i * 80} y={18}>
              <div className="row-hover grid md:grid-cols-[280px_1fr] gap-2 md:gap-10 py-7 rounded-md" style={{ borderBottom: `1px solid ${COLORS.lineDark}` }} >
                <h3 className="font-serif text-[19px]" style={{ color: "#F6F1E6" }}>
                  {r.name}
                </h3>
                <p className="text-[14px] leading-relaxed max-w-[560px]" style={{ color: "#B9B2C6" }}>
                  {r.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Impact / quotes ---------- */
function Impact() {
  const quotes = [
    {
      text: "Nobody had asked us what we actually needed before. Hekima Voice sat in our kitchen and listened for two hours before writing anything down.",
      by: "Amina, Neighbourhood Circle member",
    },
    {
      text: "The fellowship gave me the words and the confidence to speak at a city council meeting for the first time. Now I help run it.",
      by: "Tomas, Youth Voice Fellow",
    },
    {
      text: "The Rapid Response Fund covered our electricity bill the week my hours got cut. It bought us time to get back on our feet.",
      by: "Grace, Rapid Response recipient",
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

  return (
    <section id="impact" className="py-20 md:py-28" style={{ background: COLORS.cream }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <SoundBars className="mb-4" />
          <Eyebrow>Impact Stories</Eyebrow>
          <h2 className="font-serif mt-4 leading-[1.15] tracking-tight max-w-[520px]" style={{ color: COLORS.ink, fontSize: "clamp(26px, 3.4vw, 36px)" }} >
            In the words of the people we work with.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <Reveal key={q.by} delay={i * 100}>
              <div className="lift rounded-xl p-7 h-full" style={{ background: COLORS.lavenderSoft }}>
                <p className="text-[15px] leading-relaxed italic" style={{ color: COLORS.ink }}>
                  &ldquo;{q.text}&rdquo;
                </p>
                <p className="mt-5 text-[12px] tracking-wide" style={{ color: COLORS.purpleDeep }}>
                  {q.by}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center py-10" style={{ borderTop: `1px solid ${COLORS.line}`, borderBottom: `1px solid ${COLORS.line}` }} >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-[30px] md:text-[34px]" style={{ color: COLORS.purple }}>
                  <Counter to={s.num} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-[12px] max-w-[160px] mx-auto" style={{ color: COLORS.inkSoft }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-14 text-center">
            <span className="text-[11px] tracking-[0.18em] uppercase" style={{ color: COLORS.inkSoft }}>
              Working Alongside
            </span>
            <div className="marquee-wrap mt-5 overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }} >
              <div className="marquee-track flex items-center gap-12 w-max">
                {marqueeItems.map((p, i) => (
                  <span key={p + i} className="text-[13px] font-medium whitespace-nowrap" style={{ color: COLORS.ink }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4">
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

/* ---------- Ways to support ---------- */
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
    <section id="support" className="py-20 md:py-28" style={{ background: COLORS.cream }}>
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

/* ---------- Contact ---------- */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28" style={{ background: COLORS.dark }}>
      <div className="blob-a pointer-events-none absolute -bottom-32 -right-20 w-[380px] h-[380px] rounded-full" style={{ background: `radial-gradient(circle, ${COLORS.purple}22, transparent 70%)`, filter: "blur(30px)" }} aria-hidden="true" />
      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16">
        <Reveal>
          <Eyebrow tone="gold">Contact</Eyebrow>
          <h2 className="font-serif mt-4 leading-[1.1] tracking-tight" style={{ color: "#F6F1E6", fontSize: "clamp(30px, 4vw, 42px)" }} >
            Let's talk.
          </h2>
          <p className="mt-5 max-w-[380px] text-[15px] leading-relaxed" style={{ color: "#B9B2C6" }}>
            Whether you want to volunteer, partner with us, or bring Hekima
            Voice to your own community — we'd like to hear from you.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <div className="text-[11px] tracking-[0.18em] uppercase" style={{ color: "#8B84A0" }}>
                Email
              </div>
              <div className="mt-1 text-[15px]" style={{ color: "#F6F1E6" }}>
                hello@hekimavoice.org
              </div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.18em] uppercase" style={{ color: "#8B84A0" }}>
                Phone
              </div>
              <div className="mt-1 text-[15px]" style={{ color: "#F6F1E6" }}>
                +1 (000) 000-0000
              </div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.18em] uppercase" style={{ color: "#8B84A0" }}>
                Follow
              </div>
              <div className="mt-1 text-[15px]" style={{ color: "#F6F1E6" }}>
                @hekimavoice
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <label className="flex flex-col gap-2">
              <span className="text-[12px]" style={{ color: "#B9B2C6" }}>
                Name
              </span>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input-anim rounded-md px-4 py-3 text-[14px] outline-none"
                style={{ background: COLORS.darkSoft, color: "#F6F1E6", border: `1px solid ${COLORS.lineDark}` }}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[12px]" style={{ color: "#B9B2C6" }}>
                Email
              </span>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-anim rounded-md px-4 py-3 text-[14px] outline-none" style={{ background: COLORS.darkSoft, color: "#F6F1E6", border: `1px solid ${COLORS.lineDark}` }} />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[12px]" style={{ color: "#B9B2C6" }}>
                Message
              </span>
              <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input-anim rounded-md px-4 py-3 text-[14px] outline-none resize-none" style={{ background: COLORS.darkSoft, color: "#F6F1E6", border: `1px solid ${COLORS.lineDark}` }} />
            </label>
            <button type="submit" className="btn-anim btn-gold self-start inline-flex items-center px-6 py-3.5 rounded-full text-[14px] font-semibold mt-2" style={{ background: sent ? "#5E8C61" : COLORS.gold, color: COLORS.dark }}
            >
              {sent ? "Message sent ✓" : "Send message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer style={{ background: COLORS.dark, borderTop: `1px solid ${COLORS.lineDark}` }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-serif text-[16px]" style={{ color: "#F6F1E6" }}>
          Hekima<span style={{ color: COLORS.goldSoft }}>Voice</span>
        </span>
        <div className="flex items-center gap-5">
          <a href="#top" className="icon-hover" style={{ opacity: 0.75 }} aria-label="Facebook">
            <Facebook size={16} color="#B9B2C6" />
          </a>
          <a href="#top" className="icon-hover" style={{ opacity: 0.75 }} aria-label="Instagram">
            <Instagram size={16} color="#B9B2C6" />
          </a>
          <a href="#top" className="icon-hover" style={{ opacity: 0.75 }} aria-label="Twitter">
            <Twitter size={16} color="#B9B2C6" />
          </a>
        </div>
        <span className="text-[12px]" style={{ color: "#8B84A0" }}>
          © 2026 Hekima Voice. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */
export default function HekimaVoiceSite() {
  return (
    <div>
      <MotionStyles />
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <Programs />
      <Impact />
      <Support />
      <Contact />
    </div>
  );
}
