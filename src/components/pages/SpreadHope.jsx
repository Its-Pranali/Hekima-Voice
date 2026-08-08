import { COLORS, Reveal, Eyebrow, SoundBars } from "../../utils/ui";

function SpreadHope() {
    return (
        <section
            className="spread-hope-sec relative overflow-hidden py-20 md:py-28"
            style={{
                backgroundImage: `linear-gradient(rgba(20, 20, 20, 0.75), rgba(20, 20, 20, 0.75)), url('/assets/woman-is-holding-a-red-hearth.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
                <Reveal>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div className="max-w-[640px]">
                            <SoundBars className="mb-4" />
                            <Eyebrow tone="gold">Spread Hope</Eyebrow>
                            <h2
                                className="font-serif mt-4 leading-[1.2] tracking-tight text-white"
                                style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
                            >
                                Your Support Can Lift Spirits And Restore Hope
                            </h2>
                            <p className="mt-4 text-white/80 text-[15px] md:text-[16px] leading-relaxed">
                                Your donation will directly support our programs and initiatives, creating real and lasting impact where it's needed most.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            {/* <button
                                className="inline-flex items-center px-8 py-4 rounded-full text-[15px] font-semibold btn-anim btn-gold shadow-lg"
                                style={{ background: COLORS.gold, color: COLORS.dark }}
                            >
                                Donate Now
                            </button> */}
                            <a href="#who-we-are" className="read-more-btn py-3.5" style={{ textDecoration: "none" }}>
                                 Donate Now
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default SpreadHope;