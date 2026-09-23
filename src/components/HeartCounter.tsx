import "./HeartCounter.css";

export default function HeartCounter({ found, total }: { found: number; total: number }) {
  if (found === 0) return null;

  return (
    <div className="heart-counter" aria-live="polite">
      {found} / {total} little things found
    </div>
  );
}
