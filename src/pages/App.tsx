import { useEffect, useRef, useState } from "react";
import "../styles/App.css";
import { HexagonBackground } from "../components/animate-ui/components/backgrounds/hexagon";
const THEME_STORAGE_KEY = "theme";
type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const nextTheme = theme === "dark" ? "light" : "dark";
  const mainRef = useRef<HTMLDivElement | null>(null);

  // const [particlesReady, setParticlesReady] = useState(false);
  // useEffect(() => {
  //   initParticlesEngine(async (engine) => {
  //     await loadSlim(engine);
  //   }).then(() => setParticlesReady(true));
  // }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) {
      return;
    }

    const prefersReducedMotion = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

    if (prefersReducedMotion) {
      main.style.setProperty("--main-scale", "1");
      main.style.setProperty("--main-shift", "0px");
      return;
    }

    let rafId = 0;
    const scaleStart = 1.5;
    const scaleEnd = 1;
    const shiftStart = -120;

    const update = () => {
      rafId = 0;
      const maxScroll = Math.max(window.innerHeight * 0.6, 240);
      const progress = Math.min(window.scrollY / maxScroll, 1);
      const scale = scaleStart + (scaleEnd - scaleStart) * progress;
      const shift = shiftStart * (1 - progress);

      main.style.setProperty("--main-scale", scale.toFixed(3));
      main.style.setProperty("--main-shift", `${shift.toFixed(1)}px`);
    };

    const onScroll = () => {
      if (rafId) {
        return;
      }
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <HexagonBackground
      className="absolute inset-0 flex items-center justify-center rounded-xl bg-bg text-text"
      bgColorBefore="before:bg-brand/10 dark:before:bg-surface before:animate-[hexagon-fade_6s_ease-in-out_infinite]"
      bgColorAfer="after:bg-bg dark:after:bg-bg"
    >
      {/* {particlesReady ? (
        <Particles
          className="pointer-events-none absolute inset-0"
          options={particleOptions}
        />
      ) : null} */}

      <div className="relative z-10">
        <header className="flex flex-col gap-4 border-b border-border px-6 py-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-text-muted">
              MC Portfolio
            </p>
            <h1 className="mt-2 text-3xl font-semibold">
              Design-forward developer portfolio
            </h1>
            <p className="mt-2 max-w-xl text-sm text-text-muted">
              Theme tokens power every surface, text style, and shadow. Toggle
              the mode to preview the full palette shift in real time.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-highlight px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-bg">
              Available
            </span>
            <button
              type="button"
              onClick={() => setTheme(nextTheme)}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition hover:bg-surface-2"
            >
              Switch to {nextTheme} mode
            </button>
          </div>
        </header>
      </div>
    </HexagonBackground>
    // </div >
  );
}

export default App;
