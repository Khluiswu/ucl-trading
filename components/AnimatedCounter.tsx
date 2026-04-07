"use client";

import { useEffect, useState, useRef } from "react";

export default function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  // Start animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [started]);

  // Animate counting
  useEffect(() => {
    if (!started) return;

    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [started, target, duration]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {count}
      {suffix}
    </span>
  );
}