import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Figma,
  PenTool,
  Image as ImageIcon,
  Video,
  Palette,
  Layers,
} from "lucide-react";
import { profile, skills, tools, languages } from "../mock";

const toolIconMap = {
  Figma: Figma,
  "Adobe XD": Layers,
  Photoshop: ImageIcon,
  Illustrator: PenTool,
  InDesign: Layers,
  Canva: Palette,
  Camtasia: Video,
};

const socialLinks = [
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin },
  { key: "behance", label: "Behance", Icon: PenTool },
];

function externalUrl(url) {
  if (!url) return "";
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

export default function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-24 self-start print-break-inside-avoid">
      <div className="bg-card border border-border rounded-2xl p-6 shadow-[0_1px_0_rgba(0,0,0,0.02),0_12px_40px_-20px_rgba(0,0,0,0.12)]">
        {/* Avatar + name */}
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[hsl(var(--accent-500))]/30 to-transparent blur-md" />
            <img
              src={profile.avatar}
              alt={profile.name}
              className="relative h-28 w-28 rounded-full object-cover border-4 border-background ring-1 ring-border"
            />
            <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-background" />
          </div>
          <h2 className="mt-4 font-display font-bold text-xl text-foreground">
            {profile.name}
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5 leading-snug px-2">
            {profile.title}
          </p>
        </div>

        <div className="dotted-divider my-6" />

        {/* Contact */}
        <div>
          <h3 className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-medium mb-3">
            Contact
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-center gap-2.5 text-foreground/90">
              <Phone className="h-3.5 w-3.5 text-[hsl(var(--accent-500))] shrink-0" />
              <span className="truncate">{profile.phone}</span>
            </li>
            <li className="flex items-center gap-2.5 text-foreground/90">
              <Mail className="h-3.5 w-3.5 text-[hsl(var(--accent-500))] shrink-0" />
              <a
                href={`mailto:${profile.email}`}
                className="truncate hover:text-foreground"
              >
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-foreground/90">
              <MapPin className="h-3.5 w-3.5 text-[hsl(var(--accent-500))] shrink-0" />
              <span>{profile.location}</span>
            </li>
            <li className="flex items-center gap-2.5 text-foreground/90">
              <Globe className="h-3.5 w-3.5 text-[hsl(var(--accent-500))] shrink-0" />
              <span className="truncate">{profile.website}</span>
            </li>
          </ul>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {socialLinks.map(({ key, label, Icon }) => {
              const href = externalUrl(profile.social?.[key]);
              if (!href) return null;

              return (
                <a
                  key={key}
                  href={href}
                  className="flex items-center gap-2 rounded-lg border border-border bg-background px-2.5 py-1.5 text-[12px] transition-colors hover:bg-muted"
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className="h-3.5 w-3.5 text-[hsl(var(--accent-600))]" />
                  <span className="truncate">{label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="dotted-divider my-6" />

        {/* Skills */}
        <div>
          <h3 className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-medium mb-4">
            Skills
          </h3>
          <ul className="space-y-3.5">
            {skills.map((s) => (
              <li key={s.name}>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-[13px] font-medium text-foreground/90">
                    {s.name}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {s.level}
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className="fill-bar h-full rounded-full bg-gradient-to-r from-[hsl(var(--accent-500))] to-[hsl(var(--accent-600))]"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="dotted-divider my-6" />

        {/* Tools */}
        <div>
          <h3 className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-medium mb-3">
            Tools
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {tools.map((t) => {
              const Icon = toolIconMap[t] || Layers;
              return (
                <div
                  key={t}
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-border bg-background text-[12px] hover:bg-muted transition-colors"
                >
                  <Icon className="h-3.5 w-3.5 text-[hsl(var(--accent-600))]" />
                  <span className="truncate">{t}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="dotted-divider my-6" />

        {/* Languages */}
        <div>
          <h3 className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-medium mb-3">
            Languages
          </h3>
          <ul className="space-y-2">
            {languages.map((l) => (
              <li
                key={l.name}
                className="flex items-center justify-between text-[13px]"
              >
                <span className="text-foreground/90">{l.name}</span>
                <span className="text-[11px] text-muted-foreground">
                  {l.level}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
