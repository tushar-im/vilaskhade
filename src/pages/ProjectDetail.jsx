import React, { useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  Calendar,
  Users,
  Briefcase,
  Layers,
  Sparkles,
  CheckCircle2,
  Target,
  Lightbulb,
  Mail,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import ThemeToggle from "../components/ThemeToggle";
import { projects, profile } from "../mock";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { project, prev, next, index } = useMemo(() => {
    const idx = projects.findIndex((p) => p.slug === slug);
    if (idx === -1) {
      return { project: null, prev: null, next: null, index: -1 };
    }
    return {
      project: projects[idx],
      prev: projects[(idx - 1 + projects.length) % projects.length],
      next: projects[(idx + 1) % projects.length],
      index: idx,
    };
  }, [slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold mb-2">
            Project not found
          </h2>
          <p className="text-muted-foreground mb-6">
            We couldn't find that case study.
          </p>
          <Link to="/">
            <Button className="rounded-full gap-2 bg-foreground text-background hover:bg-foreground/90">
              <ArrowLeft className="h-4 w-4" /> Back to portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Mini header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/70">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate("/#projects")}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All projects
          </button>
          <div className="hidden sm:block text-xs font-mono text-muted-foreground">
            Case study {String(index + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/">
              <Button
                size="sm"
                className="gap-1.5 rounded-full bg-foreground text-background hover:bg-foreground/90"
              >
                <Mail className="h-3.5 w-3.5" /> Hire Vilas
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--accent-50))]/60 via-background to-background pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-12 md:pt-16 pb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge
              variant="secondary"
              className="rounded-full bg-muted text-foreground/80"
            >
              {project.tag}
            </Badge>
            <span className="text-xs font-mono text-muted-foreground">
              {project.year}
            </span>
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[58px] leading-[1.05] tracking-tight max-w-4xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            {project.overview}
          </p>

          {/* Meta strip */}
          <div className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetaItem icon={Briefcase} label="Role" value={project.role} />
            <MetaItem icon={Calendar} label="Duration" value={project.duration} />
            <MetaItem icon={Users} label="Team" value={project.team} />
            <MetaItem
              icon={Layers}
              label="Platforms"
              value={project.platforms.join(" · ")}
            />
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 -mt-2">
        <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)]">
          <div className="aspect-[16/9] bg-muted">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground font-medium mb-2">
              01 — The challenge
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--coral-50))] border border-[hsl(var(--coral-500))]/20 px-3 py-1">
              <Lightbulb className="h-3.5 w-3.5 text-[hsl(var(--coral-600))]" />
              <span className="text-xs text-[hsl(var(--coral-600))] font-medium">
                Problem
              </span>
            </div>
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl md:text-[28px] text-foreground leading-tight mb-3">
              What we were solving
            </h2>
            <p className="text-[16px] md:text-[17px] leading-[1.75] text-foreground/85 max-w-2xl">
              {project.problem}
            </p>
            {project.client && (
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-[10px] uppercase tracking-wider font-medium">
                  Client
                </span>
                <span className="text-foreground">{project.client}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground font-medium mb-2">
              02 — Approach
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent-50))] border border-[hsl(var(--accent-500))]/20 px-3 py-1">
              <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--accent-600))]" />
              <span className="text-xs text-[hsl(var(--accent-600))] font-medium">
                Process
              </span>
            </div>
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl md:text-[28px] text-foreground leading-tight mb-6">
              How I tackled it
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.process.map((p) => (
                <li
                  key={p.step}
                  className="rounded-2xl border border-border bg-card p-5 hover:-translate-y-0.5 hover:shadow-md transition-all"
                >
                  <div className="font-mono text-[11px] text-[hsl(var(--accent-600))] mb-2">
                    {p.step}
                  </div>
                  <h3 className="font-display font-semibold text-base text-foreground mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 mt-20">
        <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground font-medium mb-3">
          03 — Key screens
        </div>
        <h2 className="font-display font-bold text-2xl md:text-[28px] text-foreground leading-tight mb-7 max-w-2xl">
          Selected views from the final shipped product.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {project.gallery.map((src, idx) => (
            <div
              key={idx}
              className={`group rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_60px_-25px_rgba(0,0,0,0.2)] transition-all duration-300 ${
                idx === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="aspect-[16/9] bg-muted overflow-hidden">
                <img
                  src={src}
                  alt={`${project.title} — view ${idx + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground font-medium mb-2">
              04 — Highlights
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-muted border border-border px-3 py-1">
              <Target className="h-3.5 w-3.5 text-foreground" />
              <span className="text-xs text-foreground font-medium">Features</span>
            </div>
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl md:text-[28px] text-foreground leading-tight mb-5">
              What shipped
            </h2>
            <ul className="space-y-3 max-w-2xl">
              {project.features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
                >
                  <span className="mt-0.5 h-6 w-6 rounded-full bg-[hsl(var(--accent-50))] grid place-items-center shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[hsl(var(--accent-600))]" />
                  </span>
                  <span className="text-[15px] text-foreground/85 leading-relaxed">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 mt-20">
        <div className="rounded-3xl border border-border bg-foreground text-background p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-[hsl(var(--coral-500))]/30 blur-3xl" />
          <div className="relative">
            <div className="text-[10px] uppercase tracking-[0.16em] text-background/60 font-medium mb-2">
              05 — Impact
            </div>
            <h2 className="font-display font-bold text-2xl md:text-[32px] leading-tight max-w-xl">
              Outcomes that mattered.
            </h2>

            <div className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.outcomes.map((o) => (
                <div
                  key={o.label}
                  className="rounded-2xl border border-background/15 bg-background/5 p-5"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                    {o.kpi}
                  </div>
                  <div className="text-xs text-background/65 mt-1.5">
                    {o.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PREV / NEXT */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 mt-16 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NavCard project={prev} direction="prev" />
          <NavCard project={next} direction="next" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-8 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} {profile.name}.</div>
          <Link to="/" className="hover:text-foreground inline-flex items-center gap-1">
            Back to portfolio <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </footer>
    </div>
  );
}

function MetaItem({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1.5">
        <Icon className="h-3 w-3" /> {label}
      </div>
      <div className="text-sm font-medium text-foreground leading-snug">
        {value}
      </div>
    </div>
  );
}

function NavCard({ project, direction }) {
  const isPrev = direction === "prev";
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group rounded-2xl border border-border bg-card p-5 hover:bg-muted/40 hover:-translate-y-0.5 transition-all"
    >
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-2 flex items-center gap-1.5">
        {isPrev && <ArrowLeft className="h-3 w-3" />}
        {isPrev ? "Previous" : "Next"} project
        {!isPrev && <ArrowRight className="h-3 w-3" />}
      </div>
      <div className={`flex items-center gap-4 ${isPrev ? "" : "md:flex-row-reverse md:text-right"}`}>
        <div className="h-16 w-24 rounded-lg overflow-hidden bg-muted shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="min-w-0">
          <div className="text-[10px] font-mono text-muted-foreground">
            {project.tag}
          </div>
          <div className="font-display font-semibold text-base text-foreground leading-tight truncate">
            {project.title}
          </div>
        </div>
      </div>
    </Link>
  );
}
