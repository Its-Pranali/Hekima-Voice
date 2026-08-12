// import React, { useState, useEffect, useRef } from "react";
// import { COLORS, Reveal, Counter, SoundBars, Eyebrow } from "../../utils/ui";

// function WhoWeAre() {
//   return (
//     <section id="who-we-are" className="py-20 md:py-28 overflow-hidden" style={{ background: COLORS.light }}>
//       <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
//         <Reveal>
//           <SoundBars className="mb-4" />
//           <Eyebrow>Who We Are</Eyebrow>
//           <h2 className="font-serif mt-4 leading-[1.15] tracking-tight" style={{ color: COLORS.ink, fontSize: "clamp(26px, 3.4vw, 36px)" }} >
//             Founded on the belief that people are the experts on their own
//             lives.
//           </h2>
//           <p className="mt-6 text-[15px] leading-relaxed" style={{ color: COLORS.inkSoft }}>
//             Hekima Voice began as a handful of neighbours meeting in a living
//             room to talk about what their community needed and wasn't
//             getting. Today we're a small, growing team that still starts
//             every project the same way: by listening first.
//           </p>
//           <p className="mt-4 text-[15px] leading-relaxed" style={{ color: COLORS.inkSoft }}>
//             We partner with residents, local leaders, and organizers to
//             design programs that reflect real priorities — then stay
//             accountable to the people those programs are meant to serve, long
//             after launch day.
//           </p>
//         </Reveal>

//         <Reveal delay={150} y={34}>
//           <div className="img-zoom w-full aspect-[4/3] rounded-2xl" style={{ background: COLORS.lavender }}>
//             <div className="img-zoom-inner w-full h-full flex items-center justify-center">
//               <span className="text-[13px] text-center overflow-hidden" style={{ color: COLORS.purpleDeep }}>
//                 {/* Photo of the team or community, coming soon */}
//                 <img src="../../../public/assets/img2.jpg" alt="Team Photo" />
//               </span>
//             </div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// export default WhoWeAre;



import React, { useState, useEffect, useRef } from "react";
import { Scale, Lightbulb, Handshake } from "lucide-react";
import { COLORS, Reveal, Counter, SoundBars, Eyebrow } from "../../utils/ui";

function WhoWeAre() {
  const coreValues = [
    {
      icon: Scale,
      title: "Gender Equality & Inclusion",
      desc: "We promote equal opportunities, participation, and safe environments for all, especially adolescent girls and young women.",
    },
    {
      icon: Lightbulb,
      title: "Learning, Creativity & Innovation",
      desc: "We encourage continuous learning, creativity, and innovative solutions that strengthen communities and drive sustainable impact.",
    },
    {
      icon: Handshake,
      title: "Partnership & Collaboration",
      desc: "We value strong partnerships with communities, government, civil society, and global actors to achieve collective and lasting change.",
    },
  ];

  return (
    <section id="who-we-are" className="py-20 md:py-28 overflow-hidden" style={{ background: COLORS.light }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-14 items-center">
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
                  <img src="/assets/img2.jpg" alt="Team Photo" />
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Core Values */}
        <div className="mt-20 md:mt-28 pt-16 border-t" style={{ borderColor: COLORS.lavender }}>
          <Reveal className="text-center mb-14">
            <SoundBars className="mb-4 justify-center" />
            <Eyebrow>What Guides Us</Eyebrow>
            <h3
              className="font-serif mt-4 leading-[1.15] tracking-tight"
              style={{ color: COLORS.ink, fontSize: "clamp(24px, 3vw, 32px)" }}
            >
              Core Values
            </h3>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10" style={{ borderColor: COLORS.lavender }}>
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={idx * 120}>
                  <div className="h-full flex flex-col items-start md:px-8 first:md:pl-0 last:md:pr-0 text-left">
                    <span
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-6 flex-shrink-0"
                      style={{ background: COLORS.lavender }}
                    >
                      <Icon className="w-6 h-6" style={{ color: COLORS.purpleDeep }} />
                    </span>
                    <h4
                      className="font-serif font-bold text-lg leading-snug mb-3"
                      style={{ color: COLORS.ink }}
                    >
                      {value.title}
                    </h4>
                    <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.inkSoft }}>
                      {value.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;