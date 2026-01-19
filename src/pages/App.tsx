import { useEffect, useState } from "react";
import "../styles/App.css";
import { HexagonBackground } from "../components/animate-ui/components/backgrounds/hexagon";

// import { initParticlesEngine } from "@tsparticles/react";
// import type { ISourceOptions } from "@tsparticles/engine";
// import { loadSlim } from "@tsparticles/slim";
// import Particles from "@tsparticles/react";

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

  // const particleOptions = useMemo<ISourceOptions>(() => {
  //   const particleColor = theme === "dark" ? "#dee2e6" : "#2a6f97";
  //
  //   return {
  //     background: {
  //       color: {
  //         value: "transparent",
  //       },
  //     },
  //     fpsLimit: 60,
  //     interactivity: {
  //       events: {
  //         onHover: {
  //           enable: true,
  //           mode: "repulse",
  //         },
  //         resize: true,
  //       },
  //       modes: {
  //         repulse: {
  //           distance: 120,
  //           duration: 0.2,
  //         },
  //       },
  //     },
  //     particles: {
  //       color: {
  //         value: particleColor,
  //       },
  //       links: {
  //         color: particleColor,
  //         distance: 140,
  //         enable: true,
  //         opacity: 0.25,
  //         width: 1,
  //       },
  //       move: {
  //         direction: "none",
  //         enable: true,
  //         outModes: {
  //           default: "out",
  //         },
  //         random: false,
  //         speed: 0.6,
  //         straight: false,
  //       },
  //       number: {
  //         density: {
  //           enable: true,
  //           area: 900,
  //         },
  //         value: 40,
  //       },
  //       opacity: {
  //         value: 0.4,
  //       },
  //       shape: {
  //         type: "circle",
  //       },
  //       size: {
  //         value: { min: 1, max: 3 },
  //       },
  //     },
  //     detectRetina: true,
  //   };
  // }, [theme]);

  return (
    <HexagonBackground
      className="absolute inset-0 flex items-center justify-center rounded-xl bg-bg text-text"
      bgColorBefore="before:bg-brand/10 dark:before:bg-surface before:animate-[hexagon-fade_10s_ease-in-out_infinite]"
      bgColorAfer="after:bg-bg dark:after:bg-bg/50"
    // hexagonProps={{
    //   className:
    //     "motion-safe:animate-[hexagon-breathe_6s_ease-in-out_infinite] motion-safe:will-change-transform",
    // }}
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
            <p className=" uppercase tracking-[0.35em] text-text-muted">
              MC Portfolio
            </p>
            <h1 className="mt-2 text-3xl font-semibold">
              Full Stack Web Developer
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

        {/* <main className="grid gap-6 px-6 py-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[var(--radius-card)] bg-surface p-6 shadow-card">
            <h2 className="text-xl font-semibold">Token-driven surfaces</h2>
            <p className="mt-2 text-sm text-text-muted">
              Use `bg-surface`, `bg-surface-2`, and `text-text-muted` utilities
              to keep sections consistent across light and dark modes.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full bg-brand px-3 py-1 text-sm font-medium text-bg">
                Brand
              </span>
              <span className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-bg">
                Accent
              </span>
              <span className="rounded-full bg-accent-2 px-3 py-1 text-sm font-medium text-bg">
                Accent 2
              </span>
            </div>
          </section>

          <section className="rounded-[var(--radius-card)] bg-surface-2 p-6 shadow-card-strong">
            <h2 className="text-xl font-semibold">Practical layout token</h2>
            <p className="mt-2 text-sm text-text-muted">
              Borders and shadows are mapped to variables so cards and
              navigation keep a consistent depth and hierarchy.
            </p>
            <div className="mt-6 grid gap-4">
              <div className="rounded-[var(--radius-card)] border border-border bg-bg p-4">
                <p className="text-sm font-medium">Featured case study</p>
                <p className="mt-1 text-xs text-text-muted">
                  Powered by `border-border`, `bg-bg`, and tokenized shadows.
                </p>
              </div>
              <div className="rounded-[var(--radius-card)] border border-border bg-bg p-4">
                <p className="text-sm font-medium">Availability window</p>
                <p className="mt-1 text-xs text-text-muted">
                  Blend tokens for clear contrast and soft separation.
                </p>
              </div>
            </div>
          </section>
        </main> */}
      </div>
    </HexagonBackground>
  );
}

export default App;
