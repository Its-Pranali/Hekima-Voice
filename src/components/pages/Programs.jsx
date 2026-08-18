// import React, { useState, useEffect, useRef } from "react";
// import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Clock } from "lucide-react";
// import { COLORS, Reveal, SoundBars, Eyebrow } from "../../utils/ui";

// function Programs() {
//   const programData = [
//     {
//       id: 1,
//       title: "Child Protection & Education",
//       desc: "Preventing child marriage, child labour, trafficking, violence, and school dropout while promoting education and STEAM skills.",
//       img: "/assets/img11.jpeg",
//       tag: "Education & Safety",
//     },
//     {
//       id: 2,
//       title: "AGYW Empowerment",
//       desc: "Supporting adolescent girls and young women through leadership, life skills, SRHR awareness, mentorship, and gender equality.",
//       img: "/assets/img5.jpg",
//       tag: "Leadership & Rights",
//     },
//     {
//       id: 3,
//       title: "Climate Action & Green Innovation",
//       desc: "Promoting environmental awareness, climate adaptation, recycling, green entrepreneurship, and sustainable income opportunities.",
//       img: "/assets/img16.jpeg",
//       tag: "Sustainability",
//     },
//     {
//       id: 4,
//       title: "Cultural Exchange & International Partnerships",
//       desc: "Empower adolescent girls and young women (AGYW) through creative arts, cultural learning, and international exchange while promoting mutual understanding, skills development, and sustainable partnerships.",
//       img: "/assets/img21.jpeg",
//       tag: "Global Exchange",
//     },
//   ];

//   const totalItems = programData.length;
//   // Triple array to form infinite buffer
//   const extendedData = [...programData, ...programData, ...programData];

//   const [currentIndex, setCurrentIndex] = useState(totalItems);
//   const [isTransitioning, setIsTransitioning] = useState(true);
//   const [visibleSlides, setVisibleSlides] = useState(3);
//   const [isHovered, setIsHovered] = useState(false);

//   // Responsive visible slides calculation
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setVisibleSlides(1);
//       } else if (window.innerWidth < 1024) {
//         setVisibleSlides(2);
//       } else {
//         setVisibleSlides(3);
//       }
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Infinite autoplay timer
//   useEffect(() => {
//     if (isHovered) return;
//     const timer = setInterval(() => {
//       handleNext();
//     }, 3500);
//     return () => clearInterval(timer);
//   }, [currentIndex, isHovered]);

//   const handleNext = () => {
//     if (!isTransitioning) return;
//     setCurrentIndex((prev) => prev + 1);
//   };

//   const handlePrev = () => {
//     if (!isTransitioning) return;
//     setCurrentIndex((prev) => prev - 1);
//   };

//   const handleTransitionEnd = () => {
//     // Seamless infinite reset when entering left or right overflow buffer
//     if (currentIndex >= totalItems * 2) {
//       setIsTransitioning(false);
//       setCurrentIndex(currentIndex - totalItems);
//     } else if (currentIndex < totalItems) {
//       setIsTransitioning(false);
//       setCurrentIndex(currentIndex + totalItems);
//     }
//   };

//   // Re-enable smooth transition after instant position adjustment
//   useEffect(() => {
//     if (!isTransitioning) {
//       const timeout = setTimeout(() => {
//         setIsTransitioning(true);
//       }, 50);
//       return () => clearTimeout(timeout);
//     }
//   }, [isTransitioning]);

//   // Touch Swipe Handling
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);

//   const handleTouchStart = (e) => {
//     touchStartX.current = e.targetTouches[0].clientX;
//   };

//   const handleTouchMove = (e) => {
//     touchEndX.current = e.targetTouches[0].clientX;
//   };

//   const handleTouchEnd = () => {
//     if (touchStartX.current - touchEndX.current > 50) {
//       handleNext();
//     }
//     if (touchStartX.current - touchEndX.current < -50) {
//       handlePrev();
//     }
//   };

//   // Calculate current active dot index (0..3)
//   const activeDotIndex = ((currentIndex % totalItems) + totalItems) % totalItems;

//   const goToSlide = (dotIdx) => {
//     setIsTransitioning(true);
//     setCurrentIndex(totalItems + dotIdx);
//   };

