import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Quote,
  Download,
  Target,
  Rocket,
  Bot,
  CheckCircle2,
  Palette,
} from "lucide-react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CreativeShowcase from "../components/CreativeShowcase";
import { Badge } from "../components/ui/badge";
import {
  profile,
  about,
  objective,
  experience,
  aiTools,
  projects,
  education,
  stats,
} from "../mock";const SectionHeading = ({ eyebrow, title, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-5">
    {Icon && (
      <span className="h-8 w-8 rounded-lg bg-[hsl(var(--accent-50))] border border-[hsl(var(--accent-500))]/15 grid place-items-center">
        <Icon className="h-4 w-4 text-[hsl(var(--accent-600))]" />
      </span>
    )}
    <div>
      <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground font-medium">
        {eyebrow}
      </div>
      <h2 className="font-display font-bold text-2xl md:text-[26px] text-foreground leading-tight">
        {title}
      </h2>
    </div>
  </div>
);

export default function Resume() {
  const [siteStats, setSiteStats] = useState({ views: null, messages: null });

  useEffect(() => {
    const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
    const alreadyCounted = sessionStorage.getItem("view_counted");
    const run = async () => {
      try {
        if (!alreadyCounted) {
          const { data } = await axios.post(`${API}/stats/view`);
          sessionStorage.setItem("view_counted", "1");
          setSiteStats((s) => ({ ...s, views: data.views }));
        }
        const { data } = await axios.get(`${API}/stats`);
        setSiteStats(data);
      } catch (e) {
        // silent fail — stats are non-critical
      }
    };
    run();
  }, []);

  return (
    <div id="top" className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--accent-50))]/70 via-background to-background pointer-events-none" />
        <div className="grain absolute inset-0 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-8 md:pt-20 md:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,460px)] gap-10 lg:gap-14 items-center">
            {/* LEFT — text */}
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-6 rise-in">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-muted-foreground">
                  Available for senior design roles &amp; consulting
                </span>
              </div>

              <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[60px] leading-[1.05] tracking-tight text-foreground rise-in">
                Turning complex problems into{" "}
                <span className="text-[hsl(var(--coral-600))]">
                  simple, human{" "}
                  <span className="relative inline-block">
                    experiences
                    <svg
                      className="absolute -bottom-1 left-0 w-full h-2 text-[hsl(var(--coral-500))]/70"
                      viewBox="0 0 200 8"
                      preserveAspectRatio="none"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 5 Q 50 1, 100 4 T 198 3"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </span>
                .
              </h1>

              <p
                className="mt-6 max-w-xl text-base md:text-[17px] text-muted-foreground leading-relaxed rise-in"
                style={{ animationDelay: "0.1s" }}
              >
                I design thoughtful digital products that reduce noise, improve
                clarity, and help users make better decisions—faster. Focused
                on real impact across product strategy, UX, and execution.
              </p>

              <div
                className="mt-8 flex flex-wrap gap-3 rise-in"
                style={{ animationDelay: "0.2s" }}
              >
                <a
                  href="/resume-2026.pdf"
                  className="h-11 inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 text-sm font-medium hover:bg-muted transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download className="h-4 w-4" /> Download resume (PDF)
                </a>
              </div>
            </div>

            {/* RIGHT — circular hero image with blue ring */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-[460px] aspect-square rise-in" style={{ animationDelay: "0.15s" }}>
              {/* Soft blue glow */}
              <div className="absolute inset-0 rounded-full bg-[#84aaf3]/25 blur-3xl scale-90" />

              {/* Outer thin blue ring */}
              <div className="absolute -inset-4 rounded-full border border-[#84aaf3]/30" />

              {/* Slowly rotating dashed ring */}
              <div className="absolute -inset-2 spin-slow">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "1.5px dashed rgb(132 170 243 / 0.45)",
                  }}
                />
              </div>

              {/* Solid blue ring closer to image */}
              <div className="absolute inset-0 rounded-full ring-[6px] ring-[#84aaf3]/90 ring-offset-[6px] ring-offset-background overflow-hidden shadow-[0_30px_80px_-20px_rgb(132_170_243/0.45)]">
                <img
                  src={profile.heroImage}
                  alt="Designer at work"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating tag — top left */}
              <div
                className="absolute -top-2 -left-2 md:-left-6 bg-card border border-border rounded-2xl shadow-lg px-3.5 py-2.5 floaty"
                style={{ "--r": "-4deg" }}
              >
                <div className="flex items-center gap-2">
                  <span className="h-7 w-7 rounded-lg bg-[hsl(var(--coral-50))] grid place-items-center">
                    <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--coral-600))]" />
                  </span>
                  <div className="leading-tight">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Experience
                    </div>
                    <div className="font-display font-bold text-sm text-foreground">
                      13+ years
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tag — bottom right */}
              <div
                className="absolute -bottom-2 -right-2 md:-right-4 bg-card border border-border rounded-2xl shadow-lg px-3.5 py-2.5 floaty"
                style={{ "--r": "5deg", animationDelay: "1.2s" }}
              >
                <div className="flex items-center gap-2">
                  <span className="h-7 w-7 rounded-lg bg-[hsl(var(--accent-50))] grid place-items-center">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[hsl(var(--accent-600))]" />
                  </span>
                  <div className="leading-tight">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Loved by
                    </div>
                    <div className="font-display font-bold text-sm text-foreground">
                      120+ teams
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 rise-in"
            style={{ animationDelay: "0.3s" }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card/60 backdrop-blur px-5 py-4"
              >
                <div className="font-display text-3xl font-bold tracking-tight text-foreground">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN GRID */}
      <main className="max-w-7xl mx-auto px-6 lg:px-10 pt-8 md:pt-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-12">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <div className="space-y-16 min-w-0">
            {/* ABOUT */}
            <section id="about" className="scroll-mt-24">
              <SectionHeading
                eyebrow="01 — Introduction"
                title="About me"
                icon={Quote}
              />
              <p className="text-[17px] leading-[1.75] text-foreground/85 max-w-3xl">
                {about}
              </p>

              <div className="mt-6 rounded-2xl border border-border bg-card p-5 md:p-6 flex gap-4 items-start">
                <span className="h-9 w-9 rounded-lg bg-[hsl(var(--accent-50))] border border-[hsl(var(--accent-500))]/15 grid place-items-center shrink-0">
                  <Target className="h-4 w-4 text-[hsl(var(--accent-600))]" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground font-medium mb-1">
                    Career objective
                  </div>
                  <p className="text-[15px] leading-relaxed text-foreground/85">
                    {objective}
                  </p>
                </div>
              </div>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" className="scroll-mt-24">
              <SectionHeading
                eyebrow="02 — Career"
                title="Experience"
                icon={Briefcase}
              />
              <ol className="relative border-l border-border pl-6 space-y-8">
                {experience.map((job, idx) => (
                  <li
                    key={idx}
                    className="relative print-break-inside-avoid"
                  >
                    <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-background border-2 border-[hsl(var(--accent-500))]" />
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-display font-semibold text-lg text-foreground leading-tight">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                        <Calendar className="h-3 w-3" />
                        {job.period}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-foreground/80 mb-3">
                      <span className="font-medium text-[hsl(var(--accent-600))]">
                        {job.company}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-3 w-3" /> {job.location}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {job.points.map((p, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-[14px] text-foreground/80 leading-relaxed"
                        >
                          <span className="mt-[9px] h-1 w-1 rounded-full bg-muted-foreground shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </section>

            {/* AI WORKFLOW (HIGHLIGHT) */}
            <section id="ai" className="scroll-mt-24 print-break-inside-avoid">
              <SectionHeading
                eyebrow="03 — Modern workflow"
                title="AI-Powered Design Workflow"
                icon={Sparkles}
              />

              <div className="relative rounded-3xl border border-[hsl(var(--accent-500))]/20 bg-gradient-to-br from-[hsl(var(--accent-50))] via-card to-card p-6 md:p-8 overflow-hidden">
                <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[hsl(var(--accent-500))]/10 blur-3xl" />

                <div className="relative flex items-start gap-4">
                  <span className="h-10 w-10 rounded-xl bg-foreground text-background grid place-items-center shrink-0">
                    <Bot className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <Badge className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium gap-1">
                      <Sparkles className="h-3 w-3" /> New · 2024
                    </Badge>
                    <p className="mt-3 text-[15px] md:text-base leading-relaxed text-foreground/85 max-w-2xl">
                      I actively use AI tools such as{" "}
                      <span className="font-semibold text-foreground">
                        Gemini AI, ChatGPT, Claude AI, Lovable AI, Flow,
                      </span>{" "}
                      and{" "}
                      <span className="font-semibold text-foreground">
                        Stitch by Google
                      </span>{" "}
                      for ideation, rapid prototyping, UX writing, content
                      generation and design enhancement — shipping better work,
                      faster.
                    </p>
                  </div>
                </div>

                <div className="relative mt-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {aiTools.map((t) => (
                    <div
                      key={t.name}
                      className="group rounded-xl bg-card border border-border p-3.5 hover:border-[hsl(var(--accent-500))]/40 hover:-translate-y-0.5 transition-all"
                    >
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent-500))]" />
                        <span className="font-display font-semibold text-sm text-foreground">
                          {t.name}
                        </span>
                      </div>
                      <p className="text-[11px] leading-snug text-muted-foreground">
                        {t.use}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                  {[
                    "Faster ideation",
                    "Smarter prototypes",
                    "Evidence-based UX",
                    "Scalable systems",
                  ].map((k) => (
                    <span key={k} className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[hsl(var(--accent-600))]" />
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="scroll-mt-24">
              <SectionHeading
                eyebrow="04 — Selected work"
                title="Featured projects"
                icon={Rocket}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map((p, idx) => (
                  <Link
                    key={p.slug}
                    to={`/projects/${p.slug}`}
                    className={`group relative rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_60px_-25px_rgba(0,0,0,0.2)] transition-all duration-300 ${
                      idx === 0 ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-muted">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          variant="secondary"
                          className="rounded-full text-[10px] font-medium bg-muted text-foreground/80"
                        >
                          {p.tag}
                        </Badge>
                        <span className="text-[11px] font-mono text-muted-foreground">
                          {p.year}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-lg text-foreground leading-tight">
                        {p.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                        {p.description}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-1 text-sm text-[hsl(var(--accent-600))] font-medium">
                        View case study
                        <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* CREATIVE STUDIO */}
            <section id="creative" className="scroll-mt-24">
              <SectionHeading
                eyebrow="05 — Creative studio"
                title="Beyond product design"
                icon={Palette}
              />
              <p className="text-[15px] text-muted-foreground max-w-2xl mb-5 leading-relaxed">
                13+ years of range across brand identity, infographics, video,
                paid social creatives and print. Switch tabs to explore each
                discipline.
              </p>
              <CreativeShowcase />
            </section>

            {/* EDUCATION */}
            <section id="education" className="scroll-mt-24 print-break-inside-avoid">
              <SectionHeading
                eyebrow="06 — Learning"
                title="Education"
                icon={GraduationCap}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {education.map((e, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
                      {e.period}
                    </div>
                    <h3 className="font-display font-semibold text-base text-foreground leading-tight">
                      {e.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {e.school}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="no-print">
              <div className="relative rounded-3xl border border-border bg-foreground text-background p-8 md:p-12 overflow-hidden">
                <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-[hsl(var(--accent-500))]/30 blur-3xl" />
                <div className="relative max-w-xl">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-background/60 font-medium mb-3">
                    Let's build
                  </div>
                  <h3 className="font-display font-bold text-3xl md:text-4xl leading-tight">
                    Have a product that deserves better design?
                  </h3>
                  <p className="text-background/70 mt-3 leading-relaxed">
                    I take on a handful of engagements each quarter — from
                    design system audits to 0→1 product design. Happy to chat.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={`mailto:${profile.email}`}
                      className="h-11 inline-flex items-center gap-2 rounded-full border border-background/20 px-5 text-sm hover:bg-background/10 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border no-print">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
            {siteStats.views !== null && (
              <span className="hidden sm:inline-flex items-center gap-1.5 font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {siteStats.views.toLocaleString()} views
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-foreground">
              Back to top
            </a>
            <span>·</span>
            <span className="font-mono">v1.0 — crafted with Figma & code</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
