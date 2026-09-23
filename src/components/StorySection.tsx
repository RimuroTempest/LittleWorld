import type { Chapter } from "../data/story";
import { hiddenHearts } from "../data/story";
import { useReveal } from "../hooks/useReveal";
import HiddenCollectible from "./HiddenCollectible";
import "./StorySection.css";

interface StorySectionProps {
  chapter: Chapter;
  index: number;
  foundHearts: Set<string>;
  onFoundHeart: (id: string) => void;
}

export default function StorySection({
  chapter,
  index,
  foundHearts,
  onFoundHeart,
}: StorySectionProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="story-section" id={chapter.id}>
      <div
        ref={ref}
        className={`story-section__inner ${visible ? "is-visible" : ""}`}
      >
        {chapter.hiddenHeartId && (
          <HiddenCollectible
            message={hiddenHearts[chapter.hiddenHeartId]}
            found={foundHearts.has(chapter.hiddenHeartId)}
            onFound={() => onFoundHeart(chapter.hiddenHeartId!)}
            side={index % 2 === 0 ? "right" : "left"}
          />
        )}

        <p className="kicker">{chapter.kicker}</p>
        <h2 className="story-section__title">{chapter.title}</h2>
        <div className="story-section__body">
          {chapter.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="tags">
          {chapter.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