//   return (
//     <section id="current-programmes" className="py-20 md:py-28 overflow-hidden" style={{ background: COLORS.light }}>
//       <div className="max-w-[1240px] mx-auto px-6 md:px-10 text-center">
//         <Reveal className="mb-8">
//           <SoundBars tone="dark" className="mb-4 text-center justify-center" />
//           <Eyebrow tone="gold" style={{ color: "rgb(122, 63, 163)" }}>Our Programs</Eyebrow>
//           <h2 className="font-serif my-4 leading-[1.15] tracking-tight" style={{ color: "rgb(33, 27, 46)", fontSize: "clamp(26px, 3.4vw, 36px)" }}>
//             Ongoing work, shaped by the people it serves.
//           </h2>
//           <p className="max-w-2xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed">
//             Discover how we empower communities, adolescent girls, and young women through impactful education, leadership, climate action, and global partnerships.
//           </p>
//         </Reveal>

//         {/* Carousel Outer Container */}
//         <div
//           className="relative mt-12 group/carousel"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//         >
//           {/* Slider Window */}
//           <div className="overflow-hidden py-4 -my-4 px-1 -mx-1">
//             <div
//               className={`flex items-stretch transition-transform duration-500 ease-out ${!isTransitioning ? "transition-none" : ""
//                 }`}
//               style={{
//                 transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
//               }}
//               onTransitionEnd={handleTransitionEnd}
//             >
//               {extendedData.map((prog, idx) => (
//                 <div
//                   key={`${prog.id}-${idx}`}
//                   className="px-3 flex-shrink-0 flex"
//                   style={{ width: `${100 / visibleSlides}%` }}
//                 >
//                   <div className="w-full bg-white rounded-2xl border border-purple-100/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group/card text-left">
//                     {/* Card Image */}
//                     <div className="relative h-56 w-full overflow-hidden flex-shrink-0 bg-slate-100">
//                       <img
//                         src={prog.img}
//                         alt={prog.title}
//                         className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity" />
//                       {prog.tag && (
//                         <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[11px] font-bold text-purple-900 px-3 py-1 rounded-full shadow-sm uppercase tracking-wider flex items-center gap-1.5">
//                           <Sparkles className="w-3 h-3 text-amber-500" />
//                           {prog.tag}
//                         </span>
//                       )}
//                     </div>

//                     {/* Card Content (Equal Height Flex Column) */}
//                     <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
//                       <div>
//                         <h3 className="font-serif font-bold text-lg md:text-xl text-[rgb(33,27,46)] group-hover/card:text-[rgb(122,63,163)] transition-colors mb-3 leading-snug">
//                           {prog.title}
//                         </h3>
//                         <p className="text-slate-600 text-sm leading-relaxed">
//                           {prog.desc}
//                         </p>
//                       </div>

//                       {/* Card Footer */}
//                       <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
//                         <span className="text-xs font-bold text-purple-700 group-hover/card:translate-x-1.5 transition-transform inline-flex items-center gap-1.5">
//                           Explore Program <ArrowRight className="w-3.5 h-3.5" />
//                         </span>
//                         <span className="text-[11px] text-slate-400 font-medium">Hekima Voice</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Arrows */}
//           <button
//             onClick={handlePrev}
//             aria-label="Previous Slide"
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 z-20 w-11 h-11 rounded-full bg-white/90 shadow-lg border border-purple-100 text-purple-950 flex items-center justify-center hover:bg-purple-700 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>

//           <button
//             onClick={handleNext}
//             aria-label="Next Slide"
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 z-20 w-11 h-11 rounded-full bg-white/90 shadow-lg border border-purple-100 text-purple-950 flex items-center justify-center hover:bg-purple-700 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Carousel Pagination Dots */}
//         <div className="flex justify-center items-center gap-2 mt-8">
//           {programData.map((_, dotIdx) => (
//             <button
//               key={dotIdx}
//               onClick={() => goToSlide(dotIdx)}
//               aria-label={`Go to slide ${dotIdx + 1}`}
//               className={`h-2.5 rounded-full transition-all duration-300 ${activeDotIndex === dotIdx
//                 ? "w-8 bg-[rgb(122,63,163)]"
//                 : "w-2.5 bg-purple-200 hover:bg-purple-300"
//                 }`}
//             />
//           ))}
//         </div>

