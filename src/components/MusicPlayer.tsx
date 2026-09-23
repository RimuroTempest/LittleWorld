import { useEffect, useRef, useState } from "react";
import { musicConfig } from "../data/story";
import "./MusicPlayer.css";

interface MusicPlayerProps {
  /** flips to true once, right when the intro button is pressed */
  activate: boolean;
}

/**
 * A small, custom control — not a native <audio> element on screen.
 * If /public/music/our-song.mp3 doesn't exist, this quietly disables
 * itself instead of breaking the page.
 */
export default function MusicPlayer({ activate }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRaf = useRef<number | null>(null);
  const [available, setAvailable] = useState(true);
  const [playing, setPlaying] = useState(false);
  const hasStarted = useRef(false);

  // Fade the audio element's volume toward a target over `ms`.
  const fadeTo = (target: number, ms: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (fadeRaf.current) cancelAnimationFrame(fadeRaf.current);

    const start = audio.volume;
    const startTime = performance.now();

    const step = (now: number) => {
      const t = Math.min((now - startTime) / ms, 1);
      audio.volume = start + (target - start) * t;
      if (t < 1) {
        fadeRaf.current = requestAnimationFrame(step);
      }
    };
    fadeRaf.current = requestAnimationFrame(step);
  };

  // Start playback the first time `activate` becomes true.
  useEffect(() => {
    if (!activate || hasStarted.current || !available) return;
    const audio = audioRef.current;
    if (!audio) return;

    hasStarted.current = true;
    audio.volume = 0;
    audio
      .play()
      .then(() => {
        setPlaying(true);
        fadeTo(musicConfig.defaultVolume, musicConfig.fadeDurationMs);
      })
      .catch(() => {
        // Browser blocked it or file missing — fail quietly.
        setPlaying(false);
      });
  }, [activate, available]);

  // Gentle fade near the very end of the experience.
  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!hasStarted.current) return;
        if (entry.isIntersecting) {
          fadeTo(musicConfig.defaultVolume * 0.3, musicConfig.fadeDurationMs);
        } else if (playing) {
          fadeTo(musicConfig.defaultVolume, musicConfig.fadeDurationMs);
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || !available) return;

    if (playing) {
      fadeTo(0, 500);
      window.setTimeout(() => audio.pause(), 520);
      setPlaying(false);
    } else {
      hasStarted.current = true;
      audio.volume = 0;
      audio
        .play()
        .then(() => {
          setPlaying(true);
          fadeTo(musicConfig.defaultVolume, musicConfig.fadeDurationMs);
        })
        .catch(() => setAvailable(false));
    }
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src={musicConfig.src}
        loop
        preload="auto"
        onError={() => setAvailable(false)}
      />
      <button
        className={`music-player__button ${playing ? "is-playing" : ""} ${
          !available ? "is-disabled" : ""
        }`}
        onClick={toggle}
        disabled={!available}
        aria-label={
          !available ? "music unavailable" : playing ? "pause our song" : "play our song"
        }
        title={!available ? "add our-song.mp3 to enable" : "our song"}
      >
        <span className="music-player__bars" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
    </div>
  );
}
