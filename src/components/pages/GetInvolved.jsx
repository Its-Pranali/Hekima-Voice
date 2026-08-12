import React, { useState, useRef } from "react";
import {
  HeartHandshake,
  Globe,
  Users,
  BookOpen,
  Briefcase,
  Clock,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Send,
  GraduationCap,
  Compass,
  Sparkles,
  ArrowRight,
  Star,
  Award,
  ShieldCheck,
  Zap,
  Check
} from "lucide-react";
import { COLORS, Reveal, SoundBars, Eyebrow } from "../../utils/ui";

export default function GetInvolved() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedRole, setSelectedRole] = useState("Community Circle Facilitator");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Community Circle Facilitator",
    availability: "2-4 hours / week",
    locationType: "Hybrid",
    message: "",
    profileUrl: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const categories = [
    { id: "all", label: "All Opportunities" },
    { id: "community", label: "Community & Circles" },
    { id: "mentorship", label: "Youth & Mentorship" },
    { id: "creative", label: "Creative & Media" },
    { id: "professional", label: "Skills-Based" },
  ];

  const roles = [
    {
      id: "facilitator",
      title: "Community Circle Facilitator",
      category: "community",
      categoryLabel: "Community",
      badge: "In-Person / Hybrid",
      demandBadge: "🔥 High Demand",
      time: "2–4 hrs / week",
      location: "Local Community Hubs",
      img: "/assets/img13.jpeg",
      desc: "Lead monthly community listening circles, gather resident priorities, and translate lived experience into actionable civic advocacy.",
      highlights: ["Facilitation & advocacy training provided", "Direct neighbourhood impact", "Flexible monthly commitments"],
      accent: "#5D0B86", // Logo Purple
    },
    {
      id: "mentor",
      title: "Youth Voice Mentor",
      category: "mentorship",
      categoryLabel: "Youth & Mentorship",
      badge: "Hybrid",
      demandBadge: "🌟 Featured Role",
      time: "3–5 hrs / week",
      location: "Civic Center & Virtual",
      img: "/assets/img5.jpg",
      desc: "Mentor emerging youth leaders in civic process, public speaking, and community organizing skills.",
      highlights: ["1-on-1 youth mentorship", "Quarterly leadership retreats", "Certificate of Mentorship"],
      accent: "#048DA4", // Logo Teal
    },
    {
      id: "media",
      title: "Digital Advocate & Storyteller",
      category: "creative",
      categoryLabel: "Creative",
      badge: "100% Remote",
      demandBadge: "⚡ Remote Friendly",
      time: "2–3 hrs / week",
      location: "Online / Anywhere",
      img: "/assets/img18.jpeg",
      desc: "Help tell powerful community stories through video, photography, social media campaigns, and newsletter spotlights.",
      highlights: ["Creative autonomy", "Build a high-impact portfolio", "Remote collaboration"],
      accent: "#5D0B86",
    },
    {
      id: "pro-skills",
      title: "Skills-Based Pro Contributor",
      category: "professional",
      categoryLabel: "Professional",
      badge: "Remote / On-Demand",
      demandBadge: "💼 High Impact",
      time: "Project Based",
      location: "Virtual",
      img: "/assets/img21.jpeg",
      desc: "Lend specialized expertise in legal advice, grant writing, web development, policy research, or translation.",
      highlights: ["Flexible project-based milestones", "Professional networking", "Direct strategic impact"],
      accent: "#048DA4",
    },
  ];

  const filteredRoles = activeTab === "all"
    ? roles
    : roles.filter((r) => r.category === activeTab);

  const handleApplyClick = (roleTitle, timeCommitment) => {
    setSelectedRole(roleTitle);
    setForm((prev) => ({
      ...prev,
      role: roleTitle,
      availability: timeCommitment,
    }));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="get-involved" className="py-20 md:py-28 relative overflow-hidden text-slate-800" style={{ background: "linear-gradient(180deg, #FAF7FF 0%, #FFFFFF 50%, #F5F0FA 100%)" }}>

      {/* Background ambient soft glows (Logo Purple & Teal) */}
      <div
        className="blob-a pointer-events-none absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full opacity-30"
        style={{ background: `radial-gradient(circle, rgba(93, 11, 134, 0.15) 0%, transparent 70%)`, filter: "blur(60px)" }}
        aria-hidden="true"
      />
      <div
        className="blob-b pointer-events-none absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full opacity-30"
        style={{ background: `radial-gradient(circle, rgba(4, 141, 164, 0.15) 0%, transparent 70%)`, filter: "blur(60px)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1240px] mx-auto px-6 md:px-10 z-10">

        {/* Section Header */}
        <Reveal className="text-center max-w-[820px] mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 border border-purple-200 bg-purple-50 text-purple-900 shadow-sm">
            <Sparkles size={15} className="text-amber-500 animate-pulse" />
            <span className="text-[12px] font-bold tracking-wider uppercase" style={{ color: "#5D0B86" }}>
              Get Involved with Hekima Voice
            </span>
          </div>

          <h2 className="font-serif leading-[1.15] tracking-tight text-3xl sm:text-[30px] md:text-[32px] lg:text-[45px] font-bold" style={{ color: COLORS.ink }}>
            Turn your voice & skills into <span style={{ background: "linear-gradient(120deg, #048DA4, #5D0B86)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>community impact.</span>
          </h2>

          <p className="mt-5 text-base sm:text-[15px] leading-relaxed text-slate-600 max-w-[700px] mx-auto">
            Whether you want to facilitate local neighbourhood circles, mentor youth, lend professional expertise, or join through established partner exchange programs like <strong style={{ color: "#5D0B86" }}>ASA</strong> or <strong style={{ color: "#048DA4" }}>Workaway</strong> — you belong here.
          </p>

          {/* Quick Stats Bar (Light Palette) */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white border border-purple-100 shadow-xl shadow-purple-900/5">
            <div className="text-center p-2">
              <div className="font-serif text-2xl sm:text-3xl font-bold" style={{ color: "#5D0B86" }}>100+</div>
              <div className="text-[12px] text-slate-500 font-medium mt-1">Active Volunteers</div>
            </div>
            <div className="text-center p-2">
              <div className="font-serif text-2xl sm:text-3xl font-bold" style={{ color: "#048DA4" }}>4</div>
              <div className="text-[12px] text-slate-500 font-medium mt-1">Flexible Pathways</div>
            </div>
            <div className="text-center p-2">
              <div className="font-serif text-2xl sm:text-3xl font-bold" style={{ color: "#C9A227" }}>2</div>
              <div className="text-[12px] text-slate-500 font-medium mt-1">Global Programs</div>
            </div>
            <div className="text-center p-2">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-600">100%</div>
              <div className="text-[12px] text-slate-500 font-medium mt-1">Direct Local Impact</div>
            </div>
          </div>
        </Reveal>


        {/* ================= PART 1: VOLUNTEER OPPORTUNITIES ================= */}
        <div className="mt-20 md:mt-28">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-center mb-4 gap-4">
              <div className="text-center">
                <Eyebrow tone="purple">Volunteering Opportunities</Eyebrow>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1" style={{ color: COLORS.ink }}>
                  Explore Available Volunteer Roles
                </h3>
              </div>

              {/* Category Filter Tabs */}

            </div>
            <div className="flex flex-wrap gap-2 mb-8 p-1.5 explore-tab rounded-xl bg-purple-50/80 border border-purple-100">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${activeTab === cat.id
                    ? "text-white shadow-md"
                    : "text-slate-600 hover:text-purple-900 hover:bg-white/50"
                    }`}
                  style={
                    activeTab === cat.id
                      ? { background: "linear-gradient(120deg, #048DA4, #5D0B86)" }
                      : {}
                  }
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Roles Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredRoles.map((role, idx) => (
              <Reveal key={role.id} delay={idx * 90}>
                <div className="group relative rounded-3xl overflow-hidden bg-white border border-purple-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/10 flex flex-col justify-between h-full">

                  {/* Role Header Image & Overlay */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={role.img}
                      alt={role.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                    {/* Top Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-amber-800 border border-amber-200 shadow-sm">
                        {role.demandBadge}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-900/80 backdrop-blur-md text-purple-100">
                        {role.badge}
                      </span>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="text-xs font-bold tracking-wider text-amber-300 uppercase">
                        {role.categoryLabel}
                      </span>
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">
                        {role.title}
                      </h4>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {role.desc}
                      </p>

                      {/* Meta Tags */}
                      <div className="flex flex-wrap gap-4 text-xs py-3 mb-5 border-y border-purple-100 text-slate-600">
                        <div className="flex items-center gap-1.5">
                          <Clock size={15} style={{ color: "#048DA4" }} />
                          <span>{role.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={15} style={{ color: "#5D0B86" }} />
                          <span>{role.location}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2 mb-6">
                        {role.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle2 size={14} className="shrink-0" style={{ color: "#048DA4" }} />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => handleApplyClick(role.title, role.time)}
                      className="read-more-btn w-full justify-center text-center py-3.5 px-5"
                    >
                      <span>Apply for this role</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>


        {/* ================= PART 2: ESTABLISHED PROGRAMMES (ASA & WORKAWAY) ================= */}
        <div className="mt-24 md:mt-32">
          <Reveal className="text-center max-w-[700px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-3 bg-purple-100 border border-purple-200 text-purple-900 text-xs font-bold uppercase tracking-wider">
              <Globe size={14} style={{ color: "#048DA4" }} /> Recognized Global Pathways
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold" style={{ color: COLORS.ink }}>
              Established Volunteer Programs
            </h3>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Hekima Voice collaborates with accredited international networks and academic organizations to offer structured volunteering placements.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* ASA PROGRAM CARD */}
            <Reveal delay={100}>
              <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-purple-50/70 via-white to-purple-50/40 border border-purple-200/80 p-8 flex flex-col justify-between h-full shadow-lg hover:shadow-xl transition-all duration-300">

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md" style={{ background: "linear-gradient(120deg, #5D0B86, #048DA4)" }}>
                      <BookOpen size={28} />
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-100 text-purple-900 border border-purple-200 tracking-wide uppercase">
                      🎓 Academic Placement
                    </span>
                  </div>

                  <h4 className="font-serif text-2xl sm:text-3xl font-bold mb-1" style={{ color: COLORS.ink }}>
                    ASA Program
                  </h4>
                  <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#5D0B86" }}>
                    African Student Association & Alliance
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    A formal academic & civic fellowship designed for students and researchers. Gain real-world field experience in community policy advocacy, qualitative research, and resident-led initiatives.
                  </p>

                  {/* Program Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    <div className="p-3.5 rounded-xl bg-white border border-purple-100 flex items-start gap-2.5 shadow-sm">
                      <Award size={18} className="mt-0.5 shrink-0" style={{ color: "#5D0B86" }} />
                      <div>
                        <div className="text-xs font-bold text-slate-800">University Credit</div>
                        <div className="text-[11px] text-slate-500">Internship placement recognition</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-purple-100 flex items-start gap-2.5 shadow-sm">
                      <GraduationCap size={18} className="mt-0.5 shrink-0" style={{ color: "#048DA4" }} />
                      <div>
                        <div className="text-xs font-bold text-slate-800">Research Mentorship</div>
                        <div className="text-[11px] text-slate-500">1-on-1 advisor support</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-purple-100 flex items-start gap-2.5 shadow-sm">
                      <ShieldCheck size={18} className="mt-0.5 shrink-0" style={{ color: "#5D0B86" }} />
                      <div>
                        <div className="text-xs font-bold text-slate-800">Policy Directives</div>
                        <div className="text-[11px] text-slate-500">Present to civic officials</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-purple-100 flex items-start gap-2.5 shadow-sm">
                      <Zap size={18} className="mt-0.5 shrink-0" style={{ color: "#C9A227" }} />
                      <div>
                        <div className="text-xs font-bold text-slate-800">Flexible Duration</div>
                        <div className="text-[11px] text-slate-500">6 to 16 weeks terms</div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://africanservices.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more-btn w-full justify-center text-center py-4"
                  style={{ textDecoration: "none" }}
                >
                  <span>View Guidelines</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </Reveal>

            {/* WORKAWAY CARD */}
            <Reveal delay={200}>
              <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-teal-50/40 border border-teal-200/80 p-8 flex flex-col justify-between h-full shadow-lg hover:shadow-xl transition-all duration-300">

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md" style={{ background: "linear-gradient(120deg, #048DA4, #5D0B86)" }}>
                      <Compass size={28} />
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1">
                      <Star size={13} className="fill-amber-500 text-amber-500" /> 5.0 Rated Host Profile
                    </span>
                  </div>

                  <h4 className="font-serif text-2xl sm:text-3xl font-bold mb-1" style={{ color: COLORS.ink }}>
                    Workaway Profile
                  </h4>
                  <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#048DA4" }}>
                    Cultural Exchange & Stay-over Volunteering
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Immerse yourself in community living! Join Hekima Voice as an international or exchange volunteer via Workaway. Support hands-on projects while experiencing rich local culture.
                  </p>

                  {/* Program Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    <div className="p-3.5 rounded-xl bg-white border border-teal-100 flex items-start gap-2.5 shadow-sm">
                      <Globe size={18} className="mt-0.5 shrink-0" style={{ color: "#048DA4" }} />
                      <div>
                        <div className="text-xs font-bold text-slate-800">Accommodation Included</div>
                        <div className="text-[11px] text-slate-500">Safe private or shared host room</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-teal-100 flex items-start gap-2.5 shadow-sm">
                      <HeartHandshake size={18} className="mt-0.5 shrink-0" style={{ color: "#5D0B86" }} />
                      <div>
                        <div className="text-xs font-bold text-slate-800">Shared Meals</div>
                        <div className="text-[11px] text-slate-500">Authentic local dining provided</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-teal-100 flex items-start gap-2.5 shadow-sm">
                      <Users size={18} className="mt-0.5 shrink-0" style={{ color: "#048DA4" }} />
                      <div>
                        <div className="text-xs font-bold text-slate-800">Cultural Immersion</div>
                        <div className="text-[11px] text-slate-500">Language & community practice</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-teal-100 flex items-start gap-2.5 shadow-sm">
                      <Clock size={18} className="mt-0.5 shrink-0" style={{ color: "#C9A227" }} />
                      <div>
                        <div className="text-xs font-bold text-slate-800">2 to 8 Weeks Stay</div>
                        <div className="text-[11px] text-slate-500">Flexible arrival dates</div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.workaway.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more-btn w-full justify-center text-center py-4"
                  style={{ textDecoration: "none" }}
                >
                  <span>See Our Reviews</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </Reveal>

          </div>
        </div>


        {/* ================= PART 3: VOLUNTEER APPLICATION FORM (MATCHING SITE PALETTE) ================= */}
        <div ref={formRef} className="mt-24 md:mt-32">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100/60 border border-purple-200/80 px-3 py-8 sm:p-12 md:p-14 shadow-2xl shadow-purple-900/10">

              <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">

                {/* Form Left Intro */}
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-bold uppercase tracking-wider mb-4">
                    <Zap size={14} style={{ color: "#048DA4" }} /> Express Your Interest
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" style={{ color: COLORS.ink }}>
                    Start your volunteer journey.
                  </h3>

                  <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                    Fill out this short form to get started. Our volunteer team will review your application and match your skills with active initiatives within <strong style={{ color: "#5D0B86" }}>48 hours.</strong>
                  </p>

                  {/* Testimonial Quote Box */}
                  <div className="mt-8 p-5 rounded-2xl bg-white border border-purple-100 shadow-sm">
                    <p className="text-xs sm:text-sm italic text-slate-700 leading-relaxed">
                      "Volunteering with Hekima Voice connected me directly with community leaders. It transformed how I approach grassroots advocacy."
                    </p>
                    <div className="mt-3 text-xs font-semibold flex items-center gap-2" style={{ color: "#5D0B86" }}>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-[10px]" style={{ background: "linear-gradient(120deg, #048DA4, #5D0B86)" }}>
                        HV
                      </div>
                      <span>— Sarah M., Volunteer Facilitator</span>
                    </div>
                  </div>

                  {/* Perks Checklist */}
                  <div className="mt-6 space-y-2.5">
                    {["Orientation & full training provided", "Official Certificate of Appreciation", "Direct community impact", "Flexible remote or on-site options"].map((perk, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <Check size={16} style={{ color: "#048DA4" }} className="shrink-0" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form Right Card */}
                <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-purple-100 shadow-xl">
                  {submitted ? (
                    <div className="text-center py-12 px-4">
                      <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6 bg-emerald-100 text-emerald-600 border border-emerald-200 animate-bounce">
                        <CheckCircle2 size={44} />
                      </div>
                      <h4 className="font-serif text-3xl font-bold" style={{ color: COLORS.ink }}>Application Submitted!</h4>
                      <p className="mt-3 text-slate-600 text-sm max-w-[420px] mx-auto leading-relaxed">
                        Thank you for applying to volunteer for the <strong style={{ color: "#5D0B86" }}>{form.role}</strong> position. Our coordinator will contact you at <strong style={{ color: "#048DA4" }}>{form.email}</strong> shortly.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-8 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-purple-100 hover:bg-purple-200 text-purple-900 border border-purple-200 transition-all duration-200"
                      >
                        Submit another application
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Full Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="e.g. Jane Doe"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 border border-purple-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Email Address <span className="text-rose-500">*</span>
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="jane@example.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 border border-purple-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Phone / WhatsApp (Optional)
                          </label>
                          <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 border border-purple-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Role / Pathway Interest <span className="text-rose-500">*</span>
                          </label>
                          <select
                            value={form.role}
                            onChange={(e) => setForm({ ...form, role: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 border border-purple-200 text-slate-800 focus:outline-none focus:bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 cursor-pointer"
                          >
                            {roles.map((r) => (
                              <option key={r.id} value={r.title}>
                                {r.title}
                              </option>
                            ))}
                            <option value="ASA Program">ASA Academic Program</option>
                            <option value="Workaway Exchange">Workaway Exchange Stay</option>
                            <option value="General Volunteer">General Community Volunteer</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Availability
                          </label>
                          <select
                            value={form.availability}
                            onChange={(e) => setForm({ ...form, availability: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 border border-purple-200 text-slate-800 focus:outline-none focus:bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 cursor-pointer"
                          >
                            <option value="1-2 hours / week">1–2 hours / week</option>
                            <option value="2-4 hours / week">2–4 hours / week</option>
                            <option value="5+ hours / week">5+ hours / week</option>
                            <option value="Project-based">Project-based</option>
                            <option value="Full-time Seasonal (Workaway/ASA)">Full-time Seasonal (Workaway / ASA)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            LinkedIn / Profile (Optional)
                          </label>
                          <input
                            type="url"
                            placeholder="https://linkedin.com/in/..."
                            value={form.profileUrl}
                            onChange={(e) => setForm({ ...form, profileUrl: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 border border-purple-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Tell us about yourself & why you want to volunteer
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Share a bit about your experience, interests, or goals..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 border border-purple-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="read-more-btn w-full justify-center text-center py-4"
                      >
                        <Send size={17} />
                        <span>Submit Application</span>
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
