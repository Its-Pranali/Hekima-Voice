
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

      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 15px rgba(122,63,163,0.15); }
        50% { box-shadow: 0 0 35px rgba(122,63,163,0.35); }
      }
      .glow-pulse { animation: pulse-glow 3.5s ease-in-out infinite; }

      @keyframes float-slow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }
      .float-slow { animation: float-slow 5s ease-in-out infinite; }

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

      .lift {
        transition: transform .4s cubic-bezier(.16,1,.3,1), box-shadow .4s cubic-bezier(.16,1,.3,1), border-color .3s ease;
      }
      .lift:hover {
        transform: translateY(-8px) scale(1.012);
        box-shadow: 0 20px 45px -12px rgba(93, 11, 134, 0.22);
      }

      .btn-anim {
        transition: transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s cubic-bezier(.16,1,.3,1), background-color .3s ease;
        position: relative;
        overflow: hidden;
      }
      .btn-anim:hover {
        transform: translateY(-3px) scale(1.03);
        // box-shadow: 0 12px 28px -6px rgba(93, 11, 134, 0.35);
      }
      .btn-anim:active { transform: translateY(0) scale(0.98); }
      .btn-gold:hover { box-shadow: 0 14px 30px -10px rgba(0,180,216,0.55); }
      .btn-outline:hover { background: var(--ink); color: var(--cream); }

      .link-underline { position: relative; }
      .link-underline::after {
        content: ""; position: absolute; left: 0px; bottom: -5px; height: 2px; width: 0;
        background: currentColor; transition: width .35s cubic-bezier(.16,1,.3,1);
      }
      .link-underline:hover::after { width: 100%; }

      .row-hover { transition: background-color .3s ease, padding-left .3s ease; }
      .row-hover:hover { background-color: rgba(255,255,255,0.03); padding-left: 12px; }

      .img-zoom { overflow: hidden; }
      .img-zoom-inner, .img-zoom img { transition: transform .7s cubic-bezier(.16,1,.3,1); }
      .img-zoom:hover .img-zoom-inner, .img-zoom:hover img { transform: scale(1.06); }

      .icon-hover { transition: transform .3s cubic-bezier(.16,1,.3,1), opacity .3s ease; }
      .icon-hover:hover { transform: translateY(-4px); opacity: 1 !important; }

      .input-anim { transition: border-color .25s ease, box-shadow .25s ease, transform .25s ease; }
      .input-anim:focus { border-color: ${COLORS.goldSoft} !important; box-shadow: 0 0 0 3px rgba(0,180,216,0.18); transform: translateY(-1px); }

      .header-shadow { transition: box-shadow .3s ease, background-color .3s ease, backdrop-filter .3s ease; }

      .menu-panel {
        display: grid;
        grid-template-rows: 0fr;
        opacity: 0;
        transition: grid-template-rows .35s cubic-bezier(.16,1,.3,1), opacity .3s ease;
      }
      .menu-panel.open { grid-template-rows: 1fr; opacity: 1; }
      .menu-panel > div { overflow: hidden; }

      @media (prefers-reduced-motion: reduce) {
        .eq-bar, .blob-a, .blob-b, .hero-in, .marquee-track, .accent-line, .glow-pulse, .float-slow { animation: none !important; }
        .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
        .lift:hover, .btn-anim:hover, .icon-hover:hover, .img-zoom:hover .img-zoom-inner, .img-zoom:hover img { transform: none !important; }
      }
    `}</style>
  );
}


export default MotionStyles;