//         {/* Past Programs Section (Non-Card Editorial Layout with Images) */}
//         <div className="mt-24 pt-16 border-t border-purple-100/80 text-left">
//           <Reveal className="mb-14 text-center">
//             <Eyebrow tone="purple">Impact Legacy</Eyebrow>
//             <h3 className="font-serif text-2xl md:text-4xl font-bold mt-2" style={{ color: "rgb(33, 27, 46)" }}>
//               Past Programs
//             </h3>
//             <p className="max-w-xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed mt-2">
//               Foundational initiatives that established our core protection frameworks and community trust.
//             </p>
//           </Reveal>

//           <div className="space-y-16">
//             {/* Past Program 1: Street-Connected Children Program */}
//             <Reveal delay={100}>
//               <div className="grid md:grid-cols-12 gap-8 lg:gap-14 items-center pb-14 border-b border-purple-100/80">
//                 <div className="md:col-span-6">
//                   <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
//                     <img
//                       src="/assets/kids-group.jpg"
//                       alt="Street-Connected Children Program"
//                       className="w-full h-[320px] md:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
//                     <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[11px] font-bold text-purple-900 px-3.5 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
//                       Child Protection & Reunification
//                     </span>
//                   </div>
//                 </div>

//                 <div className="md:col-span-6">
//                   <span className="text-xs uppercase font-bold tracking-widest text-purple-700">
//                     Past Program • Initiative 01
//                   </span>
//                   <h4 className="font-serif font-bold text-2xl md:text-3xl text-[rgb(33,27,46)] mt-2 mb-4 leading-tight">
//                     Street-Connected Children Program
//                   </h4>
//                   <p className="text-slate-600 text-base md:text-[16px] leading-relaxed mb-6">
//                     Supports children living or working on the streets through protection, education, family reunification, and access to basic services.
//                   </p>
//                   <ul className="space-y-2.5 text-sm text-slate-700 font-medium">
//                     <li className="flex items-center gap-2.5">
//                       <span className="w-2 h-2 rounded-full bg-purple-600" />
//                       Protection and basic services access for vulnerable children
//                     </li>
//                     <li className="flex items-center gap-2.5">
//                       <span className="w-2 h-2 rounded-full bg-purple-600" />
//                       Family reunification & educational re-entry support
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </Reveal>

//             {/* Past Program 2: Family Strengthening Program */}
//             <Reveal delay={200}>
//               <div className="grid md:grid-cols-12 gap-8 lg:gap-14 items-center pb-14 border-b border-purple-100/80">
//                 <div className="md:col-span-6 md:order-2">
//                   <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
//                     <img
//                       src="/assets/img 1.jpg"
//                       alt="Family Strengthening Program"
//                       className="w-full h-[320px] md:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
//                     <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[11px] font-bold text-amber-900 px-3.5 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
//                       Household Resilience
//                     </span>
//                   </div>
//                 </div>

//                 <div className="md:col-span-6 md:order-1">
//                   <span className="text-xs uppercase font-bold tracking-widest text-amber-700">
//                     Past Program • Initiative 02
//                   </span>
//                   <h4 className="font-serif font-bold text-2xl md:text-3xl text-[rgb(33,27,46)] mt-2 mb-4 leading-tight">
//                     Family Strengthening Program
//                   </h4>
//                   <p className="text-slate-600 text-base md:text-[16px] leading-relaxed mb-6">
//                     Supports vulnerable families to improve childcare, protection, economic stability, and household resilience, reducing the risk of children entering street situations.
//                   </p>
//                   <ul className="space-y-2.5 text-sm text-slate-700 font-medium">
//                     <li className="flex items-center gap-2.5">
//                       <span className="w-2 h-2 rounded-full bg-amber-600" />
//                       Empowering parents with economic stability & childcare skills
//                     </li>
//                     <li className="flex items-center gap-2.5">
//                       <span className="w-2 h-2 rounded-full bg-amber-600" />
//                       Preventive community care reducing street vulnerability
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </Reveal>

//             {/* Vision & Mission Banner with smiling-lady-kid.webp */}
//             <Reveal delay={300}>
//               <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 text-white mt-10">
//                 <div className="grid md:grid-cols-12 items-center">
//                   <div className="md:col-span-7 p-8 md:p-12 z-10 text-left space-y-6">
//                     {/* Vision */}
//                     <div>
//                       <span className="inline-block text-xs uppercase font-bold tracking-widest text-amber-400 mb-1.5">
//                         Vision
//                       </span>
//                       <p className="font-serif text-lg md:text-xl font-medium leading-relaxed text-slate-100">
//                         A just and inclusive society where every child, adolescent girl, and young woman is protected from exploitation and abuse.
//                       </p>
//                     </div>

