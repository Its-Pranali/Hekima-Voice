import React, { useState, useEffect, useRef } from "react";
import { COLORS, Reveal, Counter, SoundBars, Eyebrow } from "../../utils/ui";
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const links = ["Who We Are", "What We Do", "Programs", "Impact", "Support", "Contact"];
  const links = [
    { label: "Who We Are" },
    { label: "What We Do", subItems: ["Current Programs", "Previous Programs"] },
    { label: "Get Involved" },
    { label: "Impact" },
    { label: "Support" },
    { label: "Contact" },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur header-shadow py-3" style={{
        background: "#fff",
        // borderBottom: `1px solid ${COLORS.line}`,
        boxShadow: scrolled ? "0 8px 24px -18px rgba(27,22,38,0.35)" : "none",
      }} >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-[76px] flex items-center justify-between">
          {/* <a href="#top" className="font-serif text-[20px] tracking-tight btn-anim inline-block" style={{ color: COLORS.ink }}>
          Hekima<span style={{ color: COLORS.purple }}>Voice</span>
        </a> */}

          <a href="#top" className="tracking-tight btn-anim inline-block header-logo">
            <img src="./../public/assets/site-logo.png" alt="Site Logo" className="site-logo" />
          </a>

          {/* <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="text-[14px] font-medium link-underline" style={{ color: COLORS.ink }} >
              {l}
            </a>
          ))}
          
        </nav> */}

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) =>
              l.subItems ? (
                <div key={l.label} className="relative group">

                  <a href={`#${l.label.toLowerCase().replace(/\s+/g, "-")}`} className="text-[14px] font-medium link-underline flex items-center gap-1" style={{ color: COLORS.ink }}  >
                    {l.label}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-200 group-hover:rotate-180" >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </a>

                  {/* Dropdown panel */}
                  <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out" >
                    <div className="min-w-[180px] rounded-xl py-2 shadow-lg"
                      style={{
                        background: "#fff",
                        border: `1px solid ${COLORS.line}`,
                      }} >
                      {l.subItems.map((sub) => (
                        <a key={sub} href={`#${sub.toLowerCase().replace(/\s+/g, "-")}`} className="block px-4 py-3 text-[13px] font-medium link-underline" style={{ color: COLORS.ink }} >
                          {sub}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a key={l.label} href={`#${l.label.toLowerCase().replace(/\s+/g, "-")}`} className="text-[14px] font-medium link-underline" style={{ color: COLORS.ink }} >
                  {l.label}
                </a>
              )
            )}
          </nav>

          {/* <div className="hidden lg:block">
          <a
            href="#give"
            className="inline-flex items-center px-5 py-2.5 rounded-full text-[13px] font-semibold btn-anim btn-gold"
            style={{ background: COLORS.gold, color: COLORS.dark }}
          >
            Donate
          </a>
        </div> */}

          <div className="hidden lg:block">
            <a href="#give" class="read-more-btn">
              Donate
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <button className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px]" onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu" aria-expanded={open} >
            <span className="w-6 h-[2px] transition-transform duration-300" style={{ background: COLORS.ink, transform: open ? "translateY(3.5px) rotate(45deg)" : "none" }} />
            <span className="w-6 h-[2px] transition-transform duration-300" style={{ background: COLORS.ink, transform: open ? "translateY(-3.5px) rotate(-45deg)" : "none" }} />
          </button>
        </div>

        <div className={`lg:hidden menu-panel ${open ? "open" : ""}`}>
          <div>
            <div className="px-6 pb-6 flex flex-col gap-4" style={{ borderTop: `1px solid ${COLORS.line}` }}>
              {/* {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[15px] font-medium pt-4"
                style={{ color: COLORS.ink }}
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            ))} */}

              {links.map((l) => (
                <div key={l.label}>
                  <a href={`#${l.label.toLowerCase().replace(/\s+/g, "-")}`} className="text-[15px] font-medium pt-4 block" style={{ color: COLORS.ink }} onClick={() => setOpen(false)} >
                    {l.label}
                  </a>
                  {l.subItems && (
                    <div className="pl-4 flex flex-col gap-2 mt-2">
                      {l.subItems.map((sub) => (
                        <a key={sub} href={`#${sub.toLowerCase().replace(/\s+/g, "-")}`} className="text-[13px]" style={{ color: COLORS.ink, opacity: 0.8 }} onClick={() => setOpen(false)} >
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href="#give" className="inline-flex justify-center items-center px-5 py-3 rounded-full text-[14px] font-semibold mt-2 btn-anim" style={{ background: COLORS.gold, color: COLORS.dark }} onClick={() => setOpen(false)} >
                Donate
              </a>
            </div>
          </div>
        </div>


      </header>
      <div className="banner-area-one-main-demo tmp-section-gap shape-move">
        <div className="separator-animated-border border-top-footer animated-true"></div>
      </div>
    </>
  );
}


export default Header;
