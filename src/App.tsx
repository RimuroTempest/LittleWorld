import { useState } from "react";
import Hero from "./components/Hero";
import StorySection from "./components/StorySection";
import Envelope from "./components/Envelope";
import Footer from "./components/Footer";
import PaperPlane from "./components/PaperPlane";
import Particles from "./components/Particles";
import MusicPlayer from "./components/MusicPlayer";
import HeartCounter from "./components/HeartCounter";
import { chapters, hiddenHearts } from "./data/story";

export default function App() {
  const [musicActive, setMusicActive] = useState(false);
  const [foundHearts, setFoundHearts] = useState<Set<string>>(new Set());

  const handleStart = () => {
    setMusicActive(true);
    document.getElementById("begin")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFoundHeart = (id: string) => {
    setFoundHearts((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  return (
    <>
      <Particles />
      <PaperPlane />
      <MusicPlayer activate={musicActive} />
      <HeartCounter found={foundHearts.size} total={Object.keys(hiddenHearts).length} />

      <Hero onStart={handleStart} />

      <main>
        {chapters.map((chapter, i) => (
          <StorySection
            key={chapter.id}
            chapter={chapter}
            index={i}
            foundHearts={foundHearts}
            onFoundHeart={handleFoundHeart}
          />
        ))}
        <Envelope />
      </main>

      <Footer />
    </>
  );
}
