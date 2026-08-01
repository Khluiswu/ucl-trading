import { useEffect, useState } from "react";

/**
 * Resolves the first candidate URL that actually loads, or null if none do.
 *
 * The probe runs client-side only, so both server and first client render show
 * the caller's fallback and hydration always matches. Rendering an <img> with
 * an onError handler instead would be unreliable: a server-rendered image can
 * finish failing before React hydrates, and that error event is then lost.
 */
export function useImageWithFallback(sources: string[]): string | null {
  const [resolved, setResolved] = useState<string | null>(null);
  const key = sources.join("|");

  useEffect(() => {
    const candidates = key.split("|");
    let cancelled = false;

    const probe = (index: number) => {
      if (cancelled || index >= candidates.length) return;

      const image = new Image();
      image.onload = () => {
        if (!cancelled) setResolved(candidates[index]);
      };
      image.onerror = () => probe(index + 1);
      image.src = candidates[index];
    };

    probe(0);

    return () => {
      cancelled = true;
    };
  }, [key]);

  return resolved;
}
