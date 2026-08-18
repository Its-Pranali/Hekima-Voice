// import { COLORS, Reveal, Counter, SoundBars, Eyebrow } from "../../utils/ui";

// function Gallery() {
//     return (
//         <section className="relative overflow-hidden pt-20 md:pt-20">
//             <div className="gallery-card">
//                 <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
//                     <Reveal>
//                         <SoundBars className="mb-4" />
//                         <Eyebrow>Our Gallery</Eyebrow>
//                         <h2
//                             className="font-serif my-2 leading-[1.15] tracking-tight max-w-[1200px]"
//                             style={{ color: COLORS.ink, fontSize: "clamp(26px, 3.4vw, 36px)" }}
//                         >
//                             The Inspiring Stories Behind Our Recent Projects
//                         </h2>
//                         <p>In a heartwarming display of solidarity and compassion, members of the community rallied together to support the latest relief efforts</p>

//                         <a href="#who-we-are" className="read-more-btn py-3.5 mt-4" style={{ textDecoration: "none" }}>
//                             Donate Now
//                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                                 <line x1="5" y1="12" x2="19" y2="12"></line>
//                                 <polyline points="12 5 19 12 12 19"></polyline>
//                             </svg>
//                         </a>
//                     </Reveal>

//                     <Reveal>
//                         <div className="row flex gap-3 my-3">
//                             <div className="cols-6">
//                                 <img src="/assets/img 1.jpg" alt="" className="gallery-img" />
//                             </div>
//                             <div className="cols-6">
//                                 <img src="/assets/img4.jpg" alt="" className="gallery-img" />
//                             </div>
//                         </div>
//                         <div className="row flex gap-3 my-3">
//                             <div className="cols-6">
//                                 <img src="/assets/img9.jpg" alt="" className="gallery-img" />
//                             </div>
//                             <div className="cols-6">
//                                 <img src="/assets/img11.jpeg" alt="" className="gallery-img" />
//                             </div>
//                         </div>
//                     </Reveal>
//                 </div>
//             </div>
//         </section>
//     );
// }
// export default Gallery;



import { COLORS, Reveal, Counter, SoundBars, Eyebrow } from "../../utils/ui";

function Gallery() {
    return (
        <section className="relative overflow-hidden pt-10 md:pt-10 gallery-section">
            <div className="gallery-card">
                <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
                    <Reveal>
                        <SoundBars className="mb-4" />
                        <Eyebrow>Our Gallery</Eyebrow>
                        <h2
                            className="font-serif my-2 leading-[1.15] tracking-tight max-w-[1200px]"
                            style={{ color: COLORS.ink, fontSize: "clamp(26px, 3.4vw, 36px)" }}
                        >
                            The Inspiring Stories Behind Our Recent Projects
                        </h2>
                        <p>In a heartwarming display of solidarity and compassion, members of the community rallied together to support the latest relief efforts</p>

                        <a href="#who-we-are" className="read-more-btn py-3.5 mt-4" style={{ textDecoration: "none" }}>
                            Donate Now
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </Reveal>

                    <Reveal>
                        <div className="gallery-grid">
                            <div className="img-zoom overflow-hidden g-img1">
                                <img src="/assets/img 1.jpg" alt="Community support story" className="gallery-img transition-transform duration-700 hover:scale-110" />
                            </div>
                            <div className="img-zoom overflow-hidden g-img2">
                                <img src="/assets/img4.jpg" alt="Youth workshop story" className="gallery-img transition-transform duration-700 hover:scale-110" />
                            </div>
                            <div className="img-zoom overflow-hidden g-img3">
                                <img src="/assets/img9.jpg" alt="STEAM education story" className="gallery-img transition-transform duration-700 hover:scale-110" />
                            </div>
                            <div className="img-zoom overflow-hidden g-img4">
                                <img src="/assets/img11.jpeg" alt="Girls empowerment story" className="gallery-img transition-transform duration-700 hover:scale-110" />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
export default Gallery;