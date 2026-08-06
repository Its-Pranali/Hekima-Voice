import React, { useState, useEffect, useRef } from "react";
import { COLORS, Reveal, Counter, SoundBars, Eyebrow } from "../../utils/ui";
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28" style={{ background: COLORS.dark }}>
      <div className="blob-a pointer-events-none absolute -bottom-32 -right-20 w-[380px] h-[380px] rounded-full" style={{ background: `radial-gradient(circle, ${COLORS.purple}22, transparent 70%)`, filter: "blur(30px)" }} aria-hidden="true"/>
      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16">
        <Reveal>
          <Eyebrow tone="gold">Contact</Eyebrow>
          <h2 className="font-serif mt-4 leading-[1.1] tracking-tight" style={{ color: "#F6F1E6", fontSize: "clamp(30px, 4vw, 42px)" }} >
            Let's talk.
          </h2>
          <p className="mt-5 max-w-[380px] text-[15px] leading-relaxed" style={{ color: "#B9B2C6" }}>
            Whether you want to volunteer, partner with us, or bring Hekima
            Voice to your own community — we'd like to hear from you.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <div className="text-[11px] tracking-[0.18em] uppercase" style={{ color: "#8B84A0" }}>
                Email
              </div>
              <div className="mt-1 text-[15px]" style={{ color: "#F6F1E6" }}>
                hello@hekimavoice.org
              </div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.18em] uppercase" style={{ color: "#8B84A0" }}>
                Phone
              </div>
              <div className="mt-1 text-[15px]" style={{ color: "#F6F1E6" }}>
                +1 (000) 000-0000
              </div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.18em] uppercase" style={{ color: "#8B84A0" }}>
                Follow
              </div>
              <div className="mt-1 text-[15px]" style={{ color: "#F6F1E6" }}>
                @hekimavoice
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <label className="flex flex-col gap-2">
              <span className="text-[12px]" style={{ color: "#B9B2C6" }}>
                Name
              </span>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-anim rounded-md px-4 py-3 text-[14px] outline-none" style={{ background: COLORS.darkSoft, color: "#F6F1E6", border: `1px solid ${COLORS.lineDark}` }} />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[12px]" style={{ color: "#B9B2C6" }}>
                Email
              </span>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-anim rounded-md px-4 py-3 text-[14px] outline-none" style={{ background: COLORS.darkSoft, color: "#F6F1E6", border: `1px solid ${COLORS.lineDark}` }} />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[12px]" style={{ color: "#B9B2C6" }}>
                Message
              </span>
              <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input-anim rounded-md px-4 py-3 text-[14px] outline-none resize-none" style={{ background: COLORS.darkSoft, color: "#F6F1E6", border: `1px solid ${COLORS.lineDark}` }} />
            </label>
            <button type="submit" className="btn-anim btn-gold self-start inline-flex items-center px-6 py-3.5 rounded-full text-[14px] font-semibold mt-2" style={{ background: sent ? "#5E8C61" : COLORS.gold, color: COLORS.dark }} >
              {sent ? "Message sent ✓" : "Send message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
