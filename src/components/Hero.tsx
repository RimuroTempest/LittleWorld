import { hero } from "../data/story";
import "./Hero.css";

interface HeroProps {
  onStart: () => void;
}

export default function Hero({ onStart }: HeroProps) {
  return (
    <section className="hero" aria-label="Opening">
      <div className="hero__ring" aria-hidden="true" />
      <header className="hero__nav">
        <span className="hero__nav-left">
          <span className="hero__nav-heart" aria-hidden="true">
            ♡
          </span>
          {hero.navLabel}
        </span>
        <span className="hero__nav-right">{hero.navRight}</span>
      </header>

      <div className="hero__body">
        <p className="hero__kicker">{hero.kicker}</p>
        <h1 className="hero__title">{hero.greeting}</h1>
        <p className="hero__sub">{hero.sub}</p>
        <button className="hero__button" onClick={onStart}>
          {hero.button} <span aria-hidden="true">↓</span>
        </button>
      </div>

      <p className="hero__hint">{hero.hint}</p>
    </section>
  );
}
