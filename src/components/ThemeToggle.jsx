import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className={`relative h-9 w-[68px] rounded-full border border-border bg-card hover:bg-muted/60 transition-colors flex items-center px-1 ${className}`}
    >
      {/* Track icons */}
      <Sun
        className={`h-3.5 w-3.5 transition-opacity ${
          isDark ? "opacity-50 text-muted-foreground" : "opacity-0"
        }`}
      />
      <span className="flex-1" />
      <Moon
        className={`h-3.5 w-3.5 transition-opacity ${
          isDark ? "opacity-0" : "opacity-50 text-muted-foreground"
        }`}
      />

      {/* Knob */}
      <span
        className={`absolute top-1 left-1 h-7 w-7 rounded-full bg-foreground text-background grid place-items-center shadow-sm transition-transform duration-300 ease-out ${
          isDark ? "translate-x-0" : "translate-x-[32px]"
        }`}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5" />
        ) : (
          <Sun className="h-3.5 w-3.5" />
        )}
      </span>
    </button>
  );
}
