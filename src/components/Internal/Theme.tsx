import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
const THEME_STORAGE_KEY = "theme";
type ThemeMode = "light" | "dark";

const getInitialTheme = (): ThemeMode => {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

function Theme() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const isDark = theme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-pressed={isDark}
      className="relative overflow-hidden rounded-full border border-border p-0 cursor-none "
    >
      <div
        id="transform"
        className="relative flex min-w-32 items-center justify-center overflow-hidden rounded-full bg-highlight px-5 py-2 text-sm font-semibold text-slate-900 dark:bg-black dark:text-white"
      >
        <span className="relative z-10"><Sun /> </span>
        <div
          aria-hidden="true"
          className="theme-swipe pointer-events-none absolute inset-0 z-20 flex items-center justify-center rounded-l-full rounded-r-none bg-foreground text-white dark:bg-highlight dark:text-slate-900"
        >
          <span className="select-none">
            <Moon className="dark:text-slate-900" />
          </span>
        </div>
      </div>
    </button>
  );
}

export default Theme;
