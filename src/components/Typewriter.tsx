"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  lines: string[];
  speed?: number;
  startDelay?: number;
  lineDelay?: number;
  onDone?: () => void;
  className?: string;
  cursor?: boolean;
}

export function Typewriter({
  lines,
  speed = 28,
  startDelay = 200,
  lineDelay = 350,
  onDone,
  className = "",
  cursor = true,
}: TypewriterProps) {
  const [renderedLines, setRenderedLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setRenderedLines([]);
    setDone(false);

    let cancelled = false;
    let lineIndex = 0;
    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeNextChar = () => {
      if (cancelled) return;
      if (lineIndex >= lines.length) {
        setDone(true);
        onDone?.();
        return;
      }

      const currentLine = lines[lineIndex];
      charIndex += 1;

      setRenderedLines((prev) => {
        const next = [...prev];
        next[lineIndex] = currentLine.slice(0, charIndex);
        return next;
      });

      if (charIndex >= currentLine.length) {
        lineIndex += 1;
        charIndex = 0;
        timeoutId = setTimeout(typeNextChar, lineDelay);
      } else {
        timeoutId = setTimeout(typeNextChar, speed);
      }
    };

    timeoutId = setTimeout(typeNextChar, startDelay);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [lines.join("\n"), speed, startDelay, lineDelay]);

  return (
    <span className={className}>
      {renderedLines.map((line, i) => (
        <span key={i} className="block">
          {line}
          {cursor && i === renderedLines.length - 1 && !done && (
            <span className="terminal-cursor">&nbsp;</span>
          )}
        </span>
      ))}
      {cursor && done && <span className="terminal-cursor">&nbsp;</span>}
    </span>
  );
}
