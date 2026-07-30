import { useEffect, useRef, useState } from "react";

export function useTypewriterLines(
  lines,
  { charSpeed = 55, lineDelay = 250, startDelay = 300 } = {}
) {
  const [displayed, setDisplayed] = useState(() => lines.map(() => ""));
  const [activeLine, setActiveLine] = useState(0);
  const [done, setDone] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplayed(lines);
      setActiveLine(lines.length - 1);
      setDone(true);
      return;
    }

    let cancelled = false;
    let li = 0;
    let ci = 0;

    function typeChar() {
      if (cancelled) return;
      if (li >= lines.length) {
        setDone(true);
        return;
      }
      setActiveLine(li);
      const line = lines[li];
      if (ci <= line.length) {
        const chunk = line.slice(0, ci);
        setDisplayed((prev) => {
          const next = [...prev];
          next[li] = chunk;
          return next;
        });
        ci++;
        timeoutRef.current = setTimeout(typeChar, charSpeed);
      } else {
        li++;
        ci = 0;
        if (li >= lines.length) {
          setDone(true);
          setActiveLine(lines.length - 1);
          return;
        }
        timeoutRef.current = setTimeout(typeChar, lineDelay);
      }
    }

    timeoutRef.current = setTimeout(typeChar, startDelay);
    return () => {
      cancelled = true;
      clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { displayed, activeLine, done };
}