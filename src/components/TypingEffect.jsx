import { useState, useEffect } from "react";

const WORDS = ["Frontend Developer", "React + Vite", "Python Developer", "Data Analyst", "Solution Creator"];

export default function TypingEffect() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = WORDS[wordIndex];
    let timeout;
    if (!deleting && displayed.length < current.length)
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    else if (!deleting && displayed.length === current.length)
      timeout = setTimeout(() => setDeleting(true), 1800);
    else if (deleting && displayed.length > 0)
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    else { setDeleting(false); setWordIndex((i) => (i + 1) % WORDS.length); }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <span style={{ color: "var(--color-accent)", fontWeight: 500 }}>
      {displayed}
      <span style={{ borderRight: "2px solid var(--color-accent)", marginLeft: 2, animation: "blink 1s step-end infinite" }} />
    </span>
  );
}
