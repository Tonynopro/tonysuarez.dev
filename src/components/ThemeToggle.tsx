"use client";

import { useTheme, Theme } from "./ThemeProvider";
import { SunIcon, MoonIcon, SparkIcon } from "./Icons";

const options: { value: Theme; label: string; icon: React.ReactNode }[] = [
  { value: "light", label: "Tema claro", icon: <SunIcon className="w-3.5 h-3.5" /> },
  { value: "dark", label: "Tema oscuro", icon: <MoonIcon className="w-3.5 h-3.5" /> },
  { value: "highlight", label: "Tema highlight", icon: <SparkIcon className="w-3.5 h-3.5" /> },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 p-1 rounded-md border border-border bg-surface">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          aria-label={opt.label}
          title={opt.label}
          onClick={() => setTheme(opt.value)}
          className={`flex items-center justify-center w-7 h-7 rounded transition-all duration-200 ${
            theme === opt.value
              ? "bg-terra text-cream"
              : "text-ink-faint hover:text-terra hover:bg-terra/10"
          }`}
        >
          {opt.icon}
        </button>
      ))}
    </div>
  );
}
