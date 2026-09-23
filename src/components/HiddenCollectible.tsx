import { useState } from "react";
import "./HiddenCollectible.css";

interface HiddenCollectibleProps {
  message: string;
  found: boolean;
  onFound: () => void;
  /** rough placement within its section, as percentages */
  top?: string;
  side?: "left" | "right";
}

export default function HiddenCollectible({
  message,
  found,
  onFound,
  top = "12%",
  side = "right",
}: HiddenCollectibleProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (!found) onFound();
    setOpen((v) => !v);
  };

  return (
    <div
      className={`collectible collectible--${side}`}
      style={{ top }}
    >
      <button
        className={`collectible__button ${found ? "collectible__button--found" : ""}`}
        onClick={handleClick}
        aria-label="a little hidden thing"
      >
        ♡
      </button>
      {open && <p className="collectible__message">{message}</p>}
    </div>
  );
}
