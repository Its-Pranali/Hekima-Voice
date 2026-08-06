import React, { useEffect, useRef, useState } from "react";

export const COLORS = {
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

export function useReveal(threshold = 0.18) {
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

export function Reveal({ children, delay = 0, y = 26, className = "", as = "div" }) {
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

export function Counter({ to, prefix = "", suffix = "", duration = 1300 }) {
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

export function SoundBars({ tone = "light", className = "", size = "sm" }) {
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

export function Eyebrow({ children, tone = "purple" }) {
  const color = tone === "purple" ? COLORS.purple : COLORS.gold;
  return (
    <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color }}>
      {children}
    </span>
  );
}
