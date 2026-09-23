// ────────────────────────────────────────────────────────────
// EDIT ME: this is the one file you'll want to touch most.
// Every word on the site lives here. Nothing else needs to change
// if you just want to update text.
// ────────────────────────────────────────────────────────────

export const hero = {
  kicker: "a tiny internet corner for you",
  greeting: "Hey, my love.",
  sub: "Take your time. Scroll through this little world I made for you.",
  button: "Start our little story",
  hint: "scroll gently · there are things hidden along the way",
  navLabel: "for my honey",
  navRight: "a little website, made with too much love",
};

export interface Chapter {
  id: string;
  kicker: string;
  title: string;
  body: string[]; // paragraphs
  tags: [string, string];
  /** id of a hidden heart hidden in this chapter, if any */
  hiddenHeartId?: string;
}

export const chapters: Chapter[] = [
  {
    id: "begin",
    kicker: "A little world I made for you",
    title: "Somewhere between then and now, you became my favorite part.",
    body: ["So I made this instead of trying to fit everything I feel into one message."],
    tags: ["scroll slowly", "there's more"],
  },
  {
    id: "us",
    kicker: "A collection of little things",
    title: "Not a perfect story. Just ours.",
    body: [
      "The late conversations, random jokes, quiet moments, and ordinary days that became memories worth keeping.",
      "And yeah, we fight sometimes.",
      "There are nights when we just do not understand each other, when the words come out wrong and silence feels easier than trying.",
    ],
    tags: ["keep scrolling", "memory unlocked"],
    hiddenHeartId: "heart-1",
  },
  {
    id: "details",
    kicker: "The part I never want to forget",
    title: "It was never just the big moments.",
    body: [
      "It was your little habits, the way you make me laugh, the things you say without thinking, and all the tiny pieces of you that became important to me.",
      "Even on the days when we get frustrated with each other, I still care about what is underneath it all.",
    ],
    tags: ["look closer", "one more"],
    hiddenHeartId: "heart-2",
  },
  {
    id: "note",
    kicker: "If I could say it without getting shy",
    title: "Here is the part I actually wanted you to read.",
    body: [
      "I love you.",
      "Not because everything is always easy, and not because we always get it right.",
      "There are nights when we misunderstand each other, moments when one of us gets tired, and times when loving each other takes a little more patience.",
      "But even then, I still want to understand you instead of walking away.",
      "I still want to learn you, laugh with you, and make more little memories together.",
    ],
    tags: ["read slowly", "made for you"],
  },
  {
    id: "trust",
    kicker: "Something I don't say enough",
    title: "I know trust isn't something you should have to prove every day.",
    body: [
      "It's something we build little by little — by being honest, giving each other room to breathe, and choosing to understand before assuming the worst.",
      "I trust you, honey.",
      "I may still have things to learn, and I won't always handle everything perfectly, but I never want my fears to make you carry them for me.",
      "And about yesterday — I don't want it to sit between us. I'd rather we understand each other, learn from it, and keep moving forward together.",
    ],
    tags: ["just us", "no pressure"],
    hiddenHeartId: "heart-3",
  },
  {
    id: "next",
    kicker: "And this is not the ending",
    title: "This is only one chapter. There are plenty more pages left.",
    body: ["Thank you for being part of my life. I want to keep making the small moments count with you."],
    tags: ["one last thing", "open the letter"],
  },
];

export const envelope = {
  heading: "one last envelope",
  title: "I saved this part for the end.",
  description: "Because some things deserve a little pause before you read them.",
  closedLabel: "tap to open",
  openedLabel: "for you, always",
  letter: `My love,

I don't think I can properly explain how much the little things mean to me. Somehow, all those tiny conversations, laughs, random moments, and ordinary days became memories I want to keep.

And I know we are not perfect. We fight. We misunderstand each other. There are nights when neither of us really knows what to say, and sometimes we hurt each other without meaning to.

I don't want those moments to define us.

I want us to learn from them.

I want to keep choosing understanding over pride, honesty over assumptions, and love over trying to be right.

And about yesterday, I don't want it to become something that sits between us. I know trust is not something I can ask you to prove every day. It is something we build, little by little, by being honest, giving each other room to breathe, and choosing to understand before assuming the worst.

I trust you, honey.

I may still have things to learn, and I know I will not always handle everything perfectly, but I never want my fears to make you feel like you have to carry them for me.

I hope I keep getting to know every version of you.

I hope we keep laughing at stupid things, making new memories, and finding reasons to stay soft with each other.

Thank you for being you.

always,
me ♡`,
};

// Hidden hearts scattered through the story. Clicking one reveals its
// message and ticks the counter up. Keep messages short and warm.
export const hiddenHearts: Record<string, string> = {
  "heart-1": "You found one of the little things I hid here. ♡",
  "heart-2": "This one's just a quiet reminder that I notice everything about you.",
  "heart-3": "Last one. I really did hide these myself, one by one, thinking of you.",
};

export const footer = {
  text: "made by someone who really, really likes you ♡",
};

// ────────────────────────────────────────────────────────────
// Music. Drop your song at public/music/our-song.mp3 — the site
// works fine with the control disabled if the file isn't there yet.
// ────────────────────────────────────────────────────────────
export const musicConfig = {
  src: "/music/our-song.mp3",
  defaultVolume: 0.25, // 0 to 1
  fadeDurationMs: 2500,
};
