import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import "./PaperPlane.css";

interface Point {
  x: number;
  y: number;
}

const TRAIL_LENGTH = 7;

export default function PaperPlane() {
  const reduced = useReducedMotion();
  const planeRef = useRef<HTMLDivElement>(null);
  const [trail, setTrail] = useState<Point[]>([]);
  const rotationRef = useRef(0);
  const lastSampleRef = useRef(0);

  useEffect(() => {
    if (reduced) return;

    let raf = 0;
    let prevPos: Point = { x: 0, y: 0 };
    const trailBuffer: Point[] = [];

    const tick = (t: number) => {
      const docHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = Math.min(window.scrollY / docHeight, 1);

      // Vertical position drifts gently within a comfortable band.
      const y = 14 + progress * 68 + Math.sin(t / 2600) * 4;
      // Horizontal position sways in a soft curve, staying near one edge
      // so it never sits on top of the reading column.
      const isRight = Math.floor(progress * 6) % 2 === 0;
      const base = isRight ? 82 : 6;
      const x = base + Math.sin(t / 1800 + progress * 8) * 5;

      const dx = x - prevPos.x;
      const dy = y - prevPos.y;
      if (Math.abs(dx) + Math.abs(dy) > 0.02) {
        rotationRef.current = (Math.atan2(dy, dx) * 180) / Math.PI + 45;
      }
      prevPos = { x, y };

      if (planeRef.current) {
        planeRef.current.style.left = `${x}vw`;
        planeRef.current.style.top = `${y}vh`;
        planeRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
      }

      if (t - lastSampleRef.current > 220) {
        lastSampleRef.current = t;
        trailBuffer.push({ x, y });
        if (trailBuffer.length > TRAIL_LENGTH) trailBuffer.shift();
        setTrail([...trailBuffer]);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  if (reduced) return null;

  return (
    <div className="plane-layer" aria-hidden="true">
      {trail.map((p, i) => (
        <span
          key={i}
          className="plane-trail-dot"
          style={{
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            opacity: ((i + 1) / trail.length) * 0.35,
          }}
        />
      ))}
      <div ref={planeRef} className="plane">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <path
            d="M2 12.5L21 3l-6.2 19-3.4-7.4L2 12.5z"
            stroke="var(--lavender-300)"
            strokeWidth="1.1"
            strokeLinejoin="round"
            fill="rgba(182,160,221,0.14)"
          />
        </svg>
      </div>
    </div>
  );
}
