
const COLORS = {
  cream: "#FFFFFF",
  creamSoft: "#F0F8FA",
  lavender: "#F4EFFF",
  lavenderSoft: "#FAF7FF",
  dark: "#0A1128",
  darkSoft: "#16223F",
  purple: "#84159F",
  purpleDeep: "#57096B",
  gold: "#00B4D8",
  goldSoft: "#0091B0",
  ink: "#0A1128",
  inkSoft: "#4A5568",
  line: "#E2E8F0",
  lineDark: "#2D3748",
};

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
      // .lift:hover { transform: translateY(-6px); box-shadow: 0 20px 40px -18px rgba(27,22,38,0.28); }

      .btn-anim { transition: transform .28s cubic-bezier(.16,1,.3,1), box-shadow .28s cubic-bezier(.16,1,.3,1), background-color .28s ease; }
      .btn-anim:hover { transform: translateY(-2px) scale(1.03); }
      .btn-anim:active { transform: translateY(0) scale(0.98); }
      .btn-gold:hover { box-shadow: 0 14px 30px -10px rgba(0,180,216,0.55); }
      .btn-outline:hover { background: var(--ink); color: var(--cream); }

      .link-underline { position: relative; }
      .link-underline::after {
        content: ""; position: absolute; left: 0px; bottom: -5px; height: 2px; width: 0;
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
      .input-anim:focus { border-color: ${COLORS.goldSoft} !important; box-shadow: 0 0 0 3px rgba(0,180,216,0.18); }

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


export default MotionStyles;