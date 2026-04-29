import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "AI Workflow", href: "#ai" },
  { label: "Projects", href: "#projects" },
  { label: "Creative", href: "#creative" },
  { label: "Education", href: "#education" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`no-print sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/75 border-b border-border/70"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="h-8 w-8 rounded-lg bg-foreground text-background grid place-items-center font-display font-bold text-sm">
            V
          </span>
          <div className="leading-tight">
            <div className="font-display font-semibold text-sm tracking-tight">
              Vilas Khade
            </div>
            <div className="text-[11px] text-muted-foreground -mt-0.5">
              Design Portfolio / Resume
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>

      {scrolled && (
        <div className="flex items-center justify-center text-[10px] text-muted-foreground pb-1.5 gap-1">
          <Sparkles className="h-3 w-3 text-[hsl(var(--accent-500))]" />
          <span>AI-powered design workflow enabled</span>
        </div>
      )}
    </header>
  );
}