//                     {/* Mission */}
//                     <div className="pt-4 border-t border-slate-800">
//                       <span className="inline-block text-xs uppercase font-bold tracking-widest text-purple-400 mb-1.5">
//                         Mission
//                       </span>
//                       <p className="text-slate-300 text-sm md:text-base leading-relaxed">
//                         To end the cycle of trafficking, exploitation, and violence by advancing rights, amplifying voices, and strengthening the leadership of children, adolescent girls, and young women through advocacy, protection, and empowerment.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="md:col-span-5 h-[320px] md:h-[420px] relative overflow-hidden">
//                     <img
//                       src="/assets/smiling-lady-kid.webp"
//                       alt="Hekima Voice Vision and Mission"
//                       className="w-full h-full object-cover object-center"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent md:block hidden" />
//                   </div>
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Programs;



import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Users,
  Search,
  Stethoscope,
  HeartHandshake,
  GraduationCap,
  ShieldCheck,
  TrendingUp,
  Sprout,
} from "lucide-react";
import { COLORS, Reveal, SoundBars, Eyebrow } from "../../utils/ui";

function Programs() {
  const programData = [
    {
      id: 1,
      title: "Child Protection & Education",
      desc: "Preventing child marriage, child labour, trafficking, violence, and school dropout while promoting education and STEAM skills.",
      img: "/assets/img11.jpeg",
      tag: "Education & Safety",
    },
    {
      id: 2,
      title: "AGYW Empowerment",
      desc: "Supporting adolescent girls and young women through leadership, life skills, SRHR awareness, mentorship, and gender equality.",
      img: "/assets/img5.jpg",
      tag: "Leadership & Rights",
    },
    {
      id: 3,
      title: "Climate Action & Green Innovation",
      desc: "Promoting environmental awareness, climate adaptation, recycling, green entrepreneurship, and sustainable income opportunities.",
      img: "/assets/img16.jpeg",
      tag: "Sustainability",
    },
    {
      id: 4,
      title: "Cultural Exchange & International Partnerships",
      desc: "Empower adolescent girls and young women (AGYW) through creative arts, cultural learning, and international exchange while promoting mutual understanding, skills development, and sustainable partnerships.",
      img: "/assets/cultural and exchange pic.JPG",
      tag: "Global Exchange",
    },
  ];

  // Real past-program service breakdowns (2020–2025)
  const streetConnectedServices = [
    { icon: Users, label: "Family tracing & reunification" },
    { icon: Search, label: "Street outreach & identification" },
    { icon: Stethoscope, label: "Initial medical assistance" },
    { icon: HeartHandshake, label: "Psychosocial support" },
    { icon: GraduationCap, label: "Educational support" },
    { icon: ShieldCheck, label: "Protection & basic social services" },
  ];

  const familyStrengtheningServices = [
    { icon: TrendingUp, label: "Family economic strengthening" },
    { icon: Sprout, label: "Small income-generating activities" },
  ];

  const totalItems = programData.length;
  // Triple array to form infinite buffer
  const extendedData = [...programData, ...programData, ...programData];

  const [currentIndex, setCurrentIndex] = useState(totalItems);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  // Responsive visible slides calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Infinite autoplay timer
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [currentIndex, isHovered]);

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    // Seamless infinite reset when entering left or right overflow buffer
    if (currentIndex >= totalItems * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - totalItems);
    } else if (currentIndex < totalItems) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + totalItems);
    }
  };

  // Re-enable smooth transition after instant position adjustment
  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  // Touch Swipe Handling
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePrev();
    }
  };

  // Calculate current active dot index (0..3)
  const activeDotIndex = ((currentIndex % totalItems) + totalItems) % totalItems;

  const goToSlide = (dotIdx) => {
    setIsTransitioning(true);
    setCurrentIndex(totalItems + dotIdx);
  };

  return (
    <section id="current-programmes" className="py-20 md:py-28 overflow-hidden" style={{ background: COLORS.light }}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 text-center">
        <Reveal className="mb-8">
          <SoundBars tone="dark" className="mb-4 text-center justify-center" />
          <Eyebrow tone="gold" style={{ color: "rgb(122, 63, 163)" }}>Our Programs</Eyebrow>
          <h2 className="font-serif my-4 leading-[1.15] tracking-tight" style={{ color: "rgb(33, 27, 46)", fontSize: "clamp(26px, 3.4vw, 36px)" }}>
            Ongoing work, shaped by the people it serves.
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed">
            Discover how we empower communities, adolescent girls, and young women through impactful education, leadership, climate action, and global partnerships.
          </p>
        </Reveal>

        {/* Carousel Outer Container */}
        <div
          className="relative mt-12 group/carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Window */}
          <div className="overflow-hidden py-4 -my-4 px-1 -mx-1">
            <div
              className={`flex items-stretch transition-transform duration-500 ease-out ${!isTransitioning ? "transition-none" : ""
                }`}
              style={{
                transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedData.map((prog, idx) => (
                <div
                  key={`${prog.id}-${idx}`}
                  className="px-3 flex-shrink-0 flex"
                  style={{ width: `${100 / visibleSlides}%` }}
                >
                  <div className="lift w-full bg-white rounded-2xl border border-purple-100/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group/card text-left">
                    {/* Card Image */}
                    <div className="relative h-56 w-full overflow-hidden flex-shrink-0 bg-slate-100">
                      <img
                        src={prog.img}
                        alt={prog.title}
                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity" />
                      {prog.tag && (
                        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[11px] font-bold text-purple-900 px-3 py-1 rounded-full shadow-sm uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-amber-500" />
                          {prog.tag}
                        </span>
                      )}
                    </div>

                    {/* Card Content (Equal Height Flex Column) */}
                    <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif font-bold text-lg md:text-xl text-[rgb(33,27,46)] group-hover/card:text-[rgb(122,63,163)] transition-colors mb-3 leading-snug">
                          {prog.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {prog.desc}
                        </p>
                      </div>

                      {/* Card Footer */}
                      {/* <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-purple-700 group-hover/card:translate-x-1.5 transition-transform inline-flex items-center gap-1.5">
                          Explore Program <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium">Hekima Voice</span>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 z-20 w-11 h-11 rounded-full bg-white/90 shadow-lg border border-purple-100 text-purple-950 flex items-center justify-center hover:bg-purple-700 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 z-20 w-11 h-11 rounded-full bg-white/90 shadow-lg border border-purple-100 text-purple-950 flex items-center justify-center hover:bg-purple-700 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {programData.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => goToSlide(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${activeDotIndex === dotIdx
                ? "w-8 bg-[rgb(122,63,163)]"
                : "w-2.5 bg-purple-200 hover:bg-purple-300"
                }`}
            />
          ))}
        </div>

        {/* Past Programs Section — Editorial "Impact Ledger" Layout */}
        <div className="mt-24 pt-16 border-t border-purple-100/80 text-left">
          <Reveal className="mb-10 text-center">
            <Eyebrow tone="purple">Impact Legacy</Eyebrow>
            <h3 className="font-serif text-2xl md:text-4xl font-bold mt-2" style={{ color: "rgb(33, 27, 46)" }}>
              Past Programs
            </h3>
            <p className="max-w-xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed mt-2">
              Foundational initiatives that established our core protection frameworks and community trust.
            </p>
          </Reveal>

          {/* Impact Ledger Strip — real reporting-period figures, not decorative numbers */}
          <Reveal delay={50}>
            <div className="relative rounded-2xl border border-purple-100 bg-white shadow-sm px-6 md:px-10 py-7 mb-16 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[rgb(122,63,163)] via-amber-400 to-[rgb(122,63,163)]" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="shrink-0">
                  <span className="text-[11px] uppercase font-bold tracking-widest text-purple-700">
                    Reporting Period
                  </span>
                  <p className="font-serif text-2xl font-bold text-[rgb(33,27,46)] mt-1">2020 &ndash; 2025</p>
                </div>
                <div className="hidden md:block w-px self-stretch bg-purple-100" />
                <div className="grid grid-cols-3 gap-6 md:gap-10 flex-1">
                  <div className="text-center md:text-left">
                    <p className="font-serif text-3xl md:text-4xl font-bold text-[rgb(122,63,163)]">~700</p>
                    <p className="text-xs md:text-sm text-slate-600 font-medium mt-1">Children reached</p>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="font-serif text-3xl md:text-4xl font-bold text-[rgb(122,63,163)]">439</p>
                    <p className="text-xs md:text-sm text-slate-600 font-medium mt-1">Received direct support</p>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="font-serif text-3xl md:text-4xl font-bold text-[rgb(122,63,163)]">120</p>
                    <p className="text-xs md:text-sm text-slate-600 font-medium mt-1">Families supported</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-16">
            {/* Past Program 1: Street-Connected Children Program */}
            <Reveal delay={100}>
              <div className="grid md:grid-cols-12 gap-8 lg:gap-14 items-center pb-14 border-b border-purple-100/80">
                <div className="md:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
                    <img
                      src="/assets/kids-group.jpg"
                      alt="Street-Connected Children Program"
                      className="w-full h-[320px] md:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[11px] font-bold text-purple-900 px-3.5 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
                      Child Protection & Reunification
                    </span>
                  </div>
                </div>

                <div className="md:col-span-6">
                  <span className="text-xs uppercase font-bold tracking-widest text-purple-700">
                    Past Program &middot; 2020&ndash;2025
                  </span>
                  <h4 className="font-serif font-bold text-2xl md:text-3xl text-[rgb(33,27,46)] mt-2 mb-4 leading-tight">
                    Street-Connected Children Program
                  </h4>
                  <p className="text-slate-600 text-base md:text-[16px] leading-relaxed mb-6">
                    Reconnected children living or working on the streets with their families, while strengthening their protection and wellbeing along the way.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {streetConnectedServices.map(({ icon: Icon, label }) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 bg-purple-50/60 border border-purple-100 rounded-xl px-3.5 py-3"
                      >
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-purple-200 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-[rgb(122,63,163)]" />
                        </span>
                        <span className="text-sm font-semibold text-slate-700 leading-snug">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Past Program 2: Family Strengthening Program */}
            <Reveal delay={200}>
              <div className="grid md:grid-cols-12 gap-8 lg:gap-14 items-center pb-14 border-b border-purple-100/80">
                <div className="md:col-span-6 md:order-2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
                    <img
                      src="/assets/img 1.jpg"
                      alt="Family Strengthening Program"
                      className="w-full h-[320px] md:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[11px] font-bold text-amber-900 px-3.5 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
                      Household Resilience
                    </span>
                  </div>
                </div>

                <div className="md:col-span-6 md:order-1">
                  <span className="text-xs uppercase font-bold tracking-widest text-amber-700">
                    Past Program &middot; 2020&ndash;2025
                  </span>
                  <h4 className="font-serif font-bold text-2xl md:text-3xl text-[rgb(33,27,46)] mt-2 mb-4 leading-tight">
                    Family Strengthening Program
                  </h4>
                  <p className="text-slate-600 text-base md:text-[16px] leading-relaxed mb-6">
                    Helped 120 vulnerable families build economic stability and income opportunities, easing the pressures that can push children toward the streets.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {familyStrengtheningServices.map(({ icon: Icon, label }) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 bg-amber-50/60 border border-amber-100 rounded-xl px-3.5 py-3"
                      >
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-amber-200 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-amber-600" />
                        </span>
                        <span className="text-sm font-semibold text-slate-700 leading-snug">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Vision & Mission Banner with smiling-lady-kid.webp */}
            <Reveal delay={300}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 text-white mt-10">
                <div className="grid md:grid-cols-12 items-center">
                  <div className="md:col-span-7 p-8 md:p-12 z-10 text-left space-y-6">
                    {/* Vision */}
                    <div>
                      <span className="inline-block text-xs uppercase font-bold tracking-widest text-amber-400 mb-1.5">
                        Vision
                      </span>
                      <p className="font-serif text-lg md:text-xl font-medium leading-relaxed text-slate-100">
                        A just and inclusive society where every child, adolescent girl, and young woman is protected from exploitation and abuse.
                      </p>
                    </div>

                    {/* Mission */}
                    <div className="pt-4 border-t border-slate-800">
                      <span className="inline-block text-xs uppercase font-bold tracking-widest text-purple-400 mb-1.5">
                        Mission
                      </span>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                        To end the cycle of trafficking, exploitation, and violence by advancing rights, amplifying voices, and strengthening the leadership of children, adolescent girls, and young women through advocacy, protection, and empowerment.
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-5 h-[320px] md:h-[420px] relative overflow-hidden">
                    <img
                      src="/assets/smiling-lady-kid.webp"
                      alt="Hekima Voice Vision and Mission"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent md:block hidden" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;