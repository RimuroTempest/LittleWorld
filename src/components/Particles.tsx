import { useMemo } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import "./Particles.css";

interface Dot {
  left: number;
  size: number;
  delay: number;
  duration: number;
  hue: "lavender" | "rose";
}

export default function Particles({ count = 22 }: { count?: number }) {
  const reduced = useReducedMotion();

  const dots = useMemo<Dot[]>(() => {
    return Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      size: 2 + Math.random() * 3,
      delay: Math.random() * 20,
      duration: 18 + Math.random() * 22,
      hue: Math.random() > 0.6 ? "rose" : "lavender",
    }));
  }, [count]);

  if (reduced) return null;

  return (
    <div className="particles" aria-hidden="true">
      {dots.map((d, i) => (
        <span
          key={i}
          className={`particles__dot particles__dot--${d.hue}`}
          style={{
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
