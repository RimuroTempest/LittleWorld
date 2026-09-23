# our-little-world

A small, scroll-driven site made for one specific person.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

To build a static version you could host somewhere:

```bash
npm run build
npm run preview
```

## Where to edit things

- **All the words** — hero text, chapters, the letter, hidden-heart messages, footer — live in `src/data/story.ts`. That's the one file you'll likely open most.
- **Music** — drop your song at `public/music/our-song.mp3`. The filename and default volume are both set at the bottom of `src/data/story.ts` under `musicConfig`. If the file isn't there, the site still runs fine; the music button just shows disabled.
- **Colors / fonts / spacing** — tokens are defined once at the top of `src/styles/global.css` (`:root { ... }`). Change a value there and it updates everywhere.
- **Chapters** — add, remove, or reorder chapters by editing the `chapters` array in `src/data/story.ts`. Each chapter can optionally carry a `hiddenHeartId` to place one of the mini-game hearts in that section.

## Structure

```
src/
  components/   UI pieces (Hero, StorySection, Envelope, PaperPlane, MusicPlayer, ...)
  data/         story.ts — all editable content
  hooks/        small reusable hooks (scroll reveal, reduced motion)
  styles/       global.css — design tokens and base styles
  App.tsx       wires everything together
  main.tsx      React entry point
public/
  music/        put our-song.mp3 here
```

## Notes

- Respects `prefers-reduced-motion` throughout (particles, paper plane, and entrance animations turn off).
- No backend, no external APIs — everything runs locally with `npm run dev`.
- The hidden hearts persist only for the current visit (no tracking, no storage of any kind).
