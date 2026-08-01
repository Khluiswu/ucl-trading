"use client";

import { User } from "lucide-react";
import { useImageWithFallback } from "@/lib/useImageWithFallback";

const PORTRAIT_SOURCES = [
  "/insights/samuel-basi.jpg",
  "/insights/samuel-basi.png",
  "/insights/samuel-basi.webp",
];

const TRAFIGURA_SOURCES = [
  "/insights/trafigura.svg",
  "/insights/trafigura.png",
  "/insights/trafigura.webp",
  "/insights/trafigura.jpg",
];

/** Portrait of the interviewee, falling back to a neutral placeholder. */
export function SubjectPortrait({ className = "" }: { className?: string }) {
  const portrait = useImageWithFallback(PORTRAIT_SOURCES);

  if (!portrait) {
    return (
      <div
        className={`w-full aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 flex items-center justify-center ${className}`}
      >
        <User size={32} className="text-gray-700" />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- resolved at runtime with a placeholder fallback
    <img
      src={portrait}
      alt="Samuel Basi"
      className={`w-full aspect-[4/5] object-cover border border-gray-800 ${className}`}
    />
  );
}

/**
 * Trafigura's mark, used editorially to caption where Basi spent his career.
 * Trafigura is not a society partner, so this deliberately never appears in a
 * partnership context.
 */
export function TrafiguraMark() {
  const logo = useImageWithFallback(TRAFIGURA_SOURCES);

  return (
    <div className="flex items-center gap-2.5">
      {logo ? (
        // The supplied file is a 16:9 canvas with a square mark centred in it;
        // a square object-cover box trims the transparent side margins so the
        // mark sits tight against the caption.
        // eslint-disable-next-line @next/next/no-img-element -- resolved at runtime with a text-only fallback
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className="h-7 w-7 object-cover shrink-0"
        />
      ) : null}
      {/* The supplied mark is the circular "T" with no wordmark, so the name is
          always spelled out rather than relying on the logo to carry it. */}
      <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-gray-500 leading-tight">
        11 years at Trafigura
      </span>
    </div>
  );
}
