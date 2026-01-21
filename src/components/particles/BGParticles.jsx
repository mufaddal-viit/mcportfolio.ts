import { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    // loads the slim bundle into the engine
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: -1 },
      background: { color: "#0b1020" },
      fpsLimit: 60,

      particles: {
        number: { value: 70, density: { enable: true } },
        color: { value: "#ffffff" },
        links: { enable: true, distance: 140, opacity: 0.3, width: 1 },
        move: { enable: true, speed: 1.2 },
        size: { value: { min: 1, max: 3 } },
        opacity: { value: { min: 0.3, max: 0.9 } },
      },

      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 120 },
          push: { quantity: 2 },
        },
      },

      detectRetina: true,
    }),
    []
  );

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
}
