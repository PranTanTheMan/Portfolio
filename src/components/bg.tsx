import { useMemo, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Bg = () => {
  const options = useMemo(() => {
    return {
      background: {
        color: "#1e202960",
      },
      fullscreen: {
        enable: true,
        zIndex: -1,
      },
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: { distance: 100 },
        },
      },
      particles: {
        move: {
          enable: true,
          speed: 2,
        },
        size: {
          value: { min: 1, max: 3 },
        },
        opacity: {
          value: { min: 0.5, max: 0.8 },
        },
        links: {
          enable: true,
          distance: 100,
        },
        number: {
          value: 69,
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default Bg;
