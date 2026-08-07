import { COLORS, Reveal, Counter, SoundBars, Eyebrow } from "../../utils/ui";

function SpreadHope() {
    return (
        <section className="spread-hope-sec py-20 md:py-28">
            <div className="max-w-[1200px] mx-auto px-6 md:px-10">
                <Reveal>
                    <SoundBars className="mb-4" />
                    <Eyebrow>Spre Hopead</Eyebrow>
                    <div className="flex justify-between ">
                        <h2
                            className="font-serif mt-4 leading-[1.15] tracking-tight max-w-[520px]"
                            style={{ color: COLORS.ink, fontSize: "clamp(26px, 3.4vw, 40px)" }}
                        >
                            Your Support Can Lift Spirits And Restore Hope
                        </h2>

                        <button className="btn">Donate Now</button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default SpreadHope;