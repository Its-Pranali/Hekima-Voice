import React, { useState, useEffect, useRef } from "react";
import { COLORS, Reveal, Counter, SoundBars, Eyebrow } from "../../utils/ui";

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
    // <section id="programs" className="py-20 md:py-28" style={{ background: COLORS.dark }}>
    //   <div className="max-w-[1200px] mx-auto px-6 md:px-10">
    //     <Reveal>
    //       <SoundBars tone="dark" className="mb-4" />
    //       <Eyebrow tone="gold">Our Programs</Eyebrow>
    //       <h2 className="font-serif mt-4 leading-[1.15] tracking-tight max-w-[520px]" style={{ color: "#F6F1E6", fontSize: "clamp(26px, 3.4vw, 36px)" }}  >
    //         Ongoing work, shaped by the people it serves.
    //       </h2>
    //     </Reveal>

    //     <div className="mt-14" style={{ borderTop: `1px solid ${COLORS.lineDark}` }}>
    //       {rows.map((r, i) => (
    //         <Reveal key={r.name} delay={i * 80} y={18}>
    //           <div className="row-hover grid md:grid-cols-[280px_1fr] gap-2 md:gap-10 py-7 rounded-md" style={{ borderBottom: `1px solid ${COLORS.lineDark}` }} >
    //             <h3 className="font-serif text-[19px]" style={{ color: "#F6F1E6" }}>
    //               {r.name}
    //             </h3>
    //             <p className="text-[14px] leading-relaxed max-w-[560px]" style={{ color: "#B9B2C6" }}>
    //               {r.desc}
    //             </p>
    //           </div>
    //         </Reveal>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section id="programs" className="py-20 md:py-28" style={{ background: COLORS.dark }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <SoundBars tone="dark" className="mb-4" />
          <Eyebrow tone="gold">Our Programs</Eyebrow>
          <h2 className="font-serif mt-4 leading-[1.15] tracking-tight" style={{ color: "#F6F1E6", fontSize: "clamp(26px, 3.4vw, 36px)" }}  >
            Ongoing work, shaped by the people it serves.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
           <div className="col-md-4">
               <div className="program-block">
                  <img src="../../../public/assets/img16.jpeg" alt="" className="program-img w-100" />
               </div>
               <div className="program-content-block">
                  <div>
                     <p>Monthly resident-led meetings that surface priorities and shape our yearly agenda.</p>
                  </div>
               </div>
           </div>
        </div>

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

export default Programs;

