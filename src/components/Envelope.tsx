import { useState } from "react";
import { envelope } from "../data/story";
import { useReveal } from "../hooks/useReveal";
import "./Envelope.css";

export default function Envelope() {
  const [open, setOpen] = useState(false);
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);

  return (
    <section className="envelope-section" id="envelope">
      <div
        ref={ref}
        className={`envelope-section__inner ${visible ? "is-visible" : ""}`}
      >
        <p className="kicker">{envelope.heading}</p>
        <h2 className="envelope-section__title">{envelope.title}</h2>
        <p className="envelope-section__desc">{envelope.description}</p>

        <div className={`envelope ${open ? "envelope--open" : ""}`}>
          <button
            className="envelope__hitbox"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-label={open ? envelope.openedLabel : envelope.closedLabel}
            disabled={open}
          >
            <div className="envelope__body">
              <div className="envelope__flap" />
              <div className="envelope__paper">
                <div className="envelope__letter">
                  {envelope.letter.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
              <div className="envelope__seal">♡</div>
            </div>
            <span className="envelope__label">
              {open ? envelope.openedLabel : envelope.closedLabel}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
